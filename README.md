# GRC-Flow website

Marketing site for GRC-Flow, the DPDPA readiness workspace (the GRC agent app in [Harshitahusts/GRC-Ai](https://github.com/Harshitahusts/GRC-Ai)). Built with Next.js 15 and Tailwind CSS 4. The look matches the app: same colour tokens, icons, shield mark and login screen.

```bash
npm install
npm run dev     # http://localhost:3000 (on Windows, double-click start.bat)
npm run build   # production build
```

## Deploy

The website runs on one Oracle Cloud server together with the GRC Flow app (`app.grc-flow.com`), set up by the app's script. The header and footer **Sign in** links open the app (`NEXT_PUBLIC_APP_URL`, default `https://app.grc-flow.com`). See [deploy/README.md](deploy/README.md).

## Where things live

- `lib/site.ts`: brand name, contact email, form endpoints, and the business details shown in the footer and policies (fill in the `[placeholders]` before launch)
- `lib/content.ts`: marketing copy (workflow, registers, discovery, documents, connectors, plans, FAQs)
- `lib/demo-data.ts`: sample workspace for the live demo at `/demo`
- `app/`: pages (`/`, `/product`, `/demo`, `/connectors`, `/pricing`, `/contact`) and legal pages (`/privacy`, `/terms`, `/cookies`, `/privacy-request`, `/unsubscribe`, `/accessibility`)
- `components/`: shared UI; `components/demo/` is the interactive demo (dashboard, engagement, risk register, GRC Analyst, data flows, connectors)
- `docs/competitor-features.md`: DPDP.ai feature coverage, plus claims to confirm before launch
- `docs/compliance-checklist.md`: legal pages, consent, accessibility and third-party audit, with the steps left before launch
- `docs/email-footer.md`, `docs/licenses.md`: unsubscribe footer for emails, and licences for fonts, icons and packages

## Live demo (`/demo`)

On the live site, `/demo` is the **guided tour**: a click-through with sample data. When the site runs on your own computer or office network, it also has a **Real app** tab:

- **Real app**: the actual GRC agent app's demo workspace, embedded in the page. Start it with `start-demo.bat` in the GRC-Ai folder (port 8001), or let this site's `start.bat` start it when the GRC-Ai folder sits next to this one (`..\GRC-Ai`) and has been installed once. Sign in as `demo` / `grc-demo-2026`.
- **Guided tour**: a click-through with sample data (`components/demo/`), used when the app isn't running.

Open the site and the app on the same host name (both `localhost`, or both `127.0.0.1`); the app's sign-in cookie is `SameSite=strict` and won't work inside the page otherwise. To show a hosted demo workspace on the live site too, set `NEXT_PUBLIC_APP_DEMO_URL` (for example `https://demo.grc-flow.com`, on the same domain as the website) before `npm run build`.

## DPDP deadline countdown

`components/deadline-countdown.tsx` counts down live to **13 May 2027, 00:00 IST** (Asia/Kolkata), when the DPDP Act's main duties apply. It shows as a strip pinned above the menu on every page except `/demo` (both stay on screen while scrolling), and as a large clock in the homepage hero. The deadline is fixed in IST, so every visitor sees the same countdown whatever their time zone, and both switch to "The DPDP Act's main duties now apply" once it passes. To change the date, edit `DPDP_DEADLINE` in that file.

## Cookie consent

A consent pop-up (`components/cookie-consent.tsx`) asks first-time visitors to **Reject all**, **Accept all** or **Customise** (strictly necessary, analytics, marketing). Until they choose, the rest of the site is locked (dimmed, inert, no scrolling); `/cookies`, `/privacy` and `/terms` stay readable so people can check what they're agreeing to. Reject all is always as easy as Accept all, so nobody is forced to accept. The choice is saved for six months in the `grcflow_consent` cookie; the cookie button in the corner and **Cookie settings** in the footer reopen it.

The site sets no analytics or marketing cookies today. When you add a tool, load it only after consent:

```ts
import { CONSENT_EVENT, hasConsent } from "@/lib/consent";

if (hasConsent("analytics")) loadAnalytics();
window.addEventListener(CONSENT_EVENT, () => { if (hasConsent("analytics")) loadAnalytics(); });
```

Changing the categories or what they're used for? Bump `CONSENT_VERSION` in `lib/consent.ts` so everyone is asked again.

When a connector goes live in the app, set `live: true` on it in `lib/content.ts`.

The demo form opens a pre-filled email until `demoFormEndpoint` in `lib/site.ts` is set to a form backend URL (Brevo, Formspree, etc.).
