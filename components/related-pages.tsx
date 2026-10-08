import Link from "next/link";
import { ButtonLink } from "@/components/buttons";
import { Icon } from "@/components/icon";
import { JsonLd } from "@/components/json-ld";
import { featurePages } from "@/lib/features";
import { site } from "@/lib/site";

// The end of every feature page: where to go next, and how to try GRC Flow. Also tells
// search engines where the page sits in the site (a breadcrumb).
export function RelatedPages({ current }: { current: string }) {
  const page = featurePages.find((p) => p.href === current);
  const others = featurePages.filter((p) => p.href !== current);
  // Pages from the same stage first, then the rest in their usual order.
  const next = [...others.filter((p) => p.stage === page?.stage), ...others.filter((p) => p.stage !== page?.stage)].slice(0, 3);

  return (
    <section className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-4 py-14 sm:px-8 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <h2 className="text-2xl font-bold">Try it on one real client</h2>
          <p className="mt-2 text-fg-2">Sign in and run an assessment, or book a demo and we&apos;ll walk you through it.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <ButtonLink href={site.appUrl}>Open GRC Flow</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">Book a demo</ButtonLink>
          </div>
        </div>
        <nav aria-label="More about GRC Flow">
          <h2 className="font-semibold text-fg-2">Keep reading</h2>
          <ul className="mt-3 divide-y divide-line border-y border-line">
            {next.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="group flex items-start gap-3 py-3.5">
                  <Icon name={p.icon} className="mt-0.5 size-5 text-accent" />
                  <span>
                    <strong className="font-semibold group-hover:text-accent">{p.title}</strong>
                    <span className="block text-[0.92rem] text-fg-2">{p.blurb}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {page && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: site.url },
              { "@type": "ListItem", position: 2, name: page.title, item: `${site.url}${page.href}` },
            ],
          }}
        />
      )}
    </section>
  );
}
