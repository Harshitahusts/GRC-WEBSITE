import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { IntegrationDirectory } from "@/components/integration-directory";
import { integrations } from "@/lib/content";

export const metadata: Metadata = {
  title: "Integrations",
  description: "Connect AWS, GitHub, Google Workspace, Okta, Keka, Darwinbox, Jira, Slack and more. GRC-Flow uses read-only access to check your controls.",
};

export default function IntegrationsPage() {
  return (
    <>
      <PageIntro title="Integrations">
        <p>
          {integrations.length} tools and counting. Each one connects with read-only access and runs its checks every hour. Missing one you use? Tell us in your demo and we&apos;ll tell you when it&apos;s coming.
        </p>
      </PageIntro>
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <IntegrationDirectory />
      </section>
    </>
  );
}
