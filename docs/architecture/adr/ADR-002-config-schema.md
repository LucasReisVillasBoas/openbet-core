# ADR-002: ClientConfig como fonte unica de verdade

**Status:** Aceito
**Data:** 2025

---

## Contexto

Uma plataforma white-label precisa de um mecanismo para que diferentes operadores possam customizar a plataforma de formas diferentes. As opcoes classicas sao:

- **Feature flags em banco de dados** — requer infraestrutura, latencia, sincronizacao
- **Variaveis de ambiente por feature** — escala mal (dezenas de env vars por operador)
- **Branches por cliente** — divergencia de codigo, nenhum beneficio de monorepo
- **JSON de configuracao validado** — dados puros, versionados em git, validados em runtime

O projeto optou por JSON + Zod.

---

## Decisao

Toda customizacao possivel de um operador esta definida no `ClientConfigSchema` em `packages/config-schema`. Adicionar um cliente = criar um arquivo `clients/nome.config.json`. Sem codigo novo.

### O schema Zod real

```typescript
// packages/config-schema/src/schema.ts

export const ClientConfigSchema = z.object({
  brand: BrandSchema,       // id, name, slug, tagline, logoUrl, faviconUrl, supportEmail
  theme: ThemeSchema,       // colors (14 tokens), typography (fontFamily, fontFamilyMono, scaleBase)
  layout: LayoutSchema,     // sidebarWidth, headerHeight, betSlipWidth, borderRadius,
                            // sidebarPosition, sidebarBehavior, headerVariant,
                            // footerVariant, betslipPosition, mobileNav
  features: FeaturesSchema, // 20 feature flags boolean com defaults conservadores
  regional: RegionalSchema, // defaultLocale, supportedLocales, defaultCurrency,
                            // defaultOddsFormat, timezone, dateFormat
  remotes: z.record(z.string(), z.string().url()).default({}),
})
```

### Validacao em todas as fronteiras

```typescript
// packages/config-schema/src/index.ts

// Lanca ZodError com mensagem detalhada — use em startup, nunca em hot path
export function validateClientConfig(raw: unknown): ClientConfig {
  return ClientConfigSchema.parse(raw)
}

// Retorna discriminated union — use quando o erro precisa ser tratado
export function safeValidateClientConfig(
  raw: unknown
): { success: true; data: ClientConfig } | { success: false; error: ZodError } {
  const result = ClientConfigSchema.safeParse(raw)
  if (result.success) return { success: true, data: result.data }
  return { success: false, error: result.error }
}
```

### Onde a validacao ocorre

1. **Em runtime no shell** — `apps/shell/lib/client-config.ts` valida ao carregar
2. **No ClientConfigProvider** — ao restaurar do localStorage ou trocar de cliente
3. **Em CI** — `pnpm validate` roda `scripts/validate-configs.ts` contra todos os JSONs
4. **Em desenvolvimento** — erros Zod mostram o caminho exato do campo invalido

---

## Consequencias

**Positivas:**
- Adicionar um cliente nao requer toque em codigo — apenas criar um JSON
- Erros de configuracao sao detectados em CI, nao em producao
- O schema serve como documentacao viva do que e customizavel
- TypeScript infere `ClientConfig` automaticamente — zero casting manual
- Defaults conservadores no schema: feature nova com `default(false)` nao afeta clientes existentes

**Negativas / trade-offs:**
- Configuracao versionada em git — mudancas requerem PR (pode ser visto como positivo)
- Sem override em runtime via painel admin — mudancas de config requerem redeploy
- Clientes muito diferentes podem inflar o schema com campos muito especificos

---

## Defaults conservadores — por que importam

O `FeaturesSchema` define defaults para cada feature flag:

```typescript
export const FeaturesSchema = z.object({
  liveStreaming:       z.boolean().default(false),   // desligado por padrao
  cashOut:            z.boolean().default(true),    // ligado — feature core
  betBuilder:         z.boolean().default(false),   // desligado — feature premium
  statistics:         z.boolean().default(true),    // ligado — UX basica
  multiLanguage:      z.boolean().default(false),   // desligado — requer infra i18n
  darkMode:           z.boolean().default(true),    // ligado — expectativa do usuario
  pushNotifications:  z.boolean().default(false),   // desligado — requer permissao
  search:             z.boolean().default(true),    // ligado — UX basica
  favorites:          z.boolean().default(true),    // ligado — UX basica
  promotions:         z.boolean().default(true),    // ligado — comercialmente critico
  responsibleGambling: z.boolean().default(true),  // ligado — requisito regulatorio
  virtualSports:      z.boolean().default(false),   // desligado — produto separado
  sportsbook:         z.boolean().default(true),    // ligado — produto core
  liveBetting:        z.boolean().default(false),   // desligado — requer infra de odds
  casino:             z.boolean().default(false),   // desligado — produto separado
  liveCasino:         z.boolean().default(false),   // desligado — produto separado
  esports:            z.boolean().default(false),   // desligado — segmento especifico
  affiliates:         z.boolean().default(false),   // desligado — programa especifico
  vipProgram:         z.boolean().default(false),   // desligado — requer CRM
  socialLogin:        z.boolean().default(false),   // desligado — requer OAuth apps
})
```

A regra: ao adicionar uma feature nova ao schema, sempre usar `default(false)` (ou o comportamento mais conservador). Clientes existentes que nao tem o campo no JSON recebem o default automaticamente — sem quebras, sem migracao.

---

## Alternativas consideradas

**Feature flags em banco de dados (ex: LaunchDarkly, Unleash):** Poder de targeting granular (por usuario, por percentual), mas requer infraestrutura extra e latencia de rede. Overkill para o modelo white-label onde as features sao por operador, nao por usuario.

**Variaveis de ambiente:** Simples para configs pequenas, mas nao escala — 20 features × N clientes = N × 20 env vars. Sem validacao estrutural, sem defaults, sem tipagem.

**Branches por cliente:** Codigo especifico por cliente escondido em branches. Impossivel manter — divergencia inevitavel, sem reuso de bugfixes.

**Proteobuf / JSON Schema:** Validacao mais performatica, mas sem inferencia de tipos TypeScript nativa. Zod oferece validacao runtime + tipagem TypeScript em uma unica fonte de verdade.
