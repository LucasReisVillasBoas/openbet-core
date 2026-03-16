import React, { useEffect } from 'react'
import type { Decorator } from '@storybook/react'
import { themeEngine } from '@openbet/theme-engine'
import grandbetConfig from '../../../clients/grandbet.config.json'
import elitebetConfig from '../../../clients/elitebet.config.json'

const configs: Record<string, any> = {
  grandbet: grandbetConfig,
  elitebet: elitebetConfig,
}

export const ThemeDecorator: Decorator = (Story, context) => {
  const theme = context.globals.theme ?? 'grandbet'

  useEffect(() => {
    themeEngine.apply(configs[theme])
  }, [theme])

  return (
    <div
      style={{
        background: 'var(--color-background)',
        minHeight: '100vh',
        padding: '2rem',
        fontFamily: 'var(--font-family)',
      }}
    >
      <Story />
    </div>
  )
}
