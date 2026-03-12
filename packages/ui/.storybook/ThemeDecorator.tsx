import React, { useEffect } from 'react'
import type { Decorator } from '@storybook/react'
import { themeEngine } from '@openbet/theme-engine'
import alphaConfig from '../../../clients/alpha.config.json'
import betaConfig from '../../../clients/beta.config.json'

const configs: Record<string, any> = {
  alpha: alphaConfig,
  beta: betaConfig,
}

export const ThemeDecorator: Decorator = (Story, context) => {
  const theme = context.globals.theme ?? 'alpha'

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
