import type { Metadata } from "next";
import { PageHead } from "@/components/page-head";
import { RelatedPages } from "@/components/related-pages";
import { SecuritySection } from "@/components/sections";

export const metadata: Metadata = {
  alternates: { canonical: "/security" },
  title: "Security: Hosted in India, VAPT Tested",
  description:
    "GRC Flow is hosted in India (Mumbai region), VAPT tested, with Argon2id passwords, encrypted keys, CSRF protection and a tamper-evident audit log.",
};

export default function SecurityPage() {
  return (
    <>
      <PageHead eyebrow="Security" title="Security and hosting in India">
        <p>Hosted in India, VAPT tested, and built to the same rules it checks your clients against.</p>
      </PageHead>
      <SecuritySection />
      <RelatedPages current="/security" />
    </>
  );
}
