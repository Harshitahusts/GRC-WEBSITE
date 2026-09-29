import type { Metadata } from "next";
import { ButtonLink } from "@/components/buttons";
import { PageIntro } from "@/components/page-intro";
import { modules } from "@/lib/content";

export const metadata: Metadata = {
  title: "Modules",
  description: "DPDP modules for consent, notices, rights requests, data discovery, retention, breach response, children's data, processors, training and DPIAs.",
};

function planLabel(plan: string) {
  return plan === "Enterprise" ? "Included in Enterprise" : `Included in ${plan} and above`;
}

export default function ModulesPage() {
  return (
    <>
      <PageIntro title="A module for each duty the Act sets">
        <p>
          Every module shares the same data map, evidence register and people as the core platform, so nothing gets tracked twice.
        </p>
      </PageIntro>
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <nav aria-label="Modules on this page" className="mb-10 flex flex-wrap gap-x-5 gap-y-2 text-ink-soft">
          {modules.map((m) => (
            <a key={m.name} href={`#${slug(m.name)}`} className="hover:text-ink">{m.name}</a>
          ))}
        </nav>
        <div className="border-t-2 border-ink">
          {modules.map((m) => (
            <article key={m.name} id={slug(m.name)} className="grid scroll-mt-6 gap-6 border-b border-rule py-10 md:grid-cols-[1fr_1.3fr]">
              <div>
                <h2 className="text-3xl font-bold tracking-[-0.02em]">{m.name}</h2>
                <p className="mt-2 text-lg text-ink-soft">{m.summary}</p>
                <p className="mt-4 inline-block rounded border border-rule px-2 py-1 text-sm">{planLabel(m.plan)}</p>
              </div>
              <div>
                <ul className="space-y-2.5">
                  {m.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <svg viewBox="0 0 16 16" className="mt-1 size-4 shrink-0 text-pass" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M3.5 8.5l3 3 6-7" />
                      </svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm text-ink-soft">DPDP reference: {m.refs.join(", ")}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <ButtonLink href="/demo">Book a demo</ButtonLink>
          <ButtonLink href="/pricing" variant="plain">Compare plans</ButtonLink>
        </div>
      </section>
    </>
  );
}

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}
