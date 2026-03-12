import React, { CSSProperties } from 'react'
import type { OddsButtonProps, OddsButtonState } from './OddsButton.types'
import { sizeStyles, getStateStyles, ANIMATION_STYLES } from './OddsButton.styles'

// ---------------------------------------------------------------------------
// Odds display helper
// ---------------------------------------------------------------------------

function getOddsDisplay(state: OddsButtonState, odds: number): string {
  if (state === 'suspended') return 'SUSP'
  if (state === 'locked') return '\uD83D\uDD12' // 🔒
  return odds.toFixed(2)
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function OddsButton({
  label,
  odds,
  state,
  size = 'md',
  onClick,
  disabled = false,
}: OddsButtonProps) {
  const isInteractionBlocked = disabled || state === 'suspended' || state === 'locked'

  const baseStyle: CSSProperties = {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2px',
    border: '1px solid',
    borderRadius: 'var(--layout-border-radius)',
    fontFamily: 'var(--font-family)',
    fontWeight: 600,
    lineHeight: 1.2,
    cursor: isInteractionBlocked ? 'not-allowed' : 'pointer',
    transition: 'background 150ms ease, border-color 150ms ease, color 150ms ease',
    minWidth: '64px',
    textAlign: 'center',
    ...sizeStyles[size],
    ...getStateStyles(state),
    ...(disabled && state !== 'suspended' && state !== 'locked'
      ? { opacity: 0.5, cursor: 'not-allowed' }
      : {}),
  }

  const labelStyle: CSSProperties = {
    fontSize: '0.75em',
    fontWeight: 400,
    color: 'inherit',
    opacity: 0.8,
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
  }

  const oddsStyle: CSSProperties = {
    fontSize: '1em',
    fontWeight: 700,
    color: 'inherit',
    fontFamily: state === 'suspended' ? 'var(--font-family)' : 'var(--font-family-mono)',
  }

  function handleClick() {
    if (!isInteractionBlocked && onClick) {
      onClick()
    }
  }

  return (
    <>
      <style>{ANIMATION_STYLES}</style>
      <button
        type="button"
        style={baseStyle}
        onClick={handleClick}
        disabled={isInteractionBlocked}
        aria-pressed={state === 'selected'}
        aria-disabled={isInteractionBlocked}
      >
        <span style={labelStyle}>{label}</span>
        <span style={oddsStyle}>{getOddsDisplay(state, odds)}</span>
      </button>
    </>
  )
}
