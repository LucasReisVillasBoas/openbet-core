import type { NextConfig } from 'next'
import type { Configuration } from 'webpack'

// ---------------------------------------------------------------------------
// MF container for this app is built by webpack.container.cjs (standalone),
// NOT by the Next.js webpack pipeline. See webpack.container.cjs for details.
//
// transpilePackages: @openbet/ui and @openbet/theme-engine ship TypeScript
// source (no compiled dist). Next.js must transpile them for standalone usage.
//
// webpack override: sets output.publicPath on the client bundle so that
// dynamically loaded chunks (code-split pages, async imports) are requested
// from the correct host in production.
// ---------------------------------------------------------------------------

const nextConfig: NextConfig = {
  transpilePackages: ['@openbet/ui', '@openbet/theme-engine'],

  webpack(config: Configuration, { isServer }: { isServer: boolean }) {
    if (!isServer) {
      const isProd = process.env.NODE_ENV === 'production'
      const publicPath = isProd
        ? 'https://openbet-core-sportsbook.vercel.app/'
        : 'http://localhost:3001/'

      config.output = config.output ?? {}
      config.output.publicPath = publicPath
    }

    return config
  },
}

export default nextConfig
