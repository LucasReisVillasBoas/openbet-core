Crie um novo pacote no monorepo seguindo o padrão:

Pacote: $ARGUMENTS

1. Crie packages/$ARGUMENTS/ com estrutura padrão:
   - package.json com name @openbet/$ARGUMENTS
   - tsconfig.json estendendo ../../tsconfig.base.json
   - src/index.ts como ponto de entrada
   - CLAUDE.md documentando propósito, exports e regras

2. package.json deve ter:
   - exports field com import e types
   - scripts: build (tsc), dev (tsc --watch), clean (rm -rf dist)
   - devDependencies: typescript

3. Adicione o pacote ao turbo.json se precisar de pipeline especial

4. Rode pnpm install na raiz para linkar o novo pacote

5. Rode pnpm build para confirmar que builda sem erros

6. Documente no CLAUDE.md raiz que o pacote existe
   (seção "Estrutura do monorepo")
