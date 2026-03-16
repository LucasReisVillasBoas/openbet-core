/**
 * Represents a single selection (pick) added to the bet slip.
 */
export interface BetSlipSelection {
  /** Unique identifier for this selection */
  id: string
  /** Full event name (e.g. "Flamengo vs Palmeiras") */
  eventName: string
  /** Market name (e.g. "Resultado Final") */
  marketName: string
  /** Selected outcome name (e.g. "Casa") */
  selectionName: string
  /** Current odds value (e.g. 2.40) */
  odds: number
  /**
   * Indicates whether the odds changed since the selection was added.
   * - `'up'`   — odds moved up (more favourable for the user)
   * - `'down'` — odds moved down (less favourable for the user)
   * - `null`   — no change
   */
  oddsChanged?: 'up' | 'down' | null
}

/**
 * Props for the BetSlip component.
 */
export interface BetSlipProps {
  /** List of selections currently in the slip */
  selections: BetSlipSelection[]
  /** Called with the selection id when the user clicks the remove (✕) button */
  onRemoveSelection: (id: string) => void
  /** Called with the numeric stake value whenever the input changes */
  onStakeChange: (stake: number) => void
  /** Called when the user clicks the "FAZER APOSTA" CTA button */
  onPlaceBet: () => void
  /** Current stake amount; controlled from outside (defaults to 0) */
  stake?: number
  /** When true, the CTA button is disabled and shows a loading state */
  isLoading?: boolean
  /**
   * Bet mode:
   * - `'single'`   — only the first selection's odds are used for return calculation
   * - `'multiple'` — all selections' odds are multiplied together for the return
   * Defaults to `'single'`.
   */
  mode?: 'single' | 'multiple'
  /** Called when the user switches between single / multiple tabs */
  onModeChange?: (mode: 'single' | 'multiple') => void
}
