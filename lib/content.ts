// Marketing content. Every feature here exists in the GRC agent app
// (github.com/Harshitahusts/GRC-Ai); anything not built yet is marked as coming soon.
// Legal references: DPDP Act, 2023 ("Section") and DPDP Rules, 2025 ("Rule").

export const heroPoints = [
  { lead: "Guided intake", rest: "mapped to every obligation in the Act and Rules." },
  { lead: "Risk register and data-flow map", rest: "built from the client's own answers and evidence." },
  { lead: "A GRC Analyst", rest: "that reads your workspace and cites the provision it relies on." },
];

// A real sequence: every engagement moves through these in order.
export const workflow = [
  {
    title: "Intake",
    body: "Business-language questions for the client. Follow-ups appear only when they're relevant, like parental consent for an EdTech client.",
  },
  {
    title: "Findings",
    body: "A rule-based assessment gives one finding per obligation. Each finding's citation is checked against the text of the Act and Rules.",
  },
  {
    title: "Documents",
    body: "Gap report, RoPA, privacy notice, breach playbook and a draft DPA for the client's lawyer. A person reviews each one before it can be downloaded as .docx.",
  },
  {
    title: "Delivery",
    body: "Blocked until every check passes. There is no override, so nothing half-finished reaches a client.",
  },
];

export const areas = [
  {
    name: "Privacy operations",
    icon: "users" as const,
    items: [
      { title: "Personal data", body: "Discovery scans and a data inventory with purpose, legal basis, retention and owner." },
      { title: "Consent", body: "Consent records for each purpose, with withdrawals." },
      { title: "Requests", body: "Access, correction, erasure, grievance and nomination, on a response clock of up to 90 days (Rule 14(3))." },
      { title: "Breaches", body: "Each breach tracked against the Board's detailed report, due 72 hours after awareness (Rule 7(2)(b))." },
    ],
  },
  {
    name: "Compliance",
    icon: "check" as const,
    items: [
      { title: "Controls", body: "The client's status for every obligation. \"Not applicable\" needs a reason and an admin; \"implemented\" needs evidence." },
      { title: "Tasks", body: "Turn any gap, risk or control into assigned work with an owner and due date." },
      { title: "Evidence", body: "A library of files checked against their type, stored under random names, downloadable only when signed in." },
      { title: "Policies", body: "Version, approver and next review date for each policy." },
    ],
  },
  {
    name: "Risk",
    icon: "alert" as const,
    items: [
      { title: "Risk register", body: "Every gap and failed check becomes a risk, scored likelihood × impact on a 5×5 matrix, with treatment and owner." },
      { title: "Vendors and processors", body: "Contract, data location and review date for each one." },
      { title: "DPIA", body: "Data protection impact assessments for Significant Data Fiduciaries." },
      { title: "Data-flow map", body: "Where personal data is collected, stored and shared, and which flows leave India." },
    ],
  },
];

export const detectors = [
  "Aadhaar (Verhoeff checksum)",
  "PAN",
  "GSTIN (checksum)",
  "Passport",
  "Voter ID",
  "Driving licence",
  "Email",
  "Indian mobile",
  "UPI ID",
  "Card number (Luhn)",
  "IP address",
  "Date of birth",
  "Health",
  "Biometric",
  "Salary",
  "Address",
];

export const discoveryPromises = [
  "The file is parsed in memory and never written to disk.",
  "At most 200 records are sampled per field.",
  "Only a masked shape of each value is stored, like +99 99999 99999.",
  "Nothing from the scan is sent to the AI.",
  "Ages under 18 are flagged as children's data under Section 9.",
];

export const analystPrompts = [
  "What should I work on today?",
  "Summarise Arogya Health Clinics for management",
  "What evidence should I request?",
  "Draft the audit report",
];

export const documentsDrafted = [
  { name: "Gap report", note: "Every obligation, its status and what to fix" },
  { name: "Record of processing (RoPA)", note: "From the data inventory" },
  { name: "Privacy notice", note: "Built from the intake answers" },
  { name: "Breach playbook", note: "With the Board's reporting deadlines" },
  { name: "Data processing agreement", note: "Marked draft for the client's lawyer" },
];

export const audiences = [
  {
    who: "Privacy and GRC consultants",
    detail: "Run DPDPA readiness assessments for many clients at once. The dashboard shows every client's stage, readiness score and top risks.",
  },
  {
    who: "In-house compliance teams",
    detail: "Treat each business unit or entity as an engagement and keep one register of risks, evidence and requests across the group.",
  },
];

export const timeline = [
  { when: "11 August 2023", what: "The DPDP Act receives Presidential assent." },
  { when: "November 2025", what: "The DPDP Rules are notified and the Data Protection Board is set up." },
  { when: "November 2026", what: "Rules on registering Consent Managers take effect." },
  { when: "13 May 2027", what: "Notice, consent, security, breach reporting, erasure, children's data and Data Principal rights all apply." },
];

export const penalties = [
  { amount: "₹250 crore", for: "Failing to take reasonable security safeguards (Section 8(5))" },
  { amount: "₹200 crore", for: "Failing to report a breach to the Board and affected people (Section 8(6))" },
  { amount: "₹200 crore", for: "Breaking the additional rules for children's data (Section 9)" },
  { amount: "₹150 crore", for: "A Significant Data Fiduciary missing its extra duties (Section 10)" },
  { amount: "₹50 crore", for: "Breaching any other provision of the Act or Rules" },
];

export type Connector = { name: string; category: string; checks: string; live: boolean };

export const connectors: Connector[] = [
  { name: "GitHub", category: "Version control", checks: "Repository visibility, default branch protection and secret scanning.", live: true },
  { name: "Amazon Web Services", category: "Cloud", checks: "Where S3 data is stored, S3 public access, root MFA, password policy and CloudTrail.", live: true },
  { name: "GitLab", category: "Version control", checks: "Project visibility and default branch protection.", live: false },
  { name: "Bitbucket", category: "Version control", checks: "Repository visibility and branch restrictions.", live: false },
  { name: "Google Cloud", category: "Cloud", checks: "Where Cloud Storage data is stored, public access prevention and uniform access.", live: false },
  { name: "Microsoft Azure", category: "Cloud", checks: "Where resources are located, public blob access and TLS settings.", live: false },
  { name: "Slack", category: "Communication", checks: "Posts engagement updates to a channel.", live: false },
  { name: "Microsoft Teams", category: "Communication", checks: "Posts engagement updates to a channel.", live: false },
  { name: "Google Chat", category: "Communication", checks: "Posts engagement updates to a space.", live: false },
  { name: "Google Workspace", category: "Identity and access", checks: "Users, 2-step verification and admin roles.", live: false },
  { name: "Microsoft Entra ID", category: "Identity and access", checks: "Users, MFA and conditional access.", live: false },
  { name: "Okta", category: "Identity and access", checks: "Users, MFA factors and app assignments.", live: false },
  { name: "Keka", category: "HR systems", checks: "Joiners and leavers.", live: false },
  { name: "Darwinbox", category: "HR systems", checks: "Joiners and leavers.", live: false },
  { name: "Zoho People", category: "HR systems", checks: "Joiners and leavers.", live: false },
  { name: "Jira", category: "Ticketing", checks: "Security and data-request tickets.", live: false },
  { name: "Zoho Desk", category: "Ticketing", checks: "Customer support tickets.", live: false },
  { name: "Microsoft Intune", category: "Devices", checks: "Disk encryption and screen lock on laptops.", live: false },
  { name: "Jamf", category: "Devices", checks: "Disk encryption and updates on Macs.", live: false },
  { name: "PostgreSQL / MySQL", category: "Data stores", checks: "Scan tables for personal data.", live: false },
  { name: "MongoDB", category: "Data stores", checks: "Scan collections for personal data.", live: false },
  { name: "Salesforce", category: "Business apps", checks: "Customer records and consent fields.", live: false },
  { name: "HubSpot", category: "Business apps", checks: "Contacts and marketing consent.", live: false },
  { name: "Zoho CRM", category: "Business apps", checks: "Customer records and consent fields.", live: false },
];

export type Plan = { name: string; for: string; scope: string; includes: string[] };

export const plans: Plan[] = [
  {
    name: "Solo",
    for: "Independent consultants",
    scope: "1 seat, up to 5 active engagements",
    includes: [
      "Intake, findings, documents and delivery",
      "Risk register and data-flow map",
      "Personal data discovery",
      "Privacy operations and compliance registers",
      "GitHub and AWS connectors",
    ],
  },
  {
    name: "Team",
    for: "Consultancies and compliance teams",
    scope: "Up to 10 seats, unlimited engagements",
    includes: [
      "Everything in Solo",
      "GRC Analyst",
      "Work queue across clients",
      "Team roles: admin, member, viewer",
      "Audit log of every change",
    ],
  },
  {
    name: "Firm",
    for: "Larger firms and groups",
    scope: "Unlimited seats",
    includes: [
      "Everything in Team",
      "Self-hosted with Docker, on your own servers",
      "New connectors as they launch",
      "Onboarding for your team",
    ],
  },
];

export const faqs = [
  {
    q: "Who is it for?",
    a: "Privacy and GRC consultants running DPDPA readiness assessments for clients, and in-house teams doing the same across their own business units.",
  },
  {
    q: "Does client data go to an AI model?",
    a: "The personal data scanner runs inside your workspace and sends nothing to the AI. The GRC Analyst and drafting use Anthropic's Claude, and send it the workspace records needed to answer. The Analyst can read your workspace but can't change anything.",
  },
  {
    q: "Is it legal advice?",
    a: "No. Findings cite the Act and Rules, and every document is reviewed by a person before it can be downloaded. The data processing agreement is marked as a draft for the client's lawyer.",
  },
  {
    q: "Which connectors work today?",
    a: "GitHub and Amazon Web Services. The others on the connectors page are designed and marked as coming soon.",
  },
  {
    q: "Can I run it on my own servers?",
    a: "Yes. It runs with Docker, and your data stays in your own workspace.",
  },
];

// An example of the GRC Analyst's answers, shown on the home page (labelled as an example).
export const analystExample = {
    q: "Summarise Arogya Health Clinics for management",
    a: [
      "Arogya is 58/100 ready. Of 8 obligations assessed, 2 are compliant, 4 are gaps and 2 are open items.",
      "The biggest exposure is security: the appointment database isn't encrypted at rest and logs are kept for 30 days instead of one year. A security failure carries the highest penalty in the Act, up to ₹250 crore.",
      "Patient data is backed up to the EU. That's allowed unless the government restricts the destination, but it should be recorded and reviewed.",
    ],
    cites: ["Section 8(5)", "Rule 6", "Section 16"],
  };

// ---------------------------------------------------------------- How GRC Flow works
// From the "GRC Flow: Introductory Meeting" brief. `log` is what the agent does at each
// step, shown as a live activity log in the animated journey on the home page. The
// clients, people and numbers in the log are made-up examples.

export type LogTone = "info" | "ai" | "pass" | "fail" | "person";
export type JourneyStep = {
  title: string;
  short: string;
  you: string;
  tool: string;
  get: string;
  gate?: boolean;
  log: { tone: LogTone; text: string }[];
};

export const journey: JourneyStep[] = [
  {
    title: "Set up your team",
    short: "Admin, member and viewer roles",
    you: "Sign in at app.grc-flow.com and add colleagues as admin, member or viewer.",
    tool: "Gives each person only the access their role needs, and logs every action.",
    get: "A secure shared workspace instead of files on personal laptops.",
    log: [
      { tone: "person", text: "Priya added as member" },
      { tone: "info", text: "Viewer access for the client's auditor: read-only" },
      { tone: "pass", text: "Action sealed in the audit log (#1042)" },
    ],
  },
  {
    title: "Add the client",
    short: "One space per company",
    you: "Add the company name and sector.",
    tool: "Opens a dedicated space with its own readiness plan, registers, evidence and tasks.",
    get: "One place per client. Nothing mixes between clients.",
    log: [
      { tone: "info", text: "Engagement created: Arogya Health Clinics, healthcare" },
      { tone: "info", text: "Readiness plan opened with 10 steps" },
      { tone: "pass", text: "Registers, evidence library and tasks ready" },
    ],
  },
  {
    title: "Guided intake",
    short: "Answers mapped to each obligation",
    you: "Answer plain-language questions about how the business collects and uses personal data.",
    tool: "Maps every answer to the matching obligation in the Act and Rules, and flags answers that contradict each other.",
    get: "Full coverage of the law without reading it end to end.",
    log: [
      { tone: "person", text: "Q14 \"Do you collect data from under-18s?\": Yes" },
      { tone: "ai", text: "Follow-up added: verifiable parental consent" },
      { tone: "pass", text: "Answer mapped to Section 9(1) and Rule 10" },
      { tone: "fail", text: "Conflict: Q6 says no marketing, Q21 lists marketing emails" },
    ],
  },
  {
    title: "Map the data",
    short: "Inventory, flows, AWS and GitHub",
    you: "List data categories and vendors, upload sample CSV or JSON files, and connect AWS or GitHub with a read-only key.",
    tool: "Finds personal data, builds the data inventory and data-flow map, including flows leaving India, and runs security checks.",
    get: "A real picture of where personal data lives, backed by technical evidence.",
    log: [
      { tone: "ai", text: "patients.csv scanned: 12 columns" },
      { tone: "person", text: "Aadhaar number found (checksum valid): waiting for a person to confirm" },
      { tone: "fail", text: "Backups go to AWS us-east-1: data leaves India" },
      { tone: "pass", text: "AWS: S3 public access blocked" },
    ],
  },
  {
    title: "AI assessment",
    short: "Cited findings and scored risks",
    you: "Click to run the assessment.",
    tool: "Drafts a finding for every gap, each citing the exact section, and turns every gap into a risk on the 5×5 matrix.",
    get: "In hours, a first draft that usually takes weeks.",
    log: [
      { tone: "ai", text: "Drafting finding: security safeguards" },
      { tone: "pass", text: "Citation Section 8(5) checked against the text of the Act" },
      { tone: "fail", text: "Risk R-12 scored 4 × 5 = 20: critical" },
      { tone: "ai", text: "18 findings drafted, each labelled \"Human review required\"" },
    ],
  },
  {
    title: "Human review",
    short: "Approve or rewrite, ask the Analyst",
    gate: true,
    you: "Approve, edit or reject each AI finding. Ask the GRC Analyst \"What's still open for this client?\"",
    tool: "Records who reviewed what and when. Nothing AI-drafted counts until a person signs it off.",
    get: "Findings you can stand behind in front of a client or auditor.",
    log: [
      { tone: "person", text: "F-07 approved by Priya at 11:42" },
      { tone: "fail", text: "F-09 marked wrong: a person must rewrite it" },
      { tone: "ai", text: "Analyst: 3 obligations still open, Sections 6, 8(6) and 9" },
      { tone: "info", text: "Delivery locked: 4 findings still need review" },
    ],
  },
  {
    title: "Fix and add evidence",
    short: "Tasks, owners, checked evidence",
    you: "Assign tasks with owners and due dates, then upload policies, contracts and screenshots as evidence.",
    tool: "Checks each document covers its obligation, updates control status and readiness, and lists due work in the work queue.",
    get: "A live readiness score that moves as real work is done.",
    log: [
      { tone: "person", text: "Task \"Publish privacy notice\" assigned to Arjun, due 20 Oct" },
      { tone: "pass", text: "breach-policy.pdf is about Rule 7: counts as evidence" },
      { tone: "fail", text: "A CV filed as the breach policy: flagged, stops counting" },
      { tone: "pass", text: "Readiness 62 → 71" },
    ],
  },
  {
    title: "Deliver and keep running",
    short: "Reports out, then daily privacy work",
    you: "Generate the gap report, RoPA, privacy notice, breach playbook and DPA draft.",
    tool: "Blocks delivery until every check passes, then runs consent, rights requests, breaches, vendor and policy reviews.",
    get: "A finished assessment, and the system to stay compliant after 13 May 2027.",
    log: [
      { tone: "pass", text: "All checks passed: delivery unlocked" },
      { tone: "info", text: "Gap report, RoPA, privacy notice, playbook and DPA draft ready as .docx" },
      { tone: "info", text: "Access request REQ-004: 90-day clock started" },
      { tone: "fail", text: "Breach BRE-002: Board report due in 72 hours" },
    ],
  },
];

// "AI you can defend in front of an auditor": built into the product, not left to habit.
export const aiRules = [
  { title: "Every finding cites the law", body: "Each gap points to the exact section of the DPDP Act or Rule it relies on, taken from the official text stored in the tool." },
  { title: "A person reviews before delivery", body: "AI-drafted findings are labelled as such. A reviewer approves or rewrites each one, and the tool records who did it and when." },
  { title: "Evidence is checked, not just stored", body: "The AI reads each uploaded file and says whether it addresses its obligation. A CV filed as a breach policy is flagged and stops counting." },
  { title: "Honest labels", body: "The AI never decides compliance. A file it can't read, such as a scan, is labelled \"Couldn't read the text\" instead of being guessed at." },
  { title: "Delivery stays locked until every check passes", body: "There is no override, so nothing unreviewed reaches a client." },
];

// What "self-compliance" means under the DPDPA, and what GRC Flow gives you at each step.
export const selfCompliance = [
  { step: "Assess", you: "Check yourself against every obligation in the Act and Rules.", tool: "Guided intake mapped to every obligation; AI-drafted gaps citing the exact section." },
  { step: "Fix", you: "Close the gaps: notices, consent, security, contracts, deletion, rights.", tool: "Risk register, readiness plan and tasks with owners and due dates." },
  { step: "Document", you: "Policies, a record of processing and evidence for each control.", tool: "Privacy notice, RoPA, breach playbook and DPA drafts; an evidence library checked by AI." },
  { step: "Prove", you: "Show it when a person complains or the Board investigates.", tool: "Controls that need evidence, human-reviewed findings and a tamper-evident audit log." },
  { step: "Keep it running", you: "Handle requests, consent changes and breaches on time.", tool: "Consent records, rights requests on a 90-day clock, breaches on a 72-hour clock, policy reviews." },
];

export const comparison = {
  columns: ["Spreadsheets and email", "Generic GRC tools", "GRC Flow"],
  rows: [
    { what: "Built for the DPDPA", values: ["A template you maintain", "Usually ISO or GDPR first", "DPDP Act and Rules only, section by section"] },
    { what: "First draft of the gap analysis", values: ["Weeks of manual work", "Manual questionnaires", "Hours, AI-drafted with citations"] },
    { what: "Proof for each finding", values: ["Scattered files", "Attachments", "Evidence checked by AI, reviewed by a person"] },
    { what: "Technical checks", values: ["Screenshots on request", "Often extra modules", "AWS and GitHub checked read-only"] },
    { what: "Risk and data-flow view", values: ["Built by hand", "Varies", "Generated from the client's own answers"] },
    { what: "Who changed what", values: ["No reliable record", "Activity log", "Tamper-evident audit log"] },
    { what: "After the assessment", values: ["The spreadsheet goes stale", "Separate tools", "Consent, requests and breaches in the same place"] },
    { what: "Where data lives", values: ["Wherever files are shared", "Often outside India", "Hosted in India"] },
  ],
};

export const security = [
  { area: "Hosting", how: "Cloud server in Mumbai, India. The Firm plan can also run on your own servers." },
  { area: "Connection", how: "HTTPS everywhere, with certificates renewed automatically." },
  { area: "Sign-in", how: "Hashed passwords, lockout after repeated failed attempts, secure session cookies." },
  { area: "Access", how: "Admin, member and viewer roles. Evidence downloads only when signed in." },
  { area: "Secrets", how: "Connector keys and AI provider keys are stored encrypted." },
  { area: "Connectors", how: "Read-only by design: they collect evidence and never change your systems." },
  { area: "Uploads", how: "File type checked against its content, 10 MB limit, stored under random names." },
  { area: "Audit trail", how: "Every change logged in a tamper-evident chain that can be verified and exported." },
];

export const pilot = [
  { when: "Today", what: "We create your workspace and send login details." },
  { when: "Week 1", what: "A guided onboarding session. We set up your first client together." },
  { when: "Weeks 2 to 4", what: "A pilot on one real engagement, with a check-in call each week." },
  { when: "End of pilot", what: "Review the results and choose a plan." },
];
