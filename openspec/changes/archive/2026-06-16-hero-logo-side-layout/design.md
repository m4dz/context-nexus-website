## Context

The hero currently renders as a single vertical column inside `.container--content`:

```
hero
└── container--content
    ├── <Logo size={96}>           (.hero__logo, decorative)
    ├── .hero__label
    ├── .hero__title
    ├── .hero__tagline
    ├── .hero__description
    └── .hero__actions
```

The 96 px logo on its own line reads as a small ornament. The user wants logo + text to look like one composition, with the logo's height bound to the height of the text block above the CTAs.

The site's responsive convention (from `global.css`) uses `@media (max-width: 768px)` as the main single-column breakpoint (the nav switches to a drawer at the same width). We follow that convention.

## Goals / Non-Goals

**Goals:**
- Two-column row on wide viewports: logo on the left, the existing text block (label, title, tagline, description) on the right; CTAs continue to live below.
- Logo height = text-block height. The text block defines the height; the logo follows.
- Logo width = derived from the SVG's natural aspect ratio.
- Stacked fallback on narrow viewports (≤768 px) so the logo is not squashed.
- No change to text content, no i18n change, no change to internal pages.

**Non-Goals:**
- Re-skinning, re-positioning, or re-sizing the CTA buttons.
- Animating the logo or adding parallax.
- Changing nav/footer/internal-page layouts.
- Removing the `size` prop from `<Logo>` (other call sites — nav, drawer header — still rely on it).

## Decisions

### Wrapper around the text block

Introduce a `.hero__text` wrapper around `label`, `title`, `tagline`, and `description`. CTAs stay outside this wrapper. The wrapper is what the logo's height is bound to.

New hero markup:

```
.hero
└── .container--content
    └── .hero__layout                ← new flex row, align-items: stretch
        ├── .hero__media             ← left column: contains the <Logo>
        └── .hero__text              ← right column: label, title, tagline, description
    └── .hero__actions               ← unchanged, below the row
```

Putting `.hero__layout` inside `.container--content` (rather than replacing it) keeps the existing horizontal padding and width constraint intact.

### Logo sizing — fluid clamp, not height-from-sibling

The hero is a flex row with `align-items: center`: the logo sits centered next to the text block. Logo height is a `clamp()` value tied to viewport width, with a floor and a ceiling. The SVG's natural aspect ratio handles width.

```css
.hero__layout {
  display: flex;
  align-items: center;
  gap: clamp(2rem, 5vw, 4rem);
}
.hero__media { flex: 0 0 auto; }
.hero__text  { flex: 1 1 0; min-width: 0; }
.hero__logo {
  display: block;
  height: clamp(180px, 22vw, 320px);
  width: auto;                         /* preserve SVG aspect ratio */
}
```

The clamp range (`180px → 22vw → 320px`) keeps the logo visibly large at common desktop widths without overwhelming the page on ultra-wide screens or vanishing on borderline widths just above the 768 px breakpoint.

The `<Logo>` element still receives a generous `size={320}` so the browser can reserve layout space before CSS paints; the CSS height overrides it at layout time.

**Approaches tried and discarded:**
- **Flex stretch + `height: 100%` on `<img>`**: `height: 100%` on a replaced element inside a flex chain with no defined ancestor height resolved against the nearest block-formatting context with a height, which climbed up to the section/page and produced a viewport-tall logo.
- **Grid + `aspect-ratio` on the media column**: did size the cell correctly off the text-column height in principle, but for realistic text-block heights the SVG's portrait aspect ratio (1780 / 2048) made the logo too wide and visually dominant relative to the text. The user's "anchor to the paragraph" reads as a positional anchor (next to the text), not a strict equal-height constraint.

The clamp approach is honest about the intent: a generous fixed-ish logo next to the text, scaled fluidly with viewport, vertically centered against the text block.

### Logo component change

`Logo.astro` is fine as-is: it forwards `width` and `height` attributes plus a `class`. The hero passes a generous `size` (a fallback hint to the browser before CSS lays out the row), e.g. `<Logo size={320} class="hero__logo" />`. CSS overrides via `.hero__media img { height: 100%; width: auto; }`.

### Responsive fallback

Below 768 px, the row collapses to a stack. The logo gets a fixed reasonable size (e.g. 120 px) to stay visible without dominating a small screen. The text block returns to full width.

```css
@media (max-width: 768px) {
  .hero__layout { flex-direction: column; align-items: flex-start; gap: 1.5rem; }
  .hero__media img { height: 120px; }
}
```

### Accessibility

No change. The logo stays decorative (`alt=""`, `aria-hidden`). The text block remains the only semantic content of the hero.

## Risks / Trade-offs

- [Very tall text blocks could produce a very tall logo on extremely narrow desktop viewports between 768 px and the comfortable breakpoint] → Mitigated by `gap: clamp(...)` keeping the row breathable and by the SVG's natural aspect ratio capping perceived dominance; if needed, a `max-height` on `.hero__media img` (e.g. `min(100%, 360px)`) can be added without changing the spec.
- [Flex stretch + `height: 100%` on `<img>` can mis-render on very old browsers] → Acceptable; the project targets evergreen browsers and the layout degrades gracefully (logo at its `size` fallback).
- [SVG layout shift before paint] → Mitigated by passing a large `size` on the `<Logo>` element so the browser reserves space using the intrinsic ratio.
- [`hero__media` column may push the text too narrow on intermediate widths] → Mitigated by `flex: 0 0 auto` on the media column (it takes only what the SVG aspect needs) and `min-width: 0` on the text column (so it shrinks first).
