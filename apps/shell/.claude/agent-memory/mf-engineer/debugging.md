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

## Warning: `[webpack.cache.PackFileCacheStrategy] No serializer registered for ContainerEntryModule`
**Severity**: Non-critical warning
**Cause**: webpack's persistent cache cannot serialize MF-internal module types (ContainerEntryModule,
ConsumeSharedModule, etc.). This disables incremental caching for those modules.
**Impact**: Slightly slower rebuild times. No functional impact.
