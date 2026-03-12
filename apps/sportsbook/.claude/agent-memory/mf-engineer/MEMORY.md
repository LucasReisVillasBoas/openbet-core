# MF Engineer Memory — apps/sportsbook

## Role in the Federation

This app is a **MF 2.0 remote** consumed by `apps/shell`.

## Container Build

The MF container is built by `webpack.container.cjs` (standalone webpack),
NOT by Next.js. The Next.js app and the container are two independent builds.

- Container config: `apps/sportsbook/webpack.container.cjs`
- Output: `apps/sportsbook/public/remoteEntry.js`
- Build command: `pnpm build:container`
- Dev server port: 3001

DO NOT add ModuleFederationPlugin to `next.config.ts` — this was attempted and
produces a `remoteEntry.js` that the shell cannot initialize (see monorepo
patterns.md for the full rationale).

## Exposed Modules

| Expose path | Source file |
|-------------|-------------|
| `./SportsbookPage` | `app/sportsbook-page.tsx` |

## Shared Dependencies

`shared: {}` — React 19 is bundled independently, pinned via `resolve.alias`
in `webpack.container.cjs`. No shared scope with shell. See monorepo patterns.md.

## Theme Contract

All styles use `var(--color-*)`, `var(--font-*)`, `var(--layout-*)` CSS Custom
Properties. These are injected into `:root` by the shell's ThemeProvider.
No React context or prop drilling required — CSS cascade handles it.

## Key Files

- `app/sportsbook-page.tsx` — the exposed component (CSS vars only, no hardcoded colors)
- `webpack.container.cjs` — standalone MF 2.0 container build config
- `next.config.ts` — Next.js config (no MF plugin, only transpilePackages)
- `public/remoteEntry.js` — built artifact (first line: `var sportsbook;`)
