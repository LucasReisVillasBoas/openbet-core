// Server-side stub for the Module Federation remote 'sportsbook/SportsbookPage'.
//
// This file is NEVER executed. It exists only to satisfy webpack's server-side
// module resolution during Next.js build/dev compilation. The actual remote
// module is loaded by the client-side ModuleFederationPlugin at runtime.
//
// The stub is mapped via webpack.resolve.alias in next.config.ts when
// running in the server compilation context.

export default function SportsbookPageStub() {
  return null
}
