## 1. Hero markup restructure

- [x] 1.1 In `src/pages/[lang]/index.astro`, wrap the `<Logo>` element in a `<div class="hero__media">` and group `hero__label`, `hero__title`, `hero__tagline`, and `hero__description` inside a new `<div class="hero__text">`. Then wrap both `hero__media` and `hero__text` inside a single `<div class="hero__layout">`. Leave `hero__actions` outside `hero__layout`, directly inside `container--content`
- [x] 1.2 Update the `<Logo>` call inside `hero__media` to pass a generous fallback size (e.g. `size={320}`) so the browser reserves layout space before CSS applies. Keep `class="hero__logo"` and `aria-hidden="true"`

## 2. CSS — wide-viewport row

- [x] 2.1 In `src/styles/global.css`, replace the existing `.hero__logo` rule with: `display: block; height: 100%; width: auto; max-height: 100%;`
- [x] 2.2 Add a `.hero__layout` rule: `display: flex; align-items: stretch; gap: clamp(2rem, 5vw, 4rem); margin-bottom: 1.5rem;`
- [x] 2.3 Add a `.hero__media` rule: `flex: 0 0 auto; display: flex; align-items: center;`
- [x] 2.4 Add a `.hero__text` rule: `flex: 1 1 0; min-width: 0; display: flex; flex-direction: column; justify-content: center;`

## 3. CSS — narrow-viewport stack

- [x] 3.1 Inside the existing `@media (max-width: 768px)` block in `src/styles/global.css`, add overrides: `.hero__layout { flex-direction: column; align-items: flex-start; gap: 1.5rem; }` and `.hero__media img, .hero__logo { height: 120px; width: auto; }`

## 4. Verification

- [x] 4.1 Run `npm run build` and confirm both locales build with no errors
- [ ] 4.2 Run `npm run dev` and visually inspect `/en` and `/fr` at desktop width (>768 px): logo sits to the left of the text, its height equals the text block (label through description), CTAs sit below; check that toggling theme does not change the layout
- [ ] 4.3 Visually inspect the same pages at narrow width (≤768 px): logo appears above the text at ~120 px tall, layout reads naturally
