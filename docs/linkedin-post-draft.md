# LinkedIn Post Draft

## Diagram (copy-paste friendly)

```
┌─────────────────────────────────────────────────────────┐
│                    PACKAGES — shared core               │
│                                                         │
│  ┌──────────────────┐  ┌──────────────────┐            │
│  │ config-schema    │→ │  theme-engine    │            │
│  │ Zod · TS types   │  │  CSS vars        │            │
│  └──────────────────┘  └──────────────────┘            │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │              @openbet/ui                        │   │
│  │  OddsButton · MatchCard · BetSlip               │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  clients/ — grandbet.json · elitebet.json       │   │
│  │  brand · theme · features · layout              │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│                      APPS — runtime                     │
│                                                         │
│  ┌─────────────────┐  ←MF 2.0→  ┌──────────────────┐  │
│  │   apps/shell    │ ←Events──  │ apps/sportsbook  │  │
│  │   MF Host       │            │ MF Remote        │  │
│  │   Next.js 16    │            │ Next.js 16       │  │
│  │   port 3000     │            │ port 3001        │  │
│  └─────────────────┘            └──────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

---

## Post text (PT-BR)

Construí um framework open source de apostas esportivas white-label.

Um único codebase. N operadores. Zero código condicional por cliente.

A tese de arquitetura:

→ Operadores são diferenciados exclusivamente via JSON de configuração + CSS Custom Properties
→ Adicionar um novo operador = criar um arquivo JSON
→ Sem forks. Sem builds customizados. Sem if (client === 'grandbet')

Stack:
• Turborepo + pnpm workspaces
• Next.js 16 + React 19
• Module Federation 2.0 (shell ↔ sportsbook como micro-frontends independentes)
• Zod para validação de schema em runtime
• Storybook 8 com ThemeDecorator (mesmo componente, temas diferentes)

O que aprendi construindo isso:
• Module Federation com Next.js 16 App Router é mais complexo do que parece — documentei 6 ADRs com as decisões
• CSS Custom Properties como "contrato de tema" entre shell e remote elimina a necessidade de qualquer comunicação entre eles
• Custom Events (não Context compartilhado) é a única forma confiável de comunicação cross-MF

GitHub: https://github.com/LucasReisVillasBoas/openbet-core
Demo: https://openbet-core-shell.vercel.app

#react #nextjs #modulefederation #microfrontends #typescript #opensource

---

## Post text (EN)

I built an open-source white-label sports betting platform framework.

One codebase. N operator brands. Zero conditional code per client.

The architecture thesis:

→ Operators are differentiated exclusively via ClientConfig JSON + CSS Custom Properties
→ Adding a new operator = creating a JSON file
→ No forks. No custom builds. No if (client === 'grandbet')

Stack:
• Turborepo + pnpm workspaces
• Next.js 16 + React 19
• Module Federation 2.0 (shell ↔ sportsbook as independent micro-frontends)
• Zod for runtime schema validation
• Storybook 8 with ThemeDecorator (same component, different themes)

What I learned building this:
• Module Federation with Next.js 16 App Router is harder than it looks — documented 6 ADRs with all the decisions
• CSS Custom Properties as a "theme contract" between shell and remote eliminates any need for communication between them
• Custom Events (not shared Context) is the only reliable way to do cross-MF communication

GitHub: https://github.com/LucasReisVillasBoas/openbet-core
Demo: https://openbet-core-shell.vercel.app

#react #nextjs #modulefederation #microfrontends #typescript #opensource
