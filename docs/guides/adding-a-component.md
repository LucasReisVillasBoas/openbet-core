# Como Criar um Componente no Design System

Todo componente do `@openbet/ui` segue estrutura, convencoes e regras identicas. Este guia usa `OddsDisplay` como exemplo.

---

## Convencao de estrutura de arquivos

Todo componente vive em um diretorio proprio com o mesmo nome do componente. A estrutura completa, usada em componentes com dados estaticos ou estilos complexos, e:

```
ComponentName/
├── ComponentName.tsx         # Implementacao (componente React)
├── ComponentName.types.ts    # Interfaces e tipos de props
├── ComponentName.styles.ts   # Objetos de estilo (React.CSSProperties)
├── ComponentName.data.ts     # Dados mock, constantes, arrays estaticos
├── ComponentName.stories.tsx # Storybook stories para todos os estados
└── index.ts                  # Barrel export (re-exporta tudo)
```

**Quando criar cada arquivo:**

| Arquivo | Quando criar |
|---|---|
| `ComponentName.tsx` | Sempre — e o componente em si |
| `ComponentName.types.ts` | Sempre que o componente tiver props nao triviais. Centraliza interfaces e tipos exportaveis |
| `ComponentName.styles.ts` | Sempre que o componente tiver estilos. NUNCA hardcode styles inline no `.tsx` — objetos `React.CSSProperties` com CSS Custom Properties ficam aqui |
| `ComponentName.data.ts` | Quando o componente tiver dados mock, listas estaticas ou constantes proprias. Exemplo: `SPORTS` e `COMPETITIONS_BY_SPORT` em `SportsSidebar.data.ts` |
| `ComponentName.stories.tsx` | Sempre — regra inviolavel do CLAUDE.md (regra #5) |
| `index.ts` | Sempre — barrel export para que importadores usem `import { X } from '@/components/ComponentName'` sem precisar referenciar o arquivo interno |

**Exemplos reais no codebase:**

```
apps/shell/components/SportsSidebar/
├── SportsSidebar.tsx          # Componente
├── SportsSidebar.styles.ts    # Estilos (sidebarStyle, getSportButtonStyle, etc.)
├── SportsSidebar.data.ts      # SPORTS[], COMPETITIONS_BY_SPORT{}
└── index.ts                   # export { SportsSidebar }

apps/shell/components/BetSlipPanel/
├── BetSlipPanel.tsx
├── BetSlipPanel.styles.ts
└── index.ts

apps/shell/components/TodayMatches/
├── TodayMatches.tsx
├── TodayMatches.styles.ts
├── TodayMatches.data.ts       # TODAY_MATCHES[], type Match
└── index.ts
```

Para componentes simples em `packages/ui`, a estrutura minima aceitavel e:

```
packages/ui/src/components/OddsDisplay/
├── OddsDisplay.tsx          # Implementacao do componente
├── OddsDisplay.stories.tsx  # Stories para todos os estados
└── index.ts                 # Barrel export
```

Nenhum arquivo adicional sem necessidade. Sem `.module.css`, sem arquivos de teste separados (testes ficam junto com as stories no Storybook play functions, se necessarios).

---

## Regras de CSS — apenas CSS Custom Properties

**PROIBIDO:**

```tsx
// ERRADO — hardcode de cor
<span style={{ color: '#1A7A4A' }}>2.45</span>

// ERRADO — hardcode de fonte
<span style={{ fontFamily: 'Inter, sans-serif' }}>2.45</span>

// ERRADO — hardcode de border-radius
<div style={{ borderRadius: '8px' }}>...</div>
```

**CORRETO:**

```tsx
// Correto — CSS Custom Properties
<span style={{ color: 'var(--color-odds-up)' }}>2.45</span>
<span style={{ fontFamily: 'var(--font-family-mono)' }}>2.45</span>
<div style={{ borderRadius: 'var(--layout-border-radius)' }}>...</div>
```

**CSS vars disponiveis:**

| Categoria | Vars |
|---|---|
| Cores | `--color-primary`, `--color-primary-hover`, `--color-secondary`, `--color-background`, `--color-background-card`, `--color-surface`, `--color-text`, `--color-text-muted`, `--color-border`, `--color-success`, `--color-error`, `--color-warning`, `--color-odds-up`, `--color-odds-down` |
| Tipografia | `--font-family`, `--font-family-mono`, `--font-size-base` |
| Layout | `--layout-sidebar-width`, `--layout-header-height`, `--layout-bet-slip-width`, `--layout-border-radius` |
| Marca | `--brand-name`, `--brand-slug` |

**A unica excecao aceitavel:** Cor de texto literal sobre cor de fundo dinamica, quando o contraste e invariante em relacao ao tema. Exemplo: `color: '#fff'` em um badge que sempre tem `background: var(--color-primary)`. Documente o motivo com um comentario.

---

## Implementacao — OddsDisplay.tsx

```tsx
// packages/ui/src/components/OddsDisplay/OddsDisplay.tsx

'use client'

export type OddsDirection = 'up' | 'down' | 'neutral'
export type OddsFormat = 'decimal' | 'fractional' | 'american'

export interface OddsDisplayProps {
  value: number
  direction?: OddsDirection
  format?: OddsFormat
  size?: 'sm' | 'md' | 'lg'
  suspended?: boolean
}

const DIRECTION_COLORS: Record<OddsDirection, string> = {
  up:      'var(--color-odds-up)',
  down:    'var(--color-odds-down)',
  neutral: 'var(--color-text)',
}

export function OddsDisplay({
  value,
  direction = 'neutral',
  size = 'md',
  suspended = false,
}: OddsDisplayProps) {
  const fontSize = size === 'sm' ? '0.75rem' : size === 'lg' ? '1.25rem' : '1rem'

  return (
    <span
      style={{
        fontFamily: 'var(--font-family-mono)',
        fontSize,
        fontWeight: 600,
        color: suspended ? 'var(--color-text-muted)' : DIRECTION_COLORS[direction],
        opacity: suspended ? 0.5 : 1,
        transition: 'color 300ms ease',
      }}
      aria-label={suspended ? `Odds ${value} — suspensa` : `Odds ${value}`}
    >
      {suspended ? 'SUSP' : value.toFixed(2)}
    </span>
  )
}
```

**Pontos de atencao na implementacao:**

1. `'use client'` — componentes com estado ou interatividade precisam deste directive no App Router
2. Tipos exportados — `OddsDirection`, `OddsFormat` e `OddsDisplayProps` devem ser exportados para uso externo
3. `aria-label` — acessibilidade nao e opcional
4. `transition` em CSS — animar mudancas de cor torna a UX de odds ao vivo mais suave
5. Nenhuma importacao externa alem do React — sem `lodash`, sem `clsx`, sem libs de animacao por padrao

---

## Stories — OddsDisplay.stories.tsx

**Todo estado possivel deve ter uma story.** Sem excecoes.

```tsx
// packages/ui/src/components/OddsDisplay/OddsDisplay.stories.tsx

import type { Meta, StoryObj } from '@storybook/react'
import { OddsDisplay } from './OddsDisplay'

const meta: Meta<typeof OddsDisplay> = {
  title: 'Components/OddsDisplay',
  component: OddsDisplay,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof OddsDisplay>

export const Default: Story = {
  args: { value: 2.45 },
}

export const OddsUp: Story = {
  args: { value: 2.65, direction: 'up' },
}

export const OddsDown: Story = {
  args: { value: 2.25, direction: 'down' },
}

export const Suspended: Story = {
  args: { value: 2.45, suspended: true },
}

export const Small: Story = {
  args: { value: 1.85, size: 'sm' },
}

export const Large: Story = {
  args: { value: 3.10, size: 'lg', direction: 'up' },
}

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
      <OddsDisplay value={2.45} direction="neutral" />
      <OddsDisplay value={2.65} direction="up" />
      <OddsDisplay value={2.25} direction="down" />
      <OddsDisplay value={2.45} suspended />
    </div>
  ),
}
```

**Estados obrigatorios para qualquer componente:**
- Estado padrao (sem props customizadas)
- Todos os valores de cada prop enum/union
- Estado de loading/disabled/suspended se aplicavel
- Story de "todos os estados" lado a lado para comparacao visual

---

## Barrel export — index.ts

```typescript
// packages/ui/src/components/OddsDisplay/index.ts
export { OddsDisplay } from './OddsDisplay'
export type { OddsDisplayProps, OddsDirection, OddsFormat } from './OddsDisplay'
```

---

## Registrar no index principal

Edite `packages/ui/src/index.ts`:

```typescript
// Componentes existentes
export { OddsButton } from './components/OddsButton'
export type { OddsButtonProps } from './components/OddsButton'

export { MatchCard } from './components/MatchCard'
// ...

// Novo componente
export { OddsDisplay } from './components/OddsDisplay'
export type { OddsDisplayProps, OddsDirection, OddsFormat } from './components/OddsDisplay'
```

---

## Checklist antes do PR

- [ ] Arquivo `ComponentName.tsx` criado em `packages/ui/src/components/ComponentName/`
- [ ] Arquivo `ComponentName.stories.tsx` com stories para **todos** os estados e variantes
- [ ] Arquivo `index.ts` com barrel exports (componente + tipos)
- [ ] Exportacao adicionada em `packages/ui/src/index.ts`
- [ ] Zero hardcode de cor — todas as cores via `var(--color-*)`
- [ ] Zero hardcode de fonte — `var(--font-family)` ou `var(--font-family-mono)`
- [ ] Zero hardcode de border-radius — `var(--layout-border-radius)`
- [ ] `aria-label` ou `role` adequados para acessibilidade
- [ ] Storybook verificado localmente — `pnpm --filter=@openbet/ui storybook`
- [ ] Componente visualmente diferente ao trocar entre GrandBet e EliteBet no Storybook
- [ ] `pnpm typecheck` passa sem erros
- [ ] `pnpm lint` passa sem erros
- [ ] `pnpm format:check` passa sem erros
