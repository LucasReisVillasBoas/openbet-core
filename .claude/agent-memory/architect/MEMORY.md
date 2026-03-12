# Architect Agent Memory — OpenBet Core

## Project Identity
OpenBet Core is a white-label betting platform framework: one codebase, N operator brands, differentiated exclusively via ClientConfig JSON and CSS Custom Properties. No conditional code per client.

## Dependency Graph (strict, unidirectional)
apps/* -> packages/ui -> packages/theme-engine -> packages/config-schema
apps/* -> packages/i18n -> packages/config-schema
apps/* -> packages/config-schema (direct)
packages/utils is a leaf (no internal deps)

## Build Order (Turborepo pipeline)
1. config-schema + utils (no internal deps, build first)
2. theme-engine (depends on config-schema)
3. ui (depends on theme-engine + utils)
4. apps/* (depend on all above)

## Package Dependency Constraints
- config-schema: ONLY zod. Zero framework deps. No DOM access.
- theme-engine: ONLY @openbet/config-schema + native browser APIs. No React, no CSS libs.
- ui: @openbet/theme-engine + @openbet/utils (React is a peer dep)
- apps/*: anything in the graph above

## Top Inviolable Rules (from CLAUDE.md)
1. No color hardcoded in components — only via CSS Custom Properties (--color-brand-primary style)
2. No imports from apps/ inside packages/ — dependency flow is strictly downward
3. Never use ClientConfig without Zod validation first (ClientConfigSchema.parse() or safeParse())
4. MF remote URLs always come from ClientConfig — never hardcoded
5. Every React component needs Storybook stories for all states
6. Module Federation shared deps always configured as singleton: true

## CSS Var Naming Convention
--<category>-<subcategory>-<variant>
Examples: --color-brand-primary, --typography-font-body, --spacing-unit, --radius-card

## Naming Conventions
- React components: PascalCase (BetSlipCard.tsx)
- Packages: kebab-case (@openbet/theme-engine)
- Functions/vars: camelCase
- Utility files: kebab-case (format-odds.ts)
- CSS Custom Properties: kebab-case with -- prefix
- Env vars: SCREAMING_SNAKE_CASE

## Public Contracts
- config-schema exports: ClientConfigSchema (Zod), ClientConfig (TypeScript type) — ONLY these two
- theme-engine exports: ThemeEngine (class), themeEngine (singleton)
- ThemeEngine interface: apply(config: ClientConfig, target?: HTMLElement): void | reset(target?: HTMLElement): void

## Key Architectural Invariants
- ThemeEngine injects ONLY CSS Custom Properties on :root — never CSS classes, never <style> tags
- ThemeEngine.apply() must be idempotent — safe to call multiple times
- config-schema schema fields must never use .any() or .unknown()
- All schema defaults must be explicit and commented

## ADR-004 Key Decisions (Shell / Module Federation Host)
- MF package: @module-federation/enhanced (MF 2.0). NOT @module-federation/nextjs-mf (legacy).
- Client selection: NEXT_PUBLIC_CLIENT_ID env var. Subdomain and query param rejected.
- Remote URL flow: clients/*.config.json → Zod validation → getRemotes(config) in lib/remote-registry.ts → NextFederationPlugin factory function. Zero hardcoded URLs in shell source.
- Shell file structure approved with two mandatory corrections:
  (a) lib/client-config.ts is server-only — no 'use client' directive
  (b) apps/shell/tsconfig.json must declare path alias @clients/* -> ../../clients/*
- ThemeProvider.tsx is the ONLY client component in the shell. Receives validated ClientConfig as prop from server layout.tsx, then calls themeEngine.apply(). DOM boundary is explicit.

## Session State
- Project status: config-schema and theme-engine are built. apps/shell not yet created.
- Agents in session: architect, config-eng, ui-engineer, mf-engineer

## Decision Protocol for Ambiguous Cases
1. Consult CLAUDE.md files (root + package-level)
2. Check this memory for prior decisions
3. If still ambiguous, refuse to approve and escalate with explicit question
4. Document the decision in ADR format regardless of outcome

## Detailed Notes
- See patterns.md for recurring architectural patterns (TBD as project evolves)
