import type { Metadata } from "next";
import { PageHead } from "@/components/page-head";
import { RelatedPages } from "@/components/related-pages";
import { AiRulesSection, AnalystSection } from "@/components/sections";

export const metadata: Metadata = {
  alternates: { canonical: "/features/ai-analyst" },
  title: "AI GRC Analyst for DPDP Compliance",
  description:
    "An AI GRC analyst that reads your DPDPA engagements, findings, risks and evidence and answers with the provision of the Act or Rules behind it. A person always makes the call.",
};

export default function AiAnalystPage() {
  return (
    <>
      <PageHead eyebrow="AI GRC Analyst" title="An AI analyst that cites the DPDP Act, and never has the last word">
        <p>Ask about any client in plain English. The answer comes from the workspace&apos;s own data, with the Section or Rule it relies on, and it can&apos;t change anything.</p>
      </PageHead>
      <AnalystSection />
      <AiRulesSection />
      <RelatedPages current="/features/ai-analyst" />
    </>
  );
}
