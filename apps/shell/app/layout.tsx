import type { Metadata } from 'next'
import { getClientConfig } from '@/lib/client-config'
import { ThemeProvider } from '@/components/ThemeProvider'
import { ThemeToggle } from '@/components/ThemeToggle'
import { ClientConfigProvider } from '@/lib/client-config-context'
import './globals.css'

export const metadata: Metadata = {
  title: 'OpenBet Core',
  description: 'White-label sports betting platform',
}

const isDemoMode = process.env.NEXT_PUBLIC_DEMO_MODE === 'true'

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const config = await getClientConfig()

  return (
    <html lang="pt-BR">
      <body style={{ background: 'var(--color-background)', margin: 0, padding: 0 }}>
        <ClientConfigProvider initialConfig={config}>
          <ThemeProvider config={config}>
            {/* Fixed header */}
            <header
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: '60px',
                zIndex: 100,
                background: 'var(--color-background-card)',
                borderBottom: '1px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 1.5rem',
                fontFamily: 'var(--font-family)',
              }}
            >
              <span
                style={{
                  fontWeight: 700,
                  fontSize: '1.125rem',
                  color: 'var(--color-text)',
                }}
              >
                OpenBet Core
              </span>
              {isDemoMode && <ThemeToggle />}
            </header>

            {/* Demo banner — only in demo mode */}
            {isDemoMode && (
              <div
                style={{
                  position: 'fixed',
                  top: '60px',
                  left: 0,
                  right: 0,
                  zIndex: 99,
                  background: 'var(--color-surface)',
                  borderBottom: '1px solid var(--color-border)',
                  padding: '8px 1.5rem',
                  fontSize: '0.75rem',
                  color: 'var(--color-text-muted)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontFamily: 'var(--font-family)',
                }}
              >
                <span>🏗️ OpenBet Core — Demo White-Label</span>
                <span>Troque o tema no botão acima para ver a mágica</span>
              </div>
            )}

            {/* paddingTop: 96px (header 60px + banner 36px) em demo mode, 64px caso contrário */}
            <div style={{ paddingTop: isDemoMode ? '96px' : '64px' }}>{children}</div>
          </ThemeProvider>
        </ClientConfigProvider>
      </body>
    </html>
  )
}
