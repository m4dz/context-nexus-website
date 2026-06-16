# i18n-routing

## Purpose

Defines the URL contract for serving localized content and the rules for resolving a visitor's locale on first hit.

## Requirements

### Requirement: Localized URL prefix
The site SHALL serve every content page under a top-level locale segment (`/en/...` or `/fr/...`). No content page SHALL be reachable at an un-prefixed path.

#### Scenario: English page
- **WHEN** a visitor requests `/en/concepts`
- **THEN** the English version of the Concepts page is served

#### Scenario: French page
- **WHEN** a visitor requests `/fr/concepts`
- **THEN** the French version of the Concepts page is served

#### Scenario: Both locales are built
- **WHEN** the site is built
- **THEN** every content page emits both `/en/<path>` and `/fr/<path>` static HTML files

### Requirement: Locale detection on the root path
The root path (`/`) SHALL redirect the visitor to a locale-prefixed entry point based on their language preference. Detection SHALL run server-side first (where supported) and fall back to client-side detection, with English as the final default.

#### Scenario: Server-side detection with French Accept-Language
- **WHEN** an Apache server with `AllowOverride` enabled receives a request for `/` with an `Accept-Language` header whose top preference starts with `fr`
- **THEN** the server returns a 302 redirect to `/fr/`

#### Scenario: Server-side detection with any other Accept-Language
- **WHEN** an Apache server with `AllowOverride` enabled receives a request for `/` whose `Accept-Language` top preference does not start with `fr`
- **THEN** the server returns a 302 redirect to `/en/`

#### Scenario: Client-side fallback when server rewrite is unavailable
- **WHEN** the server does not honor the `.htaccess` rules and serves `/index.html` directly
- **THEN** the page reads `navigator.languages` / `navigator.language` and replaces the location with `/fr/` (if the primary language starts with `fr`) or `/en/` otherwise

#### Scenario: JavaScript disabled and no server rewrite
- **WHEN** `/index.html` is served and JavaScript is disabled
- **THEN** the page falls back to `/en/` via `<meta http-equiv="refresh">`

### Requirement: Locale-aware link helper
The system SHALL expose a `localePath(lang, path)` helper that returns a URL prefixed with the given locale, so internal links can be authored without hardcoding the locale segment.

#### Scenario: Building an internal link
- **WHEN** code calls `localePath('fr', '/registers/intent')`
- **THEN** the helper returns `/fr/registers/intent`

### Requirement: Language switcher targets the counterpart locale
The system SHALL expose a `getOtherLang(lang)` helper that returns the opposite of the supported locales, enabling a single language toggle to send the visitor to the same page in the other language.

#### Scenario: English page offers French
- **WHEN** code calls `getOtherLang('en')`
- **THEN** the helper returns `'fr'`

#### Scenario: French page offers English
- **WHEN** code calls `getOtherLang('fr')`
- **THEN** the helper returns `'en'`

### Requirement: Supported locales are closed
The set of supported locales SHALL be exactly `en` and `fr`. Adding a locale requires extending the `Lang` type and adding it to every page's `getStaticPaths` return value.

#### Scenario: Unsupported locale URL
- **WHEN** a visitor requests `/de/concepts` (or any non-`en`/`fr` locale prefix)
- **THEN** no page is served (the static build does not emit it)
