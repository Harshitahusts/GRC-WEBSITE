import Link from "next/link";
import { TableWrap } from "@/components/prose";
import type { Post } from "../types";

export const post: Post = {
  slug: "dpdp-rules-2025",
  title: "DPDP Rules 2025 Explained: Timeline and Key Rules",
  description:
    "DPDP Rules 2025, rule by rule: notice, security safeguards, 72-hour breach reports, 90-day rights requests, children's data and the dates to May 2027.",
  keywords: ["dpdp rules", "dpdp rules 2025", "digital personal data protection rules 2025", "dpdp act rules", "dpdp rules notified"],
  published: "2026-10-06",
  updated: "2026-10-06",
  minutes: 8,
  takeaways: [
    "The Digital Personal Data Protection Rules, 2025 were notified on 14 November 2025 and put the DPDP Act 2023 into practice.",
    "They apply in three phases: the Data Protection Board at once, Consent Managers from 13 November 2026, and most business obligations from 13 May 2027.",
    "Every personal data breach must be reported to affected people without delay, and a detailed report must reach the Board within 72 hours.",
    "Requests from people to access, correct or erase their data must be answered within 90 days.",
    "Personal data and processing logs must be kept for at least one year for the purposes the Rules list, then erased unless another law requires them.",
  ],
  faqs: [
    {
      q: "When were the DPDP Rules 2025 notified?",
      a: "The Ministry of Electronics and Information Technology notified the Digital Personal Data Protection Rules, 2025 on 14 November 2025.",
    },
    {
      q: "When do the DPDP Rules come into force?",
      a: "In phases. Rules on the Data Protection Board applied on notification. Consent Manager rules apply from 13 November 2026. Rules on notice, security, breach reporting, retention, children's data, rights and Significant Data Fiduciaries apply 18 months after notification, from 13 May 2027.",
    },
    {
      q: "What is the breach reporting timeline under the DPDP Rules?",
      a: "Rule 7: inform each affected Data Principal without delay, inform the Board without delay, and send the Board a detailed report within 72 hours of becoming aware of the breach (or longer if the Board allows).",
    },
    {
      q: "How long do businesses have to answer a data rights request?",
      a: "Rule 14(3) sets a maximum of 90 days to respond to requests from Data Principals.",
    },
  ],
  sources: [
    { label: "PIB: Digital Personal Data Protection Rules, 2025", url: "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc20251117695301.pdf" },
    { label: "KPMG India: DPDP Rules 2025 guidance", url: "https://assets.kpmg.com/content/dam/kpmgsites/in/pdf/2025/11/dpdp-rules-2025-guidance-to-dpdp-act-implementation.pdf" },
    { label: "Bar & Bench: MeitY notifies final DPDP Rules 2025", url: "https://www.barandbench.com/view-point/meity-notifies-final-digital-personal-data-protection-rules-2025" },
    { label: "K&S Partners: DPDP data breach notification timeline", url: "https://ksandk.com/md/data-protection-and-data-privacy/dpdp-data-breach-notification-timeline/" },
  ],
  related: ["dpdp-act-2023-explained", "dpdp-compliance-checklist", "dpdp-act-penalties"],
  body: (
    <>
      <h2>What are the DPDP Rules 2025?</h2>
      <p>
        The <Link href="/blog/dpdp-act-2023-explained">DPDP Act 2023</Link> sets the principles; the <strong>Digital Personal Data Protection Rules, 2025</strong> set the
        mechanics. They say what a privacy notice must contain, which security measures count as reasonable, how fast to report a breach, how long to keep logs, and how the
        Data Protection Board works.
      </p>

      <h2>The timeline: three phases</h2>
      <TableWrap>
        <table>
          <thead>
            <tr><th>When</th><th>What comes into force</th></tr>
          </thead>
          <tbody>
            <tr><td>14 November 2025</td><td>Data Protection Board: set-up, functioning, digital office</td></tr>
            <tr><td>13 November 2026</td><td>Consent Managers: registration with the Board and their obligations</td></tr>
            <tr><td>13 May 2027</td><td>Notice, security safeguards, breach intimation, retention and erasure, contact details, children&apos;s data, Significant Data Fiduciaries, rights of Data Principals, transfers, and calling for information</td></tr>
          </tbody>
        </table>
      </TableWrap>
      <p>
        That last date is the one that matters for most businesses. Eighteen months sounds long, but mapping data, rewriting notices, changing consent flows and fixing
        vendor contracts usually takes six to twelve months.
      </p>

      <h2>The rules businesses need to know</h2>

      <h3>Rule 3: Notice</h3>
      <p>
        The notice must stand on its own, be clear and plain, and give an <strong>itemised description of the personal data</strong> and the specific purpose for each
        item. It must explain how to withdraw consent (as easily as it was given), how to exercise rights, and how to complain to the Board.
      </p>

      <h3>Rule 4: Consent Managers</h3>
      <p>
        Consent Managers are platforms registered with the Board that let people give, review and withdraw consent across services. They must be companies incorporated in
        India and meet the conditions in the First Schedule. Most businesses will not become one; they may integrate with one.
      </p>

      <h3>Rule 6: Reasonable security safeguards</h3>
      <p>The minimum measures include:</p>
      <ul>
        <li>encryption, obfuscation, masking or virtual tokens for personal data;</li>
        <li>access controls on the systems that hold it;</li>
        <li>logs and monitoring to detect unauthorised access, kept so a breach can be investigated;</li>
        <li>backups and measures to keep processing going after an incident;</li>
        <li>these same safeguards written into contracts with Data Processors.</li>
      </ul>

      <h3>Rule 7: Personal data breach</h3>
      <p>Every breach is reportable, whatever its size:</p>
      <ul>
        <li><strong>To affected people, without delay</strong>: what happened, the likely consequences, what you are doing, and what they can do.</li>
        <li><strong>To the Board, without delay</strong>: a first intimation.</li>
        <li><strong>To the Board, within 72 hours</strong>: a detailed report with the facts, the cause, the people affected, the mitigation and the notices sent.</li>
      </ul>

      <h3>Rule 8: Retention and erasure</h3>
      <p>
        Personal data, traffic data and processing logs must be retained for <strong>at least one year</strong> for the purposes set out in the Rules, then erased unless
        another law requires otherwise. Large e-commerce, online gaming and social media platforms (above the user thresholds in the Third Schedule) must erase the data of
        users inactive for three years, with 48 hours&apos; notice before erasure.
      </p>

      <h3>Rule 9: Contact details</h3>
      <p>
        Publish, prominently on your website or app, the business contact of the person who answers questions about personal data (the Data Protection Officer, for a
        Significant Data Fiduciary).
      </p>

      <h3>Rules 10 and 11: Children and persons with disabilities</h3>
      <p>
        Before processing a child&apos;s data, obtain <strong>verifiable consent of a parent</strong>, checking the parent is an identifiable adult. For a person with a
        disability who cannot decide for themselves, consent comes from their lawful guardian.
      </p>

      <h3>Rule 13: Significant Data Fiduciaries</h3>
      <p>
        A Significant Data Fiduciary must carry out a Data Protection Impact Assessment and an audit <strong>every 12 months</strong>, report the significant findings to
        the Board, check that its algorithmic software does not put rights at risk, and keep specified categories of data in India.
      </p>

      <h3>Rule 14: Rights of Data Principals</h3>
      <p>
        Publish how people can make requests (access, correction, erasure, nomination) and the identifiers you need, and respond within <strong>90 days</strong>.
      </p>

      <h2>How to act on the Rules</h2>
      <p>
        Turn each rule into an owner, a deadline and evidence. Our <Link href="/blog/dpdp-compliance-checklist">DPDP compliance checklist</Link> lists the steps in order.
        If you advise clients, <Link href="/product">GRC Flow</Link> maps intake answers to each obligation in the Act and Rules, tracks the 72-hour breach and 90-day
        request clocks, and keeps the evidence for each control.
      </p>
    </>
  ),
};
