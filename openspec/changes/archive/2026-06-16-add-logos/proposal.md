## Why

The site currently brands itself only through a text wordmark ("Context Nexus") next to a colored dot, and references Zenika as plain text in the footer copy. Both partners now have artwork (the Context Nexus mark, and the Zenika monogram) and using them gives the site a recognizable visual identity in the nav and a clearer attribution to Zenika in the footer.

## What Changes

- Add the Context Nexus logo as a reusable component (`<Logo>`) and ship its SVG as a static asset.
- Replace the `nav__logo-dot` + wordmark in `Nav.astro` (desktop bar and mobile drawer header) with the logo mark + wordmark.
- Use the same logo as a prominent element in the homepage hero (above the `hero__label`).
- Add the Zenika monogram as a reusable component (`<ZenikaLogo>`) and ship its SVG as a static asset.
- Refactor `Footer.astro` so the literal "Zenika" inside `t.footer.copy` is replaced by the Zenika monogram wrapped in `<a href="https://zenika.com" rel="noopener" target="_blank">`. Footer copy strings are split into the surrounding fragments so the markup can sit inline.
- The Zenika monogram SVG is rewritten to use `currentColor` so the same file works in both dark and light themes (white on dark, dark on light) without serving two assets.

## Capabilities

### New Capabilities
- `branding`: how the Context Nexus and Zenika logos are stored, themed (light/dark), and surfaced across the site (nav, homepage, footer, favicon).

### Modified Capabilities
- `page-layout`: the `Nav` requirement that defines the nav contents and drawer header, and the `Footer` requirement that defines the footer composition, both change to incorporate the logos and the Zenika link.

## Impact

- Affected components: `src/components/Nav.astro`, `src/components/Footer.astro`, `src/pages/[lang]/index.astro`.
- New components: `src/components/Logo.astro`, `src/components/ZenikaLogo.astro`.
- New assets: `public/context-nexus-logo.svg`, `public/zenika-monogramme.svg`.
- Affected i18n: `src/i18n/en.ts` and `src/i18n/fr.ts` — `footer.copy` is split into two fragments (`footerCopyBefore`, `footerCopyAfter`) bracketing the Zenika logo link.
- Affected styles: `src/styles/global.css` — `.nav__logo-dot` rule retired; new `.logo`, `.footer__zenika` rules added; logo sizing tokens.
- Affected specs: `page-layout/spec.md` (Nav and Footer requirements).
