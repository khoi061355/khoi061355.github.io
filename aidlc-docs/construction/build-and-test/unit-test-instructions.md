# Unit Test Execution Instructions

## Run the Complete Suite

From the repository root, run:

```bash
npm test
```

The verified result is 32 tests passing across 6 files, with 0 failures. Vitest prints the result in the terminal. Coverage reporting is not configured; do not infer a coverage percentage or report directory.

## Test Inventory

| File | Coverage |
| --- | --- |
| `src/App.test.tsx` | Rendered portfolio, navigation, theme/layout behavior, contact placeholder, and resume |
| `src/templates/templateRegistry.test.ts` | Single Bioengineering template registry and supported layout contract |
| `src/test/data/navigation.test.ts` | Navigation labels, section IDs, and visible sections |
| `src/test/data/portfolio.test.ts` | Source-grounded profile and project data, resume, and removal of old template content |
| `src/themeAccessibility.test.ts` | Theme contrast, focus, and reduced-motion safeguards |
| `src/hooks/usePortfolioLayout.test.ts` | Layout mode and navigation behavior |

## Run a Focused Test

Run one file with:

```bash
npx vitest run src/App.test.tsx
```

The verified rendered application test result is 8 tests passing. Replace the path with the failing test file when debugging another suite.

## Fixing a Failure

1. Read the failing test name and first assertion message.
2. Inspect the source file named in the stack trace.
3. Fix the implementation or revise an assertion only when approved behavior changed.
4. Rerun the focused file and then `npm test`.
