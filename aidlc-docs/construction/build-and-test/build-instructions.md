# Build Instructions

## Prerequisites

| Requirement | Project value |
| --- | --- |
| Runtime | Node.js 20.19 or newer; verified locally with Node.js 24.0.0 |
| Package manager | npm; verified locally with npm 11.3.0 |
| Build tools | TypeScript and Vite via the package scripts |
| Secrets | None |
| Optional environment variable | `VITE_BASE_PATH` for a non-root GitHub Pages path |
| Output directory | `dist/` |

The GitHub Pages workflow in `.github/workflows/deploy.yml` installs locked dependencies with `npm ci`, derives `VITE_BASE_PATH`, and builds the static site.

## Build Steps

From the repository root:

1. Install locked dependencies with `npm ci`.
2. Run `npm test` and `npm run lint`.
3. Run `npm run build`. This runs `tsc -b` followed by `vite build`.
4. Confirm `dist/index.html` and `dist/assets/` were generated.
5. Run `npm run preview -- --host 127.0.0.1` and open the local URL Vite prints.

For local deployment-path testing, set `VITE_BASE_PATH` before building. No environment variable or secret is needed for local development.

## Verified Build Snapshot

- **Result**: TypeScript and Vite production build passed.
- **Build time**: 3.79 seconds.
- **Artifacts**: Static entry page, bundled JavaScript and CSS, and the downloadable resume under `dist/`.
- **JavaScript**: 756.12 kB minified; 232.25 kB gzip.
- **CSS**: 12.21 kB minified; 3.71 kB gzip.
- **Warning**: Vite reports that the JavaScript chunk exceeds its 500 kB advisory threshold. This did not fail the build.
- **Preview**: The local production preview returned HTTP 200 for `/`.

## Troubleshooting

### Dependency Installation Fails

- Confirm Node.js is 20.19 or newer and the terminal is at the repository root.
- Keep `package-lock.json` and use `npm ci` for reproducible installs.

### TypeScript or Build Fails

Run `npm test`, then inspect the first file and diagnostic reported by the failed command. Check typed values against `src/types/portfolio.ts` and confirm imported assets exist.

### Built Assets Do Not Load

For GitHub Pages, confirm `VITE_BASE_PATH` matches the deployment path. The checked-in workflow derives it from the repository name.
