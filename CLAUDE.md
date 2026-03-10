# OpenBet Core — Claude Instructions

## O que é este projeto

OpenBet Core é um **framework white-label para plataformas de betting**. Ele fornece a infraestrutura base (configuração, temas, componentes, microfrontends) para que múltiplos clientes (operadores de apostas) possam ter produtos distintos a partir de um único repositório.

A premissa central: **um único core, N marcas**. A diferenciação entre clientes acontece exclusivamente via configuração (`ClientConfig`) e tokens de tema (CSS Custom Properties) — nunca via código condicional espalhado.

---

## Stack

| Camada | Tecnologia |
|---|---|
| Monorepo | Turborepo + pnpm workspaces |
| Linguagem | TypeScript (strict mode obrigatório) |
| Validação de config | Zod |
| Bundler | Rspack |
| Microfrontends | Module Federation 2.0 |
| UI | React 18 |
| Estilização | Tailwind CSS + CSS Custom Properties |

---

## Estrutura do monorepo

```
openbet-core/
├── apps/
│   ├── shell/          # Host MF — carrega os remotes, aplica tema, autentica
│   ├── sportsbook/     # Remote MF — módulo de esportes
│   └── casino/         # Remote MF — módulo de cassino
├── packages/
│   ├── config-schema/  # Zod schema + TypeScript type de ClientConfig
│   ├── theme-engine/   # Lê ClientConfig e injeta CSS vars no DOM
│   ├── ui/             # Biblioteca de componentes React compartilhados
│   ├── i18n/           # Internacionalização
│   └── utils/          # Utilitários puros sem dependências de framework
├── turbo.json
├── pnpm-workspace.yaml
└── package.json
```

### Como os pacotes se dependem entre si

```
apps/* → packages/ui → packages/theme-engine → packages/config-schema
                     ↘ packages/utils
apps/* → packages/i18n → packages/config-schema
apps/* → packages/config-schema
```

Regra de ouro: **dependências só fluem "para baixo"** (apps dependem de packages, packages de nível superior dependem de packages de nível inferior). Nunca o contrário.

---

## Regras invioláveis

### Dependências
- **Nunca instalar dependências fora do workspace correto.** Se um pacote precisa de algo, instala com `pnpm add <dep> --filter @openbet/<pacote>`.
- Dependências que são usadas por apenas um pacote ficam no `package.json` daquele pacote — não no root.

### Imports
- **Nunca importar de `apps/` dentro de `packages/`.** O fluxo de dependência é unidirecional: apps consomem packages, nunca o inverso.
- Imports entre packages devem usar o nome do pacote (`@openbet/ui`), nunca caminhos relativos entre diretórios de packages distintos.

### Configuração
- **Sempre validar configs com Zod antes de usar.** Nunca usar `as ClientConfig` sem passar pelo `ClientConfigSchema.parse()` ou `safeParse()`.
- Toda config de cliente deve satisfazer o contrato definido em `packages/config-schema`.

### Tema
- **CSS vars são o único mecanismo de tema.** Nunca hardcode de cor, fonte ou espaçamento em componentes.
- Correto: `color: var(--color-brand-primary)`
- Errado: `color: #1a56db` ou `color: theme('colors.blue.600')`
- Quem injeta as vars é exclusivamente o `theme-engine`. Componentes só consomem.

### TypeScript
- `strict: true` é obrigatório em todos os pacotes. Nunca desabilitar com `@ts-ignore` sem comentário explicativo e aprovação em PR.
- Prefira tipos explícitos em assinaturas públicas de funções. Evite `any`.

---

## Convenções de nomenclatura

| Artefato | Convenção | Exemplo |
|---|---|---|
| Componentes React | PascalCase | `BetSlipCard`, `OddsDisplay` |
| Pacotes | kebab-case | `@openbet/theme-engine` |
| Funções e variáveis | camelCase | `applyTheme`, `clientConfig` |
| Arquivos de componente | PascalCase | `BetSlipCard.tsx` |
| Arquivos de utilitário | kebab-case | `format-odds.ts` |
| CSS Custom Properties | kebab-case com prefixo `--` | `--color-brand-primary` |
| Variáveis de ambiente | SCREAMING_SNAKE_CASE | `VITE_API_URL` |

---

## Como rodar, buildar e testar

```bash
# Instalar dependências
pnpm install

# Dev (todos os apps e packages em watch)
pnpm dev

# Dev de um app específico
pnpm dev --filter @openbet/shell

# Build completo (Turborepo gerencia a ordem)
pnpm build

# Build de um pacote específico e suas dependências
pnpm build --filter @openbet/ui...

# Testes
pnpm test                          # todos
pnpm test --filter @openbet/ui     # pacote específico

# Type check
pnpm typecheck

# Lint
pnpm lint
```

### Pipeline do Turborepo

O `turbo.json` define a ordem de execução. A regra é:
1. `config-schema` e `utils` são buildados primeiro (sem dependências internas)
2. `theme-engine` depende de `config-schema`
3. `ui` depende de `theme-engine` e `utils`
4. `apps/*` dependem de tudo acima

Nunca rode `tsc` ou `rspack` diretamente em packages isolados — use `turbo` para garantir que as dependências estejam buildadas na ordem certa.
