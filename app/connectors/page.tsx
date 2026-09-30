import type { Metadata } from "next";
import { Icon } from "@/components/icon";
import { PageHead } from "@/components/page-head";
import { connectors } from "@/lib/content";

export const metadata: Metadata = {
  title: "Connectors",
  description: "Read-only GitHub and AWS checks that back DPDPA findings with evidence, with more connectors on the way.",
};

export default function ConnectorsPage() {
  const live = connectors.filter((c) => c.live);
  const soon = connectors.filter((c) => !c.live);
  const categories = [...new Set(soon.map((c) => c.category))];

  return (
    <>
      <PageHead eyebrow="Connectors" title="Evidence from the client's own systems">
        <p>Connectors run read-only checks and attach the results to the findings they support. They also flag when intake answers don&apos;t match what the systems show.</p>
      </PageHead>

      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-8">
        <h2 className="text-2xl font-bold">Available now</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {live.map((c) => (
            <div key={c.name} className="card p-6">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold">{c.name}</h3>
                <span className="badge badge-dot bg-pass-bg text-pass">Available</span>
              </div>
              <p className="mt-1 text-sm text-muted">{c.category}</p>
              <p className="mt-3 text-fg-2">{c.checks}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-14 text-2xl font-bold">Coming soon</h2>
        <p className="mt-1 text-fg-2">Designed and on the way. Tell us which you need first when you book a demo.</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <div key={cat}>
              <h3 className="text-sm font-semibold text-muted">{cat}</h3>
              <ul className="mt-2 divide-y divide-line border-y border-line">
                {soon.filter((c) => c.category === cat).map((c) => (
                  <li key={c.name} className="py-2.5">
                    <span className="flex items-center justify-between gap-2 font-semibold">{c.name}<span className="soon">Soon</span></span>
                    <span className="text-[0.88rem] text-fg-2">{c.checks}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 flex items-center gap-2 text-fg-2">
          <Icon name="key" className="text-accent" /> Connector secrets are stored encrypted, and checks only read. Nothing is changed in the client&apos;s systems.
        </p>
      </section>
    </>
  );
}
