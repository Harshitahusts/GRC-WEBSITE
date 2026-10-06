import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/buttons";
import { JsonLd } from "@/components/json-ld";
import { Prose } from "@/components/prose";
import { allPosts, formatDate, getPost } from "@/lib/blog";
import { business, site } from "@/lib/site";

// Every post is built ahead of time; an unknown slug is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return allPosts().map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return {
    title: { absolute: p.title },
    description: p.description,
    keywords: p.keywords,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: {
      type: "article",
      url: `/blog/${p.slug}`,
      title: p.title,
      description: p.description,
      publishedTime: p.published,
      modifiedTime: p.updated,
      images: [{ url: "/screens/dashboard.png", alt: `The ${site.name} dashboard` }],
    },
    twitter: { card: "summary_large_image", title: p.title, description: p.description },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();
  const url = `${site.url}/blog/${p.slug}`;
  const related = p.related.map(getPost).filter((r) => r !== undefined);

  return (
    <article>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BlogPosting",
              headline: p.title,
              description: p.description,
              url,
              mainEntityOfPage: url,
              datePublished: p.published,
              dateModified: p.updated,
              keywords: p.keywords.join(", "),
              inLanguage: "en-IN",
              image: `${site.url}/screens/dashboard.png`,
              author: { "@type": "Organization", name: `${site.name} team`, url: `${site.url}/about` },
              publisher: { "@type": "Organization", name: business.legalName, url: site.url, logo: `${site.url}/icon.svg` },
            },
            {
              "@type": "FAQPage",
              mainEntity: p.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: site.url },
                { "@type": "ListItem", position: 2, name: "Blog", item: `${site.url}/blog` },
                { "@type": "ListItem", position: 3, name: p.title, item: url },
              ],
            },
          ],
        }}
      />
      <header className="night">
        <div className="mx-auto max-w-[1240px] px-4 py-12 sm:px-8 md:py-14">
          <nav aria-label="Breadcrumb" className="text-sm text-night-text">
            <Link href="/" className="hover:text-white">Home</Link> <span aria-hidden="true">/</span>{" "}
            <Link href="/blog" className="hover:text-white">Blog</Link>
          </nav>
          <h1 className="mt-3 max-w-3xl text-[1.9rem] leading-tight font-bold text-white sm:text-[2.4rem]">{p.title}</h1>
          <p className="mt-3 max-w-2xl text-lg text-night-text">{p.description}</p>
          <p className="mt-4 text-sm text-night-text">
            By the {site.name} team · Published <time dateTime={p.published}>{formatDate(p.published)}</time>
            {p.updated !== p.published && (
              <>
                {" "}· Updated <time dateTime={p.updated}>{formatDate(p.updated)}</time>
              </>
            )}{" "}
            · {p.minutes} min read
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-[1240px] px-4 py-10 sm:px-8">
        <section aria-labelledby="takeaways" className="max-w-[46rem] rounded-xl border border-line bg-surface p-6">
          <h2 id="takeaways" className="text-lg font-bold">Key takeaways</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-fg-2">
            {p.takeaways.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </section>

        <div className="mt-6">
          <Prose>
            {p.body}
            <h2>Frequently asked questions</h2>
            {p.faqs.map((f) => (
              <div key={f.q}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
            <h2>Sources</h2>
            <ul>
              {p.sources.map((s) => (
                <li key={s.url}>
                  <a href={s.url} rel="noopener" target="_blank">{s.label}</a>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted">
              This guide explains the law in general terms and is not legal advice. Check specific situations with a qualified lawyer.
            </p>
          </Prose>
        </div>

        <aside className="mt-12 max-w-[46rem] rounded-xl bg-night p-6 text-night-text sm:p-8">
          <h2 className="text-xl font-bold text-white">Run your DPDPA assessment in GRC Flow</h2>
          <p className="mt-2">
            Guided intake mapped to every obligation in the Act and Rules, AI-drafted findings that cite the section, reviewed by a person, with the evidence to prove it.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <ButtonLink href="/contact">Book a demo</ButtonLink>
            <ButtonLink href="/product" variant="secondary">See the product</ButtonLink>
          </div>
        </aside>

        {related.length > 0 && (
          <section aria-labelledby="related" className="mt-12">
            <h2 id="related" className="text-xl font-bold">Related guides</h2>
            <ul className="mt-4 grid gap-4 md:grid-cols-3">
              {related.map((r) => (
                <li key={r.slug} className="rounded-xl border border-line bg-surface p-5">
                  <Link href={`/blog/${r.slug}`} className="font-semibold hover:text-accent">{r.title}</Link>
                  <p className="mt-1 text-sm text-fg-2">{r.description}</p>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </article>
  );
}
