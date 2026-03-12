'use client'

import { useClientConfig, useSetClient, type ClientId } from '@/lib/client-config-context'

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
    <button
      onClick={toggle}
      type="button"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '6px 14px',
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--layout-border-radius)',
        cursor: 'pointer',
        transition: 'border-color 200ms, background 200ms',
        color: 'var(--color-text-muted)',
        fontSize: '0.8125rem',
        fontFamily: 'var(--font-family)',
        whiteSpace: 'nowrap',
      }}
    >
      <span
        style={{
          background: 'var(--color-primary)',
          color: '#fff',
          borderRadius: '4px',
          padding: '2px 7px',
          fontSize: '0.6875rem',
          fontWeight: 700,
          transition: 'background 200ms',
        }}
      >
        {currentName}
      </span>
      <span style={{ opacity: 0.5 }}>⇄</span>
      <span>{otherLabel}</span>
    </button>
  )
}
