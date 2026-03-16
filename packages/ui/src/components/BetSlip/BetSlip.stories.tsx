import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { BetSlip } from './BetSlip'
import type { BetSlipSelection } from './BetSlip.types'

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------

const meta: Meta<typeof BetSlip> = {
  title: 'Components/BetSlip',
  component: BetSlip,
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: 'select',
      options: ['single', 'multiple'],
    },
    isLoading: {
      control: 'boolean',
    },
    stake: {
      control: { type: 'number', min: 0, step: 0.01 },
    },
  },
}

export default meta

type Story = StoryObj<typeof BetSlip>

// ---------------------------------------------------------------------------
// Sample data
// ---------------------------------------------------------------------------

const sampleSelection1: BetSlipSelection = {
  id: '1',
  eventName: 'Flamengo vs Palmeiras',
  marketName: 'Resultado Final',
  selectionName: 'Casa',
  odds: 2.4,
}

const sampleSelection2: BetSlipSelection = {
  id: '2',
  eventName: 'Real Madrid vs Barcelona',
  marketName: '1X2',
  selectionName: 'Empate',
  odds: 1.85,
}

const sampleSelection3: BetSlipSelection = {
  id: '3',
  eventName: 'Manchester City vs Arsenal',
  marketName: 'Resultado Final',
  selectionName: 'Fora',
  odds: 2.1,
}

// ---------------------------------------------------------------------------
// Empty — no selections in the slip
// ---------------------------------------------------------------------------

export const Empty: Story = {
  name: 'Empty',
  args: {
    selections: [],
    stake: 0,
    mode: 'single',
    isLoading: false,
    onRemoveSelection: () => {},
    onStakeChange: () => {},
    onPlaceBet: () => {},
  },
}

// ---------------------------------------------------------------------------
// SingleBet — one selection, interactive stake management
// ---------------------------------------------------------------------------

export const SingleBet: Story = {
  name: 'Single Bet',
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selections, setSelections] = useState<BetSlipSelection[]>([sampleSelection1])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [stake, setStake] = useState(0)

    return (
      <BetSlip
        selections={selections}
        stake={stake}
        mode="single"
        onRemoveSelection={id => setSelections(prev => prev.filter(s => s.id !== id))}
        onStakeChange={setStake}
        onPlaceBet={() => alert(`Apostando R$ ${stake} na seleção!`)}
      />
    )
  },
}

// ---------------------------------------------------------------------------
// MultipleBet — three selections, multiple mode
// Retorno esperado: 50 × (2.40 × 1.85 × 2.10) = R$ 466,20
// ---------------------------------------------------------------------------

export const MultipleBet: Story = {
  name: 'Multiple Bet',
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selections, setSelections] = useState<BetSlipSelection[]>([
      sampleSelection1,
      sampleSelection2,
      sampleSelection3,
    ])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [stake, setStake] = useState(50)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [mode, setMode] = useState<'single' | 'multiple'>('multiple')

    return (
      <BetSlip
        selections={selections}
        stake={stake}
        mode={mode}
        onRemoveSelection={id => setSelections(prev => prev.filter(s => s.id !== id))}
        onStakeChange={setStake}
        onModeChange={setMode}
        onPlaceBet={() => alert(`Apostando múltipla com ${selections.length} seleções!`)}
      />
    )
  },
}

// ---------------------------------------------------------------------------
// OddsChanged — selection with odds change alert visible
// ---------------------------------------------------------------------------

export const OddsChanged: Story = {
  name: 'Odds Changed',
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selections, setSelections] = useState<BetSlipSelection[]>([
      { ...sampleSelection1, oddsChanged: 'up' },
    ])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [stake, setStake] = useState(0)

    return (
      <BetSlip
        selections={selections}
        stake={stake}
        mode="single"
        onRemoveSelection={id => setSelections(prev => prev.filter(s => s.id !== id))}
        onStakeChange={setStake}
        onPlaceBet={() => alert('Aposta confirmada!')}
      />
    )
  },
}

// ---------------------------------------------------------------------------
// WithStake — pre-filled stake of R$ 50
// Retorno esperado: 50 × 2.40 = R$ 120,00
// ---------------------------------------------------------------------------

export const WithStake: Story = {
  name: 'With Stake (R$ 50)',
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selections, setSelections] = useState<BetSlipSelection[]>([sampleSelection1])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [stake, setStake] = useState(50)

    return (
      <BetSlip
        selections={selections}
        stake={stake}
        mode="single"
        onRemoveSelection={id => setSelections(prev => prev.filter(s => s.id !== id))}
        onStakeChange={setStake}
        onPlaceBet={() => alert(`Apostando R$ ${stake}!`)}
      />
    )
  },
}

// ---------------------------------------------------------------------------
// Loading — CTA button disabled, showing loading state
// ---------------------------------------------------------------------------

export const Loading: Story = {
  name: 'Loading',
  args: {
    selections: [sampleSelection1],
    stake: 20,
    mode: 'single',
    isLoading: true,
    onRemoveSelection: () => {},
    onStakeChange: () => {},
    onPlaceBet: () => {},
  },
}

// ---------------------------------------------------------------------------
// ThemeComparison — two BetSlips side by side (GrandBet and EliteBet themes)
// The ThemeDecorator controls the global theme; this story shows two
// structurally identical slips so reviewers can compare them in context.
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
        { label: 'GrandBet', selectionName: 'Casa' },
        { label: 'EliteBet', selectionName: 'Fora' },
      ].map(({ label, selectionName }) => (
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
          <BetSlip
            selections={[{ ...sampleSelection1, selectionName }]}
            stake={50}
            mode="single"
            onRemoveSelection={() => {}}
            onStakeChange={() => {}}
            onPlaceBet={() => {}}
          />
        </div>
      ))}
    </div>
  ),
}
