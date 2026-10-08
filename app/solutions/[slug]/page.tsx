import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/buttons";
import { Icon } from "@/components/icon";
import { JsonLd } from "@/components/json-ld";
import { PageHead } from "@/components/page-head";
import { audienceFlows } from "@/lib/content";
import { industries } from "@/lib/industries";
import { site } from "@/lib/site";
import { solutions } from "@/lib/solutions";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = solutions.find((s) => s.slug === slug);
  if (!page) return {};
  return { title: page.metaTitle, description: page.description, alternates: { canonical: `/solutions/${slug}` } };
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const page = solutions.find((s) => s.slug === slug);
  const flow = audienceFlows.find((f) => f.id === page?.flowId);
  if (!page || !flow) notFound();
  const other = solutions.find((s) => s.slug !== slug);

  return (
    <>
      <PageHead eyebrow={page.name} title={page.h1}>
        <p>{page.intro}</p>
      </PageHead>

      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-8">
        <h2 className="text-2xl font-bold">Why it fits</h2>
        <ul className="mt-6 grid gap-x-8 gap-y-6 md:grid-cols-2">
          {page.points.map((p) => (
            <li key={p.title} className="flex gap-3">
              <Icon name="check" className="mt-0.5 size-5 shrink-0 text-good" />
              <span><strong className="block">{p.title}</strong><span className="text-fg-2">{p.body}</span></span>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-[1240px] px-4 py-14 sm:px-8">
          <h2 className="text-2xl font-bold">How it works</h2>
          <ol className="mt-6 divide-y divide-line border-y border-line">
            {flow.steps.map((s, i) => (
              <li key={s.label} className="grid gap-2 py-5 md:grid-cols-[3rem_16rem_1fr] md:gap-6">
                <span className="grid size-8 place-items-center rounded-full bg-accent-soft text-sm font-bold text-accent">{i + 1}</span>
                <h3 className="text-lg font-semibold">{s.heading}</h3>
                <p className="max-w-prose text-fg-2">{s.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={site.appUrl}>Open GRC Flow</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">Book a demo</ButtonLink>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1240px] gap-10 px-4 py-14 sm:px-8 md:grid-cols-2">
        <nav aria-label="By industry">
          <h2 className="font-semibold text-fg-2">By industry</h2>
          <ul className="mt-3 space-y-2">
            {industries.map((i) => (
              <li key={i.slug}><Link href={`/industries/${i.slug}`} className="font-semibold text-accent hover:underline">{i.name}</Link></li>
            ))}
          </ul>
        </nav>
        {other && (
          <div>
            <h2 className="font-semibold text-fg-2">Not quite you?</h2>
            <Link href={`/solutions/${other.slug}`} className="mt-3 inline-block font-semibold text-accent hover:underline">{other.name}</Link>
          </div>
        )}
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: site.url },
            { "@type": "ListItem", position: 2, name: page.name, item: `${site.url}/solutions/${slug}` },
          ],
        }}
      />
    </>
  );
}
