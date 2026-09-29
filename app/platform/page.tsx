import type { Metadata } from "next";
import { ButtonLink } from "@/components/buttons";
import { PageIntro } from "@/components/page-intro";
import { platform } from "@/lib/content";

export const metadata: Metadata = {
  title: "Platform",
  description: "Gap assessment, personal data map, continuous checks, evidence, policies and processor register for the DPDP Act.",
};

export default function PlatformPage() {
  return (
    <>
      <PageIntro title="The groundwork for DPDP compliance, kept up to date on its own">
        <p>Included in every plan. Modules add the day-to-day processes the Act requires on top.</p>
      </PageIntro>
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <ul className="border-t-2 border-ink">
          {platform.map((c) => (
            <li key={c.title} className="grid gap-3 border-b border-rule py-8 md:grid-cols-[1fr_1.4fr_0.8fr] md:gap-10">
              <h2 className="text-2xl font-semibold tracking-[-0.01em]">{c.title}</h2>
              <p className="max-w-prose text-ink-soft">{c.body}</p>
              <p className="text-sm text-ink-soft md:text-right">
                <span className="sr-only">DPDP reference: </span>
                {c.refs.join(", ")}
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
