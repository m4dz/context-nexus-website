## Why

The current homepage hero stacks a 96 px Context Nexus logo above the text. The logo reads as a small decoration disconnected from the headline. We want a stronger, more deliberate composition: the logo on the left, paired with the text block on the right, with the logo height bound to the height of the headline block so the two feel like a single, balanced unit. As the text reflows, the logo follows.

## What Changes

- Restructure the homepage hero from a vertical stack (logo → label → title → tagline → description → actions) into a two-column row on wide viewports: logo on the left, the existing text block on the right.
- The logo SHALL scale to match the height of the text block (label + title + tagline + description, excluding the CTA buttons). Width is derived from the SVG's natural aspect ratio.
- The current 96 px `<Logo size={96}>` is no longer authoritative; the logo is sized by CSS, not by the `size` prop. We render the image with intrinsic sizing and let a wrapper element constrain its height.
- On narrow viewports (single-column layout breakpoint, ≤768 px) the hero falls back to the existing stacked composition with a sensible default logo size, so the row layout never collapses into something cramped.

## Capabilities

### New Capabilities
- *(none — no new capability surface; this is purely a visual rearrangement)*

### Modified Capabilities
- `branding`: the requirement that pins the hero logo to a fixed 96 px decoration is replaced by a requirement that binds the logo to the text-block height with a side-by-side layout (collapsing to a stacked layout on narrow viewports).

## Impact

- Affected components: `src/pages/[lang]/index.astro` (hero markup gets a wrapper splitting logo from text), `src/components/Logo.astro` (must accept rendering at intrinsic dimensions without forcing a fixed pixel size).
- Affected styles: `src/styles/global.css` — new flex rules on `.hero .container--content`, updated `.hero__logo`, an inner wrapper class for the text column, and a responsive override for the single-column breakpoint.
- Affected specs: `branding/spec.md` (hero requirement).
- No i18n change. No other pages affected — internal pages keep their existing layout.
