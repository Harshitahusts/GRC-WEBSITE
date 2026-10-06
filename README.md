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
- `app/`: pages (`/`, `/product`, `/connectors`, `/pricing`, `/contact`) and legal pages (`/privacy`, `/terms`, `/cookies`, `/privacy-request`, `/unsubscribe`, `/accessibility`)
- `components/`: shared UI
- `public/screens/`: real screenshots of the GRC Flow app (sample clients), used on the home page
- `docs/competitor-features.md`: DPDP.ai feature coverage, plus claims to confirm before launch
- `docs/compliance-checklist.md`: legal pages, consent, accessibility and third-party audit, with the steps left before launch
- `docs/email-footer.md`, `docs/licenses.md`: unsubscribe footer for emails, and licences for fonts, icons and packages

## The app (`app.grc-flow.com`)

"Open GRC Flow" and "Sign in" go to the real app at `site.appUrl` (`https://app.grc-flow.com`, or `NEXT_PUBLIC_APP_URL` at build time). The old `/demo` mock-up is gone; `/demo` links redirect to the app. "Book a demo" goes to the contact form.

## DPDP deadline countdown

`components/deadline-countdown.tsx` counts down live to **13 May 2027, 00:00 IST** (Asia/Kolkata), when the DPDP Act's main duties apply. It shows as a strip pinned above the menu on every page (both stay on screen while scrolling), and as a large clock in the homepage hero. The deadline is fixed in IST, so every visitor sees the same countdown whatever their time zone, and both switch to "The DPDP Act's main duties now apply" once it passes. To change the date, edit `DPDP_DEADLINE` in that file.

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

## Blog

Posts live in `lib/blog/posts/<slug>.tsx`, one file each (copy an existing post as a template),
and are listed in `lib/blog/index.ts`. Each post has a title (under ~60 characters), a search
description (~150 characters), key takeaways, FAQs and sources; the page adds Article, FAQ and
breadcrumb structured data, and the post appears in `/sitemap.xml`, `/blog/rss.xml` and the blog
index automatically. A post with a future `published` date stays hidden until that day's build.
Add new posts to `public/llms.txt` too. Facts about the law should cite the Act, the Rules or a
reputable source, and every post ends with a not-legal-advice note.
