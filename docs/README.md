[![CI](https://github.com/LucasReisVillasBoas/openbet-core/actions/workflows/ci.yml/badge.svg)](https://github.com/LucasReisVillasBoas/openbet-core/actions/workflows/ci.yml)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

# OpenBet Core — White-label Sports Betting Platform Framework

*"Uma única codebase. N operadores. Zero código condicional."*

**Demo ao vivo:** https://openbet-core-shell.vercel.app
**Storybook:** https://openbet-core-ui.vercel.app

---

## O que é

OpenBet Core é um framework open source para construir plataformas de apostas esportivas white-label. A premissa central é simples: um único codebase serve múltiplos operadores, cada um com identidade visual, layout e features próprias — tudo controlado por um arquivo JSON de configuração validado em runtime por Zod.

Isso significa que adicionar um novo operador não envolve tocar em código. Você cria um arquivo `clients/nome.config.json`, define cores, tipografia, feature flags e URLs de remotes — e a plataforma se adapta automaticamente. Sem branches por cliente. Sem `if (client === 'grandbet')` espalhados pelo código. Zero acoplamento.

O projeto demonstra como resolver problemas reais de plataformas multi-tenant em produção: Module Federation 2.0 para micro-frontends independentemente deployáveis, CSS Custom Properties como contrato de tema sem acoplamento entre shell e remotes, e Zod como barreira de validação em todas as fronteiras do sistema.

---

## Como funciona

```
┌─────────────────────────────────────────────────────────┐
│                     clients/                            │
│  grandbet.config.json    elitebet.config.json           │
│  (JSON + Zod validation at boundary)                    │
└────────────────────────┬────────────────────────────────┘
                         │ validateClientConfig()
                         ▼
┌─────────────────────────────────────────────────────────┐
│                packages/config-schema                   │
│  ClientConfigSchema (Zod) → ClientConfig (TypeScript)   │
└──────────────┬──────────────────────────────────────────┘
               │ ClientConfig
               ▼
┌─────────────────────────────────────────────────────────┐
│                packages/theme-engine                    │
│  ThemeEngine.apply(config) → CSS Custom Properties      │
│  injected in :root (document.documentElement)           │
└──────────────┬──────────────────────────────────────────┘
               │ var(--color-primary), var(--font-family)...
               ▼
┌──────────────────────────┐   Module Federation 2.0
│      apps/shell          │◄──────────────────────────────────┐
│  Next.js 16 App Router   │                                   │
│  Host MF (orquestrador)  │   sportsbook@remoteEntry.js       │
│                          │◄──────────────────────────────────┤
│  ThemeProvider           │                                   │
│  ClientConfigProvider    │   ┌──────────────────────────┐    │
│  ThemeToggle             │   │     apps/sportsbook       │    │
└──────────────────────────┘   │  Next.js 16 + MF Remote  │    │
                               │  Expõe: SportsbookPage   │    │
┌──────────────────────────┐   │  Herda CSS vars do shell │    │
│      packages/ui         │   └──────────────────────────┘    │
│  Design System           │                                   │
│  MatchCard, OddsButton   │◄──────────────────────────────────┘
│  BetSlip, LiveScoreboard │   (sportsbook importa @openbet/ui)
└──────────────────────────┘
```

---

## Stack

| Tecnologia | Versão | Papel |
|---|---|---|
| Turborepo | 2.x | Orchestração do monorepo, cache de builds |
| pnpm workspaces | 9.x | Gerenciamento de dependências |
| TypeScript | 5.x (strict) | Tipagem estática em todos os pacotes |
| Zod | 3.x | Validação de schema em runtime |
| React | 19.x | UI nos dois apps |
| Next.js | 16.x | App Router (shell e sportsbook) |
| Tailwind CSS v4 | 4.x | Utilitários CSS nos apps |
| CSS Custom Properties | — | Contrato de tema entre shell e remotes |
| @module-federation/enhanced | 2.x | Module Federation 2.0 |
| Storybook | 8.x | Documentação viva do design system |
| Webpack | 5.x | Bundler do MF container (sportsbook) |
| Babel | 7.x | Transpilação do MF container |
| ESLint | 9.x | Linting |
| Prettier | 3.x | Formatação |

---

## Estrutura do monorepo

```
openbet-core/
├── apps/
│   ├── shell/                    # Host MF — Next.js 16, orquestra os remotes
│   │   ├── app/                  # App Router (layout, page, globals)
│   │   ├── components/           # ThemeProvider, ThemeToggle, SportsbookRemote
│   │   ├── lib/                  # client-config.ts (server), remote-registry.ts
│   │   ├── next.config.ts        # ModuleFederationPlugin (host)
│   │   └── vercel.json           # Configuração de deploy na Vercel
│   │
│   └── sportsbook/               # Remote MF — Next.js 16, expõe SportsbookPage
│       ├── app/                  # App Router + sportsbook-page.tsx (exposto)
│       ├── next.config.ts        # Config simples (container é separado)
│       ├── webpack.container.cjs # Build standalone do remoteEntry.js
│       └── vercel.json           # Build inclui node webpack.container.cjs
│
├── packages/
│   ├── config-schema/            # @openbet/config-schema — Zod schema + tipos
│   │   └── src/
│   │       ├── schema.ts         # ClientConfigSchema e sub-schemas
│   │       ├── types.ts          # z.infer<typeof ClientConfigSchema>
│   │       └── index.ts          # Exports: schemas, tipos, validateClientConfig()
│   │
│   ├── theme-engine/             # @openbet/theme-engine — aplica config ao DOM
│   │   └── src/
│   │       ├── engine.ts         # ThemeEngine class + singleton themeEngine
│   │       ├── css-vars.ts       # buildCSSVars(config) — função pura
│   │       └── index.ts          # Exports públicos
│   │
│   └── ui/                       # @openbet/ui — Design System
│       └── src/
│           ├── components/       # MatchCard, OddsButton, BetSlip, LiveScoreboard
│           ├── widgets/          # Web Components standalone
│           └── index.ts          # Barrel export
│
├── clients/
│   ├── grandbet.config.json      # GrandBet — verde escuro, pt-BR, casino+sportsbook
│   └── elitebet.config.json      # EliteBet — azul/roxo, pt-BR, esports-first
│
├── .github/
│   └── workflows/
│       └── ci.yml                # Build, lint, typecheck, validate configs
│
├── scripts/
│   ├── validate-configs.ts       # Valida todos os clients/*.config.json
│   └── test-theme-engine.ts      # Testa ThemeEngine com jsdom
│
├── turbo.json                    # Pipeline do Turborepo
├── pnpm-workspace.yaml           # Workspaces declaration
└── package.json                  # Scripts raiz + engines (node >=20, pnpm >=9)
```

---

## Quick start

```bash
# 1. Clone o repositório
git clone https://github.com/LucasReisVillasBoas/openbet-core.git
cd openbet-core

# 2. Instale as dependências (requer pnpm 9+ e Node 20+)
pnpm install

# 3. Build de todos os pacotes em ordem topológica
pnpm build

# 4. Inicie todos os apps em watch mode
pnpm dev
```

O shell sobe em http://localhost:3000 e o sportsbook em http://localhost:3001.

Para configurar qual cliente carregar, crie `apps/shell/.env.local`:

```bash
NEXT_PUBLIC_CLIENT_ID=client-grandbet
# ou
NEXT_PUBLIC_CLIENT_ID=client-elitebet
```

---

## Clientes disponíveis

| | GrandBet | EliteBet |
|---|---|---|
| **ID** | `client-grandbet` | `client-elitebet` |
| **Cor primária** | `#1A7A4A` (verde escuro) | `#4F46E5` (índigo) |
| **Cor secundária** | `#F59E0B` (âmbar) | `#EC4899` (rosa) |
| **Fonte** | Inter | Outfit |
| **Border radius** | `md` (8px) | `lg` (16px) |
| **Bet slip** | Sidebar direita | Bottom drawer |
| **Sportsbook** | Sim | Sim |
| **Live betting** | Sim | Sim |
| **Casino** | Sim | Nao |
| **Esports** | Nao | Sim |
| **Bet builder** | Sim | Nao |
| **VIP Program** | Sim | Nao |
| **Social login** | Nao | Sim |
| **Locale** | pt-BR | pt-BR |
| **Moeda** | BRL | BRL |

---

## Decisões de arquitetura

Três decisões centrais determinam toda a arquitetura do projeto:

### 1. CSS Custom Properties como contrato de tema

CSS vars são injetadas no `:root` pelo `ThemeEngine.apply()`. Componentes consomem `var(--color-primary)`, nunca `#1A7A4A`. Trocar tema = chamar `themeEngine.apply(novoConfig)`. O remote MF herda o tema do shell automaticamente via CSS cascade — sem props, sem context, sem acoplamento.

[Detalhe completo: ADR-003](./architecture/adr/ADR-003-css-vars.md)

### 2. JSON + Zod como contrato de configuração

Tudo que um operador pode customizar está no `ClientConfigSchema`. Adicionar um cliente = criar um JSON. O schema valida em runtime em todas as fronteiras: ao carregar o arquivo, ao receber via API, ao restaurar do localStorage. Config inválida nunca chega à aplicação.

[Detalhe completo: ADR-002](./architecture/adr/ADR-002-config-schema.md)

### 3. Module Federation 2.0 com remotes independentemente deployáveis

O shell carrega o sportsbook como remote MF em runtime. URLs vêm do `remote-registry.ts` (resolvido por `NODE_ENV`). O sportsbook gera seu próprio `remoteEntry.js` via `webpack.container.cjs` — necessário porque o Next.js não produz um container MF válido por si só.

[Detalhe completo: ADR-004](./architecture/adr/ADR-004-module-federation.md)

---

## Como adicionar um cliente

1. **Crie o arquivo de configuração:**
   ```bash
   cp clients/grandbet.config.json clients/maxbet.config.json
   ```

2. **Edite o JSON** com as cores, tipografia, features e layout do novo operador. Todos os campos têm defaults conservadores — você só precisa sobrescrever o que for diferente.

3. **Registre no shell** em `apps/shell/lib/client-config.ts`:
   ```typescript
   export type ClientId = 'client-grandbet' | 'client-elitebet' | 'client-maxbet'

   const CLIENT_CONFIGS: Record<ClientId, () => Promise<unknown>> = {
     'client-grandbet': () => import('../../../clients/grandbet.config.json'),
     'client-elitebet': () => import('../../../clients/elitebet.config.json'),
     'client-maxbet':   () => import('../../../clients/maxbet.config.json'),
   }
   ```

Guia completo com checklist: [Como adicionar um operador](./guides/adding-a-client.md)

---

## Documentacao completa

- [Visao geral da arquitetura](./architecture/overview.md)
- [Module Federation 2.0](./architecture/module-federation.md)
- [Sistema de temas](./architecture/theme-engine.md)
- [ADR-001: Turborepo + pnpm Workspaces](./architecture/adr/ADR-001-monorepo.md)
- [ADR-002: ClientConfig como fonte unica de verdade](./architecture/adr/ADR-002-config-schema.md)
- [ADR-003: CSS Custom Properties como contrato de tema](./architecture/adr/ADR-003-css-vars.md)
- [ADR-004: Module Federation](./architecture/adr/ADR-004-module-federation.md)
- [Pacote @openbet/config-schema](./packages/config-schema.md)
- [Pacote @openbet/theme-engine](./packages/theme-engine.md)
- [Guia de desenvolvimento](./guides/getting-started.md)
- [Como adicionar um operador](./guides/adding-a-client.md)
- [Como criar um componente](./guides/adding-a-component.md)
- [Deploy na Vercel](./guides/deploy.md)
- [Decisoes de arquitetura](./decisions.md)
