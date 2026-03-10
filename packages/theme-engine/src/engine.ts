import type { ClientConfig } from '@openbet/config-schema'
import { buildCSSVars } from './css-vars.js'

/**
 * ThemeEngine — applies a validated ClientConfig to the DOM as CSS Custom Properties.
 *
 * Rules enforced by this class:
 * - Only sets CSS Custom Properties (style.setProperty). Never creates <style> tags or CSS classes.
 * - Never reads a ClientConfig that hasn't been validated by @openbet/config-schema.
 * - DOM access is lazy — the document is not touched until apply() is called.
 *
 * @example
 * // Using the pre-built singleton (recommended for apps)
 * import { themeEngine } from '@openbet/theme-engine'
 * themeEngine.apply(validatedConfig)
 *
 * @example
 * // Using a custom target element (e.g. for isolated iframes or tests)
 * const engine = new ThemeEngine(iframeDocument.documentElement)
 * engine.apply(config)
 */
export class ThemeEngine {
  private readonly _target: HTMLElement | null
  private _config: ClientConfig | null = null
  private _appliedVars: string[] = []

  /**
   * @param target - The element to receive the CSS Custom Properties.
   *   Defaults to document.documentElement (:root) if not provided.
   *   Providing a target is required in environments without a global document (e.g. SSR).
   */
  constructor(target?: HTMLElement) {
    this._target = target ?? null
  }

  // ---------------------------------------------------------------------------
  // Private helpers
  // ---------------------------------------------------------------------------

  private resolveTarget(): HTMLElement {
    if (this._target !== null) return this._target

    if (typeof document !== 'undefined') {
      return document.documentElement
    }

    throw new Error(
      '[ThemeEngine] No DOM target available. ' +
        'Pass an HTMLElement to the ThemeEngine constructor when running outside the browser.',
    )
  }

  // ---------------------------------------------------------------------------
  // Public API
  // ---------------------------------------------------------------------------

  /**
   * Applies all theme tokens from the config to the target element.
   *
   * - Sets each CSS Custom Property via style.setProperty (no class generation).
   * - Sets data-theme attribute ('dark' | 'light') based on features.darkMode.
   * - Sets data-client attribute to config.brand.slug for CSS scoping.
   * - Replaces any previously applied theme — safe to call multiple times.
   */
  apply(config: ClientConfig): void {
    const el = this.resolveTarget()
    const vars = buildCSSVars(config)

    // Apply all CSS Custom Properties
    for (const [property, value] of Object.entries(vars)) {
      el.style.setProperty(property, value)
    }

    // Track which vars this instance owns so reset() can clean up precisely
    this._appliedVars = Object.keys(vars)

    // Data attributes for CSS scoping and conditional styles
    el.setAttribute('data-theme', config.features.darkMode ? 'dark' : 'light')
    el.setAttribute('data-client', config.brand.slug)

    this._config = config

    console.log(
      `[ThemeEngine] Theme applied — client: "${config.brand.name}" (${config.brand.slug}) | ` +
        `mode: ${config.features.darkMode ? 'dark' : 'light'} | ` +
        `vars: ${this._appliedVars.length}`,
    )
  }

  /**
   * Returns the ClientConfig that was last applied, or null if apply()
   * has not been called yet.
   */
  getConfig(): ClientConfig | null {
    return this._config
  }

  /**
   * Removes all CSS Custom Properties that were applied by this instance
   * and clears the data-theme / data-client attributes.
   *
   * After reset(), the element returns to whatever styles were in place
   * before apply() was first called.
   */
  reset(): void {
    const el = this.resolveTarget()

    for (const property of this._appliedVars) {
      el.style.removeProperty(property)
    }

    el.removeAttribute('data-theme')
    el.removeAttribute('data-client')

    const previousClient = this._config?.brand.slug ?? 'unknown'
    this._appliedVars = []
    this._config = null

    console.log(`[ThemeEngine] Theme reset — removed vars for client "${previousClient}"`)
  }
}

/**
 * Pre-built singleton that targets document.documentElement (:root).
 * This is the instance that apps should use unless they need isolated targets.
 *
 * DOM access is deferred — importing this module has no side effects.
 * The document is only accessed when apply() or reset() is called.
 */
export const themeEngine = new ThemeEngine()
