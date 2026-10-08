import type { Metadata } from "next";
import { PageHead } from "@/components/page-head";
import { RelatedPages } from "@/components/related-pages";
import { RegistersSection } from "@/components/sections";

export const metadata: Metadata = {
  alternates: { canonical: "/features/dpdp-registers" },
  title: "DPDP Compliance Registers: Consent, Requests, Breaches, Vendors",
  description:
    "The registers the DPDP Act expects: consent records, data principal requests with response clocks, breaches with the 72-hour Board report, vendors, DPIAs and policies.",
};

export default function DpdpRegistersPage() {
  return (
    <>
      <PageHead eyebrow="DPDP registers" title="The registers the DPDP Act expects you to keep">
        <p>Consent, data principal requests, breaches, vendors, DPIAs and policies, each with an owner, a due date and the evidence behind it.</p>
      </PageHead>
      <RegistersSection />
      <RelatedPages current="/features/dpdp-registers" />
    </>
  );
}
