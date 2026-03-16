export interface MatchOdds {
  home: number
  draw?: number
  away: number
}

export interface MatchScore {
  home: number
  away: number
}

export interface Match {
  id: string
  homeTeam: string
  awayTeam: string
  league: string
  startTime?: string
  variant: 'pre-match' | 'live' | 'featured'
  isLive?: boolean
  minute?: number
  score?: MatchScore
  odds?: MatchOdds
}

export const MOCK_MATCHES = [
  {
    id: 'match-1',
    homeTeam: 'Flamengo',
    awayTeam: 'Palmeiras',
    league: 'Brasileirão Série A',
    startTime: 'Hoje 21:00',
    variant: 'pre-match' as const,
    odds: { home: 2.4, draw: 3.1, away: 2.8 },
  },
  {
    id: 'match-2',
    homeTeam: 'Real Madrid',
    awayTeam: 'Barcelona',
    league: 'La Liga',
    variant: 'live' as const,
    isLive: true,
    minute: 67,
    score: { home: 1, away: 1 },
    odds: undefined,
  },
  {
    id: 'match-3',
    homeTeam: 'Lakers',
    awayTeam: 'Warriors',
    league: 'NBA',
    startTime: 'Hoje 23:30',
    variant: 'pre-match' as const,
    odds: { home: 1.85, away: 1.95 },
  },
  {
    id: 'match-4',
    homeTeam: 'São Paulo',
    awayTeam: 'Corinthians',
    league: 'Paulistão',
    startTime: 'Amanhã 16:00',
    variant: 'featured' as const,
    odds: { home: 2.2, draw: 3.0, away: 3.1 },
  },
] as const
