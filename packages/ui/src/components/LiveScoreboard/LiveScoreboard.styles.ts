import type { CSSProperties } from 'react'

// ---------------------------------------------------------------------------
// Container
// ---------------------------------------------------------------------------

export const containerStyle: CSSProperties = {
  background: 'var(--color-background-card)',
  border: '1px solid var(--color-border)',
  borderRadius: 'var(--layout-border-radius)',
  padding: '16px',
  fontFamily: 'var(--font-family)',
  color: 'var(--color-text)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '12px',
  minWidth: '280px',
}

// ---------------------------------------------------------------------------
// Teams row
// ---------------------------------------------------------------------------

export const teamsContainerStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  gap: '16px',
}

export const teamStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontWeight: 600,
  fontSize: '1rem',
  flex: 1,
}

export const teamLogoStyle: CSSProperties = {
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  objectFit: 'cover',
}

export const teamNameStyle: CSSProperties = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  color: 'var(--color-text)',
}

export const awayTeamStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontWeight: 600,
  fontSize: '1rem',
  flex: 1,
  justifyContent: 'flex-end',
}

// ---------------------------------------------------------------------------
// Score
// ---------------------------------------------------------------------------

export const scoreStyle: CSSProperties = {
  fontFamily: 'var(--font-family-mono)',
  fontSize: '1.5rem',
  fontWeight: 700,
  color: 'var(--color-primary)',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
}

// ---------------------------------------------------------------------------
// Time / period
// ---------------------------------------------------------------------------

export const timeContainerStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
}

export const minuteStyle: CSSProperties = {
  fontFamily: 'var(--font-family-mono)',
  fontSize: '0.9rem',
  color: 'var(--color-text-muted)',
}

export const periodStyle: CSSProperties = {
  fontSize: '0.9rem',
  color: 'var(--color-text-muted)',
  fontWeight: 600,
  fontFamily: 'var(--font-family)',
}

// ---------------------------------------------------------------------------
// Last update
// ---------------------------------------------------------------------------

export const lastUpdateStyle: CSSProperties = {
  fontSize: '0.75rem',
  color: 'var(--color-text-muted)',
  fontFamily: 'var(--font-family)',
}
