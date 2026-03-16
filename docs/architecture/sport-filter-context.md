# SportFilter Context

## O que e e por que e um contexto global

O `SportFilterContext` armazena o esporte atualmente selecionado pelo usuario (`activeSport`) e expoe a funcao para altera-lo (`setActiveSport`). E um contexto global — e nao estado local de um componente — porque dois componentes em arvores distintas precisam le-lo e escreve-lo de forma coordenada:

- `SportsSidebar` escreve: chama `setActiveSport` quando o usuario clica em um esporte
- `TodayMatches` le: filtra a lista de jogos por `activeSport`

Se o estado ficasse em `SportsSidebar`, `TodayMatches` nao poderia acessa-lo sem prop drilling ou inversao de controle. Como a arvore do layout do shell e `layout.tsx → page.tsx → [SportsSidebar, TodayMatches]`, o contexto e a solucao canonica.

**Arquivo:** `apps/shell/lib/sport-filter-context.tsx`

---

## API

### SportFilterContextType

```typescript
interface SportFilterContextType {
  activeSport: string          // ID do esporte ativo: 'football', 'basketball', 'esports', etc.
  setActiveSport: (id: string) => void  // Atualiza o esporte ativo
}
```

O valor padrao do contexto (usado se o provider nao estiver presente na arvore) e `{ activeSport: 'football', setActiveSport: () => {} }`. Na pratica, o provider envolve toda a aplicacao, entao esse fallback e apenas um guarda de seguranca.

### useSportFilter()

```typescript
export function useSportFilter(): SportFilterContextType
```

Hook para consumir o contexto. Ao contrario de `useBetSlip`, nao lanca erro se chamado fora do provider — retorna o valor padrao.

```tsx
import { useSportFilter } from '@/lib/sport-filter-context'

function MeuComponente() {
  const { activeSport, setActiveSport } = useSportFilter()
}
```

### SportFilterProvider

```tsx
export function SportFilterProvider({ children }: { children: React.ReactNode })
```

Inicializa com `'football'` como esporte ativo. Deve envolver todos os componentes que precisam do filtro.

---

## Como SportsSidebar publica o esporte ativo

`SportsSidebar` e o publisher do filtro. Quando o usuario clica em um esporte, ele chama `setActiveSport(id)` com o `id` do esporte clicado:

```tsx
// apps/shell/components/SportsSidebar/SportsSidebar.tsx
const { activeSport, setActiveSport } = useSportFilter()

// Para cada esporte na lista:
<button onClick={() => setActiveSport(id)}>
  {name}
</button>
```

O componente tambem le `activeSport` para destacar visualmente o esporte selecionado (estado `isActive`):

```tsx
const isActive = activeSport === id
```

---

## Como TodayMatches le e filtra os jogos

`TodayMatches` e o consumidor do filtro. Ele le `activeSport` e filtra o array estatico `TODAY_MATCHES` antes de renderizar:

```tsx
// apps/shell/components/TodayMatches/TodayMatches.tsx
const { activeSport } = useSportFilter()

const filtered = TODAY_MATCHES.filter(m => m.sport === activeSport)
```

Se nenhum jogo estiver disponivel para o esporte selecionado, o componente renderiza um estado vazio:

```tsx
if (filtered.length === 0) {
  return <p style={emptyStateStyle}>No matches available for this sport</p>
}
```

---

## Feature flags e sports visiveis

`SportsSidebar` lê o `ClientConfig` via `useClientConfig()` para filtrar os esportes visiveis com base nas feature flags do operador. Atualmente, a unica flag controlada e `features.esports`:

```tsx
// apps/shell/components/SportsSidebar/SportsSidebar.tsx
const config = useClientConfig()

const visibleSports = SPORTS.filter(sport => {
  if (sport.id === 'esports') return config.features.esports
  return true
})
```

**Exemplo de comportamento por operador:**

| Operador | `features.esports` | E-Sports visivel? |
|---|---|---|
| GrandBet (`client-grandbet`) | `true` | Sim |
| EliteBet (`client-elitebet`) | `false` (se configurado assim) | Nao |

A lista completa de esportes definida em `SportsSidebar.data.ts` e:

```
football, basketball, tennis, volleyball, esports, american-football, baseball, hockey
```

Apenas `esports` possui gate de feature flag. Os demais esportes sao sempre visiveis.

---

## Comportamento de reset

Se o esporte atualmente ativo for filtrado pela feature flag (ex: o usuario estava em E-Sports e o operador desabilita `features.esports`), o `SportsSidebar` detecta isso e reseta o filtro para `'football'`:

```tsx
useEffect(() => {
  if (!visibleSports.find(s => s.id === activeSport)) {
    setActiveSport('football')
  }
}, [visibleSports, activeSport, setActiveSport])
```

Esse `useEffect` roda sempre que `visibleSports` muda (o que ocorre quando o `ClientConfig` muda, ex: ao usar o `ThemeToggle` em modo demo) ou quando `activeSport` muda. `'football'` foi escolhido como reset padrao por ser o esporte com maior cobertura em todos os operadores.

---

## Diagrama de fluxo

```
Usuario clica em um esporte na sidebar
  │
  ▼
SportsSidebar.tsx
  setActiveSport('basketball')          [escreve no contexto]
  │
  ▼
SportFilterContext
  activeSport = 'basketball'            [estado atualizado]
  │
  ├──► SportsSidebar re-renderiza
  │      isActive = true para basketball
  │      botao destacado visualmente
  │
  └──► TodayMatches re-renderiza
         filtered = TODAY_MATCHES.filter(m => m.sport === 'basketball')
         renderiza apenas jogos de basquete
```

**Fluxo de reset por feature flag:**

```
ThemeToggle muda para operador sem esports
  │
  ▼
ClientConfig atualiza
  │
  ▼
SportsSidebar recalcula visibleSports
  visibleSports nao inclui 'esports'
  │
  ▼
useEffect detecta activeSport='esports' nao esta em visibleSports
  setActiveSport('football')            [reset automatico]
  │
  ▼
TodayMatches re-renderiza com jogos de futebol
```

---

## IDs de esportes suportados

Os IDs validos para `activeSport` sao definidos em `SportsSidebar.data.ts`:

| ID | Nome exibido | Competicoes exemplo |
|---|---|---|
| `football` | Football | Champions League, Brasileirao, Premier League |
| `basketball` | Basketball | NBA, NBB, EuroLeague |
| `tennis` | Tennis | ATP Masters, Grand Slam, WTA Tour |
| `volleyball` | Volleyball | VNL, FIVB World Cup |
| `esports` | E-Sports | CS2 Major, LoL Worlds, VALORANT Champions |
| `american-football` | Am. Football | NFL, Super Bowl |
| `baseball` | Baseball | MLB, World Series |
| `hockey` | Hockey | NHL, KHL |

O `TodayMatches` filtra usando o campo `sport` dos objetos `Match` em `TodayMatches.data.ts`, que deve usar os mesmos IDs.
