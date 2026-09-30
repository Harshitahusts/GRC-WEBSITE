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
