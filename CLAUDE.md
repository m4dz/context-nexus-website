# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start local dev server (localhost:4321)
npm run build    # Production build → dist/
npm run preview  # Serve the built dist/ locally
```

There are no tests, no linting, and no formatting tools configured.

## Architecture

**Astro 5.8 static site** — every page is compiled to HTML at build time. No server runtime.

### i18n routing

All content pages live under `src/pages/[lang]/` and are served at `/en/…` and `/fr/…`. The root `src/pages/index.astro` does a client-side redirect based on `navigator.language`.

Every `[lang]` page must export `getStaticPaths` returning both locales:

```ts
export function getStaticPaths() {
  return [{ params: { lang: 'en' } }, { params: { lang: 'fr' } }]
}
```

All user-visible strings live in `src/i18n/en.ts` and `src/i18n/fr.ts` — never hardcode text in `.astro` files. Access them via:

```ts
import { useTranslations, type Lang } from '../../i18n'
const t = useTranslations(lang)
```

`src/i18n/index.ts` also exports `getOtherLang(lang)` and `localePath(lang, path)` for building language-aware links.

### Pages & layout

- `src/layouts/Layout.astro` — master shell: `<head>` with fonts, `data-theme` toggle (persisted to `localStorage`), Matomo analytics, `<Nav>`, `<Footer>`.
- Pages import `Layout` and pass `lang`, `title`, `description` props.
- Inner pages add a breadcrumb and a colored page-header bar whose color matches the register they document.

### Register system

The four registers (knowledge, intent, contracts, operations) are a conceptual framework central to the site's content. Each has an assigned accent color used consistently across components:

| Register    | CSS variable             | Hex      |
|-------------|--------------------------|----------|
| knowledge   | `--color-knowledge`      | #60A5FA  |
| intent      | `--color-intent`         | #34D399  |
| contracts   | `--color-contracts`      | #FBBF24  |
| operations  | `--color-operations`     | #F87171  |

Components like `<RegisterCard>`, `<RegisterChip>`, and `<CrossRefStrip>` accept a `register` prop typed as `'knowledge' | 'intent' | 'contracts' | 'operations'` and apply the appropriate color.

### Design system

All styling is plain CSS in `src/styles/global.css` (~1 000 lines). No Tailwind, no CSS modules.

- **Themes:** Dark by default. Light theme activated by `[data-theme="light"]` on `<html>`. The toggle is in `Layout.astro`.
- **CSS variables** define the full design token set (colors, spacing `--gap` / `--gap-lg`, typography, borders).
- **Typography:** Inter (sans-serif), JetBrains Mono (monospace), loaded from Google Fonts in `Layout.astro`.
- **Grid:** Responsive 4-column grid that collapses to 2 → 1 at breakpoints.

### Deployment

CI (`/.github/workflows/deploy.yml`) builds on push to `main` and deploys `dist/` via rsync over SSH. Required repository secrets: `SSH_PRIVATE_KEY`, `SSH_USER`, `SSH_HOST`, `SSH_TARGET_DIR`, and optionally `SSH_PORT` (defaults to 22).
