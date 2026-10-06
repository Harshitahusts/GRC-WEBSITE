import Link from "next/link";
import { TableWrap } from "@/components/prose";
import type { Post } from "../types";

export const post: Post = {
  slug: "dpdp-act-2023-explained",
  title: "DPDP Act 2023 Explained: Full Form and Who Must Comply",
  description:
    "DPDP Act 2023 in plain English: full form, who must comply, Data Fiduciary vs Data Principal, consent, rights, penalties and the 13 May 2027 deadline.",
  keywords: [
    "dpdp act",
    "dpdp act 2023",
    "dpdp full form",
    "what is dpdp act",
    "digital personal data protection act 2023",
    "dpdpa",
  ],
  published: "2026-10-06",
  updated: "2026-10-06",
  minutes: 9,
  takeaways: [
    "DPDP Act stands for the Digital Personal Data Protection Act, 2023: India's first full law on how organisations collect, use, store and share digital personal data.",
    "It applies to every organisation processing digital personal data of people in India, including foreign companies that offer goods or services to people in India. Company size does not matter.",
    "Most duties apply from 13 May 2027, 18 months after the DPDP Rules, 2025 were notified on 14 November 2025.",
    "Penalties go up to ₹250 crore per breach of duty, imposed by the Data Protection Board of India.",
    "There is no government certificate for compliance: each organisation must be able to prove its own compliance with records and evidence.",
  ],
  faqs: [
    {
      q: "What is the full form of DPDP?",
      a: "DPDP stands for Digital Personal Data Protection. The law is the Digital Personal Data Protection Act, 2023 (often shortened to DPDP Act or DPDPA), and its detailed rules are the Digital Personal Data Protection Rules, 2025.",
    },
    {
      q: "Is the DPDP Act in force?",
      a: "Partly. The Act received Presidential assent in August 2023. The Rules were notified on 14 November 2025 and apply in phases: the Data Protection Board provisions applied immediately, Consent Manager provisions from 13 November 2026, and most obligations for businesses (notice, consent, security, breach reporting, rights) from 13 May 2027.",
    },
    {
      q: "Does the DPDP Act apply to small businesses?",
      a: "Yes. There is no turnover or headcount threshold. Any organisation that processes digital personal data of people in India is a Data Fiduciary and must comply. Some duties apply only to Significant Data Fiduciaries named by the government.",
    },
    {
      q: "Does the DPDP Act apply to paper records?",
      a: "Only once they are digitised. The Act covers personal data collected in digital form, and personal data collected on paper that is later digitised.",
    },
    {
      q: "Who enforces the DPDP Act?",
      a: "The Data Protection Board of India. It inquires into breaches and complaints and can impose the penalties set out in the Schedule to the Act.",
    },
  ],
  sources: [
    { label: "PIB: Digital Personal Data Protection Rules, 2025 (November 2025)", url: "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc20251117695301.pdf" },
    { label: "KPMG India: DPDP Rules 2025, guidance to DPDP Act implementation", url: "https://assets.kpmg.com/content/dam/kpmgsites/in/pdf/2025/11/dpdp-rules-2025-guidance-to-dpdp-act-implementation.pdf" },
    { label: "SCC Online: MeitY notifies the DPDP Rules 2025", url: "https://www.scconline.com/blog/post/2025/11/14/meity-notified-digital-personal-data-protection-rules-2025/" },
  ],
  related: ["dpdp-rules-2025", "dpdp-compliance-checklist", "dpdp-act-penalties"],
  body: (
    <>
      <h2>What is the DPDP Act?</h2>
      <p>
        The <strong>Digital Personal Data Protection Act, 2023</strong> (DPDP Act, or DPDPA) is India&apos;s law on personal data. It sets out when an organisation may use a
        person&apos;s data, what it must tell them, how it must protect the data, and what happens when things go wrong. Once fully in force, it takes over from the older
        &quot;reasonable security practices&quot; regime under Section 43A of the IT Act.
      </p>
      <p>
        The Act is short and principle-based. The practical detail, such as what a privacy notice must contain or how fast to report a breach, sits in the{" "}
        <Link href="/blog/dpdp-rules-2025">DPDP Rules, 2025</Link>.
      </p>

      <h2>Who does it apply to?</h2>
      <p>The Act applies to processing of <strong>digital personal data</strong>:</p>
      <ul>
        <li>within India, whether the data was collected online or collected on paper and digitised later;</li>
        <li>outside India, when it is connected to offering goods or services to people in India.</li>
      </ul>
      <p>
        It does not apply to data used for purely personal or domestic purposes, or to data that the person has made publicly available themselves (or that someone is
        legally required to make public).
      </p>

      <h2>The key terms, in plain words</h2>
      <TableWrap>
        <table>
          <thead>
            <tr><th>Term</th><th>Meaning</th><th>Example</th></tr>
          </thead>
          <tbody>
            <tr><td>Data Principal</td><td>The person the data is about (for a child, also the parent)</td><td>A customer, employee or student</td></tr>
            <tr><td>Data Fiduciary</td><td>The organisation that decides why and how the data is used</td><td>Your company</td></tr>
            <tr><td>Data Processor</td><td>An organisation that processes data on the Fiduciary&apos;s behalf</td><td>A cloud, payroll or CRM provider</td></tr>
            <tr><td>Significant Data Fiduciary</td><td>A Fiduciary the government names because of volume or risk; it has extra duties</td><td>Large platforms, finance, health</td></tr>
            <tr><td>Consent Manager</td><td>A platform registered with the Board that lets people give and withdraw consent</td><td>A consent dashboard used across apps</td></tr>
            <tr><td>Data Protection Board</td><td>The regulator that inquires and imposes penalties</td><td>Data Protection Board of India</td></tr>
          </tbody>
        </table>
      </TableWrap>

      <h2>When can an organisation use personal data?</h2>
      <p>Only on one of two grounds:</p>
      <ol>
        <li>
          <strong>Consent</strong> that is free, specific, informed, unconditional and unambiguous, given with a clear affirmative action, and as easy to withdraw as to
          give. It must follow a notice that lists the data and the purpose.
        </li>
        <li>
          <strong>Certain legitimate uses</strong> listed in Section 7, such as data the person voluntarily provided for a specified purpose, employment purposes, legal
          obligations and medical emergencies.
        </li>
      </ol>

      <h2>What a Data Fiduciary must do</h2>
      <ul>
        <li>Give an itemised <strong>notice</strong> and take valid <strong>consent</strong> for each purpose.</li>
        <li>Keep data <strong>accurate</strong> when it is used to make decisions or shared.</li>
        <li>Put in place <strong>reasonable security safeguards</strong> to prevent a personal data breach, including at its processors.</li>
        <li><strong>Report every personal data breach</strong> to the Board and to the affected people.</li>
        <li><strong>Erase</strong> data once the purpose is served or consent is withdrawn, unless a law requires keeping it.</li>
        <li>Publish a contact for questions and run a <strong>grievance</strong> process.</li>
        <li>For <strong>children</strong> (under 18): get verifiable parental consent, and do no tracking, behavioural monitoring or targeted advertising.</li>
      </ul>
      <p>
        Significant Data Fiduciaries must also appoint a Data Protection Officer based in India, appoint an independent data auditor, and carry out periodic Data Protection
        Impact Assessments and audits.
      </p>

      <h2>The rights of people (Data Principals)</h2>
      <ul>
        <li>to a summary of their data and how it is processed, and who it was shared with;</li>
        <li>to correction, completion, updating and erasure;</li>
        <li>to grievance redressal, before going to the Board;</li>
        <li>to nominate someone to exercise their rights after death or incapacity.</li>
      </ul>
      <p>The Rules give organisations up to 90 days to respond to these requests.</p>

      <h2>Penalties</h2>
      <p>
        The Board can impose penalties of up to <strong>₹250 crore</strong> for failing to take reasonable security safeguards, and up to ₹200 crore for not reporting a
        breach or breaking the duties for children&apos;s data. See the full schedule in our guide to{" "}
        <Link href="/blog/dpdp-act-penalties">DPDP Act penalties</Link>.
      </p>

      <h2>When do you need to comply?</h2>
      <TableWrap>
        <table>
          <thead>
            <tr><th>Date</th><th>What applies</th></tr>
          </thead>
          <tbody>
            <tr><td>14 November 2025</td><td>Rules notified; Data Protection Board provisions in force</td></tr>
            <tr><td>13 November 2026</td><td>Consent Manager registration and duties</td></tr>
            <tr><td>13 May 2027</td><td>Notice, consent, security safeguards, breach reporting, rights, retention and the rest of the business obligations</td></tr>
          </tbody>
        </table>
      </TableWrap>

      <h2>How to get started</h2>
      <p>
        Start with a gap assessment against each obligation, then fix the gaps in order of risk and keep evidence of each fix. Our{" "}
        <Link href="/blog/dpdp-compliance-checklist">DPDP compliance checklist</Link> walks through the steps.{" "}
        <Link href="/product">GRC Flow</Link> runs that assessment for you: guided intake mapped to every obligation, AI-drafted findings that cite the exact section and
        are reviewed by a person, and the evidence to prove it.
      </p>
    </>
  ),
};
