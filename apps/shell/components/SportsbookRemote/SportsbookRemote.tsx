'use client'

import React, { Component, type ErrorInfo, type ReactNode } from 'react'
import dynamic from 'next/dynamic'
import { loadingStyle, errorStyle } from './SportsbookRemote.styles'

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
    loading: () => <div style={loadingStyle}>Carregando jogos...</div>,
  }
)

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
    console.error('[shell] Remote load failure — sportsbook:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }
    return this.props.children
  }
}

export function SportsbookRemote() {
  return (
    <RemoteErrorBoundary
      fallback={<div style={errorStyle}>Sportsbook indispon&iacute;vel no momento</div>}
    >
      <SportsbookPage />
    </RemoteErrorBoundary>
  )
}
