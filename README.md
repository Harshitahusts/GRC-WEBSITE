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

When a connector goes live in the app, set `live: true` on it in `lib/content.ts`.

The demo form opens a pre-filled email until `demoFormEndpoint` in `lib/site.ts` is set to a form backend URL (Brevo, Formspree, etc.).
