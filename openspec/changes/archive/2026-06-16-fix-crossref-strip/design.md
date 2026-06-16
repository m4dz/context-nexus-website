## Context

`CrossRefStrip` was written before the i18n model crystallized: it accepts a `lang` prop (used only to build hrefs) but carries its own hardcoded English `registerLabels` map. The same component also renders `extra` chips with `class="chip chip--knowledge"` plus inline style overrides that effectively make a neutral chip — visually wrong (random knowledge-blue base under the override) and structurally misleading.

This change is small, but two decisions are worth recording so the implementation doesn't drift.

## Goals / Non-Goals

**Goals**
- Register chips show locale-appropriate labels with no caller boilerplate at every `CrossRefStrip` usage site.
- The neutral chip variant is a real CSS class, not an inline patch.
- No change to the `CrossRefStrip` public prop shape — existing callers keep working unchanged.

**Non-Goals**
- Redesigning the chip styling system more broadly.
- Adding new register-specific variants beyond the existing four + neutral.
- Reorganizing the i18n module structure (e.g. introducing a `registers.*` block) unless reuse of `nav.*` proves wrong.

## Decisions

### Where does `CrossRefStrip` get its labels?

**Decision**: the component resolves labels itself by calling `useTranslations(lang)` internally.

Alternatives considered:
- **Caller passes a `labels` prop.** Rejected: forces every usage site (currently several across content pages) to thread the same boilerplate. The component already takes `lang`; that's enough information to look up the labels itself.
- **Caller passes the resolved `t` object.** Rejected: same boilerplate problem and exposes the i18n module's internal shape to every caller.

Coupling `CrossRefStrip` to the i18n module is acceptable — every other content-rendering component in the project already does the same.

### Which translation keys back the register labels?

**Decision**: reuse `t.nav.knowledge | intent | contracts | operations`.

Alternatives considered:
- **Introduce a new `t.registers.*` block.** Rejected for now: the labels are the same in both contexts ("Knowledge / Intent / Contracts / Operations" — proper nouns of the conceptual model). Forking the strings invites drift. If a future design wants different phrasing in cross-ref strips vs. nav (e.g. shorter labels), we revisit.

If both English and French copy already match between contexts, reusing `nav.*` is the right call. The implementation step must verify this before writing the lookup.

### How is the neutral chip styled?

**Decision**: add a `.chip--neutral` rule to `global.css` that captures what the inline override was doing (`background: var(--bg-elevated); color: var(--text-muted); border-color: var(--border)`), and change the `extra` rendering to `class="chip chip--neutral"` with no inline `style`.

Alternative considered:
- **Drop the chip styling for `extra` entirely and use a plain `<a>`.** Rejected: the visual rhythm of the strip relies on every item being chip-shaped; a plain link would float oddly.

## Risks / Trade-offs

- **Translation key reuse drift** → if the design later wants different phrasing for register chips vs. nav items, we'll need to fork the keys. Mitigation: leave a comment in `CrossRefStrip` linking the lookup to `t.nav.*` so the coupling is searchable.
- **Internal coupling to i18n module** → `CrossRefStrip` can no longer be used outside a localized page context. Mitigation: this is already the de-facto reality; the component takes `lang` and renders locale-prefixed hrefs.

## Migration Plan

Not applicable — the public prop shape is unchanged and no callers need to update.

## Open Questions

None. Both decisions are reversible if a future design wants the alternatives.
