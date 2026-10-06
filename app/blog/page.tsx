import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageHead } from "@/components/page-head";
import { formatDate, posts } from "@/lib/blog";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "DPDP Act Blog: Guides, Checklists and Updates",
  description:
    "Plain-English guides to India's DPDP Act 2023 and Rules 2025: compliance checklists, penalties, deadlines and GDPR comparisons for businesses.",
  alternates: { canonical: "/blog", types: { "application/rss+xml": "/blog/rss.xml" } },
  openGraph: { url: "/blog", type: "website", images: [{ url: "/screens/dashboard.png", alt: "The GRC-Flow dashboard" }] },
};

export default function BlogIndex() {
  const list = posts();
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: `${site.name} blog`,
          url: `${site.url}/blog`,
          blogPost: list.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            url: `${site.url}/blog/${p.slug}`,
            datePublished: p.published,
            dateModified: p.updated,
          })),
        }}
      />
      <PageHead eyebrow="Blog" title="DPDP Act guides for businesses and consultants">
        Plain-English explainers on the DPDP Act 2023 and DPDP Rules 2025, with the section behind every claim.
      </PageHead>
      <div className="mx-auto max-w-[1240px] px-4 py-12 sm:px-8">
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <li key={p.slug} className="flex flex-col rounded-xl border border-line bg-surface p-6 transition-shadow hover:shadow-md">
              <p className="text-sm text-muted">
                <time dateTime={p.published}>{formatDate(p.published)}</time> · {p.minutes} min read
              </p>
              <h2 className="mt-2 text-lg leading-snug font-bold">
                <Link href={`/blog/${p.slug}`} className="hover:text-accent">
                  {p.title}
                </Link>
              </h2>
              <p className="mt-2 flex-1 text-fg-2">{p.description}</p>
              <Link href={`/blog/${p.slug}`} className="mt-4 font-semibold text-accent hover:text-accent-hover" aria-label={`Read: ${p.title}`}>
                Read the guide →
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
