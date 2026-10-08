// One page per audience (/solutions/<slug>). The step-by-step part comes from the
// audience animation on the homepage (audienceFlows in lib/content.ts), so both stay in step.

export type Solution = {
  slug: string;
  flowId: string; // matches audienceFlows[].id
  name: string;
  metaTitle: string;
  description: string;
  h1: string;
  intro: string;
  points: { title: string; body: string }[];
};

export const solutions: Solution[] = [
  {
    slug: "grc-consultants",
    flowId: "partners",
    name: "For GRC consultants",
    metaTitle: "DPDP Assessment Software for GRC and Privacy Consultants",
    description:
      "Run DPDP readiness assessments for many clients at once: a workspace per client, AI-drafted findings you approve, and reviewed reports in Word.",
    h1: "Run DPDP assessments for every client from one place",
    intro:
      "For privacy and GRC consultants who assess many businesses. Each client gets its own workspace, the AI does the first draft, and nothing reaches a client until you've signed it off.",
    points: [
      { title: "A workspace per client", body: "Plan, registers, evidence and tasks kept apart for each client. Clients and their auditors can get read-only access." },
      { title: "You sign off every AI draft", body: "Findings cite the exact Section or Rule. A draft marked wrong has to be rewritten by a person before delivery." },
      { title: "Delivery that can't skip a step", body: "The delivery checklist has no override: intake, assessment, citations and every document review must pass first." },
      { title: "Work that continues after delivery", body: "Breaches, requests and consent stay open in the client's workspace, so the engagement can turn into ongoing support." },
    ],
  },
  {
    slug: "businesses",
    flowId: "business",
    name: "For businesses",
    metaTitle: "DPDP Compliance Software for In-house Teams",
    description:
      "Get your own company ready for the DPDP Act: map personal data, close gaps with owners and evidence, and run consent, requests and breaches every day.",
    h1: "Get your own company ready for the DPDP Act",
    intro:
      "For in-house compliance, legal and IT teams. Choose 'our own company' when you create the workspace, and GRC Flow speaks to you directly rather than to a consultant.",
    points: [
      { title: "Know what you hold", body: "Scan exports for personal data and build the inventory and data-flow map, with flows leaving India flagged." },
      { title: "A plan from your own answers", body: "Every obligation's status and the next step to take, worked out from live data rather than ticked by hand." },
      { title: "Evidence that proves it", body: "Upload the policy or contract behind each control. GRC Flow flags answers your own records contradict." },
      { title: "Sign off, then keep going", body: "Signing off locks the assessment, while requests, breaches and consent stay open for day-to-day work." },
    ],
  },
];
