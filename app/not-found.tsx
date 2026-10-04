import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/buttons";
import { legalNav, nav, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="night">
      <div className="mx-auto max-w-[1240px] px-4 py-20 sm:px-8 md:py-28">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-2 max-w-2xl text-[2rem] leading-tight font-bold text-white sm:text-[2.5rem]">This page doesn&apos;t exist</h1>
        <p className="mt-3 max-w-xl text-lg text-night-text">
          The link may be old or mistyped. Here&apos;s where you can go instead.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/">Go to the home page</ButtonLink>
          <ButtonLink href={site.appUrl} variant="secondary">Open GRC Flow</ButtonLink>
        </div>
        <nav aria-label="Site pages" className="mt-12 grid max-w-xl gap-8 text-night-text sm:grid-cols-2">
          {[
            { title: "Product", items: nav },
            { title: "Legal", items: legalNav },
          ].map((group) => (
            <div key={group.title}>
              <h2 className="text-sm font-semibold text-white">{group.title}</h2>
              <ul className="mt-2 space-y-1.5">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-white hover:underline">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </section>
  );
}
