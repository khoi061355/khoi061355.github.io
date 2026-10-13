# Performance Test Instructions

## Scope

The portfolio is a static GitHub Pages site with no application server, API, database, or user-specific runtime workload. Validate production build output and local asset delivery; load, stress, concurrency, throughput, and autoscaling tests do not apply.

## Static Build Measurement

Run:

```bash
npm run build
```

Record the build duration and JavaScript/CSS sizes reported by Vite. The verified snapshot for this change is:

| Measure | Result |
| --- | --- |
| Vite build time | 3.79 seconds |
| JavaScript bundle | 756.12 kB minified; 232.25 kB gzip |
| CSS bundle | 12.21 kB minified; 3.71 kB gzip |
| Preview response | HTTP 200 for `/` |

Vite reports the JavaScript chunk above its 500 kB advisory threshold. The production build succeeds; the warning is tracked and non-blocking.

## Delivery Smoke Check

Use `npm run preview -- --host 127.0.0.1`, then verify the page and resume asset load, all five illustrations render, and the mobile-width page has no horizontal overflow. These checks were completed for this build.

## Not Applicable

- Request latency under server load, throughput, and concurrent-user targets.
- API/database/cache stress and capacity tests.
- Lighthouse performance thresholds; no controlled Lighthouse run or agreed threshold is part of this change.
