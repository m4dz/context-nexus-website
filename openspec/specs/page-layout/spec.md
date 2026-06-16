# page-layout

## Purpose

Defines the master shell wrapping every content page: HTML head, navigation, footer, and the cross-cutting concerns rendered alongside page content (analytics, fonts, language attribute).

## Requirements

### Requirement: Every content page renders through the master layout
Every content page SHALL render its content inside the `Layout` component, passing the active `lang` plus a page-specific `title` and (optional) `description`.

#### Scenario: Page renders
- **WHEN** a content page is built
- **THEN** its HTML is wrapped by `Layout.astro`, which provides `<html>`, `<head>`, `<Nav>`, the `<main>` slot, and `<Footer>`

#### Scenario: HTML language attribute
- **WHEN** `Layout` renders with `lang='fr'`
- **THEN** the root `<html>` element has `lang="fr"`; with `lang='en'` it has `lang="en"`

### Requirement: Document head exposes title, description, and favicon
The layout SHALL set the document title from the `title` prop, set the meta description from the `description` prop (falling back to the locale's site description), and link the shared favicon.

#### Scenario: Page provides a description
- **WHEN** a page passes a `description` prop
- **THEN** `<meta name="description">` uses that string

#### Scenario: Page omits description
- **WHEN** a page does not pass a `description` prop
- **THEN** `<meta name="description">` uses `t.site.description` for the active locale

#### Scenario: Favicon
- **WHEN** any page is served
- **THEN** the head links `/favicon.svg` as the SVG favicon

### Requirement: Navigation is rendered on every page
The layout SHALL render the `Nav` component at the top of every page, passing the active `lang`.

#### Scenario: Nav contents
- **WHEN** the nav is rendered
- **THEN** it provides links to Home, Concepts, Registers (with submenu), Implementation, Example, a language switcher, and a theme toggle

#### Scenario: Active page indicator
- **WHEN** the visitor is on a page whose URL matches a nav target
- **THEN** the matching link is marked with `aria-current="page"`

#### Scenario: Language switcher preserves path
- **WHEN** the visitor activates the language switcher on `/<lang>/<path>`
- **THEN** they are sent to `/<other-lang>/<path>`

#### Scenario: Mobile drawer
- **WHEN** the viewport is narrow enough that the burger button is shown
- **THEN** clicking the burger opens an off-canvas drawer that mirrors the desktop links; clicking the overlay, the close button, or pressing `Escape` closes it

### Requirement: Footer is rendered on every page
The layout SHALL render the `Footer` component at the bottom of every page, passing the active `lang`. The footer SHALL display the copy and the footer links from the active locale.

#### Scenario: Footer renders
- **WHEN** any page is served
- **THEN** the footer shows `t.footer.copy` followed by the links from `t.footer.links`

### Requirement: Google Fonts are preconnected
The layout SHALL preconnect to `https://fonts.googleapis.com` and `https://fonts.gstatic.com` so font requests start as early as possible.

#### Scenario: Head inspection
- **WHEN** the layout is rendered
- **THEN** the head contains preconnect links to both Google Fonts hostnames (with `crossorigin` on `fonts.gstatic.com`)

### Requirement: Matomo analytics is loaded on every page
The layout SHALL load the Matomo tracker on every page with Do-Not-Track honored. The tracker SHALL record a page view and enable link tracking.

#### Scenario: Tracker configuration
- **WHEN** the analytics script runs
- **THEN** it sets the tracker URL to `//stats.madslab.net/matomo.php`, site id `1`, calls `setDoNotTrack(true)`, pushes `trackPageView`, and pushes `enableLinkTracking`

#### Scenario: Async loading
- **WHEN** the analytics script is injected
- **THEN** the `matomo.js` `<script>` tag is loaded asynchronously (does not block page rendering)
