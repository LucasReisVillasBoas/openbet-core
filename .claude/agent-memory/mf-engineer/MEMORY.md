# MF Engineer Memory — OpenBet Core

## Architecture: Standalone Container Build (ADR-004 final)

The sportsbook remote uses a **standalone webpack build** (`webpack.container.cjs`),
NOT the Next.js webpack pipeline. See `patterns.md` for the full rationale.

- Container: `apps/sportsbook/webpack.container.cjs` → `public/remoteEntry.js`
- Run: `pnpm build:container` inside `apps/sportsbook`
- NEVER add ModuleFederationPlugin to `apps/sportsbook/next.config.ts`

## Remote URL Resolution

ClientConfig flow (ADR-003):
1. `apps/shell/lib/client-config.ts` — server-only, reads `NEXT_PUBLIC_CLIENT_ID`
2. `apps/shell/lib/remote-registry.ts` — `getRemotes(config)` returns MF remote strings
3. Dev fallback: `http://localhost:3001` when `config.remotes?.sportsbook` is absent
4. `clients/*.config.json` → `remotes: {}` key (empty = use dev fallback)

The `next.config.ts` currently uses a **static dev URL** (`localhost:3001/remoteEntry.js`)
because `next.config.ts` runs at build time, not at request time. The `getRemotes()`
function is the runtime-correct path but can only be wired in when a runtime
remote loading mechanism (e.g. `loadRemote`) replaces the static `remotes` map.
This is a known gap, documented with a comment in `apps/shell/next.config.ts`.

## Shared Dependencies Policy

Both shell and sportsbook use `shared: {}` (empty). Reason: `@module-federation/enhanced`
intercepts React imports and replaces them with shared scope accessors, which breaks
Next.js's own React initialization. React 19 is bundled independently in each app.
This diverges from the singleton mandate but is approved for this stack.

See `patterns.md` for the full explanation.

## Known Warnings (Non-Fatal)

1. **DTS download warning**: `Failed to download types archive from "http://10.0.0.107:<PORT>/@mf-types.zip"`
   - Source: MF enhanced's automatic DTS sync uses the network IP instead of localhost
   - Not fatal: federation runtime works correctly; DTS is developer ergonomics only
   - Workaround: none needed; types are declared manually in `apps/shell/types/remote.d.ts`

2. **async/await target warning**: "target environment does not appear to support async/await"
   - Source: webpack browserslist heuristic mismatch in Next.js 16 + MF 2.0
   - Not fatal: Next.js transpiles output correctly for actual target browsers

## Key File Locations

- `apps/shell/next.config.ts` — shell MF host config (client-side only, server gets alias)
- `apps/shell/lib/client-config.ts` — server-only, Zod-validated ClientConfig loader
- `apps/shell/lib/remote-registry.ts` — `getRemotes(config)` URL resolver
- `apps/shell/lib/remote-stubs/sportsbook-SportsbookPage.tsx` — server-side stub (never rendered)
- `apps/shell/components/SportsbookRemote.tsx` — lazy remote with ErrorBoundary + next/dynamic ssr:false
- `apps/shell/components/ThemeProvider.tsx` — client boundary, calls `themeEngine.apply(config)`
- `apps/sportsbook/webpack.container.cjs` — standalone MF 2.0 container build
- `apps/sportsbook/app/sportsbook-page.tsx` — exposed component, CSS vars only
- `apps/sportsbook/public/remoteEntry.js` — built artifact, starts with `var sportsbook;`

## ClientConfig Schema: remotes field

```ts
remotes: z.record(z.string(), z.string().url()).default({})
// Key: remote name (e.g. "sportsbook"), Value: base URL
```

## Known Remotes

| Name | Exposed Module | Port |
|------|---------------|------|
| sportsbook | `./SportsbookPage` → `app/sportsbook-page.tsx` | 3001 |

## Details

See `patterns.md` for: standalone build rationale, theme inheritance mechanism,
async/await warning root cause, DTS warning root cause.
