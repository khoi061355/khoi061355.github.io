# Lê Nguyên Khôi — Portfolio Requirements

Status: Requirements approved by the user (“approve and continue”). This document supersedes the previous model's customization requirements.

## Intent analysis

Customize the restored React/Vite portfolio for Lê Nguyên Khôi using the supplied résumé and Evidence Library, with a bioengineering and biotech-entrepreneurship theme. Request type: enhancement. Scope: multiple UI components, typed content, visual styling and template configuration. Complexity: moderate. Requirements depth: standard.

## Confirmed decisions

| Area | Decision |
| --- | --- |
| Primary audience | University admissions and research mentors; entrepreneurship complements the research story |
| Visual direction | Scientific editorial: warm ivory, deep green, specimen-inspired diagrams, research case studies |
| Presentation | One dedicated portfolio, reusing useful existing components and typed data; remove alternate presentation and selector |
| Evidence | Combine concise evidence-backed summaries and original illustrations with readable certificate previews |
| Public name | Lê Nguyên Khôi, as explicitly requested |
| Language | English body copy with accented Vietnamese display name |
| Contact | Contact details coming soon until public contact channels are supplied |
| Extensions | Security Baseline disabled; Property-Based Testing disabled |
| Delivery | Local repository implementation and verification; deployment outside this scope |

Question 4's original answer, “Combine A and B,” is treated as a custom choice: retain the storytelling approach in A and add the previews in B. This is a clear override of A's scan-exclusion clause. The question file preserves the interpretation explicitly. No remaining contradictory choices block requirements drafting.

## Positioning and narrative

Present Khôi as a biology-specialized student exploring how living systems, quantitative methods and practical enterprise can address real problems. Lead with laboratory research and water quality. Show biotech entrepreneurship as an ambition supported by his scientific interests and sports-retail co-founder experience. Do not label him an established biotech founder or licensed biomedical professional.

The visitor journey should move from an immediate introduction to selected research and projects, academic foundations, entrepreneurship and leadership, supporting evidence, and a clear contact/resumé action. Design should feel personal and specific to his work, with restrained scientific motifs, readable typography and varied compositions rather than repeated generic cards.

## Functional requirements

- FR-01: Replace all public former-owner identity, biography, images, contacts, links and metadata with source-grounded Khôi content. No old-owner content should be rendered through any reachable section or route.
- FR-02: Provide one dedicated bioengineering presentation. Remove the alternate template, public style selector and obsolete selection behavior while preserving useful shared component boundaries.
- FR-03: Introduce his biology specialization, research interests and entrepreneurial direction. Use an original scientific illustration or composition where no supplied portrait exists; do not invent a portrait.
- FR-04: Feature the Institute of Microbiology and Biotechnology internship, June–August 2026, as supervised student research exposure. Include bacterial culture preparation, diagnostic-test development participation and aquaculture water-sample work supported by the sources.
- FR-05: Present the Oxford Saïd climate-tech water-management entry as a challenge project/concept, unless further supplied evidence establishes implementation. Explain the monitored variables, microorganism dosing idea and sustainability/affordability goals without claiming a deployed or clinically validated product.
- FR-06: Include football predictive modelling and EthicsAI writing as complementary quantitative and responsible-technology work. Football dataset and performance figures must be traceable to the résumé and not framed as independently verified by this workflow. Use available supplied paper content for the writing summary; do not invent a project URL or report.
- FR-07: Show TheHoopHub as a basketball retail venture, including sourcing, pricing and customer-order responsibilities. Connect its practical entrepreneurial lessons to his intended biotech direction without recasting the shop as a biotech business.
- FR-08: Include Vinschool BeWell neuroscience outreach, community engagement and sports leadership with relevant dates and concise source-backed descriptions. Treat the Sao Thai Duong factory visit as learning exposure, not employment.
- FR-09: Display Vinschool Smart City biology education and supported academic results. Omit the blank Grade 12 Semester 1 GPA. Include relevant awards, including British Biology Olympiad Highly Commended 2026; any percentile wording remains attributed to the résumé.
- FR-10: Provide evidence summaries and certificate previews alongside relevant research, awards and community entries, or through an associated evidence collection. Each preview needs a descriptive title, accessible opening control and readable detail view. Inspect orientation and readability and preserve source meaning when preparing display assets. Avoid publishing the entire source archive as a bulk download.
- FR-11: Make the supplied résumé available through a accurately labeled download. Do not change the source document's internal name to match the public name; record the naming discrepancy in maintenance documentation.
- FR-12: Preserve responsive navigation, section deep links, layout modes and color-mode behavior where compatible with the dedicated presentation. Unavailable optional content should be omitted rather than filled with former-owner samples.
- FR-13: Keep a neutral contact invitation with “Contact details coming soon”; omit fake email, phone, social links and a form that cannot send a message.

## Non-functional requirements

- NFR-01: Preserve static React, TypeScript and Vite compatibility and the existing GitHub Pages build configuration; no backend or new runtime dependencies are required.
- NFR-02: Keep content editable through src/data modules and existing typed contracts, extending those contracts only as needed for optional fields and evidence previews.
- NFR-03: Keep text readable, contrast sufficient in light and dark modes, keyboard focus visible, and controls descriptively labeled. Evidence previews must support keyboard opening and closing and restore focus appropriately.
- NFR-04: Respect reduced-motion preferences and ensure layouts fit narrow screens without horizontal overflow.
- NFR-05: Use appropriately sized illustrations and lazy-load secondary evidence imagery. Maintain original source documents separately from optimized display assets.
- NFR-06: Validate production compilation, meaningful identity/content safeguards, navigation behavior and evidence-preview interactions. Update obsolete template tests to match the supported presentation.

## Source map and limits

| Material | Use |
| --- | --- |
| Resume - Lê Nguyên Khôi.docx | Biography, education, projects, entrepreneurship, leadership and work history |
| Institute of Microbiology and Biotechnology confirmation | Internship dates and described laboratory activities |
| British Biology Olympiad certificate | Highly Commended recognition, 2026 |
| Sao Thai Duong confirmation | Factory-tour learning exposure, 19 June 2026 |
| BeWell, wellbeing and volunteer evidence | Supporting descriptions and certificate previews after detailed inspection |
| EthicsAI PDF | Writing summary and supported paper details after inspection |

The résumé heading and certificates use Nguyen Le Khoi / Nguyễn Lê Khôi. The latest user request supplies Lê Nguyên Khôi, which governs the public display. The source documents retain their original spelling.

## Acceptance criteria

- AC-01: The public portfolio displays Lê Nguyên Khôi and communicates a student bioengineering identity with a credible entrepreneurial thread.
- AC-02: The hero and selected-work sections make microbiology and water-quality work prominent and distinguish concepts, research participation, independent analysis and an operating sports-retail venture.
- AC-03: No previous-owner identity, portrait, résumé, contact details or unrelated projects appear in reachable public UI or metadata.
- AC-04: One dedicated presentation remains; the alternate template and visitor style selector are removed.
- AC-05: Evidence summaries and readable certificate previews both appear; previews are labeled and keyboard accessible.
- AC-06: Résumé download, supported navigation/layout modes and color-mode controls work; unavailable contact channels do not generate dead or fake actions.
- AC-07: Mobile layout, focus styling, reduced-motion behavior and both color modes are verified to the extent supported by available tools.
- AC-08: Appropriate tests and production build pass, with verification limits or existing non-blocking warnings documented.

## Next-stage assessment

User Stories should execute because the customization changes the visitor experience across multiple sections and includes an evidence-preview interaction. Use admissions/research reviewers and potential collaborators as the visitor personas, and Khôi as the content maintainer. Application Design, unit decomposition and detailed design stages will be assessed during Workflow Planning. The existing single frontend app is the likely implementation unit.

## Extension compliance and validation

Security Baseline: N/A, explicitly disabled in answer 5. Property-Based Testing: N/A, explicitly disabled in answer 6. Full disabled extension rules were not loaded or enforced. Ordinary accessibility, factual accuracy and meaningful verification remain requirements.

Content validated before creation: plain UTF-8 Markdown, balanced inline code syntax, valid table structure, no embedded diagrams or executable data blocks requiring parser validation.
