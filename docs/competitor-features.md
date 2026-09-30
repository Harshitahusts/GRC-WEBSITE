# Competitor features to cover in GRC-Flow

Reference list of what DPDP.ai offers, so GRC-Flow's product and site cover the same ground.

**Source note:** Sprinto's site blocks automated access (Cloudflare), and DPDP.ai's page could not be parsed from this environment. The lists below come from general public knowledge of both products, not a fresh read of their sites. Check them against the live sites before relying on them.

## Scope

GRC-Flow is now DPDP-only. Other frameworks (SOC 2, ISO 27001, GDPR, HIPAA and so on) and Sprinto-style multi-framework features were removed from the site on request. They can be revisited later.

## DPDP.ai (India's Digital Personal Data Protection Act, 2023)

| Feature | GRC-Flow equivalent |
|---|---|
| Consent notices in English + 22 scheduled languages (§5) | Module: Notice Builder |
| Consent capture, ledger and withdrawal (§6) | Module: Consent Manager |
| Cookie consent | Module: Consent Manager |
| Data principal rights: access, correction, erasure, nomination, grievance (§11–14) | Module: Rights Request Desk |
| Personal data discovery and mapping | Module: Data Discovery |
| Retention and erasure schedules (§8(7)) | Module: Retention and Erasure |
| Breach intimation to the Data Protection Board (§8(6)) | Module: Breach Response |
| Children's data and verifiable parental consent (§9) | Module: Children's Data |
| DPIA and audits for Significant Data Fiduciaries (§10) | Module: DPIA and Audit |
| Integration with registered Consent Managers | Consent Manager ("ready to connect") |
| DPDP gap assessment | Platform: DPDP gap assessment |

## Source of truth: the GRC agent app

Since the website redesign, product copy comes from the app itself
([Harshitahusts/GRC-Ai](https://github.com/Harshitahusts/GRC-Ai)): its README, connector
catalogue (`src/grc_agent/connectors/catalog.py`), demo tenant and DPDPA docs. Features the
app doesn't have yet (Consent Manager with 22-language notices, CRM integrations and so on)
are no longer claimed on the site. Only GitHub and AWS are shown as live connectors.

## Claims on the site to confirm before launch

Legal facts (from the app's own DPDPA docs; have counsel check):

- Timeline: assent 11 Aug 2023; Rules notified Nov 2025; Consent Managers Nov 2026; main duties 13 May 2027
- Penalties: ₹250 / 200 / 200 / 150 / 50 crore
- Rule 14(3) 90-day response clock and Rule 7(2)(b) 72-hour detailed breach report

Commercial placeholders (not in the app; decide before launch):

- Plans: Solo (1 seat, 5 active engagements), Team (10 seats), Firm (unlimited, self-hosted)
- Hosting: a hosted SaaS offer. The app today runs locally or with Docker
- Demo promise: reply within one working day
- Brand: the site says GRC-Flow; the app says GRC agent
