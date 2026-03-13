# Decisoes de Arquitetura

Tres decisoes centrais moldaram o OpenBet Core. Documentadas aqui no formato de portfólio — o "por que" de cada decisao, os trade-offs avaliados e o que elas ensinaram.

---

## 1. CSS Custom Properties como unico mecanismo de tema

**O problema:** Numa plataforma white-label com Module Federation, o shell precisa aplicar a identidade visual de um operador a componentes que podem estar rodando em outros bundles, carregados em runtime. React Context nao cruza boundaries de MF. Props de tema criariam acoplamento em cada componente. CSS-in-JS dependeria de um runtime compartilhado.

**A decisao:** O `ThemeEngine` injeta 22 CSS Custom Properties em `document.documentElement` via `element.style.setProperty()`. Componentes consomem `var(--color-primary)`, nunca `#1A7A4A`. O remote MF herda as vars via CSS cascade — sem nenhum contrato de API alem do MF em si.

**O que foi avaliado:**

| Opcao | Problema |
|---|---|
| React Context | Nao cruza boundaries de Module Federation |
| Props de tema | 14 props de cor × todos os componentes = manutencao impossivel |
| CSS-in-JS | Runtime compartilhado, problemas com SSR e MF |
| CSS Modules com classes por tema | Classes precisariam ser geradas e injetadas — complexidade sem beneficio |

**O que aprendi:** CSS Custom Properties resolvem um problema que parece de React mas e fundamentalmente de escopo de documento. A cascade do CSS existe exatamente para propagar valores de elementos pai para filhos — e o que precisavamos. A solucao mais simples foi a nativa.

**Trade-offs aceitos:** SSR sem tema ate o hydration (flash potencial). Sem validacao TypeScript de CSS vars (nenhum compilador reclama se `var(--color-xxxxxx)` nao existe). A primeira e mitigada pela velocidade do hydration; a segunda, pela convencao e revisao de codigo.

**Referencia tecnica:** [ADR-003](./architecture/adr/ADR-003-css-vars.md) | [Implementacao](./architecture/theme-engine.md)

---

## 2. JSON + Zod como contrato de configuracao de operadores

**O problema:** Adicionar um novo operador a uma plataforma white-label geralmente significa criar uma branch, configurar feature flags em banco de dados, ou escrever codigo condicional. Cada uma dessas abordagens introduz complexidade que escala mal.

**A decisao:** Todo o que um operador pode customizar esta definido no `ClientConfigSchema` com Zod. Adicionar um operador = criar um arquivo `clients/nome.config.json`. O schema valida o JSON em runtime em toda fronteira do sistema: ao carregar no shell, ao restaurar do localStorage, em CI. Config invalida nunca chega a aplicacao.

```typescript
// O schema como contrato vivo
const ClientConfigSchema = z.object({
  brand:    BrandSchema,       // identidade: nome, slug, logo, email
  theme:    ThemeSchema,       // 14 cores + tipografia
  layout:   LayoutSchema,      // sidebar, header, bet slip, border-radius
  features: FeaturesSchema,    // 20 feature flags com defaults conservadores
  regional: RegionalSchema,    // locale, currency, timezone, odds format
  remotes:  z.record(z.string(), z.string().url()).default({}),
})
```

**O que foi avaliado:**

| Opcao | Problema |
|---|---|
| Feature flags em banco de dados | Requer infraestrutura extra, latencia, sincronizacao |
| Variaveis de ambiente por feature | 20 features × N operadores = N × 20 env vars sem estrutura |
| Branches por cliente | Divergencia inevitavel, bugfixes precisam ser backportados |
| GraphQL / API de configuracao | Overkill — a configuracao e estatica por deploy |

**O que aprendi:** Zod resolve dois problemas de uma vez: validacao em runtime e inferencia de tipos em compile time. O schema e a documentacao — qualquer desenvolvedor que quer saber o que um operador pode customizar la no schema. Nao ha documentacao desatualizada porque o schema e executado em producao.

**Trade-offs aceitos:** Mudancas de configuracao requerem um PR e redeploy (nao ha painel admin de feature flags). Para o modelo white-label onde cada operador tem um deploy proprio, isso e aceitavel — e ate desejavel, pois mudancas de config ficam no historico do git.

**Referencia tecnica:** [ADR-002](./architecture/adr/ADR-002-config-schema.md) | [Documentacao do pacote](./packages/config-schema.md)

---

## 3. Module Federation com CSS cascade para heranca de tema sem acoplamento

**O problema:** O sportsbook precisa ser deployado independentemente do shell. Mas ao ser carregado pelo shell, ele precisa exibir o tema do operador correto. Como fazer isso sem criar acoplamento entre shell e remote?

**A decisao:** O sportsbook e exposto como remote MF via `@module-federation/enhanced` (MF 2.0). O shell injeta as CSS vars no `:root` via `ThemeEngine`. O remote herda automaticamente via cascade — sem precisar saber que esta dentro de um shell, sem props, sem Context.

O `webpack.container.cjs` resolve o problema tecnico: o Next.js nao gera um container MF com runtime autonomo. O script usa webpack standalone para gerar `public/remoteEntry.js` com o runtime MF embutido, compativel com o protocolo do host.

React fica fora do `shared` scope em ambos os lados — uma decisao necessaria porque `@module-federation/enhanced` intercepta imports de React de forma que quebra a inicializacao do Next.js 16. Cada app empacota seu proprio React.

**O que foi avaliado:**

| Opcao | Problema |
|---|---|
| `nextjs-mf` | Incompativel com Next.js 16 App Router |
| Webpack 5 MF 1.0 | Formato de container incompativel com MF 2.0 host — hang silencioso |
| iframes | CSS totalmente isolado — impossivel herdar o tema do shell |
| npm package por modulo | Elimina deploy independente — shell precisa redeploy para cada versao |
| Single SPA | Camada adicional de abstracao sem beneficio claro |

**O que aprendi:** Module Federation e uma solucao de nivel de browser — o runtime MF e carregado e executa no mesmo document que o shell. Isso e o que permite a heranca de CSS. O desafio tecnico foi que o Next.js nao gera containers MF com runtime autonomo por design — o `webpack.container.cjs` foi a solucao pragmatica para contornar essa limitacao sem abandonar Next.js.

A decisao de nao compartilhar React foi contraintuitiva — a documentacao do MF recomenda compartilhar dependencias. Mas com Next.js 16, o framework faz suas proprias operacoes de inicializacao do React que sao incompativeis com o mecanismo de shared scope do MF. A duplicacao de ~50KB e o preco do isolamento correto.

**Trade-offs aceitos:** React duplicado em cada bundle de remote. Build extra apos `next build` (o `webpack.container.cjs`). URL do sportsbook resolvida em build time via `NODE_ENV` (nao em runtime por operador — limitacao do modelo atual, resolvivel com `loadRemote()` dinamico em versoes futuras).

**Referencia tecnica:** [ADR-004](./architecture/adr/ADR-004-module-federation.md) | [Module Federation](./architecture/module-federation.md)
