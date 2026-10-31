# Code Structure

## Application

- src/main.tsx: React entrypoint and provider.
- src/App.tsx: dedicated presentation, enabled sections, hash state, layout hook and chapter scroll reset.
- src/index.css and src/App.css: light/dark tokens, scientific editorial layouts, responsive navigation, focus styling and evidence views.
- index.html: public identity, description and favicon metadata.

## Presentation and components

- src/templates/types.ts, options.ts and index.ts: one bioengineering presentation and complete section contracts.
- src/templates/engineering/: retained structural directory for the dedicated shell and section map.
- src/components/Navbar.tsx: section menu, color-mode button and layout controls.
- src/components/{Hero,About,Education,Experience,Awards,Projects,Skills,Contact}.tsx: source-grounded portfolio sections.
- src/components/Gallery.tsx: evidence collection and Chakra image dialog with orientation, multi-page images, larger view and focus restoration.
- src/components/Journal.tsx and JournalPostPage.tsx: optional inactive writing boundary and safe stale-link return path.
- src/components/shared/: section framing, actions, card and logo primitives.
- src/components/ui/: existing Chakra and color-mode support.

The Business directory, visitor style selector and template-selection utility/tests have been removed. Former-owner sample journal and unrelated assets have been removed.

## Content, assets and utilities

Typed src/data modules aggregate into portfolio.ts. Profile stores original résumé download and public identity; projects carry role/status/source notes; gallery records contain dates, original aspect ratios, rotation and optional additional pages. src/types/portfolio.ts retains the existing content model with small optional-field extensions.

src/assets/evidence/ contains byte-identical source copies; src/assets/illustrations/ contains original, labeled project SVGs and hero style variants. The supplied DOCX remains in src/assets/. The source ZIP remains outside the application import graph. public/favicon.svg supplies identity artwork.

src/hooks/usePortfolioLayout.ts retains layout persistence and hash navigation. src/utils/scroll.ts honors reduced-motion preference for programmatic navigation; journal/media/animation helpers remain reusable. No new runtime dependencies or build-profile changes.

## Verification

Nine test files cover App, Gallery, public content, navigation, layout helpers, template registry, stale journal routes and contrast. Standard commands are npm test, npm run lint and npm run build. Vite retains its existing non-blocking large-chunk warning. Actual results are in the active construction summary.

Motion: src/hooks/useEntranceMotion.ts observes static section content on mount and cleans up on unmount, honoring dynamic reduced-motion preferences. Hero and SectionShell attach its section ref; src/App.css supplies short entrances and interaction transitions. Content is visible without observer support. src/hooks/useEntranceMotion.test.tsx covers lifecycle, preference changes and fallback.

## Evidence and illustration additions

- `src/components/shared/ProjectIllustration.tsx`: trusted inline project diagrams, unique SVG IDs, accessible playback controls and viewport/tab visibility handling.
- `src/types/portfolio.ts`: GalleryPage metadata for page-specific document/photo geometry and captions.
- `src/data/gallery.ts`: ten records and 21 selected previews from approved sources, with preserved prior exclusions.
- `src/assets/evidence/`: 18 newly approved JPEG selections; original archives remain unbundled.
- `src/assets/illustrations/`: eight existing SVGs refined/animated; no raster replacements or invented evidence.
