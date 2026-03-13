'use client'

import { MatchCard } from '@openbet/ui'

const TODAY_MATCHES = [
  {
    id: 'today-1',
    homeTeam: 'Manchester City',
    awayTeam: 'Arsenal',
    league: 'Premier League',
    startTime: 'Hoje 17:00',
    variant: 'pre-match' as const,
    odds: { home: 1.75, draw: 3.5, away: 4.2 },
  },
  {
    id: 'today-2',
    homeTeam: 'PSG',
    awayTeam: 'Lyon',
    league: 'Ligue 1',
    startTime: 'Hoje 20:45',
    variant: 'pre-match' as const,
    odds: { home: 1.55, draw: 4.0, away: 5.5 },
  },
]

export function TodayMatches() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
        gap: '16px',
      }}
    >
      {TODAY_MATCHES.map(match => (
        <MatchCard
          key={match.id}
          homeTeam={match.homeTeam}
          awayTeam={match.awayTeam}
          league={match.league}
          startTime={match.startTime}
          variant={match.variant}
          odds={match.odds}
        />
      ))}
    </div>
  )
}
