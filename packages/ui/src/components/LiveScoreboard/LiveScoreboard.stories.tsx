import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { LiveScoreboard } from './LiveScoreboard'
import type { LiveScoreboardProps } from './LiveScoreboard.types'

const meta: Meta<typeof LiveScoreboard> = {
  title: 'Components/LiveScoreboard',
  component: LiveScoreboard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<LiveScoreboardProps>

const baseProps: LiveScoreboardProps = {
  homeTeam: { name: 'Flamengo' },
  awayTeam: { name: 'Palmeiras' },
  score: { home: 0, away: 0 },
}

export const FirstHalf: Story = {
  args: {
    ...baseProps,
    score: { home: 1, away: 0 },
    minute: 23,
    period: '1H',
    lastUpdate: new Date('2026-03-10T12:23:00'),
  },
}

export const Halftime: Story = {
  args: {
    ...baseProps,
    score: { home: 1, away: 1 },
    period: 'HT',
    lastUpdate: new Date('2026-03-10T12:45:00'),
  },
}

export const SecondHalf: Story = {
  args: {
    ...baseProps,
    score: { home: 2, away: 1 },
    minute: 67,
    period: '2H',
    lastUpdate: new Date('2026-03-10T12:43:10'),
  },
}

export const FullTime: Story = {
  args: {
    ...baseProps,
    score: { home: 2, away: 1 },
    period: 'FT',
    lastUpdate: new Date('2026-03-10T13:47:00'),
  },
}

export const WithLogos: Story = {
  args: {
    ...baseProps,
    homeTeam: {
      name: 'Flamengo',
      logoUrl: 'https://ui-avatars.com/api/?name=F&background=cb0000&color=fff',
    },
    awayTeam: {
      name: 'Palmeiras',
      logoUrl: 'https://ui-avatars.com/api/?name=P&background=005826&color=fff',
    },
    score: { home: 2, away: 1 },
    minute: 67,
    period: '2H',
    lastUpdate: new Date(),
  },
}

function LiveSimulationDemo() {
  const [minute, setMinute] = React.useState(0)
  const [period, setPeriod] = React.useState<'1H' | 'HT' | '2H' | 'FT'>('1H')
  const [score, setScore] = React.useState({ home: 0, away: 0 })
  const [lastUpdate, setLastUpdate] = React.useState(new Date())

  React.useEffect(() => {
    const interval = setInterval(() => {
      setMinute(prev => {
        if (prev >= 45) {
          if (prev === 45) {
            setPeriod('HT')
            return prev
          }
          if (prev < 90) {
            setPeriod('2H')
            return prev + 1
          }
          setPeriod('FT')
          return prev
        }
        return prev + 1
      })
      setLastUpdate(new Date())

      if (minute === 15 || minute === 32 || minute === 58 || minute === 77) {
        setScore(prev => ({
          home: prev.home + (Math.random() > 0.5 ? 1 : 0),
          away: prev.away + (Math.random() > 0.6 ? 1 : 0),
        }))
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [minute])

  return (
    <LiveScoreboard
      homeTeam={{ name: 'Flamengo' }}
      awayTeam={{ name: 'Palmeiras' }}
      score={score}
      minute={minute < 45 ? minute : minute - 45}
      period={period}
      lastUpdate={lastUpdate}
    />
  )
}

export const LiveSimulation: Story = {
  render: () => <LiveSimulationDemo />,
}

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
        { label: 'AlphaBet', homeTeam: 'Flamengo', awayTeam: 'Palmeiras' },
        { label: 'BetNova', homeTeam: 'Barcelona', awayTeam: 'Real Madrid' },
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
          <LiveScoreboard
            homeTeam={{ name: homeTeam }}
            awayTeam={{ name: awayTeam }}
            score={{ home: 2, away: 1 }}
            minute={67}
            period="2H"
            lastUpdate={new Date()}
          />
        </div>
      ))}
    </div>
  ),
}
