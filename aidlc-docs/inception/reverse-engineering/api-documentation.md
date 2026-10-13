# API and Component Contracts

No network API, backend or database is implemented.

## Presentation

PortfolioTemplateId accepts bioengineering only. getPortfolioTemplate(string) resolves the sole registered presentation and safely falls back to it for stale or unknown identifiers. activePortfolioTemplate points to that presentation. The retained engineering directory is a code-organization detail.

PortfolioShellProps supplies activeSection, layoutMode, enabled navigationItems, getNavigationHref, onNavigate, onToggleLayoutMode and children. No template-selection props remain. PortfolioTemplate maps every canonical SectionId to a component and retains its journal-page component.

## Layout and navigation

The existing usePortfolioLayout hook coordinates single/multi display mode, stored preference, section hashes and navigation. Shared section links use data-section and the shell's navigation action. App scrolls a selected chapter into view when it changes. Unknown chapter links recover to home. Existing journal hashes render an unavailable-entry state because no local posts are supplied.

## Content and evidence

Profile uses the requested public name and original DOCX URL download; public email and portrait fields may be absent. ProjectEntry retains core fields with optional role, status, period, sourceNote and details. GalleryItem retains core fields with optional rotation, aspectRatio, additionalPages, issuer and year.

Gallery opens evidence by semantic button, labels a Chakra Dialog with title/description, displays source images using CSS orientation, supports larger view, closes by control/Escape and restores focus. The PDF certificate is accurately linked from the responsible-AI project entry. No paper endpoint or invented external project URL exists.
