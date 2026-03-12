import React, { HTMLAttributes } from 'react'
import { OddsButton } from '../../components/OddsButton'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface OddsWidgetConfig {
  eventId: string
}

export interface OddsEvent {
  homeTeam: string
  awayTeam: string
  odds: {
    home: number
    draw: number
    away: number
  }
}

export interface OddsWidgetProps extends HTMLAttributes<HTMLDivElement> {
  eventId?: string
  onOddsClick?: (detail: { selection: string; odds: number; eventId: string }) => void
}

// ---------------------------------------------------------------------------
// Mock Data
// ---------------------------------------------------------------------------

export const MOCK_EVENTS: Record<string, OddsEvent> = {
  '123': {
    homeTeam: 'Flamengo',
    awayTeam: 'Palmeiras',
    odds: { home: 2.4, draw: 3.1, away: 2.8 },
  },
  '124': {
    homeTeam: 'Barcelona',
    awayTeam: 'Real Madrid',
    odds: { home: 2.5, draw: 3.4, away: 2.6 },
  },
  '125': {
    homeTeam: 'PSG',
    awayTeam: 'Bayern',
    odds: { home: 2.2, draw: 3.5, away: 2.9 },
  },
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const containerStyle: React.CSSProperties = {
  background: 'var(--color-background-card)',
  border: '1px solid var(--color-border)',
  borderRadius: 'var(--layout-border-radius)',
  padding: '16px',
  fontFamily: 'var(--font-family)',
}

const headerStyle: React.CSSProperties = {
  fontWeight: 600,
  fontSize: '1rem',
  color: 'var(--color-text)',
  marginBottom: '12px',
  textAlign: 'center',
}

// OddsButton renders a React fragment (<style> + <button>), so each one must
// be wrapped in a div to prevent the <style> tag from becoming a flex/grid child
// and breaking the layout.
const oddsGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '8px',
}

const oddsButtonWrapperStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
}

// ---------------------------------------------------------------------------
// React Component
// ---------------------------------------------------------------------------

export function OddsWidget({ eventId = '123', onOddsClick, style, ...props }: OddsWidgetProps) {
  const eventData = MOCK_EVENTS[eventId]

  if (!eventData) {
    return (
      <div style={{ ...containerStyle, color: 'var(--color-text-muted)', padding: '16px' }}>
        Evento não encontrado
      </div>
    )
  }

  const { homeTeam, awayTeam, odds } = eventData

  return (
    <div {...props} style={{ ...containerStyle, ...style }}>
      <div style={headerStyle}>
        {homeTeam} vs {awayTeam}
      </div>
      <div style={oddsGridStyle}>
        <div style={oddsButtonWrapperStyle}>
          <OddsButton
            label="Casa"
            odds={odds.home}
            state="default"
            size="sm"
            onClick={() => onOddsClick?.({ selection: 'home', odds: odds.home, eventId })}
          />
        </div>
        <div style={oddsButtonWrapperStyle}>
          <OddsButton
            label="Emp"
            odds={odds.draw}
            state="default"
            size="sm"
            onClick={() => onOddsClick?.({ selection: 'draw', odds: odds.draw, eventId })}
          />
        </div>
        <div style={oddsButtonWrapperStyle}>
          <OddsButton
            label="Fora"
            odds={odds.away}
            state="default"
            size="sm"
            onClick={() => onOddsClick?.({ selection: 'away', odds: odds.away, eventId })}
          />
        </div>
      </div>
    </div>
  )
}
