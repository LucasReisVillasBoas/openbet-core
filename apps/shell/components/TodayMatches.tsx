'use client'

import { MatchCard } from '@openbet/ui'
import { useBetSlip } from '@/lib/bet-slip-context'
import { useSportFilter } from '@/lib/sport-filter-context'

interface MatchOdds {
  home: number
  draw?: number
  away: number
}

interface Match {
  id: string
  sport: string
  league: string
  homeTeam: string
  awayTeam: string
  startTime: string
  variant: 'pre-match' | 'live' | 'featured'
  odds: MatchOdds
}

const TODAY_MATCHES: Match[] = [
  // --- Football (4+ matches, 4 leagues) ---
  {
    id: 'today-1',
    sport: 'football',
    homeTeam: 'Manchester City',
    awayTeam: 'Arsenal',
    league: 'Premier League',
    startTime: 'Hoje 17:00',
    variant: 'pre-match',
    odds: { home: 1.75, draw: 3.5, away: 4.2 },
  },
  {
    id: 'today-2',
    sport: 'football',
    homeTeam: 'Real Madrid',
    awayTeam: 'Barcelona',
    league: 'La Liga',
    startTime: 'Hoje 20:00',
    variant: 'pre-match',
    odds: { home: 2.1, draw: 3.3, away: 3.4 },
  },
  {
    id: 'today-3',
    sport: 'football',
    homeTeam: 'Bayern Munich',
    awayTeam: 'PSG',
    league: 'Champions League',
    startTime: 'Hoje 21:00',
    variant: 'pre-match',
    odds: { home: 1.9, draw: 3.6, away: 3.8 },
  },
  {
    id: 'today-4',
    sport: 'football',
    homeTeam: 'Flamengo',
    awayTeam: 'Palmeiras',
    league: 'Brasileirão',
    startTime: 'Hoje 18:30',
    variant: 'pre-match',
    odds: { home: 2.3, draw: 3.1, away: 3.0 },
  },
  {
    id: 'today-5',
    sport: 'football',
    homeTeam: 'Atlético Madrid',
    awayTeam: 'Sevilla',
    league: 'La Liga',
    startTime: 'Hoje 19:00',
    variant: 'pre-match',
    odds: { home: 1.85, draw: 3.4, away: 4.5 },
  },
  {
    id: 'today-6',
    sport: 'football',
    homeTeam: 'Borussia Dortmund',
    awayTeam: 'Inter Milan',
    league: 'Champions League',
    startTime: 'Hoje 21:00',
    variant: 'pre-match',
    odds: { home: 2.0, draw: 3.5, away: 3.7 },
  },
  {
    id: 'today-7',
    sport: 'football',
    homeTeam: 'São Paulo',
    awayTeam: 'Corinthians',
    league: 'Brasileirão',
    startTime: 'Hoje 16:00',
    variant: 'pre-match',
    odds: { home: 2.5, draw: 3.0, away: 2.8 },
  },

  // --- Basketball (NBA — no draw) ---
  {
    id: 'today-8',
    sport: 'basketball',
    homeTeam: 'LA Lakers',
    awayTeam: 'Boston Celtics',
    league: 'NBA',
    startTime: 'Hoje 23:30',
    variant: 'pre-match',
    odds: { home: 1.95, away: 1.85 },
  },
  {
    id: 'today-9',
    sport: 'basketball',
    homeTeam: 'Golden State Warriors',
    awayTeam: 'Miami Heat',
    league: 'NBA',
    startTime: 'Hoje 02:00',
    variant: 'pre-match',
    odds: { home: 1.65, away: 2.25 },
  },

  // --- Tennis (no draw) ---
  {
    id: 'today-10',
    sport: 'tennis',
    homeTeam: 'Novak Djokovic',
    awayTeam: 'Carlos Alcaraz',
    league: 'ATP Masters',
    startTime: 'Hoje 14:00',
    variant: 'pre-match',
    odds: { home: 2.1, away: 1.75 },
  },
  {
    id: 'today-11',
    sport: 'tennis',
    homeTeam: 'Iga Swiatek',
    awayTeam: 'Aryna Sabalenka',
    league: 'WTA Finals',
    startTime: 'Hoje 16:30',
    variant: 'pre-match',
    odds: { home: 1.55, away: 2.45 },
  },

  // --- Volleyball ---
  {
    id: 'today-12',
    sport: 'volleyball',
    homeTeam: 'Brasil',
    awayTeam: 'EUA',
    league: 'Nations League',
    startTime: 'Hoje 20:00',
    variant: 'pre-match',
    odds: { home: 1.7, draw: 3.8, away: 2.1 },
  },
  {
    id: 'today-13',
    sport: 'volleyball',
    homeTeam: 'Itália',
    awayTeam: 'Polônia',
    league: 'Nations League',
    startTime: 'Hoje 17:00',
    variant: 'pre-match',
    odds: { home: 2.0, draw: 4.0, away: 1.85 },
  },

  // --- E-Sports (no draw) ---
  {
    id: 'today-14',
    sport: 'esports',
    homeTeam: 'Team Liquid',
    awayTeam: 'Natus Vincere',
    league: 'CS2 Major',
    startTime: 'Hoje 15:00',
    variant: 'pre-match',
    odds: { home: 1.9, away: 1.9 },
  },
  {
    id: 'today-15',
    sport: 'esports',
    homeTeam: 'T1',
    awayTeam: 'G2 Esports',
    league: 'LoL Worlds',
    startTime: 'Hoje 10:00',
    variant: 'pre-match',
    odds: { home: 1.45, away: 2.75 },
  },

  // --- American Football (NFL — no draw) ---
  {
    id: 'today-16',
    sport: 'american-football',
    homeTeam: 'Kansas City Chiefs',
    awayTeam: 'San Francisco 49ers',
    league: 'NFL',
    startTime: 'Hoje 21:30',
    variant: 'pre-match',
    odds: { home: 1.8, away: 2.05 },
  },
  {
    id: 'today-17',
    sport: 'american-football',
    homeTeam: 'Dallas Cowboys',
    awayTeam: 'Philadelphia Eagles',
    league: 'NFL',
    startTime: 'Hoje 18:00',
    variant: 'pre-match',
    odds: { home: 2.3, away: 1.65 },
  },

  // --- Baseball (MLB — no draw) ---
  {
    id: 'today-18',
    sport: 'baseball',
    homeTeam: 'New York Yankees',
    awayTeam: 'Los Angeles Dodgers',
    league: 'MLB',
    startTime: 'Hoje 19:05',
    variant: 'pre-match',
    odds: { home: 2.0, away: 1.85 },
  },
  {
    id: 'today-19',
    sport: 'baseball',
    homeTeam: 'Houston Astros',
    awayTeam: 'Atlanta Braves',
    league: 'MLB',
    startTime: 'Hoje 20:10',
    variant: 'pre-match',
    odds: { home: 1.75, away: 2.1 },
  },

  // --- Hockey (NHL — no draw) ---
  {
    id: 'today-20',
    sport: 'hockey',
    homeTeam: 'Toronto Maple Leafs',
    awayTeam: 'Montreal Canadiens',
    league: 'NHL',
    startTime: 'Hoje 19:00',
    variant: 'pre-match',
    odds: { home: 1.7, away: 2.2 },
  },
  {
    id: 'today-21',
    sport: 'hockey',
    homeTeam: 'Colorado Avalanche',
    awayTeam: 'Vegas Golden Knights',
    league: 'NHL',
    startTime: 'Hoje 22:00',
    variant: 'pre-match',
    odds: { home: 1.9, away: 1.95 },
  },
]

export function TodayMatches() {
  const { addSelection, selections } = useBetSlip()
  const { activeSport } = useSportFilter()

  const filtered = TODAY_MATCHES.filter(m => m.sport === activeSport)

  const handleOddsClick = (
    matchId: string,
    eventName: string,
    selectionName: string,
    odds: number
  ) => {
    const id = `${matchId}-${selectionName.toLowerCase()}`
    addSelection({
      id,
      matchId,
      eventName,
      marketName: 'Match Result',
      selectionName,
      odds,
    })
  }

  if (filtered.length === 0) {
    return (
      <p style={{ color: 'var(--color-text-muted)', padding: '24px', textAlign: 'center' }}>
        No matches available for this sport
      </p>
    )
  }

  // Group by league to render subheaders when there are multiple leagues
  const leagueGroups: { league: string; matches: Match[] }[] = []
  for (const match of filtered) {
    const existing = leagueGroups.find(g => g.league === match.league)
    if (existing) {
      existing.matches.push(match)
    } else {
      leagueGroups.push({ league: match.league, matches: [match] })
    }
  }

  const showLeagueHeaders = leagueGroups.length > 1

  return (
    <div>
      {leagueGroups.map(group => (
        <div key={group.league}>
          {showLeagueHeaders && (
            <div
              style={{
                fontSize: '0.6875rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--color-text-muted)',
                padding: '12px 0 8px',
                borderBottom: '1px solid var(--color-border)',
                marginBottom: '12px',
              }}
            >
              {group.league}
            </div>
          )}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '16px',
              marginBottom: showLeagueHeaders ? '24px' : '0',
            }}
          >
            {group.matches.map(match => {
              const eventName = `${match.homeTeam} vs ${match.awayTeam}`
              const selectedMarkets = new Set(
                (
                  [
                    ['home', 'Casa'],
                    ['draw', 'Empate'],
                    ['away', 'Fora'],
                  ] as Array<['home' | 'draw' | 'away', string]>
                )
                  .filter(([, label]) => {
                    const id = `${match.id}-${label.toLowerCase()}`
                    return selections.some(s => s.id === id)
                  })
                  .map(([market]) => market)
              )

              return (
                <MatchCard
                  key={match.id}
                  homeTeam={match.homeTeam}
                  awayTeam={match.awayTeam}
                  league={match.league}
                  startTime={match.startTime}
                  variant={match.variant}
                  odds={match.odds}
                  selectedMarkets={selectedMarkets}
                  onOddsClick={market => {
                    const labelMap: Record<'home' | 'draw' | 'away', string> = {
                      home: 'Casa',
                      draw: 'Empate',
                      away: 'Fora',
                    }
                    handleOddsClick(match.id, eventName, labelMap[market], match.odds[market] ?? 0)
                  }}
                />
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
