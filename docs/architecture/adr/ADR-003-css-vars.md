# ADR-003: CSS Custom Properties como contrato de tema

**Status:** Aceito
**Data:** 2025

---

## Contexto

O sistema precisa de um mecanismo para que o shell aplique a identidade visual de um operador e todos os componentes — incluindo remotes MF carregados em runtime — a exibam corretamente, sem acoplamento.

Os requisitos sao:
1. Trocar de operador sem reload de pagina
2. Remotes MF herdarem o tema sem receber props ou acessar Context do shell
3. Componentes independentes de framework (para futuros Web Components)
4. Zero overhead de JavaScript em componentes puros

---

## Decisao

CSS Custom Properties (variaveis CSS nativas) como unico mecanismo de tema.

O `ThemeEngine.apply(config)` injeta 22 CSS Custom Properties em `document.documentElement` via `element.style.setProperty()`. Componentes consomem `var(--color-primary)`, nunca `#1A7A4A`.

### O mecanismo

```
ClientConfig
  → buildCSSVars(config)         // funcao pura, sem DOM
  → ThemeEngine.apply(config)    // setProperty em :root
  → CSS cascade                  // todos os descendentes herdando
  → var(--color-primary)         // consumido por qualquer elemento
```

### Por que `style.setProperty` e nao uma `<style>` tag

`style.setProperty` modifica o style attribute do elemento diretamente. Isso:
- E mais facil de resetar (basta `style.removeProperty`)
- Nao cria elementos extras no DOM
- E mais performatico para atualizacoes frequentes (menos recalculo de estilo)
- Permite rastrear exatamente quais vars esta instancia aplicou (para `reset()` preciso)

### O atributo `data-theme`

Alem das CSS vars, `apply()` tambem seta `data-theme="dark"` ou `data-theme="light"` no target. Isso permite CSS scoping condicional:

```css
[data-theme="dark"] .overlay { backdrop-filter: blur(8px); }
[data-theme="light"] .overlay { backdrop-filter: none; }
```

### O atributo `data-client`

`data-client="grandbet"` permite overrides por operador sem feature flags:

```css
[data-client="grandbet"] .logo { width: 160px; }
[data-client="elitebet"] .logo { width: 120px; }
```

---

## Consequencias

**Positivas:**
- Remotes MF herdam o tema via CSS cascade — zero acoplamento de API
- Trocar tema e instantaneo: `setProperty` nao dispara re-render de React
- Funciona em qualquer elemento — React, Web Components, HTML puro
- Inspecionavel no DevTools — todas as vars aparecem no `:root` computed styles
- `ThemeEngine.reset()` remove exatamente as vars que foram aplicadas

**Negativas / trade-offs:**
- Debugging pode ser mais dificil — o valor real de uma cor nao e visivel no JSX, apenas a referencia `var(--nome)`
- TypeScript nao valida se uma CSS var existe (sem plugin especifico)
- SSR: as vars sao injetadas no cliente (useEffect), o que pode causar um flash de estilo sem tema antes do hydration. Mitigacao: o server ja recebeu o config e pode renderizar inline styles como fallback.

---

## Alternativas consideradas

**React Context de tema:**

```tsx
const { primary } = useTheme()
// style={{ color: primary }}
```

Nao funciona entre boundaries de Module Federation. O Context do shell nao esta disponivel no remote MF.

**CSS-in-JS (styled-components, emotion):**

Geram classes dinamicas em runtime. Problema identico ao Context — o remote nao tem acesso ao provider do shell. Alem disso, adiciona runtime overhead e dificulta SSR.

**Props de tema em cada componente:**

```tsx
<OddsButton primary="#1A7A4A" primaryHover="#15623C" ... />
```

14 props de cor em cada componente folha. Prop drilling inevitavel. Impossivel de manter.

**Tailwind com classes dinamicas:**

```tsx
className={`bg-[${config.colors.primary}]`}
```

Tailwind v4 com CSS vars funciona, mas classes dinamicas (interpoladas) nao sao processadas pelo Tailwind — elas precisam existir literalmente no codigo para serem incluidas no bundle. E possivel usar Tailwind com CSS vars como valores, mas o mecanismo de injecao continuaria sendo `setProperty`.
