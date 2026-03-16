import type { CSSProperties } from 'react'
import type { MatchCardVariant } from './MatchCard.types'

// ---------------------------------------------------------------------------
// Card container
// ---------------------------------------------------------------------------

export function getCardStyle(variant: MatchCardVariant): CSSProperties {
  const base: CSSProperties = {
    background: 'var(--color-background-card)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--layout-border-radius)',
    fontFamily: 'var(--font-family)',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    minWidth: '280px',
  }

  if (variant === 'featured') {
    return {
      ...base,
      background: 'linear-gradient(135deg, var(--color-surface), var(--color-background-card))',
      padding: '1.5rem',
    }
  }

  return base
}

// ---------------------------------------------------------------------------
// Header row
// ---------------------------------------------------------------------------

export const headerRowStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}

export const leagueStyle: CSSProperties = {
  color: 'var(--color-text-muted)',
  fontSize: '0.75rem',
  fontFamily: 'var(--font-family)',
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
}

export const liveBadgeStyle: CSSProperties = {
  background: 'var(--color-error)',
  color: '#fff', // white text on error badge — sole permitted hardcode
  fontSize: '0.625rem',
  borderRadius: '4px',
  padding: '2px 6px',
  fontWeight: 700,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
}

export const minuteStyle: CSSProperties = {
  color: 'var(--color-text-muted)',
  fontSize: '0.75rem',
  fontFamily: 'var(--font-family)',
}

export const liveIndicatorGroupStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
}

// ---------------------------------------------------------------------------
// Teams row
// ---------------------------------------------------------------------------

export function getTeamNameStyle(variant: MatchCardVariant): CSSProperties {
  return {
    color: 'var(--color-text)',
    fontWeight: 'bold',
    fontFamily: 'var(--font-family)',
    fontSize: variant === 'featured' ? '1.125rem' : '1rem',
  }
}

export const scoreStyle: CSSProperties = {
  color: 'var(--color-text)',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  fontFamily: 'var(--font-family-mono)',
  textAlign: 'center',
  minWidth: '80px',
}

export const vsStyle: CSSProperties = {
  color: 'var(--color-text-muted)',
  fontFamily: 'var(--font-family)',
  fontSize: '0.875rem',
  textAlign: 'center',
  minWidth: '40px',
}

export const startTimeStyle: CSSProperties = {
  color: 'var(--color-text-muted)',
  fontSize: '0.75rem',
  fontFamily: 'var(--font-family)',
  textAlign: 'center',
}

export const teamsRowStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}

// ---------------------------------------------------------------------------
// Odds row
// ---------------------------------------------------------------------------

export const oddsRowStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  gap: '8px',
  flexWrap: 'wrap',
}
