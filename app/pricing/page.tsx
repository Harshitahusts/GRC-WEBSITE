import type { Metadata } from "next";
import { ButtonLink } from "@/components/buttons";
import { PageIntro } from "@/components/page-intro";
import { faqs, plans } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pricing",
  description: "DPDP compliance plans priced by how many people's data you hold. Every plan includes every integration.",
};

export default function PricingPage() {
  return (
    <>
      <PageIntro title="Plans that match where you are">
        <p>Pricing depends on how many people's personal data you hold. Every plan includes every integration. We&apos;ll send a quote after a short call.</p>
      </PageIntro>
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid border-t-2 border-ink md:grid-cols-3">
          {plans.map((p, i) => (
            <div key={p.name} className={`flex flex-col border-b border-rule py-8 md:border-b-0 md:px-8 md:first:pl-0 ${i > 0 ? "md:border-l" : ""}`}>
              <h2 className="text-3xl font-bold tracking-[-0.02em]">{p.name}</h2>
              <p className="mt-1 text-ink-soft">{p.for}</p>
              <p className="mt-5 font-display text-xl font-semibold">{p.scope}</p>
              <ul className="mt-5 space-y-2.5">
                {p.includes.map((f) => (
                  <li key={f} className="flex gap-3">
                    <svg viewBox="0 0 16 16" className="mt-1 size-4 shrink-0 text-pass" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M3.5 8.5l3 3 6-7" />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <ButtonLink href={`/demo?plan=${p.name.toLowerCase()}`} variant={i === 1 ? "solid" : "plain"}>
                  Get a {p.name} quote
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>


        <div className="mt-20 grid gap-8 md:grid-cols-[1fr_1.6fr]">
          <h2 className="text-3xl font-bold tracking-[-0.02em]">Questions buyers ask</h2>
          <div className="border-t border-rule">
            {faqs.map((f) => (
              <details key={f.q} className="group border-b border-rule py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                  {f.q}
                  <span className="text-xl text-ink-soft transition-transform group-open:rotate-45" aria-hidden>+</span>
                </summary>
                <p className="mt-3 max-w-prose text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
