'use client'

import React, { Component, type ErrorInfo, type ReactNode } from 'react'
import dynamic from 'next/dynamic'

// ---------------------------------------------------------------------------
// Remote import — lazy-loaded via Module Federation
//
// `next/dynamic` is used instead of `React.lazy` to prevent Next.js from
// resolving 'sportsbook/SportsbookPage' during server-side compilation.
// With `ssr: false`, the component is never imported in the server bundle,
// avoiding the MODULE_NOT_FOUND error at runtime.
//
// Mandate 3: All remote imports must be lazy.
// Mandate 4: All lazy imports must have Suspense + ErrorBoundary with fallback.
// ---------------------------------------------------------------------------

const SportsbookPage = dynamic(
  // @ts-expect-error — federated module; runtime types in types/remote.d.ts
  () => import('sportsbook/SportsbookPage'),
  {
    ssr: false,
    loading: () => (
      <div
        style={{
          background: 'var(--color-background-card)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--layout-border-radius)',
          padding: '48px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '300px',
          color: 'var(--color-text-muted)',
        }}
      >
        Carregando jogos...
      </div>
    ),
  }
)

// ---------------------------------------------------------------------------
// ErrorBoundary — catches remote load failures without crashing the host.
// Handles: network errors, version mismatches, remote unavailability.
// ---------------------------------------------------------------------------

interface ErrorBoundaryProps {
  fallback: ReactNode
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class RemoteErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Replace with observability service (e.g. Sentry) in production.
    console.error('[shell] Remote load failure — sportsbook:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }
    return this.props.children
  }
}

// ---------------------------------------------------------------------------
// SportsbookRemote — public API
// Wraps the dynamic remote in an ErrorBoundary.
// The Suspense fallback is provided via next/dynamic's `loading` option above.
// ---------------------------------------------------------------------------

export function SportsbookRemote() {
  return (
    <RemoteErrorBoundary
      fallback={
        <div
          style={{
            background: 'var(--color-background-card)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--layout-border-radius)',
            padding: '48px 32px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            minHeight: '300px',
            color: 'var(--color-error)',
          }}
        >
          Sportsbook indispon&iacute;vel no momento
        </div>
      }
    >
      <SportsbookPage />
    </RemoteErrorBoundary>
  )
}
