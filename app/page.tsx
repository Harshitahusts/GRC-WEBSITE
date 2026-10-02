import Link from "next/link";
import { ButtonLink } from "@/components/buttons";
import { DashboardPreview } from "@/components/demo/preview";
import { Icon } from "@/components/icon";
import { analystAnswers } from "@/lib/demo-data";
import { areas, audiences, detectors, discoveryPromises, documentsDrafted, heroPoints, penalties, timeline, workflow } from "@/lib/content";

const sample = analystAnswers[1];

export default function Home() {
  return (
    <>
      <section className="night">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-4 py-14 sm:px-8 md:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">India&apos;s DPDP Act 2023 &amp; Rules 2025</p>
            <h1 className="mt-3 max-w-[30rem] text-[2.1rem] leading-[1.15] font-bold text-white sm:text-[2.6rem]">
              DPDPA readiness assessments, drafted for you, verified by you.
            </h1>
            <ul className="mt-6 max-w-[30rem] space-y-3">
              {heroPoints.map((p) => (
                <li key={p.lead} className="flex gap-2.5 text-night-text">
                  <Icon name="check" className="mt-0.5 size-5 text-night-check" />
                  <span><strong className="font-[650] text-white">{p.lead}</strong> {p.rest}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/demo">Try the live demo</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">Book a demo</ButtonLink>
            </div>
          </div>
          <Link href="/demo" aria-label="Open the live demo dashboard" className="block rounded-xl transition-transform hover:-translate-y-0.5">
            <DashboardPreview />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-4 py-16 sm:px-8 md:py-20">
        <p className="eyebrow">How an engagement runs</p>
        <h2 className="mt-2 max-w-2xl text-3xl font-bold sm:text-[2rem]">Four steps from first question to a delivered assessment</h2>
        <ol className="mt-10 grid gap-4 md:grid-cols-4">
          {workflow.map((step, i) => (
            <li key={step.title} className="card relative p-5">
              <span className={`grid size-8 place-items-center rounded-full text-sm font-bold ${i === workflow.length - 1 ? "bg-pass-bg text-pass" : "bg-accent-soft text-accent"}`}>{i + 1}</span>
              <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
              <p className="mt-1.5 text-[0.92rem] text-fg-2">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-[1240px] px-4 py-16 sm:px-8 md:py-20">
          <p className="eyebrow">Around each engagement</p>
          <h2 className="mt-2 max-w-2xl text-3xl font-bold sm:text-[2rem]">The registers the Act expects you to keep</h2>
          <p className="mt-3 max-w-2xl text-lg text-fg-2">
            Every record has an owner, a due date, a status that won&apos;t move without the facts it needs, a full history and evidence attached.
          </p>
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {areas.map((area) => (
              <div key={area.name}>
                <h3 className="flex items-center gap-2 text-lg font-semibold">
                  <span className="grid size-8 place-items-center rounded-[8px] bg-accent-soft text-accent"><Icon name={area.icon} className="size-[18px]" /></span>
                  {area.name}
                </h3>
                <dl className="mt-4 divide-y divide-line border-y border-line">
                  {area.items.map((item) => (
                    <div key={item.title} className="py-3">
                      <dt className="font-semibold">{item.title}</dt>
                      <dd className="mt-0.5 text-[0.92rem] text-fg-2">{item.body}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1240px] gap-10 px-4 py-16 sm:px-8 md:py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow">GRC Analyst</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-[2rem]">Ask about any client. Get an answer with the provision behind it.</h2>
          <p className="mt-3 text-lg text-fg-2">
            The Analyst reads the workspace&apos;s engagements, findings, risks, evidence and data flows, and follows an auditor&apos;s workflow: planning, fieldwork, evidence, risk and reporting. It can&apos;t change anything.
          </p>
          <ButtonLink href="/demo#analyst" variant="secondary" className="mt-6">Try the Analyst</ButtonLink>
        </div>
        <div className="card space-y-3 p-5">
          <p className="ml-auto w-fit max-w-[85%] rounded-[10px] rounded-br-sm bg-accent px-3.5 py-2 text-white">{sample.q}</p>
          <div className="flex gap-3">
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-accent-soft text-accent"><Icon name="spark" className="size-4" /></span>
            <div className="space-y-2 rounded-[10px] rounded-tl-sm border border-line bg-surface-2 px-4 py-3 text-[0.92rem]">
              {sample.a.map((p) => <p key={p}>{p}</p>)}
              <p className="flex flex-wrap gap-1.5 pt-1">
                {sample.cites.map((c) => (
                  <span key={c} className="badge bg-info-bg text-info"><Icon name="book" className="size-3" />{c}</span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-4 py-16 sm:px-8 md:py-20 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Personal data discovery</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-[2rem]">Find the personal data in a client export</h2>
            <p className="mt-3 text-lg text-fg-2">
              Upload a CSV or JSON of customers, employees or patients. The scan flags fields that look like personal data, and a person confirms or rejects each one before it enters the data inventory.
            </p>
            <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="What the scanner detects">
              {detectors.map((d) => <li key={d} className="badge bg-accent-soft text-info">{d}</li>)}
            </ul>
          </div>
          <div className="card p-6">
            <h3 className="flex items-center gap-2 font-semibold"><Icon name="shield" className="text-accent" /> Private by design</h3>
            <ul className="mt-4 space-y-3">
              {discoveryPromises.map((p) => (
                <li key={p} className="flex gap-2.5 text-fg-2">
                  <Icon name="check" className="mt-0.5 size-5 text-good" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1240px] gap-10 px-4 py-16 sm:px-8 md:py-20 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="eyebrow">Documents</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-[2rem]">Drafted for you, signed off by a person</h2>
          <p className="mt-3 text-lg text-fg-2">Each document is built from the intake and findings. Nothing can be downloaded as .docx until someone has reviewed it.</p>
        </div>
        <ul className="card divide-y divide-line p-0">
          {documentsDrafted.map((d) => (
            <li key={d.name} className="flex items-center gap-3 px-5 py-3.5">
              <Icon name="pen" className="size-5 text-accent" />
              <span className="flex-1">
                <strong className="block">{d.name}</strong>
                <span className="text-[0.88rem] text-muted">{d.note}</span>
              </span>
              <Icon name="download" className="size-4 text-muted" />
            </li>
          ))}
        </ul>
      </section>

      <section className="night">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-4 py-16 sm:px-8 md:py-20 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Why now</p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-[2rem]">The main duties apply from 13 May 2027</h2>
            <ol className="mt-8 space-y-5 border-l-2 border-white/20 pl-6">
              {timeline.map((t) => (
                <li key={t.when} className="relative">
                  <span className="absolute top-1.5 -left-[1.95rem] size-3 rounded-full border-2 border-night-check bg-night" aria-hidden />
                  <p className="font-semibold text-white">{t.when}</p>
                  <p className="text-night-text">{t.what}</p>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Maximum penalty per instance</h3>
            <dl className="mt-4 divide-y divide-white/10 border-y border-white/10">
              {penalties.map((p) => (
                <div key={p.for} className="grid grid-cols-[8rem_1fr] items-baseline gap-4 py-3">
                  <dt className="text-xl font-bold whitespace-nowrap text-white">{p.amount}</dt>
                  <dd className="text-night-text">{p.for}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-4 py-16 sm:px-8 md:py-20">
        <div className="grid gap-4 md:grid-cols-2">
          {audiences.map((a) => (
            <div key={a.who} className="card p-6">
              <h2 className="text-xl font-semibold">{a.who}</h2>
              <p className="mt-2 text-fg-2">{a.detail}</p>
            </div>
          ))}
        </div>
        <div className="card mt-4 flex flex-col gap-5 p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">See it with sample clients</h2>
            <p className="mt-1 text-fg-2">Six clients at every stage, from intake to delivered. No sign-up needed.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/demo">Try the live demo</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">Book a demo</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
