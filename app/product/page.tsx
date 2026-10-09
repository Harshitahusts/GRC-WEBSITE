import type { Metadata } from "next";
import { ButtonLink } from "@/components/buttons";
import { Explore } from "@/components/explore";
import { Icon, type IconName } from "@/components/icon";
import { PageHead } from "@/components/page-head";
import { workflow } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/product" },
  title: "DPDP Compliance Software: Features",
  description: "Intake, cited findings, reviewed documents and hard-stop delivery, plus privacy operations, compliance and risk registers for the DPDP Act.",
};

const workspace: { icon: IconName; title: string; body: string }[] = [
  { icon: "home", title: "Dashboard", body: "What needs attention, the pipeline by stage, readiness per client, top risks and recent activity." },
  { icon: "check", title: "Work queue", body: "Everything open across clients, most urgent first." },
  { icon: "spark", title: "GRC Analyst", body: "Answers questions about any client from live workspace data, citing the Act and Rules. Read-only." },
  { icon: "flow", title: "Data flows", body: "A map of where each client's personal data goes, with flows leaving India flagged." },
  { icon: "plug", title: "Connectors", body: "Read-only checks on code hosting, cloud (AWS, Google Cloud, Azure) and Microsoft 365 sign-ins that back findings with evidence." },
  { icon: "book", title: "Corpus", body: "The text of the DPDP Act and Rules that every citation is checked against." },
  { icon: "users", title: "Team and roles", body: "Admins, members and read-only viewers." },
  { icon: "clock", title: "Audit log", body: "Every change, who made it and when." },
  { icon: "search", title: "Search and shortcuts", body: "Ctrl K to jump to any page or action, and keyboard shortcuts for the common ones." },
];

export default function ProductPage() {
  return (
    <>
      <PageHead eyebrow="Product" title="One workspace for every DPDP engagement">
        <p>From the first intake question to a delivered assessment, with the registers, evidence and risk work in between.</p>
      </PageHead>

      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-8">
        <h2 className="text-2xl font-bold">The engagement workflow</h2>
        <ol className="mt-6 divide-y divide-line border-y border-line">
          {workflow.map((s, i) => (
            <li key={s.title} className="grid gap-2 py-5 md:grid-cols-[3rem_14rem_1fr] md:gap-6">
              <span className="grid size-8 place-items-center rounded-full bg-accent-soft text-sm font-bold text-accent">{i + 1}</span>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="max-w-prose text-fg-2">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-[1240px] px-4 py-14 sm:px-8">
          <Explore title="Feature by feature" />
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-8">
        <h2 className="text-2xl font-bold">Across the workspace</h2>
        <ul className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {workspace.map((w) => (
            <li key={w.title} className="flex gap-3">
              <Icon name={w.icon} className="mt-0.5 size-5 text-accent" />
              <span>
                <strong className="block">{w.title}</strong>
                <span className="text-[0.92rem] text-fg-2">{w.body}</span>
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href={site.appUrl}>Open GRC Flow</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">Book a demo</ButtonLink>
        </div>
      </section>
    </>
  );
}
