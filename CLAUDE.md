# OpenBet Core

## O que é
Framework open source para construir plataformas de apostas
esportivas white-label. Um único codebase, múltiplos operadores,
cada um com identidade visual e features próprias controladas
por um arquivo JSON de configuração.

## Stack
- Turborepo + pnpm workspaces
- TypeScript strict em todos os pacotes
- Zod — validação de schemas em runtime
- React 19 + Next.js 16 App Router
- Tailwind CSS v4 + CSS Custom Properties
- Webpack 5 + Module Federation 2.0 (@module-federation/enhanced 2.1.0)
- Storybook 8

## Estrutura do monorepo
- apps/shell          → Host MF — orquestra os remotes
- apps/sportsbook     → Remote MF — expõe componentes
- packages/config-schema  → Zod schema + TypeScript types
- packages/theme-engine   → Aplica ClientConfig como CSS vars
- packages/ui             → Design system — componentes React
- clients/                → JSON de configuração por operador

## Regras invioláveis
1. NUNCA hardcode cor em componente — toda cor via CSS Custom Property
2. NUNCA importar de apps/ dentro de packages/
3. NUNCA usar ClientConfig sem validar com Zod primeiro
4. URLs de remotes MF SEMPRE vêm de configuração — nunca hardcoded diretamente no código-fonte
5. Todo componente React TEM stories para todos os estados
6. packages/config-schema: dependência permitida apenas zod
7. packages/theme-engine: dependência permitida apenas @openbet/config-schema
8. shared: {} no MF — React NÃO é compartilhado via MF (incompatível com Next.js 16)
9. Comunicação shell↔remote via Custom Events — NUNCA via Context ou props diretas

## Decisões de arquitetura tomadas
- ADR-001: Turborepo + pnpm Workspaces como base do monorepo
  Pipeline de build em ordem topológica, cache Turborepo, workspaces pnpm.

- ADR-002: ClientConfig como fonte única de verdade
  Tudo que um cliente pode customizar está no ClientConfigSchema.
  Adicionar cliente = criar JSON. Sem código novo.

- ADR-003: CSS Custom Properties como contrato de tema
  CSS vars são injetadas no :root pelo ThemeEngine. Componentes
  consomem vars, nunca valores diretos. Trocar tema = trocar config.
  Remote MF herda vars via CSS cascade sem acoplamento.

- ADR-004: Module Federation Host (Shell) Architecture
  Usar @module-federation/enhanced (MF 2.0) — não o legado nextjs-mf.
  NEXT_PUBLIC_CLIENT_ID como seletor de cliente. NEXT_PUBLIC_SPORTSBOOK_REMOTE
  para override da URL do remote. Shell usa shared: {} (React não compartilhado).

- ADR-005: Standalone webpack container para sportsbook remote
  O Next.js não gera container MF com runtime autônomo. webpack.container.cjs
  produz public/remoteEntry.js independente do runtime Next.js.

- ADR-006: Custom Events para comunicação shell↔remote
  React Context não cruza boundaries de MF. Comunicação bidirecional via
  Custom Events DOM: dispatchBetAdd/Remove no sportsbook, onBetAdd/Remove
  no BetSlipProvider do shell.

## Clientes ativos
- client-grandbet → GrandBet (verde escuro, #1A7A4A, esports: false, borderRadius: md)
- client-elitebet → EliteBet (azul/roxo, #4F46E5, esports: true, borderRadius: lg)

## Estado atual
- packages/config-schema → buildando, schema completo
- packages/theme-engine  → buildando, ThemeEngine pronto
- packages/ui            → buildando, implementado (OddsButton, MatchCard, BetSlip, LiveScoreboard, ThemeShowcase, OddsWidget)
- apps/shell             → buildando, implementado (BetSlipContext, SportFilterContext, sport filtering via sidebar)
- apps/sportsbook        → buildando, implementado (remoteEntry.js via webpack.container.cjs)

## Como rodar
pnpm install     → instala todas as dependências
pnpm build       → builda todos os pacotes em ordem
pnpm dev         → sobe todos os pacotes em watch mode

## Convenções
- Componentes React: PascalCase (OddsButton, MatchCard)
- Pacotes: kebab-case (@openbet/config-schema)
- Funções e variáveis: camelCase (buildCSSVars, themeEngine)
- CSS vars: --color-primary, --font-family, --radius
- Commits: conventional commits (feat:, fix:, docs:, refactor:)

## Variáveis de ambiente relevantes
- `NEXT_PUBLIC_CLIENT_ID` — seleciona o cliente (client-grandbet | client-elitebet)
- `NEXT_PUBLIC_SPORTSBOOK_REMOTE` — override da URL do remoteEntry.js do sportsbook
- `NEXT_PUBLIC_DEMO_MODE` — exibe/oculta banner de demo e toggle de tema

## Contextos shell-local
- `BetSlipContext` — gerencia apostas selecionadas, recebe eventos via Custom Events (ADR-006)
- `SportFilterContext` — gerencia filtro de esporte ativo na sidebar

## Documentação
Documentação completa disponível em docs/:

| Arquivo | Conteúdo |
|---------|----------|
| [docs/README.md](docs/README.md) | Visão geral do projeto |
| [docs/architecture/overview.md](docs/architecture/overview.md) | Arquitetura geral |
| [docs/architecture/module-federation.md](docs/architecture/module-federation.md) | Module Federation |
| [docs/architecture/theme-engine.md](docs/architecture/theme-engine.md) | Theme Engine |
| [docs/architecture/adr/ADR-001-monorepo.md](docs/architecture/adr/ADR-001-monorepo.md) | ADR-001: Turborepo + pnpm Workspaces |
| [docs/architecture/adr/ADR-002-config-schema.md](docs/architecture/adr/ADR-002-config-schema.md) | ADR-002: ClientConfig como fonte única |
| [docs/architecture/adr/ADR-003-css-vars.md](docs/architecture/adr/ADR-003-css-vars.md) | ADR-003: CSS Custom Properties como contrato de tema |
| [docs/architecture/adr/ADR-004-module-federation.md](docs/architecture/adr/ADR-004-module-federation.md) | ADR-004: Module Federation Host |
| [docs/architecture/adr/ADR-005-standalone-mf-container.md](docs/architecture/adr/ADR-005-standalone-mf-container.md) | ADR-005: Standalone webpack container para sportsbook |
| [docs/architecture/adr/ADR-006-custom-events-communication.md](docs/architecture/adr/ADR-006-custom-events-communication.md) | ADR-006: Custom Events para comunicação shell↔remote |
| [docs/packages/config-schema.md](docs/packages/config-schema.md) | Pacote config-schema |
| [docs/packages/theme-engine.md](docs/packages/theme-engine.md) | Pacote theme-engine |
| [docs/guides/getting-started.md](docs/guides/getting-started.md) | Guia de início |
| [docs/guides/adding-a-client.md](docs/guides/adding-a-client.md) | Adicionar cliente |
| [docs/guides/adding-a-component.md](docs/guides/adding-a-component.md) | Adicionar componente |
| [docs/guides/deploy.md](docs/guides/deploy.md) | Deploy na Vercel |
| [docs/decisions.md](docs/decisions.md) | Log de decisões |
