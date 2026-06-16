## 1. Assets

- [x] 1.1 Copy `~/Downloads/context-nexus-logo.svg` into `public/context-nexus-logo.svg` verbatim
- [~] 1.2 ~~Replace `public/favicon.svg` with the Context Nexus mark~~ — deferred: existing favicon stays; user will supply a favicon-sized rendering of the new logo separately
- [x] 1.3 Copy `~/Downloads/Monogramme logo Zenika Blanc.svg` into `public/zenika-monogramme.svg` and rewrite it to use `fill="currentColor"` on each `<path>` (strip the `<defs><style>` block and the `class="cls-1"` attributes)

## 2. Components

- [x] 2.1 Create `src/components/Logo.astro` that renders `<img src="/context-nexus-logo.svg" width={size} height={size} alt={alt ?? ''} class={class}>` from props `{ size?: number = 24, alt?: string, class?: string }`
- [x] 2.2 Create `src/components/ZenikaLogo.astro` that inlines the cleaned Zenika SVG with `fill="currentColor"`, accepts `{ size?: number = 18, class?: string }`, preserves the original `viewBox`, and sets `width` / `height` from the prop

## 3. i18n split

- [x] 3.1 In `src/i18n/en.ts`, replace `footer.copy` with `footer.copyBefore: '© 2026 Context Nexus · A framework imagined at '` and `footer.copyAfter: ' · Not an official product.'`
- [x] 3.2 In `src/i18n/fr.ts`, replace `footer.copy` with `footer.copyBefore: '© 2026 Context Nexus · Un framework inspiré chez '` and `footer.copyAfter: ', produit non-officiel.'`

## 4. Nav

- [x] 4.1 In `src/components/Nav.astro`, import `Logo` and replace the `<span class="nav__logo-dot">` inside both `nav__logo` occurrences (top bar and drawer header) with `<Logo size={24} />`
- [x] 4.2 In `src/styles/global.css`, remove the `.nav__logo-dot` rule and add a `.nav__logo img` rule that aligns the logo vertically with the wordmark

## 5. Footer

- [x] 5.1 In `src/components/Footer.astro`, import `ZenikaLogo` and render the copy as `{t.footer.copyBefore}<a class="footer__zenika" href="https://zenika.com" target="_blank" rel="noopener" aria-label="Zenika"><ZenikaLogo /></a>{t.footer.copyAfter}`
- [x] 5.2 In `src/styles/global.css`, add `.footer__zenika` rules: `display: inline-flex; vertical-align: -0.25em; color: inherit;` plus a hover affordance (e.g. `opacity` transition)

## 6. Homepage hero

- [x] 6.1 In `src/pages/[lang]/index.astro`, import `Logo` and render `<Logo size={96} class="hero__logo" aria-hidden="true" />` directly above `<div class="hero__label">…</div>`
- [x] 6.2 In `src/styles/global.css`, add `.hero__logo` rules giving the mark its hero margin (e.g. `display: block; margin: 0 auto 1.5rem;` or left-aligned to match the hero text alignment)

## 7. Verification

- [x] 7.1 Run `npm run build` — confirm both locales build with no TypeScript errors after the i18n split
- [ ] 7.2 Run `npm run dev` and visually check: nav (desktop + drawer), homepage hero, footer, and theme toggle (dark ↔ light) on both `/en` and `/fr`
- [ ] 7.3 Confirm the Zenika icon is visible against the footer background in both themes and that the link opens `https://zenika.com` in a new tab
