import Link from "next/link";
import { ButtonLink } from "@/components/buttons";
import { Ledger } from "@/components/ledger";
import { dpdpDuties, frameworks, heroChecks, integrationCategories, integrations, modules, steps } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-20 sm:px-6 md:pt-20">
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-end">
          <h1 className="text-[2.75rem] leading-[1.02] font-bold tracking-[-0.03em] sm:text-[3.5rem] lg:text-display">
            Pass a check once. Every framework that needs it gets the evidence.
          </h1>
          <div className="md:pb-2">
            <p className="text-lg leading-relaxed text-ink-soft">
              GRC-Flow connects to your cloud, code and HR tools, checks your controls every hour, and files the proof against SOC 2, ISO 27001, the DPDP Act and more.
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
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold tracking-[-0.02em]">Frameworks you can run on GRC-Flow</h2>
            <p className="mt-3 text-lg text-ink-soft">Pick the ones your customers and regulators ask for. Controls you already pass carry over to each new one.</p>
          </div>
          <dl className="mt-10 grid border-t border-rule sm:grid-cols-2">
            {frameworks.map((f) => (
              <div key={f.name} className="grid gap-1 border-b border-rule py-4 sm:grid-cols-[10rem_1fr] sm:gap-4 sm:odd:pr-8 sm:even:border-l sm:even:pl-8">
                <dt className="font-display text-lg font-semibold">{f.name}</dt>
                <dd className="text-ink-soft">{f.who}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="max-w-2xl text-4xl font-bold tracking-[-0.02em]">From first login to audit-ready</h2>
        <ol className="mt-10 grid gap-10 md:grid-cols-4 md:gap-6">
          {steps.map((step, i) => (
            <li key={step.title} className="border-t-2 border-ink pt-4">
              <span className="font-display text-3xl font-bold text-ink-soft/60" aria-hidden>{i + 1}</span>
              <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-ink-soft">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid gap-6 md:grid-cols-[1fr_1fr] md:items-end">
            <h2 className="text-4xl font-bold tracking-[-0.02em] sm:text-5xl">Built for the DPDP Act, section by section</h2>
            <p className="text-lg text-paper/75">
              India&apos;s Digital Personal Data Protection Act applies to every business that handles personal data of people in India. Here is what it asks of you, and where GRC-Flow does the work.
            </p>
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
          <div className="mt-10">
            <Link href="/modules" className="font-semibold text-paper underline decoration-paper/40 decoration-2 underline-offset-[6px] hover:decoration-paper">
              See the DPDP modules
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold tracking-[-0.02em]">Add modules as you grow</h2>
            <p className="mt-3 text-lg text-ink-soft">Switch on what you need, when you need it. Each module plugs into the same controls and evidence.</p>
            <ul className="mt-8 border-t border-rule">
              {modules.slice(0, 6).map((m) => (
                <li key={m.name} className="flex items-baseline justify-between gap-4 border-b border-rule py-3.5">
                  <span className="font-semibold">{m.name}</span>
                  <span className="text-right text-sm text-ink-soft">{m.plan === "Add-on" ? "Add-on" : `In ${m.plan}`}</span>
                </li>
              ))}
            </ul>
            <ButtonLink href="/modules" variant="plain" className="mt-6">All {modules.length} modules</ButtonLink>
          </div>
          <div>
            <h2 className="text-4xl font-bold tracking-[-0.02em]">Connects to the tools you already use</h2>
            <p className="mt-3 text-lg text-ink-soft">Including the HR systems Indian teams run on, like Keka, Darwinbox and Zoho People.</p>
            <dl className="mt-8 border-t border-rule">
              {integrationCategories.slice(0, 6).map((cat) => (
                <div key={cat} className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-rule py-3.5">
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
            <h2 className="text-3xl font-bold tracking-[-0.02em] sm:text-4xl">See your own controls in the ledger</h2>
            <p className="mt-3 text-lg text-ink-soft">In a 30-minute demo we connect one of your tools and show you what passes today.</p>
          </div>
          <ButtonLink href="/demo" className="shrink-0">Book a demo</ButtonLink>
        </div>
      </section>
    </>
  );
}
