## Why

`CrossRefStrip` violates the `register-taxonomy` requirement that register labels be translatable: it hardcodes English labels (`Knowledge / Intent / Contracts / Operations`) regardless of the `lang` prop, so French visitors see English chips on every cross-reference. While we're touching the component, an unrelated cosmetic bug — the `extra` chip uses `chip--knowledge` styling with an inline override — should be cleaned up too.

## What Changes

- `CrossRefStrip` reads its register labels from the active locale's translation module instead of using a hardcoded English `registerLabels` map.
- The `extra` chip rendering switches from a misleading `chip--knowledge` class with inline style overrides to a dedicated neutral chip variant.
- A new `chip--neutral` CSS class is added to `global.css` to back the neutral variant.

No public API changes: `CrossRefStrip` still accepts `lang`, `label`, `registers`, and optional `extra`.

## Capabilities

### New Capabilities
<!-- none -->

### Modified Capabilities
- `register-components`: tighten the `CrossRefStrip` contract — register chip labels are sourced from the active locale, and the `extra` chip uses a neutral variant.

## Impact

- **Code**: `src/components/CrossRefStrip.astro` (label sourcing + extra chip class), `src/styles/global.css` (add `.chip--neutral`).
- **Translations**: `src/i18n/en.ts` and `src/i18n/fr.ts` — confirm that `nav.knowledge`, `nav.intent`, `nav.contracts`, `nav.operations` are the right strings to reuse, or add a dedicated `registers.*` block if labels diverge from the nav.
- **Spec compliance**: brings `CrossRefStrip` into compliance with the `register-taxonomy` "Register labels are translatable" requirement.
- **Out of scope**: syncing CLAUDE.md's "dark by default" wording with the actual `prefers-color-scheme`-aware behavior (separate docs PR).
