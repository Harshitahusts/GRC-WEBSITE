import type { IconName } from "@/components/icon";

// The pages that hold what used to sit on the homepage, grouped by the four stages of the
// platform cycle (Assess, Fix, Document, Prove). The homepage's "Explore" section, the
// footer and the sitemap all read this list, so a new page only needs adding here.

export type Stage = "Assess" | "Fix" | "Document" | "Prove";

export type FeaturePage = {
  href: string;
  title: string; // link text, written with the words people search for
  blurb: string; // one line under the link
  icon: IconName;
  stage: Stage;
};

export const stageIntro: Record<Stage, string> = {
  Assess: "Find out where a business stands, with every finding tied to the Act.",
  Fix: "Run the day-to-day work the Act expects: requests, consent, breaches, vendors.",
  Document: "Turn the work into the documents a business has to keep.",
  Prove: "Show a client, an auditor or the Board that it all holds up.",
};

export const featurePages: FeaturePage[] = [
  {
    href: "/features/ai-analyst",
    title: "AI GRC Analyst",
    blurb: "Ask about any client and get an answer with the provision behind it.",
    icon: "spark",
    stage: "Assess",
  },
  {
    href: "/features/personal-data-discovery",
    title: "Personal data discovery",
    blurb: "Scan an export for Aadhaar, PAN, phone numbers and children's data.",
    icon: "search",
    stage: "Assess",
  },
  {
    href: "/features/dpdp-registers",
    title: "DPDP compliance registers",
    blurb: "Consent, rights requests, breaches, vendors, DPIAs and policies.",
    icon: "briefcase",
    stage: "Fix",
  },
  {
    href: "/connectors",
    title: "Evidence connectors",
    blurb: "Read-only AWS and GitHub checks that back findings with proof.",
    icon: "plug",
    stage: "Fix",
  },
  {
    href: "/features/dpdp-documents",
    title: "RoPA, privacy notice and DPA drafts",
    blurb: "Drafted from the client's own records, signed off by a person.",
    icon: "pen",
    stage: "Document",
  },
  {
    href: "/dpdp-compliance",
    title: "What DPDP compliance takes",
    blurb: "The duties, the 13 May 2027 deadline and the penalties.",
    icon: "book",
    stage: "Prove",
  },
  {
    href: "/security",
    title: "Security and hosting in India",
    blurb: "Hosted in Mumbai, VAPT tested, built to the rules it checks.",
    icon: "lock",
    stage: "Prove",
  },
  {
    href: "/why-grc-flow",
    title: "Why GRC Flow",
    blurb: "Compared with spreadsheets and generic GRC tools, plus a four-week pilot.",
    icon: "chart",
    stage: "Prove",
  },
];
