# ADR-006: Custom Events para comunicação shell↔remote

**Status:** Accepted
**Data:** 2025-03

---

## Contexto

O `BetSlipContext` vive no shell. O sportsbook remote precisa adicionar seleções ao BetSlip quando o usuário clica em uma odd. Import direto do shell é impossível (criaria dependência circular e violaria o isolamento MF). Shared React context via MF shared modules não é viável porque o container webpack standalone (ADR-005) não pode compartilhar singletons React com o shell Next.js sem causar erros de instância duplicada.

## Decisão

Shell e remote se comunicam via Custom Events do browser. O remote dispara eventos; o shell escuta e atualiza seu estado local.

### Contrato de eventos

Definido em `packages/ui/src/events/bet-events.ts` (ou equivalente):

| Evento | Direção | Payload |
|--------|---------|---------|
| `openbet:bet:add` | Remote → Shell | `{ id, matchId, eventName, marketName, selectionName, odds }` |
| `openbet:bet:remove` | Remote → Shell | `{ id }` |
| `openbet:bet:clear` | Remote → Shell | — |

O `BetSlipProvider` do shell subscreve esses eventos via `useEffect` e atualiza seu estado `selections`.

**Nota sobre implementação atual**: o sportsbook usa `TodayMatches.tsx` no shell (não no remote) para exibir as partidas de hoje, portanto a integração de odds com o BetSlip já funciona diretamente via `useBetSlip()`. O contrato de Custom Events é necessário somente para o sportsbook **remote** (seção "Ao Vivo" carregada via MF).

## Consequências

### Positivas
- Zero acoplamento entre bundles — o remote não importa do shell
- O remote funciona standalone (eventos disparam para `window` sem listener)
- Contrato agnóstico de framework — qualquer remote futuro pode usar
- Consistente com o padrão CSS cascade: remote anuncia, shell reage

### Negativas
- Estado visual (selecionado/não selecionado) precisa ser mantido localmente no remote — não pode ler `selections` do shell
- Eventos podem ser perdidos se o `BetSlipProvider` montar depois do remote disparar (mitigado pelo timing com a Suspense boundary)
- Canal sem type-safety por padrão — nomes de eventos são strings (mitigado por constantes em `@openbet/ui`)

## Alternativas consideradas

- **MF shared React context singleton**: rejeitado — causa erros de React duplicado com o container standalone
- **Props drilling via MF**: impossível — remote é carregado lazily
- **URL/query params**: rejeitado — indireto demais para interação em tempo real
- **Store global compartilhada (Zustand/Redux)**: viável mas adiciona dependência sem benefício sobre Custom Events para este escopo
