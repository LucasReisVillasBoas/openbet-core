import type { CSSProperties } from 'react'

export const floatingButtonStyle: CSSProperties = {
  position: 'fixed',
  right: 0,
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 51,
  background: 'var(--color-background-card)',
  border: '1px solid var(--color-border)',
  borderRadius: 'var(--layout-border-radius) 0 0 var(--layout-border-radius)',
  padding: '12px 8px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

export const panelStyle: CSSProperties = {
  position: 'fixed',
  right: 0,
  top: 0,
  bottom: 0,
  zIndex: 50,
  width: '320px',
  overflow: 'hidden',
  transition: 'width 250ms ease',
  background: 'var(--color-background-card)',
  borderLeft: '1px solid var(--color-border)',
  display: 'flex',
  flexDirection: 'column',
}

export const collapsedPanelStyle: CSSProperties = {
  ...panelStyle,
  width: '0px',
}

export const headerStyle: CSSProperties = {
  padding: '16px 16px 12px',
  borderBottom: '1px solid var(--color-border)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
}

export const headerLabelStyle: CSSProperties = {
  fontSize: '0.625rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  color: 'var(--color-text-muted)',
  whiteSpace: 'nowrap',
}

export const badgeStyle: CSSProperties = {
  marginLeft: '6px',
  background: 'var(--color-primary)',
  color: '#fff',
  borderRadius: 'var(--layout-border-radius)',
  padding: '1px 6px',
  fontSize: '0.625rem',
  fontWeight: 700,
}

export const closeButtonStyle: CSSProperties = {
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: '4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 'calc(var(--layout-border-radius) * 0.5)',
}

export const contentStyle: CSSProperties = {
  flex: 1,
  overflowY: 'auto',
}

export const confirmedStateStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  padding: '32px 24px',
  gap: '12px',
}

export const confirmedCheckStyle: CSSProperties = {
  fontSize: '2rem',
}

export const confirmedTextStyle: CSSProperties = {
  fontWeight: 600,
  fontSize: '0.9375rem',
  color: 'var(--color-success)',
  fontFamily: 'var(--font-family)',
  textAlign: 'center',
}

export const emptyStateStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  padding: '32px 24px',
  gap: '12px',
}

export const emptyTitleStyle: CSSProperties = {
  fontWeight: 600,
  fontSize: '0.9375rem',
  color: 'var(--color-text)',
  fontFamily: 'var(--font-family)',
  textAlign: 'center',
}

export const emptyDescStyle: CSSProperties = {
  fontSize: '0.8125rem',
  color: 'var(--color-text-muted)',
  fontFamily: 'var(--font-family)',
  textAlign: 'center',
}
