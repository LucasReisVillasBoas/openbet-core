import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { MatchCard } from './MatchCard'

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------

const meta: Meta<typeof MatchCard> = {
  title: 'Components/MatchCard',
  component: MatchCard,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['pre-match', 'live', 'featured'],
    },
    isLive: {
      control: 'boolean',
    },
    minute: {
      control: { type: 'number', min: 0, max: 120 },
    },
  },
}

export default meta

type Story = StoryObj<typeof MatchCard>

// ---------------------------------------------------------------------------
// PreMatch — standard card with start time and odds
// ---------------------------------------------------------------------------

export const PreMatch: Story = {
  name: 'Pre-Match',
  args: {
    homeTeam: 'Flamengo',
    awayTeam: 'Palmeiras',
    league: 'Brasileirão Série A',
    startTime: 'Hoje 21:00',
    variant: 'pre-match',
    odds: {
      home: 2.4,
      draw: 3.1,
      away: 2.8,
    },
  },
}

// ---------------------------------------------------------------------------
// Live — live score with elapsed minute and odds
// ---------------------------------------------------------------------------

export const Live: Story = {
  name: 'Live',
  args: {
    homeTeam: 'Flamengo',
    awayTeam: 'Palmeiras',
    league: 'Brasileirão Série A',
    variant: 'live',
    isLive: true,
    score: { home: 2, away: 1 },
    minute: 67,
    odds: {
      home: 1.55,
      draw: 3.9,
      away: 5.2,
    },
  },
}

// ---------------------------------------------------------------------------
// Featured — gradient background, larger typography, full odds
// ---------------------------------------------------------------------------

export const Featured: Story = {
  name: 'Featured',
  args: {
    homeTeam: 'Flamengo',
    awayTeam: 'Palmeiras',
    league: 'Libertadores — Final',
    startTime: 'Amanhã 20:00',
    variant: 'featured',
    odds: {
      home: 2.15,
      draw: 3.25,
      away: 3.1,
    },
  },
}

// ---------------------------------------------------------------------------
// NoOdds — informational card without odds section
// ---------------------------------------------------------------------------

export const NoOdds: Story = {
  name: 'No Odds',
  args: {
    homeTeam: 'Flamengo',
    awayTeam: 'Palmeiras',
    league: 'Brasileirão Série A',
    startTime: 'Hoje 21:00',
    variant: 'pre-match',
  },
}

// ---------------------------------------------------------------------------
// NoDrawOdds — 2-way market (no draw option)
// ---------------------------------------------------------------------------

export const NoDrawOdds: Story = {
  name: 'No Draw Odds (2-way market)',
  args: {
    homeTeam: 'Los Angeles Lakers',
    awayTeam: 'Boston Celtics',
    league: 'NBA',
    startTime: 'Hoje 02:30',
    variant: 'pre-match',
    odds: {
      home: 1.75,
      away: 2.05,
    },
  },
}

// ---------------------------------------------------------------------------
// LiveNoLeague — minimal live card without league label
// ---------------------------------------------------------------------------

export const LiveNoLeague: Story = {
  name: 'Live — Sem Liga',
  args: {
    homeTeam: 'São Paulo',
    awayTeam: 'Corinthians',
    variant: 'live',
    isLive: true,
    score: { home: 0, away: 0 },
    minute: 12,
    odds: {
      home: 2.2,
      draw: 3.05,
      away: 2.95,
    },
  },
}

// ---------------------------------------------------------------------------
// ThemeComparison — two cards side by side with a label each
// The ThemeDecorator controls the global theme; this story shows two
// structurally identical cards so reviewers can compare them in context.
// ---------------------------------------------------------------------------

export const ThemeComparison: Story = {
  name: 'Theme Comparison',
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '24px',
        flexWrap: 'wrap',
        fontFamily: 'var(--font-family)',
      }}
    >
      {[
        { label: 'GrandBet', homeTeam: 'Flamengo', awayTeam: 'Palmeiras' },
        { label: 'EliteBet', homeTeam: 'Barcelona', awayTeam: 'Real Madrid' },
      ].map(({ label, homeTeam, awayTeam }) => (
        <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span
            style={{
              color: 'var(--color-text-muted)',
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}
          >
            {label}
          </span>
          <MatchCard
            homeTeam={homeTeam}
            awayTeam={awayTeam}
            league="Liga dos Campeões"
            startTime="Hoje 21:00"
            variant="pre-match"
            odds={{ home: 2.4, draw: 3.1, away: 2.8 }}
          />
        </div>
      ))}
    </div>
  ),
}
