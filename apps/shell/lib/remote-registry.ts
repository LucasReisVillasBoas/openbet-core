// SERVER-ONLY — must never be imported from a client component.
// Resolves Module Federation remote entry URLs based on the current environment.

/**
 * Returns the Module Federation remote entries for the current environment.
 *
 * ADR-003 compliance note:
 * Build-time resolution via NODE_ENV is used here because next.config.ts runs
 * at build time, not at request time. ClientConfig (per-request, server-only)
 * cannot feed into the static webpack `remotes` map. The production URL is a
 * known, stable deployment constant — not an arbitrary hardcode.
 *
 * For true per-operator URL overrides at runtime, a runtime remote loading
 * mechanism (e.g. loadRemote) would replace this static map entirely.
 *
 * @example
 * // In next.config.ts:
 * remotes: { sportsbook: getRemotes().sportsbook }
 */

export function getRemotes(): Record<string, string> {
  const sportsbookUrl =
    process.env.NEXT_PUBLIC_SPORTSBOOK_REMOTE ||
    (process.env.NODE_ENV === 'production'
      ? 'https://openbet-core-sportsbook.vercel.app/remoteEntry.js'
      : 'http://localhost:3001/remoteEntry.js')

  return {
    sportsbook: `sportsbook@${sportsbookUrl}`,
  }
}
