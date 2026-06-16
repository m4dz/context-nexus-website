## MODIFIED Requirements

### Requirement: Navigation is rendered on every page
The layout SHALL render the `Nav` component at the top of every page, passing the active `lang`. The `nav__logo` anchor SHALL display the Context Nexus logo mark followed by the "Context Nexus" wordmark; the same composition SHALL appear in the mobile drawer header.

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

#### Scenario: Nav logo composition
- **WHEN** the nav is rendered (desktop bar or drawer header)
- **THEN** the `nav__logo` anchor contains the Context Nexus logo mark (a `<Logo>` element) followed by the text "Context Nexus", with no `nav__logo-dot` element present

### Requirement: Footer is rendered on every page
The layout SHALL render the `Footer` component at the bottom of every page, passing the active `lang`. The footer SHALL display the locale-specific copy with the word "Zenika" replaced inline by the Zenika monogramme, which SHALL be wrapped in a link to `https://zenika.com`. The footer SHALL also display the footer links from the active locale.

#### Scenario: Footer copy with inline Zenika link
- **WHEN** any page is served
- **THEN** the footer copy renders as `t.footer.copyBefore` + `<a class="footer__zenika" href="https://zenika.com" target="_blank" rel="noopener" aria-label="Zenika"><ZenikaLogo /></a>` + `t.footer.copyAfter`, followed by the links from `t.footer.links`

#### Scenario: Zenika link opens in a new tab safely
- **WHEN** the visitor activates the Zenika link
- **THEN** the browser navigates to `https://zenika.com` in a new tab, and the link has `rel="noopener"` to prevent reverse-tabnabbing

#### Scenario: Zenika monogramme adapts to the active theme
- **WHEN** the document `data-theme` switches between `dark` and `light`
- **THEN** the monogramme paints in a color that contrasts with the footer background, without serving a second asset
