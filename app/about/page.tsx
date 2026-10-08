import type { Metadata } from "next";
import { ButtonLink } from "@/components/buttons";
import { Icon, type IconName } from "@/components/icon";
import { PageHead } from "@/components/page-head";
import { business, site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About us",
  description: `${site.name} is a DPDP Act readiness workspace from ${business.parent}, based in Pune, India.`,
};

// Each principle is something the product actually enforces.
const principles: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "book",
    title: "Cite the law",
    body: "Every finding names the section of the Act or Rule it relies on, and that citation is checked against the text before anyone sees it.",
  },
  {
    icon: "users",
    title: "People sign off",
    body: "Software drafts; a person reviews. Documents can't be downloaded until they're reviewed, and an assessment can't be delivered until every check passes.",
  },
  {
    icon: "shield",
    title: "Keep data private",
    body: "Client exports are scanned in memory, only masked shapes are kept, and nothing from a scan is sent to an AI model.",
  },
  {
    icon: "check",
    title: "One law, done properly",
    body: "We cover India's DPDP Act and Rules only, and go deep on them, rather than spreading thin across every framework.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHead eyebrow="About us" title={`${site.name} is built in Pune, India`}>
        <p>
          {site.name} is a product of <strong className="text-white">{business.parent}</strong>, based in Pune, India. We make software that helps consultants and compliance teams get businesses ready for the Digital Personal Data Protection Act, 2023.
        </p>
      </PageHead>

      <section className="mx-auto grid max-w-[1240px] gap-10 px-4 py-14 sm:px-8 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <h2 className="text-2xl font-bold">Why we built it</h2>
          <p className="mt-3 text-lg text-fg-2">
            A DPDP readiness assessment means checking a business against every obligation in the Act and Rules, gathering evidence, scoring risks and writing the same core documents each time.
          </p>
          <p className="mt-3 text-lg text-fg-2">
            We built {site.name} so the parts that follow the text of the law are done by software, and the judgement stays with people who know the client.
          </p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {principles.map((p) => (
            <li key={p.title} className="card p-5">
              <span className="grid size-9 place-items-center rounded-[9px] bg-accent-soft text-accent">
                <Icon name={p.icon} className="size-5" />
              </span>
              <h3 className="mt-3 font-semibold">{p.title}</h3>
              <p className="mt-1 text-[0.92rem] text-fg-2">{p.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-line bg-surface">
        <div className="mx-auto grid max-w-[1240px] gap-8 px-4 py-14 sm:px-8 md:grid-cols-[1fr_auto] md:items-center">
          <dl className="grid gap-5 sm:grid-cols-3">
            <div>
              <dt className="text-sm font-semibold text-muted">Company</dt>
              <dd className="mt-1 font-semibold">{business.parent}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-muted">Based in</dt>
              <dd className="mt-1 font-semibold">{business.city}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-muted">Email</dt>
              <dd className="mt-1 font-semibold">
                <a href={`mailto:${site.email}`} className="text-accent hover:underline">{site.email}</a>
              </dd>
            </div>
          </dl>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/contact">Book a demo</ButtonLink>
            <ButtonLink href={site.appUrl} variant="secondary">Open GRC Flow</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
