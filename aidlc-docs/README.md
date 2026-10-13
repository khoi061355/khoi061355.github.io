# Portfolio Documentation

The active workflow is the portfolio restart for Lê Nguyên Khôi. Earlier customization and foundation-workflow records are historical; their implementation/approval statuses do not govern this restart.

## Active artifacts

- State: aidlc-state.md.
- Requirements: inception/requirements/portfolio-restart-requirements.md.
- Stories and personas: inception/user-stories/portfolio-restart-stories.md and portfolio-restart-personas.md.
- Execution plan: inception/plans/portfolio-restart-execution-plan.md.
- Code plan: construction/plans/portfolio-restart-code-generation-plan.md.
- Source map, implementation summary and maintenance guide: construction/portfolio-restart/code/.
- Audit: audit.md, append-only.

Code Generation is complete and awaiting review. The implementation passed 32 tests, lint and production build, plus local browser smoke checks. The formal Build and Test stage follows only after Code Generation review approval. Existing build-and-test documents from earlier workflows are historical until the active stage refreshes them.

Application code remains at the workspace root under src/, public/ and index.html. Documentation is kept here. Original résumé and Evidence Library inputs are preserved.

## Design review previews

Three local comparison options are ready at http://127.0.0.1:4174/?preview=themes. The selection file is construction/portfolio-restart/code/design-selection-questions.md. Latest tests: 39 passing; lint/build and browser checks passed. Venture Studio was subsequently selected and refined; the public root preview is http://127.0.0.1:4174/. Latest verification: 40 tests, lint/build and browser checks passed. Six evidence cards remain.
