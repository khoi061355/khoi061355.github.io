# Portfolio Restart — User Stories

Status: Generated from the approved story approach; approved by the user (“approve and continue”). Story completion checkboxes represent implementation status, not document generation.

Requirements: aidlc-docs/inception/requirements/portfolio-restart-requirements.md.
Personas: aidlc-docs/inception/user-stories/portfolio-restart-personas.md.

## US-01 — Understand the student and his direction

- [x] Implement and verify US-01.

As an admissions reviewer, I want to understand Khôi’s academic identity and scientific interests immediately, so that I can decide which work to examine more closely.

Primary persona: P-01. Other personas: P-02, P-03.
Requirements: FR-01, FR-03; AC-01.

Acceptance criteria:

1. The introduction displays Lê Nguyên Khôi and identifies him as a biology-specialized student with an interest in bioengineering.
2. Microbiology, applied biology and quantitative exploration are visible themes; biotech entrepreneurship is described as a direction rather than an established biotech company.
3. The introduction uses subject-specific illustration or composition and never presents an invented portrait.
4. Given the introduction, when a visitor follows the selected-work action, then the relevant research/projects content is reached.

## US-02 — Explore laboratory work and a water-management concept

- [x] Implement and verify US-02.

As a research mentor, I want to understand Khôi’s laboratory experience and water-management project separately, so that I can assess his current research exposure and applied interests accurately.

Primary persona: P-02. Other personas: P-01, P-03.
Requirements: FR-04, FR-05; AC-02.

Acceptance criteria:

1. The internship identifies the Institute of Microbiology and Biotechnology, June–August 2026, and his supervised student participation.
2. Laboratory descriptions reflect bacterial culture preparation, diagnostic-test development participation and aquaculture water-sample work supported by the supplied sources.
3. The climate-tech entry is labeled as a challenge project/concept and explains monitoring, dosing and affordability goals without claiming deployment or clinical validation.
4. Each entry identifies his role and contribution clearly, without implying he independently led the institute’s research.

## US-03 — Assess quantitative and responsible-technology work

- [x] Implement and verify US-03.

As a research mentor, I want concise descriptions of Khôi’s modelling and responsible-AI work with clear source limits, so that I can understand the breadth of his analytical interests.

Primary persona: P-02. Other personas: P-03.
Requirements: FR-06; AC-02.

Acceptance criteria:

1. The football-analysis entry describes the dataset, modelling approach and outcomes supported by the résumé.
2. If dataset or performance figures are shown, their source is attributed to the résumé rather than framed as independently reproduced results.
3. After inspecting the actual supplied PDF, the EthicsAI entry summarizes the writing from the résumé, identifies the PDF as a volunteer-service certificate, and makes no full-paper availability claim.
4. No invented external project link, report, publication venue or award is offered.

## US-04 — Assess academic foundations and recognition

- [x] Implement and verify US-04.

As an admissions reviewer, I want dated academic information and relevant recognition, so that I can evaluate Khôi’s preparation and growth.

Primary persona: P-01. Other personas: P-02.
Requirements: FR-09; AC-01.

Acceptance criteria:

1. Education identifies Vinschool Smart City and the biology specialization with supported dates.
2. Academic results shown match the résumé; the blank Grade 12 Semester 1 GPA is omitted.
3. British Biology Olympiad Highly Commended is displayed for 2026 with its actual recognition level.
4. Any global-percentile wording is attributed to the résumé; no percentile is inferred from the certificate.

## US-05 — Understand enterprise, leadership and community contribution

- [x] Implement and verify US-05.

As a prospective collaborator, I want to understand Khôi’s entrepreneurial and leadership experience, so that I can see how he works with people and turns ideas into practical activity.

Primary persona: P-03. Other personas: P-01.
Requirements: FR-07, FR-08; AC-02.

Acceptance criteria:

1. TheHoopHub is identified as basketball retail, with sourcing, pricing and order responsibilities supported by the résumé.
2. The entrepreneurial narrative connects practical learning to future scientific interests without recasting TheHoopHub as biotech or inventing revenue, customers or growth.
3. BeWell neuroscience outreach, community activity and sports leadership use concise descriptions and dates grounded in the supplied material.
4. The Sao Thai Duong factory visit, if included, is described as learning exposure rather than employment or research authorship.

## US-06 — Inspect supporting evidence

- [x] Implement and verify US-06.

As a research mentor, I want readable evidence summaries and certificate previews, so that I can assess the support for selected claims without losing the portfolio’s narrative.

Primary persona: P-02. Other personas: P-01, P-03.
Requirements: FR-10; NFR-03, NFR-05; AC-05.

Acceptance criteria:

1. Associated entries or an evidence collection pair descriptive summaries with clearly titled certificate-preview controls.
2. Given a preview control, when it is activated by keyboard or pointer, then the corresponding document opens in a readable orientation with a descriptive title and detail view.
3. Given an open preview, when the visitor closes it using its close control or Escape, then the view closes and focus returns to the opening control.
4. Certificate display assets preserve the source meaning, and the full Evidence Library archive is not offered as a bulk public download.
5. Secondary evidence images load on demand or lazily rather than delaying the main introduction.

## US-07 — Navigate and retrieve the résumé

- [x] Implement and verify US-07.

As an admissions reviewer, I want to browse the portfolio comfortably and retrieve the résumé, so that I can review Khôi’s work using my preferred device and display settings.

Primary persona: P-01. Other personas: P-02, P-03.
Requirements: FR-11, FR-12, FR-13; NFR-03, NFR-04; AC-06, AC-07.

Acceptance criteria:

1. Given a supported section link, when opened directly or selected from navigation, then the corresponding enabled content is reached in the supported layout mode.
2. Given a narrow viewport or keyboard use, when navigating or using display controls, then content remains readable without horizontal overflow and focus stays visible.
3. Given a color-mode change or reduced-motion preference, then text and controls remain usable and motion respects the visitor’s preference.
4. Given the résumé action, when activated, then the supplied résumé downloads with an accurate label and file type.
5. The contact area states “Contact details coming soon” and contains no fake channel, old-owner contact link or nonfunctional sending form.

## US-08 — Maintain source-grounded portfolio content

- [x] Implement and verify US-08.

As Khôi, I want organized editable content and clear source boundaries, so that I can keep my portfolio accurate as my experience develops.

Primary persona: P-04. Other personas: None.
Requirements: FR-01, FR-02; NFR-01, NFR-02, NFR-06; AC-03, AC-04, AC-08.

Acceptance criteria:

1. Content remains organized through the existing typed data structure and reusable presentation components, with one supported public presentation.
2. No reachable public section, route or metadata renders previous-owner identity, portrait, résumé, contacts or unrelated sample projects.
3. Maintenance guidance identifies source files, distinguishes original evidence from display assets, and records the requested-public-name versus source-name discrepancy.
4. Content updates retain the static React/TypeScript/Vite build and existing GitHub Pages compatibility without requiring a backend.
5. Appropriate automated checks and production compilation verify identity/content safeguards and supported interactions, with limitations documented.

## INVEST review

| Story | Independence and size | Value and testability |
| --- | --- | --- |
| US-01 | Bounded introduction and selected-work entry point | Reviewer understands identity; visible content and destination can be checked |
| US-02 | Two related scientific entries with explicit role and maturity limits | Mentor can assess laboratory exposure and concept status |
| US-03 | Bounded analytical and writing descriptions | Source claims and unsupported-link absence can be checked |
| US-04 | Academic information and recognition | Admissions readiness can be assessed against source material |
| US-05 | Enterprise and leadership narrative | Collaborator can distinguish actual venture work from aspirations |
| US-06 | Single evidence-access flow, reusable across records | Opening, readability, closing and focus restoration are observable |
| US-07 | Existing browsing and résumé flow; no new routing product | Device, keyboard, display preferences and download behavior are observable |
| US-08 | Maintainer journey and public-content boundaries | Data organization, public identity checks and build results are observable |

Each story can be assessed separately even when entries share presentation components. Outcomes and acceptance boundaries are fixed by approved requirements; composition and implementation remain negotiable. Scope is limited to the existing single static portfolio, making the stories estimable. US-07 preserves an existing browsing flow; US-08 preserves an existing editing flow. No additional epics or account workflows are required.

## Coverage and source boundaries

FR-01–FR-13, NFR-01–NFR-06 and AC-01–AC-08 are mapped above. All four personas are mapped in the persona artifact. Missing contact details, portrait, incomplete GPA, source/public naming discrepancy and project maturity remain explicit constraints. Supporting documents must be inspected before final copy or preview preparation.

## Extension compliance and content validation

Security Baseline: N/A, disabled. Property-Based Testing: N/A, disabled. Content validated before creation: plain UTF-8 Markdown, unique story IDs, three to five criteria per story, balanced tables and requirement references. No diagrams or embedded data parsers required.

Implementation source clarification: the PDF title suggested a paper, but the PDF contains a service certificate. US-03 was clarified to match the inspected source and approved factual-accuracy requirement. All story implementation checks refer to the verification recorded in the construction summary; the current code remains awaiting user review.
