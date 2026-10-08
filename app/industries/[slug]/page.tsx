import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/buttons";
import { Icon } from "@/components/icon";
import { JsonLd } from "@/components/json-ld";
import { PageHead } from "@/components/page-head";
import { industries } from "@/lib/industries";
import { site } from "@/lib/site";

// One page per sector, built from lib/industries.ts.
export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = industries.find((i) => i.slug === slug);
  if (!page) return {};
  return { title: page.metaTitle, description: page.description, alternates: { canonical: `/industries/${slug}` } };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const page = industries.find((i) => i.slug === slug);
  if (!page) notFound();
  const others = industries.filter((i) => i.slug !== slug);

  return (
    <>
      <PageHead eyebrow={page.name} title={page.h1}>
        <p>{page.intro}</p>
      </PageHead>

      <section className="mx-auto grid max-w-[1240px] gap-10 px-4 py-14 sm:px-8 lg:grid-cols-[1fr_2fr]">
        <div>
          <h2 className="text-2xl font-bold">The data you hold</h2>
          <ul className="mt-4 space-y-2">
            {page.data.map((d) => (
              <li key={d} className="flex gap-2.5 text-fg-2"><Icon name="database" className="mt-0.5 size-5 shrink-0 text-accent" />{d}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold">What the Act asks of you</h2>
          <dl className="mt-4 divide-y divide-line border-y border-line">
            {page.duties.map((d) => (
              <div key={d.title} className="grid gap-1 py-4 sm:grid-cols-[minmax(0,1fr)_10rem] sm:gap-6">
                <div>
                  <dt className="font-semibold">{d.title}</dt>
                  <dd className="mt-1 text-fg-2">{d.body}</dd>
                </div>
                <dd><span className="badge bg-info-bg !whitespace-normal text-info"><Icon name="book" className="size-3 shrink-0" />{d.cite}</span></dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-[1240px] px-4 py-14 sm:px-8">
          <h2 className="text-2xl font-bold">How GRC Flow handles it</h2>
          <ul className="mt-6 grid gap-6 md:grid-cols-3">
            {page.helps.map((h) => (
              <li key={h.href} className="border-t-2 border-accent pt-4">
                <p className="text-fg-2">{h.text}</p>
                <Link href={h.href} className="mt-2 inline-block font-semibold text-accent hover:underline">See how it works</Link>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href={site.appUrl}>Open GRC Flow</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">Book a demo</ButtonLink>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1240px] gap-10 px-4 py-14 sm:px-8 md:grid-cols-2">
        <nav aria-label="Guides">
          <h2 className="font-semibold text-fg-2">Read more on the Act</h2>
          <ul className="mt-3 space-y-2">
            {page.reading.map((r) => (
              <li key={r.href}><Link href={r.href} className="font-semibold text-accent hover:underline">{r.title}</Link></li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Other industries">
          <h2 className="font-semibold text-fg-2">Other industries</h2>
          <ul className="mt-3 space-y-2">
            {others.map((o) => (
              <li key={o.slug}><Link href={`/industries/${o.slug}`} className="font-semibold text-accent hover:underline">{o.name}</Link></li>
            ))}
          </ul>
        </nav>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: site.url },
            { "@type": "ListItem", position: 2, name: "Industries", item: `${site.url}/industries` },
            { "@type": "ListItem", position: 3, name: page.name, item: `${site.url}/industries/${slug}` },
          ],
        }}
      />
    </>
  );
}
