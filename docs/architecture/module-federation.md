# Module Federation 2.0

## Por que MF 2.0 (e nao Webpack 5 MF ou nextjs-mf)

O OpenBet Core usa `@module-federation/enhanced` (MF 2.0), nao o plugin legado `ModuleFederationPlugin` do Webpack 5 nem o `nextjs-mf` da Zack Jackson.

**Por que nao o MF 1.0 (Webpack 5):**
O shell usa `@module-federation/enhanced/webpack` como host. Ao carregar um container MF 1.0, o runtime do host nao reconhece o formato do container e o `Promise` retornado pelo `import()` nunca resolve — hang silencioso, sem erro no console. Ambos os lados (shell e sportsbook) precisam usar o mesmo protocolo.

**Por que nao o `nextjs-mf`:**
O `nextjs-mf` foi desenhado para Next.js 12/13 com Pages Router. Com Next.js 16 e App Router, ele causa incompatibilidades com o pipeline de server components e gera remoteEntries que o MF 2.0 host nao consegue consumir.

**Por que MF 2.0:**
- Compativel com Next.js 16 App Router
- Suporta remotes dinamicos em runtime (para evolucao futura)
- Mesmo protocolo de container no host e no remote — sem surpresas
- Desenvolvido ativamente como sucessor oficial do MF 1.0

> **Nota importante sobre Next.js 16:** `@module-federation/enhanced` intercepta imports de React e os substitui por acessores do shared scope. Isso quebra a inicializacao do React pelo propio Next.js. Por isso, React NAO esta no `shared` scope em nenhum dos dois apps — cada um empacota seu propio React.

---

## Como shell e sportsbook se comunicam

```
┌─────────────────────────────────────────────┐
│              apps/shell (HOST)               │
│  next.config.ts                              │
│                                              │
│  ModuleFederationPlugin({                    │
│    name: 'shell',                            │
│    remotes: {                                │
│      sportsbook: 'sportsbook@<URL>'          │
│    },                                        │
│    shared: {}   ← React fora do shared       │
│  })                                          │
│                                              │
│  components/SportsbookRemote.tsx             │
│    import('sportsbook/SportsbookPage')  ──────────────────────────────┐
│    (interceptado pelo MF host runtime)        │                        │
└───────────────────────────────────────────────┘                        │
                                                                         │ HTTP GET
                                                                         │ remoteEntry.js
┌───────────────────────────────────────────────────────────────────────▼┐
│              apps/sportsbook (REMOTE)                                   │
│  public/remoteEntry.js  ← gerado por webpack.container.cjs             │
│                                                                         │
│  ModuleFederationPlugin({                                               │
│    name: 'sportsbook',                                                  │
│    filename: 'remoteEntry.js',                                          │
│    exposes: {                                                           │
│      './SportsbookPage': './app/sportsbook-page.tsx'                   │
│    },                                                                   │
│    shared: {}                                                           │
│  })                                                                     │
└─────────────────────────────────────────────────────────────────────────┘
```

**Fluxo em runtime:**

1. Shell renderiza no servidor. `SportsbookRemote.tsx` usa `next/dynamic` com `ssr: false`
2. No cliente, o MF host runtime faz GET em `<remoteEntry-URL>` e carrega o container
3. O container inicializa e registra o modulo `./SportsbookPage`
4. O host resolve `import('sportsbook/SportsbookPage')` e renderiza o componente

---

## Por que o remote nao sabe que esta num shell

Esta e a elegancia central do design: o `SportsbookPage` nao importa nada do shell. Nao recebe props de tema. Nao usa Context do shell.

Ele simplesmente usa CSS Custom Properties:

```tsx
// apps/sportsbook/app/sportsbook-page.tsx
<h2 style={{ color: 'var(--color-text)', fontFamily: 'var(--font-family)' }}>
  Destaques
</h2>
```

Quando o shell carrega o remote no mesmo documento, as CSS vars injetadas pelo `ThemeEngine.apply()` no `:root` do shell ficam disponiveis para qualquer elemento no DOM — incluindo os componentes do remote — via CSS cascade.

**Consequencias:**
- Trocar o operador no shell (via `ThemeToggle`) muda a aparencia do remote instantaneamente
- O sportsbook pode ser acessado standalone (em localhost:3001) com qualquer tema que o dev injetar manualmente
- Nao ha acoplamento de API entre shell e remote alem do contrato MF (`./SportsbookPage`)

---

## Como as URLs dos remotes sao resolvidas

A resolucao de URLs usa `NEXT_PUBLIC_SPORTSBOOK_REMOTE` (override explicito) ou `NODE_ENV` como fallback em `apps/shell/lib/remote-registry.ts`:

```typescript
// apps/shell/lib/remote-registry.ts
const remoteUrl =
  process.env.NEXT_PUBLIC_SPORTSBOOK_REMOTE ??
  (process.env.NODE_ENV === 'production'
    ? 'https://openbet-core-sportsbook.vercel.app/remoteEntry.js'
    : 'http://localhost:3001/remoteEntry.js')

const REMOTES = {
  sportsbook: `sportsbook@${remoteUrl}`,
}

export function getRemotes(): Record<string, string> {
  return REMOTES
}
```

E passado ao plugin em `apps/shell/next.config.ts`:

```typescript
// apps/shell/next.config.ts
config.plugins.push(
  new ModuleFederationPlugin({
    name: 'shell',
    remotes: getRemotes(),
    shared: {},
  }),
)
```

**Por que resolve em build time e nao em runtime:**

`next.config.ts` roda em build time, nao por request. O `ClientConfig` (que existe por request, no servidor) nao pode alimentar o mapa estatico de remotes do webpack. A URL de producao do sportsbook e uma constante estavel — nao um hardcode arbitrario, mas um ponto de entrada canonico do deploy.

**`NEXT_PUBLIC_SPORTSBOOK_REMOTE`:** Permite apontar o shell para qualquer instancia do sportsbook sem rebuild. Util para staging, testes de versao e desenvolvimento local com URL nao padrao.

Para evolucao futura com URLs verdadeiramente dinamicas por operador, a abordagem seria usar `loadRemote()` do MF 2.0 em runtime, lendo a URL do `ClientConfig`.

---

## O webpack.container.cjs — por que existe e como funciona

> Referencia tecnica: [ADR-005](./adr/ADR-005-standalone-mf-container.md)

O Next.js gera chunks webpack que dependem do runtime do propio app para serem inicializados. Quando o shell tenta carregar o `remoteEntry.js` gerado pelo Next.js do sportsbook, acontece o seguinte:

```
Shell carrega remoteEntry.js gerado pelo Next.js
    → chunk tenta dar push em self["webpackChunksportsbook"]
    → runtime do sportsbook nao existe no contexto do shell
    → container nunca inicializa
    → import('sportsbook/SportsbookPage') nunca resolve
    → tela em branco, sem erro
```

O `webpack.container.cjs` resolve isso produzindo um container MF proprio e autonomo:

```javascript
// apps/sportsbook/webpack.container.cjs (simplificado)
const { ModuleFederationPlugin } = require('@module-federation/enhanced/webpack')

module.exports = {
  entry: {},                          // sem entry — MF injeta o remoteEntry como entry
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: 'https://openbet-core-sportsbook.vercel.app/',
  },
  resolve: {
    alias: {
      'react': path.resolve(__dirname, 'node_modules/react'),  // pina React 19
      '@openbet/ui': path.resolve(__dirname, '../../packages/ui/src'),
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'sportsbook',
      filename: 'remoteEntry.js',
      exposes: { './SportsbookPage': './app/sportsbook-page.tsx' },
      shared: {},
    }),
  ],
}
```

**O que o build gera:** `apps/sportsbook/public/remoteEntry.js` — um bundle com o runtime webpack e o container MF embutidos, sem depender do runtime do Next.js.

**Como e servido:** O arquivo esta em `public/`, que o Next.js serve estaticamente. Logo, `https://openbet-core-sportsbook.vercel.app/remoteEntry.js` aponta diretamente para ele.

**Scripts disponíveis:**

```bash
# Sportsbook — desenvolvimento
pnpm --filter=sportsbook dev               # Next.js em localhost:3001 (Turbopack, HMR rapido)
pnpm --filter=sportsbook dev:container     # webpack --watch gerando remoteEntry.js em localhost

# Fluxo recomendado para desenvolvimento local:
# 1. pnpm --filter=sportsbook build:container:dev  (gera remoteEntry.js com publicPath localhost)
# 2. pnpm --filter=sportsbook dev -p 3001          (sobe o Next.js do sportsbook)
# 3. pnpm --filter=shell dev --webpack              (sobe o shell no modo webpack, necessario para MF)

# Sportsbook — producao
pnpm --filter=sportsbook build             # Next.js build
pnpm --filter=sportsbook build:container   # gera public/remoteEntry.js (publicPath Vercel)
pnpm --filter=sportsbook build:container:dev  # gera public/remoteEntry.js (publicPath localhost)
```

---

## Como fazer deploy de um novo remote

Um "remote" e qualquer app que exponha modulos via Module Federation. Para adicionar um novo remote (ex: `casino`):

**1. Crie o app:**
```bash
mkdir apps/casino
cd apps/casino
# Configure Next.js, crie webpack.container.cjs seguindo o padrao do sportsbook
```

**2. Exponha os modulos no `webpack.container.cjs`:**
```javascript
exposes: {
  './CasinoPage': './app/casino-page.tsx',
  './CasinoWidget': './app/casino-widget.tsx',
}
```

**3. Configure o deploy na Vercel (`vercel.json`):**
```json
{
  "framework": "nextjs",
  "buildCommand": "cd ../.. && pnpm --filter=@openbet/config-schema build && pnpm --filter=@openbet/theme-engine build && pnpm --filter=casino build && cd apps/casino && node webpack.container.cjs"
}
```

**4. Registre no `remote-registry.ts` do shell:**
```typescript
const REMOTES = {
  sportsbook: isProd ? 'sportsbook@https://...' : 'sportsbook@http://localhost:3001/remoteEntry.js',
  casino:     isProd ? 'casino@https://...'     : 'casino@http://localhost:3002/remoteEntry.js',
}
```

**5. Adicione o stub server-side no shell (`next.config.ts`):**
```typescript
if (isServer) {
  config.resolve.alias = {
    'sportsbook/SportsbookPage': path.resolve(__dirname, 'lib/remote-stubs/sportsbook-SportsbookPage.tsx'),
    'casino/CasinoPage':         path.resolve(__dirname, 'lib/remote-stubs/casino-CasinoPage.tsx'),
  }
}
```

**6. Adicione a URL no `ClientConfigSchema`** (campo `remotes`) e nos JSONs dos clientes que ativam o casino.

**7. Deploy:** Deploy o casino primeiro (o shell precisa do `remoteEntry.js` disponivel), depois o shell.

---

## Comunicacao shell↔remote via Custom Events

React Context nao cruza boundaries de Module Federation — cada app tem seu proprio React tree. Quando o sportsbook precisa notificar o shell (ex: usuario clicou em uma odd), a comunicacao e feita via Custom Events do DOM.

```
apps/sportsbook (remote)               apps/shell (host)
─────────────────────────              ─────────────────────────
OddsButton onClick                     BetSlipContext
  dispatchBetAdd(bet)    ──────────►   onBetAdd(handler)
  dispatchBetRemove(bet) ──────────►   onBetRemove(handler)
```

**Por que Custom Events:**

| Alternativa | Problema |
|---|---|
| React Context compartilhado | Nao cruza boundary de MF — cada app tem seu proprio tree React |
| Props diretas shell→remote | Cria acoplamento — o remote precisa saber da API do shell |
| Estado global (Redux/Zustand) | Requer shared scope — incompativel com `shared: {}` |
| postMessage/iframe | Sportsbook nao roda em iframe — mesma janela, mesmo document |
| Custom Events DOM | Nativo, sem dependencias extras, funciona no mesmo document |

**Implementacao:** Os helpers estao em `packages/ui/src/events/bet-events.ts`, importados pelo sportsbook para despachar e pelo shell para escutar. O `BetSlipContext` em `apps/shell/lib/bet-slip-context.tsx` registra os listeners em `useEffect` e acumula as apostas no state local.

**Referencia tecnica:** [ADR-006](./adr/ADR-006-custom-events-communication.md)

---

## Server-side stubs

**Localização:** `apps/shell/lib/remote-stubs/`

Next.js compila dois bundles separados para cada pagina: um bundle de servidor (Node.js) e um bundle de cliente (navegador). O Module Federation e uma tecnologia de runtime do navegador — os remotes so podem ser carregados no cliente, pois dependem de `fetch` e da inicializacao do runtime webpack no DOM.

O componente `SportsbookRemote.tsx` usa `next/dynamic` com `ssr: false` para garantir que o remote nunca seja renderizado no servidor:

```tsx
const SportsbookPage = dynamic(() => import('sportsbook/SportsbookPage'), { ssr: false })
```

No entanto, isso nao impede que o webpack compile o modulo no bundle de servidor. Mesmo com `ssr: false`, o grafo de modulos do lado do servidor tenta resolver `'sportsbook/SportsbookPage'` estaticamente. Sem um arquivo que satisfaca esse import, o build do servidor falha:

```
Module not found: Can't resolve 'sportsbook/SportsbookPage'
```

A solucao e um **stub**: um arquivo TypeScript minimo que exporta um componente React que retorna `null`. O stub satisfaz o resolver do webpack no contexto do servidor sem executar nenhum codigo de MF.

**Arquivo do stub:**

```
apps/shell/lib/remote-stubs/sportsbook-SportsbookPage.tsx
```

O stub e mapeado via `webpack.resolve.alias` no branch `isServer` do `next.config.ts`:

```typescript
if (isServer) {
  config.resolve.alias = {
    'sportsbook/SportsbookPage': path.resolve(
      __dirname,
      'lib/remote-stubs/sportsbook-SportsbookPage.tsx',
    ),
  }
  return config
}
```

O alias so e ativado no contexto de compilacao do servidor. No cliente, o MF host runtime intercepta o import e o resolve normalmente a partir do `remoteEntry.js`.

**Para adicionar um novo remote:** Crie um stub em `lib/remote-stubs/casino-CasinoPage.tsx` (exportando `null`) e adicione a entrada correspondente no mapa de aliases dentro do bloco `isServer`.

---

## TypeScript declarations para modulos federados

**Arquivo:** `apps/shell/types/remote.d.ts`

TypeScript nao consegue resolver `'sportsbook/SportsbookPage'` — nao e um modulo no disco nem um pacote em `node_modules`. E um import dinamico de MF que so existe em runtime. Sem uma declaracao de tipo, o TypeScript lanca um erro de compilacao:

```
Cannot find module 'sportsbook/SportsbookPage' or its corresponding type declarations.
```

O arquivo `remote.d.ts` resolve isso com declaracoes de modulo ambient:

```typescript
// apps/shell/types/remote.d.ts
import type React from 'react'

declare module 'sportsbook/SportsbookPage' {
  const SportsbookPage: React.ComponentType
  export default SportsbookPage
}
```

Essa declaracao diz ao TypeScript: "o modulo `'sportsbook/SportsbookPage'` existe e exporta um componente React como default". O TypeScript aceita o import sem precisar de um arquivo real.

**Tipos gerados pelo plugin MF:**

O `ModuleFederationPlugin` do MF 2.0 pode gerar automaticamente tipos para os remotes em `apps/shell/@mf-types/sportsbook/`. Esses tipos sao mais precisos (refletem os tipos reais exportados pelo sportsbook). A declaracao em `remote.d.ts` serve como fallback ou complemento quando a geracao automatica nao esta disponivel.

**Como adicionar tipos para um novo remote:**

Adicione um novo bloco `declare module` no mesmo arquivo `remote.d.ts`:

```typescript
declare module 'casino/CasinoPage' {
  const CasinoPage: React.ComponentType
  export default CasinoPage
}

declare module 'casino/CasinoWidget' {
  interface CasinoWidgetProps {
    gameId: string
  }
  const CasinoWidget: React.ComponentType<CasinoWidgetProps>
  export default CasinoWidget
}
```

Mantenha `remote.d.ts` em sincronia com os modulos listados em `exposes` no `webpack.container.cjs` de cada remote.

---

## Por que React nao esta no shared scope

Em projetos MF tradicionais, React e compartilhado entre host e remotes para evitar duplicacao:

```javascript
// padrao MF classico (NAO usado aqui)
shared: {
  react: { singleton: true, requiredVersion: '^18.0.0' },
  'react-dom': { singleton: true, requiredVersion: '^18.0.0' },
}
```

No contexto do Next.js 16, isso causa um problema critico. O `@module-federation/enhanced` intercepta os imports de `react` e `react-dom` e os substitui por acessores do shared scope MF. Quando o Next.js tenta inicializar seu propio React (que ele faz de forma especial, com hooks internos), encontra o acessor MF no lugar da instancia real — a inicializacao falha silenciosamente ou com erros de hook invalido.

**A solucao adotada:** `shared: {}` em ambos os lados. Cada app empacota seu propio React. Custo: duplicacao de ~50KB no bundle do remote. Beneficio: inicializacao correta, sem erros de hook, sem conflitos.

O `webpack.container.cjs` reforca isso com alias explicito:
```javascript
resolve: {
  alias: {
    'react': path.resolve(__dirname, 'node_modules/react'),      // React 19 proprio
    'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
  }
}
```
