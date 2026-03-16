# MF + Next.js 16 Debugging Log

## Error: `Cannot find module 'webpack/lib/util/identifier'`
**Package**: `@module-federation/nextjs-mf@8.8.57`
**Cause**: nextjs-mf requires webpack internals at config load time. Next.js 16 bundles
webpack internally and does not install standalone `webpack` package.
**Fix**: Do NOT use `@module-federation/nextjs-mf` with Next.js 16. Use
`@module-federation/enhanced@2.1.0` instead.

## Error: `Cannot find module 'webpack/lib/ModuleNotFoundError'`
**Package**: `@module-federation/enhanced@2.1.0`
**Cause**: Same as above — enhanced also requires webpack internals. Next.js 16 does not
provide standalone `webpack` package in node_modules.
**Fix**: Install `webpack@^5` as a `devDependency` in the app. This provides the
`webpack/lib/*` paths that MF plugins need at import time, while Next.js 16 uses its
own internal webpack for actual compilation.

## Error: `Module not found: Can't resolve 'sportsbook/SportsbookPage'` (compile-time)
**Context**: Server-side webpack compilation in Next.js
**Cause**: Next.js compiles ALL component files (including `'use client'` marked ones)
through its server webpack compiler for RSC manifest generation. The client-only
`ModuleFederationPlugin` only runs for `!isServer`, so the server compiler cannot
resolve federated module specifiers.
**Fix**: Add webpack `resolve.alias` for each remote module in the server compilation
context, pointing to local stub files in `lib/remote-stubs/`. Stubs export a null-
returning component. See `patterns.md` for full implementation.

## Error: `Invalid loadShareSync function call from runtime #RUNTIME-006`
**Context**: When ModuleFederationPlugin is added to BOTH server and client compilations
**Cause**: MF enhanced runtime initialization code includes browser-specific operations
(WebSockets, fetch, etc.) that fail when executed in Node.js server context.
**Fix**: Do NOT add ModuleFederationPlugin to the server compilation. Use the stub alias
approach instead (see above).

## Warning: `async/await in external script, target environment may not support it`
**Severity**: Non-critical warning
**Cause**: MF external script loading uses async/await. Webpack's target for the Next.js
client bundle may be set to older environments.
**Impact**: None in modern browsers. The federation still works correctly.

## Error: `@module-federation/enhanced ModuleFederationPlugin does not accept publicPath`
**Context**: `@module-federation/enhanced/webpack` v2 `ModuleFederationPlugin` options schema
**Cause**: Unlike MF 1.0, the v2 `ModuleFederationPlugin` does NOT accept `publicPath` in its
options object. Passing it causes a fatal schema validation error at webpack startup.
**Fix**: Move `publicPath` to `output.publicPath` in the top-level webpack config object.
The plugin infers it from there. MF 2.0 schema valid keys: name, filename, exposes, remotes,
shared, library, runtime, shareScope, dts, experiments, bridge, runtimePlugins, etc.

## Error: `node webpack.container.cjs` is a no-op when file uses `module.exports = {}`
**Context**: Standalone MF container build scripts
**Cause**: A file that only exports a webpack config object does nothing when run with `node`.
The export is loaded and immediately garbage-collected. webpack-cli is required to consume it,
OR the file must call `webpack(config, callback)` imperatively.
**Fix**: Import `webpack` at the top of the file and call `webpack(config, (err, stats) => {...})`
after defining the config. This makes `node file.cjs` self-executing and removes the need for
webpack-cli in the npm script. `build:container` becomes `node webpack.container.cjs`.

## Warning: `[webpack.cache.PackFileCacheStrategy] No serializer registered for ContainerEntryModule`
**Severity**: Non-critical warning
**Cause**: webpack's persistent cache cannot serialize MF-internal module types (ContainerEntryModule,
ConsumeSharedModule, etc.). This disables incremental caching for those modules.
**Impact**: Slightly slower rebuild times. No functional impact.
