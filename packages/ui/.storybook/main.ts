import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async config => {
    // Ensures a single React instance across pnpm workspace symlinks
    return {
      ...config,
      resolve: {
        ...config.resolve,
        dedupe: ['react', 'react-dom'],
      },
    }
  },
}

export default config
