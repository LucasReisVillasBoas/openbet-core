'use client'

import { useState } from 'react'

const SPORTS = [
  { id: 'football', label: 'Futebol', icon: '⚽' },
  { id: 'basketball', label: 'Basquete', icon: '🏀' },
  { id: 'tennis', label: 'Tênis', icon: '🎾' },
  { id: 'esports', label: 'E-Sports', icon: '🎮' },
]

export function SportsSidebar() {
  const [active, setActive] = useState('football')

  return (
    <aside
      style={{
        background: 'var(--color-surface)',
        borderRight: '1px solid var(--color-border)',
        display: 'flex',
        flexDirection: 'column',
        gap: '2px',
        padding: '16px 0',
      }}
    >
      <div
        style={{
          padding: '0 12px 12px',
          borderBottom: '1px solid var(--color-border)',
          marginBottom: '8px',
        }}
      >
        <span
          style={{
            fontSize: '0.625rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'var(--color-text-muted)',
          }}
        >
          Esportes
        </span>
      </div>

      {SPORTS.map(sport => {
        const isActive = active === sport.id
        return (
          <button
            key={sport.id}
            type="button"
            onClick={() => setActive(sport.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 12px',
              margin: '0 8px',
              cursor: 'pointer',
              background: isActive ? 'var(--color-primary)' : 'transparent',
              color: isActive ? '#fff' : 'var(--color-text-muted)',
              fontSize: '0.875rem',
              fontFamily: 'var(--font-family)',
              border: 'none',
              borderRadius: 'var(--layout-border-radius)',
              transition: 'background 200ms, color 200ms',
              textAlign: 'left',
            }}
          >
            <span style={{ fontSize: '1rem' }}>{sport.icon}</span>
            {sport.label}
          </button>
        )
      })}

      <div
        style={{
          margin: '16px 12px 0',
          paddingTop: '12px',
          borderTop: '1px solid var(--color-border)',
        }}
      >
        <span
          style={{
            fontSize: '0.625rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'var(--color-text-muted)',
          }}
        >
          ⭐ Favoritos
        </span>
      </div>
    </aside>
  )
}
