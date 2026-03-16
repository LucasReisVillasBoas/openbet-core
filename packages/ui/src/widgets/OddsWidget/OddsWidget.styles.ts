import type { CSSProperties } from 'react'

export const containerStyle: CSSProperties = {
  background: 'var(--color-background-card)',
  border: '1px solid var(--color-border)',
  borderRadius: 'var(--layout-border-radius)',
  padding: '16px',
  fontFamily: 'var(--font-family)',
}

export const headerStyle: CSSProperties = {
  fontWeight: 600,
  fontSize: '1rem',
  color: 'var(--color-text)',
  marginBottom: '12px',
  textAlign: 'center',
}

export const oddsGridStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '8px',
}

export const oddsButtonWrapperStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
}
