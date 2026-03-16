'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useSportFilter } from '@/lib/sport-filter-context'
import { useClientConfig } from '@/lib/client-config-context'
import { SPORTS, COMPETITIONS_BY_SPORT, type Sport } from './SportsSidebar.data'
import {
  sidebarStyle,
  collapsedSidebarStyle,
  headerStyle,
  headerLabelStyle,
  collapseButtonStyle,
  sportsListStyle,
  collapsedSportsListStyle,
  getSportButtonStyle,
  iconWrapperStyle,
  getLiveDotStyle,
  sportLabelStyle,
  getLiveCountBadgeStyle,
  competitionsSectionStyle,
  competitionsLabelStyle,
  competitionsTitleStyle,
  competitionButtonStyle,
} from './SportsSidebar.styles'

export function SportsSidebar({ topOffset }: { topOffset: number }) {
  const [collapsed, setCollapsed] = useState(false)
  const { activeSport, setActiveSport } = useSportFilter()
  const config = useClientConfig()

  // Filter sports based on feature flags
  const visibleSports = SPORTS.filter(sport => {
    if (sport.id === 'esports') return config.features.esports
    return true
  })

  // Reset active sport if it's been filtered out
  useEffect(() => {
    if (!visibleSports.find(s => s.id === activeSport)) {
      setActiveSport('football')
    }
  }, [visibleSports, activeSport, setActiveSport])

  // Sync sidebar width to CSS var for responsive layout
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--sidebar-current-width',
      collapsed ? '64px' : '220px'
    )
  }, [collapsed])

  const currentSidebarStyle: React.CSSProperties = collapsed
    ? { ...collapsedSidebarStyle, top: topOffset }
    : { ...sidebarStyle, top: topOffset }

  return (
    <aside style={currentSidebarStyle}>
      <div style={headerStyle}>
        {!collapsed && <span style={headerLabelStyle}>Sports</span>}
        <button
          type="button"
          onClick={() => setCollapsed(c => !c)}
          title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          style={collapseButtonStyle}
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

      <div style={collapsed ? collapsedSportsListStyle : sportsListStyle}>
        {visibleSports.map(({ id, name, liveCount, Icon }: Sport) => {
          const isActive = activeSport === id
          const isLive = liveCount > 0
          return (
            <button
              key={id}
              type="button"
              onClick={() => setActiveSport(id)}
              title={collapsed ? name : undefined}
              style={getSportButtonStyle(isActive, collapsed)}
            >
              <span style={iconWrapperStyle}>
                <Icon size={18} />
                {isLive && <span style={getLiveDotStyle(isActive)} />}
              </span>
              {!collapsed && (
                <>
                  <span style={sportLabelStyle}>{name}</span>
                  {isLive && <span style={getLiveCountBadgeStyle(isActive)}>{liveCount}</span>}
                </>
              )}
            </button>
          )
        })}
      </div>

      {!collapsed && (
        <div style={competitionsSectionStyle}>
          <div style={competitionsLabelStyle}>
            <span style={competitionsTitleStyle}>Competitions</span>
          </div>
          {(COMPETITIONS_BY_SPORT[activeSport] ?? []).map(competition => (
            <button
              key={competition}
              type="button"
              style={competitionButtonStyle}
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
