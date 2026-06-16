# content-translations

## Purpose

Defines the single-source-of-truth for every user-visible string on the site, and the contract pages and components follow when reading them.

## Requirements

### Requirement: All UI strings live in locale modules
Every user-visible string SHALL be defined in `src/i18n/en.ts` and `src/i18n/fr.ts`. No content page or component SHALL hardcode user-facing text in markup.

#### Scenario: Adding a new visible string
- **WHEN** a developer adds a new sentence, label, or button text to a page
- **THEN** the string is added to both `en.ts` and `fr.ts` and referenced via `useTranslations(lang)`

#### Scenario: Pure structural text
- **WHEN** markup contains symbols that are purely structural (e.g. punctuation in templates, ARIA labels that mirror visible text already translated)
- **THEN** these MAY remain in markup; everything else MUST live in the locale modules

### Requirement: Parallel structure across locales
Both locale modules SHALL export the same shape: same nested object paths, same array lengths, same keys. A key present in one locale SHALL exist in the other.

#### Scenario: Adding a key
- **WHEN** a key is added to `en.ts`
- **THEN** the same key is added to `fr.ts` (with translated content) before the change is merged

#### Scenario: Type safety
- **WHEN** code calls `useTranslations(lang).<path>`
- **THEN** TypeScript resolves the same path for both locales (any drift surfaces as a type error)

### Requirement: Translation access via `useTranslations`
The system SHALL expose a `useTranslations(lang)` function that returns the full locale object for a given language. Pages and components SHALL NOT import locale modules directly.

#### Scenario: Page reads its translations
- **WHEN** a page receives `lang` from `Astro.params` or `Astro.props`
- **THEN** it obtains its strings via `useTranslations(lang)`

### Requirement: Locale modules carry navigation, content, and footer
Each locale module SHALL provide, at minimum, the `site`, `nav`, `footer`, and per-page content blocks consumed by the shell and pages.

#### Scenario: Required top-level keys
- **WHEN** a locale module is loaded
- **THEN** it exports `site` (title/description), `nav` (menu labels and language switch label), `footer` (copy and links), and one block per content page

### Requirement: Footer links are locale-scoped
The footer links provided by each locale module SHALL point to URLs already prefixed with that locale.

#### Scenario: English footer
- **WHEN** the English locale's `footer.links` is read
- **THEN** every link `href` begins with `/en/`

#### Scenario: French footer
- **WHEN** the French locale's `footer.links` is read
- **THEN** every link `href` begins with `/fr/`
