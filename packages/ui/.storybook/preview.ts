import type { Preview } from '@storybook/react'
import { themeEngine } from '@openbet/theme-engine'
import alphaConfig from '../../../clients/alpha.config.json'
import { ThemeDecorator } from './ThemeDecorator'

// Aplica o tema alpha por padrão em todas as stories
themeEngine.apply(alphaConfig as any)

const preview: Preview = {
  parameters: {
    backgrounds: { disable: true },
    layout: 'centered',
  },
  globalTypes: {
    theme: {
      name: 'Tema',
      description: 'Tema do cliente',
      defaultValue: 'alpha',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'alpha', title: 'AlphaBet — Verde' },
          { value: 'beta', title: 'BetNova — Azul' },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
  decorators: [ThemeDecorator],
}

export default preview
