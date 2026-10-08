import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type Section } from "@/components/legal-page";
import { business, site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/privacy" },
  title: "Privacy policy",
  description: `How ${site.name} collects, uses and protects personal data under India's DPDP Act, 2023.`,
};

const sections: Section[] = [
  {
    id: "who",
    title: "Who we are",
    body: (
      <>
        <p>
          This website is run by <strong>{business.legalName}</strong> (&ldquo;{site.name}&rdquo;, &ldquo;we&rdquo;), {business.city}.
        </p>
        <p>
          For the personal data described here we are the <strong>Data Fiduciary</strong> under the Digital Personal Data Protection Act, 2023 (the &ldquo;DPDP Act&rdquo;). Questions about your data go to <a href={`mailto:${business.privacyEmail}`}>{business.privacyEmail}</a>.
        </p>
      </>
    ),
  },
  {
    id: "collect",
    title: "What we collect",
    body: (
      <>
        <p>We collect only what we need, and most of the site works without giving us anything.</p>
        <ul>
          <li><strong>Demo requests:</strong> your name and work email (required), and optionally your company, your role, the plan you&apos;re interested in and a message. We also record that you confirmed you&apos;re 18 or older, your consent, and whether you asked for product updates.</li>
          <li><strong>Privacy requests and unsubscribes:</strong> your name, email and what you&apos;re asking for, so we can act on it and keep a record that we did.</li>
          <li><strong>Your cookie choice:</strong> stored in a cookie on your device. See the <Link href="/cookies">cookie policy</Link>.</li>
          <li><strong>Server logs:</strong> our hosting provider records IP address, browser type, page requested and time, to keep the site running and secure.</li>
        </ul>
        <p>
          We don&apos;t use analytics, advertising or tracking tools, and we don&apos;t buy or receive data about you from others. The live demo uses invented sample data. Please don&apos;t enter real personal data into it.
        </p>
      </>
    ),
  },
  {
    id: "use",
    title: "Why we use it",
    body: (
      <table>
        <thead>
          <tr><th scope="col">Purpose</th><th scope="col">Data</th><th scope="col">Basis</th></tr>
        </thead>
        <tbody>
          <tr><td data-label="Purpose">Arrange and run your demo</td><td data-label="Data">Demo request details</td><td data-label="Basis">Your consent (Section 6)</td></tr>
          <tr><td data-label="Purpose">Send product updates, if you ask for them</td><td data-label="Data">Name, email</td><td data-label="Basis">Your consent, which you can withdraw any time</td></tr>
          <tr><td data-label="Purpose">Handle privacy requests and unsubscribes</td><td data-label="Data">Request details</td><td data-label="Basis">Complying with the law (Section 7)</td></tr>
          <tr><td data-label="Purpose">Keep the site secure and working</td><td data-label="Data">Server logs, cookie choice</td><td data-label="Basis">Complying with the law, including the DPDP Rules&apos; log requirements (Section 7)</td></tr>
        </tbody>
      </table>
    ),
  },
  {
    id: "retention",
    title: "How long we keep it",
    body: (
      <ul>
        <li><strong>Demo requests:</strong> 12 months after our last contact, unless you become a customer.</li>
        <li><strong>Product update list:</strong> until you unsubscribe or withdraw consent.</li>
        <li><strong>Privacy requests:</strong> 3 years, to show we handled them.</li>
        <li><strong>Server logs:</strong> 1 year.</li>
        <li><strong>Cookie choice:</strong> 6 months, then we ask again.</li>
      </ul>
    ),
  },
  {
    id: "sharing",
    title: "Who we share it with",
    body: (
      <>
        <p>
          We don&apos;t sell personal data or share it for advertising. We use a small number of service providers (<strong>Data Processors</strong>) under written contracts that let them use the data only on our instructions: our website host and our email provider.
        </p>
        <p>We may also disclose data where the law requires it, for example to a court or the Data Protection Board of India.</p>
      </>
    ),
  },
  {
    id: "where",
    title: "Where it's stored",
    body: <p>We store personal data in India. If that ever changes, we&apos;ll update this policy and transfer data only to countries the Government of India hasn&apos;t restricted under Section 16.</p>,
  },
  {
    id: "rights",
    title: "Your rights",
    body: (
      <>
        <p>Under the DPDP Act you can:</p>
        <ul>
          <li>get a summary of the personal data we hold about you and who we&apos;ve shared it with (Section 11)</li>
          <li>have it corrected, completed, updated or erased (Section 12)</li>
          <li>withdraw consent at any time, as easily as you gave it (Section 6(4))</li>
          <li>have a grievance addressed (Section 13)</li>
          <li>nominate someone to exercise these rights if you die or can&apos;t (Section 14)</li>
        </ul>
        <p>
          Use the <Link href="/privacy-request">data rights request form</Link> or email <a href={`mailto:${business.privacyEmail}`}>{business.privacyEmail}</a>. We&apos;ll confirm who you are, then respond as soon as we can and within 90 days. If you&apos;re not satisfied, you can complain to the Data Protection Board of India once you&apos;ve used our grievance process.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children",
    body: (
      <p>
        This site and our product are for businesses and aren&apos;t meant for anyone under 18. We don&apos;t knowingly collect data from children, and the demo request form asks you to confirm you&apos;re 18 or older. If we learn we&apos;ve collected a child&apos;s data, we&apos;ll delete it. Parents or guardians can contact us to ask for this.
      </p>
    ),
  },
  {
    id: "security",
    title: "Security and breaches",
    body: (
      <p>
        We protect the site with HTTPS and limit access to personal data to the people who need it. If a personal data breach happens, we&apos;ll inform the Data Protection Board and the people affected, as the DPDP Act and Rules require.
      </p>
    ),
  },
  {
    id: "grievance",
    title: "Grievance Officer",
    body: (
      <p>
        Questions or complaints about your personal data go to our Grievance Officer at <a href={`mailto:${business.grievanceOfficer.email}`}>{business.grievanceOfficer.email}</a> ({business.legalName}, {business.city}). We reply within 90 days.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: <p>If we change how we use personal data, we&apos;ll update this page and its date. If a change needs fresh consent, we&apos;ll ask for it before it applies.</p>,
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy policy"
      intro="What personal data this website collects, why, how long we keep it and how to exercise your rights under India's DPDP Act."
      sections={sections}
    />
  );
}
