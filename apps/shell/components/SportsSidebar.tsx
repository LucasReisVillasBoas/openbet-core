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
  Flag,
  Shield,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useSportFilter } from '@/lib/sport-filter-context'

interface Sport {
  id: string
  name: string
  liveCount: number
  Icon: LucideIcon
}

const SPORTS: Sport[] = [
  { id: 'football', name: 'Football', liveCount: 12, Icon: CircleDot },
  { id: 'basketball', name: 'Basketball', liveCount: 8, Icon: Circle },
  { id: 'tennis', name: 'Tennis', liveCount: 5, Icon: Activity },
  { id: 'volleyball', name: 'Volleyball', liveCount: 3, Icon: Trophy },
  { id: 'esports', name: 'E-Sports', liveCount: 15, Icon: Gamepad2 },
  { id: 'american-football', name: 'Am. Football', liveCount: 2, Icon: Shield },
  { id: 'baseball', name: 'Baseball', liveCount: 0, Icon: Flag },
  { id: 'hockey', name: 'Hockey', liveCount: 4, Icon: Zap },
]

const COMPETITIONS = ['UEFA Champions League', 'Premier League', 'La Liga', 'Brasileirão']

export function SportsSidebar({ topOffset }: { topOffset: number }) {
  const [collapsed, setCollapsed] = useState(false)
  const { activeSport, setActiveSport } = useSportFilter()

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
      {/* Header — contains label (when expanded) and collapse toggle */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: collapsed ? 'center' : 'space-between',
          padding: '16px 12px 10px',
          borderBottom: '1px solid var(--color-border)',
          marginBottom: '8px',
          flexShrink: 0,
        }}
      >
        {!collapsed && (
          <span
            style={{
              fontSize: '0.625rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--color-text-muted)',
            }}
          >
            Sports
          </span>
        )}

        {/* Collapse toggle button */}
        <button
          type="button"
          onClick={() => setCollapsed(c => !c)}
          title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '2px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-text-muted)',
            flexShrink: 0,
            borderRadius: '4px',
            transition: 'color 150ms',
          }}
          onMouseEnter={e => {
            ;(e.currentTarget as HTMLButtonElement).style.color = 'var(--color-text)'
          }}
          onMouseLeave={e => {
            ;(e.currentTarget as HTMLButtonElement).style.color = 'var(--color-text-muted)'
          }}
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      {/* Sports items */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2px',
          padding: collapsed ? '0 4px' : '0 8px',
          flexShrink: 0,
        }}
      >
        {SPORTS.map(({ id, name, liveCount, Icon }) => {
          const isActive = activeSport === id
          const isLive = liveCount > 0
          return (
            <button
              key={id}
              type="button"
              onClick={() => setActiveSport(id)}
              title={collapsed ? name : undefined}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: collapsed ? 'center' : 'flex-start',
                gap: collapsed ? 0 : '10px',
                padding: collapsed ? '10px' : '10px 12px',
                cursor: 'pointer',
                background: isActive ? 'var(--color-primary)' : 'transparent',
                color: isActive ? '#fff' : 'var(--color-text-muted)', // #fff on primary bg
                fontSize: '0.875rem',
                fontFamily: 'var(--font-family)',
                border: 'none',
                borderRadius: 'var(--layout-border-radius, 8px)',
                transition: 'background 200ms, color 200ms',
                textAlign: 'left',
                width: '100%',
                whiteSpace: 'nowrap',
                position: 'relative',
              }}
            >
              {/* Sport icon with optional live dot overlay */}
              <span style={{ position: 'relative', flexShrink: 0, display: 'flex' }}>
                <Icon size={18} />
                {isLive && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '-3px',
                      right: '-3px',
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      background: 'var(--color-error)',
                      border: isActive
                        ? '1px solid #fff'
                        : '1px solid var(--color-background-card)', // #fff on primary bg
                    }}
                  />
                )}
              </span>

              {/* Label + live count — only when expanded */}
              {!collapsed && (
                <>
                  <span style={{ flex: 1 }}>{name}</span>
                  {isLive && (
                    <span
                      style={{
                        fontSize: '0.625rem',
                        fontWeight: 700,
                        padding: '1px 5px',
                        borderRadius: '10px',
                        background: isActive ? 'rgba(255,255,255,0.25)' : 'var(--color-error)',
                        color: '#fff', // #fff on error/primary bg
                        flexShrink: 0,
                      }}
                    >
                      {liveCount}
                    </span>
                  )}
                </>
              )}
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
              Competitions
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
                ;(e.currentTarget as HTMLButtonElement).style.background = 'var(--color-surface)'
              }}
              onMouseLeave={e => {
                ;(e.currentTarget as HTMLButtonElement).style.background = 'transparent'
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
