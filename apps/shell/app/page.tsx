'use client'

// Prevent Next.js from attempting static prerender of this page.
// The page depends on ClientConfig (loaded at request time) and consumes
// Module Federation remotes — neither is available at build time.
export const dynamic = 'force-dynamic'

import { SportsbookRemote } from '@/components/SportsbookRemote'
import { BetSlipPanel } from '@/components/BetSlipPanel'
import { SportsSidebar } from '@/components/SportsSidebar'
import { TodayMatches } from '@/components/TodayMatches'
import { useClientConfig } from '@/lib/client-config-context'

export default function Page() {
  const config = useClientConfig()
  const { features, brand } = config

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '220px 1fr 300px',
        minHeight: 'calc(100vh - 96px)',
        fontFamily: 'var(--font-family)',
        color: 'var(--color-text)',
      }}
    >
      {/* Left: Sports sidebar — client (handles active state) */}
      <SportsSidebar />

      {/* Center: Main content */}
      <main
        style={{
          background: 'var(--color-background)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          overflowY: 'auto',
        }}
      >
        {/* Badges de features ativas */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <span
            style={{
              fontSize: '0.6875rem',
              fontWeight: 700,
              color: 'var(--color-text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              alignSelf: 'center',
              marginRight: '4px',
            }}
          >
            {brand.name}
          </span>
          {features.liveBetting && <FeatureBadge color="var(--color-error)" label="🔴 Ao Vivo" />}
          {features.casino && <FeatureBadge color="var(--color-secondary)" label="🎰 Casino" />}
          {features.esports && <FeatureBadge color="var(--color-primary)" label="🎮 E-Sports" />}
          {features.cashOut && <FeatureBadge color="var(--color-success)" label="💸 Cash Out" />}
        </div>

        {/* Ao Vivo — loaded from sportsbook remote via Module Federation */}
        {features.liveBetting && (
          <section>
            <SectionHeader label="🔴 Ao Vivo" />
            <SportsbookRemote />
          </section>
        )}

        {/* Hoje — static MatchCards (server-rendered) */}
        <section>
          <SectionHeader label="📅 Hoje" />
          <TodayMatches />
        </section>

        {/* Casino placeholder — shown only if feature is enabled */}
        {features.casino && (
          <section>
            <SectionHeader label="🎰 Casino" />
            <div
              style={{
                background: 'var(--color-surface)',
                border: '1px dashed var(--color-border)',
                borderRadius: 'var(--layout-border-radius)',
                padding: '32px',
                textAlign: 'center',
                color: 'var(--color-text-muted)',
                fontSize: '0.875rem',
              }}
            >
              Casino games carregando via remote...
            </div>
          </section>
        )}

        {/* Footer */}
        <footer
          style={{
            marginTop: 'auto',
            paddingTop: '24px',
            borderTop: '1px solid var(--color-border)',
            textAlign: 'center',
            fontSize: '0.75rem',
            color: 'var(--color-text-muted)',
            fontStyle: 'italic',
          }}
        >
          Mesmo código. Config diferente. Marca diferente.
        </footer>
      </main>

      {/* Right: BetSlip — client (handles selections state) */}
      <aside
        style={{
          background: 'var(--color-surface)',
          borderLeft: '1px solid var(--color-border)',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
        }}
      >
        <div
          style={{
            padding: '16px 16px 12px',
            borderBottom: '1px solid var(--color-border)',
          }}
        >
          <span
            style={{
              fontSize: '0.625rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--color-text-muted)',
            }}
          >
            Sua Aposta
          </span>
        </div>
        <BetSlipPanel />
      </aside>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Local helpers
// ---------------------------------------------------------------------------

function SectionHeader({ label }: { label: string }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginBottom: '16px',
        paddingBottom: '12px',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <h2
        style={{
          margin: 0,
          fontSize: '1rem',
          fontWeight: 700,
          color: 'var(--color-text)',
        }}
      >
        {label}
      </h2>
    </div>
  )
}

function FeatureBadge({ color, label }: { color: string; label: string }) {
  return (
    <span
      style={{
        fontSize: '0.6875rem',
        fontWeight: 600,
        padding: '3px 8px',
        borderRadius: '4px',
        background: color,
        color: '#fff',
        opacity: 0.9,
      }}
    >
      {label}
    </span>
  )
}
