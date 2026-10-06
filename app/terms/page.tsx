import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type Section } from "@/components/legal-page";
import { business, site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/terms" },
  title: "Terms of service",
  description: `The terms for using the ${site.name} website and app.`,
};

const sections: Section[] = [
  {
    id: "about",
    title: "About these terms",
    body: (
      <p>
        These terms cover your use of this website and its live demo, run by <strong>{business.legalName}</strong>, {business.city}. By using the site you agree to them. Paid use of {site.name} is covered by a separate written agreement, which takes priority over these terms.
      </p>
    ),
  },
  {
    id: "not-advice",
    title: "Not legal advice",
    body: (
      <p>
        {site.name} is software that helps you assess DPDP Act readiness. Content on this site, and findings and documents produced in the demo, are general information, not legal advice. Talk to a lawyer about your own situation. Documents such as data processing agreements are marked as drafts for a lawyer&apos;s review.
      </p>
    ),
  },
  {
    id: "demo",
    title: "The live demo",
    body: (
      <ul>
        <li>The demo uses invented sample clients and data. Don&apos;t enter real personal or confidential data into it.</li>
        <li>It&apos;s provided as is for evaluation, and may be reset, changed or unavailable at any time.</li>
        <li>Don&apos;t try to break, overload or get around the security of the demo or the site.</li>
      </ul>
    ),
  },
  {
    id: "fees",
    title: "Fees",
    body: (
      <>
        <p>Using this website and the live demo is free.</p>
        <p>
          For paid plans, we send a written quote before you commit. The quote lists the full price for your plan, including GST, and you won&apos;t be charged anything that isn&apos;t in it. Nothing is charged until you sign. See <Link href="/pricing">pricing</Link> for what each plan includes.
        </p>
      </>
    ),
  },
  {
    id: "ip",
    title: "Content and open-source licences",
    body: (
      <>
        <p>The text, design and software of this site belong to {business.legalName} or its licensors. You may link to the site and share pages, but not copy the site as a whole.</p>
        <p>
          The site is built with open-source software used under its licences: Next.js, React and Tailwind CSS (all MIT). Icons come from the {site.name} product (MIT). Text uses your device&apos;s built-in system fonts, so no font files are downloaded or licensed from third parties.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    title: "Liability",
    body: (
      <p>
        We work to keep the site accurate and available, but we don&apos;t promise it will always be either. To the extent the law allows, we aren&apos;t liable for losses from using the site or the demo. Nothing in these terms limits liability that can&apos;t be limited under Indian law.
      </p>
    ),
  },
  {
    id: "privacy",
    title: "Privacy",
    body: <p>How we handle personal data is set out in the <Link href="/privacy">privacy policy</Link> and the <Link href="/cookies">cookie policy</Link>.</p>,
  },
  {
    id: "law",
    title: "Governing law",
    body: <p>These terms are governed by the laws of India. Courts at {business.jurisdiction} have jurisdiction over any dispute.</p>,
  },
  {
    id: "changes",
    title: "Changes",
    body: <p>We may update these terms. The date at the top shows the latest version, and changes apply from that date.</p>,
  },
  {
    id: "contact",
    title: "Contact",
    body: <p>Questions about these terms: <a href={`mailto:${site.email}`}>{site.email}</a>.</p>,
  },
];

export default function TermsPage() {
  return <LegalPage eyebrow="Legal" title="Terms of service" intro="The rules for using this website and the live demo." sections={sections} />;
}
