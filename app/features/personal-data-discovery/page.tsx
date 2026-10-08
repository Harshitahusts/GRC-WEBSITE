import type { Metadata } from "next";
import { DiscoveryScan } from "@/components/discovery-scan";
import { PageHead } from "@/components/page-head";
import { RelatedPages } from "@/components/related-pages";
import { DiscoverySection } from "@/components/sections";

export const metadata: Metadata = {
  alternates: { canonical: "/features/personal-data-discovery" },
  title: "Personal Data Discovery: Find Aadhaar, PAN and Children's Data",
  description:
    "Scan a CSV or JSON export for personal data: Aadhaar (checksum), PAN, GSTIN, phone, email, UPI, dates of birth under 18 and health details. Files are read in memory, never stored.",
};

export default function PersonalDataDiscoveryPage() {
  return (
    <>
      <PageHead eyebrow="Personal data discovery" title="Scan any export for Aadhaar, PAN and children&apos;s data">
        <p>Upload a customer, employee or patient file. GRC Flow flags each field that holds personal data, and a person confirms it before it joins the data inventory.</p>
      </PageHead>
      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-8">
        <h2 className="text-2xl font-bold">Watch a scan</h2>
        <p className="mt-2 max-w-2xl text-fg-2">A sample export, read one column at a time. Each finding goes to the data inventory for a person to confirm.</p>
        <div className="mt-6">
          <DiscoveryScan />
        </div>
      </section>
      <DiscoverySection />
      <RelatedPages current="/features/personal-data-discovery" />
    </>
  );
}
