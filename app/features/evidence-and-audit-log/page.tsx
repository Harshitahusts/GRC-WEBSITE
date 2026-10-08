import type { Metadata } from "next";
import { FeatureDetail } from "@/components/feature-detail";
import { PageHead } from "@/components/page-head";
import { RelatedPages } from "@/components/related-pages";

export const metadata: Metadata = {
  alternates: { canonical: "/features/evidence-and-audit-log" },
  title: "DPDP Evidence Management and Tamper-evident Audit Log",
  description:
    "Keep the evidence behind every DPDP control, checked for relevance, versioned and fingerprinted, with a tamper-evident audit log an auditor can verify.",
};

export default function EvidencePage() {
  return (
    <>
      <PageHead eyebrow="Evidence and audit log" title="Evidence an auditor can trust">
        <p>Compliance is what you can prove. Each control keeps the files that prove it, and every change is on a record that can&apos;t be quietly edited.</p>
      </PageHead>
      <FeatureDetail
        blocks={[
          {
            icon: "download",
            title: "Evidence library",
            intro: "Upload the policy, contract, screenshot or export behind each obligation, and keep it current.",
            facts: [
              "PDF, Word, Excel, CSV, images and text, up to 10 MB each.",
              "A file whose contents don't match its extension is refused.",
              "Each file keeps a SHA-256 fingerprint, versions and a review date.",
              "With an AI provider set up, a file that isn't about its obligation is flagged.",
              "A CSV or JSON full of personal data gets a warning to use a masked sample.",
            ],
          },
          {
            icon: "clock",
            title: "Tamper-evident audit log",
            intro: "Every action is recorded: who did what, when, and in which workspace.",
            facts: [
              "Each entry is sealed with the hash of the one before it.",
              "An integrity check finds any entry changed, removed or reordered outside the app.",
              "Export the log with its hashes so an auditor can recompute the chain.",
              "Filter by workspace, person or action.",
            ],
          },
        ]}
      />
      <RelatedPages current="/features/evidence-and-audit-log" />
    </>
  );
}
