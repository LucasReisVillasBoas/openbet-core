import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { safeValidateClientConfig } from '@openbet/config-schema'

const root = process.cwd()

function loadRaw(filename: string): unknown {
  return JSON.parse(readFileSync(resolve(root, 'clients', filename), 'utf-8'))
}

const entries = [
  { label: 'GrandBet', file: 'grandbet.config.json' },
  { label: 'EliteBet', file: 'elitebet.config.json' },
] as const

let failed = false

for (const { label, file } of entries) {
  const raw = loadRaw(file)
  const result = safeValidateClientConfig(raw)

  if (result.success) {
    const d = result.data
    console.log(`✓ ${label} — success: true`)
    console.log(`  id        : ${d.brand.id}`)
    console.log(`  primary   : ${d.theme.colors.primary}`)
    console.log(`  radius    : ${d.layout.borderRadius}`)
    console.log(`  locale    : ${d.regional.defaultLocale} / ${d.regional.defaultCurrency}`)
    console.log(`  darkMode  : ${d.features.darkMode}`)
    console.log(
      `  features  : sportsbook=${d.features.sportsbook} casino=${d.features.casino} esports=${d.features.esports}`,
    )
    console.log('')
  } else {
    failed = true
    console.error(`✗ ${label} — FAILED`)
    console.error(JSON.stringify(result.error.flatten(), null, 2))
    console.error('')
  }
}

if (failed) {
  console.error('✗ Validation failed — fix errors above before continuing.')
  process.exit(1)
} else {
  console.log('✓ All client configs valid.')
}
