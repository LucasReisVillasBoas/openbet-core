'use client'

import { MatchCard } from '@openbet/ui'

// ---------------------------------------------------------------------------
// Mock data — 4 matches covering all MatchCard variants
// ---------------------------------------------------------------------------

const MOCK_MATCHES = [
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

// ---------------------------------------------------------------------------
// SportsbookPage — exposed to the shell via Module Federation
// Styles use only CSS Custom Properties injected by the shell's ThemeProvider.
// No hardcoded colors — all visual tokens come from var(--color-*).
// ---------------------------------------------------------------------------

export default function SportsbookPage() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      <h2
        style={{
          margin: 0,
          fontSize: '1.125rem',
          fontWeight: 700,
          color: 'var(--color-text)',
          fontFamily: 'var(--font-family)',
        }}
      >
        Destaques
      </h2>

      {MOCK_MATCHES.map(match => (
        <MatchCard
          key={match.id}
          homeTeam={match.homeTeam}
          awayTeam={match.awayTeam}
          league={match.league}
          startTime={'startTime' in match ? match.startTime : undefined}
          variant={match.variant}
          isLive={'isLive' in match ? match.isLive : undefined}
          minute={'minute' in match ? match.minute : undefined}
          score={'score' in match ? match.score : undefined}
          odds={match.odds}
        />
      ))}
    </div>
  )
}
