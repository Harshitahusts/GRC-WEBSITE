# Website compliance checklist

Status of the website (not the app) as of 2 October 2026. Policies are drafts. **Have a lawyer review them before launch.**

| Item | Status | Where |
|---|---|---|
| Privacy policy (DPDP Act notice, purposes, retention, rights, Grievance Officer) | Done, needs legal review | `/privacy` |
| Terms of service | Done, needs legal review | `/terms` |
| Cookie policy (every cookie listed) | Done | `/cookies` |
| Cookie consent pop-up (Reject all, Accept all, Customise; equal weight; must be answered before using the site, except on the policy pages; reopenable from the corner button) | Done | `components/cookie-consent.tsx` |
| Consent on forms (required, unticked, linked to the policy; separate optional marketing opt-in) | Done | `/contact` |
| No unnecessary data (only name and email required; everything else optional) | Done | `/contact`, `/privacy-request` |
| Age check (18+ confirmation; policy says the site isn't for children) | Done | `/contact`, `/privacy#children` |
| Data rights and deletion requests (access, correct, delete, withdraw, nominate, grievance) | Done | `/privacy-request` |
| Unsubscribe page and email footer | Done | `/unsubscribe`, `docs/email-footer.md` |
| Business details and Grievance Officer in footer and policies | **Placeholders, fill in** | `lib/site.ts` → `business` |
| Third-party SDKs | None: no analytics, ads, tag managers, external fonts, images or scripts | Audit below |
| Dark patterns | None found: banner choices equal, no pre-ticked boxes, no confirm-shaming, unsubscribe takes one step without sign-in | |
| Hidden fees | None: pricing and terms state the quote is the full price including GST | `/pricing`, `/terms#fees` |
| Fake reviews or testimonials | None on the site. Demo data is labelled as sample data | |
| Unsupported claims | Removed "drafted in hours" and "reply within one working day". Remaining product claims checked against the GRC-Ai code | |
| Accessibility (WCAG 2.1 AA: contrast, alt text, labels, keyboard, reduced motion) | axe-core: 0 violations on every page | `/accessibility` |
| Licences (fonts, icons, packages) | Done | `docs/licenses.md` |

## Third-party audit (2 October 2026)

- Runtime dependencies: `next`, `react`, `react-dom` only.
- No `<script>`, `<img>`, `<link>` or `fetch` to outside domains in the source.
- Outbound requests: the demo form and privacy form endpoints (empty by default, so they fall back to `mailto:`), and the embedded GRC agent demo app.
- When you set `demoFormEndpoint` or `privacyRequestEndpoint` (for example to Brevo), name that provider as a Data Processor in the privacy policy, and sign a data processing agreement with it.

## Before launch

1. Fill in the remaining `[placeholders]` in `lib/site.ts` → `business` (street address, CIN, GSTIN, Grievance Officer name), and confirm the registered name of Suscin Innovation Labs.
2. Privacy requests and grievances go to talk@grc-flow.com. Make sure someone checks it, since the DPDP Act sets response deadlines.
3. Have a lawyer review `/privacy`, `/terms` and `/cookies`. Confirm the retention periods and that data is stored in India.
4. Name your hosting and email providers in the privacy policy.
5. Confirm the "no charges outside the quote" commitment on `/pricing` and `/terms` matches how you'll bill.
