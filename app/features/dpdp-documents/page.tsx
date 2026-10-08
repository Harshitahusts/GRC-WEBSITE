import type { Metadata } from "next";
import { PageHead } from "@/components/page-head";
import { RelatedPages } from "@/components/related-pages";
import { DocumentsSection } from "@/components/sections";

export const metadata: Metadata = {
  alternates: { canonical: "/features/dpdp-documents" },
  title: "RoPA, Privacy Notice and DPA Drafts for the DPDP Act",
  description:
    "Draft a record of processing activities (RoPA), privacy notice, breach playbook and data processing agreement from the client's own data inventory and vendor register.",
};

export default function DpdpDocumentsPage() {
  return (
    <>
      <PageHead eyebrow="Documents" title="RoPA, privacy notice and DPA, drafted from the client's own records">
        <p>Each document is built from the data inventory, the vendor register and the findings. None can be downloaded until a person has reviewed it.</p>
      </PageHead>
      <DocumentsSection />
      <RelatedPages current="/features/dpdp-documents" />
    </>
  );
}
