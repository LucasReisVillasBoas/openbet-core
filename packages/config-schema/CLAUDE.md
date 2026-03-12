# @openbet/config-schema

## Propósito
Fonte única de verdade de tudo que um operador pode configurar.
Define o contrato entre operadores e a plataforma.

## Exports
- ClientConfigSchema → Zod schema para validação em runtime
- ClientConfig → TypeScript type via z.infer
- ThemeColors, ThemeLayout, ThemeFeatures, BrandConfig, RegionalConfig
- validateClientConfig(data: unknown) → utilitário de validação

## Regras deste pacote
- Dependência permitida: APENAS zod
- Proibido: React, DOM, Next.js, qualquer lib de UI
- Proibido: lógica de aplicação, acesso ao DOM, side effects
- É um pacote puro de definição de tipos e validação

## Schema atual
- BrandSchema: id, name, slug, tagline, logoUrl, faviconUrl, supportEmail
- ThemeColorsSchema: 14 tokens semânticos de cor (todos hex #RRGGBB)
- TypographySchema: fontFamily, fontFamilyMono, scaleBase
- ThemeSchema: colors, typography, borderRadius, darkMode
- LayoutSchema: sidebarPosition, sidebarBehavior, headerVariant,
  footerVariant, betslipPosition, mobileNav
- FeaturesSchema: 12 feature flags com defaults conservadores
- RegionalSchema: defaultLocale, defaultCurrency, defaultTimezone,
  oddsFormat, dateFormat
- ClientConfigSchema: raiz com todos os schemas acima

## Como alterar o schema
1. Adicionar campo no schema.ts com tipo e default
2. Atualizar types.ts se necessário
3. Atualizar clients/*.config.json para incluir o novo campo
4. Rodar pnpm build e revalidar os configs
5. Documentar a mudança neste CLAUDE.md
