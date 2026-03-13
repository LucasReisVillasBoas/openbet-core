'use client'

import { useState } from 'react'
import { ChevronRight, ChevronLeft, ShoppingCart } from 'lucide-react'
import { BetSlip, type BetSlipSelection } from '@openbet/ui'

export function BetSlipPanel({ topOffset }: { topOffset: number }) {
  const [collapsed, setCollapsed] = useState(false)
  const [selections, setSelections] = useState<BetSlipSelection[]>([])
  const [stake, setStake] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [mode, setMode] = useState<'single' | 'multiple'>('single')

  function handleRemove(id: string) {
    setSelections(prev => prev.filter(s => s.id !== id))
  }

  function handlePlaceBet() {
    setIsLoading(true)
    setTimeout(() => {
      setSelections([])
      setStake(0)
      setIsLoading(false)
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
          {selections.length === 0 ? (
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
              <ShoppingCart
                size={32}
                style={{ opacity: 0.3, color: 'var(--color-text-muted)' }}
              />
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
              selections={selections}
              stake={stake}
              mode={mode}
              isLoading={isLoading}
              onRemoveSelection={handleRemove}
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
