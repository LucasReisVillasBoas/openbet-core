# MF Engineer — Persistent Memory

## Project Stack
- Next.js 16.1.6 + webpack mode (both shell and sportsbook use `--webpack` flag)
- @module-federation/enhanced@2.1.0 (NOT nextjs-mf — see below)
- React 19.2.3, TypeScript strict, pnpm workspaces

## Critical: nextjs-mf is INCOMPATIBLE with Next.js 16
`@module-federation/nextjs-mf` only supports Next `^12-15`. On Next 16 it crashes
with `Cannot find module 'webpack/lib/...'` at config load time. See `debugging.md`.

Use `@module-federation/enhanced/webpack` → `ModuleFederationPlugin` instead.

## Critical: webpack must be installed as peer dep
Next.js 16 does not expose standalone `webpack` package. Both `@module-federation/enhanced`
and `nextjs-mf` require `require('webpack/lib/...')` to load. Install `webpack@^5` as
devDependency in any app using MF. See `debugging.md`.

## Next.js 16 + MF Server/Client Split Pattern
See `patterns.md` for full implementation. Summary:
- Client: `ModuleFederationPlugin` in `webpack(!isServer)` context
- Server: webpack `resolve.alias` maps `remote/Module` → local stub `.tsx` file
- Consumer: `next/dynamic({ ssr: false })` wraps the federated import
- Stub files live in `lib/remote-stubs/` in the shell

## Known Remotes
- `sportsbook` — exposes `./SportsbookPage` — runs on localhost:3001 in dev

## @openbet/ui Package Status
No compiled dist. Exports source TypeScript via `main: ./src/index.ts`.
Apps that import from it must add `transpilePackages: ['@openbet/ui']` in next.config.ts.

## ClientConfig Remote URL Pattern
`config.remotes?.sportsbook` — key is the remote name (string, full URL base).
`getRemotes()` in `lib/remote-registry.ts` formats it as `name@url/_next/static/chunks/remoteEntry.js`.

## Links to Detail Files
- `debugging.md` — root causes and fixes for MF + Next.js 16 errors
- `patterns.md` — canonical implementation patterns for this project
