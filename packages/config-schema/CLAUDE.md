# packages/config-schema — Claude Instructions

## Propósito

Este pacote é a **fonte única de verdade de tudo que um cliente (operador) pode configurar** no OpenBet Core.

Qualquer propriedade configurável do sistema — cores de marca, mercados habilitados, idiomas, integrações, limites de aposta — deve ser declarada aqui antes de ser usada em qualquer outro lugar. Se não está no schema, não é configurável.

---

## Contrato público

Este pacote exporta dois artefatos e **apenas dois**:

```typescript
// O schema Zod — usado para validação em runtime
export { ClientConfigSchema } from './schema'

// O tipo TypeScript derivado do schema — usado para tipagem estática
export type { ClientConfig } from './schema'
```

Qualquer outro export é considerado internal e não deve ser importado por outros pacotes.

---

## Dependências permitidas

```json
{
  "dependencies": {
    "zod": "..."
  }
}
```

**Apenas Zod. Nada mais.** Este pacote deve permanecer completamente agnóstico de:
- Frameworks de UI (React, Vue, etc.)
- Ambientes de execução (browser, Node, Edge)
- Outros pacotes internos do monorepo

Isso garante que `config-schema` possa ser importado em qualquer contexto sem efeitos colaterais.

---

## O que nunca fazer neste pacote

- **Sem lógica de UI.** Nenhuma função que calcule layout, visibilidade de componente ou comportamento de interação.
- **Sem acesso ao DOM.** Nenhum `document`, `window`, `localStorage` ou similar.
- **Sem imports de React.** Nem hooks, nem componentes, nem context.
- **Sem side effects no módulo.** O arquivo de schema deve ser puro: importar e executar não deve ter efeito nenhum além de definir os exports.
- **Sem defaults opacos.** Todo valor default no schema deve ser explícito e documentado com um comentário inline explicando o porquê daquele default.

---

## Estrutura de arquivos esperada

```
packages/config-schema/
├── src/
│   ├── schema.ts       # ClientConfigSchema (Zod) e ClientConfig (type)
│   └── index.ts        # Re-exporta apenas ClientConfigSchema e ClientConfig
├── package.json
├── tsconfig.json
└── CLAUDE.md
```

---

## Guia de extensão do schema

Ao adicionar um novo campo configurável:

1. Adicione o campo no `ClientConfigSchema` com `.describe()` explicando o propósito.
2. Defina um default explícito com `.default()` se o campo for opcional.
3. Adicione um comentário acima do campo explicando o impacto no sistema.
4. **Nunca use `.any()` ou `.unknown()` em campos do schema público** — seja específico no tipo.

Exemplo correto:
```typescript
// Mercados de aposta habilitados para este operador.
// Afeta quais tabs aparecem no Sportsbook e quais APIs são chamadas.
enabledMarkets: z.array(MarketSchema).min(1).describe(
  'Lista de mercados habilitados. Pelo menos um obrigatório.'
),
```
