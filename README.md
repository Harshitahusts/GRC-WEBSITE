# GRC-Flow website

Marketing site for GRC-Flow, the DPDPA readiness workspace (the GRC agent app in [Harshitahusts/GRC-Ai](https://github.com/Harshitahusts/GRC-Ai)). Built with Next.js 15 and Tailwind CSS 4. The look matches the app: same colour tokens, icons, shield mark and login screen.

```bash
npm install
npm run dev     # http://localhost:3000 (on Windows, double-click start.bat)
npm run build   # production build
```

## Where things live

- `lib/site.ts`: brand name, contact email, demo form endpoint
- `lib/content.ts`: marketing copy (workflow, registers, discovery, documents, connectors, plans, FAQs)
- `lib/demo-data.ts`: sample workspace for the live demo at `/demo`
- `app/`: pages (`/`, `/product`, `/demo`, `/connectors`, `/pricing`, `/contact`)
- `components/`: shared UI; `components/demo/` is the interactive demo (dashboard, engagement, risk register, GRC Analyst, data flows, connectors)
- `docs/competitor-features.md`: DPDP.ai feature coverage, plus claims to confirm before launch

## Live demo (`/demo`)

`/demo` has two modes:

- **Real app** (default): the actual GRC agent app's demo workspace, embedded in the page. Start it with `start-demo.bat` in the GRC-Ai folder (port 8001), or let this site's `start.bat` start it when the GRC-Ai folder sits next to this one (`..\GRC-Ai`) and has been installed once. Sign in as `demo` / `grc-demo-2026`.
- **Guided tour**: a click-through with sample data (`components/demo/`), used when the app isn't running.

Open the site and the app on the same host name (both `localhost`, or both `127.0.0.1`); the app's sign-in cookie is `SameSite=strict` and won't work inside the page otherwise. When the app is hosted, set `NEXT_PUBLIC_APP_DEMO_URL` (for example `https://demo.grc-flow.com`) before `npm run build`, on the same domain as the website.

When a connector goes live in the app, set `live: true` on it in `lib/content.ts`.

The demo form opens a pre-filled email until `demoFormEndpoint` in `lib/site.ts` is set to a form backend URL (Brevo, Formspree, etc.).
