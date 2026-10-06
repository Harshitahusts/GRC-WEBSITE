import Link from "next/link";
import { TableWrap } from "@/components/prose";
import type { Post } from "../types";

export const post: Post = {
  slug: "dpdp-act-penalties",
  title: "DPDP Act Penalties: Up to ₹250 Crore, Explained",
  description:
    "DPDP Act penalties in one table: ₹250 crore for weak security, ₹200 crore for unreported breaches or children's data, ₹150 crore for SDFs, and how fines are set.",
  keywords: ["dpdp act penalty", "maximum penalty under dpdp act", "dpdp penalties", "dpdpa penalty", "dpdp fine"],
  published: "2026-10-06",
  updated: "2026-10-06",
  minutes: 6,
  takeaways: [
    "The highest penalty under the DPDP Act is up to ₹250 crore, for failing to take reasonable security safeguards to prevent a personal data breach.",
    "Not reporting a breach to the Board and affected people, and breaking the duties for children's data, can each cost up to ₹200 crore.",
    "Significant Data Fiduciaries face up to ₹150 crore for missing their extra duties, and any other breach of the Act or Rules up to ₹50 crore.",
    "Penalties are per instance and decided by the Data Protection Board after an inquiry, weighing factors such as the nature, gravity and duration of the breach.",
  ],
  faqs: [
    {
      q: "What is the maximum penalty under the DPDP Act?",
      a: "Up to ₹250 crore, for a Data Fiduciary's failure to take reasonable security safeguards to prevent a personal data breach (Section 8(5) read with the Schedule).",
    },
    {
      q: "Who imposes penalties under the DPDP Act?",
      a: "The Data Protection Board of India, after an inquiry. Its orders can be appealed to the Telecom Disputes Settlement and Appellate Tribunal (TDSAT).",
    },
    {
      q: "Can individuals be fined under the DPDP Act?",
      a: "Yes, but only lightly: a Data Principal who breaks their duties under Section 15 (for example filing a false or frivolous complaint) can face a penalty of up to ₹10,000.",
    },
    {
      q: "Is there a penalty for every breach, or a percentage of turnover like GDPR?",
      a: "The DPDP Act sets fixed maximum amounts per type of breach, not a percentage of turnover. The Board decides the actual amount within that cap.",
    },
  ],
  sources: [
    { label: "AMLEGALS: Penalties under the DPDP Act, 2023", url: "https://amlegals.com/penalties-under-the-digital-personal-data-protection-act2023/" },
    { label: "Deloitte India: Point of view on the DPDP Act", url: "https://www2.deloitte.com/content/dam/Deloitte/in/Documents/risk/in-ra-Deloitte-PoV-The-Digital-Personal-Data-Protection-Act-16.08-noexp.pdf" },
    { label: "PIB: Digital Personal Data Protection Rules, 2025", url: "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc20251117695301.pdf" },
  ],
  related: ["dpdp-act-2023-explained", "dpdp-compliance-checklist", "dpdp-vs-gdpr"],
  body: (
    <>
      <h2>The penalty schedule</h2>
      <p>The Schedule to the <Link href="/blog/dpdp-act-2023-explained">DPDP Act 2023</Link> sets a maximum for each type of breach:</p>
      <TableWrap>
        <table>
          <thead>
            <tr><th>Breach</th><th>Provision</th><th>Maximum penalty</th></tr>
          </thead>
          <tbody>
            <tr><td>Failure to take reasonable security safeguards to prevent a personal data breach</td><td>Section 8(5)</td><td>₹250 crore</td></tr>
            <tr><td>Failure to notify the Board and affected Data Principals of a personal data breach</td><td>Section 8(6)</td><td>₹200 crore</td></tr>
            <tr><td>Breach of the additional obligations for children&apos;s data</td><td>Section 9</td><td>₹200 crore</td></tr>
            <tr><td>Breach of the additional obligations of a Significant Data Fiduciary</td><td>Section 10</td><td>₹150 crore</td></tr>
            <tr><td>Breach of a voluntary undertaking accepted by the Board</td><td>Section 32</td><td>Up to the amount for the breach it covered</td></tr>
            <tr><td>Breach of any other provision of the Act or Rules</td><td>Various</td><td>₹50 crore</td></tr>
            <tr><td>Breach of duties by a Data Principal</td><td>Section 15</td><td>₹10,000</td></tr>
          </tbody>
        </table>
      </TableWrap>

      <h2>How the Board decides the amount</h2>
      <p>The amounts are caps. The Data Protection Board sets the actual penalty after an inquiry, considering factors such as:</p>
      <ul>
        <li>the nature, gravity and duration of the breach;</li>
        <li>the type and nature of the personal data affected;</li>
        <li>whether the breach was repeated;</li>
        <li>any gain made or loss avoided because of it;</li>
        <li>what the organisation did to mitigate the effects, and how quickly;</li>
        <li>whether the penalty is proportionate and effective, and its likely impact on the organisation.</li>
      </ul>
      <p>
        That last list is your defence. An organisation that can show its safeguards, its breach response and its records is in a very different position from one that
        cannot.
      </p>

      <h2>The two that catch most companies</h2>
      <h3>Weak security safeguards (₹250 crore)</h3>
      <p>
        The Rules spell out the minimum: encryption or masking, access control, logging and monitoring, backups, and contracts that bind processors to the same standards.
        If a breach happens and these were missing, this is the penalty in play.
      </p>
      <h3>Not reporting a breach (₹200 crore)</h3>
      <p>
        Under the DPDP Rules, <strong>every</strong> personal data breach must be reported to the affected people and the Board without delay, with a detailed report to the
        Board within 72 hours. There is no &quot;low risk&quot; exemption as there is under GDPR. A missed report is a separate breach from the incident itself.
      </p>

      <h2>How to reduce your exposure</h2>
      <ol>
        <li>Map where personal data lives and who can reach it.</li>
        <li>Put the Rule 6 safeguards in place, and keep proof that they work.</li>
        <li>Write and rehearse a breach playbook with the 72-hour clock.</li>
        <li>Check children&apos;s data flows for parental consent and no tracking.</li>
        <li>Keep evidence for every control, so you can show the Board what you did.</li>
      </ol>
      <p>
        Our <Link href="/blog/dpdp-compliance-checklist">DPDP compliance checklist</Link> covers each step. <Link href="/product">GRC Flow</Link> keeps a risk register
        scored by likelihood and impact, tracks each breach against the 72-hour deadline, and stores the evidence behind each control.
      </p>
    </>
  ),
};
