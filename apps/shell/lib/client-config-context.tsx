'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { ClientConfigSchema, type ClientConfig } from '@openbet/config-schema'
import { themeEngine } from '@openbet/theme-engine'
import alphaConfig from '../../../clients/alpha.config.json'
import betaConfig from '../../../clients/beta.config.json'

// ---------------------------------------------------------------------------
// Client registry
// ---------------------------------------------------------------------------

export type ClientId = 'client-alpha' | 'client-beta'

const CLIENT_CONFIGS: Record<ClientId, unknown> = {
  'client-alpha': alphaConfig,
  'client-beta': betaConfig,
}

const LS_KEY = 'openbet-client'

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface ClientConfigContextValue {
  config: ClientConfig
  setConfig: (config: ClientConfig) => void
}

const ClientConfigContext = createContext<ClientConfigContextValue | null>(null)

// ---------------------------------------------------------------------------
// Provider
// ---------------------------------------------------------------------------

interface ClientConfigProviderProps {
  initialConfig: ClientConfig
  children: ReactNode
}

export function ClientConfigProvider({ initialConfig, children }: ClientConfigProviderProps) {
  const [config, setConfig] = useState<ClientConfig>(initialConfig)

  // On mount, check localStorage and restore a previously selected client
  useEffect(() => {
    const stored = localStorage.getItem(LS_KEY) as ClientId | null
    if (stored && stored !== initialConfig.brand.id) {
      const raw = CLIENT_CONFIGS[stored]
      if (raw) {
        const result = ClientConfigSchema.safeParse(raw)
        if (result.success) {
          setConfig(result.data)
          themeEngine.apply(result.data)
        }
      }
    }
  }, [initialConfig.brand.id])

  return (
    <ClientConfigContext.Provider value={{ config, setConfig }}>
      {children}
    </ClientConfigContext.Provider>
  )
}

// ---------------------------------------------------------------------------
// useClientConfig — returns the current ClientConfig
// ---------------------------------------------------------------------------

export function useClientConfig(): ClientConfig {
  const ctx = useContext(ClientConfigContext)
  if (!ctx) throw new Error('useClientConfig must be used within ClientConfigProvider')
  return ctx.config
}

// ---------------------------------------------------------------------------
// useSetClient — returns a setter that validates, applies theme, and persists
// ---------------------------------------------------------------------------

export function useSetClient(): (clientId: ClientId) => void {
  const ctx = useContext(ClientConfigContext)
  if (!ctx) throw new Error('useSetClient must be used within ClientConfigProvider')

  return (clientId: ClientId) => {
    const raw = CLIENT_CONFIGS[clientId]
    const result = ClientConfigSchema.safeParse(raw)
    if (!result.success) {
      console.error('[ClientConfigContext] Invalid config:', result.error)
      return
    }
    themeEngine.apply(result.data)
    ctx.setConfig(result.data)
    localStorage.setItem(LS_KEY, clientId)
  }
}
