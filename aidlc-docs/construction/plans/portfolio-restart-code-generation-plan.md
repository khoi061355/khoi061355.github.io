# Portfolio Restart — Code Generation Plan

Status: All ten steps implemented and verified; awaiting Code Generation review. This document is the single source of truth for Code Generation.

## Unit context

- Unit: portfolio-restart, one existing static frontend package.
- Workspace: /Users/nhamhhung/khoi061355.github.io.
- Application code: src/, public/ and index.html at workspace root. Documentation: aidlc-docs/ only.
- Inputs: approved portfolio-restart requirements, stories, personas and execution plan.
- Stories: US-01–US-08. No other unit, backend, database, API or service boundary is introduced.
- Existing interfaces: typed Portfolio records, SectionId maps, hash/layout hook, Chakra provider and color-mode controls, shared section/action components and Gallery dialog.
- Preserve the source résumé and Evidence Library archive. Edit existing code in place rather than create replacement copies.

## Planning progress

- [x] Review unit scope, approved story mapping and component dependencies.
- [x] Inspect existing files, template/routing contracts and reverse-engineering code structure.
- [x] Define exact paths and sequential implementation steps.
- [x] Include source, accessibility, automation and verification requirements.
- [x] Prepare plan and log the approval prompt.
- [x] Receive and record explicit approval of the complete plan.

## Implementation sequence

### Step 1 — Inspect and index all supplied sources

- [x] Inspect the remaining Evidence Library scans and read the supplied EthicsAI PDF. Reconfirm résumé facts against the already extracted text. Inventory all eleven evidence files and document dates, claim support, naming differences and required display orientation in aidlc-docs/construction/portfolio-restart/code/source-map.md.

Source archive: Evidence Library-20261012T160023Z-1-001.zip. Résumé: the existing DOCX in src/assets/. Keep source content unchanged. Use source-backed wording only; record unsupported or absent project URLs, contact details and incomplete fields. Research internship participation and the water-management challenge concept must remain distinguishable. Stories: US-01–US-06, US-08.

### Step 2 — Prepare evidence and original vector assets

- [x] Create src/assets/evidence/ with the individual supplied JPG documents and EthicsAI PDF needed for the portfolio. Preserve original files and use CSS display orientation where required. Create original code-native scientific SVG assets in src/assets/illustrations/ for the hero and selected projects; create public/favicon.svg.

Illustration filenames: living-systems.svg, water-quality.svg, football-modelling.svg, responsible-ai.svg and venture-practice.svg. Use meaningful alternative text and keep decorative motifs hidden from assistive technology where appropriate. Do not create a portrait, documentary photograph or fabricated data visualization. The archive itself is not a public download. Stories: US-01–US-06.

### Step 3 — Replace typed portfolio content

- [x] Update src/types/portfolio.ts and the existing src/data/{profile,about,education,experience,awards,projects,gallery,skills,certificates,sectionContent,navigation,blog,videos,journalPosts,template,portfolio}.ts modules with source-grounded content.

Extend existing records only as needed for optional public profile fields, project roles/status/source notes and certificate-image orientation. Profile displays Lê Nguyên Khôi, the supplied DOCX download and an honest student role; no old email, social links or portrait. Prioritize research/projects in navigation, retain all required content, and map the gallery to evidence records. Keep certificate-image previews in one evidence collection rather than duplicate heavy embeds in Skills. Empty unsupported video/blog/local-journal collections. Preserve the journal lookup export if retained route components depend on it. An inspected EthicsAI PDF may be linked as the real writing source from its project entry. No invented journal publication date is needed. Stories: US-01–US-08.

### Step 4 — Simplify to one presentation

- [x] Update src/App.tsx, src/templates/{types,index,options}.ts, src/templates/engineering/{index.ts,EngineeringShell.tsx}, src/data/template.ts and src/components/Navbar.tsx to support one bioengineering presentation and no public style selector.

Reuse the engineering directory as a structural foundation with the public identity set to bioengineering. Remove src/templates/business/, src/components/shared/PortfolioStyleSelector.tsx, src/utils/templateSelection.ts and src/utils/templateSelection.test.ts. Remove obsolete selection props and persistence while preserving layout, color mode, enabled section links and safe unknown-route behavior. Retained journal routes must never show old sample content; use a working not-found return path. Do not change deployment configuration. Stories: US-07, US-08.

### Step 5 — Build the scientific editorial narrative

- [x] Modify src/components/{Hero,About,Education,Experience,Awards,Projects,Skills,Contact,Journal,JournalPostPage}.tsx and src/components/shared/{SectionShell,ContentCard,ExternalAction,LogoMark}.tsx where needed for the dedicated portfolio.

Use a spacious typographic introduction and living-systems illustration; present microbiology and water-quality work prominently with roles and maturity labels; vary compositions between project features, academic records and leadership/enterprise entries. Show TheHoopHub as sports retail, with entrepreneurship as a bridge to future scientific ambitions. Replace developer-style labels and generic old-owner copy with subject-specific prose. Skills describe supported methods and learning interests, not invented professional mastery. Contact is a neutral “Contact details coming soon” invitation and résumé action. Omit unsupported sections, old form and dead external actions. Shared next-section controls must resolve to enabled sections and work in supported layouts. Keep stable descriptive data-testid attributes on interactive elements. Stories: US-01–US-05, US-07, US-08.

### Step 6 — Implement readable, accessible evidence previews

- [x] Modify src/components/Gallery.tsx using the existing Chakra dialog boundary to show evidence summaries, lazy-loaded certificate thumbnails and readable image detail views.

Use semantic buttons, descriptive names, Dialog title/description, keyboard opening, visible close control, Escape closing, focus containment and focus restoration to the opener. Support full-document readability on mobile and desktop; use explicit CSS orientation for sideways/upside-down scans without altering the originals. Preview loading must not block the hero. Each summary describes what the source supports without enlarging the claim. Update evidence records and related styles as necessary. Stories: US-06, US-07.

### Step 7 — Apply identity and responsive visual styling

- [x] Modify src/index.css, src/App.css and index.html to apply the warm-ivory/deep-green scientific editorial system, responsive spacing, readable light/dark tokens, focus styling, reduced motion, page title/description and favicon reference.

Use familiar serif/sans typography with restrained specimen/grid details and purposeful illustrations. Keep varied layouts rather than repeated identical cards. Ensure evidence frames and long names fit narrow screens. Replace hardcoded old-theme colors in affected components with the new palette/tokens. Preserve existing provider, dependencies and static base-path handling. Stories: US-01, US-06, US-07.

### Step 8 — Remove old-owner content and obsolete tests/assets

- [x] Remove the old src/content/journal/first-local-journal.md sample and unrelated old-owner assets from src/assets/ after confirming no remaining supported imports. Preserve the supplied résumé, new evidence and illustrations. Remove public/vite.svg after replacing its reference.

Update src/App.test.tsx, src/test/data/{portfolio,navigation}.test.ts, src/templates/templateRegistry.test.ts and src/templates/journalPostPages.test.tsx, and src/themeAccessibility.test.ts for the dedicated presentation. Keep useful layout/routing helper tests. Add src/components/Gallery.test.tsx for meaningful preview opening, Escape closing and focus restoration. Tests must exercise public behavior and source/identity constraints rather than mirror implementation details. Run targeted checks to identify and resolve integration failures. Stories: US-06–US-08.

### Step 9 — Verify integrated implementation and fix observed failures

- [x] Run npm test, npm run lint and npm run build. Resolve failures introduced by the change. Inspect final imports, public identity/links, source boundaries, asset sizes and evidence orientation. Perform local browser smoke checks if supported; otherwise record the verification limit.

Read the Sites local-preview reference before starting a preview. Reuse any task-owned server and stop it during final teardown. Check mobile/desktop layout, color mode, navigation/layout toggles, section deep links, certificate detail behavior and résumé download where available. Do not claim browser verification if only automated tests were run. Report retained bundle warnings. No dependency upgrades or unrelated refactoring. Stories: US-01–US-08.

### Step 10 — Document results and present Code Generation review

- [x] Write aidlc-docs/construction/portfolio-restart/code/code-generation-summary.md and maintenance-guide.md. Update aidlc-docs/README.md and active reverse-engineering architecture, code-structure, component-inventory, API and dependencies documentation to reflect actual final behavior.

Document source/editing paths, adding contact channels, original versus display evidence, the source/public name discrepancy, test/build results and verification limits. Keep audit append-only, update each implementation checkbox immediately when completed, and mark story implementation checkboxes only after their behavior is implemented and verified. Update aidlc-state.md and present the standardized two-option Code Generation review. Build and Test follows only after that review approval; do not publish, push or deploy. Stories: US-08 and all acceptance criteria.

## Traceability

| Story | Steps |
| --- | --- |
| US-01 | 1, 2, 3, 5, 7, 9 |
| US-02 | 1, 2, 3, 5, 9 |
| US-03 | 1, 2, 3, 5, 9 |
| US-04 | 1, 3, 5, 9 |
| US-05 | 1, 2, 3, 5, 9 |
| US-06 | 1, 2, 3, 6, 7, 8, 9 |
| US-07 | 3, 4, 5, 6, 7, 8, 9 |
| US-08 | 1, 3, 4, 5, 8, 9, 10 |

## Approval and completion boundaries

Approval covers this complete ten-step sequence. A step may require multiple file edits, but its checkbox is completed in the same interaction as the work. Browser/tool limitations must be documented; core automated tests and compilation remain required. Final output is local reviewable application code plus documentation, with no external publishing action.

## Extension compliance and content validation

Security Baseline: N/A, disabled in current state. Property-Based Testing: N/A, disabled. No full disabled extension rules were loaded. Existing accessible components and ordinary validation are still required.

Content validated before creation: plain UTF-8 Markdown, numbered steps and stable story mappings, checked paths against current file inventory, balanced inline delimiters and table structure. No Mermaid, ASCII diagrams or embedded executable blocks.

## User-requested review revision — Three design previews

The user explicitly requested three options during the Code Generation review. This is a requested revision of the generated code under the existing review gate, not a deployment or final theme selection. Keep one content model and public presentation; add a temporary comparison mode opened by ?preview=themes. Default public rendering remains the current scientific editorial style until a final choice is made.

- [x] 11. Review the current shell and define three directions: Scientific Editorial, Biotech Venture Studio and Research Atlas.
- [x] 12. Update src/templates/engineering/EngineeringShell.tsx, src/components/Hero.tsx, src/index.css and src/App.css with a query-enabled accessible comparison control, distinct layout/type/color treatments and original vector variants in src/assets/illustrations/. Preserve routes, content, contact state and evidence.
- [x] 13. Add meaningful comparison checks to src/App.test.tsx and theme contrast checks to src/themeAccessibility.test.ts; run tests, lint/build and local browser previews across the three designs.
- [x] 14. Produce desktop/mobile screenshots, update active documentation and state, and present the three options for the user's selection. No final theme choice, push or deployment is inferred.

Extension compliance: Security Baseline and Property-Based Testing remain N/A because disabled. Content validation: plain Markdown and checked paths, no diagrams; SVG variants must parse before creation.

## User-selected Venture Studio refinement

The user selected Biotech Venture Studio and requested text alignment fixes, clearer project illustrations, stronger academic/profile emphasis and removal of the final two evidence cards. This authorizes an in-place review revision. Remove community-2025 and community-2026 from the displayed evidence collection; preserve the supplied originals and other community biography content.

- [x] 15. Make Venture Studio the default, record the selection, and expose source-backed GPA, AS Level, SAT and IELTS highlights in Hero and Education through shared typed data.
- [x] 16. Redraw the code-native project SVGs with recognizable objects, clear labels and conceptual process captions; update project alternatives and use uncropped image framing. Correct heading, caption and evidence-card alignment.
- [x] 17. Remove the final two evidence records and their public imports; update meaningful academic/default/evidence regression checks and run tests, lint/build and local browser checks across responsive widths.
- [x] 18. Update preview screenshots, source/maintenance notes, state and audit; present the revised portfolio for review.

Security Baseline and Property-Based Testing remain disabled (N/A). Validate SVG XML before writing; preserve original evidence and résumé.

## User-requested Linux build correction

- [x] 19. Diagnose the exact Git filename versus import encoding mismatch (NFC versus NFD).
- [x] 20. Rename the resume asset to src/assets/le-nguyen-khoi-resume.docx, update src/data/profile.ts, and confirm unchanged document bytes.
- [x] 21. Run production build and existing tests; verify the emitted resume and update state/audit.

Content validation: plain Markdown with checked paths and no diagrams. Both optional extensions remain disabled (N/A). This is a requested correction within the existing Code Generation review.

## User-requested typography enhancement

- [x] 22. Inspect typography and responsive layout rules; identify undersized body and supporting text.
- [x] 23. Increase reading text to 17–18px, secondary text to 13–16px, and controls/labels; adjust wrapping at narrow widths.
- [x] 24. Verify responsive rendering and production build; record results and update state.

Content validation: plain Markdown, no diagrams. Both optional extensions remain disabled (N/A).

- [x] 25. Remove resume-provenance notes and write direct visitor-facing project/award/academic copy; retain download actions and accurate project statuses.
- [x] 26. Update affected assertions and run tests/build against final text.

## Selected Work text alignment

- [x] 27. Inspect screenshot and identify list padding and inconsistent description/detail type sizes.
- [x] 28. Align descriptions/details to a shared left edge and verify responsive rendering/build.

Content validation: existing CSS/TSX, plain Markdown, no diagrams. Optional extensions remain disabled (N/A).

## Selected Work bullet points

- [x] 29. Add visible native bullets with hanging indentation to project details and verify the production build.

Content validation: existing CSS declarations and plain Markdown, no diagrams. Optional extensions N/A (disabled).
