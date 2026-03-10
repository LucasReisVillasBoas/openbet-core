import type { z } from 'zod'
import type {
  ClientConfigSchema,
  ThemeColorsSchema,
  TypographySchema,
  ThemeSchema,
  LayoutSchema,
  FeaturesSchema,
  BrandSchema,
  RegionalSchema,
} from './schema.js'

/** Full client configuration object. Always produced by ClientConfigSchema.parse(). */
export type ClientConfig = z.infer<typeof ClientConfigSchema>

/** 14 semantic color tokens for a client's visual identity */
export type ThemeColors = z.infer<typeof ThemeColorsSchema>

/** Typography configuration (font families and base scale) */
export type Typography = z.infer<typeof TypographySchema>

/** Combined theme configuration (colors + typography) */
export type Theme = z.infer<typeof ThemeSchema>

/** Layout dimension and shape configuration */
export type Layout = z.infer<typeof LayoutSchema>

/** Feature flags for enabling/disabling platform capabilities */
export type Features = z.infer<typeof FeaturesSchema>

/** Operator brand identity configuration */
export type Brand = z.infer<typeof BrandSchema>

/** Regional/locale configuration */
export type Regional = z.infer<typeof RegionalSchema>

/** Module Federation remote entry URLs — keyed by remote name */
export type Remotes = ClientConfig['remotes']
