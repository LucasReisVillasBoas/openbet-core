'use client'

import { useState } from 'react'
import { BetSlip, type BetSlipSelection } from '@openbet/ui'

export function BetSlipPanel() {
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
  )
}
