import React from 'react'
import { OddsButton } from '../OddsButton'
import type {
  MatchCardProps,
  MatchCardScore,
  MatchCardOdds,
  MatchCardVariant,
} from './MatchCard.types'
import {
  getCardStyle,
  headerRowStyle,
  leagueStyle,
  liveBadgeStyle,
  minuteStyle,
  liveIndicatorGroupStyle,
  getTeamNameStyle,
  scoreStyle,
  vsStyle,
  startTimeStyle,
  teamsRowStyle,
  oddsRowStyle,
} from './MatchCard.styles'

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

interface HeaderRowProps {
  league?: string | undefined
  showLive: boolean
  minute?: number | undefined
}

function HeaderRow({ league, showLive, minute }: HeaderRowProps) {
  if (!league && !showLive) return null

  return (
    <div style={headerRowStyle}>
      <span style={leagueStyle}>{league ?? ''}</span>
      {showLive && (
        <div style={liveIndicatorGroupStyle}>
          <span style={liveBadgeStyle}>AO VIVO</span>
          {minute !== undefined && <span style={minuteStyle}>{minute}&apos;</span>}
        </div>
      )}
    </div>
  )
}

interface TeamsRowProps {
  homeTeam: string
  awayTeam: string
  variant: MatchCardVariant
  score?: MatchCardScore | undefined
  startTime?: string | undefined
}

function TeamsRow({ homeTeam, awayTeam, variant, score, startTime }: TeamsRowProps) {
  const teamNameStyle = getTeamNameStyle(variant)
  const hasScore = score !== undefined

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <div style={teamsRowStyle}>
        <span style={teamNameStyle}>{homeTeam}</span>

        {hasScore ? (
          <span style={scoreStyle}>
            {score.home} — {score.away}
          </span>
        ) : (
          <span style={vsStyle}>vs</span>
        )}

        <span style={teamNameStyle}>{awayTeam}</span>
      </div>

      {!hasScore && startTime && <div style={startTimeStyle}>{startTime}</div>}
    </div>
  )
}

interface OddsRowProps {
  odds: MatchCardOdds
  onOddsClick?: ((market: 'home' | 'draw' | 'away') => void) | undefined
  selectedMarkets?: Set<'home' | 'draw' | 'away'> | undefined
}

function OddsRow({ odds, onOddsClick, selectedMarkets }: OddsRowProps) {
  return (
    <div style={oddsRowStyle}>
      <OddsButton
        label="Casa"
        odds={odds.home}
        state={selectedMarkets?.has('home') ? 'selected' : 'default'}
        size="sm"
        onClick={() => onOddsClick?.('home')}
      />
      {odds.draw !== undefined && (
        <OddsButton
          label="Empate"
          odds={odds.draw}
          state={selectedMarkets?.has('draw') ? 'selected' : 'default'}
          size="sm"
          onClick={() => onOddsClick?.('draw')}
        />
      )}
      <OddsButton
        label="Fora"
        odds={odds.away}
        state={selectedMarkets?.has('away') ? 'selected' : 'default'}
        size="sm"
        onClick={() => onOddsClick?.('away')}
      />
    </div>
  )
}

// ---------------------------------------------------------------------------
// MatchCard component
// ---------------------------------------------------------------------------

export function MatchCard({
  homeTeam,
  awayTeam,
  league,
  startTime,
  variant = 'pre-match',
  isLive = false,
  score,
  minute,
  odds,
  onOddsClick,
  selectedMarkets,
}: MatchCardProps) {
  const showLive = isLive || variant === 'live'
  const cardStyle = getCardStyle(variant)

  return (
    <div style={cardStyle}>
      <HeaderRow league={league} showLive={showLive} minute={minute} />
      <TeamsRow
        homeTeam={homeTeam}
        awayTeam={awayTeam}
        variant={variant}
        score={score}
        startTime={startTime}
      />
      {odds !== undefined && (
        <OddsRow odds={odds} onOddsClick={onOddsClick} selectedMarkets={selectedMarkets} />
      )}
    </div>
  )
}
