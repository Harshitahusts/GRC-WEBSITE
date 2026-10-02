import { business } from "@/lib/site";
import { PageHead } from "./page-head";

export type Section = { id: string; title: string; body: React.ReactNode };

// Shared layout for the policies: dark header, a table of contents, then sections.
export function LegalPage({ eyebrow, title, intro, sections }: { eyebrow: string; title: string; intro: React.ReactNode; sections: Section[] }) {
  return (
    <>
      <PageHead eyebrow={eyebrow} title={title}>
        <p>{intro}</p>
        <p className="mt-2 text-[0.92rem] text-night-text/80">Last updated {business.policiesUpdated}</p>
      </PageHead>
      <div className="mx-auto grid max-w-[1240px] grid-cols-[minmax(0,1fr)] gap-10 px-4 py-12 sm:px-8 lg:grid-cols-[15rem_minmax(0,1fr)]">
        <nav aria-label="On this page" className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-sm font-semibold text-muted">On this page</p>
          <ol className="mt-2 space-y-1.5 text-[0.92rem]">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-fg-2 hover:text-accent hover:underline">{s.title}</a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="legal max-w-[46rem]">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-24 border-b border-line py-6 first:pt-0 last:border-0">
              <h2 className="text-xl font-bold">{s.title}</h2>
              <div className="mt-3 space-y-3 text-fg-2">{s.body}</div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
