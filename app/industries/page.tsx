import type { Metadata } from "next";
import Link from "next/link";
import { PageHead } from "@/components/page-head";
import { industries } from "@/lib/industries";

export const metadata: Metadata = {
  alternates: { canonical: "/industries" },
  title: "DPDP Compliance by Industry: EdTech, BFSI, Healthcare, SaaS, E-commerce",
  description:
    "How the DPDP Act applies to EdTech, banking and finance, healthcare, SaaS and e-commerce, and how GRC Flow handles each sector's duties.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHead eyebrow="Industries" title="DPDP compliance, sector by sector">
        <p>The Act is the same for everyone, but each sector feels it differently. Pick yours to see the duties that matter most.</p>
      </PageHead>
      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-8">
        <ul className="divide-y divide-line border-y border-line">
          {industries.map((i) => (
            <li key={i.slug}>
              <Link href={`/industries/${i.slug}`} className="group grid gap-1 py-5 md:grid-cols-[16rem_minmax(0,1fr)] md:gap-8">
                <strong className="text-lg font-semibold group-hover:text-accent">{i.name}</strong>
                <span className="text-fg-2">{i.intro}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
