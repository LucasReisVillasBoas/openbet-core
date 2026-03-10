import type { ClientConfig } from '@openbet/config-schema'

// ---------------------------------------------------------------------------
// Border radius map
// Converts the layout.borderRadius enum to a concrete CSS value.
// ---------------------------------------------------------------------------

const RADIUS_MAP: Record<string, string> = {
  none: '0px',
  sm: '4px',
  md: '8px',
  lg: '16px',
  full: '9999px',
}

// ---------------------------------------------------------------------------
// Core mapping function
// ---------------------------------------------------------------------------

/**
 * Converts a validated ClientConfig into a flat map of CSS Custom Property
 * names → values, ready to be applied to the DOM via style.setProperty.
 *
 * This function is pure — no DOM access, no side effects.
 * All CSS var naming follows the convention: --<category>-<sub>-<variant>
 *
 * @example
 * const vars = buildCSSVars(config)
 * // { '--color-primary': '#1a56db', '--font-family': 'Inter, ...', ... }
 */
export function buildCSSVars(config: ClientConfig): Record<string, string> {
  const { theme, layout, brand } = config
  const { colors, typography } = theme

  return {
    // -----------------------------------------------------------------------
    // Color tokens (14 semantic colors)
    // -----------------------------------------------------------------------
    '--color-primary': colors.primary,
    '--color-primary-hover': colors.primaryHover,
    '--color-secondary': colors.secondary,
    '--color-background': colors.background,
    '--color-background-card': colors.backgroundCard,
    '--color-surface': colors.surface,
    '--color-text': colors.text,
    '--color-text-muted': colors.textMuted,
    '--color-border': colors.border,
    '--color-success': colors.success,
    '--color-error': colors.error,
    '--color-warning': colors.warning,
    '--color-odds-up': colors.oddsUp,
    '--color-odds-down': colors.oddsDown,

    // -----------------------------------------------------------------------
    // Typography tokens
    // -----------------------------------------------------------------------
    '--font-family': typography.fontFamily,
    '--font-family-mono': typography.fontFamilyMono,
    '--font-size-base': `${typography.scaleBase}px`,

    // -----------------------------------------------------------------------
    // Layout tokens
    // -----------------------------------------------------------------------
    '--layout-sidebar-width': `${layout.sidebarWidth}px`,
    '--layout-header-height': `${layout.headerHeight}px`,
    '--layout-bet-slip-width': `${layout.betSlipWidth}px`,
    '--layout-border-radius': RADIUS_MAP[layout.borderRadius] ?? '8px',

    // -----------------------------------------------------------------------
    // Brand tokens
    // -----------------------------------------------------------------------
    '--brand-name': brand.name,
    '--brand-slug': brand.slug,
  }
}
