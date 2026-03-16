# Como Adicionar um Novo Operador

Este guia mostra como adicionar um operador ficticio chamado **MaxBet** ao OpenBet Core.

MaxBet tem identidade visual roxa, foca em apostas ao vivo e esports, e atende o mercado mexicano.

---

## Passo 1 — Criar o arquivo de configuracao

Copie um config existente como base:

```bash
cp /caminho/para/openbet-core/clients/elitebet.config.json \
   /caminho/para/openbet-core/clients/maxbet.config.json
```

Edite `clients/maxbet.config.json`:

```json
{
  "brand": {
    "id": "client-maxbet",
    "name": "MaxBet",
    "slug": "maxbet",
    "tagline": "Apostas ao vivo, resultados em tempo real",
    "logoUrl": "https://placehold.co/200x60/7C3AED/FFFFFF?text=MaxBet",
    "faviconUrl": "https://placehold.co/32x32/7C3AED/FFFFFF?text=M",
    "supportEmail": "suporte@maxbet.mx"
  },
  "theme": {
    "colors": {
      "primary": "#7C3AED",
      "primaryHover": "#6D28D9",
      "secondary": "#F59E0B",
      "background": "#0C0A1A",
      "backgroundCard": "#14102A",
      "surface": "#1E1839",
      "text": "#F5F3FF",
      "textMuted": "#A78BFA",
      "border": "#2D2550",
      "success": "#10B981",
      "error": "#EF4444",
      "warning": "#F59E0B",
      "oddsUp": "#10B981",
      "oddsDown": "#EF4444"
    },
    "typography": {
      "fontFamily": "Rajdhani, system-ui, sans-serif",
      "fontFamilyMono": "JetBrains Mono, ui-monospace, monospace",
      "scaleBase": 16
    }
  },
  "layout": {
    "sidebarWidth": 260,
    "headerHeight": 60,
    "betSlipWidth": 340,
    "borderRadius": "sm",
    "sidebarPosition": "left",
    "sidebarBehavior": "collapsible",
    "headerVariant": "full",
    "footerVariant": "simple",
    "betslipPosition": "sidebar-right",
    "mobileNav": "bottom"
  },
  "features": {
    "sportsbook": true,
    "liveBetting": true,
    "casino": false,
    "liveCasino": false,
    "esports": true,
    "cashOut": true,
    "betBuilder": false,
    "liveStreaming": true,
    "affiliates": false,
    "vipProgram": false,
    "responsibleGambling": true,
    "socialLogin": true,
    "statistics": true,
    "multiLanguage": true,
    "darkMode": true,
    "pushNotifications": true,
    "search": true,
    "favorites": true,
    "promotions": true,
    "virtualSports": false
  },
  "regional": {
    "defaultLocale": "es-MX",
    "supportedLocales": ["es-MX", "en-US"],
    "defaultCurrency": "MXN",
    "defaultOddsFormat": "decimal",
    "timezone": "America/Mexico_City",
    "dateFormat": "dd/MM/yyyy"
  },
  "remotes": {}
}
```

**Regras para os campos:**
- `brand.id` deve seguir o padrao `client-<slug>`
- `brand.slug` deve ser lowercase alphanumerico com hifens (`/^[a-z0-9-]+$/`)
- Todas as cores devem ser hex `#RRGGBB` — sem shorthand `#RGB`
- `regional.defaultCurrency` deve ter exatamente 3 caracteres (ISO 4217)
- `layout.borderRadius` deve ser um dos valores: `none`, `sm`, `md`, `lg`

---

## Passo 2 — Validar o config

```bash
pnpm validate
```

Este script (`scripts/validate-configs.ts`) valida todos os arquivos em `clients/` contra o `ClientConfigSchema`. Se algum campo estiver invalido, voce vera uma mensagem como:

```
client-maxbet: INVALID
  brand.slug: Slug must be lowercase alphanumeric with hyphens
  theme.colors.primary: Must be a valid hex color (#RRGGBB)
```

Corrija os erros e repita ate o script reportar:

```
client-grandbet: OK
client-elitebet: OK
client-maxbet: OK

All configs valid.
```

---

## Passo 3 — Registrar o cliente no shell

Edite `apps/shell/lib/client-config.ts`:

```typescript
// Adicione o novo ID ao tipo
export type ClientId = 'client-grandbet' | 'client-elitebet' | 'client-maxbet'

const DEFAULT_CLIENT_ID: ClientId = 'client-grandbet'

// Adicione o loader dinamico
const CLIENT_CONFIGS: Record<ClientId, () => Promise<unknown>> = {
  'client-grandbet': () => import('../../../clients/grandbet.config.json'),
  'client-elitebet': () => import('../../../clients/elitebet.config.json'),
  'client-maxbet':   () => import('../../../clients/maxbet.config.json'),
}
```

Edite tambem `apps/shell/lib/client-config-context.tsx` (para o ThemeToggle funcionar):

```typescript
export type ClientId = 'client-grandbet' | 'client-elitebet' | 'client-maxbet'

const CLIENT_CONFIGS: Record<ClientId, unknown> = {
  'client-grandbet': grandbetConfig,
  'client-elitebet': elitebetConfig,
  'client-maxbet':   maxbetConfig,    // importe no topo do arquivo
}
```

---

## Passo 4 — Ativar via variavel de ambiente

Para usar o MaxBet localmente, edite `apps/shell/.env.local`:

```bash
NEXT_PUBLIC_CLIENT_ID=client-maxbet
```

Reinicie o shell:

```bash
pnpm --filter=shell dev
```

O header deve exibir o nome MaxBet, as cores roxas devem estar aplicadas e o ThemeToggle deve mostrar as opcoes corretas.

---

## Checklist final

Antes de abrir um PR com um novo cliente:

- [ ] `clients/maxbet.config.json` criado com todos os campos obrigatorios
- [ ] `pnpm validate` passa sem erros
- [ ] `apps/shell/lib/client-config.ts` — ClientId type atualizado, loader adicionado
- [ ] `apps/shell/lib/client-config-context.tsx` — ClientId type e CLIENT_CONFIGS atualizados
- [ ] Testado localmente com `NEXT_PUBLIC_CLIENT_ID=client-maxbet`
- [ ] Visual verificado no browser — cores, tipografia, layout
- [ ] ThemeToggle alterna corretamente entre clientes
- [ ] `pnpm build` passa sem erros
- [ ] `pnpm typecheck` passa sem erros
- [ ] `pnpm lint` passa sem erros

---

## Consideracoes para producao

Para deploy na Vercel com o novo cliente:

1. **Configure a variavel de ambiente** `NEXT_PUBLIC_CLIENT_ID=client-maxbet` no projeto da Vercel correspondente ao MaxBet
2. **Se o MaxBet tiver um remote diferente**, adicione a URL no campo `remotes` do config JSON e atualize o `remote-registry.ts`
3. **Deploy do sportsbook primeiro** (ou de qualquer remote configurado no MaxBet), depois o shell

Veja o guia completo em [Deploy na Vercel](./deploy.md).
