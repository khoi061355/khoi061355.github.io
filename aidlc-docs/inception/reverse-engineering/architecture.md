# System Architecture

## Current system

A static React 19 and TypeScript portfolio built with Vite for Lê Nguyên Khôi. App uses one Bioengineering presentation, typed content modules, the existing hash/layout hook and Chakra's provider/color mode. There is no backend, database, public sending form or visitor template selector. GitHub Actions/GitHub Pages configuration is retained.

App resolves enabled sections and renders all sections in full-page layout or the active section in chapter layout. Nine sections are enabled: Home, Research, About, Education, Experience, Recognition, Methods, Evidence and Contact. The existing local-journal URL parser remains for safe handling of stale post links; empty writing data yields a not-found state with a selected-work return action.

## Responsibilities and data flow

main.tsx mounts the provider and App. App coordinates hash and layout state and resolves the dedicated template. EngineeringShell is reused as the structural shell but exposes bioengineering as its public ID. Navbar supports section navigation, color mode, chapter/full-page mode and a mobile menu. Main-content section links route through the shell's existing navigation action.

Section components consume shared typed records from src/data. Projects describe source-grounded roles and maturity. Gallery reuses Chakra Dialog to present titled, correctly oriented evidence images, larger views, focus containment and focus restoration. Source images load lazily as thumbnails; detail images load on opening. Contact offers an honest availability placeholder and original résumé download.

## Integration and delivery

No external API or persistent backend storage. Browser local storage retains layout and color-mode preferences. Vite imports local assets, including the DOCX through an explicit URL import. The full source archive is not bundled. The existing build produces dist/ for GitHub Pages; no deployment was performed in this workflow.

This replaces stale architecture descriptions of multiple public templates and a Neutral template absent from the restored actual registry. Original evidence and historical audit records remain preserved.

## Review preview layer

One public portfolio presentation remains. The user-requested ?preview=themes mode adds three radio-selectable visual directions without changing the registry or content: Editorial, Venture Studio and Research Atlas. The selected preview is encoded in the URL and root data attribute; default public rendering is the user-selected Venture Studio. Tokens propagate to portaled evidence dialogs. Theme selection is complete; Code Generation review is pending.
