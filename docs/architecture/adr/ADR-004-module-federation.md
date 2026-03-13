# ADR-004: Module Federation 2.0 como mecanismo de micro-frontends

**Status:** Aceito
**Data:** 2025

---

## Contexto

O OpenBet Core precisa que o shell carregue modulos do sportsbook em runtime, sem rebuildar o shell quando o sportsbook e atualizado. Os requisitos sao:

1. Deploy independente: sportsbook pode ser atualizado sem redeploy do shell
2. Versoes independentes: shell e sportsbook podem usar versoes diferentes de dependencias internas
3. Heranca de tema: sportsbook herda o tema do shell sem acoplamento de API
4. Compatibilidade com Next.js 16 App Router

---

## Decisao

### Q1: Qual biblioteca MF usar?

**`@module-federation/enhanced` (MF 2.0)** — nao o Webpack 5 `ModuleFederationPlugin` nem o `nextjs-mf`.

Motivo: o shell host usa MF 2.0 runtime. Um container MF 1.0 carregado por um host MF 2.0 causa hang silencioso — o `Promise` retornado pelo `import()` nunca resolve porque o runtime nao reconhece o formato do container. Ambos os lados precisam usar o mesmo protocolo.

### Q2: Como o shell identifica qual cliente carregar?

**`NEXT_PUBLIC_CLIENT_ID` como variavel de ambiente** — definida no `.env.local` para desenvolvimento, na Vercel para producao.

```typescript
// apps/shell/lib/client-config.ts
const clientId = process.env.NEXT_PUBLIC_CLIENT_ID
const resolvedId = (clientId ?? DEFAULT_CLIENT_ID) as ClientId
```

Sem infraestrutura de DNS, sem proxy, sem headers customizados. Ideal para demo e portfolio: basta mudar a variavel na Vercel e o deploy carrega o cliente correto.

Fallback em CI: se `NEXT_PUBLIC_CLIENT_ID` nao esta definido (build de CI sem cliente especifico), usa `client-grandbet` como default. O CI define explicitamente:

```yaml
# .github/workflows/ci.yml
- name: Set build environment
  run: echo "NEXT_PUBLIC_CLIENT_ID=client-grandbet" >> $GITHUB_ENV
```

### Q3: Como as URLs dos remotes sao definidas?

Via `NODE_ENV` em `remote-registry.ts` — resolvido em build time:

```typescript
// apps/shell/lib/remote-registry.ts
const isProd = process.env.NODE_ENV === 'production'

const REMOTES = {
  sportsbook: isProd
    ? 'sportsbook@https://openbet-core-sportsbook.vercel.app/remoteEntry.js'
    : 'sportsbook@http://localhost:3001/remoteEntry.js',
}
```

`next.config.ts` roda em build time — o `ClientConfig` (por request, server-only) nao pode alimentar o mapa estatico de remotes. A URL de producao e uma constante estavel, nao um hardcode arbitrario.

Para evolucao futura com URLs verdadeiramente por operador: usar `loadRemote()` do MF 2.0 em runtime, lendo `config.remotes.sportsbook`.

### Q4: Estrutura do shell aprovada com duas correcoes

**Correcao 1:** `lib/client-config.ts` e **server-only** — sem `'use client'`. Acessa `process.env` e faz `import()` dinamico de JSON. Nenhum componente cliente pode importar este modulo.

**Correcao 2:** Server-side stub para o remote. Como `next.config.ts` usa webpack alias no lado servidor para resolver `sportsbook/SportsbookPage` para um stub local — o `next/dynamic` com `ssr: false` garante que o componente nunca e renderizado no servidor, mas o alias e necessario para satisfazer a resolucao de modulos do webpack no build do servidor:

```typescript
// apps/shell/next.config.ts
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

**Correcao 3:** React fora do `shared` scope — ver secao abaixo.

---

## Por que React nao esta no shared scope

Com `@module-federation/enhanced`, colocar React no shared scope quebra o Next.js 16:

```typescript
// NAO feito
shared: {
  react: { singleton: true, requiredVersion: '^19.0.0' },
  'react-dom': { singleton: true, requiredVersion: '^19.0.0' },
}
```

O plugin intercepta os imports de `react` e os substitui por acessores do shared scope MF. Quando o Next.js tenta sua propria inicializacao do React (que envolve hooks internos e o fiber runtime), encontra o acessor no lugar da instancia — "invalid hook call" ou falha silenciosa.

**Solucao:** `shared: {}` em ambos os lados. Cada app empacota seu proprio React. Custo: ~50KB de duplicacao no bundle do remote. Beneficio: inicializacao correta e sem erros.

O `webpack.container.cjs` reforca com alias explicito para pinarem o React 19 do propio `node_modules`:

```javascript
resolve: {
  alias: {
    'react': path.resolve(__dirname, 'node_modules/react'),
    'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
  }
}
```

---

## Consequencias

**Positivas:**
- Sportsbook deployado independentemente — novo componente sem redeploy do shell
- Shell e sportsbook podem evoluir em ritmos diferentes
- CSS cascade garante heranca de tema sem acoplamento de API
- `remoteEntry.js` gerado pelo `webpack.container.cjs` e um artefato estatico servido pelo Next.js public folder

**Negativas / trade-offs:**
- React duplicado em cada bundle de remote (+~50KB por remote)
- `webpack.container.cjs` e um build extra — nao integrado ao pipeline `next build`
- URL de producao do sportsbook precisa estar disponivel antes do build do shell (chicken-and-egg resolvido fazendo deploy do sportsbook primeiro)
- Debugging de MF requer inspecao do network para verificar se `remoteEntry.js` foi carregado

---

## Alternativas consideradas

**`nextjs-mf` (zackjackson/module-federation):** Projetado para Next.js Pages Router. Com App Router e Next.js 16, causa incompatibilidades. Nao e mais mantido ativamente.

**iframes:** Isolamento perfeito, mas UX fragmentada. Comunicacao entre frames e complexa. Sem heranca de CSS.

**NPM packages por modulo:** Sportsbook publicado como pacote npm. Simple, mas elimina o beneficio de deploy independente — shell precisaria redeploy para cada versao nova do sportsbook.

**Single SPA:** Framework de orquestracao de micro-frontends. Mais maduro que MF para alguns casos, mas adiciona uma camada de abstarcao sem beneficio claro no contexto atual.
