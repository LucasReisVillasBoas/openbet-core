import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// ---------------------------------------------------------------------------
// Shared rules applied to all TS/TSX files
// ---------------------------------------------------------------------------

const COMMON_TS_RULES = {
  'no-console': ['warn', { allow: ['warn', 'error'] }],
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': 'error',
  '@typescript-eslint/no-explicit-any': 'warn',
  'prefer-const': 'error',
  'no-var': 'error',
  eqeqeq: 'error',
  'no-duplicate-imports': 'error',
}

export default [
  // ---------------------------------------------------------------------------
  // Global ignores
  // ---------------------------------------------------------------------------
  {
    ignores: [
      '**/dist/**',
      '**/node_modules/**',
      '**/*.js',
      '**/*.mjs',
      '**/*.cjs',
      '**/*.d.ts',
      'scripts/**',
    ],
  },

  // ---------------------------------------------------------------------------
  // packages — TypeScript source files (project: true for type-aware linting)
  // ---------------------------------------------------------------------------
  {
    files: ['packages/*/src/**/*.ts', 'packages/*/src/**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        project: true,
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: COMMON_TS_RULES,
  },

  // ---------------------------------------------------------------------------
  // apps — TypeScript/TSX files
  // (project: true omitted — Next.js tsconfig plugins can conflict with tsserver)
  // ---------------------------------------------------------------------------
  {
    files: [
      'apps/*/app/**/*.ts',
      'apps/*/app/**/*.tsx',
      'apps/*/components/**/*.ts',
      'apps/*/components/**/*.tsx',
      'apps/*/lib/**/*.ts',
      'apps/*/lib/**/*.tsx',
    ],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: COMMON_TS_RULES,
  },

  // ---------------------------------------------------------------------------
  // React — hooks rules for all TSX files across packages and apps
  // ---------------------------------------------------------------------------
  {
    files: [
      'packages/*/src/**/*.tsx',
      'apps/*/app/**/*.tsx',
      'apps/*/components/**/*.tsx',
      'apps/*/lib/**/*.tsx',
    ],
    plugins: {
      'react-hooks': reactHooksPlugin,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
]
