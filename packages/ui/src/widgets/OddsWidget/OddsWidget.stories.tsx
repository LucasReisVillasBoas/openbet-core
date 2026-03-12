import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { OddsWidget } from './OddsWidget'

interface OddsWidgetArgs {
  eventId: string
  theme: string
}

const meta: Meta<typeof OddsWidget> = {
  title: 'Widgets/OddsWidget',
  component: OddsWidget,
  tags: ['autodocs'],
  argTypes: {
    eventId: {
      control: { type: 'select' },
      options: ['123', '124', '125'],
      description: 'ID do evento para exibir odds',
    },
  },
}

export default meta

type Story = StoryObj<OddsWidgetArgs>

const containerStyle: React.CSSProperties = {
  padding: '24px',
  fontFamily: 'var(--font-family)',
}

export const Default: Story = {
  name: 'Default',
  args: {
    eventId: '123',
    theme: 'light',
  },
  render: args => {
    return (
      <div style={containerStyle}>
        <OddsWidget eventId={args.eventId} />
      </div>
    )
  },
}

export const MultipleWidgets: Story = {
  name: 'Multiple Widgets',
  render: () => {
    const events = ['123', '124', '125']

    return (
      <div
        style={{
          display: 'flex',
          gap: '16px',
          flexWrap: 'wrap',
          padding: '24px',
          fontFamily: 'var(--font-family)',
        }}
      >
        {events.map(eventId => (
          <OddsWidget key={eventId} eventId={eventId} />
        ))}
      </div>
    )
  },
}

export const EmbeddedExample: Story = {
  name: 'Embedded Example',
  render: () => {
    return (
      <div
        style={{
          maxWidth: '400px',
          margin: '0 auto',
          padding: '24px',
          background: 'var(--color-background)',
          fontFamily: 'var(--font-family)',
        }}
      >
        <h2
          style={{
            margin: '0 0 16px 0',
            fontSize: '1.25rem',
            fontWeight: 600,
            color: 'var(--color-text)',
          }}
        >
          Apostas de Hoje
        </h2>
        <OddsWidget eventId="123" />
        <div
          style={{
            marginTop: '16px',
            fontSize: '0.75rem',
            color: 'var(--color-text-muted)',
          }}
        >
          Clique em uma odd para adicionar ao seu bet slip
        </div>
      </div>
    )
  },
}

export const ThemeComparison: Story = {
  name: 'Theme Comparison',
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '24px',
        flexWrap: 'wrap',
        padding: '24px',
        fontFamily: 'var(--font-family)',
      }}
    >
      {[
        { label: 'AlphaBet', eventId: '123' },
        { label: 'BetNova', eventId: '124' },
      ].map(({ label, eventId }) => (
        <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span
            style={{
              color: 'var(--color-text-muted)',
              fontSize: '0.75rem',
              textTransform: 'uppercase' as const,
              letterSpacing: '0.06em',
            }}
          >
            {label}
          </span>
          <OddsWidget eventId={eventId} />
        </div>
      ))}
    </div>
  ),
}
