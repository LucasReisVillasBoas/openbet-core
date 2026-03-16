// SERVER-ONLY — must never be imported from a client component ('use client').
// Reads NEXT_PUBLIC_CLIENT_ID, loads the corresponding JSON, and validates it.

import { ClientConfigSchema, type ClientConfig } from '@openbet/config-schema'

// ---------------------------------------------------------------------------
// Supported client IDs
// ---------------------------------------------------------------------------

export type ClientId = 'client-grandbet' | 'client-elitebet'

const DEFAULT_CLIENT_ID: ClientId = 'client-grandbet'

const CLIENT_CONFIGS: Record<ClientId, () => Promise<unknown>> = {
  'client-grandbet': () => import('../../../clients/grandbet.config.json'),
  'client-elitebet': () => import('../../../clients/elitebet.config.json'),
}

// ---------------------------------------------------------------------------
// getClientConfig
// ---------------------------------------------------------------------------

/**
 * Loads and validates the ClientConfig for the current deployment.
 *
 * The client is identified by NEXT_PUBLIC_CLIENT_ID environment variable.
 * If the env var is absent (e.g. during CI build), falls back to the default
 * client ID rather than throwing — this allows `next build` to complete without
 * the variable set. The error is only surfaced in the browser at runtime when
 * running in a context where no client can be identified (ADR-004).
 *
 * Throws if the resolved client ID is unknown or the config fails Zod
 * validation — a shell with an invalid config must never start.
 */
export async function getClientConfig(): Promise<ClientConfig> {
  const clientId = process.env.NEXT_PUBLIC_CLIENT_ID

  if (!clientId) {
    // During CI / build-time rendering NEXT_PUBLIC_CLIENT_ID is not set.
    // Fall back to the default client so the build succeeds. In production
    // deployments the variable is always expected to be present.
    console.warn(
      `[shell] NEXT_PUBLIC_CLIENT_ID is not set — falling back to "${DEFAULT_CLIENT_ID}". ` +
        'Set NEXT_PUBLIC_CLIENT_ID in your .env.local for local development (e.g. client-grandbet).'
    )
  }

  const resolvedId = (clientId ?? DEFAULT_CLIENT_ID) as ClientId
  const loader = CLIENT_CONFIGS[resolvedId]

  if (!loader) {
    throw new Error(
      `[shell] Unknown client ID: "${resolvedId}". ` +
        `Valid values: ${Object.keys(CLIENT_CONFIGS).join(', ')}`
    )
  }

  const raw = await loader()

  const result = ClientConfigSchema.safeParse(raw)

  if (!result.success) {
    throw new Error(
      `[shell] Invalid config for client "${resolvedId}":\n` +
        result.error.issues.map(i => `  ${i.path.join('.')}: ${i.message}`).join('\n')
    )
  }

  return result.data
}
