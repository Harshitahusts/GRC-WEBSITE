import type { Metadata } from "next";
import { FeatureDetail } from "@/components/feature-detail";
import { PageHead } from "@/components/page-head";
import { RelatedPages } from "@/components/related-pages";

export const metadata: Metadata = {
  alternates: { canonical: "/features/ai-app-integration" },
  title: "Connect Claude, Cursor and Other AI Apps to GRC Flow (MCP)",
  description:
    "Use GRC Flow's DPDP data from Claude Desktop, Claude Code, Cursor and other AI apps through its MCP server, with per-person keys, read-only tools and a log of every call.",
};

export default function AiAppsPage() {
  return (
    <>
      <PageHead eyebrow="AI apps" title="Ask about your DPDP work from the AI app you already use">
        <p>GRC Flow runs an MCP server, so AI apps such as Claude Desktop, Claude Code and Cursor can read your workspace, with your permission.</p>
      </PageHead>
      <FeatureDetail
        blocks={[
          {
            icon: "plug",
            title: "What the AI app can do",
            intro: "Ten read-only tools: the same ones the GRC Analyst uses inside GRC Flow.",
            facts: [
              "Search the obligations and read a provision of the Act or Rules.",
              "List workspaces and read their findings, risks and readiness plan.",
              "Read the data-flow map and the evidence on file.",
              "Score a risk by likelihood and impact.",
              "Nothing in the workspace can be changed through it.",
            ],
          },
          {
            icon: "key",
            title: "Keys you control",
            intro: "Each person creates their own key, and only that person's access goes with it.",
            facts: [
              "A key is shown once, when it's created; only a hash of it is stored.",
              "Revoke a key at any time from the API keys page.",
              "A wrong or revoked key is refused.",
              "Every tool call is written to the audit log.",
            ],
          },
        ]}
      />
      <RelatedPages current="/features/ai-app-integration" />
    </>
  );
}
