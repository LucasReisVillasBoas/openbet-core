export default function Home() {
  return (
    <div
      style={{
        background: '#0A0F1A',
        color: '#E2E8F0',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'monospace',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
          OpenBet Sportsbook Remote
        </div>
        <div style={{ color: '#64748B' }}>
          Module Federation Remote — disponível via remoteEntry.js
        </div>
        <div style={{ marginTop: '1rem', color: '#475569', fontSize: '0.875rem' }}>
          <a href="/remoteEntry.js" style={{ color: '#60A5FA' }}>
            /remoteEntry.js
          </a>
        </div>
      </div>
    </div>
  )
}
