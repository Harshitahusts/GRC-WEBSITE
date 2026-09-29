import Link from "next/link";
import { ButtonLink } from "@/components/buttons";
import { Ledger } from "@/components/ledger";
import { appliesTo, dpdpDuties, heroChecks, integrationCategories, integrations, modules, penalties, steps, timeline } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-20 sm:px-6 md:pt-20">
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-end">
          <h1 className="text-[2.75rem] leading-[1.02] font-bold tracking-[-0.03em] sm:text-[3.5rem] lg:text-display">
            Know where you stand on the DPDP Act, every hour.
          </h1>
          <div className="md:pb-2">
            <p className="text-lg leading-relaxed text-ink-soft">
              GRC-Flow maps the personal data you hold, runs your notices, consent and rights requests, and checks your systems against the Act and the DPDP Rules around the clock.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <ButtonLink href="/demo">Book a demo</ButtonLink>
              <ButtonLink href="/platform" variant="plain">See how it works</ButtonLink>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <Ledger checks={heroChecks} />
        </div>
      </section>

      <section className="border-y border-rule bg-paper-deep/50">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="text-4xl font-bold tracking-[-0.02em]">The deadline is May 2027</h2>
            <p className="mt-3 text-lg text-ink-soft">
              The Rules give businesses 18 months to get ready. Mapping your data and rebuilding consent usually takes most of that.
            </p>
          </div>
          <ol className="relative border-l-2 border-ink pl-8">
            {timeline.map((t, i) => (
              <li key={t.when} className="relative pb-7 last:pb-0">
                <span
                  className={`absolute top-1 -left-[2.55rem] size-4 rounded-full border-2 border-ink ${i === timeline.length - 1 ? "bg-ink" : "bg-paper"}`}
                  aria-hidden
                />
                <p className="font-display text-lg font-semibold">{t.when}</p>
                <p className="mt-1 text-ink-soft">{t.what}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="max-w-2xl text-4xl font-bold tracking-[-0.02em]">Who the Act applies to</h2>
        <dl className="mt-10 border-t border-rule">
          {appliesTo.map((a) => (
            <div key={a.who} className="grid gap-2 border-b border-rule py-5 md:grid-cols-[1fr_1.4fr] md:gap-10">
              <dt className="font-display text-xl font-semibold">{a.who}</dt>
              <dd className="text-ink-soft">{a.detail}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid gap-6 md:grid-cols-[1fr_1fr] md:items-end">
            <h2 className="text-4xl font-bold tracking-[-0.02em] sm:text-5xl">What the Act asks, section by section</h2>
            <p className="text-lg text-paper/75">Each duty below is a feature in GRC-Flow, with its own checks and records.</p>
          </div>
          <table className="mt-12 w-full border-collapse text-left">
            <thead className="sr-only md:not-sr-only">
              <tr className="border-b border-paper/25 text-sm text-paper/60">
                <th scope="col" className="py-3 pr-6 font-normal">Section</th>
                <th scope="col" className="py-3 pr-6 font-normal">What the Act asks</th>
                <th scope="col" className="py-3 font-normal">How GRC-Flow handles it</th>
              </tr>
            </thead>
            <tbody>
              {dpdpDuties.map((d) => (
                <tr key={d.section} className="grid border-b border-paper/15 py-4 md:table-row md:py-0">
                  <td className="py-1 pr-6 font-display text-lg font-semibold whitespace-nowrap md:py-5 md:align-top">{d.section}</td>
                  <td className="py-1 pr-6 font-medium md:w-[38%] md:py-5 md:align-top">{d.duty}</td>
                  <td className="py-1 text-paper/75 md:py-5 md:align-top">{d.how}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="text-4xl font-bold tracking-[-0.02em]">What getting it wrong costs</h2>
            <p className="mt-3 text-lg text-ink-soft">Maximum penalties per instance, set out in the Schedule to the Act. The Data Protection Board decides the amount.</p>
          </div>
          <dl className="border-t-2 border-ink">
            {penalties.map((p) => (
              <div key={p.for} className="grid grid-cols-[8.5rem_1fr] items-baseline gap-4 border-b border-rule py-4 sm:grid-cols-[11rem_1fr]">
                <dt className="font-display text-2xl font-bold tracking-[-0.02em] sm:text-3xl">{p.amount}</dt>
                <dd className="text-ink-soft">{p.for}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-y border-rule bg-paper-deep/50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="max-w-2xl text-4xl font-bold tracking-[-0.02em]">From first login to DPDP-ready</h2>
          <ol className="mt-10 grid gap-10 md:grid-cols-4 md:gap-6">
            {steps.map((step, i) => (
              <li key={step.title} className="border-t-2 border-ink pt-4">
                <span className="font-display text-3xl font-bold text-ink-soft/60" aria-hidden>{i + 1}</span>
                <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-ink-soft">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold tracking-[-0.02em]">Modules for each duty</h2>
            <p className="mt-3 text-lg text-ink-soft">Start with consent, notices and rights requests. Add the rest as your data and risk grow.</p>
            <ul className="mt-8 border-t border-rule">
              {modules.slice(0, 7).map((m) => (
                <li key={m.name} className="flex items-baseline justify-between gap-4 border-b border-rule py-3.5">
                  <span className="font-semibold">{m.name}</span>
                  <span className="text-right text-sm text-ink-soft">{m.refs.join(", ")}</span>
                </li>
              ))}
            </ul>
            <ButtonLink href="/modules" variant="plain" className="mt-6">All {modules.length} modules</ButtonLink>
          </div>
          <div>
            <h2 className="text-4xl font-bold tracking-[-0.02em]">Works with the tools that hold your data</h2>
            <p className="mt-3 text-lg text-ink-soft">Including the CRMs, messaging and HR systems Indian teams run on.</p>
            <dl className="mt-8 border-t border-rule">
              {integrationCategories.slice(0, 5).map((cat) => (
                <div key={cat} className="grid grid-cols-[8.5rem_1fr] gap-4 border-b border-rule py-3.5">
                  <dt className="text-sm text-ink-soft">{cat}</dt>
                  <dd>{integrations.filter((i) => i.category === cat).map((i) => i.name).join(", ")}</dd>
                </div>
              ))}
            </dl>
            <ButtonLink href="/integrations" variant="plain" className="mt-6">All {integrations.length} integrations</ButtonLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 rounded-lg border-2 border-ink p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold tracking-[-0.02em] sm:text-4xl">Find your DPDP gaps in 30 minutes</h2>
            <p className="mt-3 text-lg text-ink-soft">
              In a demo we run the gap assessment with you and show what your business needs to fix first. Or read the <Link href="/platform" className="underline decoration-rule decoration-2 underline-offset-4 hover:decoration-ink">platform overview</Link>.
            </p>
          </div>
          <ButtonLink href="/demo" className="shrink-0">Book a demo</ButtonLink>
        </div>
      </section>
    </>
  );
}
