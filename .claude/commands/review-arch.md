# /review-arch

Verifica se o código modificado viola alguma regra de arquitetura do OpenBet Core.

## O que este comando faz

Analise todos os arquivos modificados (staged e unstaged via `git diff`) e verifique cada uma das regras abaixo. Para cada violação encontrada, reporte: arquivo, linha, regra violada e como corrigir.

---

## Regras a verificar

### R1 — Fluxo de dependência unidirecional

**Regra:** `packages/` nunca importa de `apps/`. `apps/` pode importar de `packages/`.

Verificar: existe algum `import` em qualquer arquivo dentro de `packages/` que referencie um caminho dentro de `apps/`?

```
# Padrão proibido (em packages/*):
import ... from '../../apps/...'
import ... from '@openbet/shell'
import ... from '@openbet/sportsbook'
import ... from '@openbet/casino'
```

---

### R2 — config-schema sem dependências externas

**Regra:** `packages/config-schema` pode depender apenas de `zod`. Nenhuma outra dependência.

Verificar:
- O `package.json` de `config-schema` tem alguma dependência além de `zod`?
- Algum arquivo em `packages/config-schema/src/` importa algo que não seja `zod` ou módulos internos do próprio pacote?
- Existe algum import de `react`, `@openbet/*`, ou qualquer outra lib?

---

### R3 — theme-engine sem dependências além de config-schema

**Regra:** `packages/theme-engine` pode depender apenas de `@openbet/config-schema`. Sem React, sem libs de CSS, sem outras dependências.

Verificar:
- O `package.json` de `theme-engine` tem dependências além de `@openbet/config-schema`?
- Algum arquivo em `packages/theme-engine/src/` importa `react`, `react-dom`, ou qualquer lib de terceiros?

---

### R4 — Tema via CSS vars, nunca hardcode

**Regra:** Nenhum componente em `packages/ui` ou `apps/` deve conter valores de cor, fonte ou espaçamento hardcoded.

Verificar nos arquivos `.tsx`, `.ts`, `.css`:
- Strings que parecem hex de cor: `/#[0-9a-fA-F]{3,8}/`
- Cores CSS nomeadas em estilos inline: `color: red`, `background: blue`
- Classes Tailwind com valores de cor direta (não var): `text-blue-600`, `bg-red-500`, `border-green-400`
  - Atenção: `text-[var(--color-*)]` é permitido; `text-blue-600` não é
- Estilos inline com valores hardcoded: `style={{ color: '#...' }}`

---

### R5 — Validação Zod obrigatória antes de usar ClientConfig

**Regra:** Toda vez que um `ClientConfig` entra no sistema (vindo de arquivo, API, env var), deve passar por `ClientConfigSchema.parse()` ou `ClientConfigSchema.safeParse()`.

Verificar:
- Existe uso de `as ClientConfig` sem um parse anterior?
- Existe acesso a propriedades de um objeto presumido como `ClientConfig` sem validação?

Padrão proibido:
```typescript
const config = JSON.parse(rawJson) as ClientConfig  // sem parse Zod
```

Padrão correto:
```typescript
const config = ClientConfigSchema.parse(JSON.parse(rawJson))
```

---

### R6 — theme-engine não gera CSS classes

**Regra:** `packages/theme-engine` nunca cria `<style>` tags, nunca usa `CSSStyleSheet`, nunca usa `insertRule`. Apenas `style.setProperty` em elementos do DOM.

Verificar em `packages/theme-engine/src/`:
- Uso de `document.createElement('style')`
- Uso de `CSSStyleSheet`
- Uso de `insertRule` ou `addRule`
- Criação de seletores CSS (strings com `{` e `}` que parecem CSS)

---

### R7 — TypeScript strict, sem `any` não justificado

**Regra:** Uso de `any` é permitido apenas com comentário `// eslint-disable-next-line @typescript-eslint/no-explicit-any` seguido de justificativa.

Verificar nos arquivos modificados:
- Ocorrências de `: any` ou `as any` sem o comentário de justificativa acima

---

### R8 — Exports seguem o contrato dos pacotes

**Regra:** `config-schema` exporta apenas `ClientConfigSchema` e `ClientConfig`. `theme-engine` exporta apenas `ThemeEngine` e `themeEngine`.

Verificar nos `index.ts` desses pacotes:
- `packages/config-schema/src/index.ts`: há exports além de `ClientConfigSchema` e `ClientConfig`?
- `packages/theme-engine/src/index.ts`: há exports além de `ThemeEngine` e `themeEngine`?

---

## Formato do relatório

Para cada violação encontrada, reportar no formato:

```
[R<número>] <Arquivo>:<Linha>
Regra violada: <nome da regra>
Problema: <descrição específica do problema>
Correção: <como corrigir>
```

Se nenhuma violação for encontrada, responder:

```
Nenhuma violação de arquitetura encontrada nos arquivos modificados.
```

---

## Como executar a verificação

1. Liste os arquivos modificados: `git diff --name-only HEAD` e `git diff --name-only --cached`
2. Para cada arquivo relevante, leia o conteúdo e aplique as regras acima
3. Reporte todas as violações encontradas antes de sugerir qualquer correção
