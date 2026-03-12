Crie um novo componente React em packages/ui seguindo o padrão:

Componente: $ARGUMENTS

Arquivos a criar:
1. packages/ui/src/components/$ARGUMENTS/$ARGUMENTS.tsx
   - Props tipadas via interface $ArgumentsProps
   - Usa APENAS CSS Custom Properties para cores (var(--color-*))
   - Nunca hardcode cor, tamanho ou fonte
   - Exporta o componente como default e named export

2. packages/ui/src/components/$ARGUMENTS/$ARGUMENTS.stories.tsx
   - Story para CADA estado do componente
   - Usa ThemeDecorator para aplicar tema
   - Inclui stories com tema alpha E tema beta

3. packages/ui/src/components/$ARGUMENTS/index.ts
   - Barrel export do componente e dos tipos

4. Atualizar packages/ui/src/index.ts
   - Adicionar export do novo componente

Após criar, confirme que:
- Zero hardcode de cor
- Todas as stories cobrem todos os estados
- O componente muda visualmente ao trocar o tema
