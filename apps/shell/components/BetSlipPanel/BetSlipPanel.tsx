'use client'

import { useState, useEffect } from 'react'
import { ChevronRight, ChevronLeft, ShoppingCart } from 'lucide-react'
import { BetSlip, type BetSlipSelection } from '@openbet/ui'
import { useBetSlip } from '@/lib/bet-slip-context'
import {
  floatingButtonStyle,
  collapsedPanelStyle,
  panelStyle,
  headerStyle,
  headerLabelStyle,
  badgeStyle,
  closeButtonStyle,
  contentStyle,
  confirmedStateStyle,
  confirmedCheckStyle,
  confirmedTextStyle,
  emptyStateStyle,
  emptyTitleStyle,
  emptyDescStyle,
} from './BetSlipPanel.styles'

export function BetSlipPanel({ topOffset }: { topOffset: number }) {
  const [collapsed, setCollapsed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [confirmed, setConfirmed] = useState(false)
  const [mode, setMode] = useState<'single' | 'multiple'>('single')

  const { selections, removeSelection, clearSelections, stake, setStake } = useBetSlip()

  useEffect(() => {
    setMode(selections.length >= 2 ? 'multiple' : 'single')
  }, [selections.length])

  const slipSelections: BetSlipSelection[] = selections.map(s => ({
    id: s.id,
    eventName: s.eventName,
    marketName: s.marketName,
    selectionName: s.selectionName,
    odds: s.odds,
  }))

  function handlePlaceBet() {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setConfirmed(true)
      clearSelections()
      setTimeout(() => {
        setConfirmed(false)
      }, 2000)
    }, 1500)
  }

  const currentPanelStyle: React.CSSProperties = collapsed
    ? { ...collapsedPanelStyle, top: topOffset }
    : { ...panelStyle, top: topOffset }

  return (
    <>
      {collapsed && (
        <button
          type="button"
          onClick={() => setCollapsed(false)}
          title="Abrir Aposta"
          style={floatingButtonStyle}
        >
          <ChevronLeft size={16} color="var(--color-text-muted)" />
        </button>
      )}

      <aside style={currentPanelStyle}>
        <div style={headerStyle}>
          <span style={headerLabelStyle}>
            Sua Aposta
            {selections.length > 0 && <span style={badgeStyle}>{selections.length}</span>}
          </span>
          <button
            type="button"
            onClick={() => setCollapsed(true)}
            title="Fechar"
            style={closeButtonStyle}
          >
            <ChevronRight size={16} color="var(--color-text-muted)" />
          </button>
        </div>

        <div style={contentStyle}>
          {confirmed ? (
            <div style={confirmedStateStyle}>
              <span style={confirmedCheckStyle}>✓</span>
              <span style={confirmedTextStyle}>Bet confirmed!</span>
            </div>
          ) : selections.length === 0 ? (
            <div style={emptyStateStyle}>
              <ShoppingCart size={32} style={{ opacity: 0.3, color: 'var(--color-text-muted)' }} />
              <span style={emptyTitleStyle}>Your slip is empty</span>
              <span style={emptyDescStyle}>Select odds to add to your slip</span>
            </div>
          ) : (
            <BetSlip
              selections={slipSelections}
              stake={stake}
              mode={mode}
              isLoading={isLoading}
              onRemoveSelection={removeSelection}
              onStakeChange={setStake}
              onPlaceBet={handlePlaceBet}
              onModeChange={setMode}
            />
          )}
        </div>
      </aside>
    </>
  )
}
