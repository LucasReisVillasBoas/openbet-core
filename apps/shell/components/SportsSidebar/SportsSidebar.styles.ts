import type { CSSProperties } from 'react'

export const sidebarStyle: CSSProperties = {
  position: 'fixed',
  left: 0,
  top: 0,
  bottom: 0,
  zIndex: 50,
  width: '220px',
  transition: 'width 250ms ease',
  background: 'var(--color-background-card)',
  borderRight: '1px solid var(--color-border)',
  display: 'flex',
  flexDirection: 'column',
  overflowX: 'hidden',
  overflowY: 'auto',
}

export const collapsedSidebarStyle: CSSProperties = {
  ...sidebarStyle,
  width: '64px',
}

export const headerStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '16px 12px 10px',
  borderBottom: '1px solid var(--color-border)',
  marginBottom: '8px',
  flexShrink: 0,
}

export const headerLabelStyle: CSSProperties = {
  fontSize: '0.625rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  color: 'var(--color-text-muted)',
}

export const collapseButtonStyle: CSSProperties = {
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: '2px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--color-text-muted)',
  flexShrink: 0,
  borderRadius: '4px',
  transition: 'color 150ms',
}

export const sportsListStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
  padding: '0 8px',
  flexShrink: 0,
}

export const collapsedSportsListStyle: CSSProperties = {
  ...sportsListStyle,
  padding: '0 4px',
}

export function getSportButtonStyle(isActive: boolean, collapsed: boolean): CSSProperties {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: collapsed ? 'center' : 'flex-start',
    gap: collapsed ? 0 : '10px',
    padding: collapsed ? '10px' : '10px 12px',
    cursor: 'pointer',
    background: isActive ? 'var(--color-primary)' : 'transparent',
    color: isActive ? '#fff' : 'var(--color-text-muted)',
    fontSize: '0.875rem',
    fontFamily: 'var(--font-family)',
    border: 'none',
    borderRadius: 'var(--layout-border-radius, 8px)',
    transition: 'background 200ms, color 200ms',
    textAlign: 'left',
    width: '100%',
    whiteSpace: 'nowrap',
    position: 'relative',
  }
}

export const iconWrapperStyle: CSSProperties = {
  position: 'relative',
  flexShrink: 0,
  display: 'flex',
}

export function getLiveDotStyle(isActive: boolean): CSSProperties {
  return {
    position: 'absolute',
    top: '-3px',
    right: '-3px',
    width: '7px',
    height: '7px',
    borderRadius: '50%',
    background: 'var(--color-error)',
    border: isActive ? '1px solid #fff' : '1px solid var(--color-background-card)',
  }
}

export const sportLabelStyle: CSSProperties = {
  flex: 1,
}

export const liveCountBadgeStyle: CSSProperties = {
  fontSize: '0.625rem',
  fontWeight: 700,
  padding: '1px 5px',
  borderRadius: '10px',
  color: '#fff',
  flexShrink: 0,
}

export function getLiveCountBadgeStyle(isActive: boolean): CSSProperties {
  return {
    ...liveCountBadgeStyle,
    background: isActive ? 'rgba(255,255,255,0.25)' : 'var(--color-error)',
  }
}

export const competitionsSectionStyle: CSSProperties = {
  margin: '16px 8px 0',
  paddingTop: '12px',
  borderTop: '1px solid var(--color-border)',
  flexShrink: 0,
}

export const competitionsLabelStyle: CSSProperties = {
  padding: '0 12px 8px',
}

export const competitionsTitleStyle: CSSProperties = {
  fontSize: '0.625rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  color: 'var(--color-text-muted)',
}

export const competitionButtonStyle: CSSProperties = {
  display: 'block',
  width: '100%',
  padding: '8px 12px',
  background: 'transparent',
  border: 'none',
  borderRadius: 'var(--layout-border-radius, 8px)',
  fontSize: '0.8125rem',
  fontFamily: 'var(--font-family)',
  color: 'var(--color-text-muted)',
  textAlign: 'left',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  transition: 'background 200ms',
}
