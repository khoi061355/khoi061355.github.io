# Portfolio Restart — Story Generation Plan

Status: Approach approved; story and persona generation complete; generated artifacts approved by the user (“approve and continue”).

Requirements: aidlc-docs/inception/requirements/portfolio-restart-requirements.md.

## Progress

- [x] 1. Review approved requirements and assess the value of user stories.
- [x] 2. Define story scope, personas, format and breakdown alternatives.
- [x] 3. Receive explicit approval of the story approach below; validate the answer.
- [x] 4. Generate portfolio-restart-personas.md covering admissions reviewers, research mentors, prospective collaborators and Khôi as content maintainer.
- [x] 5. Generate portfolio-restart-stories.md with eight focused stories and observable acceptance criteria.
- [x] 6. Map each story to personas and FR/NFR/AC requirements.
- [x] 7. Check every story against INVEST: Independent, Negotiable, Valuable, Estimable, Small and Testable.
- [x] 8. Check factual boundaries, evidence presentation, accessibility and completeness; update state and checkboxes.
- [x] 9. Present generated stories and personas for their required review before Workflow Planning.

## Proposed story set

| Story | User outcome | Requirements |
| --- | --- | --- |
| US-01 | Understand Khôi's student bioengineering identity and interests immediately | FR-01, FR-03, AC-01 |
| US-02 | Explore microbiology research and distinguish the water-management concept from completed lab participation | FR-04, FR-05, AC-02 |
| US-03 | Understand quantitative modelling and responsible-AI work with accurate source limits | FR-06, AC-02 |
| US-04 | Assess academic foundations, methods and recognition | FR-09, AC-01 |
| US-05 | Understand entrepreneurial experience, outreach, community work and sports leadership | FR-07, FR-08, AC-02 |
| US-06 | Read evidence summaries and open accessible certificate previews | FR-10, NFR-03, NFR-05, AC-05 |
| US-07 | Navigate on mobile or desktop, choose display modes, download the résumé and understand contact availability | FR-11, FR-12, FR-13, NFR-03, NFR-04, AC-06, AC-07 |
| US-08 | Maintain accurate portfolio content through the existing typed structure | FR-01, FR-02, NFR-01, NFR-02, NFR-06, AC-03, AC-04, AC-08 |

These are proposed outcomes for generation, not completed user stories. Split an outcome if its acceptance criteria would otherwise become too broad; maintain traceability to this plan.

## Format and acceptance criteria

Use “As a [persona], I want [outcome], so that [value].” Each story has a short title, primary persona, source/requirement references and three to five observable acceptance criteria. Use Given/When/Then where an interaction is involved and direct checks for content accuracy. Do not introduce release schedules, sprint commitments or implementation detail.

## Breakdown alternatives

- Journey-based: follows introduction, exploration, evidence and next action; strongest for assessing a complete visitor experience.
- Feature-based: groups content and controls; convenient for checking coverage, but can fragment the narrative.
- Persona-based: highlights different reviewer needs; can duplicate shared interactions.
- Domain-based: separates science, entrepreneurship and community; useful for subject coverage, but can obscure navigation needs.
- Epic-based: supports larger systems; adds unnecessary hierarchy for this single portfolio.

Recommendation: journey-based stories, with persona and requirement mappings. The maintainer story covers the separate editing journey. The approved requirements already establish the audience, content scope, technical boundaries and evidence treatment, so no additional factual questions are needed.

## Question 1 — Story approach approval

Approve the proposed story-generation approach?

A) Approve the recommended journey-based approach, proposed story set and acceptance-criteria format; continue to story and persona generation
B) Request changes to the story scope, grouping or format (describe after [Answer]:)
C) Other (describe after [Answer]:)

[Answer]: A — approved by “approve and continue”.

## Mandatory outputs

Generate aidlc-docs/inception/user-stories/portfolio-restart-stories.md and portfolio-restart-personas.md only after approach approval. Map personas to stories and validate INVEST criteria. Generated artifacts require their own review before Workflow Planning under the requested AI-DLC workflow.

## Extension compliance and content validation

Security Baseline: N/A, disabled. Property-Based Testing: N/A, disabled. Content checked before writing: valid plain Markdown tables and checkboxes, no diagrams, balanced inline delimiters, explicit Other option and [Answer]: tag.
