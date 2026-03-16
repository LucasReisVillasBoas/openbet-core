import React from 'react'
import { OddsButton } from '../OddsButton'
import type { ThemeShowcaseProps } from './ThemeShowcase.types'
import {
  sectionTitleStyle,
  cardStyle,
  colorBlockStyle,
  radiusBoxStyle,
  monoTextStyle,
  bodyTextStyle,
  headingTextStyle,
  labelStyle,
  oddsStates,
} from './ThemeShowcase.styles'

export function ThemeShowcase({ className }: ThemeShowcaseProps) {
  return (
    <div
      className={className}
      style={{
        padding: '24px',
        background: 'var(--color-background)',
        color: 'var(--color-text)',
        maxWidth: '800px',
      }}
    >
      <h1
        style={{
          fontFamily: 'var(--font-family)',
          fontSize: '1.5rem',
          fontWeight: 700,
          marginBottom: '24px',
          color: 'var(--color-text)',
        }}
      >
        Theme Showcase
      </h1>

      <section style={{ marginBottom: '24px' }}>
        <h2 style={sectionTitleStyle}>Colors</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: '16px',
          }}
        >
          <div style={cardStyle}>
            <div style={{ ...colorBlockStyle, background: 'var(--color-primary)' }}>Primary</div>
          </div>
          <div style={cardStyle}>
            <div style={{ ...colorBlockStyle, background: 'var(--color-success)' }}>Success</div>
          </div>
          <div style={cardStyle}>
            <div style={{ ...colorBlockStyle, background: 'var(--color-warning)' }}>Warning</div>
          </div>
          <div style={cardStyle}>
            <div style={{ ...colorBlockStyle, background: 'var(--color-surface)' }}>Surface</div>
          </div>
          <div style={cardStyle}>
            <div style={{ ...colorBlockStyle, background: 'var(--color-background)' }}>
              Background
            </div>
          </div>
          <div style={cardStyle}>
            <div style={{ ...colorBlockStyle, background: 'var(--color-border)' }}>Border</div>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '24px' }}>
        <h2 style={sectionTitleStyle}>Typography</h2>
        <div style={cardStyle}>
          <div style={{ marginBottom: '16px' }}>
            <div style={labelStyle}>Heading</div>
            <div style={headingTextStyle}>OpenBet Core</div>
          </div>
          <div style={{ marginBottom: '16px' }}>
            <div style={labelStyle}>Body</div>
            <div style={bodyTextStyle}>
              This is sample body text demonstrating the default font family.
            </div>
          </div>
          <div>
            <div style={labelStyle}>Mono Numbers (Odds)</div>
            <div style={{ display: 'flex', gap: '16px' }}>
              <span style={monoTextStyle}>1.85</span>
              <span style={monoTextStyle}>2.10</span>
              <span style={monoTextStyle}>3.25</span>
            </div>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '24px' }}>
        <h2 style={sectionTitleStyle}>Border Radius</h2>
        <div style={cardStyle}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                ...radiusBoxStyle,
                borderRadius: 'var(--layout-border-radius)',
              }}
            />
            <span style={{ ...labelStyle, marginTop: 0, textAlign: 'left' }}>
              <code
                style={{
                  fontFamily: 'var(--font-family-mono)',
                  fontSize: '0.8rem',
                  color: 'var(--color-primary)',
                }}
              >
                --layout-border-radius
              </code>
              <br />
              valor definido pelo cliente via config
            </span>
          </div>
        </div>
      </section>

      <section>
        <h2 style={sectionTitleStyle}>OddsButton States</h2>
        <div style={cardStyle}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))',
              gap: '16px',
            }}
          >
            {oddsStates.map(({ state, odds, label }) => (
              <div
                key={state}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
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
        </div>
      </section>
    </div>
  )
}
