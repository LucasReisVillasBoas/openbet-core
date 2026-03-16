# ADR-005: Standalone webpack container for sportsbook remote

**Status:** Accepted
**Data:** 2025-03

---

## Contexto

O sportsbook usa Next.js 16 com App Router. O `@module-federation/nextjs-mf` não suporta App Router. Quando o `ModuleFederationPlugin` é adicionado ao `next.config.ts` do sportsbook, o runtime do App Router conflita com a inicialização do container MF, causando RUNTIME-006 (`loadShareSync`) e erros de `Invalid hook call` por instâncias duplicadas de React.

Adicionalmente, o Next.js gera chunks webpack que dependem do runtime webpack do próprio app. Quando o shell carrega um `remoteEntry.js` gerado pelo Next.js, o chunk faz push para `self["webpackChunksportsbook"]` — mas o runtime do sportsbook não existe no contexto do shell, fazendo com que o container nunca inicialize.

## Decisão

Compilar o container MF separadamente usando um webpack config standalone (`webpack.container.cjs`) que roda **após** o build do Next.js. Isso produz um container MF 2.0 apropriado (`remoteEntry.js`) que:

- Usa `@module-federation/enhanced/webpack` (mesmo que o shell)
- Inclui o bootstrap do runtime webpack inline (sem dependência de runtime externo)
- Não tem dependência de internals do Next.js
- Define `publicPath` para a URL de produção na Vercel
- É commitado em `public/` e servido como asset estático

O `next.config.ts` do sportsbook **não tem** `ModuleFederationPlugin` — é um app Next.js padrão. Somente o `webpack.container.cjs` produz o artefato de federation.

### Configuração de shared modules

Ambos shell e container usam `shared: {}` — sem coordenação de React pelo MF. Cada bundle carrega seu próprio React:

- **Shell**: Next.js inclui React internamente
- **Container**: React 19 empacotado pelo `webpack.container.cjs`, pinado via `resolve.alias`

Essa decisão elimina RUNTIME-006 (sem chamada `loadShareSync`) e evita conflito com o runtime do Next.js.

**Trade-off**: componentes do sportsbook remote não podem consumir React Context do shell. A comunicação entre shell e remote usa Custom Events (ver ADR-006).

## Consequências

### Positivas
- Elimina RUNTIME-006 e erros de React duplicado
- Shell e sportsbook usam containers MF 2.0 compatíveis
- O sportsbook pode ser desenvolvido independentemente como app Next.js padrão
- `remoteEntry.js` é um artefato estável e versionado

### Negativas
- `remoteEntry.js` precisa ser reconstruído manualmente após mudanças no sportsbook (`node webpack.container.cjs`)
- Dois passos de build: `next build` + `node webpack.container.cjs`
- `publicPath` é hardcoded para a URL de produção — requer `build:container:dev` para desenvolvimento local
- Componentes do sportsbook não podem consumir Context do shell

## Alternativas consideradas

- **`@module-federation/nextjs-mf`**: rejeitado — não suporta App Router, deprecado em 2025
- **Migrar sportsbook para React + webpack puro**: viável mas adiciona overhead de manutenção sem benefício significativo para o escopo do projeto
- **Pages Router no sportsbook**: viável mas contradiz a decisão arquitetural de usar App Router em todo o projeto
- **`shared: { react: { eager: true } }` no shell + `import: false` no container**: testado e revertido — `@module-federation/enhanced` intercepta imports do React e substitui por accessors do shared scope, quebrando a inicialização do React pelo Next.js
