'use client'

import { MatchCard } from '@openbet/ui'
import { MOCK_MATCHES } from './SportsbookPage.data'
import { containerStyle, titleStyle, matchesGridStyle } from './SportsbookPage.styles'

export default function SportsbookPage() {
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Destaques</h2>
      <div style={matchesGridStyle}>
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
    </div>
  )
}
