# Portfolio Design Selection

Three working visual treatments are available in local comparison mode at http://127.0.0.1:4174/?preview=themes. Each shares the same source-grounded content and functionality. The default public rendering remains Scientific Editorial until a final direction is chosen.

## Question 1
Which direction should become the final portfolio design?

A) Scientific Editorial — warm ivory, botanical greens, serif typography and a research-journal feel
B) Biotech Venture Studio — deep ink, luminous greens, bold sans typography and rounded venture-oriented compositions
C) Research Atlas — white and blue, precise lines, reversed desktop hero and academic presentation
X) Other (describe the preferred combination or changes after [Answer]:)

[Answer]: B — Biotech Venture Studio, explicitly selected by the user.

## Verification

39 tests across eight files passed; lint and production build passed. Browser screenshots captured at desktop 1440 pixels and mobile 390 pixels; each design fit a 320-pixel viewport with no horizontal overflow. All three evidence dialogs opened and inherited their design colors. The preview control switched the current design and URL without losing portfolio content. No browser runtime exceptions were captured.

SVG variants were XML-validated before creation. Optional Security Baseline and Property-Based Testing extensions remain disabled, compliance N/A. The existing Vite chunk-size warning remains non-blocking (approximately 669.3 kB JS / 196.2 kB gzip).

The selected default is now Venture Studio. The user additionally requested aligned text, clearer uncropped diagrams, emphasized academic results and removal of the last two community-evidence cards; these refinements are complete. Public root preview: http://127.0.0.1:4174/.
