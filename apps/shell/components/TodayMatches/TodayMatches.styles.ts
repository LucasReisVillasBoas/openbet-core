import type { CSSProperties } from 'react'

export const emptyStateStyle: CSSProperties = {
  color: 'var(--color-text-muted)',
  padding: '24px',
  textAlign: 'center',
}

export const leagueHeaderStyle: CSSProperties = {
  fontSize: '0.6875rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  color: 'var(--color-text-muted)',
  padding: '12px 0 8px',
  borderBottom: '1px solid var(--color-border)',
  marginBottom: '12px',
}

export const matchesGridStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
  gap: '16px',
}
