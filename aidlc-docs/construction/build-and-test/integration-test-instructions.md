# Integration Test Instructions

## Scope

This is a static React application with no backend services, database, or API contracts. The application-level integration test renders the App shell together with portfolio data, the Bioengineering presentation, and shared UI behavior.

## Automated Rendered-Application Test

Run:

```bash
npx vitest run src/App.test.tsx
```

The verified result is 8 tests passing. The complete `npm test` run also executes this file and the data, registry, layout, and accessibility regression tests.

## Production-Preview Smoke Check

1. Build the static site with `npm run build`.
2. Start the preview with `npm run preview -- --host 127.0.0.1`.
3. Open the URL printed by Vite.
4. Verify the page title and Bioengineering content, section navigation, theme control, mobile menu, contact placeholder, and resume download.
5. Confirm the page has no horizontal overflow at a narrow viewport and all five project/hero illustrations load.

The verified preview returned HTTP 200 for `/`; the resume returned HTTP 200, all 5 of 5 images loaded, and the inspected 312-pixel browser viewport had no horizontal overflow.

## Not Applicable

- Integration with external services or APIs: none exist.
- Separate browser automation: no dedicated browser automation suite is configured.
- Service endpoint setup or cleanup: not required.

## Failure Recovery

Run the failing test file first, fix the earliest assertion or render issue, and then rerun `npm test` and the production-preview smoke check.
