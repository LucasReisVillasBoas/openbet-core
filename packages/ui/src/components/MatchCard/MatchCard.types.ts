export type MatchCardVariant = 'pre-match' | 'live' | 'featured'

export interface MatchCardScore {
  home: number
  away: number
}

export interface MatchCardOdds {
  home: number
  draw?: number
  away: number
}

/**
 * Props for the MatchCard component.
 *
 * Displays a sports match with optional live score, odds buttons, and league
 * information. Supports pre-match, live, and featured display variants.
 */
export interface MatchCardProps {
  /** Home team name */
  homeTeam: string
  /** Away team name */
  awayTeam: string
  /** League or competition name (e.g. "Brasileirão Série A") */
  league?: string
  /** Formatted start time string shown in pre-match view (e.g. "Hoje 21:00") */
  startTime?: string
  /**
   * Visual variant:
   * - `pre-match` — standard card, shows start time (default)
   * - `live`      — shows live badge, score, and elapsed minute
   * - `featured`  — larger card with gradient background and larger typography
   */
  variant?: MatchCardVariant
  /** When true, renders the live badge regardless of variant */
  isLive?: boolean
  /** Current score — only rendered when provided (typically in live variant) */
  score?: MatchCardScore
  /** Elapsed match minute displayed next to the live badge (e.g. 67) */
  minute?: number
  /** Odds data for the three primary markets. When undefined the odds row is hidden. */
  odds?: MatchCardOdds
  /** Called with the market key when the user clicks an odds button */
  onOddsClick?: (market: 'home' | 'draw' | 'away') => void
  /**
   * Set of market keys that are currently selected (e.g. from a bet slip).
   * Each key in this set will render the corresponding OddsButton as `state='selected'`.
   */
  selectedMarkets?: Set<'home' | 'draw' | 'away'>
}
