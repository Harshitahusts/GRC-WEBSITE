import type { Metadata } from "next";
import { AgentJourney } from "@/components/agent-journey";
import { AudienceFlows } from "@/components/audience-flows";
import { PlatformHub } from "@/components/platform-hub";
import { ButtonLink } from "@/components/buttons";
import { DeadlineClock } from "@/components/deadline-countdown";
import { Icon } from "@/components/icon";
import { site } from "@/lib/site";
import { Explore } from "@/components/explore";
import { heroPoints } from "@/lib/content";

export const metadata: Metadata = {
  title: { absolute: "GRC-Flow | DPDP Compliance Software & GRC Tool for India" },
  description:
    "DPDP Act compliance software for Indian businesses and consultants: guided gap assessments, AI findings citing the Act, evidence and breach tracking. Hosted in India.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <section className="night">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-4 py-14 sm:px-8 md:py-20 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-lg font-semibold text-night-eyebrow">{site.tagline}</p>
            <p className="eyebrow mt-4">India&apos;s DPDP Act 2023 &amp; Rules 2025</p>
            <h1 className="mt-3 max-w-[30rem] text-[2.1rem] leading-[1.15] font-bold text-white sm:text-[2.6rem]">
              DPDP readiness assessments, drafted for you, verified by you.
            </h1>
            <div className="mt-6 max-w-[34rem]">
              <DeadlineClock />
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href={site.appUrl}>Open GRC Flow</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">Book a demo</ButtonLink>
            </div>
            <ul className="mt-8 max-w-[30rem] space-y-3">
              {heroPoints.map((p) => (
                <li key={p.lead} className="flex gap-2.5 text-night-text">
                  <Icon name="check" className="mt-0.5 size-5 text-night-check" />
                  <span><strong className="font-[650] text-white">{p.lead}</strong> {p.rest}</span>
                </li>
              ))}
            </ul>
          </div>
          <a href={site.appUrl} aria-label="Open GRC Flow" className="block rounded-xl transition-transform hover:-translate-y-0.5">
            {/* A real screenshot of the app's dashboard, with its sample clients. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/screens/dashboard.png"
              width={1440}
              height={900}
              alt="The GRC Flow dashboard: engagements in progress, average readiness, critical risks, personal data mapped and the work that needs attention"
              className="w-full rounded-xl border border-white/10 shadow-float"
              fetchPriority="high"
            />
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-4 py-16 sm:px-8 md:py-24">
        <PlatformHub />
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-[1240px] px-4 py-16 sm:px-8 md:py-24">
          <AudienceFlows />
        </div>
      </section>

      <section className="night border-t border-white/5 bg-none bg-[#0c1220]">
        <div className="mx-auto max-w-[1240px] px-4 py-16 sm:px-8 md:py-24">
          <AgentJourney />
        </div>
      </section>

      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-[1240px] px-4 py-16 sm:px-8 md:py-20">
          <Explore />
        </div>
      </section>

      <section className="night">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-8 px-4 py-14 sm:px-8 md:py-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-white">Try it on one real client</h2>
            <p className="mt-3 text-lg text-night-text">
              A four-week pilot on one of your own engagements, with a check-in call each week. The main DPDP duties apply from 13 May 2027.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/contact">Book a demo</ButtonLink>
            <ButtonLink href="/why-grc-flow" variant="secondary">How the pilot works</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
