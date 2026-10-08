import type { Metadata } from "next";
import { PageHead } from "@/components/page-head";
import { RelatedPages } from "@/components/related-pages";
import { ComparisonSection, PilotSection } from "@/components/sections";

export const metadata: Metadata = {
  alternates: { canonical: "/why-grc-flow" },
  title: "Why GRC Flow: DPDP Assessments Without the Spreadsheets",
  description:
    "How GRC Flow compares with spreadsheets and generic GRC tools for DPDP assessments, and a four-week pilot on one of your own clients.",
};

export default function WhyGrcFlowPage() {
  return (
    <>
      <PageHead eyebrow="Why GRC Flow" title="Why GRC Flow, not spreadsheets or a generic GRC tool">
        <p>How GRC Flow compares with spreadsheets and generic GRC tools, and how to try it on a real engagement.</p>
      </PageHead>
      <ComparisonSection />
      <PilotSection />
      <RelatedPages current="/why-grc-flow" />
    </>
  );
}
