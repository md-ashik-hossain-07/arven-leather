# ARVEN Leather

Production frontend foundation for ARVEN Leather, a premium leather lifestyle brand from Bangladesh.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- shadcn/ui conventions
- Framer Motion
- Lucide Icons

## Architecture

- `src/app` keeps App Router layouts, global styles, SEO routes, and future route segments.
- `src/components/ui` contains shadcn-style reusable primitives.
- `src/components/layout` contains page and shell layout primitives.
- `src/components/common` contains shared client-safe components.
- `src/config` stores site and SEO configuration.
- `src/constants` stores brand, category, and design-token constants.
- `src/lib` stores framework-agnostic helpers.
- `src/types` stores shared TypeScript contracts.

## Commands

- `pnpm install`
- `pnpm dev`
- `pnpm lint`
- `pnpm typecheck`
- `pnpm build`

No storefront pages have been created yet. Future features should extend the existing folders and design tokens instead of introducing parallel systems.
