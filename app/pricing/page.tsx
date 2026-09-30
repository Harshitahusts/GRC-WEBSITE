import type { Metadata } from "next";
import { ButtonLink } from "@/components/buttons";
import { Icon } from "@/components/icon";
import { PageHead } from "@/components/page-head";
import { faqs, plans } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Plans for independent consultants, consultancies and larger firms running DPDPA assessments.",
};

export default function PricingPage() {
  return (
    <>
      <PageHead eyebrow="Pricing" title="Plans for how you run assessments">
        <p>Priced by seats and engagements. We send a quote after a short call.</p>
      </PageHead>
      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {plans.map((p, i) => (
            <div key={p.name} className={`card flex flex-col p-6 ${i === 1 ? "border-accent shadow-float ring-1 ring-accent" : ""}`}>
              <h2 className="text-2xl font-bold">{p.name}</h2>
              <p className="text-muted">{p.for}</p>
              <p className="mt-4 rounded-[7px] bg-accent-soft px-3 py-2 text-[0.92rem] font-semibold text-info">{p.scope}</p>
              <ul className="mt-5 space-y-2.5">
                {p.includes.map((f) => (
                  <li key={f} className="flex gap-2.5">
                    <Icon name="check" className="mt-0.5 size-5 text-good" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <ButtonLink href={`/contact?plan=${p.name.toLowerCase()}`} variant={i === 1 ? "primary" : "secondary"} className="w-full">
                  Get a {p.name} quote
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-[1fr_1.6fr]">
          <div>
            <h2 className="text-2xl font-bold">Questions</h2>
            <p className="mt-2 text-fg-2">Something else? <a className="font-semibold text-accent hover:underline" href="/contact">Ask us</a>.</p>
          </div>
          <div className="card divide-y divide-line p-0">
            {faqs.map((f) => (
              <details key={f.q} className="group px-5 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                  {f.q}
                  <Icon name="plus" className="size-4 text-muted transition-transform group-open:rotate-45" />
                </summary>
                <p className="mt-2 max-w-prose text-fg-2">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
