# @openbet/ui

## Propósito
Design system do OpenBet Core. Componentes React que consomem
CSS Custom Properties do theme-engine para suportar temas
dinâmicos por cliente.

## Regras absolutas
- NUNCA hardcode cor — toda cor via var(--color-*)
- NUNCA hardcode fonte — var(--font-family) ou var(--font-family-mono)
- NUNCA hardcode border-radius — var(--radius)
- Todo componente TEM stories para TODOS os estados
- Todo componente muda visualmente ao trocar o tema

## Estrutura de componentes
packages/ui/src/components/ComponentName/
├── ComponentName.tsx         # Implementação
├── ComponentName.stories.tsx # Stories de todos os estados
└── index.ts                  # Barrel export

## Componentes planejados
- OddsButton    → P0 — estados: default, selected, up, down, suspended, locked
- MatchCard     → P0 — variantes: pre-match, live, featured
- BetSlip       → P0 — estados: empty, single, multiple, odds-changed
- LiveScoreboard → P1 — simula WebSocket com setInterval
- ThemeShowcase → P1 — vitrine visual do theme-engine
- OddsWidget    → P1 — Web Component standalone

## CSS vars disponíveis (do theme-engine)
Cores: --color-primary, --color-primary-hover, --color-secondary,
--color-background, --color-background-card, --color-surface,
--color-text, --color-text-muted, --color-border,
--color-success, --color-error, --color-warning,
--color-odds-up, --color-odds-down
Tipografia: --font-family, --font-family-mono, --font-size-base
Forma: --radius
