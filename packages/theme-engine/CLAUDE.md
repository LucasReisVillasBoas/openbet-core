# @openbet/theme-engine

## Propósito
Consumir ClientConfig e aplicar identidade visual completa
em runtime via CSS Custom Properties. Trocar de tema = trocar config.

## Exports
- ThemeEngine → classe com métodos apply(), getConfig(), reset()
- themeEngine → instância singleton pronta para uso
- buildCSSVars(config) → função pura que converte config em CSS vars

## Regras deste pacote
- Dependência permitida: APENAS @openbet/config-schema
- Proibido: React, Tailwind, CSS classes, qualquer framework
- Proibido: gerar CSS classes — APENAS CSS Custom Properties no :root
- ThemeEngine deve ser agnóstico de framework

## CSS vars geradas
- --color-primary, --color-primary-hover, --color-secondary
- --color-background, --color-background-card, --color-surface
- --color-text, --color-text-muted, --color-border
- --color-success, --color-error, --color-warning
- --color-odds-up, --color-odds-down
- --font-family, --font-family-mono, --font-size-base
- --radius
- --brand-name

## Como usar
import { themeEngine } from '@openbet/theme-engine'
import grandbetConfig from '../../clients/grandbet.config.json'
themeEngine.apply(grandbetConfig) // injeta todas as CSS vars no :root

## Comportamento do apply()
1. Converte config em CSS vars via buildCSSVars()
2. Injeta cada var via element.style.setProperty()
3. Seta data-theme="dark" ou "light" no element
4. Seta data-client com o brand.slug do cliente
5. Loga no console qual tema foi aplicado
