'use client'

import { MatchCard } from '@openbet/ui'
import { useBetSlip } from '@/lib/bet-slip-context'
import { useSportFilter } from '@/lib/sport-filter-context'
import { TODAY_MATCHES, type Match } from './TodayMatches.data'
import { emptyStateStyle, leagueHeaderStyle, matchesGridStyle } from './TodayMatches.styles'

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
    return <p style={emptyStateStyle}>No matches available for this sport</p>
  }

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
          {showLeagueHeaders && <div style={leagueHeaderStyle}>{group.league}</div>}
          <div style={matchesGridStyle}>
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
