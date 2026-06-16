## Context

The site is brand-led: it presents Context Nexus (a framework imagined at Zenika) and uses register colors as a visual anchor. Until now the only branding element was the colored dot in the nav and the text wordmark "Context Nexus". The user has supplied two final logo files (Context Nexus, ~60 KB multi-gradient mark; and the Zenika monogramme in white). Both need to land on the site, with the Zenika mark also serving as a link to `https://zenika.com` from inside the footer copy.

The site is Astro 5.8 static — no runtime — and uses plain CSS (`src/styles/global.css`, ~1 000 lines) with a `data-theme` attribute toggled by JS. The dark theme is the default; light is opt-in.

## Goals / Non-Goals

**Goals:**
- One reusable component per logo, each accepting `size` / `class` / a11y props.
- Same logo asset works in both themes. The Context Nexus mark keeps its purple gradients in both themes (it is a brand asset and the gradients are part of its identity). The Zenika monogramme is monochrome, so it adapts via `currentColor`.
- Logos travel as static SVG assets under `public/`, referenced via plain `<img src="…" />` for the Context Nexus mark (gradients survive embedding) and inlined for the Zenika monogramme (so `currentColor` can be driven by CSS).
- Footer reads naturally in both English and French even though "Zenika" is now an image-link in the middle of a sentence.
- The change is reversible and additive — no removal of i18n keys, no API surface change, and no impact on existing pages beyond the nav, the homepage hero, and the footer.

**Non-Goals:**
- Adding a logo to every page header. The Context Nexus mark goes only where it adds value: nav (everywhere), drawer header, homepage hero, favicon. Internal pages keep their existing colored-bar header.
- Animating the logo or providing a "compact / expanded" variant. One size in nav, one larger size in hero.
- Producing a brand-guidelines page or a "press kit" download.

## Decisions

### Two delivery strategies (one per logo)

The Context Nexus mark is a multi-gradient SVG referencing `<defs>` with `linearGradient`s. Inlining each instance multiple times would either duplicate the (long) gradient definitions or risk gradient-id collisions across the page. We render it via `<img src="/context-nexus-logo.svg" alt="…">`. Drawback: we cannot recolor it with CSS — but we do not need to, since the logo keeps its gradient palette in both themes.

The Zenika monogramme is a small monochrome SVG (~870 bytes, two paths) using a CSS class with `fill:#fff`. We inline it inside `<ZenikaLogo>` and rewrite the paths to use `fill="currentColor"`. The component then takes its color from the CSS `color` property of its parent (a `.footer__zenika` link), which we set per theme.

**Alternative considered:** ship two assets (`zenika-white.svg` and `zenika-dark.svg`) and pick one per theme via CSS. Rejected: needs two HTTP requests if both themes are reachable in one session (e.g. the user toggles), and the inline path is simpler.

### Footer copy splitting

`t.footer.copy` is a single sentence containing the word "Zenika". To put a `<a><ZenikaLogo /></a>` inline, we split the locale value into two keys:

- `footer.copyBefore` — everything up to and including the word that precedes "Zenika" (e.g. `"© 2026 Context Nexus · A framework imagined at "`)
- `footer.copyAfter` — everything after "Zenika" (e.g. `" · Not an official product."`)

`Footer.astro` then renders:

```jsx
<p class="footer__copy">
  {t.footer.copyBefore}
  <a class="footer__zenika" href="https://zenika.com" target="_blank" rel="noopener" aria-label="Zenika">
    <ZenikaLogo />
  </a>
  {t.footer.copyAfter}
</p>
```

**Alternative considered:** keep `footer.copy` and parse a placeholder (e.g. `{ZENIKA}`) at render. Rejected: the parsing step is more code than the split, and the i18n type system has no native interpolation here.

### Where the Context Nexus mark appears

| Location | Treatment |
|----------|-----------|
| Nav bar (desktop and drawer header) | Logo mark (24 px) + existing "Context Nexus" wordmark, both inside the existing `nav__logo` anchor |
| Homepage hero (above `hero__label`) | Logo mark only, large (~96 px) |
| Favicon | `public/favicon.svg` replaced by the Context Nexus mark |
| Internal pages | No change. The existing `page-header` colored bar carries the page identity |

The hero already shows the wordmark "Context Nexus" as `<h1>`. The logo sits above it as a decorative graphic (`role="presentation"` so AT tools don't read it as redundant).

### Accessibility

- Nav logo `<a>` keeps its visible text "Context Nexus" — image is decorative (`alt=""`).
- Hero logo is decorative — `aria-hidden="true"` / `role="presentation"`.
- Footer Zenika link has `aria-label="Zenika"` because the visible content is an icon; the link points to `https://zenika.com` and opens in a new tab (`target="_blank" rel="noopener"`).
- Favicon: SVG with no semantic concern.

### CSS surface

- Retire `.nav__logo-dot` (no markup left).
- New `.logo` utility: `display: inline-flex; align-items: center;` with size driven by an inline `width`/`height` for the image.
- New `.footer__zenika` rule: sets `color` to the surrounding paragraph color in each theme, sets icon dimensions (~16–20 px height), and provides hover affordance (e.g. a subtle opacity change).
- New `.hero__logo` rule for the large homepage mark.

## Risks / Trade-offs

- [Context Nexus mark cannot recolor in light theme] → Mitigated by keeping the same gradient palette in both themes; the mark is purple-on-anything, and contrast against the light-theme background remains acceptable (the gradients are mid-tone purples, not white).
- [SVG file is ~60 KB] → Acceptable for a static-site brand asset; served as a static file and cached by the browser. We do not inline it in HTML.
- [Splitting `footer.copy` is a small breaking change to the i18n shape] → Mitigated by updating both locale files in the same PR and by treating it as additive (no key remains named `copy`; both locales gain `copyBefore` / `copyAfter`). Detected by TypeScript at build because translations are typed `as const`.
- [Inline SVG with `currentColor` and `<defs>`-style classes lose their CSS] → The Zenika SVG ships a `<style>` block with `.cls-1{fill:#fff;}`. We strip both `<defs><style>…</style></defs>` and `class="cls-1"`, replacing them with `fill="currentColor"` on each `<path>`. The component owns the cleaned-up SVG verbatim.
- [Light-theme adaptation forgotten in some surface] → The Zenika monogramme always inherits `color` from its parent text; the parent already uses `var(--text-muted)` (footer copy) so the icon automatically follows the theme without theme-specific overrides.
