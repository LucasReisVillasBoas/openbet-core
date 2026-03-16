'use client'

import { useClientConfig, useSetClient, type ClientId } from '@/lib/client-config-context'
import { buttonStyle, currentBrandStyle, arrowStyle } from './ThemeToggle.styles'

const OTHER_CLIENT: Record<ClientId, ClientId> = {
  'client-grandbet': 'client-elitebet',
  'client-elitebet': 'client-grandbet',
}

const OTHER_LABEL: Record<ClientId, string> = {
  'client-grandbet': 'EliteBet',
  'client-elitebet': 'GrandBet',
}

export function ThemeToggle() {
  const config = useClientConfig()
  const setClient = useSetClient()

  const currentId = config.brand.id as ClientId
  const currentName = config.brand.name
  const otherLabel = OTHER_LABEL[currentId]

  function toggle() {
    setClient(OTHER_CLIENT[currentId])
  }

  return (
    <button onClick={toggle} type="button" style={buttonStyle}>
      <span style={currentBrandStyle}>{currentName}</span>
      <span style={arrowStyle}>⇄</span>
      <span>{otherLabel}</span>
    </button>
  )
}
