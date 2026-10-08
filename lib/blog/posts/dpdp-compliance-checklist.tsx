import Link from "next/link";
import { TableWrap } from "@/components/prose";
import type { Post } from "../types";

export const post: Post = {
  slug: "dpdp-compliance-checklist",
  title: "DPDP Compliance Checklist: 12 Steps Before May 2027",
  description:
    "A practical DPDP compliance checklist: data mapping, notices, consent, security, a 72-hour breach plan, rights requests, vendors, children's data and evidence.",
  keywords: ["dpdp compliance checklist", "dpdp compliance", "dpdp act compliance", "how to comply with dpdp act"],
  published: "2026-10-06",
  updated: "2026-10-06",
  minutes: 10,
  takeaways: [
    "DPDP compliance means meeting every duty of a Data Fiduciary under the DPDP Act 2023 and Rules 2025, and being able to prove it with records and evidence.",
    "Start with a data map: you cannot write a notice, secure data or answer requests for data you have not found.",
    "The most-penalised gaps are weak security safeguards (up to ₹250 crore) and unreported breaches (up to ₹200 crore).",
    "Most obligations apply from 13 May 2027; a full programme typically takes six to twelve months, so start now.",
  ],
  faqs: [
    {
      q: "What is DPDP compliance?",
      a: "Meeting the obligations the DPDP Act 2023 and the DPDP Rules 2025 place on a Data Fiduciary: lawful grounds and notice, consent, security, breach reporting, retention and erasure, rights handling, grievance redressal and, for some, extra duties as a Significant Data Fiduciary. Compliance also means keeping the evidence to show it.",
    },
    {
      q: "How long does DPDP compliance take?",
      a: "For a mid-sized business, typically six to twelve months from data mapping to tested processes. Smaller organisations with simple data flows can be ready sooner.",
    },
    {
      q: "Do we need a Data Protection Officer under the DPDP Act?",
      a: "Only a Significant Data Fiduciary must appoint a Data Protection Officer based in India. Every other Data Fiduciary must publish the contact of a person who can answer questions about personal data.",
    },
    {
      q: "Is there an official DPDP compliance certificate?",
      a: "No. The Act and Rules do not create a government certificate. You show compliance through your records, policies and evidence. See our guide on DPDP certification.",
    },
  ],
  sources: [
    { label: "PIB: Digital Personal Data Protection Rules, 2025", url: "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc20251117695301.pdf" },
    { label: "KPMG India: DPDP Rules 2025 guidance", url: "https://assets.kpmg.com/content/dam/kpmgsites/in/pdf/2025/11/dpdp-rules-2025-guidance-to-dpdp-act-implementation.pdf" },
    { label: "EY India: DPDP compliance and readiness", url: "https://www.ey.com/en_in/insights/cybersecurity/india-s-data-privacy-shift-steering-the-dpdp-compliance-and-readiness" },
  ],
  related: ["dpdp-rules-2025", "dpdp-act-penalties", "dpdp-certification"],
  body: (
    <>
      <p>
        Use this checklist as the backbone of a DPDP readiness project. Each step names what to do and what evidence to keep, because under the{" "}
        <Link href="/blog/dpdp-act-2023-explained">DPDP Act</Link> it is not enough to comply: you must be able to show it.
      </p>

      <h2>The checklist at a glance</h2>
      <TableWrap>
        <table>
          <thead>
            <tr><th>#</th><th>Step</th><th>Evidence to keep</th></tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>Appoint an owner and confirm scope</td><td>Named owner, scope note, list of entities and systems</td></tr>
            <tr><td>2</td><td>Map personal data</td><td>Data inventory / record of processing</td></tr>
            <tr><td>3</td><td>Confirm the lawful ground for each purpose</td><td>Purpose register: consent or legitimate use</td></tr>
            <tr><td>4</td><td>Rewrite notices</td><td>Itemised notice per channel</td></tr>
            <tr><td>5</td><td>Fix consent and withdrawal</td><td>Consent records, withdrawal flow</td></tr>
            <tr><td>6</td><td>Put security safeguards in place</td><td>Encryption, access, logging and backup proofs</td></tr>
            <tr><td>7</td><td>Prepare for breaches</td><td>Breach playbook, contact list, drill record</td></tr>
            <tr><td>8</td><td>Set retention and erasure</td><td>Retention schedule, deletion logs</td></tr>
            <tr><td>9</td><td>Handle rights and grievances</td><td>Request register with 90-day due dates</td></tr>
            <tr><td>10</td><td>Review vendors and contracts</td><td>Processor list, data processing agreements</td></tr>
            <tr><td>11</td><td>Check children&apos;s data</td><td>Age-gating and parental consent records</td></tr>
            <tr><td>12</td><td>Train, review and keep evidence</td><td>Training records, review dates, audit log</td></tr>
          </tbody>
        </table>
      </TableWrap>

      <h2>1. Appoint an owner and confirm scope</h2>
      <p>
        Name one person accountable and a small working group across legal, IT, product and HR. List the legal entities, products, websites, apps and offline processes
        that touch personal data, and check whether you might be named a Significant Data Fiduciary.
      </p>

      <h2>2. Map your personal data</h2>
      <p>
        For each system, record what personal data it holds, whose it is, why you have it, where it is stored (including outside India), who it is shared with, and how
        long you keep it. Include spreadsheets and exports: they are where personal data hides. This map becomes your record of processing.
      </p>

      <h2>3. Confirm the lawful ground for each purpose</h2>
      <p>
        For every purpose, decide whether you rely on consent or on a legitimate use under Section 7 (such as employment or a legal obligation). Drop purposes you
        cannot justify.
      </p>

      <h2>4. Rewrite your notices</h2>
      <p>
        Under Rule 3, a notice must be standalone, clear and plain, list each item of personal data with its specific purpose, and explain how to withdraw consent,
        exercise rights and complain to the Board. One generic privacy policy is not enough for every channel.
      </p>

      <h2>5. Fix consent and withdrawal</h2>
      <p>
        Consent must be a clear affirmative action, separate for each purpose, never bundled with terms, and as easy to withdraw as to give. Record when and how each
        consent was given and withdrawn, and stop processing when it is withdrawn.
      </p>

      <h2>6. Put security safeguards in place</h2>
      <p>
        Rule 6 sets the minimum: encryption, masking or tokenisation; access controls; logging and monitoring; backups and continuity; and the same safeguards required
        of processors by contract. Failing here carries the highest penalty, up to ₹250 crore (see <Link href="/blog/dpdp-act-penalties">DPDP Act penalties</Link>).
      </p>

      <h2>7. Prepare for breaches</h2>
      <p>
        Write a playbook for the Rule 7 timeline: tell affected people and the Board without delay, and send the Board a detailed report within 72 hours. Decide who
        decides, keep templates ready, and run a drill.
      </p>

      <h2>8. Set retention and erasure</h2>
      <p>
        Set a retention period for each purpose and erase data when the purpose is served or consent is withdrawn. Keep processing logs for at least one year as the
        Rules require, and record deletions.
      </p>

      <h2>9. Handle rights requests and grievances</h2>
      <p>
        Publish how people can ask for access, correction, erasure or nomination, verify who is asking, and answer within 90 days. Publish the contact of the person who
        answers data questions (Rule 9), and track every request and complaint to closure.
      </p>

      <h2>10. Review vendors and contracts</h2>
      <p>
        List every processor (cloud, CRM, payroll, marketing, support tools), where they store data, and sign data processing agreements that require security
        safeguards, breach notice to you and deletion at the end of the contract.
      </p>

      <h2>11. Check children&apos;s data</h2>
      <p>
        If anyone under 18 may use your service, add age checks and verifiable parental consent (Rule 10), and switch off tracking, behavioural monitoring and targeted
        advertising for children.
      </p>

      <h2>12. Train, review and keep evidence</h2>
      <p>
        Train staff who handle personal data, set review dates for policies, and keep a log of who did what. When the Board asks, your evidence is your answer.
      </p>

      <h2>Run the checklist faster</h2>
      <p>
        <Link href="/product">GRC Flow</Link> turns this checklist into a guided workflow: an intake mapped to every obligation in the Act and Rules, personal-data discovery
        for your exports, AI-drafted findings that cite the exact section and are reviewed by a person, a readiness plan that tracks progress from real data, and an
        evidence library that checks each document actually covers its obligation. <Link href="/contact">Book a demo</Link> to see it on your own case.
      </p>
    </>
  ),
};
