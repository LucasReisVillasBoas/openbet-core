# ADR-001: Turborepo + pnpm Workspaces como estrutura de monorepo

**Status:** Aceito
**Data:** 2025

---

## Contexto

O OpenBet Core precisa gerenciar multiplos pacotes e apps com dependencias compartilhadas entre si:

- `packages/config-schema` — consumido por shell, sportsbook, scripts e theme-engine
- `packages/theme-engine` — consumido por shell e sportsbook
- `packages/ui` — consumido por shell e sportsbook
- `apps/shell` — Next.js host
- `apps/sportsbook` — Next.js remote

A estrutura de monorepo precisa:
1. Garantir que a ordem de build respeite as dependencias entre pacotes
2. Evitar instalar as mesmas dependencias multiplas vezes (hoisting)
3. Permitir que pacotes internos se referenciem como `@openbet/config-schema` sem publish
4. Ser rapida — builds incrementais, cache agressivo
5. Suportar scripts por workspace e scripts globais

---

## Decisao

Usar **Turborepo** como orchestrador de pipeline com **pnpm workspaces** como gerenciador de pacotes.

**Turborepo** gerencia:
- Pipeline de tasks (`build`, `dev`, `test`, `lint`) com dependencias declaradas em `turbo.json`
- Cache de outputs — se o input nao mudou, o output e restaurado do cache
- Execucao em paralelo respeitando a topologia do grafo de dependencias

**pnpm** gerencia:
- Instalacao de dependencias com hoisting seletivo (nao global) via hard links
- Protocolo `workspace:*` para referencias entre pacotes internos
- Lockfile determinístico (pnpm-lock.yaml)

**Engines declarados em `package.json`:**

```json
{
  "engines": {
    "node": ">=20",
    "pnpm": ">=9"
  },
  "packageManager": "pnpm@9.15.0"
}
```

---

## Consequencias

**Positivas:**
- `pnpm install` na raiz instala tudo — sem `npm install` por diretorio
- `turbo build` compila na ordem correta: `config-schema` → `theme-engine` → `ui` → `apps`
- Mudancas em `config-schema` invalidam o cache de `theme-engine` e dos apps automaticamente
- Referencia interna: `"@openbet/config-schema": "workspace:^"` no `package.json` de qualquer pacote
- `turbo dev` sobe todos os apps em paralelo com watch mode

**Negativas / trade-offs:**
- Requer pnpm 9+ — npm e yarn nao suportam o protocolo `workspace:*` da mesma forma
- `turbo.json` precisa ser mantido quando novos scripts sao adicionados
- Build local do container MF (`webpack.container.cjs`) nao entra no pipeline Turbo — e executado separadamente via `vercel.json`

---

## Alternativas consideradas

**npm workspaces + Lerna:** Mais verbose, Lerna tem overhead de configuracao, cache menos sofisticado que Turborepo.

**yarn workspaces + Nx:** Nx e mais poderoso (code generation, plugins), mas overkill para o escopo atual. Curva de aprendizado maior.

**Repositorio separado por app:** Elimina o problema de monorepo, mas cria problemas de sincronizacao entre versoes dos pacotes compartilhados. Um bug no `config-schema` exigiria PR em 3+ repos.

**Rush + PNPM:** Stack da Microsoft, robusto para monorepos muito grandes (100+ pacotes). Overkill para o tamanho atual do projeto.
