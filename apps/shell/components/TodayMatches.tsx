'use client'

import { MatchCard } from '@openbet/ui'
import { useBetSlip } from '@/lib/bet-slip-context'

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
  const { addSelection, selections } = useBetSlip()

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

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
        gap: '16px',
      }}
    >
      {TODAY_MATCHES.map(match => {
        const eventName = `${match.homeTeam} vs ${match.awayTeam}`
        const selectedMarkets = new Set(
          (
            [
              ['home', 'Casa'],
              ['draw', 'Empate'],
              ['away', 'Fora'],
            ] as Array<['home' | 'draw' | 'away', string]>
          )
            .filter(([market, label]) => {
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
  )
}
