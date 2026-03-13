'use client'

import { useState } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  CircleDot,
  Circle,
  Activity,
  Gamepad2,
  Trophy,
  Zap,
  Shield,
  Flag,
  Star,
} from 'lucide-react'

const SPORTS = [
  { id: 'soccer',     label: 'Futebol',     Icon: CircleDot, active: true  },
  { id: 'basketball', label: 'Basquete',    Icon: Circle,    active: false },
  { id: 'tennis',     label: 'Tênis',       Icon: Activity,  active: false },
  { id: 'esports',    label: 'E-Sports',    Icon: Gamepad2,  active: false },
  { id: 'american',   label: 'Futebol Am.', Icon: Trophy,    active: false },
  { id: 'hockey',     label: 'Hóquei',      Icon: Zap,       active: false },
  { id: 'mma',        label: 'MMA',         Icon: Shield,    active: false },
  { id: 'racing',     label: 'Corridas',    Icon: Flag,      active: false },
  { id: 'favorites',  label: 'Favoritos',   Icon: Star,      active: false },
] as const

const COMPETITIONS = [
  'UEFA Champions League',
  'Premier League',
  'La Liga',
  'Serie A',
]

export function SportsSidebar({ topOffset }: { topOffset: number }) {
  const [collapsed, setCollapsed] = useState(false)
  const [activeId, setActiveId] = useState<string>('soccer')

  return (
    <aside
      style={{
        position: 'fixed',
        left: 0,
        top: topOffset,
        bottom: 0,
        zIndex: 50,
        width: collapsed ? '64px' : '220px',
        transition: 'width 250ms ease',
        background: 'var(--color-background-card)',
        borderRight: '1px solid var(--color-border)',
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'hidden',
        overflowY: 'auto',
      }}
    >
      {/* Collapse toggle button */}
      <button
        type="button"
        onClick={() => setCollapsed(c => !c)}
        title={collapsed ? 'Expandir sidebar' : 'Recolher sidebar'}
        style={{
          position: 'absolute',
          right: '-12px',
          top: '20px',
          zIndex: 10,
          width: '24px',
          height: '24px',
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          padding: 0,
          flexShrink: 0,
        }}
      >
        {collapsed
          ? <ChevronRight size={16} color="var(--color-text-muted)" />
          : <ChevronLeft size={16} color="var(--color-text-muted)" />
        }
      </button>

      {/* Sports header — hidden when collapsed */}
      {!collapsed && (
        <div
          style={{
            padding: '16px 12px 10px',
            borderBottom: '1px solid var(--color-border)',
            marginBottom: '8px',
            flexShrink: 0,
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
      )}

      {/* Sports items */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2px',
          padding: collapsed ? '16px 4px 0' : '0 8px',
          flexShrink: 0,
        }}
      >
        {SPORTS.map(({ id, label, Icon }) => {
          const isActive = activeId === id
          return (
            <button
              key={id}
              type="button"
              onClick={() => setActiveId(id)}
              title={collapsed ? label : undefined}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: collapsed ? 'center' : 'flex-start',
                gap: collapsed ? 0 : '10px',
                padding: collapsed ? '10px' : '10px 12px',
                cursor: 'pointer',
                background: isActive ? 'var(--color-primary)' : 'transparent',
                color: isActive ? 'white' : 'var(--color-text-muted)',
                fontSize: '0.875rem',
                fontFamily: 'var(--font-family)',
                border: 'none',
                borderRadius: 'var(--layout-border-radius, 8px)',
                transition: 'background 200ms, color 200ms',
                textAlign: 'left',
                width: '100%',
                whiteSpace: 'nowrap',
              }}
            >
              <Icon size={18} />
              {!collapsed && <span>{label}</span>}
            </button>
          )
        })}
      </div>

      {/* Competitions section — only when expanded */}
      {!collapsed && (
        <div
          style={{
            margin: '16px 8px 0',
            paddingTop: '12px',
            borderTop: '1px solid var(--color-border)',
            flexShrink: 0,
          }}
        >
          <div style={{ padding: '0 12px 8px' }}>
            <span
              style={{
                fontSize: '0.625rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--color-text-muted)',
              }}
            >
              Competições
            </span>
          </div>
          {COMPETITIONS.map(competition => (
            <button
              key={competition}
              type="button"
              style={{
                display: 'block',
                width: '100%',
                padding: '8px 12px',
                background: 'transparent',
                border: 'none',
                borderRadius: 'var(--layout-border-radius, 8px)',
                fontSize: '0.8125rem',
                fontFamily: 'var(--font-family)',
                color: 'var(--color-text-muted)',
                textAlign: 'left',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                transition: 'background 200ms',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.background = 'var(--color-surface)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.background = 'transparent'
              }}
            >
              {competition}
            </button>
          ))}
        </div>
      )}
    </aside>
  )
}
