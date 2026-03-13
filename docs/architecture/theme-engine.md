# Sistema de Temas — CSS Custom Properties

## O contrato

O `ThemeEngine` estabelece um contrato entre operadores e componentes: operadores definem valores (via `ClientConfig`), componentes consomem referencias (via `var(--nome-da-var)`). Nenhum componente conhece o valor real de nenhuma cor.

Isso significa que o mesmo componente `OddsButton` exibe verde (`#1A7A4A`) quando o operador e GrandBet e indigo (`#4F46E5`) quando e EliteBet — sem receber props de cor, sem consultar Context de tema, sem if/else.

---

## Lista completa das CSS vars geradas

`buildCSSVars(config)` converte um `ClientConfig` validado em 22 CSS Custom Properties:

### Cores (14 tokens semanticos)

| CSS Custom Property | Campo no config | Descricao |
|---|---|---|
| `--color-primary` | `theme.colors.primary` | Cor de marca principal — botoes, links, estados ativos |
| `--color-primary-hover` | `theme.colors.primaryHover` | Cor primaria em hover/focus |
| `--color-secondary` | `theme.colors.secondary` | Cor de marca secundaria — acentos, badges |
| `--color-background` | `theme.colors.background` | Fundo da pagina |
| `--color-background-card` | `theme.colors.backgroundCard` | Fundo de cards e paineis |
| `--color-surface` | `theme.colors.surface` | Superficie para overlays, modais, dropdowns |
| `--color-text` | `theme.colors.text` | Cor padrao do texto do corpo |
| `--color-text-muted` | `theme.colors.textMuted` | Texto secundario — timestamps, labels |
| `--color-border` | `theme.colors.border` | Cor padrao de bordas |
| `--color-success` | `theme.colors.success` | Estado de sucesso — apostas ganhas, confirmacoes |
| `--color-error` | `theme.colors.error` | Estado de erro — acoes falhadas, validacao |
| `--color-warning` | `theme.colors.warning` | Estado de aviso — alertas, mercados suspensos |
| `--color-odds-up` | `theme.colors.oddsUp` | Indicador de alta de odds |
| `--color-odds-down` | `theme.colors.oddsDown` | Indicador de queda de odds |

### Tipografia (3 tokens)

| CSS Custom Property | Campo no config | Descricao |
|---|---|---|
| `--font-family` | `theme.typography.fontFamily` | Stack de fonte primaria |
| `--font-family-mono` | `theme.typography.fontFamilyMono` | Fonte monoespaco para odds, contadores |
| `--font-size-base` | `theme.typography.scaleBase` | Tamanho base em px — todos os rem escalam a partir daqui |

### Layout (4 tokens)

| CSS Custom Property | Campo no config | Descricao |
|---|---|---|
| `--layout-sidebar-width` | `layout.sidebarWidth` | Largura da sidebar em px |
| `--layout-header-height` | `layout.headerHeight` | Altura do header em px |
| `--layout-bet-slip-width` | `layout.betSlipWidth` | Largura do painel de apostas em px |
| `--layout-border-radius` | `layout.borderRadius` | Border-radius global (enum para px) |

O enum `borderRadius` e convertido para valores concretos:
- `none` → `0px`
- `sm` → `4px`
- `md` → `8px`
- `lg` → `16px`
- `full` → `9999px`

### Marca (2 tokens)

| CSS Custom Property | Campo no config | Descricao |
|---|---|---|
| `--brand-name` | `brand.name` | Nome do operador (para uso em CSS content ou attr) |
| `--brand-slug` | `brand.slug` | Slug URL-safe do operador |

---

## Como `ThemeEngine.apply()` funciona internamente

```typescript
// packages/theme-engine/src/engine.ts

apply(config: ClientConfig): void {
  const el = this.resolveTarget()   // document.documentElement por padrao
  const vars = buildCSSVars(config) // funcao pura — sem efeitos

  // 1. Injeta cada CSS Custom Property individualmente
  for (const [property, value] of Object.entries(vars)) {
    el.style.setProperty(property, value)
  }

  // 2. Rastreia quais vars esta instancia aplicou (para reset() preciso)
  this._appliedVars = Object.keys(vars)

  // 3. Atributos de dados para scoping CSS e estilos condicionais
  el.setAttribute('data-theme', config.features.darkMode ? 'dark' : 'light')
  el.setAttribute('data-client', config.brand.slug)

  this._config = config
}
```

**`buildCSSVars(config)` — a funcao pura:**

```typescript
// packages/theme-engine/src/css-vars.ts

const RADIUS_MAP: Record<string, string> = {
  none: '0px', sm: '4px', md: '8px', lg: '16px', full: '9999px',
}

export function buildCSSVars(config: ClientConfig): Record<string, string> {
  const { theme, layout, brand } = config
  const { colors, typography } = theme

  return {
    '--color-primary':           colors.primary,
    '--color-primary-hover':     colors.primaryHover,
    '--color-secondary':         colors.secondary,
    '--color-background':        colors.background,
    '--color-background-card':   colors.backgroundCard,
    '--color-surface':           colors.surface,
    '--color-text':              colors.text,
    '--color-text-muted':        colors.textMuted,
    '--color-border':            colors.border,
    '--color-success':           colors.success,
    '--color-error':             colors.error,
    '--color-warning':           colors.warning,
    '--color-odds-up':           colors.oddsUp,
    '--color-odds-down':         colors.oddsDown,
    '--font-family':             typography.fontFamily,
    '--font-family-mono':        typography.fontFamilyMono,
    '--font-size-base':          `${typography.scaleBase}px`,
    '--layout-sidebar-width':    `${layout.sidebarWidth}px`,
    '--layout-header-height':    `${layout.headerHeight}px`,
    '--layout-bet-slip-width':   `${layout.betSlipWidth}px`,
    '--layout-border-radius':    RADIUS_MAP[layout.borderRadius] ?? '8px',
    '--brand-name':              brand.name,
    '--brand-slug':              brand.slug,
  }
}
```

**Propriedades do target apos `apply()`:**

```html
<html
  data-theme="dark"
  data-client="grandbet"
  style="
    --color-primary: #1A7A4A;
    --color-primary-hover: #15623C;
    --color-secondary: #F59E0B;
    --color-background: #0F1923;
    --color-background-card: #1A2535;
    --color-surface: #243447;
    --color-text: #F1F5F9;
    --color-text-muted: #94A3B8;
    --color-border: #2D3F55;
    --color-success: #22C55E;
    --color-error: #EF4444;
    --color-warning: #F59E0B;
    --color-odds-up: #22C55E;
    --color-odds-down: #EF4444;
    --font-family: Inter, system-ui, sans-serif;
    --font-family-mono: JetBrains Mono, ui-monospace, monospace;
    --font-size-base: 16px;
    --layout-sidebar-width: 280px;
    --layout-header-height: 64px;
    --layout-bet-slip-width: 360px;
    --layout-border-radius: 8px;
    --brand-name: GrandBet;
    --brand-slug: grandbet;
  "
>
```

---

## Por que CSS vars e nao React Context ou props

**Alternativa: React Context**

```tsx
// NAO feito — por que nao?
const ThemeContext = createContext({ primary: '#1A7A4A' })
const { primary } = useTheme()
// style={{ background: primary }}
```

Problemas:
- O remote MF nao tem acesso ao Context do shell (contextos nao cruzam boundaries de Module Federation)
- Cada componente precisaria de um `useTheme()` — acoplamento em todos os niveis
- SSR exige serializar o Context do servidor para o cliente

**Alternativa: props de tema**

```tsx
// NAO feito — por que nao?
<OddsButton primaryColor="#1A7A4A" hoverColor="#15623C" />
```

Problemas:
- 14 cores × todos os componentes = interface impossivel de manter
- Componentes aninhados exigem prop drilling ou Context
- Ainda nao funciona entre Shell e Remote MF

**Por que CSS vars:**
- Nativas do browser — zero overhead de framework
- Cruzam qualquer boundary: MF remotes, iframes, shadow DOM, Web Components
- Mudam instantaneamente com `setProperty` — sem re-render de React
- Cascadeiam automaticamente para todos os descendentes
- Sao inspecionaveis no DevTools diretamente no `:root`

---

## Como trocar tema em runtime sem reload

O `ThemeToggle` demonstra a troca em tempo real:

```typescript
// apps/shell/lib/client-config-context.tsx

export function useSetClient(): (clientId: ClientId) => void {
  const ctx = useContext(ClientConfigContext)

  return (clientId: ClientId) => {
    const raw = CLIENT_CONFIGS[clientId]
    const result = ClientConfigSchema.safeParse(raw)

    if (!result.success) return

    themeEngine.apply(result.data)      // 1. atualiza CSS vars no :root
    ctx.setConfig(result.data)          // 2. atualiza React state (re-render)
    localStorage.setItem(LS_KEY, clientId)  // 3. persiste escolha
  }
}
```

**O que acontece no browser:**

1. Usuario clica no `ThemeToggle`
2. `useSetClient()` chama `themeEngine.apply(elitebetConfig)`
3. 22 chamadas `el.style.setProperty(prop, value)` no `:root`
4. O browser recalcula CSS para todos os elementos que usam essas vars
5. A UI toda muda visualmente — incluindo o sportsbook remote
6. Zero reloads, zero SSR, zero network requests

**Persistencia:** O `ClientId` selecionado e salvo em `localStorage` com a chave `openbet-client`. No proximo carregamento, o `ClientConfigProvider` le o storage e restaura o tema selecionado antes do primeiro render.

---

## A regra das excecoes

**Regra:** Nenhuma cor literal em nenhum componente.

**Excecao valida:** Quando a cor de contraste sobre uma cor dinamica precisa ser fixada. Exemplo classico: texto branco sobre o badge de cor primaria.

```tsx
// apps/shell/components/ThemeToggle.tsx
<span
  style={{
    background: 'var(--color-primary)',
    color: '#fff',            // excecao aceita — sempre branco sobre cor primaria
    borderRadius: '4px',
    padding: '2px 7px',
  }}
>
  {currentName}
</span>
```

Por que esta excecao e aceitavel: o `ClientConfigSchema` exige que `primary` seja um hex `#RRGGBB` — o operador escolhe uma cor de destaque, e texto branco sobre ela e a escolha de contraste universal. Adicionar `textOnPrimary` ao schema seria over-engineering para este caso.

**Regra para decidir:** Se a cor e invariante em relacao ao tema (ex: sempre branco), ela pode ser literal. Se poderia mudar com o tema, ela deve ser uma CSS var.
