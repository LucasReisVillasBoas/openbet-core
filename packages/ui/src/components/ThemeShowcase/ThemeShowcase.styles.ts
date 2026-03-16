import type { CSSProperties } from 'react'
import type { OddsButtonState } from '../OddsButton/OddsButton.types'

// ---------------------------------------------------------------------------
// Section layout
// ---------------------------------------------------------------------------

export const sectionTitleStyle: CSSProperties = {
  fontSize: '1.1rem',
  fontWeight: 600,
  marginBottom: '8px',
  fontFamily: 'var(--font-family)',
}

export const cardStyle: CSSProperties = {
  background: 'var(--color-background-card)',
  border: '1px solid var(--color-border)',
  borderRadius: 'var(--layout-border-radius)',
  padding: '16px',
}

// ---------------------------------------------------------------------------
// Color swatches
// ---------------------------------------------------------------------------

export const colorBlockStyle: CSSProperties = {
  width: '100%',
  height: '60px',
  borderRadius: 'var(--layout-border-radius)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'var(--font-family-mono)',
  fontSize: '0.75rem',
  fontWeight: 600,
  color: '#fff', // white text on color swatches — sole permitted hardcode
}

// ---------------------------------------------------------------------------
// Border radius demo
// ---------------------------------------------------------------------------

export const radiusBoxStyle: CSSProperties = {
  width: '60px',
  height: '60px',
  border: '2px solid var(--color-primary)',
  background: 'var(--color-surface)',
}

// ---------------------------------------------------------------------------
// Typography samples
// ---------------------------------------------------------------------------

export const monoTextStyle: CSSProperties = {
  fontFamily: 'var(--font-family-mono)',
  fontSize: '1.25rem',
  fontWeight: 700,
  color: 'var(--color-primary)',
}

export const bodyTextStyle: CSSProperties = {
  fontFamily: 'var(--font-family)',
  fontSize: '1rem',
  color: 'var(--color-text)',
}

export const headingTextStyle: CSSProperties = {
  fontFamily: 'var(--font-family)',
  fontSize: '1.5rem',
  fontWeight: 700,
  color: 'var(--color-text)',
}

export const labelStyle: CSSProperties = {
  fontFamily: 'var(--font-family)',
  fontSize: '0.7rem',
  color: 'var(--color-text-muted)',
  marginTop: '4px',
  textAlign: 'center' as const,
}

// ---------------------------------------------------------------------------
// OddsButton states sample data
// ---------------------------------------------------------------------------

export const oddsStates: Array<{ state: OddsButtonState; odds: number; label: string }> = [
  { state: 'default', odds: 1.85, label: 'Casa' },
  { state: 'selected', odds: 1.85, label: 'Casa' },
  { state: 'up', odds: 2.1, label: 'Empate' },
  { state: 'down', odds: 3.25, label: 'Fora' },
  { state: 'suspended', odds: 2.0, label: 'Casa' },
  { state: 'locked', odds: 1.95, label: 'Casa' },
]
