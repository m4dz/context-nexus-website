# register-taxonomy

## Purpose

Defines the four-register conceptual model that organizes the site's content, and the visual identity each register carries throughout the UI.

## Requirements

### Requirement: The four registers are fixed
The site SHALL recognize exactly four registers, identified by the keys `knowledge`, `intent`, `contracts`, and `operations`. Adding, removing, or renaming a register SHALL be treated as a breaking change to the site's content model.

#### Scenario: Register type
- **WHEN** code declares a register-typed value
- **THEN** the value is one of `'knowledge' | 'intent' | 'contracts' | 'operations'`

#### Scenario: Iteration order
- **WHEN** registers are listed in surfaces that show them as a group (home grid, nav submenu, drawer)
- **THEN** they appear in the order: knowledge, intent, contracts, operations

### Requirement: Each register has a dedicated page per locale
The site SHALL expose one page per register under `/<lang>/registers/<register>` for every supported locale.

#### Scenario: English knowledge page
- **WHEN** a visitor requests `/en/registers/knowledge`
- **THEN** the English Knowledge register page is served

#### Scenario: French operations page
- **WHEN** a visitor requests `/fr/registers/operations`
- **THEN** the French Operations register page is served

### Requirement: Each register carries a fixed accent color
Each register SHALL be associated with a single accent color, exposed as a CSS custom property and used consistently wherever the register is depicted.

#### Scenario: Color mapping
- **WHEN** the design system is consulted
- **THEN** the accent colors are: knowledge `#60A5FA`, intent `#34D399`, contracts `#FBBF24`, operations `#F87171`

#### Scenario: CSS variable names
- **WHEN** stylesheets reference a register's color
- **THEN** they use `--color-knowledge`, `--color-intent`, `--color-contracts`, or `--color-operations` (or matching aliases such as `--knowledge`, `--intent`, etc.)

### Requirement: Register identity is reflected in navigation
The navigation SHALL surface the four registers as a `Registers` group whose direct children link to each register page, with each child visually marked by its register color.

#### Scenario: Desktop submenu
- **WHEN** the visitor hovers or focuses the `Registers` nav item
- **THEN** a submenu lists Knowledge, Intent, Contracts, Operations, each with a color dot matching its register

#### Scenario: Mobile drawer
- **WHEN** the visitor opens the mobile drawer
- **THEN** a `Registers` section lists the same four links with the same color dots

### Requirement: Register labels are translatable
The visible name of each register SHALL come from the active locale's translation module, not be hardcoded in components.

#### Scenario: French navigation
- **WHEN** the visitor is on a French page
- **THEN** the register labels in the nav reflect `t.nav.knowledge`, `t.nav.intent`, `t.nav.contracts`, `t.nav.operations` from `fr.ts`
