'use client'

import { useEffect } from 'react'
import { themeEngine } from '@openbet/theme-engine'
import type { ClientConfig } from '@openbet/config-schema'

interface ThemeProviderProps {
  config: ClientConfig
  children: React.ReactNode
}

/**
 * Client component that applies the ClientConfig theme to the DOM.
 *
 * This is the only client boundary in the shell. It receives the already-
 * validated ClientConfig from the server layout, then calls
 * themeEngine.apply(config) inside useEffect to inject all CSS Custom
 * Properties into document.documentElement.
 */
export function ThemeProvider({ config, children }: ThemeProviderProps) {
  useEffect(() => {
    themeEngine.apply(config)
  }, [config])

  return <>{children}</>
}
