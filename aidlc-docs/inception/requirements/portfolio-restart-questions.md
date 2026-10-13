# Portfolio Restart — Requirements Questions

The previous model's implementation has been reverted to the initial committed foundation. Original sources and audit history are retained. Use Lê Nguyên Khôi as explicitly requested; the résumé and certificates use Nguyen Le Khoi / Nguyễn Lê Khôi. This discrepancy will remain documented.

Please fill in each blank [Answer]: tag. Previously recorded extension decisions are retained below and can be changed.

## Question 1 — Primary audience
Who should the portfolio primarily serve?

A) University admissions and research mentors, with entrepreneurship as a supporting thread (Recommended)
B) Biotech collaborators and venture opportunities, with research as the foundation
C) Other (describe after [Answer]:)

[Answer]: A

## Question 2 — Visual direction
Which direction should shape the new design?

A) Scientific editorial: warm ivory, deep green, specimen-inspired diagrams and research case studies; an entrepreneurial thread throughout (Recommended; retains the earlier recorded preference)
B) Biotech venture studio: dark ink, bright green, bold typography and a more product-oriented presentation
C) Other (describe after [Answer]:)

[Answer]: A

## Question 3 — Existing template structure
How should the restored Engineering and Business templates be used?

A) Build one dedicated portfolio using the useful existing components and data structure; remove the alternate presentation and selector (Recommended; retains the earlier recorded preference)
B) Retain both presentations and customize both for Khôi
C) Other (describe after [Answer]:)

[Answer]: A

## Question 4 — Evidence presentation
How should the supplied Evidence Library appear on the public website?

A) Use it to verify copy; show concise evidence summaries and original illustrations, keeping document scans out of the public site (Recommended; retains earlier scope)
B) Include readable certificate previews alongside research, awards and community entries
C) Other (describe after [Answer]:)

[Answer]: C — Combine A and B: evidence-backed summaries and original illustrations, plus readable certificate previews alongside relevant entries.

## Question 5 — Security Extensions
Should security extension rules be enforced for this project?

A) Yes — enforce all SECURITY rules as blocking constraints (recommended for production-grade applications)
B) No — skip all SECURITY rules (suitable for PoCs, prototypes, and experimental projects)
X) Other (describe after [Answer]:)

[Answer]: B

Retained from the prior recorded Requirements Analysis decision; no full extension rule file has been loaded.

## Question 6 — Property-Based Testing Extension
Should property-based testing (PBT) rules be enforced for this project?

A) Yes — enforce all PBT rules as blocking constraints (recommended for projects with business logic, data transformations, serialization, or stateful components)
B) Partial — enforce PBT rules only for pure functions and serialization round-trips (suitable for projects with limited algorithmic complexity)
C) No — skip all PBT rules (suitable for simple CRUD applications, UI-only projects, or thin integration layers with no significant business logic)
X) Other (describe after [Answer]:)

[Answer]: C

Retained from the prior recorded Requirements Analysis decision; no full extension rule file has been loaded.

## Working assumptions

- English portfolio copy with the requested accented Vietnamese display name.
- Contact details coming soon, with no invented email or reused previous-owner channels; retained from the earlier recorded contact decision.
- Preserve React, TypeScript, Vite, typed src/data modules, responsive navigation and GitHub Pages compatibility.
- Lead with microbiology research and the water-management challenge concept. Connect computational modelling, responsible AI, TheHoopHub, neuroscience outreach and sports leadership to the broader story.
- Describe the water-management work as a challenge project/concept unless implementation evidence establishes more. Attribute football-model metrics to the résumé, rather than independently validated results.
- Biotech entrepreneurship is an interest and intended direction. TheHoopHub is the documented sports-retail venture.
- Omit blank résumé fields, unsupported venture claims and unrelated previous-owner content.
- This workflow prepares local changes; publication is outside the current scope.
