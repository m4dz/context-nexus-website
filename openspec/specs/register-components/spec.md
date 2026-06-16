# register-components

## Purpose

Defines the reusable Astro components that render registers in the UI: their props, output, and visual contract. The conceptual model itself lives in `register-taxonomy`.

## Requirements

### Requirement: `RegisterCard` renders a register entry-point card
The system SHALL provide a `RegisterCard` component that renders a clickable card linking to a register page, displaying an icon, a label, a sublabel, and a description.

#### Scenario: Props
- **WHEN** `RegisterCard` is used
- **THEN** it accepts `register`, `label`, `sublabel`, `desc`, and `href` props; `register` is typed as one of the four register keys

#### Scenario: Visual identity
- **WHEN** a `RegisterCard` is rendered
- **THEN** its root element carries a `register-card--<register>` class so styles can apply the register's accent color

#### Scenario: Icon per register
- **WHEN** a `RegisterCard` is rendered
- **THEN** it shows a fixed icon per register: knowledge 🧠, intent 🎯, contracts 📋, operations ⚙️

### Requirement: `RegisterChip` renders a compact register link
The system SHALL provide a `RegisterChip` component that renders a small chip-style link to a register page, used inside cross-reference strips and inline mentions.

#### Scenario: Props
- **WHEN** `RegisterChip` is used
- **THEN** it accepts `register`, `label`, and `href` props

#### Scenario: Visual identity
- **WHEN** a `RegisterChip` is rendered
- **THEN** its root element carries a `chip--<register>` class so styles can apply the register's accent color

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
