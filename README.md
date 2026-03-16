# OpenBet Core

> White-label sports betting platform framework.
> N operator brands. One codebase. Zero conditional code per client.

![CI](https://github.com/LucasReisVillasBoas/openbet-core/actions/workflows/ci.yml/badge.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![MF](https://img.shields.io/badge/Module_Federation-2.0-FF6B6B)
![License](https://img.shields.io/badge/license-MIT-green)

**[Live Demo](https://openbet-core-shell.vercel.app)** · **[Storybook](https://openbet-core-ui.vercel.app)** · **[GrandBet](https://openbet-core-shell.vercel.app?client=grandbet)** · **[EliteBet](https://openbet-core-shell.vercel.app?client=elitebet)**

---

## The Core Idea

The architecture thesis: operator brands are differentiated exclusively via ClientConfig JSON and CSS Custom Properties.
No if-statements per client. No forks. No custom builds.

---

## Architecture

```
┌──────────────────────────────────────────────────────────────────┐
│                        MONOREPO                                  │
│                                                                  │
│  ┌─────────────────┐    ┌──────────────────┐                     │
│  │ @openbet/       │    │ @openbet/        │                     │
│  │ config-schema   │───▶│ theme-engine     │                     │
│  │                 │    │                  │                     │
│  │  Zod schema     │    │  CSS Custom      │                     │
│  │  TypeScript     │    │  Properties      │                     │
│  └─────────────────┘    └────────┬─────────┘                     │
│                                  │                               │
│  ┌───────────────────────────────▼─────────────────────────────┐ │
│  │                     @openbet/ui                             │ │
│  │  OddsButton · MatchCard · BetSlip · LiveScoreboard          │ │
│  │  All components consume CSS vars — zero hardcoded colors    │ │
│  └───────────────────────────────┬─────────────────────────────┘ │
│                                  │                               │
│         ┌────────────────────────┼──────────────────┐            │
│         │                        │                  │            │
│  ┌──────▼──────┐        ┌────────▼──────┐  ┌────────▼─────┐      │
│  │ apps/shell  │◀──MF──▶│apps/sportsbook│  │  Storybook   │      │
│  │             │        │               │  │              │      │
│  │  MF Host    │        │  MF Remote    │  │  Component   │      │
│  │  Next.js 16 │        │  Next.js 16   │  │  Explorer    │      │
│  │  port 3000  │        │  port 3001    │  │  port 6006   │      │
│  └──────┬──────┘        └───────────────┘  └──────────────┘      │
│         │                                                        │
│  ┌──────▼──────────────────────────────────────────────┐         │
│  │                   clients/                          │         │
│  │  grandbet.config.json · elitebet.config.json        │         │
│  │  Brand · Theme · Features · Layout · Regional       │         │
│  └─────────────────────────────────────────────────────┘         │
└──────────────────────────────────────────────────────────────────┘
```

---

## The Three Contracts

### Contract 1 — ClientConfig is the single source of truth

```json
{
  "brand": { "name": "GrandBet", "primary": "#1A7A4A" },
  "features": { "casino": true, "esports": false },
  "layout": { "borderRadius": "md", "sidebarWidth": 220 }
}
```

→ Adding a new operator = creating a JSON file. Zero new code.

### Contract 2 — CSS Custom Properties as the theme contract

```css
/* Shell applies to :root */
--color-primary: #1a7a4a;
--layout-border-radius: 8px;

/* Remote inherits via CSS cascade — no communication needed */
background: var(--color-primary);
```

→ The remote doesn't know it's inside a shell. The browser resolves it.

### Contract 3 — Module Federation as the delivery mechanism

```
Shell (host) ──loads──▶ sportsbook/SportsbookPage (remote)
                ↑
                webpack.container.cjs generates remoteEntry.js
                @module-federation/enhanced 2.0
```

→ Remotes deploy independently. Shell consumes at runtime.

---

## Architecture Decisions

| ADR                                                                     | Decision                                     | Status   |
| ----------------------------------------------------------------------- | -------------------------------------------- | -------- |
| [ADR-001](docs/architecture/adr/ADR-001-monorepo.md)                    | Turborepo + pnpm workspaces                  | Accepted |
| [ADR-002](docs/architecture/adr/ADR-002-config-schema.md)               | Zod as config validation layer               | Accepted |
| [ADR-003](docs/architecture/adr/ADR-003-css-vars.md)                    | CSS Custom Properties as theme contract      | Accepted |
| [ADR-004](docs/architecture/adr/ADR-004-module-federation.md)           | Module Federation 2.0                        | Accepted |
| [ADR-005](docs/architecture/adr/ADR-005-standalone-mf-container.md)     | Standalone webpack container for sportsbook  | Accepted |
| [ADR-006](docs/architecture/adr/ADR-006-custom-events-communication.md) | Custom Events for shell↔remote communication | Accepted |

---

## Project Structure

```
openbet-core/
├── packages/
│   ├── config-schema/     # Zod schema + TypeScript types
│   ├── theme-engine/      # CSS vars runtime injection
│   └── ui/                # React component library + Storybook
├── apps/
│   ├── shell/             # MF Host — Next.js 16, port 3000
│   └── sportsbook/        # MF Remote — Next.js 16, port 3001
├── clients/
│   ├── grandbet.config.json
│   └── elitebet.config.json
├── docs/
│   ├── architecture/      # ADR-001 to ADR-006
│   └── guides/            # Getting started, deploy, adding clients
└── .claude/agents/        # AI agent roles: architect, mf-engineer, ui-engineer, config-eng
```

---

## Client Comparison

| Feature       | GrandBet          | EliteBet           |
| ------------- | ----------------- | ------------------ |
| Primary color | `#1A7A4A` (green) | `#4F46E5` (indigo) |
| Border radius | `md` — 8px        | `lg` — 16px        |
| Casino        | ✅                | ❌                 |
| Live betting  | ✅                | ✅                 |
| E-Sports      | ❌                | ✅                 |
| Locale        | pt-BR             | pt-BR              |
| Currency      | BRL               | BRL                |

→ Same codebase. Same components. Different experience.

---

## Getting Started

```bash
# Clone
git clone https://github.com/LucasReisVillasBoas/openbet-core.git
cd openbet-core

# Install
pnpm install

# Build packages
pnpm build

# Run
pnpm dev
# Shell:      http://localhost:3000
# Sportsbook: http://localhost:3001
# Storybook:  http://localhost:6006
```

---

## Available Scripts

| Script            | Description                          |
| ----------------- | ------------------------------------ |
| `pnpm dev`        | Start all apps in watch mode         |
| `pnpm build`      | Build all packages and apps          |
| `pnpm validate`   | Validate all client configs with Zod |
| `pnpm test:theme` | Run ThemeEngine assertions           |
| `pnpm lint`       | ESLint across all packages           |
| `pnpm format`     | Prettier across all files            |
| `pnpm typecheck`  | TypeScript strict check              |

---

## Adding a New Client

```bash
# 1. Create config
cp clients/grandbet.config.json clients/newclient.config.json

# 2. Edit brand, theme, features
# 3. Validate
pnpm validate

# 4. Deploy with env var
NEXT_PUBLIC_CLIENT_ID=client-newclient
```

That's it. No code changes required.

---

## Tech Stack

| Layer              | Technology                      |
| ------------------ | ------------------------------- |
| Monorepo           | Turborepo + pnpm workspaces     |
| Framework          | Next.js 16 (webpack mode)       |
| Language           | TypeScript 5 (strict)           |
| UI                 | React 19                        |
| Component library  | Custom (@openbet/ui)            |
| Styling            | CSS Custom Properties           |
| Module Federation  | @module-federation/enhanced 2.0 |
| Schema validation  | Zod                             |
| Component explorer | Storybook 8                     |
| CI/CD              | GitHub Actions + Vercel         |

---

## CI Pipeline

```
push → install → build → format:check → typecheck → lint → validate configs
                                                              ↓
                                                   grandbet + elitebet
                                                   both must pass Zod
```

Packages build in dependency order: `config-schema → theme-engine → ui → apps`

---

## Deployments

| App               | URL                                                                              | Env              |
| ----------------- | -------------------------------------------------------------------------------- | ---------------- |
| Shell (demo)      | [openbet-core-shell.vercel.app](https://openbet-core-shell.vercel.app)           | `DEMO_MODE=true` |
| Sportsbook remote | [openbet-core-sportsbook.vercel.app](https://openbet-core-sportsbook.vercel.app) | MF remote        |
| Storybook         | [openbet-core-ui.vercel.app](https://openbet-core-ui.vercel.app)                 | Static           |

---

## Documentation

| Document                                                                               | Description                                        |
| -------------------------------------------------------------------------------------- | -------------------------------------------------- |
| [docs/architecture/overview.md](docs/architecture/overview.md)                         | Architecture overview                              |
| [docs/architecture/module-federation.md](docs/architecture/module-federation.md)       | Module Federation deep dive                        |
| [docs/architecture/bet-slip-context.md](docs/architecture/bet-slip-context.md)         | BetSlip context — toggle, exclusivity, accumulator |
| [docs/architecture/sport-filter-context.md](docs/architecture/sport-filter-context.md) | Sport filter context — sidebar → matches           |
| [docs/architecture/theme-engine.md](docs/architecture/theme-engine.md)                 | ThemeEngine — CSS vars injection                   |
| [docs/packages/config-schema.md](docs/packages/config-schema.md)                       | `@openbet/config-schema` package                   |
| [docs/packages/theme-engine.md](docs/packages/theme-engine.md)                         | `@openbet/theme-engine` package                    |
| [docs/guides/getting-started.md](docs/guides/getting-started.md)                       | First steps                                        |
| [docs/guides/adding-a-client.md](docs/guides/adding-a-client.md)                       | Adding a new operator                              |
| [docs/guides/adding-a-component.md](docs/guides/adding-a-component.md)                 | Adding a UI component                              |
| [docs/guides/deploy.md](docs/guides/deploy.md)                                         | Deploy on Vercel                                   |
| [docs/decisions.md](docs/decisions.md)                                                 | Decision log                                       |

---

## License

MIT — see [LICENSE](LICENSE)
