// Schemas (Zod objects — needed for runtime validation)
export {
  ClientConfigSchema,
  ThemeColorsSchema,
  TypographySchema,
  ThemeSchema,
  LayoutSchema,
  FeaturesSchema,
  BrandSchema,
  RegionalSchema,
  ColorSchema,
} from './schema.js'

// TypeScript types (compile-time only)
export type {
  ClientConfig,
  ThemeColors,
  Typography,
  Theme,
  Layout,
  Features,
  Brand,
  Regional,
  Remotes,
} from './types.js'

// ---------------------------------------------------------------------------
// Validation helpers
// ---------------------------------------------------------------------------

import { ClientConfigSchema } from './schema.js'
import type { ClientConfig } from './types.js'
import type { ZodError } from 'zod'

/**
 * Validates and parses an unknown value as ClientConfig.
 * Throws a ZodError with a detailed message if validation fails.
 *
 * Use this at system boundaries (file read, API response, env var).
 *
 * @example
 * const config = validateClientConfig(JSON.parse(rawJson))
 */
export function validateClientConfig(raw: unknown): ClientConfig {
  return ClientConfigSchema.parse(raw)
}

/**
 * Safe variant of validateClientConfig — never throws.
 * Returns a discriminated union with success/error.
 *
 * @example
 * const result = safeValidateClientConfig(raw)
 * if (!result.success) {
 *   console.error(result.error.flatten())
 *   return
 * }
 * applyTheme(result.data)
 */
export function safeValidateClientConfig(
  raw: unknown,
): { success: true; data: ClientConfig } | { success: false; error: ZodError } {
  const result = ClientConfigSchema.safeParse(raw)
  if (result.success) {
    return { success: true, data: result.data }
  }
  return { success: false, error: result.error }
}
