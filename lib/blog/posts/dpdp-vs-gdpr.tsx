import Link from "next/link";
import { TableWrap } from "@/components/prose";
import type { Post } from "../types";

export const post: Post = {
  slug: "dpdp-vs-gdpr",
  title: "DPDP vs GDPR: 12 Key Differences for Indian Businesses",
  description:
    "DPDP vs GDPR compared: scope, legal grounds, children, breach reporting, DPO, transfers, rights and penalties, and why GDPR compliance isn't DPDP compliance.",
  keywords: ["dpdp vs gdpr", "gdpr vs dpdp", "difference between dpdp and gdpr", "dpdpa vs gdpr"],
  published: "2026-10-06",
  updated: "2026-10-06",
  minutes: 7,
  takeaways: [
    "GDPR compliance does not make you DPDP compliant: the DPDP Act has fewer legal grounds, stricter breach reporting and stricter rules for children.",
    "DPDP covers only digital personal data (including digitised paper records); GDPR also covers structured paper filing systems.",
    "Under DPDP every personal data breach must be reported to the Board and affected people; GDPR exempts breaches unlikely to cause risk.",
    "DPDP treats everyone under 18 as a child, needing verifiable parental consent; GDPR's age is 13 to 16 depending on the country.",
    "DPDP penalties are fixed caps of up to ₹250 crore per breach; GDPR fines go up to €20 million or 4% of worldwide turnover.",
  ],
  faqs: [
    {
      q: "Is the DPDP Act the same as GDPR?",
      a: "No. Both protect personal data, but the DPDP Act is narrower in scope (digital data only), has fewer lawful grounds (consent and listed legitimate uses), has no special categories of sensitive data, requires reporting of every breach, and sets fixed penalty caps instead of a percentage of turnover.",
    },
    {
      q: "If we are GDPR compliant, are we DPDP compliant?",
      a: "Not automatically. You can reuse your data map, security controls and rights processes, but you need to check legal grounds, notices, breach reporting, children's consent and contracts against the DPDP Act and Rules.",
    },
    {
      q: "Does DPDP have a right to data portability?",
      a: "No. The DPDP Act gives rights to information, correction and erasure, grievance redressal and nomination, but not data portability or a right to object to automated decisions.",
    },
  ],
  sources: [
    { label: "PIB: Digital Personal Data Protection Rules, 2025", url: "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc20251117695301.pdf" },
    { label: "Deloitte India: Point of view on the DPDP Act", url: "https://www2.deloitte.com/content/dam/Deloitte/in/Documents/risk/in-ra-Deloitte-PoV-The-Digital-Personal-Data-Protection-Act-16.08-noexp.pdf" },
    { label: "EUR-Lex: General Data Protection Regulation (EU) 2016/679", url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj" },
  ],
  related: ["dpdp-act-2023-explained", "dpdp-act-penalties", "dpdp-compliance-checklist"],
  body: (
    <>
      <p>
        Many Indian companies that sell abroad already follow the EU&apos;s GDPR. It is a useful head start, but the{" "}
        <Link href="/blog/dpdp-act-2023-explained">DPDP Act 2023</Link> differs in ways that matter. Here is the side-by-side view.
      </p>

      <h2>DPDP vs GDPR at a glance</h2>
      <TableWrap>
        <table>
          <thead>
            <tr><th>Topic</th><th>DPDP Act 2023 (India)</th><th>GDPR (EU)</th></tr>
          </thead>
          <tbody>
            <tr><td>Data covered</td><td>Digital personal data, including paper records once digitised</td><td>Personal data processed automatically or in structured paper filing systems</td></tr>
            <tr><td>Sensitive data</td><td>No separate category (children&apos;s data has extra rules)</td><td>Special categories (health, religion, biometrics etc.) with stricter rules</td></tr>
            <tr><td>Legal grounds</td><td>Consent, or listed &quot;certain legitimate uses&quot;</td><td>Six bases, including legitimate interests and contract</td></tr>
            <tr><td>Publicly available data</td><td>Excluded if the person made it public</td><td>Still covered</td></tr>
            <tr><td>Children</td><td>Under 18; verifiable parental consent; no tracking or targeted ads</td><td>13 to 16 depending on the country, for online services</td></tr>
            <tr><td>Breach reporting</td><td>Every breach, to the Board and affected people; detailed report within 72 hours</td><td>To the authority within 72 hours unless unlikely to cause risk; to people if high risk</td></tr>
            <tr><td>Data Protection Officer</td><td>Only for Significant Data Fiduciaries, based in India</td><td>Required for public bodies and large-scale monitoring or special-category processing</td></tr>
            <tr><td>Cross-border transfers</td><td>Allowed, except to countries the government restricts</td><td>Only with adequacy, safeguards such as SCCs, or exceptions</td></tr>
            <tr><td>Rights</td><td>Information, correction and erasure, grievance, nomination</td><td>Adds portability, objection, restriction and rights on automated decisions</td></tr>
            <tr><td>Duties of individuals</td><td>Yes: e.g. no false or frivolous complaints (up to ₹10,000)</td><td>None</td></tr>
            <tr><td>Consent Managers</td><td>Registered platforms to give and withdraw consent</td><td>No equivalent</td></tr>
            <tr><td>Penalties</td><td>Fixed caps per breach, up to ₹250 crore</td><td>Up to €20 million or 4% of worldwide annual turnover</td></tr>
          </tbody>
        </table>
      </TableWrap>

      <h2>The differences that change your work</h2>
      <h3>Fewer legal grounds</h3>
      <p>
        GDPR&apos;s &quot;legitimate interests&quot; does not exist under DPDP. Purposes you ran on legitimate interests, such as some analytics or marketing, usually need
        consent or must stop.
      </p>
      <h3>Every breach is reportable</h3>
      <p>
        Under GDPR you can decide a minor breach is unlikely to cause risk and not report it. Under the DPDP Rules every personal data breach goes to the Board and to the
        people affected, with a detailed report within 72 hours. Update your incident playbook.
      </p>
      <h3>Children means under 18</h3>
      <p>
        Services used by teenagers need verifiable parental consent for everyone under 18, and must switch off tracking, behavioural monitoring and targeted advertising
        for them.
      </p>
      <h3>Penalties are fixed caps</h3>
      <p>
        DPDP penalties are not tied to turnover. For a mid-sized Indian company, a cap of ₹250 crore can still be far larger than a GDPR fine would be. See{" "}
        <Link href="/blog/dpdp-act-penalties">DPDP Act penalties</Link>.
      </p>

      <h2>What you can reuse from GDPR</h2>
      <ul>
        <li>your data map and record of processing (update for India-specific flows);</li>
        <li>security controls, which map well to the Rule 6 safeguards;</li>
        <li>rights-request handling (adjust the timeline to 90 days and add nomination);</li>
        <li>vendor reviews and data processing agreements (add DPDP clauses).</li>
      </ul>
      <p>
        Then run a DPDP-specific gap assessment. Our <Link href="/blog/dpdp-compliance-checklist">DPDP compliance checklist</Link> lists the steps, and{" "}
        <Link href="/product">GRC Flow</Link> runs the assessment against each obligation in the DPDP Act and Rules, with the citation behind every finding.
      </p>
    </>
  ),
};
