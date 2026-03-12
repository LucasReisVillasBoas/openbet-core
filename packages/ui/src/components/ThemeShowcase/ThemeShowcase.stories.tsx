import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ThemeShowcase } from './ThemeShowcase'

const meta: Meta<typeof ThemeShowcase> = {
  title: 'Components/ThemeShowcase',
  component: ThemeShowcase,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof ThemeShowcase>

export const Default: Story = {
  name: 'Default',
  render: () => <ThemeShowcase />,
}

export const AlphaTheme: Story = {
  name: 'Alpha Theme',
  render: () => (
    <div
      style={
        {
          '--color-primary': '#1A7A4A',
          '--color-primary-hover': '#15623C',
          '--color-secondary': '#F59E0B',
          '--color-background': '#0F1923',
          '--color-background-card': '#1A2535',
          '--color-surface': '#243447',
          '--color-text': '#F1F5F9',
          '--color-text-muted': '#94A3B8',
          '--color-border': '#2D3F55',
          '--color-success': '#22C55E',
          '--color-error': '#EF4444',
          '--color-warning': '#F59E0B',
          '--color-odds-up': '#22C55E',
          '--color-odds-down': '#EF4444',
          '--font-family': 'Inter, system-ui, sans-serif',
          '--font-family-mono': 'JetBrains Mono, ui-monospace, monospace',
          '--radius-sm': '4px',
          '--layout-border-radius': '8px',
          '--radius-lg': '12px',
        } as React.CSSProperties
      }
    >
      <ThemeShowcase />
    </div>
  ),
}

export const BetaTheme: Story = {
  name: 'Beta Theme',
  render: () => (
    <div
      style={
        {
          '--color-primary': '#4F46E5',
          '--color-primary-hover': '#4338CA',
          '--color-secondary': '#EC4899',
          '--color-background': '#0D0F1A',
          '--color-background-card': '#161929',
          '--color-surface': '#1E2235',
          '--color-text': '#F8FAFC',
          '--color-text-muted': '#A0AABF',
          '--color-border': '#252A40',
          '--color-success': '#10B981',
          '--color-error': '#F43F5E',
          '--color-warning': '#FBBF24',
          '--color-odds-up': '#10B981',
          '--color-odds-down': '#F43F5E',
          '--font-family': 'Outfit, system-ui, sans-serif',
          '--font-family-mono': 'Fira Code, ui-monospace, monospace',
          '--radius-sm': '6px',
          '--layout-border-radius': '12px',
          '--radius-lg': '20px',
        } as React.CSSProperties
      }
    >
      <ThemeShowcase />
    </div>
  ),
}

export const ThemeComparison: Story = {
  name: 'Theme Comparison',
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '24px',
        padding: '24px',
      }}
    >
      <div
        style={
          {
            '--color-primary': '#1A7A4A',
            '--color-primary-hover': '#15623C',
            '--color-secondary': '#F59E0B',
            '--color-background': '#0F1923',
            '--color-background-card': '#1A2535',
            '--color-surface': '#243447',
            '--color-text': '#F1F5F9',
            '--color-text-muted': '#94A3B8',
            '--color-border': '#2D3F55',
            '--color-success': '#22C55E',
            '--color-error': '#EF4444',
            '--color-warning': '#F59E0B',
            '--color-odds-up': '#22C55E',
            '--color-odds-down': '#EF4444',
            '--font-family': 'Inter, system-ui, sans-serif',
            '--font-family-mono': 'JetBrains Mono, ui-monospace, monospace',
            '--radius-sm': '4px',
            '--layout-border-radius': '8px',
            '--radius-lg': '12px',
          } as React.CSSProperties
        }
      >
        <h3
          style={{
            fontFamily: 'var(--font-family)',
            fontSize: '1rem',
            fontWeight: 600,
            marginBottom: '8px',
            color: 'var(--color-text)',
          }}
        >
          AlphaBet (Green)
        </h3>
        <ThemeShowcase />
      </div>
      <div
        style={
          {
            '--color-primary': '#4F46E5',
            '--color-primary-hover': '#4338CA',
            '--color-secondary': '#EC4899',
            '--color-background': '#0D0F1A',
            '--color-background-card': '#161929',
            '--color-surface': '#1E2235',
            '--color-text': '#F8FAFC',
            '--color-text-muted': '#A0AABF',
            '--color-border': '#252A40',
            '--color-success': '#10B981',
            '--color-error': '#F43F5E',
            '--color-warning': '#FBBF24',
            '--color-odds-up': '#10B981',
            '--color-odds-down': '#F43F5E',
            '--font-family': 'Outfit, system-ui, sans-serif',
            '--font-family-mono': 'Fira Code, ui-monospace, monospace',
            '--radius-sm': '6px',
            '--layout-border-radius': '12px',
            '--radius-lg': '20px',
          } as React.CSSProperties
        }
      >
        <h3
          style={{
            fontFamily: 'var(--font-family)',
            fontSize: '1rem',
            fontWeight: 600,
            marginBottom: '8px',
            color: 'var(--color-text)',
          }}
        >
          BetNova (Purple)
        </h3>
        <ThemeShowcase />
      </div>
    </div>
  ),
}
