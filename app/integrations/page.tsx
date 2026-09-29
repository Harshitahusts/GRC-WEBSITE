import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { IntegrationDirectory } from "@/components/integration-directory";
import { integrations } from "@/lib/content";

export const metadata: Metadata = {
  title: "Integrations",
  description: "Connect AWS, databases, HubSpot, Zoho, WhatsApp Business, Freshdesk, Keka and more. GRC-Flow finds personal data and checks consent, retention and access."
};

export default function IntegrationsPage() {
  return (
    <>
      <PageIntro title="Integrations">
        <p>
          {integrations.length} tools and counting. Each one connects with read-only access, except where you allow GRC-Flow to run erasure and consent withdrawal, and runs its checks every hour. Missing one you use? Tell us in your demo and we&apos;ll tell you when it&apos;s coming.
        </p>
      </PageIntro>
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <IntegrationDirectory />
      </section>
    </>
  );
}
