Revise os arquivos modificados na sessão atual e verifique
se alguma das regras invioláveis do CLAUDE.md foi violada:

1. Existe hardcode de cor em algum componente?
   (procure por hex #, rgb(), hsl() fora de config files)

2. Algum packages/* importa de apps/*?
   (verifica imports nos arquivos de packages/)

3. ClientConfig está sendo usado sem validação Zod?
   (verifica se há uso direto sem safeParse ou parse)

4. URLs de remotes MF estão hardcoded?
   (procura por strings de URL em rspack.config ou next.config)

5. Algum componente novo não tem stories?
   (verifica se existe .stories.tsx para cada .tsx novo)

6. config-schema tem dependência além de zod?
   (verifica package.json do pacote)

7. theme-engine tem dependência além de @openbet/config-schema?
   (verifica package.json do pacote)

Para cada violação encontrada:
- Aponte o arquivo e linha exata
- Explique qual regra foi violada
- Proponha a correção antes de aplicar
