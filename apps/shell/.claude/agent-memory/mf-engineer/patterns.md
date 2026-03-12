# MF Implementation Patterns — OpenBet Core (Next.js 16)

## Shell Host Config Pattern (`apps/shell/next.config.ts`)

```typescript
import { ModuleFederationPlugin } from '@module-federation/enhanced/webpack'
import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    if (isServer) {
      // Map remote module specifiers to local stubs for server compilation.
      // Never executed at runtime (ssr:false in next/dynamic), but required
      // to satisfy webpack's server-side module graph resolution.
      config.resolve = config.resolve ?? {}
      config.resolve.alias = {
        ...(config.resolve.alias ?? {}),
        'sportsbook/SportsbookPage': path.resolve(
          __dirname, 'lib/remote-stubs/sportsbook-SportsbookPage.tsx'
        ),
      }
      return config
    }

    config.plugins.push(
      new ModuleFederationPlugin({
        name: 'shell',
        remotes: {
          sportsbook: 'sportsbook@http://localhost:3001/_next/static/chunks/remoteEntry.js',
        },
        shared: {
          react: { singleton: true, requiredVersion: false },
          'react-dom': { singleton: true, requiredVersion: false },
          '@openbet/theme-engine': { singleton: true, requiredVersion: false },
          '@openbet/config-schema': { singleton: true, requiredVersion: false },
        },
      }),
    )
    return config
  },
}
export default nextConfig
```

## Remote Consumer Client Component Pattern (`components/SportsbookRemote.tsx`)

```typescript
'use client'
import React, { Component } from 'react'
import dynamic from 'next/dynamic'

// next/dynamic with ssr:false prevents server-side execution of the stub.
const SportsbookPage = dynamic(
  () => import('sportsbook/SportsbookPage'),
  { ssr: false, loading: () => <LoadingFallback /> }
)

class RemoteErrorBoundary extends Component<...> { ... }

export function SportsbookRemote() {
  return (
    <RemoteErrorBoundary fallback={<ErrorFallback />}>
      <SportsbookPage />
    </RemoteErrorBoundary>
  )
}
```

## Stub File Pattern (`lib/remote-stubs/sportsbook-SportsbookPage.tsx`)

```typescript
// Never executed. Exists only to satisfy server-side webpack module resolution.
export default function SportsbookPageStub() { return null }
```

## Remote Config Pattern (`apps/sportsbook/next.config.ts`)

```typescript
import { ModuleFederationPlugin } from '@module-federation/enhanced/webpack'

const nextConfig: NextConfig = {
  transpilePackages: ['@openbet/ui', '@openbet/theme-engine'], // workspace TS packages
  webpack(config, { isServer }) {
    if (!isServer) {
      config.plugins.push(
        new ModuleFederationPlugin({
          name: 'sportsbook',
          filename: 'static/chunks/remoteEntry.js',
          exposes: {
            './SportsbookPage': './app/sportsbook-page.tsx',
            // Do NOT expose raw .ts files from outside the app directory —
            // they are outside Next.js's transpilation boundary.
          },
          shared: { react: { singleton: true }, 'react-dom': { singleton: true }, ... },
        })
      )
    }
    return config
  },
}
```

## Required package.json additions for MF apps (Next.js 16)

```json
{
  "dependencies": { "@module-federation/enhanced": "^2.1.0" },
  "devDependencies": { "webpack": "^5" }
}
```

## Naming Conventions
- Remote filename: `static/chunks/remoteEntry.js` (accessible via `/_next/static/chunks/remoteEntry.js`)
- Expose keys: `'./ComponentName'` (dot-slash prefix required)
- Remote consumer key: `remoteName/ExposedKey` e.g. `sportsbook/SportsbookPage`
- Stub files: `lib/remote-stubs/{remoteName}-{ExposedKey}.tsx`
