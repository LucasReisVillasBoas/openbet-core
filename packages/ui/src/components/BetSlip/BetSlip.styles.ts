import type { CSSProperties } from 'react'

// ---------------------------------------------------------------------------
// Container
// ---------------------------------------------------------------------------

export const containerStyle: CSSProperties = {
  background: 'var(--color-background-card)',
  border: '1px solid var(--color-border)',
  borderRadius: 'var(--layout-border-radius)',
  fontFamily: 'var(--font-family)',
  display: 'flex',
  flexDirection: 'column',
  minWidth: '300px',
  maxWidth: '400px',
  overflow: 'hidden',
}

// ---------------------------------------------------------------------------
// Header
// ---------------------------------------------------------------------------

export const headerStyle: CSSProperties = {
  background: 'var(--color-surface)',
  padding: '12px 16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: '1px solid var(--color-border)',
}

export const headerTitleStyle: CSSProperties = {
  color: 'var(--color-text)',
  fontWeight: 700,
  fontSize: '1rem',
  fontFamily: 'var(--font-family)',
}

export const tabGroupStyle: CSSProperties = {
  display: 'flex',
  gap: '4px',
}

export function getTabStyle(active: boolean): CSSProperties {
  if (active) {
    return {
      background: 'var(--color-primary)',
      color: '#fff', // sole permitted hardcode — white text on primary background
      border: 'none',
      borderRadius: 'var(--layout-border-radius)',
      padding: '4px 10px',
      fontSize: '0.75rem',
      fontWeight: 600,
      fontFamily: 'var(--font-family)',
      cursor: 'pointer',
    }
  }
  return {
    background: 'transparent',
    color: 'var(--color-text-muted)',
    border: 'none',
    borderRadius: 'var(--layout-border-radius)',
    padding: '4px 10px',
    fontSize: '0.75rem',
    fontWeight: 600,
    fontFamily: 'var(--font-family)',
    cursor: 'pointer',
  }
}

// ---------------------------------------------------------------------------
// Selection item
// ---------------------------------------------------------------------------

export const selectionItemStyle: CSSProperties = {
  padding: '12px 16px',
  borderBottom: '1px solid var(--color-border)',
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
}

export const selectionHeaderRowStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: '8px',
}

export const eventNameStyle: CSSProperties = {
  color: 'var(--color-text)',
  fontWeight: 600,
  fontSize: '0.875rem',
  fontFamily: 'var(--font-family)',
  flex: 1,
}

export const removeButtonStyle: CSSProperties = {
  background: 'transparent',
  border: 'none',
  color: 'var(--color-text-muted)',
  cursor: 'pointer',
  fontSize: '1rem',
  lineHeight: 1,
  padding: '0',
  flexShrink: 0,
}

export const marketNameStyle: CSSProperties = {
  color: 'var(--color-text-muted)',
  fontSize: '0.75rem',
  fontFamily: 'var(--font-family)',
}

export const selectionFooterRowStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}

export const selectionNameStyle: CSSProperties = {
  color: 'var(--color-text)',
  fontSize: '0.875rem',
  fontFamily: 'var(--font-family)',
}

export const oddsValueStyle: CSSProperties = {
  color: 'var(--color-primary)',
  fontWeight: 700,
  fontFamily: 'var(--font-family-mono)',
  fontSize: '1rem',
}

export const oddsAlertStyle: CSSProperties = {
  color: 'var(--color-warning)',
  fontSize: '0.75rem',
  fontFamily: 'var(--font-family)',
}

// ---------------------------------------------------------------------------
// Stake section
// ---------------------------------------------------------------------------

export const sectionStyle: CSSProperties = {
  padding: '12px 16px',
  borderBottom: '1px solid var(--color-border)',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
}

export const stakeLabelStyle: CSSProperties = {
  color: 'var(--color-text-muted)',
  fontSize: '0.75rem',
  fontFamily: 'var(--font-family)',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.04em',
}

export const stakeInputStyle: CSSProperties = {
  border: '1px solid var(--color-border)',
  background: 'var(--color-surface)',
  color: 'var(--color-text)',
  borderRadius: 'var(--layout-border-radius)',
  padding: '8px 12px',
  fontSize: '0.875rem',
  fontFamily: 'var(--font-family)',
  width: '100%',
  boxSizing: 'border-box' as const,
  outline: 'none',
}

export const quickStakeRowStyle: CSSProperties = {
  display: 'flex',
  gap: '6px',
  flexWrap: 'wrap' as const,
}

export const quickStakeButtonStyle: CSSProperties = {
  background: 'var(--color-surface)',
  border: '1px solid var(--color-border)',
  color: 'var(--color-text-muted)',
  borderRadius: 'var(--layout-border-radius)',
  padding: '4px 10px',
  fontSize: '0.75rem',
  fontFamily: 'var(--font-family)',
  cursor: 'pointer',
}

// ---------------------------------------------------------------------------
// Return section
// ---------------------------------------------------------------------------

export const returnSectionStyle: CSSProperties = {
  padding: '12px 16px',
  borderBottom: '1px solid var(--color-border)',
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
}

export const returnLabelStyle: CSSProperties = {
  color: 'var(--color-text-muted)',
  fontSize: '0.75rem',
  fontFamily: 'var(--font-family)',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.04em',
}

export const returnValueStyle: CSSProperties = {
  color: 'var(--color-success)',
  fontWeight: 700,
  fontFamily: 'var(--font-family-mono)',
  fontSize: '1.125rem',
}

// ---------------------------------------------------------------------------
// CTA button
// ---------------------------------------------------------------------------

export const ctaSectionStyle: CSSProperties = {
  padding: '12px 16px',
}

export function getCtaButtonStyle(disabled: boolean): CSSProperties {
  return {
    background: 'var(--color-primary)',
    color: '#fff', // sole permitted hardcode — white text on primary background
    border: 'none',
    borderRadius: 'var(--layout-border-radius)',
    width: '100%',
    padding: '14px',
    fontWeight: 700,
    fontSize: '0.875rem',
    fontFamily: 'var(--font-family)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.7 : 1,
    letterSpacing: '0.06em',
    textTransform: 'uppercase' as const,
  }
}

// ---------------------------------------------------------------------------
// Empty state
// ---------------------------------------------------------------------------

export const emptyStateStyle: CSSProperties = {
  padding: '48px 24px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
  textAlign: 'center',
}

export const emptyIconStyle: CSSProperties = {
  fontSize: '2.5rem',
  lineHeight: 1,
}

export const emptyTitleStyle: CSSProperties = {
  color: 'var(--color-text)',
  fontWeight: 600,
  fontSize: '0.875rem',
  fontFamily: 'var(--font-family)',
  marginTop: '4px',
}

export const emptyDescStyle: CSSProperties = {
  color: 'var(--color-text-muted)',
  fontSize: '0.8125rem',
  fontFamily: 'var(--font-family)',
  lineHeight: 1.5,
}
