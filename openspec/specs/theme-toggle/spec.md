# theme-toggle

## Purpose

Defines how the site selects, applies, persists, and lets the visitor change between the dark and light color themes.

## Requirements

### Requirement: Two themes are supported
The site SHALL support exactly two themes: `dark` and `light`. The active theme SHALL be expressed as `<html data-theme="dark">` or `<html data-theme="light">`.

#### Scenario: Reading the active theme
- **WHEN** any script reads `document.documentElement.dataset.theme`
- **THEN** the value is either `"dark"` or `"light"`

### Requirement: Initial theme resolution
On first paint, the system SHALL resolve the initial theme from, in order: a persisted choice in `localStorage` under key `theme`; otherwise the visitor's `prefers-color-scheme` media query; otherwise `dark`.

#### Scenario: Returning visitor with stored preference
- **WHEN** `localStorage.theme` is `"light"`
- **THEN** the document loads with `data-theme="light"` regardless of the system preference

#### Scenario: New visitor preferring light
- **WHEN** there is no stored preference and `prefers-color-scheme: light` matches
- **THEN** the document loads with `data-theme="light"`

#### Scenario: New visitor with no preference or preferring dark
- **WHEN** there is no stored preference and `prefers-color-scheme: light` does not match
- **THEN** the document loads with `data-theme="dark"`

### Requirement: Initial theme is applied before paint
The script that sets `data-theme` SHALL run inline in `<head>`, before any stylesheet is applied, to prevent a flash of the wrong theme.

#### Scenario: First-paint inspection
- **WHEN** the browser parses `<head>`
- **THEN** `document.documentElement.dataset.theme` is set before `<body>` is rendered

### Requirement: Toggle button switches and persists
The visitor SHALL be able to switch theme via a toggle control in the navigation. Activating the toggle SHALL flip `data-theme` and write the new value to `localStorage` under key `theme`.

#### Scenario: Click toggles from dark to light
- **WHEN** `data-theme` is `"dark"` and the visitor clicks the theme toggle
- **THEN** `data-theme` becomes `"light"` and `localStorage.theme` is set to `"light"`

#### Scenario: Click toggles from light to dark
- **WHEN** `data-theme` is `"light"` and the visitor clicks the theme toggle
- **THEN** `data-theme` becomes `"dark"` and `localStorage.theme` is set to `"dark"`

#### Scenario: Choice survives reload
- **WHEN** the visitor toggles the theme and reloads the page
- **THEN** the theme matches the last toggled value

### Requirement: Toggle is reachable on every viewport
A theme toggle control SHALL be reachable in both the desktop navigation and the mobile drawer.

#### Scenario: Desktop
- **WHEN** the viewport is wide enough to show the desktop nav
- **THEN** a theme toggle is visible in the nav bar

#### Scenario: Mobile
- **WHEN** the viewport collapses the nav into a burger menu
- **THEN** a theme toggle is reachable inside the opened drawer
