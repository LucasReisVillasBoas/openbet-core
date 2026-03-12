import { JSDOM } from 'jsdom'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { ThemeEngine } from '@openbet/theme-engine'
import { validateClientConfig } from '@openbet/config-schema'

const root = process.cwd()

function loadConfig(filename: string) {
  return validateClientConfig(
    JSON.parse(readFileSync(resolve(root, 'clients', filename), 'utf-8')),
  )
}

const alphaConfig = loadConfig('alpha.config.json')
const betaConfig = loadConfig('beta.config.json')

// Simulate DOM with jsdom
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>')
const el = dom.window.document.documentElement as unknown as HTMLElement
const engine = new ThemeEngine(el)

// ---------------------------------------------------------------------------
// Test helpers
// ---------------------------------------------------------------------------

let passed = 0
let failed = 0

function assert(description: string, actual: string, expected: string): void {
  if (actual === expected) {
    passed++
    process.stdout.write(`  ✓ ${description}\n`)
  } else {
    failed++
    process.stderr.write(`  ✗ ${description}\n`)
    process.stderr.write(`    expected : "${expected}"\n`)
    process.stderr.write(`    received : "${actual}"\n`)
  }
}

const getVar = (name: string) => el.style.getPropertyValue(name)
const getAttr = (name: string) => el.getAttribute(name) ?? ''

// ---------------------------------------------------------------------------
// apply(alpha)
// ---------------------------------------------------------------------------

console.log('\napply(alpha):')
engine.apply(alphaConfig)

assert('--color-primary === #1A7A4A', getVar('--color-primary'), '#1A7A4A')
assert('--color-background === #0F1923', getVar('--color-background'), '#0F1923')
assert('data-theme === dark', getAttr('data-theme'), 'dark')
assert('data-client === alphabet', getAttr('data-client'), 'alphabet')

// ---------------------------------------------------------------------------
// apply(beta)
// ---------------------------------------------------------------------------

console.log('\napply(beta):')
engine.apply(betaConfig)

assert('--color-primary === #4F46E5', getVar('--color-primary'), '#4F46E5')
assert('--color-background === #0D0F1A', getVar('--color-background'), '#0D0F1A')
assert('data-client === betnova', getAttr('data-client'), 'betnova')

// ---------------------------------------------------------------------------
// reset()
// ---------------------------------------------------------------------------

console.log('\nreset():')
engine.reset()

assert('--color-primary removed', getVar('--color-primary'), '')
assert('--color-background removed', getVar('--color-background'), '')
assert('data-theme removed', getAttr('data-theme'), '')
assert('data-client removed', getAttr('data-client'), '')

// ---------------------------------------------------------------------------
// Summary
// ---------------------------------------------------------------------------

console.log(`\n${passed} passed, ${failed} failed\n`)

if (failed > 0) {
  process.exit(1)
}
