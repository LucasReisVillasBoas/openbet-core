# Config-Eng Agent Memory

## Active Clients
- `client-grandbet` → GrandBet | theme: green (#1A7A4A) | file: clients/grandbet.config.json
- `client-elitebet` → EliteBet | theme: blue/purple (#4F46E5) | file: clients/elitebet.config.json
- Previously named client-alpha (AlphaBet) and client-beta (BetNova) — renamed March 2026.

## Key File Paths
- `clients/grandbet.config.json` — GrandBet operator config
- `clients/elitebet.config.json` — EliteBet operator config
- `packages/config-schema/` — Zod schema + TS types (dep: zod only)
- `packages/theme-engine/` — CSS var injection (dep: @openbet/config-schema only)
- `apps/shell/lib/client-config.ts` — server-only loader; defines ClientId union type
- `apps/shell/lib/client-config-context.tsx` — client-side registry + React context
- `apps/shell/components/ThemeToggle.tsx` — toggles between grandbet/elitebet
- `apps/shell/lib/remote-registry.ts` — extracts MF remote URLs from ClientConfig
- `apps/shell/.env.local` — NEXT_PUBLIC_CLIENT_ID=client-grandbet (default)
- `apps/shell/.env.local.elitebet` — NEXT_PUBLIC_CLIENT_ID=client-elitebet
- `packages/ui/.storybook/ThemeDecorator.tsx` — Storybook decorator applying client themes
- `packages/ui/.storybook/preview.ts` — Storybook globals: defaultValue 'grandbet'
- `scripts/validate-configs.ts` — runs `pnpm validate`; uses safeValidateClientConfig
- `scripts/test-theme-engine.ts` — runs `pnpm test:theme`; uses JSDOM assertions

## Config Schema Conventions
- brand.id matches the ClientId key (e.g. 'client-grandbet')
- brand.slug is used as `data-client` attribute by ThemeEngine (e.g. 'grandbet')
- All color fields are hex strings; no CSS vars inside config JSONs
- camelCase for all config keys; CSS vars use kebab-case (--color-primary)

## Dependency Rules (enforced)
- config-schema: ONLY zod allowed
- theme-engine: ONLY @openbet/config-schema allowed

## Validation Commands
- `pnpm validate` → tsx scripts/validate-configs.ts
- `pnpm test:theme` → tsx scripts/test-theme-engine.ts

## Details
See patterns.md for schema composition patterns.
