## ADDED Requirements

### Requirement: Context Nexus logo is shipped as a static SVG and reusable component
The site SHALL ship the Context Nexus logo as `public/context-nexus-logo.svg` and expose it through a `Logo` Astro component that renders an `<img>` referencing that asset. The component SHALL accept a numeric `size` prop (pixels), expressed equally on `width` and `height`, and an optional `class` prop merged into the rendered element.

#### Scenario: Component renders the static asset
- **WHEN** a page renders `<Logo size={24} />`
- **THEN** the output contains `<img src="/context-nexus-logo.svg" width="24" height="24" …>`

#### Scenario: Logo is decorative by default
- **WHEN** `<Logo />` is rendered without an explicit `alt` prop
- **THEN** the `<img>` has `alt=""` so assistive technology treats it as presentational

### Requirement: Zenika monogramme is shipped as a themeable inline SVG component
The site SHALL provide a `ZenikaLogo` Astro component that inlines the Zenika monogramme SVG with `fill="currentColor"` on every path, so the icon takes its color from the surrounding text color. The corresponding raw asset SHALL also be available at `public/zenika-monogramme.svg`. The component SHALL accept a numeric `size` prop (pixels) and an optional `class` prop.

#### Scenario: Icon follows the parent text color
- **WHEN** `<ZenikaLogo />` is placed inside an element whose `color` is `#fff`
- **THEN** the rendered SVG paints in white

#### Scenario: Icon adapts to the light theme without serving a different asset
- **WHEN** `[data-theme="light"]` is set on the document and a `<ZenikaLogo />` lives inside the footer link
- **THEN** the icon paints in the link's resolved color for the light theme, without loading a second asset

#### Scenario: Aspect ratio is preserved
- **WHEN** `<ZenikaLogo size={20} />` is rendered
- **THEN** the SVG's `viewBox` is preserved and both `width` and `height` attributes are `20`

### Requirement: Context Nexus logo appears on the homepage hero
The homepage hero SHALL render the Context Nexus logo above the `hero__label`, as a decorative element (`aria-hidden="true"`), at a visibly larger size than the navigation logo.

#### Scenario: Hero composition
- **WHEN** the homepage is built for either locale
- **THEN** a `<Logo>` element is rendered above the `hero__label` element with `aria-hidden="true"` and a size strictly greater than the nav logo size
