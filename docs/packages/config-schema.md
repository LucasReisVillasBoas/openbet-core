# @openbet/config-schema

## Proposito

Fonte unica de verdade de tudo que um operador pode configurar na plataforma. Define o contrato entre operadores (arquivos JSON em `clients/`) e a plataforma (shell, sportsbook, theme-engine).

**Regras deste pacote:**
- Dependencia permitida: **apenas `zod`**
- Proibido: React, DOM, Next.js, qualquer lib de UI
- Proibido: logica de aplicacao, acesso ao DOM, side effects
- E um pacote puro de definicao de tipos e validacao

---

## Schema completo do ClientConfig

### BrandSchema

```typescript
export const BrandSchema = z.object({
  /** Identificador unico — usado para analytics, logging e roteamento multi-tenant */
  id: z.string().min(1),
  /** Nome de exibicao do operador na UI */
  name: z.string().min(1),
  /** Tagline de marketing curta para areas hero e metadata */
  tagline: z.string().optional(),
  /**
   * Slug URL-safe: alfanumerico minusculo + hifens.
   * Usado como prefixo para CSS scoping e eventos de analytics.
   */
  slug: z.string().regex(/^[a-z0-9-]+$/),
  /** URL absoluta do logo do operador (SVG ou PNG recomendado) */
  logoUrl: z.string().url(),
  /** URL absoluta do favicon */
  faviconUrl: z.string().url().optional(),
  /** Email de suporte ao cliente */
  supportEmail: z.string().email().optional(),
})
```

### ThemeColorsSchema

14 tokens semanticos de cor. Todos validados como hex `#RRGGBB`:

```typescript
export const ThemeColorsSchema = z.object({
  primary:         ColorSchema,  // botoes, links, estados ativos
  primaryHover:    ColorSchema,  // primaria em hover/focus
  secondary:       ColorSchema,  // acentos, badges
  background:      ColorSchema,  // fundo da pagina
  backgroundCard:  ColorSchema,  // fundo de cards e paineis
  surface:         ColorSchema,  // overlays, modais, dropdowns
  text:            ColorSchema,  // texto padrao do corpo
  textMuted:       ColorSchema,  // timestamps, labels
  border:          ColorSchema,  // bordas padrao
  success:         ColorSchema,  // apostas ganhas, confirmacoes
  error:           ColorSchema,  // acoes falhadas, validacao
  warning:         ColorSchema,  // alertas, mercados suspensos
  oddsUp:          ColorSchema,  // indicador de alta de odds
  oddsDown:        ColorSchema,  // indicador de queda de odds
})
```

O `ColorSchema` valida o regex `/^#[0-9A-Fa-f]{6}$/` — qualquer string que nao seja um hex `#RRGGBB` de 6 digitos e rejeitada.

### TypographySchema

```typescript
export const TypographySchema = z.object({
  fontFamily:     z.string().default('Inter, system-ui, sans-serif'),
  fontFamilyMono: z.string().default('JetBrains Mono, ui-monospace, monospace'),
  scaleBase:      z.number().min(12).max(20).default(16),  // px
})
```

### LayoutSchema

```typescript
export const LayoutSchema = z.object({
  sidebarWidth:    z.number().min(200).max(400).default(280),   // px
  headerHeight:    z.number().min(48).max(120).default(64),     // px
  betSlipWidth:    z.number().min(280).max(480).default(360),   // px
  borderRadius:    z.enum(['none', 'sm', 'md', 'lg']).default('md'),
  sidebarPosition: z.enum(['left', 'right', 'hidden']).default('left'),
  sidebarBehavior: z.enum(['fixed', 'collapsible', 'hover']).default('fixed'),
  headerVariant:   z.enum(['minimal', 'full', 'floating']).default('full'),
  footerVariant:   z.enum(['simple', 'expanded', 'hidden']).default('expanded'),
  betslipPosition: z.enum(['sidebar-right', 'bottom-drawer', 'floating']).default('sidebar-right'),
  mobileNav:       z.enum(['bottom', 'top', 'drawer']).default('bottom'),
})
```

### FeaturesSchema

20 feature flags boolean com defaults conservadores:

```typescript
export const FeaturesSchema = z.object({
  liveStreaming:       z.boolean().default(false),
  cashOut:            z.boolean().default(true),
  betBuilder:         z.boolean().default(false),
  statistics:         z.boolean().default(true),
  multiLanguage:      z.boolean().default(false),
  darkMode:           z.boolean().default(true),
  pushNotifications:  z.boolean().default(false),
  search:             z.boolean().default(true),
  favorites:          z.boolean().default(true),
  promotions:         z.boolean().default(true),
  responsibleGambling: z.boolean().default(true),
  virtualSports:      z.boolean().default(false),
  sportsbook:         z.boolean().default(true),
  liveBetting:        z.boolean().default(false),
  casino:             z.boolean().default(false),
  liveCasino:         z.boolean().default(false),
  esports:            z.boolean().default(false),
  affiliates:         z.boolean().default(false),
  vipProgram:         z.boolean().default(false),
  socialLogin:        z.boolean().default(false),
})
```

### RegionalSchema

```typescript
export const RegionalSchema = z.object({
  defaultLocale:      z.string().default('en-GB'),        // BCP 47
  supportedLocales:   z.array(z.string()).min(1).default(['en-GB']),
  defaultCurrency:    z.string().length(3).default('GBP'), // ISO 4217
  defaultOddsFormat:  z.enum(['decimal', 'fractional', 'american', 'hongkong']).default('decimal'),
  timezone:           z.string().default('UTC'),            // IANA timezone
  dateFormat:         z.string().default('dd/MM/yyyy'),     // Unicode CLDR tokens
})
```

### ClientConfigSchema (raiz)

```typescript
export const ClientConfigSchema = z.object({
  brand:    BrandSchema,
  theme:    ThemeSchema,     // { colors, typography }
  layout:   LayoutSchema,
  features: FeaturesSchema,
  regional: RegionalSchema,
  remotes:  z.record(z.string(), z.string().url()).default({}),
})
```

---

## Como usar

### Importar e validar (lancando excecao)

```typescript
import { validateClientConfig } from '@openbet/config-schema'
import raw from '../../clients/grandbet.config.json'

const config = validateClientConfig(raw)
// config e ClientConfig — totalmente tipado
console.log(config.brand.name)    // "GrandBet"
console.log(config.theme.colors.primary)  // "#1A7A4A"
```

### Importar e validar com tratamento de erro

```typescript
import { safeValidateClientConfig } from '@openbet/config-schema'

const result = safeValidateClientConfig(raw)
if (!result.success) {
  console.error(result.error.flatten())
  return
}
// result.data e ClientConfig
applyTheme(result.data)
```

### Usar os tipos sem runtime

```typescript
import type { ClientConfig, ThemeColors, Features } from '@openbet/config-schema'

function applyTheme(config: ClientConfig): void {
  const { primary } = config.theme.colors
  // ...
}
```

---

## Como adicionar um novo campo ao schema

1. **Adicione ao schema em `packages/config-schema/src/schema.ts`** com tipo, default e descricao:

   ```typescript
   export const BrandSchema = z.object({
     // ... campos existentes ...
     /** URL da pagina de termos de uso */
     termsUrl: z.string().url().optional(),
   })
   ```

2. **Atualize `types.ts`** se o campo nao e inferido automaticamente (raramente necessario — `z.infer` cuida disso).

3. **Atualize os JSONs dos clientes** em `clients/` para incluir o novo campo se ele nao tem default.

4. **Rebuilde:**
   ```bash
   pnpm --filter=@openbet/config-schema build
   ```

5. **Valide todos os configs:**
   ```bash
   pnpm validate
   ```

6. **Documente** o novo campo neste arquivo e no `CLAUDE.md` do pacote.

---

## Exemplo de config valida — GrandBet

```json
{
  "brand": {
    "id": "client-grandbet",
    "name": "GrandBet",
    "slug": "grandbet",
    "tagline": "Aposte com inteligencia",
    "logoUrl": "https://placehold.co/200x60/1A7A4A/FFFFFF?text=GrandBet",
    "faviconUrl": "https://placehold.co/32x32/1A7A4A/FFFFFF?text=G",
    "supportEmail": "suporte@grandbet.com"
  },
  "theme": {
    "colors": {
      "primary": "#1A7A4A",
      "primaryHover": "#15623C",
      "secondary": "#F59E0B",
      "background": "#0F1923",
      "backgroundCard": "#1A2535",
      "surface": "#243447",
      "text": "#F1F5F9",
      "textMuted": "#94A3B8",
      "border": "#2D3F55",
      "success": "#22C55E",
      "error": "#EF4444",
      "warning": "#F59E0B",
      "oddsUp": "#22C55E",
      "oddsDown": "#EF4444"
    },
    "typography": {
      "fontFamily": "Inter, system-ui, sans-serif",
      "fontFamilyMono": "JetBrains Mono, ui-monospace, monospace",
      "scaleBase": 16
    }
  },
  "layout": {
    "sidebarWidth": 280,
    "headerHeight": 64,
    "betSlipWidth": 360,
    "borderRadius": "md",
    "sidebarPosition": "left",
    "sidebarBehavior": "fixed",
    "headerVariant": "full",
    "footerVariant": "expanded",
    "betslipPosition": "sidebar-right",
    "mobileNav": "bottom"
  },
  "features": {
    "sportsbook": true,
    "liveBetting": true,
    "casino": true,
    "liveCasino": true,
    "esports": false,
    "cashOut": true,
    "betBuilder": true,
    "liveStreaming": false,
    "affiliates": true,
    "vipProgram": true,
    "responsibleGambling": true,
    "socialLogin": false,
    "statistics": true,
    "multiLanguage": false,
    "darkMode": true,
    "pushNotifications": false,
    "search": true,
    "favorites": true,
    "promotions": true,
    "virtualSports": false
  },
  "regional": {
    "defaultLocale": "pt-BR",
    "supportedLocales": ["pt-BR", "en-US"],
    "defaultCurrency": "BRL",
    "defaultOddsFormat": "decimal",
    "timezone": "America/Sao_Paulo",
    "dateFormat": "dd/MM/yyyy"
  },
  "remotes": {}
}
```
