# Bioengineering Portfolio Requirements

**Status**: Approved by the user on 2026-10-12.

## Intent Analysis

- **User request**: Customize the existing portfolio for Nguyễn Lê Khôi using the supplied resume and Evidence Library, with a distinctive bioengineering and biotech-entrepreneurship theme.
- **Request type**: User-facing portfolio customization and presentation consolidation.
- **Scope**: Multiple React components, shared portfolio data, template selection and registry, theme styles, source assets, tests, and project metadata.
- **Complexity**: Moderate. The content is grounded in provided sources, but the existing app supports two distinct templates and contains another person's profile information that must be removed consistently.
- **Identity decision**: Display the name **Nguyễn Lê Khôi**, as selected by the user to match the Vietnamese name on the Evidence Library certificate.

## Functional Requirements

1. Replace the existing portfolio owner's identity and content throughout the rendered website with Nguyễn Lê Khôi's verified information from the resume and Evidence Library. Do not leave old names, contact details, profile image, resume links, project links, or old-person copy visible.
2. Deliver one dedicated portfolio presentation with a bioengineering-editorial direction: warm neutral surfaces, botanical greens, and restrained scientific-journal details. Remove the Business presentation implementation, selector support, and its template-specific tests as requested.
3. Preserve the existing React/Vite and TypeScript architecture where useful, the accessible section navigation, responsive behavior, light/dark mode, layout modes, journal routing only if there is relevant source content, and GitHub Pages deployment configuration.
4. Organize the portfolio around Khôi's real story: biology-specialized studies at Vinschool Smart City; microbiology and biotechnology research; shrimp-health diagnostics and water-quality work; sensor-based water management; quantitative modeling; student entrepreneurship; leadership, community engagement, and sports.
5. Present research, projects, leadership, work, awards, education, and supporting imagery using accurate descriptions derived from the resume or matching Evidence Library items. Do not upgrade student experience into professional credentials, imply unverified outcomes, or invent links, statistics, dates, or partners.
6. Include the resume as a downloadable asset using the supplied resume document. Do not retain the existing portfolio owner's resume PDF.
7. Do not reuse the existing portfolio owner's portrait or social/contact links. Until Khôi provides public details, show neutral, non-clickable “Contact details coming soon” copy and do not fabricate an email address, phone number, or social URL.
8. Keep any remaining sections focused and relevant. Omit or disable generic journal, video, skills, or certificate content that has no matching source material rather than carrying forward unrelated content.
9. Use suitable supplied Evidence Library imagery for relevant experiences or a curated gallery. Do not publish full-page certificate scans merely as decoration; use evidence material only where it adds clear portfolio value.
10. Update tests to protect the single-template behavior, Khôi-specific content and assets, correct navigation, and existing user-visible behavior that remains in scope.

## Source-Grounded Content

- **Education**: Specialized Biology class at Vinschool Smart City, Hanoi (Aug 2024–present); Grade 10 and Grade 11 GPA 9.4/10; AS Level Biology, Chemistry, and Mathematics grades A; SAT 1390; IELTS 8.0. Omit the incomplete Grade 12 Semester 1 GPA.
- **Research**: Research Assistant at the Institute of Microbiology and Biotechnology (Jun–Aug 2026), with hands-on exposure to microbiology research, bacterial culture media and culturing, shrimp-disease rapid diagnostic development, and aquaculture water-quality sampling and evaluation.
- **Selected work**: Oxford Saïd Global Climate Tech Challenge water-management concept; reproducible football-outcome prediction analysis; EthicsAI research paper. Clearly distinguish contest concepts and independent analysis from deployed products or clinical solutions.
- **Entrepreneurship and leadership**: Co-founder of TheHoopHub basketball online shop (Mar 2025); co-organizer of the Vinschool BeWell workshop (Apr 2024); football team captain and athlete.
- **Awards and community**: Highly Commended, British Biology Olympiad (2026; resume states top 45% globally); 2023 consolation prize in cultural and scientific subjects; wellbeing ambassador and volunteer activities represented in the supplied evidence.
- **Name**: Display Nguyễn Lê Khôi, according to the user's explicit selection.

## Non-Functional Requirements

- Preserve responsive layout, accessible labels and controls, keyboard operation, visible focus, readable contrast in both color modes, and reduced-motion behavior.
- Avoid new runtime dependencies and preserve static deployment compatibility with the existing GitHub Pages workflow.
- Keep data/content maintainable in the existing `src/data/` modules and preserve useful component boundaries.
- Ensure there are no stale references to the former portfolio owner's identity or to a removed template in app code, tests, documentation, or browser metadata.
- Optimize supplied images for reasonable page weight where practical without altering the source evidence files.

## Acceptance Criteria

- The site shows one selectable/default presentation only, branded for Nguyễn Lê Khôi; the removed Business template and its selector are no longer part of the supported app.
- All visible profile, resume, contact, education, experience, project, awards, and gallery content is accurate to supplied material; blank resume fields are omitted.
- No previous owner's portrait, resume, contact details, or unrelated portfolio content are rendered.
- Research and venture stories are prominent without overstating current student experience or project maturity.
- Existing navigation, responsive behavior, accessibility, color-mode behavior, layout mode, and GitHub Pages build continue to work.
- Automated tests, lint, and production build pass.

## Explicitly Out of Scope

- Creating new research, products, or business claims not supported by the supplied material.
- Adding a real email, phone number, social profile, external project URL, or headshot not provided by the user.
- Publishing the certificate scans as standalone public credential downloads.
- Changing hosting provider, adding backend services, or introducing new product features beyond the portfolio presentation.
