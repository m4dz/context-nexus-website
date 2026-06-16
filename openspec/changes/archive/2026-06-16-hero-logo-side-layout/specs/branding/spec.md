## MODIFIED Requirements

### Requirement: Context Nexus logo appears on the homepage hero
The homepage hero SHALL render the Context Nexus logo as a decorative element (`aria-hidden="true"`) in a two-column row alongside the hero text block on wide viewports, with the logo placed to the left of the text and vertically centered against the text block. The logo's height SHALL be a fluid value that scales between a small floor and a generous ceiling with viewport width, and its width SHALL follow the SVG's natural aspect ratio. On narrow viewports (≤768 px) the row SHALL collapse into a stacked layout (logo on top, text below) with a sensible fixed logo height that keeps the hero usable on small screens.

#### Scenario: Wide-viewport composition
- **WHEN** the homepage is rendered at a viewport width above 768 px in either locale
- **THEN** the hero contains a row element placing a `<Logo>` to the left of the text block (label, title, tagline, description), the `<Logo>` is marked `aria-hidden="true"`, and the logo is vertically centered against the text block

#### Scenario: Logo height scales with viewport
- **WHEN** the wide-viewport hero is rendered at different widths above 768 px
- **THEN** the rendered logo height grows or shrinks smoothly within a defined floor and ceiling (so the logo neither vanishes on borderline widths nor dominates the hero on very wide screens)

#### Scenario: Narrow-viewport fallback
- **WHEN** the homepage is rendered at a viewport width of 768 px or less
- **THEN** the logo stacks above the text block at a fixed, visually reasonable height (logo on top, text underneath), instead of staying in a side-by-side row

#### Scenario: CTAs remain below the row
- **WHEN** the hero is rendered at any viewport
- **THEN** the CTA buttons (`hero__actions`) are placed below the logo/text row, not inside it

#### Scenario: Logo stays larger than the nav logo
- **WHEN** the hero is rendered at any viewport
- **THEN** the rendered logo is visibly larger than the navigation logo (which is 24 px tall)
