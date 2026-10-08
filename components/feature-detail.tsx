import { Icon, type IconName } from "@/components/icon";

// A feature page's body: a few headed blocks, each a short intro and the facts behind it.
export type Block = { icon: IconName; title: string; intro: string; facts: string[] };

export function FeatureDetail({ blocks }: { blocks: Block[] }) {
  return (
    <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-8">
      <div className="grid gap-12 lg:grid-cols-2">
        {blocks.map((b) => (
          <div key={b.title}>
            <h2 className="flex items-center gap-2.5 text-2xl font-bold">
              <span className="grid size-9 place-items-center rounded-[9px] bg-accent-soft text-accent"><Icon name={b.icon} className="size-5" /></span>
              {b.title}
            </h2>
            <p className="mt-3 text-lg text-fg-2">{b.intro}</p>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {b.facts.map((f) => (
                <li key={f} className="flex gap-2.5 py-2.5 text-[0.95rem]"><Icon name="check" className="mt-0.5 size-4 shrink-0 text-good" />{f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
