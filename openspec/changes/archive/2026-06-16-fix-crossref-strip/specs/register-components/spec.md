## MODIFIED Requirements

### Requirement: `CrossRefStrip` renders a labeled row of register chips
The system SHALL provide a `CrossRefStrip` component that renders a heading label followed by one chip per register passed in. Register chip labels SHALL come from the active locale's translation module, and any `extra` links SHALL render as neutral chips visually distinct from register chips.

#### Scenario: Required props
- **WHEN** `CrossRefStrip` is used
- **THEN** it accepts `lang`, `label`, and `registers` (an array of register keys), and renders one `RegisterChip` per entry pointing to `/<lang>/registers/<register>`

#### Scenario: Localized register labels
- **WHEN** `CrossRefStrip` is rendered with `lang='fr'`
- **THEN** each register chip's visible text comes from the French locale's translation module (e.g. `t.nav.knowledge` for the knowledge chip), not a hardcoded English string

#### Scenario: English register labels
- **WHEN** `CrossRefStrip` is rendered with `lang='en'`
- **THEN** each register chip's visible text comes from the English locale's translation module

#### Scenario: Optional extra links
- **WHEN** `CrossRefStrip` is given an `extra` prop with `{ label, href }` entries
- **THEN** those links render after the register chips using the `chip chip--neutral` class (no register-specific accent color and no inline style overrides)

#### Scenario: Order preservation
- **WHEN** `CrossRefStrip` receives `registers: ['contracts', 'knowledge']`
- **THEN** the chips appear in that exact order
