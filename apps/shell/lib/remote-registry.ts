// SERVER-ONLY — must never be imported from a client component.
// Pure function: extracts remote URLs from a validated ClientConfig.

import type { ClientConfig } from '@openbet/config-schema'

/**
 * Returns the Module Federation remote entries for the given client config.
 *
 * Enforces ADR-003: remote URLs are never hardcoded in shell source code.
 * In production, URLs must come from ClientConfig (clients/*.config.json
 * under the `remotes` key). In development, localhost fallbacks are used
 * when ClientConfig.remotes is absent.
 *
 * Throws if a required remote URL cannot be resolved in production.
 *
 * @example
 * // alpha.config.json: { "remotes": { "sportsbook": "https://cdn.example.com" } }
 * getRemotes(alphaConfig)
 * // → { sportsbook: 'sportsbook@https://cdn.example.com/_next/static/chunks/remoteEntry.js' }
 */
export function getRemotes(config: ClientConfig): Record<string, string> {
  const isDev = process.env.NODE_ENV === 'development'

  const sportsbookUrl = config.remotes?.sportsbook ?? (isDev ? 'http://localhost:3001' : null)

  if (!sportsbookUrl) {
    throw new Error('[shell] sportsbook remote URL not configured')
  }

  return {
    sportsbook: `sportsbook@${sportsbookUrl}/remoteEntry.js`,
  }
}
