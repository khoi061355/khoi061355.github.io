# Dependencies

## Internal relationships

main.tsx mounts the existing Chakra/color-mode provider and App. App reads navigation, the single presentation registry, layout hook, scroll tracking and journal hash parser. EngineeringShell renders Navbar and portfolio sections. Section components read typed data and imported local media. Gallery uses Chakra Dialog and Portal. Templates share the existing SectionId and Portfolio contracts.

The former multi-template selector/persistence dependency and Business implementation are removed. No Neutral implementation is present.

## External dependencies

Existing React 19, React DOM, Chakra UI 3, Emotion, next-themes, React Icons, React Markdown, Tailwind/Vite, TypeScript, Vitest, Testing Library, jsdom and ESLint dependencies remain unchanged. No package installation, upgrade or new runtime dependency was required.

The static app has no external data API, authentication, database or runtime secret requirement. Browser storage handles layout and color preferences. Typography uses system font stacks. Vite bundles local assets and retains the configured GitHub Pages base path. Existing lockfile/build configuration remains authoritative.

## Verification and limits

The production build passes. A non-blocking large-JavaScript-chunk warning remains; the Code Generation summary records measured final and baseline sizes. This document describes actual dependency use, not a vulnerability audit or a claim about latest package versions.
