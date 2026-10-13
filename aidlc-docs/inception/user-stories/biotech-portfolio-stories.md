# User Stories - Bioengineering Portfolio

**Status**: Approved by the user on 2026-10-12.

## Story Approach

- **Structure**: Research-led visitor journey with complementary entrepreneurship, evidence, access, and author-maintenance stories.
- **Personas**: Research and admissions reviewer; biotech and entrepreneurship collaborator; portfolio author.
- **Acceptance criteria**: Testable Given/When/Then scenarios tied to approved requirements.
- **Source rule**: Claims must trace to the approved resume or Evidence Library. Student concepts must not be framed as deployed products, clinical services, or professional credentials.

## Story Summary

| ID | Title | Primary Persona | Priority |
|---|---|---|---|
| BK-US-01 | Understand Khôi's research direction quickly | Research and Admissions Reviewer | High |
| BK-US-02 | Assess hands-on microbiology experience accurately | Research and Admissions Reviewer | High |
| BK-US-03 | Explore solution-building and entrepreneurial initiative | Biotech and Entrepreneurship Collaborator | High |
| BK-US-04 | Review supporting education, achievements, and community evidence | Research and Admissions Reviewer | Medium |
| BK-US-05 | Navigate and read the portfolio accessibly | Portfolio Visitor | High |
| BK-US-06 | Understand contact availability honestly | Portfolio Visitor | Medium |
| BK-US-07 | Maintain an evolving student portfolio | Portfolio Author | High |

## BK-US-01: Understand Khôi's Research Direction Quickly

**As a** research or admissions reviewer,  
**I want** the opening to explain Khôi's biology focus and engineering interests,  
**so that** I can understand his academic direction without mistaking him for a credentialed bioengineer.

**Requirements**: Approved Requirements 1, 2, 4, and 5.

### Acceptance Criteria

- Given I open the portfolio, when the first screen renders, then I see Nguyễn Lê Khôi's name and his biology-specialized student identity.
- Given the opening introduces his interests, when it describes bioengineering, then the wording presents an interest and direction rather than an earned professional qualification.
- Given the content hierarchy is research-led, when I scan the opening, then microbiology and water-quality work appear before the complementary venture story.

## BK-US-02: Assess Hands-On Microbiology Experience Accurately

**As a** research mentor or admissions reviewer,  
**I want** the Institute of Microbiology and Biotechnology internship and related project work described clearly,  
**so that** I can assess his hands-on exposure without confusing participation with independent clinical or commercial achievement.

**Requirements**: Approved Requirements 4, 5, and 10.

### Acceptance Criteria

- Given I review the experience section, when I read the internship card, then it shows the Jun–Aug 2026 role and the Institute of Microbiology and Biotechnology.
- Given the card describes shrimp-health research, when it mentions diagnostic development, bacterial culture, or water-quality evaluation, then the language accurately indicates participation or support.
- Given I open a relevant visual, when it depicts a certificate or activity, then its caption and alternative text identify the evidence without exposing unnecessary document details.

## BK-US-03: Explore Solution-Building and Entrepreneurial Initiative

**As a** biotech or entrepreneurship collaborator,  
**I want** to understand how Khôi connects science, practical problem-solving, and early venture experience,  
**so that** I can see the range of his interests and initiative.

**Requirements**: Approved Requirements 4, 5, and 10.

### Acceptance Criteria

- Given I review selected projects, when I open the water-management concept, then I can identify it as a challenge concept using automated water-quality sensing and an AI-informed treatment workflow.
- Given I review the water-management concept, when it describes the solution, then it does not claim the system was deployed, clinically validated, or proven in field use.
- Given I read about TheHoopHub, when I view the venture entry, then it is described as a co-founded basketball online shop rather than a biotechnology company.
- Given I scan the portfolio, when the venture is positioned alongside research, then the site makes its entrepreneurial value clear without misrepresenting its sector.

## BK-US-04: Review Supporting Education, Achievements, and Community Evidence

**As a** research or admissions reviewer,  
**I want** relevant academic results, recognition, leadership, and community activities presented in a coherent supporting record,  
**so that** I can understand Khôi's preparation beyond the headline research.

**Requirements**: Approved Requirements 4, 5, and 8.

### Acceptance Criteria

- Given I review education, when grades or examination results are shown, then only complete source-provided values appear and the incomplete Grade 12 Semester 1 GPA is omitted.
- Given I review awards, when the British Biology Olympiad recognition is displayed, then it uses the source's “Highly Commended” wording and qualified ranking statement.
- Given I review activities, when community service, wellbeing leadership, or sports are included, then they remain distinct from formal research employment.
- Given I view the gallery, when supplied images are used, then each image has accurate alternative text and is not an unrelated portfolio owner's image.

## BK-US-05: Navigate and Read the Portfolio Accessibly

**As a** portfolio visitor,  
**I want** clear navigation and readable content on desktop and mobile,  
**so that** I can explore the research-led portfolio using my preferred device and input method.

**Requirements**: Approved Requirements 3 and 10; Non-Functional Requirements 1 and 2.

### Acceptance Criteria

- Given I navigate with a keyboard, when I move through links, buttons, and controls, then focus is visible and controls have meaningful accessible names.
- Given I visit on a narrow viewport, when sections and images render, then text remains readable and the layout has no unintended horizontal overflow.
- Given I choose either supported color mode or layout mode, when I navigate between sections, then content and navigation remain usable.
- Given the site is built for GitHub Pages, when the static production build runs, then its links and bundled assets remain compatible with the configured deployment.

## BK-US-06: Understand Contact Availability Honestly

**As a** portfolio visitor,  
**I want** the contact section to tell me whether public contact information is available,  
**so that** I am not misled by fabricated or borrowed contact details.

**Requirements**: Approved Requirements 7 and 8.

### Acceptance Criteria

- Given no public email, phone, or social profile has been supplied, when I reach the contact section, then I see neutral “Contact details coming soon” copy.
- Given the placeholder is shown, when I try to activate it, then it is not a fake clickable email or link.
- Given I inspect the rendered portfolio, when profile and contact details appear, then none belong to the previous portfolio owner.

## BK-US-07: Maintain an Evolving Student Portfolio

**As a** portfolio author,  
**I want** Khôi's profile content and supplied evidence organized in the existing typed data and asset structure,  
**so that** he can update the portfolio without rewriting its presentation.

**Requirements**: Approved Requirements 1, 3, 6, 8, 9, and 10; Non-Functional Requirements 2 and 3.

### Acceptance Criteria

- Given I need to update a profile section, when I inspect `src/data/`, then its content remains organized in clearly named typed modules.
- Given the site supports one presentation, when I inspect the template registry and selector, then no Business option is exposed or persisted.
- Given I inspect locally bundled media, when I identify an asset, then it has an understandable name and matching descriptive alternative text.
- Given the portfolio is rebuilt, when tests, lint, and production build run, then the app remains type-safe and deployment-compatible.

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | N/A | Disabled by user choice during Requirements Analysis. |
| Property-Based Testing | N/A | Disabled by user choice during Requirements Analysis. |
