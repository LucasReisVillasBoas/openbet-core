import type { NextConfig } from 'next'

// ---------------------------------------------------------------------------
// MF container for this app is built by webpack.container.cjs (standalone),
// NOT by the Next.js webpack pipeline. See webpack.container.cjs for details.
//
// transpilePackages: @openbet/ui and @openbet/theme-engine ship TypeScript
// source (no compiled dist). Next.js must transpile them for standalone usage.
// ---------------------------------------------------------------------------

const nextConfig: NextConfig = {
  transpilePackages: ['@openbet/ui', '@openbet/theme-engine'],
}

export default nextConfig
