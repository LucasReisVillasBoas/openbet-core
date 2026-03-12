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
 * Served at: http://localhost:3001/remoteEntry.js
 */

const path = require('path')
const { ModuleFederationPlugin } = require('@module-federation/enhanced/webpack')

module.exports = {
  name: 'sportsbook-container',
  mode: 'development',
  devtool: false,

  // Empty entry — ModuleFederationPlugin injects 'remoteEntry' as the entry.
  entry: {},

  output: {
    path: path.resolve(__dirname, 'public'),
    // publicPath must match the URL from which the shell fetches async chunks.
    publicPath: 'http://localhost:3001/',
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
