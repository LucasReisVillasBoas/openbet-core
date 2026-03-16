# Deploy na Vercel

## Arquitetura de deploy

```
                    VERCEL
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  Projeto: openbet-core-sportsbook                       │
│  URL: https://openbet-core-sportsbook.vercel.app        │
│                                                         │
│  Build command (vercel.json):                           │
│    1. pnpm install --frozen-lockfile                    │
│    2. pnpm --filter=@openbet/config-schema build        │
│    3. pnpm --filter=@openbet/theme-engine build         │
│    4. pnpm --filter=sportsbook build (Next.js)          │
│    5. node webpack.container.cjs                        │
│         → public/remoteEntry.js (MF container)          │
│                                                         │
│  Serve:                                                 │
│    /.next/**  (Next.js app)                             │
│    /remoteEntry.js  (MF container, arquivo estatico)    │
│                                                         │
└─────────────────────────────────────────────────────────┘
                         │
                         │ HTTP GET /remoteEntry.js
                         │ (quando usuario acessa o shell)
                         ▼
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  Projeto: openbet-core-shell-grandbet                   │
│  URL: https://openbet-core-shell.vercel.app             │
│  Env: NEXT_PUBLIC_CLIENT_ID=client-grandbet             │
│                                                         │
│  Build command (vercel.json):                           │
│    1. pnpm install --frozen-lockfile                    │
│    2. pnpm --filter=@openbet/config-schema build        │
│    3. pnpm --filter=@openbet/theme-engine build         │
│    4. pnpm --filter=shell build (Next.js + MF host)     │
│                                                         │
│  Remote registry (hardcoded em build time):             │
│    sportsbook → https://openbet-core-sportsbook.vercel.app/remoteEntry.js
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Regra de ouro:** Sempre faca deploy do sportsbook antes do shell. O shell referencia a URL do sportsbook em build time — se o sportsbook estiver em downtime durante o deploy do shell, o remote nao carregara.

---

## Deploy do sportsbook (sempre primeiro)

### Configuracao na Vercel

O arquivo `apps/sportsbook/vercel.json` define o build completo:

```json
{
  "framework": "nextjs",
  "installCommand": "cd ../.. && pnpm install --frozen-lockfile",
  "buildCommand": "cd ../.. && pnpm --filter=@openbet/config-schema build && pnpm --filter=@openbet/theme-engine build && pnpm --filter=sportsbook build && cd apps/sportsbook && node webpack.container.cjs",
  "outputDirectory": ".next"
}
```

**O que cada step faz:**

1. `cd ../.. && pnpm install --frozen-lockfile` — instala dependencias da raiz do monorepo (necessario para resolver workspace packages)
2. `pnpm --filter=@openbet/config-schema build` — compila o schema (depende de tudo)
3. `pnpm --filter=@openbet/theme-engine build` — compila o theme-engine
4. `pnpm --filter=sportsbook build` — Next.js build do sportsbook (gera `.next/`)
5. `cd apps/sportsbook && node webpack.container.cjs` — gera `public/remoteEntry.js`

### Configurar o projeto na Vercel

1. Acesse [vercel.com](https://vercel.com) e crie um novo projeto
2. Importe o repositorio `LucasReisVillasBoas/openbet-core`
3. Configure **Root Directory** como `apps/sportsbook`
4. O `vercel.json` sobrescreve o build command automaticamente
5. Nenhuma variavel de ambiente e necessaria para o sportsbook em producao
6. Clique em **Deploy**

### Verificar o deploy

Apos o deploy, verifique se o container MF foi gerado:

```bash
curl https://openbet-core-sportsbook.vercel.app/remoteEntry.js | head -c 100
# Deve retornar o inicio do bundle webpack, nao um erro 404
```

---

## Deploy do Storybook

### Configuracao na Vercel

O arquivo `packages/ui/vercel.json` define o build completo:

```json
{
  "buildCommand": "cd ../.. && pnpm install --frozen-lockfile && pnpm --filter=@openbet/config-schema build && pnpm --filter=@openbet/theme-engine build && pnpm --filter=@openbet/ui build-storybook",
  "outputDirectory": "storybook-static",
  "installCommand": "echo skip",
  "framework": null
}
```

### Configurar o projeto na Vercel

1. Crie um novo projeto na Vercel
2. Importe o repositorio `LucasReisVillasBoas/openbet-core`
3. Configure **Root Directory** como `packages/ui`
4. O `vercel.json` sobrescreve o build command automaticamente
5. Nenhuma variavel de ambiente necessaria
6. Clique em **Deploy**

O Storybook e servido como site estatico em https://openbet-core-ui.vercel.app — documentacao viva do design system com todos os componentes e estados.

---

## Deploy do shell

### Configuracao na Vercel

O arquivo `apps/shell/vercel.json`:

```json
{
  "framework": "nextjs",
  "installCommand": "cd ../.. && pnpm install --frozen-lockfile",
  "buildCommand": "cd ../.. && pnpm --filter=@openbet/config-schema build && pnpm --filter=@openbet/theme-engine build && pnpm --filter=shell build",
  "outputDirectory": ".next"
}
```

### Configurar o projeto na Vercel

1. Crie um novo projeto na Vercel
2. Importe o mesmo repositorio `LucasReisVillasBoas/openbet-core`
3. Configure **Root Directory** como `apps/shell`
4. Adicione a variavel de ambiente `NEXT_PUBLIC_CLIENT_ID`:
   - Para o projeto GrandBet: `client-grandbet`
   - Para o projeto EliteBet (deploy separado): `client-elitebet`
5. Clique em **Deploy**

### Multiplos operadores = multiplos projetos Vercel

Cada operador e um projeto separado na Vercel com sua propria URL e variavel `NEXT_PUBLIC_CLIENT_ID`:

| Projeto Vercel | URL | Env |
|---|---|---|
| `openbet-core-shell-grandbet` | `openbet-core-shell.vercel.app` | `NEXT_PUBLIC_CLIENT_ID=client-grandbet` |
| `openbet-core-shell-elitebet` | `openbet-core-shell-elitebet.vercel.app` | `NEXT_PUBLIC_CLIENT_ID=client-elitebet` |

O sportsbook e compartilhado por todos os operadores (um unico deploy).

---

## Variaveis de ambiente necessarias

### sportsbook

Nenhuma variavel obrigatoria.

### shell

| Variavel | Obrigatoria | Descricao |
|---|---|---|
| `NEXT_PUBLIC_CLIENT_ID` | Sim (em producao) | ID do operador — `client-grandbet` ou `client-elitebet` |

Se `NEXT_PUBLIC_CLIENT_ID` nao estiver definida, o shell usa `client-grandbet` como fallback e exibe um aviso no console. O build nao falha, mas o comportamento em producao seria incorreto.

---

## Como o webpack.container.cjs funciona no deploy

O Next.js nao gera um container MF valido por si so. O `webpack.container.cjs` e um script Node.js que roda apos o `next build`:

```bash
# Ultimo step do buildCommand do sportsbook
node webpack.container.cjs
```

O script usa webpack programaticamente (sem webpack-cli) e gera `apps/sportsbook/public/remoteEntry.js`. Como o arquivo esta em `public/`, o Next.js o serve estaticamente em `https://<url-sportsbook>/remoteEntry.js`.

**O `publicPath` no container:**

```javascript
// apps/sportsbook/webpack.container.cjs
output: {
  publicPath: process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001/'
    : 'https://openbet-core-sportsbook.vercel.app/',
}
```

Em producao (Vercel), `NODE_ENV=production`, entao o `publicPath` aponta para a URL canonica. Isso e necessario para que o runtime MF resolva os chunks do container corretamente.

---

## Troubleshooting dos erros mais comuns

### "Remote not found" ou tela em branco no shell

**Causa:** O shell nao conseguiu carregar o `remoteEntry.js` do sportsbook.

**Diagnostico:**
```bash
# Verifique se o remoteEntry.js existe e e acessivel
curl -I https://openbet-core-sportsbook.vercel.app/remoteEntry.js
# Esperado: HTTP/2 200

# Se o shell estiver em dev mode, o endpoint e diferente:
curl -I http://localhost:3001/remoteEntry.js
```

**Solucao:** Faca deploy do sportsbook e verifique se o container foi gerado. O `webpack.container.cjs` precisa rodar como ultimo step do build.

### "webpackChunksportsbook is not defined"

**Causa:** O shell carregou o `_next/static/chunks/remoteEntry.js` gerado pelo Next.js em vez do `public/remoteEntry.js` gerado pelo `webpack.container.cjs`.

**Solucao:** Verifique se o `buildCommand` do sportsbook inclui `node webpack.container.cjs` como ultimo step. O arquivo deve existir em `apps/sportsbook/public/remoteEntry.js` no repositorio ou ser gerado pelo build.

### "Invalid hook call" no remote

**Causa:** Duas instancias de React foram carregadas — uma do shell e uma do sportsbook. Isso acontece se React estiver no `shared` scope.

**Solucao:** Confirme que `shared: {}` (objeto vazio) esta no `ModuleFederationPlugin` de ambos os apps. O `webpack.container.cjs` deve ter o alias para pinear React ao `node_modules` do sportsbook.

### Build do shell falha com "Cannot find module 'sportsbook/SportsbookPage'"

**Causa:** O alias server-side nao esta configurado no `next.config.ts`.

**Solucao:** Verifique se o bloco `isServer` em `apps/shell/next.config.ts` define o alias para o stub local:

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

### NEXT_PUBLIC_CLIENT_ID nao aplicado

**Causa:** A variavel precisa estar definida no projeto da Vercel antes do build. Variaveis adicionadas apos o deploy nao tomam efeito sem redeploy.

**Solucao:** No painel da Vercel, va em **Settings > Environment Variables**, adicione `NEXT_PUBLIC_CLIENT_ID` e clique em **Redeploy**.

### Tema incorreto sendo carregado

**Causa:** `NEXT_PUBLIC_CLIENT_ID` nao esta definida — o shell usa `client-grandbet` como fallback.

**Solucao:** Defina `NEXT_PUBLIC_CLIENT_ID` nas variaveis de ambiente do projeto Vercel e faca redeploy.
