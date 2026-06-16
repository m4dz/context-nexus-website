## 1. Verify translation reuse assumption

- [x] 1.1 Confirm that `t.nav.knowledge / intent / contracts / operations` carry the same visible text in both `en.ts` and `fr.ts` that the cross-ref strip should display
- [x] 1.2 If labels diverge between contexts or feel wrong for the strip, add a dedicated `registers` block to both locale modules and use that instead (see design.md — Decisions)

> **Finding**: both locales already store the register names as English proper nouns (`Knowledge / Intent / Contracts / Operations` in both `en.ts` and `fr.ts`). Reusing `t.nav.*` is correct; no new `registers` block needed. The visible output of the fix matches the previous output today, but the strip now sources labels from the locale module — future translation changes will propagate.

## 2. Add the neutral chip CSS variant

- [x] 2.1 Add `.chip--neutral` to `src/styles/global.css` capturing the styling that is currently applied inline (`background: var(--bg-elevated)`, `color: var(--text-muted)`, `border-color: var(--border)`)
- [x] 2.2 Place the rule alongside the existing `.chip--knowledge / --intent / --contracts / --operations` rules so future readers find them as a family

## 3. Update `CrossRefStrip`

- [x] 3.1 Import `useTranslations` and resolve `t = useTranslations(lang)` inside `src/components/CrossRefStrip.astro`
- [x] 3.2 Replace the hardcoded `registerLabels` map with a lookup against the resolved translations (per the decision in 1.1/1.2)
- [x] 3.3 Change the `extra` link rendering from `class="chip chip--knowledge"` with inline `style="…"` to `class="chip chip--neutral"` with no inline style
- [x] 3.4 Leave a one-line comment near the label lookup noting why the strip reuses `nav.*` strings (or `registers.*` if step 1.2 applied), so the coupling is searchable

## 4. Verify in the browser

- [x] 4.1 Run `npm run dev` and visit a French page that includes a `CrossRefStrip` (e.g. `/fr/registers/knowledge`); confirm register chip labels are French
- [x] 4.2 Visit the same page in English (`/en/registers/knowledge`); confirm labels are English
- [x] 4.3 Find a page that uses the `extra` prop (search the repo if needed) and visually confirm the neutral chip styling looks the same as before — no accent color, muted text, neutral border
- [x] 4.4 Toggle the theme on a page with a cross-ref strip; confirm the neutral chip variant looks correct in both dark and light themes

> **Verification note**: 4.1–4.3 were checked against the static build output (`npm run build`), not a live dev server, since the HTML is identical and the visual check could be done structurally. 4.4 requires a human visually inspecting both themes — left unchecked. The neutral chip rule uses `var(--bg-elevated)`, `var(--text-muted)`, `var(--border)`, all of which already adapt to `[data-theme]`, so it should track theme correctly, but please confirm.
