import type React from 'react'

// Type declarations for Module Federation remote modules consumed by shell.
// These tell TypeScript the shape of dynamically-imported remote modules.
// Keep in sync with apps/sportsbook/next.config.ts `exposes`.

declare module 'sportsbook/SportsbookPage' {
  const SportsbookPage: React.ComponentType
  export default SportsbookPage
}
