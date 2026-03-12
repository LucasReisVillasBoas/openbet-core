/**
 * Standalone Module Federation container build for apps/sportsbook.
 *
 * WHY THIS EXISTS:
 * Next.js generates webpack chunks that rely on the app's own webpack runtime
 * to be bootstrapped. When the shell loads Next.js-generated remoteEntry.js,
 * the chunk pushes to self["webpackChunksportsbook"], but the sportsbook's
 * runtime doesn't exist in the shell context — the container never initializes.
 *
 * This standalone build produces a proper MF container (remoteEntry.js) that:
 * - Uses @module-federation/enhanced/webpack (MF 2.0) — same as the shell host
 * - Includes webpack's runtime bootstrap inline (no external runtime needed)
 * - Is loadable by the shell's MF 2.0 host runtime
 *
 * PROTOCOL NOTE:
 * Both shell (host) and this container use @module-federation/enhanced/webpack.
 * Mixing MF 1.0 (webpack.container.ModuleFederationPlugin) with MF 2.0 hosts
 * causes silent hangs — the shell's runtime doesn't recognize the MF 1.0
 * container format and the Promise returned by import() never resolves.
 *
 * Output: apps/sportsbook/public/remoteEntry.js
 * Served at: https://openbet-core-sportsbook.vercel.app/remoteEntry.js (production)
 *            http://localhost:3001/remoteEntry.js (dev — use build:container:dev)
 */

const path = require('path')
const webpack = require('webpack')
const { ModuleFederationPlugin } = require('@module-federation/enhanced/webpack')

const config = {
  name: 'sportsbook-container',
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  devtool: false,

  // Empty entry — ModuleFederationPlugin injects 'remoteEntry' as the entry.
  entry: {},

  output: {
    path: path.resolve(__dirname, 'public'),
    // Stable production URL — preview deployments use dynamic VERCEL_URL
    // but remoteEntry.js must reference a canonical, immutable origin so
    // the shell can reliably load it across all environments. The dev
    // variant (build:container:dev) restores localhost for local work.
    publicPath: process.env.NODE_ENV === 'development'
      ? 'http://localhost:3001/'
      : 'https://openbet-core-sportsbook.vercel.app/',
    clean: false, // Don't wipe Next.js public assets on rebuild
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      // Pin React to the sportsbook's own node_modules (React 19) to prevent
      // transitive dependencies (e.g. packages/ui peer deps) from resolving
      // to React 18. Multiple React instances cause "invalid hook call" errors.
      'react': path.resolve(__dirname, 'node_modules/react'),
      'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
      // Resolve workspace packages to their TypeScript sources so babel-loader
      // can compile them. This avoids needing a compiled dist for each package.
      '@openbet/ui': path.resolve(__dirname, '../../packages/ui/src'),
      '@openbet/theme-engine': path.resolve(__dirname, '../../packages/theme-engine/src'),
      '@openbet/config-schema': path.resolve(__dirname, '../../packages/config-schema/src'),
    },
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: { esmodules: true } }],
              ['@babel/preset-react', { runtime: 'automatic' }],
              '@babel/preset-typescript',
            ],
          },
        },
        // Exclude all node_modules. @openbet/* are resolved via alias above,
        // not from node_modules, so they pass through babel-loader correctly.
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'sportsbook',
      filename: 'remoteEntry.js',

      exposes: {
        './SportsbookPage': './app/sportsbook-page.tsx',
      },

      // React is bundled into the container independently (pinned to React 19
      // via resolve.alias above). No sharing with the shell — @module-federation
      // shared scope coordination breaks Next.js's React initialization.
      shared: {},
    }),
  ],
}

// When invoked directly via `node webpack.container.cjs` (or via the
// build:container npm script), run webpack imperatively and report results.
// webpack-cli is NOT required for this execution path.
webpack(config, (err, stats) => {
  if (err) {
    console.error('webpack fatal error:', err.message)
    process.exit(1)
  }
  if (stats.hasErrors()) {
    console.error(stats.toString({ colors: true, errors: true }))
    process.exit(1)
  }
  const info = stats.toJson({ assets: true, timings: true })
  const asset = info.assets?.[0]
  console.log(
    `[MF container] built in ${info.time}ms — ${asset?.name} (${Math.round((asset?.size ?? 0) / 1024)} KB)`
  )
})
