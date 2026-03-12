# MF Patterns — OpenBet Core

## Why the Standalone Webpack Container Build Exists

### The Problem Chain

**Attempt 1: `@module-federation/nextjs-mf`**
Incompatible with Next.js 16. Package targets Next.js 12-14 and doesn't hook
into Next.js 16's compiler pipeline correctly.

**Attempt 2: `@module-federation/enhanced/webpack` inside `next.config.ts` of sportsbook**
The Next.js webpack pipeline generates a `remoteEntry.js` whose chunks push to
`self["webpackChunksportsbook"]`. That global is the sportsbook app's own webpack
runtime. When the shell loads this `remoteEntry.js`, the sportsbook runtime doesn't
exist in the shell's global scope — the container initialization callback fires but
the module registry is never populated. The `Promise` returned by `import()` hangs
silently forever.

**Solution (current): Standalone build via `webpack.container.cjs`**
Running webpack directly (not through Next.js) produces a `remoteEntry.js` that:
- Uses `@module-federation/enhanced/webpack` (MF 2.0 — same as the shell host)
- Includes webpack's runtime bootstrap inline (self-contained, no external runtime)
- The container variable `var sportsbook;` is hoisted to global scope correctly
- Is loadable by the shell's MF 2.0 host runtime without any global collisions

The sportsbook's Next.js app (`pnpm dev`) continues to serve its own routes at
`:3001`. The container build produces `public/remoteEntry.js` which Next.js serves
as a static file. These are two independent build outputs that coexist.

**Critical invariant**: NEVER add ModuleFederationPlugin to `apps/sportsbook/next.config.ts`.
It was tried and produces the broken `remoteEntry.js` described in Attempt 2.

## Why `shared: {}` Instead of Singleton React

The mandate requires `singleton: true` for shared deps. However, with
`@module-federation/enhanced/webpack` + Next.js, the MF enhanced plugin intercepts
all `react` and `react-dom` imports during the webpack compilation of the host (shell).
It replaces them with shared scope accessor modules (`__federation_shared_react`).
Next.js's own internal bootstrap code (the `_app` initialization) imports React
before the shared scope is initialized — this causes "Cannot read properties of
undefined" or "Hooks can only be called inside a function component" errors.

**Approved solution**: `shared: {}` in both shell and sportsbook.
- Shell's React 18/19 is managed entirely by Next.js
- Sportsbook container bundles React 19 independently (pinned via `resolve.alias`)
- No shared scope = no interception = no bootstrap ordering issue
- The cost: React is bundled twice (one per app). Acceptable for this architecture.

**Note**: If a future version of `@module-federation/enhanced` fixes the Next.js
bootstrap ordering issue, re-evaluate adding React as a singleton.

## Theme Inheritance Without Direct Communication

The remote (`sportsbook`) uses `var(--color-*)` CSS Custom Properties in all
its components. No React context, no props, no events are involved.

The inheritance chain:
1. Shell's `RootLayout` (server) calls `getClientConfig()` → validated `ClientConfig`
2. `ThemeProvider` (client boundary) receives `config` as a prop
3. `useEffect(() => themeEngine.apply(config))` calls `ThemeEngine` which writes
   CSS variables to `document.documentElement` (the `:root`)
4. These CSS variables cascade to every element in the DOM, including the
   `<SportsbookPage>` component loaded into the DOM by MF federation
5. The sportsbook component uses `style={{ color: 'var(--color-text)' }}` etc.
   — those vars are already defined on `:root` before the component renders

**Key insight**: CSS Custom Properties cascade through the entire DOM including
dynamically inserted content (federation chunks). The remote doesn't need to know
it's in a shell — it just consumes CSS vars that happen to already be there.
Switching operator = different JSON config = different CSS var values = different theme.

## Shell Server/Client Split for MF

Next.js compiles each page twice: once for the server (Node.js), once for the client
(browser). The MF `remotes` map only makes sense in the browser (the remote JS is
loaded at runtime client-side). The server compilation would fail trying to resolve
`sportsbook/SportsbookPage` as a webpack external.

Solution in `apps/shell/next.config.ts`:
- `isServer=true`: add a webpack alias mapping `sportsbook/SportsbookPage` →
  `lib/remote-stubs/sportsbook-SportsbookPage.tsx` (returns `null`, never rendered)
- `isServer=false`: add `ModuleFederationPlugin` with the real remote URL

The `SportsbookRemote.tsx` uses `next/dynamic(..., { ssr: false })` which ensures
the stub is never called (Next.js skips SSR for that dynamic import), but the alias
is still needed to prevent the server-side webpack compilation from erroring on an
unresolvable module.

## MF Container Naming Convention

```
container name:  sportsbook          (matches global var `var sportsbook;`)
filename:        remoteEntry.js      (served at /remoteEntry.js)
remote string:   sportsbook@http://localhost:3001/remoteEntry.js
```

The shell references this as `'sportsbook/SportsbookPage'` in dynamic imports.
The TypeScript declaration in `apps/shell/types/remote.d.ts` provides compile-time
types for this module path.

## Dev Workflow

1. Build sportsbook container: `cd apps/sportsbook && pnpm build:container`
2. Start sportsbook: `cd apps/sportsbook && pnpm dev` (port 3001)
3. Start shell: `cd apps/shell && pnpm dev` (port 3000)
4. Shell loads `http://localhost:3001/remoteEntry.js` when `SportsbookRemote` mounts
5. Stop both: `kill $(lsof -ti:3000,3001)`

The container build only needs to re-run when `app/sportsbook-page.tsx` or
`@openbet/ui` components change. Hot reload in the sportsbook Next.js app does NOT
rebuild the container — it must be rebuilt manually.
