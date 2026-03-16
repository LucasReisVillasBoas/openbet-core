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

export interface OddsWidgetProps {
  eventId?: string
  onOddsClick?: (detail: { selection: string; odds: number; eventId: string }) => void
}
