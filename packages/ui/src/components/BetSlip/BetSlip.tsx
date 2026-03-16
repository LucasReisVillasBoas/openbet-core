import React from 'react'
import type { BetSlipProps, BetSlipSelection } from './BetSlip.types'
import {
  containerStyle,
  headerStyle,
  headerTitleStyle,
  tabGroupStyle,
  getTabStyle,
  selectionItemStyle,
  selectionHeaderRowStyle,
  eventNameStyle,
  removeButtonStyle,
  marketNameStyle,
  selectionFooterRowStyle,
  selectionNameStyle,
  oddsValueStyle,
  oddsAlertStyle,
  sectionStyle,
  stakeLabelStyle,
  stakeInputStyle,
  quickStakeRowStyle,
  quickStakeButtonStyle,
  returnSectionStyle,
  returnLabelStyle,
  returnValueStyle,
  ctaSectionStyle,
  getCtaButtonStyle,
  emptyStateStyle,
  emptyIconStyle,
  emptyTitleStyle,
  emptyDescStyle,
} from './BetSlip.styles'

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const QUICK_STAKE_VALUES = [10, 20, 50, 100]
const MAX_STAKE = 500

// ---------------------------------------------------------------------------
// Calculation helpers
// ---------------------------------------------------------------------------

function calculateReturn(
  stake: number,
  selections: BetSlipSelection[],
  mode: 'single' | 'multiple'
): number {
  if (selections.length === 0 || stake <= 0) return 0
  if (mode === 'single') {
    const first = selections[0]
    if (!first) return 0
    return stake * first.odds
  }
  const combinedOdds = selections.reduce((acc, s) => acc * s.odds, 1)
  return stake * combinedOdds
}

function formatBRL(value: number): string {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

interface SelectionItemProps {
  selection: BetSlipSelection
  onRemove: (id: string) => void
}

function SelectionItem({ selection, onRemove }: SelectionItemProps) {
  const { id, eventName, marketName, selectionName, odds, oddsChanged } = selection

  return (
    <div style={selectionItemStyle}>
      <div style={selectionHeaderRowStyle}>
        <span style={eventNameStyle}>{eventName}</span>
        <button
          type="button"
          style={removeButtonStyle}
          onClick={() => onRemove(id)}
          aria-label={`Remover ${selectionName}`}
        >
          ✕
        </button>
      </div>

      <span style={marketNameStyle}>{marketName}</span>

      <div style={selectionFooterRowStyle}>
        <span style={selectionNameStyle}>{selectionName}</span>
        <span style={oddsValueStyle}>{odds.toFixed(2)}</span>
      </div>

      {oddsChanged && (
        <span style={oddsAlertStyle}>
          {oddsChanged === 'up' ? '▲' : '▼'} Odd alterada: odds{' '}
          {oddsChanged === 'up' ? 'subiu' : 'caiu'}
        </span>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// BetSlip component
// ---------------------------------------------------------------------------

export function BetSlip({
  selections,
  onRemoveSelection,
  onStakeChange,
  onPlaceBet,
  stake = 0,
  isLoading = false,
  mode = 'single',
  onModeChange,
}: BetSlipProps) {
  const isEmpty = selections.length === 0
  const isCtaDisabled = isLoading || isEmpty
  const potentialReturn = calculateReturn(stake, selections, mode)

  function handleStakeInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = parseFloat(e.target.value)
    onStakeChange(isNaN(value) ? 0 : value)
  }

  function handlePlaceBet() {
    if (!isCtaDisabled) {
      onPlaceBet()
    }
  }

  return (
    <div style={containerStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <span style={headerTitleStyle}>Aposta</span>

        {!isEmpty && (
          <div style={tabGroupStyle}>
            <button
              type="button"
              style={getTabStyle(mode === 'single')}
              onClick={() => onModeChange?.('single')}
            >
              Single
            </button>
            <button
              type="button"
              style={getTabStyle(mode === 'multiple')}
              onClick={() => onModeChange?.('multiple')}
            >
              Multi
            </button>
          </div>
        )}
      </div>

      {/* Empty state */}
      {isEmpty ? (
        <div style={emptyStateStyle}>
          <span style={emptyIconStyle}>🎯</span>
          <span style={emptyTitleStyle}>Nenhuma seleção</span>
          <span style={emptyDescStyle}>Clique em uma odd para adicionar ao carrinho</span>
        </div>
      ) : (
        <>
          {/* Selections list */}
          {selections.map(selection => (
            <SelectionItem key={selection.id} selection={selection} onRemove={onRemoveSelection} />
          ))}

          {/* Stake input section */}
          <div style={sectionStyle}>
            <span style={stakeLabelStyle}>Valor:</span>
            <input
              type="number"
              min="0"
              step="0.01"
              value={stake === 0 ? '' : stake}
              onChange={handleStakeInputChange}
              placeholder="R$ 0,00"
              style={stakeInputStyle}
            />
            <div style={quickStakeRowStyle}>
              {QUICK_STAKE_VALUES.map(value => (
                <button
                  key={value}
                  type="button"
                  style={quickStakeButtonStyle}
                  onClick={() => onStakeChange(value)}
                >
                  {value}
                </button>
              ))}
              <button
                type="button"
                style={quickStakeButtonStyle}
                onClick={() => onStakeChange(MAX_STAKE)}
              >
                Max
              </button>
            </div>
          </div>

          {/* Potential return section */}
          <div style={returnSectionStyle}>
            <span style={returnLabelStyle}>Retorno potencial:</span>
            <span style={returnValueStyle}>{formatBRL(potentialReturn)}</span>
          </div>

          {/* CTA button section */}
          <div style={ctaSectionStyle}>
            <button
              type="button"
              style={getCtaButtonStyle(isCtaDisabled)}
              onClick={handlePlaceBet}
              disabled={isCtaDisabled}
            >
              {isLoading ? 'PROCESSANDO...' : 'FAZER APOSTA'}
            </button>
          </div>
        </>
      )}
    </div>
  )
}
