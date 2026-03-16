import type { Preview } from '@storybook/react'
import { themeEngine } from '@openbet/theme-engine'
import grandbetConfig from '../../../clients/grandbet.config.json'
import { ThemeDecorator } from './ThemeDecorator'

// Aplica o tema grandbet por padrão em todas as stories
themeEngine.apply(grandbetConfig as any)

const preview: Preview = {
  parameters: {
    backgrounds: { disable: true },
    layout: 'centered',
  },
  globalTypes: {
    theme: {
      name: 'Tema',
      description: 'Tema do cliente',
      defaultValue: 'grandbet',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'grandbet', title: 'GrandBet — Verde' },
          { value: 'elitebet', title: 'EliteBet — Azul' },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
  decorators: [ThemeDecorator],
}

export default preview
