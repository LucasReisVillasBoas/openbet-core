# Arquitetura do OpenBet Core

## Visao geral

O OpenBet Core e construido em camadas. Cada camada tem responsabilidade exclusiva e dependencias estritas — nenhuma camada acessa recursos de uma camada acima dela.

```
┌──────────────────────────────────────────────────────────────────┐
│                         CLIENTS LAYER                            │
│              clients/*.config.json (dados puros)                 │
│   grandbet.config.json          elitebet.config.json             │
└────────────────────────────┬─────────────────────────────────────┘
                             │ JSON bruto
                             ▼
┌──────────────────────────────────────────────────────────────────┐
│                       VALIDATION LAYER                           │
│              packages/config-schema (Zod)                        │
│   ClientConfigSchema.parse(raw) → ClientConfig                   │
│   Dependencia permitida: apenas zod                              │
└────────────────────────────┬─────────────────────────────────────┘
                             │ ClientConfig (validado)
                             ▼
┌──────────────────────────────────────────────────────────────────┐
│                         THEME LAYER                              │
│              packages/theme-engine                               │
│   ThemeEngine.apply(config)                                      │
│   buildCSSVars(config) → Record<string, string>                  │
│   Dependencia permitida: apenas @openbet/config-schema           │
└────────────────────────────┬─────────────────────────────────────┘
                             │ CSS Custom Properties
                             │ injetados em :root
                             ▼
┌──────────────────────────────────────────────────────────────────┐
│                       DESIGN SYSTEM LAYER                        │
│              packages/ui                                         │
│   MatchCard, OddsButton, BetSlip, LiveScoreboard                 │
│   Consome: var(--color-*), var(--font-*), var(--layout-*)        │
│   NUNCA valores literais de cor, fonte ou tamanho                │
└───────────────┬──────────────────────────┬───────────────────────┘
                │                          │
                ▼                          ▼
┌──────────────────────┐    ┌──────────────────────────────────────┐
│     apps/shell       │    │          apps/sportsbook             │
│  Next.js 16 Host MF  │◄───│  Next.js 16 Remote MF               │
│                      │ MF │  Expoe: ./SportsbookPage             │
│  getClientConfig()   │    │  Herda CSS vars via cascade          │
│  ThemeProvider       │    │  Build: webpack.container.cjs        │
│  ClientConfigProvider│    │  Output: public/remoteEntry.js       │
│  ThemeToggle         │    └──────────────────────────────────────┘
└──────────────────────┘
```

---

## Camadas em detalhe

### packages/config-schema

**Proposito:** Definir e validar o contrato de configuracao de operadores.

**O que faz:**
- Define o `ClientConfigSchema` com Zod — schema completo de tudo que um operador pode customizar
- Exporta tipos TypeScript derivados: `ClientConfig`, `ThemeColors`, `Features`, etc.
- Exporta utilitarios: `validateClientConfig()` (lanca erro) e `safeValidateClientConfig()` (retorna discriminated union)

**O que nao faz:**
- Acessa o DOM
- Importa React ou qualquer lib de UI
- Contem logica de aplicacao

**Dependencias permitidas:** apenas `zod`

**Por que este isolamento importa:** O schema e consumido pelo shell (Next.js), pelo sportsbook (Next.js), pelos scripts de validacao (Node.js puro) e potencialmente por ferramentas CLI. Qualquer dependencia de framework quebraria esse uso universal.

---

### packages/theme-engine

**Proposito:** Converter um `ClientConfig` validado em CSS Custom Properties no DOM.

**O que faz:**
- `buildCSSVars(config)` — funcao pura que converte config em `Record<string, string>`
- `ThemeEngine.apply(config)` — injeta as vars via `element.style.setProperty()`
- `ThemeEngine.reset()` — remove todas as vars aplicadas
- `themeEngine` — singleton pre-construido que targeta `document.documentElement`

**O que nao faz:**
- Gera classes CSS
- Cria tags `<style>`
- Importa React
- Toca o DOM na importacao (acesso e lazy — so em `apply()`)

**Dependencias permitidas:** apenas `@openbet/config-schema`

**Neutralidade de framework:** ThemeEngine funciona em React, Vue, Angular, Web Components, ou qualquer contexto com DOM. O shell usa o singleton `themeEngine`; tests usam instancias com jsdom como target.

---

### packages/ui

**Proposito:** Design System — componentes React que mudam visualmente ao trocar o tema.

**Regra fundamental:** Todo valor visual vem de CSS Custom Properties. `var(--color-primary)`, nao `#1A7A4A`. `var(--font-family)`, nao `'Inter, sans-serif'`. `var(--layout-border-radius)`, nao `8px`.

**Componentes:**

| Componente | Prioridade | Estados/Variantes |
|---|---|---|
| OddsButton | P0 | default, selected, up, down, suspended, locked |
| MatchCard | P0 | pre-match, live, featured |
| BetSlip | P0 | empty, single, multiple, odds-changed |
| LiveScoreboard | P1 | simula WebSocket com setInterval |
| ThemeShowcase | P1 | vitrine visual do theme-engine |

**Storybook:** Todo componente tem stories para todos os estados. Sem stories = componente incompleto.

---

### apps/shell

**Proposito:** Host do Module Federation — orquestra os remotes e aplica o tema.

**Responsabilidades:**
- Carregar e validar o `ClientConfig` no servidor (`lib/client-config.ts` — server-only)
- Resolver URLs dos remotes (`lib/remote-registry.ts`)
- Aplicar o tema no cliente (`components/ThemeProvider.tsx`)
- Prover o `ClientConfig` via Context (`lib/client-config-context.tsx`)
- Carregar o remote sportsbook via MF (`components/SportsbookRemote.tsx`)

**Arquivos criticos:**

```
apps/shell/
├── lib/
│   ├── client-config.ts          # SERVER-ONLY. Le NEXT_PUBLIC_CLIENT_ID,
│   │                             # importa JSON, valida com Zod
│   ├── client-config-context.tsx # 'use client'. Prover ClientConfig,
│   │                             # ThemeToggle, persistencia em localStorage
│   └── remote-registry.ts        # SERVER-ONLY. Resolve URLs por NODE_ENV
├── components/
│   ├── ThemeProvider.tsx          # 'use client'. Chama themeEngine.apply()
│   │                             # em useEffect
│   └── ThemeToggle.tsx           # 'use client'. Troca entre operadores
│                                  # em runtime sem reload
└── next.config.ts                # ModuleFederationPlugin (host)
```

**Fluxo no servidor (por request):**
1. `layout.tsx` chama `getClientConfig()` — server component
2. `getClientConfig()` le `NEXT_PUBLIC_CLIENT_ID`, importa o JSON correspondente, valida com Zod
3. `ClientConfig` validado e passado como prop para `ClientConfigProvider` e `ThemeProvider`

**Fluxo no cliente:**
1. `ThemeProvider` recebe `config` como prop do servidor
2. `useEffect(() => themeEngine.apply(config), [config])` injeta CSS vars no `:root`
3. `ThemeToggle` usa `useSetClient()` para trocar o operador sem reload de pagina

---

### apps/sportsbook

**Proposito:** Remote MF — expoe `SportsbookPage` para o shell consumir.

**Peculiaridade critica:** O Next.js nao gera um container MF valido diretamente. O `webpack.container.cjs` e um build Webpack standalone que:
- Usa `@module-federation/enhanced/webpack` (mesmo protocolo do shell)
- Gera `public/remoteEntry.js` com o runtime MF embutido
- Pina React ao `node_modules/react` do sportsbook para evitar duplicacao

**Heranca de tema:** `SportsbookPage` usa apenas `var(--color-*)`, `var(--font-family)`, etc. O shell injeta essas vars no `:root`. O remote as herda via CSS cascade — sem props, sem context, sem acoplamento. Trocar o operador no shell muda a aparencia do remote automaticamente.

---

### clients/

**Proposito:** JSONs de configuracao por operador. Dados puros, sem logica.

Cada arquivo e validado pelo `ClientConfigSchema` em tres momentos:
1. Em CI via `pnpm validate` (script `scripts/validate-configs.ts`)
2. Em runtime pelo shell ao iniciar
3. Em runtime pelo `ClientConfigProvider` ao restaurar do localStorage

---

## Fluxo de dados completo

```
clients/grandbet.config.json
    │
    │  JSON.parse (via import() dinamico)
    ▼
ClientConfigSchema.parse(raw)       ← Zod — lanca ZodError se invalido
    │
    │  ClientConfig (TypeScript)
    ▼
getClientConfig()                   ← apps/shell/lib/client-config.ts
    │                                  SERVER-ONLY
    │  ClientConfig
    ▼
RootLayout (Server Component)       ← apps/shell/app/layout.tsx
    │
    ├─► ClientConfigProvider (Client)  ← gerencia estado, localStorage
    │
    └─► ThemeProvider (Client)
            │
            │  useEffect
            ▼
        themeEngine.apply(config)   ← packages/theme-engine/src/engine.ts
            │
            │  buildCSSVars(config)
            ▼
        {                           ← packages/theme-engine/src/css-vars.ts
          '--color-primary': '#1A7A4A',
          '--font-family': 'Inter, system-ui, sans-serif',
          '--layout-border-radius': '8px',
          ...22 vars no total
        }
            │
            │  element.style.setProperty(prop, value)
            ▼
        document.documentElement    ← :root no DOM
            │
            │  CSS cascade
            ▼
        var(--color-primary)        ← consumido por qualquer componente,
                                       inclusive o sportsbook remote
```

---

## As 7 regras arquiteturais inviolaveis

1. **NUNCA hardcode cor em componente** — toda cor via CSS Custom Property (`var(--color-*)`)
2. **NUNCA importar de `apps/` dentro de `packages/`** — dependencias so fluem de packages para apps
3. **NUNCA usar ClientConfig sem validar com Zod primeiro** — use `validateClientConfig()` ou `ClientConfigSchema.safeParse()`
4. **URLs de remotes MF SEMPRE vêm de configuracao** — nunca hardcoded diretamente no codigo de negocio
5. **Todo componente React TEM stories para todos os estados** — sem excecoes
6. **`packages/config-schema`: dependencia permitida apenas `zod`** — nenhuma lib de UI ou framework
7. **`packages/theme-engine`: dependencia permitida apenas `@openbet/config-schema`** — sem React, sem CSS-in-JS

---

## Relacoes entre camadas

```
config-schema  ◄──  theme-engine  ◄──  ui  ◄──  shell
                                            ◄──  sportsbook
                                       ◄──  shell
                                       ◄──  sportsbook

clients/*.json  ──►  validados por config-schema
                ──►  carregados pelo shell
                ──►  validados em CI pelo scripts/validate-configs.ts
```

A direcao das setas indica dependencia: A ◄── B significa "B depende de A". Nenhuma dependencia circular existe. Nenhuma camada inferior conhece as camadas superiores.
