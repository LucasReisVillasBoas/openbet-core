import type { CSSProperties } from 'react'

export const buttonStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '6px 14px',
  background: 'var(--color-surface)',
  border: '1px solid var(--color-border)',
  borderRadius: 'var(--layout-border-radius)',
  cursor: 'pointer',
  transition: 'border-color 200ms, background 200ms',
  color: 'var(--color-text-muted)',
  fontSize: '0.8125rem',
  fontFamily: 'var(--font-family)',
  whiteSpace: 'nowrap',
}

export const currentBrandStyle: CSSProperties = {
  background: 'var(--color-primary)',
  color: '#fff',
  borderRadius: '4px',
  padding: '2px 7px',
  fontSize: '0.6875rem',
  fontWeight: 700,
  transition: 'background 200ms',
}

export const arrowStyle: CSSProperties = {
  opacity: 0.5,
}
