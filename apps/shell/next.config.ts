import { ModuleFederationPlugin } from '@module-federation/enhanced/webpack'
import type { NextConfig } from 'next'
import path from 'path'

// ---------------------------------------------------------------------------
// Module Federation 2.0 — shell as HOST
//
// Uses @module-federation/enhanced/webpack (successor to nextjs-mf).
//
// Server/Client split strategy:
// - Client (!isServer): MF plugin intercepts 'sportsbook/*' imports and loads
//   the remote entry at runtime.
// - Server (isServer): Webpack alias maps 'sportsbook/SportsbookPage' to a
//   local stub that returns null. The stub is never executed because
//   SportsbookRemote.tsx uses next/dynamic with ssr:false, but the alias is
//   required to satisfy webpack's server-side module resolution.
//
// ADR-003 compliance note:
// The remote URL in `remotes` is a static dev-fallback. Production remote
// URLs are resolved at runtime from ClientConfig via lib/remote-registry.ts.
// ---------------------------------------------------------------------------

const nextConfig: NextConfig = {
  transpilePackages: ['@openbet/ui', '@openbet/theme-engine'],

  webpack(config, { isServer }) {
    // Prevent chunk array collision with other MF apps (both default to webpackChunk_N_E)
    config.output.uniqueName = 'shell'

    if (isServer) {
      // Provide server-side stubs for all federated remote modules.
      // These stubs are never rendered (ssr:false in next/dynamic) but must
      // exist to satisfy webpack's server compilation module graph.
      config.resolve = config.resolve ?? {}
      config.resolve.alias = {
        ...(config.resolve.alias ?? {}),
        'sportsbook/SportsbookPage': path.resolve(
          __dirname,
          'lib/remote-stubs/sportsbook-SportsbookPage.tsx',
        ),
      }
      return config
    }

    config.plugins.push(
      new ModuleFederationPlugin({
        name: 'shell',
        remotes: {
          sportsbook: 'sportsbook@http://localhost:3001/remoteEntry.js',
        },
        // React is intentionally NOT in the shared scope.
        // @module-federation/enhanced intercepts React imports and replaces them
        // with shared scope accessors, breaking Next.js's own React initialization.
        // The sportsbook container bundles its own React 19 (pinned via alias in
        // webpack.container.cjs). Both apps use React 19 independently.
        shared: {},
      }),
    )

    return config
  },
}

export default nextConfig
