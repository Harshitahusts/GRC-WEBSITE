// Content sections shared by the feature pages. Each one used to sit on the homepage;
// the homepage now tells the story with the animations and links here for the detail.
import { ButtonLink } from "@/components/buttons";
import { Icon } from "@/components/icon";
import { VaptBadge } from "@/components/vapt-badge";
import { aiRules, analystExample, areas, comparison, detectors, discoveryPromises, documentsDrafted, penalties, pilot, security, selfCompliance, timeline } from "@/lib/content";
import { site } from "@/lib/site";

// The five rules that keep a person in charge of everything the AI drafts.
export function AiRulesSection() {
  return (
    <section className="mx-auto grid max-w-[1240px] gap-10 px-4 py-16 sm:px-8 md:py-20 lg:grid-cols-[1fr_1.5fr]">
      <div>
        <h2 className="mt-2 text-3xl font-bold sm:text-[2rem]">The AI drafts. A person always makes the call.</h2>
        <p className="mt-3 text-lg text-fg-2">
          Five rules are built into the product, not left to good habits. Use the AI provider you choose: Groq, Anthropic Claude, OpenAI, Mistral and others, with keys stored encrypted.
        </p>
      </div>
      <ul className="divide-y divide-line border-y border-line">
        {aiRules.map((r) => (
          <li key={r.title} className="grid gap-1 py-4 sm:grid-cols-[16rem_minmax(0,1fr)] sm:gap-6">
            <h3 className="flex items-start gap-2 font-semibold"><Icon name="shield" className="mt-0.5 size-5 text-accent" />{r.title}</h3>
            <p className="text-fg-2">{r.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

// An example of the GRC Analyst answering a question with citations.
export function AnalystSection() {
  return (
    <section className="mx-auto grid max-w-[1240px] gap-10 px-4 py-16 sm:px-8 md:py-20 lg:grid-cols-2 lg:items-center">
      <div>
        <h2 className="mt-2 text-3xl font-bold sm:text-[2rem]">Ask about any client. Get an answer with the provision behind it.</h2>
        <p className="mt-3 text-lg text-fg-2">
          The Analyst reads the workspace&apos;s engagements, findings, risks, evidence and data flows, and follows an auditor&apos;s workflow: planning, fieldwork, evidence, risk and reporting. It can&apos;t change anything.
        </p>
        <ButtonLink href={site.appUrl} variant="secondary" className="mt-6">Open GRC Flow</ButtonLink>
      </div>
      <div className="card space-y-3 p-5">
        <p className="text-xs font-semibold tracking-wide text-fg-2 uppercase">Example answer</p>
        <p className="ml-auto w-fit max-w-[85%] rounded-[10px] rounded-br-sm bg-accent px-3.5 py-2 text-white">{analystExample.q}</p>
        <div className="flex gap-3">
          <span className="grid size-8 shrink-0 place-items-center rounded-full bg-accent-soft text-accent"><Icon name="spark" className="size-4" /></span>
          <div className="space-y-2 rounded-[10px] rounded-tl-sm border border-line bg-surface-2 px-4 py-3 text-[0.92rem]">
            {analystExample.a.map((p) => <p key={p}>{p}</p>)}
            <p className="flex flex-wrap gap-1.5 pt-1">
              {analystExample.cites.map((c) => (
                <span key={c} className="badge bg-info-bg text-info"><Icon name="book" className="size-3" />{c}</span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// The privacy operations, compliance and risk registers.
export function RegistersSection() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto max-w-[1240px] px-4 py-16 sm:px-8 md:py-20">
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
  );
}

// What the personal-data scanner finds, and how it keeps the data private.
export function DiscoverySection() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-4 py-16 sm:px-8 md:py-20 lg:grid-cols-2">
        <div>
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
  );
}

// The documents GRC Flow drafts for each engagement.
export function DocumentsSection() {
  return (
    <section className="mx-auto grid max-w-[1240px] gap-10 px-4 py-16 sm:px-8 md:py-20 lg:grid-cols-[1fr_1.2fr]">
      <div>
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
  );
}

// What a business has to be able to prove, step by step.
export function SelfComplianceSection() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto max-w-[1240px] px-4 py-16 sm:px-8 md:py-20">
        <h2 className="mt-2 max-w-3xl text-3xl font-bold sm:text-[2rem]">No licence makes you compliant. You have to be able to prove it.</h2>
        <p className="mt-3 max-w-3xl text-lg text-fg-2">
          Each Data Fiduciary is responsible for its own compliance and must show it if a person complains or the Data Protection Board investigates. Your privacy policy only holds up if the practice behind it matches.
        </p>
        <ol className="mt-10 grid gap-px overflow-hidden rounded-[10px] border border-line bg-line md:grid-cols-5">
          {selfCompliance.map((c, i) => (
            <li key={c.step} className="bg-surface p-5">
              <p className="flex items-center gap-2 font-bold">
                <span className="grid size-7 place-items-center rounded-full bg-accent-soft text-[0.82rem] text-accent">{i + 1}</span>
                {c.step}
              </p>
              <p className="mt-2 text-[0.92rem] text-fg-2">{c.you}</p>
              <p className="mt-3 border-t border-line pt-3 text-[0.92rem]"><strong className="font-semibold">GRC Flow:</strong> <span className="text-fg-2">{c.tool}</span></p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// The DPDP timeline and the maximum penalties.
export function WhyNowSection() {
  return (
    <section className="night">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-4 py-16 sm:px-8 md:py-20 lg:grid-cols-2">
        <div>
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
  );
}

// GRC Flow compared with spreadsheets and generic GRC tools.
export function ComparisonSection() {
  return (
    <section className="mx-auto max-w-[1240px] px-4 py-16 sm:px-8 md:py-20">
      <h2 className="mt-2 max-w-3xl text-3xl font-bold sm:text-[2rem]">Your experts spend their time on judgement, not formatting</h2>
      {/* Phones: one card per row of the comparison, so nothing scrolls sideways. */}
      <dl className="mt-8 divide-y divide-line rounded-[10px] border border-line bg-surface md:hidden">
        {comparison.rows.map((r) => (
          <div key={r.what} className="p-4">
            <dt className="font-semibold">{r.what}</dt>
            <dd className="mt-2 flex gap-2 font-medium"><Icon name="check" className="mt-0.5 size-4 shrink-0 text-good" />GRC Flow: {r.values[2]}</dd>
            <dd className="mt-1 text-[0.9rem] text-muted">{comparison.columns[0]}: {r.values[0]}</dd>
            <dd className="text-[0.9rem] text-muted">{comparison.columns[1]}: {r.values[1]}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-8 hidden rounded-[10px] border border-line bg-surface md:block">
        <table className="w-full border-collapse text-left text-[0.92rem]">
          <thead>
            <tr className="border-b border-line">
              <td className="w-[22%] p-4" />
              {comparison.columns.map((c, i) => (
                <th key={c} scope="col" className={`p-4 font-semibold ${i === 2 ? "bg-accent-soft text-info" : "text-fg-2"}`}>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparison.rows.map((r) => (
              <tr key={r.what} className="border-b border-line last:border-0">
                <th scope="row" className="p-4 font-semibold">{r.what}</th>
                {r.values.map((v, i) => (
                  <td key={v} className={`p-4 ${i === 2 ? "bg-accent-soft/60 font-medium text-fg" : "text-muted"}`}>
                    {i === 2 ? <span className="flex gap-2"><Icon name="check" className="mt-0.5 size-4 text-good" />{v}</span> : v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

// How GRC Flow is hosted and secured.
export function SecuritySection() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-4 py-16 sm:px-8 md:py-20 lg:grid-cols-[1fr_2fr]">
        <div>
          <h2 className="mt-2 text-3xl font-bold sm:text-[2rem]">A compliance tool has to practise what it checks</h2>
          <p className="mt-3 text-lg text-fg-2">GRC Flow is hosted in India, in the Mumbai region. Your clients&apos; data stays in your workspace.</p>
          <VaptBadge className="mt-5" />
        </div>
        <dl className="grid gap-x-8 sm:grid-cols-2">
          {security.map((s) => (
            <div key={s.area} className="border-t border-line py-4">
              <dt className="flex items-center gap-2 font-semibold"><Icon name="lock" className="size-4 text-accent" />{s.area}</dt>
              <dd className="mt-1 text-[0.92rem] text-fg-2">{s.how}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

// The four-week pilot offer.
export function PilotSection() {
  return (
    <section className="mx-auto max-w-[1240px] px-4 py-16 sm:px-8 md:py-20">
      <div className="card grid gap-10 p-6 sm:p-10 lg:grid-cols-[1fr_1.3fr] lg:items-center">
        <div>
          <h2 className="text-3xl font-bold">Try it on one real client</h2>
          <p className="mt-3 text-lg text-fg-2">A four-week pilot on one of your own engagements, with a check-in call each week.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/contact">Book a demo</ButtonLink>
            <ButtonLink href={site.appUrl} variant="secondary">Sign in to GRC Flow</ButtonLink>
          </div>
        </div>
        <ol className="relative space-y-5 border-l-2 border-line pl-6">
          {pilot.map((p) => (
            <li key={p.when} className="relative">
              <span className="absolute top-1.5 -left-[1.95rem] size-3 rounded-full border-2 border-accent bg-surface" aria-hidden />
              <p className="font-semibold">{p.when}</p>
              <p className="text-fg-2">{p.what}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
