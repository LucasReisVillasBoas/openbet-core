export type OddsButtonState = 'default' | 'selected' | 'up' | 'down' | 'suspended' | 'locked'
export type OddsButtonSize = 'sm' | 'md' | 'lg'

/**
 * Props for the OddsButton component.
 *
 * Renders a betting odds button that reflects price movements and selection
 * state via CSS Custom Properties provided by the theme-engine.
 */
export interface OddsButtonProps {
  /** Market label displayed above the odds value (e.g. "Casa", "Empate", "Fora") */
  label: string
  /** Numeric odds value, formatted to 2 decimal places (e.g. 2.40) */
  odds: number
  /**
   * Visual state of the button:
   * - `default`    — neutral, unselected
   * - `selected`   — user has selected this outcome
   * - `up`         — odds price moved up since last display
   * - `down`       — odds price moved down since last display
   * - `suspended`  — market is temporarily suspended; displays "SUSP"
   * - `locked`     — market is locked; displays lock icon
   */
  state: OddsButtonState
  /** Button size variant. Defaults to 'md'. */
  size?: OddsButtonSize
  /** Click handler. Not called when state is 'suspended' or 'locked'. */
  onClick?: () => void
  /** Explicitly disables the button regardless of state. */
  disabled?: boolean
}
