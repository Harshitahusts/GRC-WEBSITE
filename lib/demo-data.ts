// Sample workspace for the live demo. Clients follow the app's demo tenant
// (src/grc_agent/web/demo_tenant.py). None of these are real companies.

export type Stage = "Intake" | "Intake submitted" | "Assessed" | "In review" | "Ready to deliver" | "Delivered";
export const stages: Stage[] = ["Intake", "Intake submitted", "Assessed", "In review", "Ready to deliver", "Delivered"];

export type Engagement = {
  id: string;
  client: string;
  sector: string;
  stage: Stage;
  score: number | null;
  gaps: number | null;
  open: number | null;
  tools: string;
};

export const engagements: Engagement[] = [
  { id: "ENG-001", client: "Pinecrest Learning Pvt Ltd", sector: "EdTech", stage: "Delivered", score: 92, gaps: 0, open: 0, tools: "Zoho Desk, Razorpay, Tally" },
  { id: "ENG-002", client: "Kaveri Finserv Ltd", sector: "BFSI", stage: "Ready to deliver", score: 84, gaps: 1, open: 1, tools: "AWS, Salesforce, Mailchimp, CIBIL" },
  { id: "ENG-003", client: "Arogya Health Clinics", sector: "Healthcare", stage: "In review", score: 58, gaps: 4, open: 2, tools: "Practo, AWS, Google Workspace, WhatsApp Business" },
  { id: "ENG-004", client: "Bazaarkart Retail Pvt Ltd", sector: "Retail", stage: "Assessed", score: 46, gaps: 5, open: 1, tools: "Shopify, Mailchimp, Razorpay, Freshdesk" },
  { id: "ENG-005", client: "Nimbus HR Cloud", sector: "SaaS", stage: "Intake submitted", score: null, gaps: null, open: null, tools: "AWS, Keka, Slack" },
  { id: "ENG-006", client: "Sahyadri Logistics", sector: "Other", stage: "Intake", score: null, gaps: null, open: null, tools: "Zoho CRM, Tally" },
];

export type Level = "critical" | "serious" | "warning" | "good";

export const attention: { level: Level; client: string; text: string; go: View }[] = [
  { level: "critical", client: "Arogya Health Clinics", text: "Breach “Lab reports emailed to the wrong patient group”: Board report due in 19 hours", go: "engagement" },
  { level: "serious", client: "Bazaarkart Retail Pvt Ltd", text: "3 gaps have no owner: consent, withdrawal and processor contracts", go: "risks" },
  { level: "warning", client: "Arogya Health Clinics", text: "6 personal data findings waiting for review", go: "engagement" },
  { level: "warning", client: "Nimbus HR Cloud", text: "Intake submitted. Run the assessment", go: "dashboard" },
  { level: "good", client: "Kaveri Finserv Ltd", text: "Ready to deliver: every check passes", go: "dashboard" },
];

export type RiskLevel = "critical" | "high" | "medium" | "low";

export type Risk = {
  title: string;
  client: string;
  likelihood: number;
  impact: number;
  owner: string | null;
  overdue: boolean;
  treatment: "Mitigate" | "Accept" | "Transfer" | "Avoid";
  ref: string;
};

export const risks: Risk[] = [
  { title: "Breach report to the Board may miss the 72-hour deadline", client: "Arogya Health Clinics", likelihood: 4, impact: 5, owner: "priya.sharma", overdue: true, treatment: "Mitigate", ref: "Rule 7(2)(b)" },
  { title: "Marketing emails sent without recorded consent", client: "Bazaarkart Retail Pvt Ltd", likelihood: 4, impact: 5, owner: null, overdue: false, treatment: "Mitigate", ref: "Section 6" },
  { title: "No contract with Delhivery covering personal data", client: "Bazaarkart Retail Pvt Ltd", likelihood: 4, impact: 4, owner: "arjun.mehta", overdue: false, treatment: "Mitigate", ref: "Section 8(2)" },
  { title: "Patient records backed up to eu-west-1 without review", client: "Arogya Health Clinics", likelihood: 3, impact: 5, owner: null, overdue: false, treatment: "Mitigate", ref: "Section 16" },
  { title: "Order history kept with no retention period", client: "Bazaarkart Retail Pvt Ltd", likelihood: 3, impact: 4, owner: "demo", overdue: true, treatment: "Mitigate", ref: "Section 8(7)" },
  { title: "Correction requests have no documented process", client: "Nimbus HR Cloud", likelihood: 3, impact: 3, owner: "priya.sharma", overdue: false, treatment: "Mitigate", ref: "Section 12" },
  { title: "Two GitHub admins without MFA", client: "Kaveri Finserv Ltd", likelihood: 2, impact: 3, owner: "arjun.mehta", overdue: false, treatment: "Mitigate", ref: "Section 8(5)" },
];

export function riskScore(r: Risk) {
  return r.likelihood * r.impact;
}

export function riskLevel(score: number): RiskLevel {
  if (score >= 20) return "critical";
  if (score >= 15) return "high";
  if (score >= 8) return "medium";
  return "low";
}

export const activity = [
  { who: "priya.sharma", what: "reviewed the finding on security safeguards", client: "Arogya Health Clinics", when: "4 min ago" },
  { who: "arjun.mehta", what: "re-synced the AWS connector: 4 of 5 checks pass", client: "Kaveri Finserv Ltd", when: "22 min ago" },
  { who: "priya.sharma", what: "uploaded evidence “Privacy notice v3.pdf”", client: "Kaveri Finserv Ltd", when: "1 hour ago" },
  { who: "arjun.mehta", what: "added Practo to the data-flow map", client: "Arogya Health Clinics", when: "3 hours ago" },
  { who: "demo", what: "delivered the assessment", client: "Pinecrest Learning Pvt Ltd", when: "Yesterday" },
];

export type FindingStatus = "Gap" | "Open item" | "Compliant";

// Findings for the engagement shown in the demo (Arogya Health Clinics).
export const findings: { obligation: string; status: FindingStatus; ref: string; note: string }[] = [
  { obligation: "Reasonable security safeguards", status: "Gap", ref: "Section 8(5), Rule 6", note: "No encryption at rest for the appointment database; access logs are kept for 30 days, not one year." },
  { obligation: "Erasure when the purpose is served", status: "Gap", ref: "Section 8(7), Rule 8", note: "Patient records are kept with no retention period." },
  { obligation: "Breach intimation to the Board", status: "Open item", ref: "Section 8(6), Rule 7", note: "Client is not sure who reports a breach or when." },
  { obligation: "Notice before collecting data", status: "Gap", ref: "Section 5, Rule 3", note: "The clinic's form has no notice. The website notice is in English only." },
  { obligation: "Contracts with Data Processors", status: "Gap", ref: "Section 8(2)", note: "No data processing terms with the lab partner." },
  { obligation: "Consent for processing", status: "Compliant", ref: "Section 6", note: "Consent is taken at registration and stored with the patient record." },
  { obligation: "Grievance redressal", status: "Compliant", ref: "Section 8(10), Section 13", note: "Grievance email and response process published." },
  { obligation: "Cross-border transfer", status: "Open item", ref: "Section 16", note: "Backups go to eu-west-1. Confirm the destination isn't restricted." },
];

export const documents = [
  { name: "Gap report", status: "Reviewed" },
  { name: "Record of processing (RoPA)", status: "Reviewed" },
  { name: "Privacy notice", status: "Needs review" },
  { name: "Breach playbook", status: "Needs review" },
  { name: "Data processing agreement", status: "Draft for lawyer" },
];

export const deliveryChecks = [
  { check: "Intake submitted", ok: true },
  { check: "Every finding has a verified citation", ok: true },
  { check: "Every finding reviewed by a consultant", ok: false },
  { check: "Every document reviewed", ok: false },
  { check: "Intake answers match connector evidence", ok: true },
  { check: "Findings drafted by real AI, not demo mode", ok: true },
];

export type FlowNode = { name: string; detail: string; abroad?: boolean };
export const dataFlow: { stage: string; nodes: FlowNode[] }[] = [
  { stage: "Collect", nodes: [{ name: "Patient app", detail: "Name, phone, symptoms" }, { name: "Clinic front desk", detail: "Paper form, then typed in" }] },
  { stage: "Store", nodes: [{ name: "AWS ap-south-1", detail: "Appointments database" }, { name: "Practo", detail: "Clinic management" }] },
  { stage: "Share", nodes: [{ name: "Lab partner", detail: "Test orders and reports" }, { name: "WhatsApp Business", detail: "Reminders and reports" }] },
  { stage: "Backup", nodes: [{ name: "Cloud backup (eu-west-1)", detail: "Nightly database copy", abroad: true }] },
];

export const connectorChecks = [
  {
    name: "GitHub",
    client: "Kaveri Finserv Ltd",
    synced: "22 min ago",
    checks: [
      { check: "No public repositories", ok: true },
      { check: "Default branch protected", ok: true },
      { check: "Secret scanning on for every repository", ok: false },
    ],
  },
  {
    name: "Amazon Web Services",
    client: "Kaveri Finserv Ltd",
    synced: "22 min ago",
    checks: [
      { check: "S3 data stored in ap-south-1 (Mumbai)", ok: true },
      { check: "S3 public access blocked", ok: true },
      { check: "Root account has MFA", ok: true },
      { check: "CloudTrail logging on", ok: true },
      { check: "Password policy meets 14 characters", ok: false },
    ],
  },
];

export type AnalystAnswer = { q: string; a: string[]; cites: string[] };

// Pre-written answers for the demo. The real Analyst reads the live workspace.
export const analystAnswers: AnalystAnswer[] = [
  {
    q: "What should I work on today?",
    a: [
      "Start with Arogya Health Clinics. A breach was logged yesterday and the detailed report to the Board is due in 19 hours. Confirm the facts with Priya and draft the report from the breach playbook.",
      "Next, Bazaarkart has two critical risks with no owner: marketing without recorded consent, and no contract with Delhivery. Assign both before the client call on Thursday.",
      "Kaveri Finserv is ready to deliver. Every check passes, so delivery takes a few minutes.",
    ],
    cites: ["Rule 7(2)(b)", "Section 6", "Section 8(2)"],
  },
  {
    q: "Summarise Arogya Health Clinics for management",
    a: [
      "Arogya is 58/100 ready. Of 8 obligations assessed, 2 are compliant, 4 are gaps and 2 are open items.",
      "The biggest exposure is security: the appointment database isn't encrypted at rest and logs are kept for 30 days instead of one year. A security failure carries the highest penalty in the Act, up to ₹250 crore.",
      "Patient data is backed up to the EU. That's allowed unless the government restricts the destination, but it should be recorded and reviewed.",
    ],
    cites: ["Section 8(5)", "Rule 6", "Section 16"],
  },
  {
    q: "What evidence should I request?",
    a: [
      "For Arogya, ask for: the AWS RDS encryption setting (or connect AWS and it's collected for you), the log retention configuration, the signed agreement with the lab partner, and the consent text shown at patient registration.",
      "For Bazaarkart, ask for the Mailchimp audience export with consent timestamps, and the Delhivery contract.",
    ],
    cites: ["Section 8(5)", "Section 8(2)", "Section 6"],
  },
  {
    q: "Draft the audit report",
    a: [
      "Here's an outline for \u201cDPDPA readiness review, Arogya Health Clinics\u201d: scope and method, the 8 obligations tested, the 4 gaps with their citations and evidence, an extract of the risk register, and a remediation plan with owners and dates.",
      "I can only read the workspace, so copy this into the gap report. It then needs a consultant's review before it can be downloaded.",
    ],
    cites: ["Section 8", "Rule 6", "Rule 7"],
  },
];

export type View = "dashboard" | "engagement" | "risks" | "analyst" | "dataflows" | "connectors";
