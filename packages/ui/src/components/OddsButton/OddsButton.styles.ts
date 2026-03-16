import type { CSSProperties } from 'react'
import type { OddsButtonSize, OddsButtonState } from './OddsButton.types'

// ---------------------------------------------------------------------------
// Size map
// ---------------------------------------------------------------------------

export const sizeStyles: Record<OddsButtonSize, CSSProperties> = {
  sm: { padding: '4px 8px', fontSize: '0.75rem' },
  md: { padding: '8px 12px', fontSize: '0.875rem' },
  lg: { padding: '12px 16px', fontSize: '1rem' },
}

// ---------------------------------------------------------------------------
// State styles
// ---------------------------------------------------------------------------

export function getStateStyles(state: OddsButtonState): CSSProperties {
  switch (state) {
    case 'selected':
      return {
        background: 'var(--color-primary)',
        borderColor: 'var(--color-primary)',
        color: '#fff', // sole permitted hardcode — white text on primary background
      }
    case 'up':
      return {
        background: 'var(--color-surface)',
        borderColor: 'var(--color-odds-up)',
        color: 'var(--color-odds-up)',
        animation: 'pulseUp 600ms ease-in-out',
      }
    case 'down':
      return {
        background: 'var(--color-surface)',
        borderColor: 'var(--color-odds-down)',
        color: 'var(--color-odds-down)',
        animation: 'pulseDown 600ms ease-in-out',
      }
    case 'suspended':
    case 'locked':
      return {
        background: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
        color: 'var(--color-text-muted)',
        opacity: 0.5,
        cursor: 'not-allowed',
      }
    case 'default':
    default:
      return {
        background: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
        color: 'var(--color-text)',
      }
  }
}

// ---------------------------------------------------------------------------
// Keyframe animations injected as a <style> tag
// ---------------------------------------------------------------------------

export const ANIMATION_STYLES = `
@keyframes pulseUp {
  0%, 100% { box-shadow: 0 0 0 0 var(--color-odds-up); }
  50%       { box-shadow: 0 0 0 4px transparent; }
}
@keyframes pulseDown {
  0%, 100% { box-shadow: 0 0 0 0 var(--color-odds-down); }
  50%       { box-shadow: 0 0 0 4px transparent; }
}
`
