export interface Team {
  name: string
  logoUrl?: string
}

export interface Score {
  home: number
  away: number
}

export interface LiveScoreboardProps {
  homeTeam: Team
  awayTeam: Team
  score: Score
  minute?: number
  period?: '1H' | 'HT' | '2H' | 'FT'
  lastUpdate?: Date
}
