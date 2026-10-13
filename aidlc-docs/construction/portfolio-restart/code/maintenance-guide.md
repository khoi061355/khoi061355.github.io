# Maintaining Khôi's Portfolio

## Local editing and preview

Use npm run dev from the repository root and open the Local URL printed by Vite. Run npm test, npm run lint and npm run build before sharing changes. The existing GitHub Pages workflow and VITE_BASE_PATH handling are preserved. This implementation did not deploy or push changes.

## Content paths

| Content | File |
| --- | --- |
| Public name, introduction and résumé | src/data/profile.ts |
| Selected research, projects, roles, maturity and source notes | src/data/projects.ts |
| Biography, education, experience, recognition and methods | Corresponding src/data modules |
| Evidence descriptions, dates, image references and orientation | src/data/gallery.ts |
| Navigation order and enabled sections | src/data/navigation.ts |
| Section headings and introductions | src/data/sectionContent.ts |
| Presentation structure | src/templates/engineering/index.ts and EngineeringShell.tsx |
| Visual styling | src/index.css and src/App.css |
| Public title, description and favicon | index.html and public/favicon.svg |

The hero headline is stored as three newline-separated lines in profile.ts; its middle line is emphasized. All other source-grounded content remains in typed data modules. The public presentation is bioengineering; the engineering directory is reused for compatibility with the existing structure. There is no visitor template selector.

## Source files and evidence

Keep the original résumé DOCX in src/assets/ and the original Evidence Library ZIP at the repository root. The ZIP is not linked or bundled by the app. Individual source copies in src/assets/evidence/ remain byte-identical to archive files. Originals are preserved; CSS corrects preview orientation through rotation and the original aspectRatio in gallery.ts. Additional pages are listed in additionalPages. Check both thumbnail and detail views when adding a record.

The Evidence Library contains ten JPG pages and an EthicWise AI PDF service certificate, not the full EthicsAI paper. Link that PDF as a service certificate only. Original SVGs in src/assets/illustrations/ are conceptual artwork, not photographs or quantitative result plots.

Public display uses Lê Nguyên Khôi as requested. The résumé and certificates use Nguyễn Lê Khôi / Nguyen Le Khoi; do not modify those originals to force the names to match. Academic information, participation dates and claim maturity should be checked against the source map. Do not introduce blank GPA fields or claim that challenge concepts are deployed products.

## Contact and future content

No public contact channels were supplied. The Contact component therefore displays “Contact details coming soon” and the résumé download. To add actual channels, set verified public values in profile.ts and update Contact.tsx to render accessible links. Do not insert fake addresses or activate an email form without a functioning sending mechanism.

Writing/video/blog collections are empty and the Writing navigation item is disabled. Old journal URLs show an unavailable-entry state with a return to selected work. Add only real new content and check both full-page and chapter layouts when enabling a section.

## Useful verification

Gallery tests cover dialog opening, Escape closing, focus restoration, page counts and larger view. App tests cover public identity, claim maturity, contact availability, downloads, navigation, layout and color modes. Theme tests calculate contrast of the actual light/dark text and action tokens. Browser checks remain useful for actual scan readability, narrow-screen layout and focus behavior.

Original source/public names and source maturity are intentional differences, not formatting errors. The source-map.md and code-generation-summary.md in this directory describe these boundaries and actual verification results.

## Temporary design comparison

Open the local site with ?preview=themes to show the three accessible radio choices. Add &design=editorial, &design=venture or &design=atlas to open a specific option. This query-enabled preview does not persist a final portfolio choice or change the one-presentation registry. The public default is now the user-selected Biotech Venture Studio. Styling is in index.css/App.css; comparison controls are in EngineeringShell.tsx; hero vector variants are in src/assets/illustrations/.

## Selected design and academic highlights

Venture Studio is the default in EngineeringShell.tsx and index.html. Optional query comparison remains available for design review only. Academic numbers are defined once in academicHighlights in src/data/education.ts and displayed by both Hero and Education. Edit those source-backed values there; the original education descriptions remain available for future content use.

Project SVGs now show labeled processes and recognizable objects. Project imageCaption fields explain each illustration, and image framing uses contain with the original aspect ratio to avoid cropped labels. Six evidence records remain. The two community-volunteering entries were removed from displayed/imported gallery data at the user's request; original source copies and the archive are preserved.
