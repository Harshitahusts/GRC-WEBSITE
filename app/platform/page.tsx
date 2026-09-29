import type { Metadata } from "next";
import { ButtonLink } from "@/components/buttons";
import { PageIntro } from "@/components/page-intro";
import { platform } from "@/lib/content";

export const metadata: Metadata = {
  title: "Platform",
  description: "Continuous monitoring, automatic evidence, cross-framework controls, policies, risk and an auditor portal in one place.",
};

export default function PlatformPage() {
  return (
    <>
      <PageIntro title="Everything your audit needs, kept up to date on its own">
        <p>These are included in every plan. Modules add more on top.</p>
      </PageIntro>
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <ul className="border-t-2 border-ink">
          {platform.map((c) => (
            <li key={c.title} className="grid gap-3 border-b border-rule py-8 md:grid-cols-[1fr_1.4fr_0.8fr] md:gap-10">
              <h2 className="text-2xl font-semibold tracking-[-0.01em]">{c.title}</h2>
              <p className="max-w-prose text-ink-soft">{c.body}</p>
              <p className="text-sm text-ink-soft md:text-right">
                <span className="sr-only">Relevant to: </span>
                {c.frameworks.join(", ")}
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-12 flex flex-wrap gap-4">
          <ButtonLink href="/demo">Book a demo</ButtonLink>
          <ButtonLink href="/modules" variant="plain">Browse modules</ButtonLink>
        </div>
      </section>
    </>
  );
}
