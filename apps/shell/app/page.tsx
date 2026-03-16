'use client'

// Prevent Next.js from attempting static prerender of this page.
// The page depends on ClientConfig (loaded at request time) and consumes
// Module Federation remotes — neither is available at build time.
export const dynamic = 'force-dynamic'

import React from 'react'
import { Radio, Calendar, Layers } from 'lucide-react'
import { SportsbookRemote } from '@/components/SportsbookRemote'
import { BetSlipPanel } from '@/components/BetSlipPanel'
import { SportsSidebar } from '@/components/SportsSidebar'
import { TodayMatches } from '@/components/TodayMatches'
import { useClientConfig } from '@/lib/client-config-context'
import { useSportFilter } from '@/lib/sport-filter-context'

const isDemoMode = process.env.NEXT_PUBLIC_DEMO_MODE === 'true'
const TOP_OFFSET = isDemoMode ? 96 : 64

const SPORT_LABELS: Record<string, string> = {
  football: 'Football',
  basketball: 'Basketball',
  tennis: 'Tennis',
  volleyball: 'Volleyball',
  esports: 'E-Sports',
  'american-football': 'Am. Football',
  baseball: 'Baseball',
  hockey: 'Hockey',
}

const CASINO_GAMES = [
  { name: 'Sweet Bonanza', provider: 'Pragmatic Play', hot: true },
  { name: 'Gates of Olympus', provider: 'Pragmatic Play', hot: false },
  { name: 'Book of Dead', provider: "Play'n GO", hot: true },
  { name: 'Starburst', provider: 'NetEnt', hot: false },
]

export default function Page() {
  const config = useClientConfig()
  const { features } = config
  const { activeSport } = useSportFilter()
  const sportLabel = SPORT_LABELS[activeSport] ?? activeSport

  return (
    <>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>

      <div
        style={{
          display: 'flex',
          minHeight: '100vh',
          fontFamily: 'var(--font-family)',
          color: 'var(--color-text)',
        }}
      >
        {/* Fixed left sidebar */}
        <SportsSidebar topOffset={TOP_OFFSET} />

        {/* Central content — padded to avoid fixed sidebar and betslip */}
        <main
          style={{
            flex: 1,
            paddingLeft: '244px' /* 220px sidebar + 24px gap */,
            paddingRight: '344px' /* 320px betslip + 24px gap */,
            paddingTop: '24px',
            paddingBottom: '40px',
            minHeight: '100vh',
            boxSizing: 'border-box',
            background: 'var(--color-background)',
          }}
        >
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            {/* Feature badges */}
            <div
              style={{
                display: 'flex',
                gap: '8px',
                marginBottom: '24px',
                flexWrap: 'wrap',
                alignItems: 'center',
              }}
            >
              {features.liveBetting && (
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    padding: '3px 10px',
                    borderRadius: '4px',
                    background: 'var(--color-error)',
                    color: 'white',
                  }}
                >
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: 'white',
                      flexShrink: 0,
                      animation: 'pulse 2s infinite',
                    }}
                  />
                  AO VIVO
                </span>
              )}
              {features.casino && <FeatureBadge color="var(--color-secondary)" label="CASINO" />}
              {features.cashOut && <FeatureBadge color="var(--color-success)" label="CASH OUT" />}
              {features.esports && <FeatureBadge color="var(--color-primary)" label="E-SPORTS" />}
            </div>

            {/* Hoje section */}
            <section style={{ marginBottom: '32px' }}>
              <SectionHeader icon={Calendar} title={`Today · ${sportLabel}`} />
              <TodayMatches />
            </section>

            {/* Ao Vivo section — sportsbook remote below match cards */}
            {features.liveBetting && (
              <section style={{ marginBottom: '32px' }}>
                <SectionHeader icon={Radio} title="Ao Vivo" />
                <SportsbookRemote />
              </section>
            )}

            {/* Casino section */}
            {features.casino && (
              <section style={{ marginBottom: '32px' }}>
                <SectionHeader icon={Layers} title="Casino" />
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
                    gap: '12px',
                  }}
                >
                  {CASINO_GAMES.map(game => (
                    <CasinoCard key={game.name} game={game} />
                  ))}
                </div>
              </section>
            )}

            {/* Footer */}
            <footer
              style={{
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
          </div>
        </main>

        {/* Fixed right betslip */}
        <BetSlipPanel topOffset={TOP_OFFSET} />
      </div>
    </>
  )
}

// ---------------------------------------------------------------------------
// Local helpers
// ---------------------------------------------------------------------------

function SectionHeader({ icon: Icon, title }: { icon: React.ElementType; title: string }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        borderBottom: '1px solid var(--color-border)',
        paddingBottom: '12px',
        marginBottom: '16px',
      }}
    >
      <Icon size={16} color="var(--color-text-muted)" />
      <span
        style={{
          fontSize: '0.75rem',
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase' as const,
          color: 'var(--color-text-muted)',
        }}
      >
        {title}
      </span>
    </div>
  )
}

function FeatureBadge({ color, label }: { color: string; label: string }) {
  return (
    <span
      style={{
        fontSize: '0.6875rem',
        fontWeight: 700,
        padding: '3px 10px',
        borderRadius: '4px',
        background: color,
        color: 'white',
      }}
    >
      {label}
    </span>
  )
}

function CasinoCard({ game }: { game: { name: string; provider: string; hot: boolean } }) {
  return (
    <div
      style={{
        background: 'var(--color-surface)',
        borderRadius: 'var(--layout-border-radius, 8px)',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
      }}
    >
      {game.hot && (
        <span
          style={{
            display: 'inline-block',
            alignSelf: 'flex-start',
            background: 'var(--color-primary)',
            color: 'white',
            fontSize: '0.625rem',
            fontWeight: 700,
            borderRadius: '4px',
            padding: '2px 6px',
            textTransform: 'uppercase' as const,
            letterSpacing: '0.04em',
          }}
        >
          HOT
        </span>
      )}
      <span
        style={{
          fontSize: '0.875rem',
          fontWeight: 600,
          color: 'var(--color-text)',
          fontFamily: 'var(--font-family)',
        }}
      >
        {game.name}
      </span>
      <span
        style={{
          fontSize: '0.75rem',
          color: 'var(--color-text-muted)',
          fontFamily: 'var(--font-family)',
        }}
      >
        {game.provider}
      </span>
    </div>
  )
}
