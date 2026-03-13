# Comecando — Guia de Desenvolvimento

## Pre-requisitos

| Ferramenta | Versao minima | Como verificar |
|---|---|---|
| Node.js | 20.x | `node --version` |
| pnpm | 9.x | `pnpm --version` |
| Git | qualquer | `git --version` |

Para instalar o pnpm:
```bash
npm install -g pnpm@9
# ou via corepack (recomendado)
corepack enable
corepack prepare pnpm@9 --activate
```

---

## Clone e instalacao

```bash
# 1. Clone
git clone https://github.com/lucasreis10/openbet-core.git
cd openbet-core

# 2. Instale todas as dependencias
pnpm install
# Instala dependencias de todos os pacotes e apps em um unico comando.
# O pnpm gerencia os links entre pacotes internos automaticamente.

# 3. Build dos pacotes em ordem topologica
pnpm build
# Turborepo garante a ordem: config-schema → theme-engine → ui → apps
```

---

## Variaveis de ambiente

### apps/shell

Crie o arquivo `apps/shell/.env.local`:

```bash
# Qual operador carregar. Opcoes disponiveis:
# client-grandbet  → GrandBet (verde escuro, pt-BR, casino+sportsbook)
# client-elitebet  → EliteBet (indigo, pt-BR, esports-first)
NEXT_PUBLIC_CLIENT_ID=client-grandbet
```

Sem esse arquivo, o shell usa `client-grandbet` como fallback e exibe um aviso no console.

### apps/sportsbook

O sportsbook nao requer variaveis de ambiente para desenvolvimento local. A variavel `NODE_ENV` controla o `publicPath` do container MF gerado pelo `webpack.container.cjs`.

### Para deploy na Vercel

Veja o guia completo em [Deploy na Vercel](./deploy.md).

---

## Como rodar o Storybook

```bash
# Sobe o Storybook do pacote ui
pnpm --filter=@openbet/ui storybook

# Acesse em http://localhost:6006
```

O Storybook lista todos os componentes do design system com todas as suas variantes e estados. E a fonte de verdade visual para componentes.

---

## Como rodar shell + sportsbook juntos

Em terminais separados (ou use o `pnpm dev` que sobe tudo):

**Terminal 1 — sportsbook (Next.js em dev):**
```bash
pnpm --filter=sportsbook dev
# Disponivel em http://localhost:3001
```

**Terminal 2 — sportsbook container (MF remote em watch mode):**
```bash
pnpm --filter=sportsbook dev:container
# Gera public/remoteEntry.js com NODE_ENV=development
# Serve em http://localhost:3001/remoteEntry.js
```

**Terminal 3 — shell:**
```bash
pnpm --filter=shell dev
# Disponivel em http://localhost:3000
# Carrega sportsbook de http://localhost:3001/remoteEntry.js
```

**Atalho: tudo de uma vez:**
```bash
pnpm dev
# Turborepo sobe todos os pacotes/apps em paralelo com watch mode
```

> **Nota sobre o container em dev:** O sportsbook precisa ter o `remoteEntry.js` gerado antes do shell tentar carrega-lo. Se o shell carregar antes do container estar pronto, o remote falha silenciosamente. Em caso de tela em branco no shell, verifique se `http://localhost:3001/remoteEntry.js` responde.

---

## Como alternar entre GrandBet e EliteBet

### Via interface (sem reload)

O `ThemeToggle` no header do shell permite trocar de operador instantaneamente, sem reload de pagina. A escolha e persistida em `localStorage` com a chave `openbet-client`.

### Via variavel de ambiente (com reload)

Edite `apps/shell/.env.local`:

```bash
NEXT_PUBLIC_CLIENT_ID=client-elitebet  # EliteBet — indigo, esports-first
# ou
NEXT_PUBLIC_CLIENT_ID=client-grandbet  # GrandBet — verde escuro, casino+sportsbook
```

Reinicie o shell (`Ctrl+C` e `pnpm --filter=shell dev`) para a variavel ser lida.

---

## Scripts disponiveis

### Scripts raiz (rodam em todos os pacotes via Turborepo)

```bash
pnpm dev           # Watch mode em todos os apps e pacotes
pnpm build         # Build de producao em ordem topologica
pnpm test          # Testes em todos os pacotes que tem script de test
pnpm typecheck     # tsc --noEmit na raiz (verifica tipos de todos os pacotes)
pnpm lint          # ESLint em packages/*/src e apps/*/app,components,lib
pnpm format        # Prettier --write em todos os arquivos TypeScript
pnpm format:check  # Prettier --check (usado em CI)
pnpm clean         # Remove .turbo, node_modules e dist de todos os pacotes
pnpm validate      # Valida todos os clients/*.config.json contra o schema Zod
pnpm test:theme    # Testa o ThemeEngine com jsdom (sem browser)
```

### Scripts por workspace

```bash
# config-schema
pnpm --filter=@openbet/config-schema build
pnpm --filter=@openbet/config-schema typecheck

# theme-engine
pnpm --filter=@openbet/theme-engine build
pnpm --filter=@openbet/theme-engine typecheck

# shell
pnpm --filter=shell dev          # Next.js em localhost:3000
pnpm --filter=shell build        # Next.js build de producao
pnpm --filter=shell start        # Serve o build de producao

# sportsbook
pnpm --filter=sportsbook dev               # Next.js em localhost:3001
pnpm --filter=sportsbook dev:container     # webpack --watch (remoteEntry.js em dev)
pnpm --filter=sportsbook build             # Next.js build
pnpm --filter=sportsbook build:container   # gera public/remoteEntry.js (producao)
pnpm --filter=sportsbook build:container:dev  # gera com publicPath localhost
pnpm --filter=sportsbook start             # Serve o build de producao
```

---

## Pipeline de CI

O workflow `.github/workflows/ci.yml` roda em todo push e PR:

```
1. pnpm install --frozen-lockfile
2. NEXT_PUBLIC_CLIENT_ID=client-grandbet (env para build)
3. pnpm build              (build de todos os pacotes/apps)
4. pnpm format:check       (verifica formatacao)
5. pnpm typecheck          (tsc --noEmit)
6. pnpm lint               (ESLint)
7. pnpm validate           (valida clients/*.config.json)
```

Um PR so pode ser mergeado se todos os steps passarem.
