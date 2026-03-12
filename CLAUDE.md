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
- React 18 + Next.js 14 App Router
- Tailwind CSS + CSS Custom Properties
- Rspack + Module Federation 2.0
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
4. URLs de remotes MF SEMPRE vêm do ClientConfig — nunca hardcoded
5. Todo componente React TEM stories para todos os estados
6. packages/config-schema: dependência permitida apenas zod
7. packages/theme-engine: dependência permitida apenas @openbet/config-schema
8. Shared dependencies no MF SEMPRE como singleton: true

## Decisões de arquitetura tomadas
- ADR-001: CSS Custom Properties como contrato de tema
  CSS vars são injetadas no :root pelo ThemeEngine. Componentes
  consomem vars, nunca valores diretos. Trocar tema = trocar config.

- ADR-002: ClientConfig como fonte única de verdade
  Tudo que um cliente pode customizar está no ClientConfigSchema.
  Adicionar cliente = criar JSON. Sem código novo.

- ADR-003: Remote URLs dinâmicas via ClientConfig
  O shell lê URLs dos remotes do ClientConfig. Clientes diferentes
  podem ter remotes em versões diferentes sem conflito.

- ADR-004: Module Federation Host (Shell) Architecture
  Q1: Usar @module-federation/enhanced (MF 2.0) — não o legado nextjs-mf.
  Alinhado com a stack declarada (MF 2.0) e suporta remotes dinâmicos em runtime.
  Q2: NEXT_PUBLIC_CLIENT_ID como seletor de cliente — variável de ambiente
  no .env.local. Sem infraestrutura de DNS ou proxy. Ideal para demo/portfólio.
  Q3: URLs dos remotes definidas em clients/*.config.json, validadas via Zod,
  extraídas por getRemotes(config) em lib/remote-registry.ts, passadas ao
  NextFederationPlugin como factory function — nunca hardcoded no código-fonte.
  Q4: Estrutura apps/shell aprovada com duas correções: lib/client-config.ts
  é server-only (sem 'use client'); tsconfig.json deve declarar path alias
  para ../../clients/. ThemeProvider.tsx é o único módulo client, recebe
  ClientConfig como prop do layout server e chama themeEngine.apply().

## Clientes ativos
- client-grandbet → GrandBet (verde escuro, #1A7A4A)
- client-elitebet → EliteBet (azul/roxo, #4F46E5)

## Estado atual
- packages/config-schema → buildando, schema completo
- packages/theme-engine  → buildando, ThemeEngine pronto
- packages/ui            → ainda não criado
- apps/shell             → ainda não criado
- apps/sportsbook        → ainda não criado

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
