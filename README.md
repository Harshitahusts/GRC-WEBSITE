# GRC-Flow website

Marketing site for GRC-Flow, built with Next.js 15 and Tailwind CSS 4.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Where things live

- `lib/site.ts`: brand name, contact email, demo form endpoint
- `lib/content.ts`: all copy (frameworks, checks, platform features, modules, integrations, plans, FAQs)
- `app/`: pages (`/`, `/platform`, `/modules`, `/integrations`, `/pricing`, `/demo`)
- `components/`: shared UI; `ledger.tsx` is the homepage hero
- `docs/competitor-features.md`: Sprinto and DPDP.ai feature coverage, plus claims to confirm before launch

To add an integration or module, add an entry in `lib/content.ts`; the pages pick it up.

The demo form opens a pre-filled email until `demoFormEndpoint` in `lib/site.ts` is set to a form backend URL (Brevo, Formspree, etc.).
