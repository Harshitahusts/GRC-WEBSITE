import type { Metadata } from "next";
import { FeatureDetail } from "@/components/feature-detail";
import { PageHead } from "@/components/page-head";
import { RelatedPages } from "@/components/related-pages";

export const metadata: Metadata = {
  alternates: { canonical: "/features/risk-register-and-data-flows" },
  title: "DPDP Risk Register and Personal Data Flow Map",
  description:
    "A DPDP risk register scored by likelihood and impact, and a personal data flow map that shows where data goes and flags every flow that leaves India.",
};

export default function RiskAndFlowsPage() {
  return (
    <>
      <PageHead eyebrow="Risk and data flows" title="See the risks, and where the personal data goes">
        <p>Both are built from what the workspace already knows: the intake answers, the findings, the vendor register and the connector checks.</p>
      </PageHead>
      <FeatureDetail
        blocks={[
          {
            icon: "chart",
            title: "Risk register",
            intro: "Every gap becomes a risk with a score, an owner and a due date, so the riskiest work is done first.",
            facts: [
              "Scored by likelihood × impact, each from 1 to 5: 20 and above is critical.",
              "Starting scores come from the finding's status and the obligation's severity.",
              "Treatments: mitigate, accept (with a written reason), transfer or avoid.",
              "A heat map of open risks; your edits survive a re-assessment.",
              "Failed connector checks become risks too.",
            ],
          },
          {
            icon: "flow",
            title: "Data-flow map",
            intro: "From the people the data is about, through your systems and vendors, to where it ends up.",
            facts: [
              "Built from the intake and the vendor register, with AWS regions from the connector.",
              "Every flow that leaves India is flagged, for the Section 16 transfer check.",
              "Each gap is pinned to the step of the flow it affects.",
              "Systems the intake missed can be added by hand.",
              "Export the action plan as CSV.",
            ],
          },
        ]}
      />
      <RelatedPages current="/features/risk-register-and-data-flows" />
    </>
  );
}
