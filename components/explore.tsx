import Link from "next/link";
import { Icon } from "@/components/icon";
import { featurePages, stageIntro, type Stage } from "@/lib/features";

const stages: Stage[] = ["Assess", "Fix", "Document", "Prove"];

// The detail behind the homepage animations, filed under the same four stages the platform
// diagram cycles through, so a reader can go straight to the part they care about.
export function Explore({ title = "Each stage, in detail" }: { title?: string }) {
  return (
    <div>
      <h2 className="max-w-2xl text-3xl font-bold sm:text-[2.1rem]">{title}</h2>
      <p className="mt-3 max-w-2xl text-lg text-fg-2">
        GRC Flow follows one cycle for every client: assess, fix, document, prove. Pick a stage to see how it works.
      </p>
      <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {stages.map((stage) => (
          <section key={stage} aria-labelledby={`stage-${stage}`} className="border-t-2 border-accent pt-4">
            <h3 id={`stage-${stage}`} className="text-xl font-bold">{stage}</h3>
            <p className="mt-1 text-[0.95rem] text-fg-2">{stageIntro[stage]}</p>
            <ul className="mt-4 space-y-1">
              {featurePages
                .filter((p) => p.stage === stage)
                .map((p) => (
                  <li key={p.href}>
                    <Link href={p.href} className="group -mx-2 flex items-start gap-2.5 rounded-[8px] px-2 py-2 hover:bg-hover">
                      <Icon name={p.icon} className="mt-0.5 size-5 shrink-0 text-accent" />
                      <span>
                        <strong className="font-semibold group-hover:text-accent">{p.title}</strong>
                        <span className="block text-[0.9rem] text-fg-2">{p.blurb}</span>
                      </span>
                    </Link>
                  </li>
                ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
