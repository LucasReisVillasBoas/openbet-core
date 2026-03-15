'use client'

import { useState } from 'react'
import { ChevronRight, ChevronLeft, ShoppingCart } from 'lucide-react'
import { BetSlip } from '@openbet/ui'
import type { BetSlipSelection } from '@openbet/ui'
import { useBetSlip } from '@/lib/bet-slip-context'

export function BetSlipPanel({ topOffset }: { topOffset: number }) {
  const [collapsed, setCollapsed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [confirmed, setConfirmed] = useState(false)
  const [mode, setMode] = useState<'single' | 'multiple'>('single')

  const { selections, removeSelection, clearSelections, stake, setStake } = useBetSlip()

  // Map context selections to the BetSlipSelection shape expected by @openbet/ui BetSlip
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

  return (
    <>
      {/* Floating reopen button — only visible when collapsed */}
      {collapsed && (
        <button
          type="button"
          onClick={() => setCollapsed(false)}
          title="Abrir Aposta"
          style={{
            position: 'fixed',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 51,
            background: 'var(--color-background-card)',
            border: '1px solid var(--color-border)',
            borderRadius: '8px 0 0 8px',
            padding: '12px 8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ChevronLeft size={16} color="var(--color-text-muted)" />
        </button>
      )}

      {/* Main panel */}
      <aside
        style={{
          position: 'fixed',
          right: 0,
          top: topOffset,
          bottom: 0,
          zIndex: 50,
          width: collapsed ? '0px' : '320px',
          overflow: 'hidden',
          transition: 'width 250ms ease',
          background: 'var(--color-background-card)',
          borderLeft: '1px solid var(--color-border)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '16px 16px 12px',
            borderBottom: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
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
              whiteSpace: 'nowrap',
            }}
          >
            Sua Aposta
            {selections.length > 0 && (
              <span
                style={{
                  marginLeft: '6px',
                  background: 'var(--color-primary)',
                  color: '#fff', // #fff on primary background
                  borderRadius: '10px',
                  padding: '1px 6px',
                  fontSize: '0.625rem',
                  fontWeight: 700,
                }}
              >
                {selections.length}
              </span>
            )}
          </span>
          <button
            type="button"
            onClick={() => setCollapsed(true)}
            title="Fechar"
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '4px',
            }}
          >
            <ChevronRight size={16} color="var(--color-text-muted)" />
          </button>
        </div>

        {/* Content */}
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {confirmed ? (
            /* Confirmed state */
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                padding: '32px 24px',
                gap: '12px',
              }}
            >
              <span style={{ fontSize: '2rem' }}>✓</span>
              <span
                style={{
                  fontWeight: 600,
                  fontSize: '0.9375rem',
                  color: 'var(--color-success)',
                  fontFamily: 'var(--font-family)',
                  textAlign: 'center',
                }}
              >
                Bet confirmed!
              </span>
            </div>
          ) : selections.length === 0 ? (
            /* Empty state */
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                padding: '32px 24px',
                gap: '12px',
              }}
            >
              <ShoppingCart size={32} style={{ opacity: 0.3, color: 'var(--color-text-muted)' }} />
              <span
                style={{
                  fontWeight: 600,
                  fontSize: '0.9375rem',
                  color: 'var(--color-text)',
                  fontFamily: 'var(--font-family)',
                  textAlign: 'center',
                }}
              >
                Your slip is empty
              </span>
              <span
                style={{
                  fontSize: '0.8125rem',
                  color: 'var(--color-text-muted)',
                  fontFamily: 'var(--font-family)',
                  textAlign: 'center',
                }}
              >
                Select odds to add to your slip
              </span>
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
