// SERVER-ONLY — must never be imported from a client component ('use client').
// Reads NEXT_PUBLIC_CLIENT_ID, loads the corresponding JSON, and validates it.

import { ClientConfigSchema, type ClientConfig } from '@openbet/config-schema'

// ---------------------------------------------------------------------------
// Supported client IDs
// ---------------------------------------------------------------------------

export type ClientId = 'client-alpha' | 'client-beta'

const CLIENT_CONFIGS: Record<ClientId, () => Promise<unknown>> = {
  'client-alpha': () => import('../../../clients/alpha.config.json'),
  'client-beta': () => import('../../../clients/beta.config.json'),
}

// ---------------------------------------------------------------------------
// getClientConfig
// ---------------------------------------------------------------------------

/**
 * Loads and validates the ClientConfig for the current deployment.
 *
 * The client is identified by NEXT_PUBLIC_CLIENT_ID environment variable.
 * Throws an error if the env var is missing, the client ID is unknown, or
 * the config fails Zod validation — a shell with an invalid config must
 * never start (ADR-004).
 */
export async function getClientConfig(): Promise<ClientConfig> {
  const clientId = process.env.NEXT_PUBLIC_CLIENT_ID

  if (!clientId) {
    throw new Error(
      '[shell] NEXT_PUBLIC_CLIENT_ID is not set. ' +
        'Create apps/shell/.env.local with NEXT_PUBLIC_CLIENT_ID=client-alpha'
    )
  }

  const loader = CLIENT_CONFIGS[clientId as ClientId]

  if (!loader) {
    throw new Error(
      `[shell] Unknown client ID: "${clientId}". ` +
        `Valid values: ${Object.keys(CLIENT_CONFIGS).join(', ')}`
    )
  }

  const raw = await loader()

  const result = ClientConfigSchema.safeParse(raw)

  if (!result.success) {
    throw new Error(
      `[shell] Invalid config for client "${clientId}":\n` +
        result.error.issues.map(i => `  ${i.path.join('.')}: ${i.message}`).join('\n')
    )
  }

  return result.data
}
