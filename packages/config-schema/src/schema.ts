import { z } from 'zod'

// ---------------------------------------------------------------------------
// Primitives
// ---------------------------------------------------------------------------

/** Validates a 6-digit hex color string: #RRGGBB */
export const ColorSchema = z
  .string()
  .regex(/^#[0-9A-Fa-f]{6}$/, 'Must be a valid hex color (#RRGGBB)')

// ---------------------------------------------------------------------------
// Theme
// ---------------------------------------------------------------------------

/**
 * 14 semantic color tokens that define a client's visual identity.
 * These map 1:1 to CSS Custom Properties injected by theme-engine.
 */
export const ThemeColorsSchema = z.object({
  /** Primary brand color — buttons, links, active states */
  primary: ColorSchema,
  /** Primary color in hover/focus states */
  primaryHover: ColorSchema,
  /** Secondary brand color — accents, badges */
  secondary: ColorSchema,
  /** Page background */
  background: ColorSchema,
  /** Card and panel background */
  backgroundCard: ColorSchema,
  /** Surface color for overlays, modals, dropdowns */
  surface: ColorSchema,
  /** Default body text color */
  text: ColorSchema,
  /** Muted/secondary text — timestamps, labels */
  textMuted: ColorSchema,
  /** Default border color */
  border: ColorSchema,
  /** Success state — won bets, confirmations */
  success: ColorSchema,
  /** Error state — failed actions, validation */
  error: ColorSchema,
  /** Warning state — alerts, suspended markets */
  warning: ColorSchema,
  /** Odds increase indicator */
  oddsUp: ColorSchema,
  /** Odds decrease indicator */
  oddsDown: ColorSchema,
})

export const TypographySchema = z.object({
  /** Primary font family stack (CSS font-family value) */
  fontFamily: z
    .string()
    .default('Inter, system-ui, sans-serif')
    .describe('Primary font family stack'),
  /** Monospace font family for odds, counters and numeric displays */
  fontFamilyMono: z
    .string()
    .default('JetBrains Mono, ui-monospace, monospace')
    .describe('Monospace font family for numbers/odds'),
  /** Base font size in px — all rem values scale from this */
  scaleBase: z
    .number()
    .min(12)
    .max(20)
    .default(16)
    .describe('Base font size in px'),
})

export const ThemeSchema = z.object({
  colors: ThemeColorsSchema,
  typography: TypographySchema,
})

// ---------------------------------------------------------------------------
// Layout
// ---------------------------------------------------------------------------

export const LayoutSchema = z.object({
  /** Left navigation sidebar width in px */
  sidebarWidth: z.number().min(200).max(400).default(280),
  /** Top header/navbar height in px */
  headerHeight: z.number().min(48).max(120).default(64),
  /** Bet slip panel width in px */
  betSlipWidth: z.number().min(280).max(480).default(360),
  /** Global border-radius scale applied across all components */
  borderRadius: z.enum(['none', 'sm', 'md', 'lg']).default('md'),
  /** Horizontal position of the navigation sidebar */
  sidebarPosition: z.enum(['left', 'right', 'hidden']).default('left'),
  /** Sidebar display and interaction behavior */
  sidebarBehavior: z.enum(['fixed', 'collapsible', 'hover']).default('fixed'),
  /** Header/navbar visual variant */
  headerVariant: z.enum(['minimal', 'full', 'floating']).default('full'),
  /** Footer visual variant */
  footerVariant: z.enum(['simple', 'expanded', 'hidden']).default('expanded'),
  /** Bet slip panel position and interaction mode */
  betslipPosition: z.enum(['sidebar-right', 'bottom-drawer', 'floating']).default('sidebar-right'),
  /** Mobile navigation bar position */
  mobileNav: z.enum(['bottom', 'top', 'drawer']).default('bottom'),
})

// ---------------------------------------------------------------------------
// Features
// ---------------------------------------------------------------------------

/**
 * Feature flags with safe defaults.
 * All features default to the most conservative option (usually false or
 * the simplest mode) to avoid enabling unfinished features for new clients.
 */
export const FeaturesSchema = z.object({
  /** Enable live video streaming of events */
  liveStreaming: z.boolean().default(false),
  /** Enable cash-out option for active bets */
  cashOut: z.boolean().default(true),
  /** Enable bet builder for custom same-game combinations */
  betBuilder: z.boolean().default(false),
  /** Enable statistics panel inside event pages */
  statistics: z.boolean().default(true),
  /** Enable UI language selector and i18n support */
  multiLanguage: z.boolean().default(false),
  /** Enable dark/light mode toggle in the UI */
  darkMode: z.boolean().default(true),
  /** Enable browser push notifications */
  pushNotifications: z.boolean().default(false),
  /** Enable global search across events, leagues and teams */
  search: z.boolean().default(true),
  /** Enable favourites bookmarking for events and leagues */
  favorites: z.boolean().default(true),
  /** Enable promotions and bonuses section */
  promotions: z.boolean().default(true),
  /** Enable responsible gambling tools (deposit limits, self-exclusion) */
  responsibleGambling: z.boolean().default(true),
  /** Enable virtual sports section */
  virtualSports: z.boolean().default(false),
  /** Enable sportsbook module */
  sportsbook: z.boolean().default(true),
  /** Enable live in-play betting */
  liveBetting: z.boolean().default(false),
  /** Enable casino games section */
  casino: z.boolean().default(false),
  /** Enable live casino with real dealers */
  liveCasino: z.boolean().default(false),
  /** Enable esports betting markets */
  esports: z.boolean().default(false),
  /** Enable affiliate partner program */
  affiliates: z.boolean().default(false),
  /** Enable VIP rewards and loyalty program */
  vipProgram: z.boolean().default(false),
  /** Enable social login providers (Google, Apple, etc.) */
  socialLogin: z.boolean().default(false),
})

// ---------------------------------------------------------------------------
// Brand
// ---------------------------------------------------------------------------

export const BrandSchema = z.object({
  /** Unique client identifier — used for analytics, logging and multi-tenant routing */
  id: z.string().min(1).describe('Unique client identifier (e.g. "client-alpha")'),
  /** Operator display name shown in the UI */
  name: z.string().min(1).describe('Operator display name'),
  /** Short marketing tagline shown in hero areas and metadata */
  tagline: z.string().optional(),
  /**
   * URL-safe slug: lowercase alphanumeric + hyphens.
   * Used as a prefix for CSS scoping and analytics events.
   */
  slug: z
    .string()
    .regex(/^[a-z0-9-]+$/, 'Slug must be lowercase alphanumeric with hyphens'),
  /** Absolute URL of the operator logo (SVG or PNG recommended) */
  logoUrl: z.string().url(),
  /** Absolute URL of the favicon */
  faviconUrl: z.string().url().optional(),
  /** Customer support email address */
  supportEmail: z.string().email().optional(),
})

// ---------------------------------------------------------------------------
// Regional
// ---------------------------------------------------------------------------

export const RegionalSchema = z.object({
  /** Default locale code in BCP 47 format (e.g. "en-GB", "pt-BR") */
  defaultLocale: z.string().default('en-GB'),
  /** All locale codes supported by this operator */
  supportedLocales: z.array(z.string()).min(1).default(['en-GB']),
  /** Default ISO 4217 currency code (e.g. "GBP", "EUR", "BRL") */
  defaultCurrency: z.string().length(3).default('GBP'),
  /** Default odds display format */
  defaultOddsFormat: z
    .enum(['decimal', 'fractional', 'american', 'hongkong'])
    .default('decimal'),
  /** Default IANA timezone (e.g. "Europe/London", "America/Sao_Paulo") */
  timezone: z.string().default('UTC'),
  /** Date display format using Unicode CLDR tokens (e.g. "dd/MM/yyyy", "MM/dd/yyyy") */
  dateFormat: z.string().default('dd/MM/yyyy'),
})

// ---------------------------------------------------------------------------
// Root schema
// ---------------------------------------------------------------------------

/**
 * Root schema for all client configuration.
 *
 * This is the single source of truth for everything a betting operator
 * can configure. Every field here has a corresponding effect in the
 * platform — visual (theme), structural (layout), behavioral (features),
 * or infrastructural (remotes).
 *
 * IMPORTANT: Never consume a ClientConfig object without first parsing it
 * through this schema. Use validateClientConfig() from index.ts.
 */
export const ClientConfigSchema = z.object({
  brand: BrandSchema,
  theme: ThemeSchema,
  layout: LayoutSchema,
  features: FeaturesSchema,
  regional: RegionalSchema,
  /**
   * Module Federation remote entry URLs keyed by remote name.
   * All values must be valid URLs — never hardcode these in app code.
   * Example: { "sportsbook": "https://cdn.alpha.bet/sportsbook/mf.js" }
   */
  remotes: z
    .record(z.string(), z.string().url())
    .default({})
    .describe('MF remote entry URLs keyed by remote name'),
})
