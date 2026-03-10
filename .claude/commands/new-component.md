# /new-component

Scaffolda um novo componente React em `packages/ui` seguindo os padrões do OpenBet Core.

## Uso

```
/new-component <ComponentName>
```

## O que este comando faz

Dado o argumento `$ARGUMENTS` como nome do componente (ex: `BetSlipCard`), crie os seguintes arquivos em `packages/ui/src/components/<ComponentName>/`:

---

### 1. `<ComponentName>.tsx` — Componente principal

```tsx
import type { <ComponentName>Props } from './<ComponentName>.types'

export function <ComponentName>({ /* props */ }: <ComponentName>Props) {
  return (
    <div className="<ComponentName>">
      {/* implementação */}
    </div>
  )
}

<ComponentName>.displayName = '<ComponentName>'
```

Regras:
- Usar named export, nunca default export
- `displayName` explícito para melhor DX no DevTools
- Estilização apenas via classes Tailwind que referenciam CSS vars (`text-[var(--color-text-default)]`) — nunca cores hardcoded
- Sem lógica de negócio — componente deve ser puramente presentacional

---

### 2. `<ComponentName>.types.ts` — Definição de tipos

```typescript
export interface <ComponentName>Props {
  // Props obrigatórias primeiro, opcionais depois
  // Documentar cada prop com JSDoc
  /** Descrição da prop */
  propName: PropType
}
```

Regras:
- Sempre `interface`, nunca `type` para props de componentes
- Props de evento seguem o padrão `on<Event>` (ex: `onClick`, `onSelect`)
- Nunca usar `any` — ser específico nos tipos

---

### 3. `<ComponentName>.stories.tsx` — Storybook stories

```tsx
import type { Meta, StoryObj } from '@storybook/react'
import { <ComponentName> } from './<ComponentName>'

const meta: Meta<typeof <ComponentName>> = {
  title: 'Components/<ComponentName>',
  component: <ComponentName>,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof <ComponentName>>

export const Default: Story = {
  args: {
    // props padrão
  },
}
```

Regras:
- Sempre incluir uma story `Default`
- Adicionar stories para estados relevantes (Loading, Error, Empty, etc.)
- Usar `tags: ['autodocs']` para gerar documentação automática

---

### 4. `index.ts` — Barrel export

```typescript
export { <ComponentName> } from './<ComponentName>'
export type { <ComponentName>Props } from './<ComponentName>.types'
```

---

### 5. Atualizar o barrel principal

Adicionar ao arquivo `packages/ui/src/index.ts`:

```typescript
export { <ComponentName> } from './components/<ComponentName>'
export type { <ComponentName>Props } from './components/<ComponentName>'
```

---

## Checklist pós-scaffold

Após criar os arquivos, verificar:
- [ ] Nenhuma cor hardcoded no componente (usar `var(--color-*)`)
- [ ] Props tipadas sem `any`
- [ ] Story `Default` com args válidos
- [ ] Barrel principal atualizado
- [ ] TypeScript compila sem erros: `pnpm typecheck --filter @openbet/ui`
