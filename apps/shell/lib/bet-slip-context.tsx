'use client'
import { createContext, useContext, useState, useCallback } from 'react'

interface BetSelection {
  id: string
  matchId: string
  eventName: string
  marketName: string
  selectionName: string
  odds: number
}

interface BetSlipContextType {
  selections: BetSelection[]
  addSelection: (s: BetSelection) => void
  removeSelection: (id: string) => void
  clearSelections: () => void
  stake: number
  setStake: (n: number) => void
}

const BetSlipContext = createContext<BetSlipContextType | null>(null)

export function BetSlipProvider({ children }: { children: React.ReactNode }) {
  const [selections, setSelections] = useState<BetSelection[]>([])
  const [stake, setStake] = useState(0)

  const addSelection = useCallback((s: BetSelection) => {
    setSelections(prev => {
      const exists = prev.find(x => x.id === s.id)
      if (exists) return prev.filter(x => x.id !== s.id)
      if (prev.length >= 10) return prev
      return [...prev, s]
    })
  }, [])

  const removeSelection = useCallback((id: string) => {
    setSelections(prev => prev.filter(x => x.id !== id))
  }, [])

  const clearSelections = useCallback(() => {
    setSelections([])
    setStake(0)
  }, [])

  return (
    <BetSlipContext.Provider
      value={{
        selections,
        addSelection,
        removeSelection,
        clearSelections,
        stake,
        setStake,
      }}
    >
      {children}
    </BetSlipContext.Provider>
  )
}

export function useBetSlip() {
  const ctx = useContext(BetSlipContext)
  if (!ctx) throw new Error('useBetSlip must be inside BetSlipProvider')
  return ctx
}
