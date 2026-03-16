import React from 'react'
import type { LiveScoreboardProps, Team, Score } from './LiveScoreboard.types'
import {
  containerStyle,
  teamsContainerStyle,
  teamStyle,
  teamLogoStyle,
  teamNameStyle,
  awayTeamStyle,
  scoreStyle,
  timeContainerStyle,
  minuteStyle,
  periodStyle,
  lastUpdateStyle,
} from './LiveScoreboard.styles'

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatTime(date: Date): string {
  return date.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
}

function getPeriodText(period?: '1H' | 'HT' | '2H' | 'FT', minute?: number): React.ReactNode {
  if (period === 'HT') {
    return <span style={periodStyle}>INTERVALO</span>
  }
  if (period === 'FT') {
    return <span style={periodStyle}>ENCERRADO</span>
  }
  if (minute !== undefined && (period === '1H' || period === '2H')) {
    return (
      <div style={timeContainerStyle}>
        <span style={minuteStyle}>{minute}'</span>
        <span style={periodStyle}>{period}</span>
      </div>
    )
  }
  return null
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

interface TeamsRowProps {
  homeTeam: Team
  awayTeam: Team
  score: Score
}

function TeamsRow({ homeTeam, awayTeam, score }: TeamsRowProps) {
  return (
    <div style={teamsContainerStyle}>
      <div style={teamStyle}>
        {homeTeam.logoUrl && (
          <img src={homeTeam.logoUrl} alt={homeTeam.name} style={teamLogoStyle} />
        )}
        <span style={teamNameStyle}>{homeTeam.name}</span>
      </div>

      <div style={scoreStyle}>
        <span>{score.home}</span>
        <span>-</span>
        <span>{score.away}</span>
      </div>

      <div style={awayTeamStyle}>
        <span style={teamNameStyle}>{awayTeam.name}</span>
        {awayTeam.logoUrl && (
          <img src={awayTeam.logoUrl} alt={awayTeam.name} style={teamLogoStyle} />
        )}
      </div>
    </div>
  )
}

function LastUpdateDisplay({ lastUpdate }: { lastUpdate: Date }) {
  return <div style={lastUpdateStyle}>Última atualização: {formatTime(lastUpdate)}</div>
}

// ---------------------------------------------------------------------------
// LiveScoreboard component
// ---------------------------------------------------------------------------

export function LiveScoreboard({
  homeTeam,
  awayTeam,
  score,
  minute,
  period,
  lastUpdate,
}: LiveScoreboardProps) {
  return (
    <div style={containerStyle}>
      <TeamsRow homeTeam={homeTeam} awayTeam={awayTeam} score={score} />
      {getPeriodText(period, minute)}
      {lastUpdate && <LastUpdateDisplay lastUpdate={lastUpdate} />}
    </div>
  )
}
