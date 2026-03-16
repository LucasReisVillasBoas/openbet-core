# @openbet/theme-engine

## Proposito

Consumir um `ClientConfig` validado e aplicar a identidade visual completa do operador em runtime via CSS Custom Properties. Trocar de tema = chamar `themeEngine.apply(novoConfig)`.

**Regras deste pacote:**
- Dependencia permitida: **apenas `@openbet/config-schema`**
- Proibido: React, Vue, Angular, qualquer framework de UI
- Proibido: gerar CSS classes ou tags `<style>` — apenas CSS Custom Properties via `setProperty`
- Proibido: tocar o DOM na importacao — acesso e lazy, apenas em `apply()`

---

## API

### `ThemeEngine` — classe

```typescript
class ThemeEngine {
  constructor(target?: HTMLElement)
  apply(config: ClientConfig): void
  getConfig(): ClientConfig | null
  reset(): void
}
```

**`constructor(target?: HTMLElement)`**

Cria uma instancia do ThemeEngine. Se `target` nao for fornecido, `document.documentElement` (`:root`) e usado na primeira chamada a `apply()`. Passar `target` e obrigatorio em ambientes sem DOM global (SSR, Node.js, testes com jsdom).

```typescript
// Singleton — usa :root automaticamente
import { themeEngine } from '@openbet/theme-engine'

// Instancia isolada — util em testes ou iframes
const engine = new ThemeEngine(iframeDocument.documentElement)
```

**`apply(config: ClientConfig): void`**

Aplica o tema do `ClientConfig` ao target. O que acontece internamente:

1. Chama `buildCSSVars(config)` — funcao pura, sem efeitos
2. Itera sobre as 22 vars e chama `el.style.setProperty(prop, value)` para cada uma
3. Rastreia as vars aplicadas em `this._appliedVars` para `reset()` preciso
4. Seta `data-theme="dark"` ou `data-theme="light"` no target
5. Seta `data-client="<slug>"` no target
6. Loga no console com as informacoes do cliente e quantidade de vars aplicadas

E seguro chamar `apply()` multiplas vezes — substitui o tema anterior sem acumular vars.

**`getConfig(): ClientConfig | null`**

Retorna o `ClientConfig` da ultima chamada a `apply()`, ou `null` se `apply()` ainda nao foi chamado.

**`reset(): void`**

Remove todas as CSS Custom Properties que foram aplicadas por esta instancia e limpa os atributos `data-theme` e `data-client`. Apos `reset()`, o elemento retorna ao estado que estava antes da primeira chamada a `apply()`.

---

### `themeEngine` — singleton exportado

```typescript
export const themeEngine = new ThemeEngine()
```

Instancia pre-construida que targeta `document.documentElement`. E esta que apps devem usar em quase todos os casos. O DOM nao e tocado na importacao — apenas quando `apply()` e chamado.

---

### `buildCSSVars(config)` — funcao pura

```typescript
function buildCSSVars(config: ClientConfig): Record<string, string>
```

Converte um `ClientConfig` em um mapa plano de CSS Custom Property → valor. Sem acesso ao DOM, sem side effects. Util para inspecao, testes e implementacoes customizadas.

```typescript
import { buildCSSVars } from '@openbet/theme-engine'
import { validateClientConfig } from '@openbet/config-schema'
import raw from '../../clients/grandbet.config.json'

const config = validateClientConfig(raw)
const vars = buildCSSVars(config)
// {
//   '--color-primary': '#1A7A4A',
//   '--font-family': 'Inter, system-ui, sans-serif',
//   '--layout-border-radius': '8px',
//   ...
// }
```

---

## Lista de todas as CSS vars geradas

As vars abaixo sao geradas por `buildCSSVars()` em `packages/theme-engine/src/css-vars.ts` e aplicadas ao `:root` pelo metodo `apply()`.

### Cores (14 vars)

| CSS Custom Property | ClientConfig source | Exemplo (GrandBet) | Exemplo (EliteBet) |
|---|---|---|---|
| `--color-primary` | `theme.colors.primary` | `#1A7A4A` | `#4F46E5` |
| `--color-primary-hover` | `theme.colors.primaryHover` | `#15623C` | `#4338CA` |
| `--color-secondary` | `theme.colors.secondary` | `#F59E0B` | `#EC4899` |
| `--color-background` | `theme.colors.background` | `#0F1923` | `#0D0F1A` |
| `--color-background-card` | `theme.colors.backgroundCard` | `#1A2535` | `#161929` |
| `--color-surface` | `theme.colors.surface` | `#243447` | `#1E2235` |
| `--color-text` | `theme.colors.text` | `#F1F5F9` | `#F8FAFC` |
| `--color-text-muted` | `theme.colors.textMuted` | `#94A3B8` | `#A0AABF` |
| `--color-border` | `theme.colors.border` | `#2D3F55` | `#252A40` |
| `--color-success` | `theme.colors.success` | `#22C55E` | `#10B981` |
| `--color-error` | `theme.colors.error` | `#EF4444` | `#F43F5E` |
| `--color-warning` | `theme.colors.warning` | `#F59E0B` | `#FBBF24` |
| `--color-odds-up` | `theme.colors.oddsUp` | `#22C55E` | `#10B981` |
| `--color-odds-down` | `theme.colors.oddsDown` | `#EF4444` | `#F43F5E` |

### Tipografia (3 vars)

| CSS Custom Property | ClientConfig source | Exemplo (GrandBet) | Exemplo (EliteBet) |
|---|---|---|---|
| `--font-family` | `theme.typography.fontFamily` | `Inter, system-ui, sans-serif` | `Outfit, system-ui, sans-serif` |
| `--font-family-mono` | `theme.typography.fontFamilyMono` | `JetBrains Mono, ui-monospace, monospace` | `Fira Code, ui-monospace, monospace` |
| `--font-size-base` | `theme.typography.scaleBase` (em px) | `16px` | `16px` |

### Layout (4 vars)

| CSS Custom Property | ClientConfig source | Exemplo (GrandBet) | Exemplo (EliteBet) |
|---|---|---|---|
| `--layout-sidebar-width` | `layout.sidebarWidth` (em px) | `280px` | `280px` |
| `--layout-header-height` | `layout.headerHeight` (em px) | `64px` | `64px` |
| `--layout-bet-slip-width` | `layout.betSlipWidth` (em px) | `360px` | `360px` |
| `--layout-border-radius` | `layout.borderRadius` (enum → px via RADIUS_MAP) | `8px` (md) | `16px` (lg) |

O `layout.borderRadius` aceita os valores enum `none`, `sm`, `md`, `lg`, `full`, mapeados para `0px`, `4px`, `8px`, `16px`, `9999px` respectivamente.

### Marca (2 vars)

| CSS Custom Property | ClientConfig source | Exemplo (GrandBet) | Exemplo (EliteBet) |
|---|---|---|---|
| `--brand-name` | `brand.name` | `GrandBet` | `EliteBet` |
| `--brand-slug` | `brand.slug` | `grandbet` | `elitebet` |

---

## CSS vars dinamicas (definidas por componentes, NAO pelo ThemeEngine)

Alem das 23 vars acima (gerenciadas pelo `ThemeEngine`), o shell define duas vars dinamicas diretamente no `document.documentElement` via `style.setProperty`. Essas vars refletem o estado atual de componentes colapsaveis e sao usadas pelo layout da pagina para ajuste de padding responsivo.

| CSS Custom Property | Componente que define | Valores possiveis |
|---|---|---|
| `--sidebar-current-width` | `SportsSidebar` | `220px` (expandido) / `64px` (colapsado) |
| `--betslip-current-width` | `BetSlipPanel` | `320px` (expandido) / `0px` (colapsado) |

**Como sao usadas:** O `page.tsx` do shell usa essas vars para calcular o padding do conteudo central:

```tsx
// Exemplo conceitual — o conteudo se ajusta ao espaco disponivel
paddingLeft: 'calc(var(--sidebar-current-width) + 24px)'
paddingRight: 'calc(var(--betslip-current-width) + 24px)'
```

**Por que NAO estao no ThemeEngine:** Essas vars mudam em resposta a interacoes do usuario (clicar no botao de colapso), nao a troca de operador. O ThemeEngine gerencia identidade visual por operador — vars que mudam por comportamento de UI sao responsabilidade dos componentes que as controlam.

---

## Como usar em React

O padrao recomendado para Next.js App Router (como o shell implementa):

```tsx
// components/ThemeProvider.tsx
'use client'

import { useEffect } from 'react'
import { themeEngine } from '@openbet/theme-engine'
import type { ClientConfig } from '@openbet/config-schema'

interface ThemeProviderProps {
  config: ClientConfig
  children: React.ReactNode
}

export function ThemeProvider({ config, children }: ThemeProviderProps) {
  useEffect(() => {
    themeEngine.apply(config)
  }, [config])

  return <>{children}</>
}
```

```tsx
// app/layout.tsx (server component)
import { getClientConfig } from '@/lib/client-config'
import { ThemeProvider } from '@/components/ThemeProvider'

export default async function RootLayout({ children }) {
  const config = await getClientConfig()  // server-only, valida com Zod
  return (
    <html>
      <body>
        <ThemeProvider config={config}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

**Por que `useEffect` e nao inline no render:**
CSS Custom Properties precisam ser aplicadas apos o hydration. O `useEffect` garante que o DOM esta disponivel. O SSR renderiza sem o tema (ou com um tema de fallback via inline styles) — o hydration e quase instantaneo, sem flash visivel na pratica.

**Como trocar o tema sem reload:**

```typescript
// Em qualquer componente cliente:
import { themeEngine } from '@openbet/theme-engine'
import { validateClientConfig } from '@openbet/config-schema'
import elitebetConfig from '../../clients/elitebet.config.json'

function switchToElitebet() {
  const config = validateClientConfig(elitebetConfig)
  themeEngine.apply(config)  // 22 setProperty() → UI atualiza instantaneamente
}
```

---

## Como usar em Web Components

O ThemeEngine e independente de framework. Funciona em qualquer contexto com DOM:

```javascript
import { themeEngine } from '@openbet/theme-engine'
import { validateClientConfig } from '@openbet/config-schema'

class OddsBoardElement extends HTMLElement {
  connectedCallback() {
    // Opção 1: usar o singleton (depende das vars já estarem no :root)
    this.innerHTML = `
      <span style="color: var(--color-odds-up)">2.45</span>
    `

    // Opcao 2: aplicar o tema em um shadow root isolado
    const shadow = this.attachShadow({ mode: 'open' })
    const engine = new ThemeEngine(shadow.host)
    engine.apply(validateClientConfig(rawConfig))
  }
}

customElements.define('odds-board', OddsBoardElement)
```

**Nota sobre Shadow DOM:** CSS Custom Properties **atravessam** a fronteira do shadow DOM por padrao — vars definidas no `:root` ficam acessiveis dentro de shadow roots. A opcao 1 funciona mesmo com Shadow DOM sem nenhuma configuracao adicional.
