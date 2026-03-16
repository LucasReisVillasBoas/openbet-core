import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { OddsButton } from './OddsButton'
import type { OddsButtonState } from './OddsButton.types'

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------

const meta: Meta<typeof OddsButton> = {
  title: 'Components/OddsButton',
  component: OddsButton,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'selected', 'up', 'down', 'suspended', 'locked'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    odds: {
      control: { type: 'number', step: 0.05 },
    },
  },
}

export default meta

type Story = StoryObj<typeof OddsButton>

// ---------------------------------------------------------------------------
// Individual state stories
// ---------------------------------------------------------------------------

export const Default: Story = {
  name: 'Default',
  args: {
    label: 'Casa',
    odds: 2.4,
    state: 'default',
    size: 'md',
  },
}

export const Selected: Story = {
  name: 'Selected',
  args: {
    label: 'Casa',
    odds: 2.4,
    state: 'selected',
    size: 'md',
  },
}

export const OddsUp: Story = {
  name: 'Odd Subiu',
  args: {
    label: 'Casa',
    odds: 2.55,
    state: 'up',
    size: 'md',
  },
}

export const OddsDown: Story = {
  name: 'Odd Desceu',
  args: {
    label: 'Casa',
    odds: 2.25,
    state: 'down',
    size: 'md',
  },
}

export const Suspended: Story = {
  name: 'Suspended',
  args: {
    label: 'Casa',
    odds: 2.4,
    state: 'suspended',
    size: 'md',
  },
}

export const Locked: Story = {
  name: 'Locked',
  args: {
    label: 'Casa',
    odds: 2.4,
    state: 'locked',
    size: 'md',
  },
}

// ---------------------------------------------------------------------------
// All states side by side
// ---------------------------------------------------------------------------

const ALL_STATES: Array<{ state: OddsButtonState; odds: number; label: string }> = [
  { state: 'default', odds: 2.4, label: 'Casa' },
  { state: 'selected', odds: 2.4, label: 'Casa' },
  { state: 'up', odds: 2.55, label: 'Casa' },
  { state: 'down', odds: 2.25, label: 'Casa' },
  { state: 'suspended', odds: 2.4, label: 'Casa' },
  { state: 'locked', odds: 2.4, label: 'Casa' },
]

export const AllStates: Story = {
  name: 'All States',
  render: () => (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '12px',
        alignItems: 'center',
        padding: '16px',
      }}
    >
      {ALL_STATES.map(({ state, odds, label }) => (
        <div
          key={state}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <OddsButton label={label} odds={odds} state={state} size="md" />
          <span
            style={{
              fontFamily: 'var(--font-family)',
              fontSize: '0.7rem',
              color: 'var(--color-text-muted)',
            }}
          >
            {state}
          </span>
        </div>
      ))}
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Size stories
// ---------------------------------------------------------------------------

export const SizeSm: Story = {
  name: 'Size — Small',
  args: {
    label: 'Casa',
    odds: 2.4,
    state: 'default',
    size: 'sm',
  },
}

export const SizeMd: Story = {
  name: 'Size — Medium',
  args: {
    label: 'Casa',
    odds: 2.4,
    state: 'default',
    size: 'md',
  },
}

export const SizeLg: Story = {
  name: 'Size — Large',
  args: {
    label: 'Casa',
    odds: 2.4,
    state: 'default',
    size: 'lg',
  },
}

// ---------------------------------------------------------------------------
// All sizes side by side (bonus — useful for visual QA)
// ---------------------------------------------------------------------------

export const AllSizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '12px',
        alignItems: 'flex-end',
        padding: '16px',
      }}
    >
      {(['sm', 'md', 'lg'] as const).map(size => (
        <div
          key={size}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <OddsButton label="Casa" odds={2.4} state="default" size={size} />
          <span
            style={{
              fontFamily: 'var(--font-family)',
              fontSize: '0.7rem',
              color: 'var(--color-text-muted)',
            }}
          >
            {size}
          </span>
        </div>
      ))}
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Disabled override state
// ---------------------------------------------------------------------------

export const DisabledDefault: Story = {
  name: 'Disabled (override)',
  args: {
    label: 'Casa',
    odds: 2.4,
    state: 'default',
    size: 'md',
    disabled: true,
  },
}
