# packages/theme-engine — Claude Instructions

## Propósito

Este pacote é responsável por **consumir um `ClientConfig` validado e materializar o tema do operador no DOM** via CSS Custom Properties.

É a ponte entre a configuração declarativa do cliente e o visual real da aplicação. Toda variação visual entre operadores passa obrigatoriamente por aqui.

---

## Contrato público

```typescript
// Classe para instâncias múltiplas (ex: testes, iframes isolados)
export { ThemeEngine } from './ThemeEngine'

// Singleton para uso no app principal
export { themeEngine } from './themeEngine'
```

### Interface de `ThemeEngine`

```typescript
class ThemeEngine {
  // Aplica todas as CSS vars no :root (ou no elemento passado)
  apply(config: ClientConfig, target?: HTMLElement): void

  // Remove todas as CSS vars injetadas por esta instância
  reset(target?: HTMLElement): void
}
```

---

## Dependências permitidas

```json
{
  "dependencies": {
    "@openbet/config-schema": "workspace:*"
  }
}
```

**Apenas `@openbet/config-schema`.** Nada mais além das APIs nativas do browser.

Proibido adicionar:
- React ou qualquer framework
- Bibliotecas de manipulação de CSS (postcss, stylis, etc.)
- Utilitários de cor (chroma-js, tinycolor, etc.) — transformações de cor, se necessárias, devem ser implementadas internamente com matemática pura

---

## Regras de implementação

### CSS vars, nunca CSS classes
- O `ThemeEngine` **injeta apenas CSS Custom Properties no `:root`** (ou no elemento alvo).
- **Nunca** gera, injeta ou manipula CSS classes.
- Correto: `document.documentElement.style.setProperty('--color-brand-primary', '#1a56db')`
- Errado: criar uma `<style>` tag com `.btn-primary { background: #1a56db }`

### Nomenclatura das CSS vars
Seguir o padrão: `--<categoria>-<subcategoria>-<variante>`

```
--color-brand-primary
--color-brand-secondary
--color-surface-base
--color-text-default
--typography-font-body
--typography-size-base
--spacing-unit
--radius-card
```

### Idempotência
- Chamar `apply()` múltiplas vezes com a mesma config deve ser seguro — sem memory leaks, sem duplicação de vars.
- `reset()` deve remover exatamente as vars que `apply()` injetou — nada mais.

### Sem side effects no import
- Importar este pacote não deve modificar o DOM. Apenas chamar `themeEngine.apply()` deve ter efeito.

---

## O que nunca fazer neste pacote

- **Nunca gerar CSS classes** — nem via `<style>`, nem via `CSSStyleSheet`, nem via `insertRule`.
- **Nunca acessar `ClientConfig` sem que ele já tenha sido validado** pelo `ClientConfigSchema`. O `ThemeEngine` recebe um `ClientConfig` já tipado — nunca aceita `unknown` ou `any`.
- **Nunca hardcodar valores de tema** dentro do engine. Todos os valores vêm do `config` recebido.
- **Nunca importar de `apps/`** ou de outros packages além de `@openbet/config-schema`.

---

## Estrutura de arquivos esperada

```
packages/theme-engine/
├── src/
│   ├── ThemeEngine.ts     # Classe ThemeEngine
│   ├── themeEngine.ts     # Instância singleton
│   ├── mappers.ts         # Funções puras: ClientConfig → Record<cssVar, value>
│   └── index.ts           # Re-exporta ThemeEngine e themeEngine
├── package.json
├── tsconfig.json
└── CLAUDE.md
```

O arquivo `mappers.ts` contém funções puras testáveis que fazem o mapeamento de campos do `ClientConfig` para nomes e valores de CSS vars. O `ThemeEngine` usa esses mappers — isso mantém a lógica de mapeamento isolada e testável sem DOM.
