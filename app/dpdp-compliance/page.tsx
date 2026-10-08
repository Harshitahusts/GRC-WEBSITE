import type { Metadata } from "next";
import Link from "next/link";
import { PageHead } from "@/components/page-head";
import { RelatedPages } from "@/components/related-pages";
import { SelfComplianceSection, WhyNowSection } from "@/components/sections";

export const metadata: Metadata = {
  alternates: { canonical: "/dpdp-compliance" },
  title: "DPDP Compliance: Duties, the May 2027 Deadline and Penalties",
  description:
    "What DPDP Act compliance takes: the duties of a Data Fiduciary, what you must be able to prove, the 13 May 2027 deadline and penalties of up to ₹250 crore.",
};

const reading = [
  { href: "/blog/dpdp-act-2023-explained", title: "The DPDP Act 2023, explained" },
  { href: "/blog/dpdp-rules-2025", title: "The DPDP Rules 2025" },
  { href: "/blog/dpdp-compliance-checklist", title: "A DPDP compliance checklist" },
  { href: "/blog/dpdp-act-penalties", title: "DPDP Act penalties" },
];

export default function DpdpCompliancePage() {
  return (
    <>
      <PageHead eyebrow="DPDP compliance" title="What DPDP compliance takes, and what you have to prove">
        <p>The Act puts the duty on each business. Here is what it expects, when it applies, and what it costs to get wrong.</p>
      </PageHead>
      <SelfComplianceSection />
      <WhyNowSection />
      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-8">
        <h2 className="text-2xl font-bold">Read more on the Act</h2>
        <ul className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2">
          {reading.map((r) => (
            <li key={r.href}>
              <Link href={r.href} className="font-semibold text-accent hover:underline">{r.title}</Link>
            </li>
          ))}
        </ul>
      </section>
      <RelatedPages current="/dpdp-compliance" />
    </>
  );
}
