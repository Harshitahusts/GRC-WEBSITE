# GRC-Flow website

Marketing site for GRC-Flow, DPDP Act compliance software for Indian businesses. Built with Next.js 15 and Tailwind CSS 4.

```bash
npm install
npm run dev     # http://localhost:3000 (on Windows, double-click start.bat)
npm run build   # production build
```

## Where things live

- `lib/site.ts`: brand name, contact email, demo form endpoint
- `lib/content.ts`: all copy (checks, timeline, penalties, DPDP duties, platform features, modules, integrations, plans, FAQs)
- `app/`: pages (`/`, `/platform`, `/modules`, `/integrations`, `/pricing`, `/demo`)
- `components/`: shared UI; `ledger.tsx` is the homepage hero
- `docs/competitor-features.md`: DPDP.ai feature coverage, plus claims to confirm before launch

To add an integration or module, add an entry in `lib/content.ts`; the pages pick it up.

The demo form opens a pre-filled email until `demoFormEndpoint` in `lib/site.ts` is set to a form backend URL (Brevo, Formspree, etc.).
