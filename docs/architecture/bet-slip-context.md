# BetSlip Context

## O que e e por que vive no shell

O `BetSlipContext` e o estado global da aposta em construcao. Ele agrega as selecoes que o usuario escolheu, controla as regras de negocio (limite, exclusividade por mercado) e expoe a API que os componentes de UI consomem para adicionar, remover e confirmar apostas.

**Por que vive no shell e nao no remote:**

O shell e o host MF — e o unico app que possui o React tree completo que abrange todos os componentes: header, sidebar, area de conteudo (remote) e painel de apostas. O `BetSlipProvider` precisa estar nesse nivel para que `BetSlipPanel` (que renderiza as selecoes) e quaisquer componentes de odds (incluindo os do remote) possam compartilhar o mesmo estado.

O sportsbook (remote) opera em seu proprio React tree e nao pode acessar Contexts do shell diretamente. A comunicacao entre o remote e o `BetSlipContext` e feita via Custom Events do DOM — padrao descrito em [ADR-006](./adr/ADR-006-custom-events-communication.md).

**Arquivo:** `apps/shell/lib/bet-slip-context.tsx`

---

## Interface BetSelection

```typescript
interface BetSelection {
  id: string           // Identificador unico da selecao. Formato: `${matchId}-${selectionName.toLowerCase()}`
  matchId: string      // ID do jogo ao qual esta selecao pertence
  eventName: string    // Nome do evento: ex: "Manchester United vs Arsenal"
  marketName: string   // Nome do mercado: ex: "Match Result", "Total Goals Over/Under"
  selectionName: string // Nome da escolha: ex: "Casa", "Empate", "Fora"
  odds: number         // Cotacao decimal: ex: 2.45
}
```

O campo `id` e construido concatenando `matchId` e `selectionName.toLowerCase()`. Esse padrao garante que a mesma selecao no mesmo jogo seja identificada univocamente, permitindo toggle e deduplicacao sem precisar de IDs externos.

---

## Regras de negocio

### Toggle: clicar na mesma odd remove a selecao

Se `addSelection` e chamado com uma selecao cujo `id` ja existe no estado, a selecao e removida em vez de adicionada. Isso permite que o usuario desfaca uma escolha clicando novamente na mesma odd.

```
Clique em "Casa" (id: "match-1-casa")  →  selecao adicionada
Clique em "Casa" novamente             →  selecao removida  (toggle off)
```

### Exclusividade por jogo no mercado "Match Result"

Dentro do mercado `Match Result`, so uma selecao por jogo (`matchId`) e permitida por vez. Se o usuario clica em "Fora" depois de ja ter selecionado "Casa" no mesmo jogo, a selecao anterior e automaticamente substituida pela nova.

```
Selecao ativa: { matchId: "match-1", selectionName: "Casa", marketName: "Match Result" }
Clique em "Fora" do mesmo jogo:
  → remove "Casa" de match-1 (exclusividade Match Result)
  → adiciona "Fora" de match-1
```

Essa regra se aplica **apenas** ao mercado `"Match Result"`. Outros mercados (ex: "Total Goals") nao tem essa restricao — multiplas selecoes do mesmo jogo sao permitidas, sujeitas apenas ao limite total.

### Limite maximo de 10 selecoes

O bet slip aceita no maximo 10 selecoes simultaneas. Tentativas de adicionar uma 11a selecao sao silenciosamente ignoradas (o estado nao muda). A regra se aplica apos a substituicao por exclusividade de Match Result: se apos remover a selecao conflitante o total ainda e 10, a nova selecao nao e adicionada.

```
Estado com 10 selecoes:
  Clique em nova odd (mercado diferente) → ignorado, estado inalterado
  Clique em "Fora" substituindo "Casa" (Match Result) → permitido se resultado ainda <= 10
```

### Auto-switch para modo multiplo

O modo de aposta (`'single'` | `'multiple'`) e gerenciado pelo `BetSlipPanel`, que observa `selections.length` via `useEffect`. Quando o usuario adiciona uma segunda selecao (length >= 2), o painel automaticamente muda para o modo `'multiple'`, habilitando o calculo de odds acumuladas.

---

## API do contexto

### BetSlipContextType

```typescript
interface BetSlipContextType {
  selections: BetSelection[]                 // Lista atual de selecoes
  addSelection: (s: BetSelection) => void    // Adiciona (com toggle e regras de negocio)
  removeSelection: (id: string) => void      // Remove selecao pelo id
  clearSelections: () => void                // Remove todas as selecoes e zera o stake
  stake: number                              // Valor apostado (em unidade monetaria)
  setStake: (n: number) => void              // Atualiza o stake
}
```

### useBetSlip()

```typescript
export function useBetSlip(): BetSlipContextType
```

Hook para consumir o contexto. Lanca um erro se chamado fora de um `BetSlipProvider`:

```
Error: useBetSlip must be inside BetSlipProvider
```

**Uso em componentes do shell:**

```tsx
import { useBetSlip } from '@/lib/bet-slip-context'

function MeuComponente() {
  const { selections, addSelection, removeSelection } = useBetSlip()
  // ...
}
```

### BetSlipProvider

```tsx
export function BetSlipProvider({ children }: { children: React.ReactNode })
```

Deve envolver toda a arvore que precisa acessar o bet slip. No shell, esta no `app/layout.tsx` junto com os demais providers globais.

---

## Contrato de Custom Events com o remote (ADR-006)

O sportsbook (remote MF) opera em seu proprio React tree e nao pode chamar `useBetSlip()` diretamente. A comunicacao e feita via Custom Events do DOM, definidos em `packages/ui/src/events/bet-events.ts`.

**Fluxo:**

```
apps/sportsbook (remote)           apps/shell (host)
────────────────────────           ────────────────────────
OddsButton onClick
  dispatchBetAdd(selection)  ───►  BetSlipProvider
                                     useEffect → onBetAdd(handler)
                                       handler chama addSelection(s)

  dispatchBetRemove(id)      ───►  BetSlipProvider
                                     useEffect → onBetRemove(handler)
                                       handler chama removeSelection(id)
```

**Por que Custom Events e nao React Context compartilhado:**

React Context nao cruza boundaries de Module Federation. Cada app tem seu proprio React tree. Custom Events sao nativos do DOM, sem dependencias extras, e funcionam no mesmo `document` onde shell e remote coexistem.

**Nota de implementacao:** A versao atual de `BetSlipProvider` nao registra os listeners de Custom Events — isso e uma extensao planejada. Para habilitar a comunicacao com o remote, adicionar `useEffect` com `onBetAdd`/`onBetRemove` no corpo do provider, seguindo o padrao do ADR-006.

---

## Como TodayMatches usa o contexto

`TodayMatches` e um componente do shell que renderiza os jogos do dia. Ele consome tanto `useBetSlip` quanto `useSportFilter`:

```tsx
// apps/shell/components/TodayMatches/TodayMatches.tsx
const { addSelection, selections } = useBetSlip()
```

**Construcao do id de selecao:**

```tsx
const handleOddsClick = (matchId, eventName, selectionName, odds) => {
  const id = `${matchId}-${selectionName.toLowerCase()}`
  addSelection({
    id,
    matchId,
    eventName,
    marketName: 'Match Result',
    selectionName,
    odds,
  })
}
```

O `id` usa `selectionName.toLowerCase()` para normalizar ("Casa" → "casa", "Empate" → "empate", "Fora" → "fora"), garantindo correspondencia com o mesmo padrao usado pelo `MatchCard` para derivar o estado `selectedMarkets`.

**Calculo de selectedMarkets:**

Para cada jogo, `TodayMatches` deriva um `Set<'home' | 'draw' | 'away'>` com os mercados ja selecionados. Isso e passado ao `MatchCard` para que ele possa destacar visualmente as odds que o usuario ja escolheu:

```tsx
const selectedMarkets = new Set(
  [['home', 'Casa'], ['draw', 'Empate'], ['away', 'Fora']]
    .filter(([, label]) => {
      const id = `${match.id}-${label.toLowerCase()}`
      return selections.some(s => s.id === id)
    })
    .map(([market]) => market)
)
```

O mapeamento entre o market key (`'home'`, `'draw'`, `'away'`) e o `selectionName` em portugues (`'Casa'`, `'Empate'`, `'Fora'`) e feito pelo `labelMap` no handler de clique e invertido aqui para derivar o estado visual.

---

## Ciclo de vida da aposta

```
Usuario clica em odd
  → handleOddsClick constroi BetSelection
  → addSelection aplica regras de negocio
  → selections atualiza
  → BetSlipPanel reage (useEffect → modo single/multiple)
  → MatchCard reage (selectedMarkets recalculado)

Usuario clica em "Confirmar aposta"
  → handlePlaceBet (em BetSlipPanel)
  → isLoading = true por 1.5s (simulacao)
  → clearSelections() → selections = [], stake = 0
  → confirmed = true por 2s (feedback visual)
```
