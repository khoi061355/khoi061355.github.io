# Code Generation Plan - Bioengineering Portfolio

**Unit**: Bioengineering Portfolio Customization  
**Status**: Implementation complete; awaiting explicit review approval  
**Workspace**: `/Users/nhamhhung/khoi061355.github.io`

## Unit Context

- **Goal**: Deliver one distinctive, research-led portfolio presentation for Nguyễn Lê Khôi, with a complementary student-entrepreneurship story.
- **Stories implemented**: BK-US-01 through BK-US-07.
- **Dependencies**: One existing React/Vite static application; no backend, database, API, or new package.
- **Data model**: Reuse the typed portfolio and section model. Make profile portrait/contact fields optional or absent where no source material exists. Keep project illustrations as local SVG assets with useful alternative text.
- **Interfaces**: Preserve section and layout navigation, color-mode controls, and GitHub Pages asset/base-path behavior. Remove public template switching and its persistence.
- **Source handling**: Use the supplied resume and Evidence Library as factual sources. The Evidence Library includes full-page personal documents, so do not bundle those scans into the public site. Create original schematic project illustrations instead. Preserve both untracked source files in place.

## Dependencies and Responsibilities

- **No unit-to-unit dependencies**: This is one coordinated static application unit.
- **Application responsibility**: Present accurate, student-level education, research exposure, projects, venture, activities, and awards.
- **Data responsibility**: Keep content in existing typed `src/data/` modules.
- **Presentation responsibility**: Reuse the existing Engineering shell and shared section components, rebrand them as Bioengineering, and remove the Business implementation and selector.
- **Verification responsibility**: Update tests to cover the source-grounded content, single-presentation behavior, contact placeholder, and preserved navigation/theme behavior.

## Step-by-Step Generation Plan

### Step 1: Prepare Source-Grounded Portfolio Media

- [x] Keep the untracked resume DOCX and Evidence Library ZIP unchanged.
- [x] Use the DOCX resume as the downloadable resume asset.
- [x] Create original local SVG schematics for microbiology, water quality, quantitative modeling, EthicsAI questions, and the student venture; clearly treat them as illustrations rather than documentary evidence.
- [x] Do not publish full-page certificate or personal-document scans.

### Step 2: Replace Profile Identity and Hero Content

- [x] Update `src/data/profile.ts` with the approved display name, Hanoi location, biology-specialized student identity, source-grounded summary, and DOCX download.
- [x] Remove the previous owner's email, portrait, and social links; omit absent public contact details.
- [x] Update `src/types/portfolio.ts` and `src/data/about.ts` only as needed to represent the no-portrait/no-contact profile safely.
- [x] Update `src/components/Hero.tsx` to replace the coding dashboard treatment with the approved research-led bioengineering editorial introduction and original visual treatment.

### Step 3: Replace Section Content

- [x] Rewrite `src/data/education.ts`, `experience.ts`, `awards.ts`, `projects.ts`, `skills.ts`, `about.ts`, and `sectionContent.ts` with supported resume and Evidence Library material.
- [x] Update `src/data/navigation.ts` to lead with research and projects and hide unsupported gallery/journal sections where no public-ready source material exists.
- [x] Clear the previous owner's gallery, blog, journal-post, video, and certificate entries from `src/data/gallery.ts`, `blog.ts`, `journalPosts.ts`, `videos.ts`, and `certificates.ts`.
- [x] Omit the incomplete Grade 12 Semester 1 GPA and all unsupported contact, project, or credential claims.

### Step 4: Make Research and Project Content Visually Distinct

- [x] Update `src/components/Projects.tsx` to display locally bundled schematic artwork with meaningful descriptive alt text.
- [x] Use accurate, non-promotional descriptions for the microbiology internship, challenge water-management concept, football analysis, EthicsAI paper, and TheHoopHub venture.
- [x] Keep the challenge concept explicitly distinct from a deployed or validated product.

### Step 5: Consolidate Template Architecture

- [x] Set the sole supported public template ID and label to `bioengineering` in `src/data/template.ts`, `src/templates/types.ts`, `src/templates/options.ts`, `src/templates/index.ts`, and `src/templates/engineering/index.ts`.
- [x] Keep the existing Engineering component composition as the implementation base, while changing its public shell classes and `data-template-id` values to Bioengineering.
- [x] Remove template-selection state, selector props, and persistence from `src/App.tsx`, `src/templates/types.ts`, `src/templates/engineering/EngineeringShell.tsx`, and `src/components/Navbar.tsx`.
- [x] Preserve the existing layout-mode, navigation hash, and color-mode behavior.

### Step 6: Remove the Retired Business Presentation and Selector

- [x] Delete the Business implementation under `src/templates/business/` and its Business-specific tests.
- [x] Delete `src/components/shared/PortfolioStyleSelector.tsx`.
- [x] Delete `src/utils/templateSelection.ts` and `src/utils/templateSelection.test.ts`.
- [x] Remove the source-free local journal route, page, and article; no matching portfolio-ready writing was supplied.
- [x] Remove all runtime imports and public options for Engineering-vs-Business switching.

### Step 7: Implement the Bioengineering Editorial Visual System

- [x] Replace blue/terminal-oriented tokens in `src/index.css` with accessible warm-paper, ink, botanical-green, and restrained accent palettes for both light and dark modes.
- [x] Update global font and page-background treatment for an editorial research-journal feel without adding dependencies.
- [x] Update `src/App.css`, `src/components/Navbar.tsx`, `Hero.tsx`, `About.tsx`, `Education.tsx`, `Experience.tsx`, `Awards.tsx`, `Projects.tsx`, `Skills.tsx`, `Contact.tsx`, and shared card/mark styles to use the new semantic tokens consistently.
- [x] Preserve reduced-motion behavior, responsive navigation, visible focus, and readable contrast.

### Step 8: Replace the Contact Interaction

- [x] Update `src/components/Contact.tsx` to show neutral, non-clickable “Contact details coming soon” copy.
- [x] Remove the unconfigured mail form and any email/social action when no public destination is supplied.
- [x] Verify no example address becomes a fake contact link.

### Step 9: Update Site Metadata and Student Guidance

- [x] Update `index.html` title, description, language metadata, and favicon for Nguyễn Lê Khôi's portfolio.
- [x] Update the relevant customization and presentation instructions in `README.md` to describe one Bioengineering presentation, preserving its beginner-friendly GitHub Pages setup journey.
- [x] Keep `.github/workflows/deploy.yml`, the package manifest, and Vite deployment configuration unchanged.

### Step 10: Remove Replaced, Tracked Personal Assets

- [x] Remove the tracked previous owner's profile image, resume PDF, certificates, school logos, personal gallery images, and project-cover PNGs after their imports are removed.
- [x] Remove the old generic Vite favicon and local journal article if no longer referenced.
- [x] Do not delete or modify the untracked supplied resume DOCX or Evidence Library ZIP.

### Step 11: Update Tests and Regression Coverage

- [x] Update `src/App.test.tsx` to assert the single Bioengineering presentation, accurate profile/resume, no style selector, contact placeholder, and preserved section/layout/color-mode behavior.
- [x] Update `src/templates/templateRegistry.test.ts`, `src/test/data/navigation.test.ts`, `src/test/data/portfolio.test.ts`, and `src/themeAccessibility.test.ts` for the new identity and one-template model.
- [x] Remove obsolete Business-template tests and template-selection utility tests.
- [x] Add assertions preventing previous-owner identity/contact content and unsupported template IDs from returning to the active portfolio.

### Step 12: Refresh Active Documentation and Summarize

- [x] Refresh relevant current-source architecture, component-inventory, and code-structure documentation; preserve the append-only audit and paused prior-workflow artifacts.
- [x] Create `aidlc-docs/construction/bioengineering-portfolio/code/code-generation-summary.md` with changed files, traceability to BK-US-01 through BK-US-07, and verification status.
- [x] Confirm no duplicate source modules or unreferenced newly generated assets were introduced.

## Validation Planned for Build and Test

- [x] Run focused App, navigation/data, registry, and accessibility tests.
- [x] Run `npm test`.
- [x] Run `npm run lint`.
- [x] Run `npm run build`.
- [x] Inspect the live local site at desktop and mobile widths, including the resume download, contact placeholder, theme toggle, and layout navigation.

## Story Traceability

| Stories | Steps |
|---|---|
| BK-US-01 | 2, 3, 5, 7 |
| BK-US-02 | 1, 3, 4, 11 |
| BK-US-03 | 1, 3, 4, 7 |
| BK-US-04 | 1, 3, 4, 11 |
| BK-US-05 | 5, 6, 7, 11 |
| BK-US-06 | 2, 8, 11 |
| BK-US-07 | 1, 3, 5, 6, 9, 10, 11, 12 |
