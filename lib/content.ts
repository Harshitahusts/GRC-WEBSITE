// All marketing content lives here so pages stay layout-only.
// References are to the Digital Personal Data Protection Act, 2023 ("§")
// and the Digital Personal Data Protection Rules, 2025 ("Rule").
// Have counsel confirm section and rule references before launch.

export type Status = "pass" | "attention" | "fail";

export type Check = {
  title: string;
  source: string;
  status: Status;
  note?: string;
  refs: string[];
};

export const heroChecks: Check[] = [
  {
    title: "Consent recorded before marketing messages",
    source: "HubSpot",
    status: "fail",
    note: "412 contacts with no consent record",
    refs: ["§6", "§7"],
  },
  {
    title: "Privacy notice offered in English and Hindi",
    source: "Website",
    status: "pass",
    refs: ["§5", "Rule 3"],
  },
  {
    title: "Customer records encrypted in production",
    source: "AWS RDS",
    status: "pass",
    refs: ["§8(5)", "Rule 6"],
  },
  {
    title: "Access logs kept for one year",
    source: "AWS CloudWatch",
    status: "pass",
    refs: ["Rule 6"],
  },
  {
    title: "Erasure requests closed before their deadline",
    source: "Freshdesk",
    status: "attention",
    note: "3 requests due this week",
    refs: ["§12", "§13"],
  },
  {
    title: "Data of inactive users erased on schedule",
    source: "PostgreSQL",
    status: "attention",
    note: "18,240 accounts past retention",
    refs: ["§8(7)", "Rule 8"],
  },
  {
    title: "Parental consent verified for users under 18",
    source: "App sign-up",
    status: "pass",
    refs: ["§9", "Rule 10"],
  },
];

// A real sequence, so it is shown as a numbered timeline.
export const timeline = [
  { when: "August 2023", what: "The DPDP Act is passed by Parliament." },
  { when: "November 2025", what: "The DPDP Rules are notified and the Data Protection Board of India is set up." },
  { when: "November 2026", what: "Consent Managers can register with the Board." },
  { when: "May 2027", what: "Notice, consent, security, breach reporting and data principal rights all become enforceable." },
];

export const appliesTo = [
  { who: "Any business processing digital personal data in India", detail: "Customers, employees, job applicants, leads. Collected online, or collected offline and later digitised." },
  { who: "Businesses outside India serving people in India", detail: "If you offer goods or services to people in India, the Act follows their data." },
  { who: "Significant Data Fiduciaries", detail: "Businesses the government notifies based on data volume and risk. They must also appoint a Data Protection Officer in India, run DPIAs and get independent audits." },
];

export const penalties = [
  { amount: "₹250 crore", for: "Failing to take reasonable security safeguards to prevent a breach" },
  { amount: "₹200 crore", for: "Failing to notify the Board and affected people of a breach" },
  { amount: "₹200 crore", for: "Breaking the additional rules for children's data" },
  { amount: "₹150 crore", for: "A Significant Data Fiduciary missing its additional duties" },
  { amount: "₹50 crore", for: "Any other breach of the Act or Rules" },
];

export const steps = [
  {
    title: "Find your personal data",
    body: "Connect your databases, CRM, HR and support tools. GRC-Flow maps what personal data you hold, where, and why.",
  },
  {
    title: "Fix notices and consent",
    body: "Publish compliant notices in the languages your users read, and start recording consent against each one.",
  },
  {
    title: "Run rights and breach processes",
    body: "Requests, erasure, grievances and breach reports each get an owner, a deadline and a record.",
  },
  {
    title: "Show your compliance",
    body: "Every check and record is kept as evidence, ready if the Board, a customer or an auditor asks.",
  },
];

export const dpdpDuties = [
  { section: "§5", duty: "Give a clear notice before collecting data", how: "Notice builder with versions in English and all 22 scheduled languages." },
  { section: "§6", duty: "Take free, specific and informed consent", how: "Consent ledger that records who agreed to what, when, and through which notice." },
  { section: "§6(4)", duty: "Make withdrawing consent as easy as giving it", how: "One-click withdrawal that flows to every connected system." },
  { section: "§8(2)", duty: "Use processors only under a valid contract", how: "Processor register with contract status and data shared with each one." },
  { section: "§8(5)", duty: "Protect data with reasonable security safeguards", how: "Hourly checks on encryption, access control and logging across your systems." },
  { section: "§8(6)", duty: "Report personal data breaches", how: "Breach playbook that drafts notices to the Board and affected people." },
  { section: "§8(7)", duty: "Erase data once its purpose is served", how: "Retention schedules that find expired data and run erasure jobs." },
  { section: "§9", duty: "Get verifiable parental consent for children's data", how: "Age gating and guardian verification flows." },
  { section: "§11–14", duty: "Answer access, correction, erasure, nomination and grievance requests", how: "Rights request desk with deadlines, identity checks and an audit trail." },
];

export type Capability = { title: string; body: string; refs: string[] };

export const platform: Capability[] = [
  {
    title: "DPDP gap assessment",
    body: "Answer a guided questionnaire about how you collect and use personal data. You get a list of what the Act requires of you and what's missing, in order of risk.",
    refs: ["Whole Act"],
  },
  {
    title: "Personal data map",
    body: "Connected systems are scanned for personal data. Each data set is recorded with its purpose, legal basis, retention period and who can see it.",
    refs: ["§4", "§8(1)"],
  },
  {
    title: "Continuous checks",
    body: "Checks on encryption, access, logging, consent and retention run every hour. You hear about a gap the day it opens.",
    refs: ["§8(5)", "Rule 6"],
  },
  {
    title: "Evidence register",
    body: "Notices, consent records, request logs and check results are kept with timestamps and their source, so you can show what you did and when.",
    refs: ["§8(1)"],
  },
  {
    title: "Policy library",
    body: "Templates for your privacy notice, retention policy, breach response plan and processor terms. Edit them in the browser and track who has accepted each one.",
    refs: ["§5", "§8"],
  },
  {
    title: "Processor register",
    body: "List every vendor that handles personal data for you, what they receive, and whether a data processing contract is in place.",
    refs: ["§8(2)"],
  },
  {
    title: "Contact and grievance page",
    body: "A hosted page with your Data Protection Officer or contact person's details and a grievance form, as the Act requires you to publish.",
    refs: ["§8(9)", "§8(10)"],
  },
];

export type Module = {
  name: string;
  summary: string;
  features: string[];
  refs: string[];
  plan: "Essentials" | "Growth" | "Enterprise";
};

export const modules: Module[] = [
  {
    name: "Consent Manager",
    summary: "Collect, store and honour consent the way the Act describes it.",
    features: [
      "Consent ledger with the exact notice version each person saw",
      "Withdrawal that syncs to your CRM, email, WhatsApp and ad tools",
      "Cookie banner for your website and app",
      "Ready to connect with registered Consent Managers",
    ],
    refs: ["§6", "§7"],
    plan: "Essentials",
  },
  {
    name: "Notice Builder",
    summary: "Write notices people can understand, in the language they read.",
    features: [
      "Guided builder covering every item the Rules require in a notice",
      "Translations in English and all 22 scheduled languages",
      "Version history, so you know which notice each person saw",
    ],
    refs: ["§5", "Rule 3"],
    plan: "Essentials",
  },
  {
    name: "Rights Request Desk",
    summary: "Handle access, correction, erasure, nomination and grievance requests on time.",
    features: [
      "Public request form and inbox",
      "Identity verification before any data is released",
      "Deadline tracking with reminders to owners",
      "Erasure jobs pushed to connected systems",
    ],
    refs: ["§11", "§12", "§13", "§14"],
    plan: "Essentials",
  },
  {
    name: "Data Discovery",
    summary: "Find personal data across databases, storage buckets and SaaS apps.",
    features: [
      "Scans for names, phone numbers, Aadhaar, PAN, bank and health data",
      "Builds and updates your personal data map",
      "Flags personal data in places it shouldn't be",
    ],
    refs: ["§8(1)", "§8(5)"],
    plan: "Growth",
  },
  {
    name: "Retention and Erasure",
    summary: "Keep personal data only as long as you need it.",
    features: [
      "Retention periods per data set and purpose",
      "Advance notice to users before their data is erased",
      "Erasure jobs with proof of completion",
    ],
    refs: ["§8(7)", "Rule 8"],
    plan: "Growth",
  },
  {
    name: "Breach Response",
    summary: "Run a breach from first alert to Board report with nothing missed.",
    features: [
      "Playbook with the Board's reporting deadlines built in",
      "Drafted notices for the Board and affected people",
      "Covers CERT-In's six-hour cyber incident report too",
      "Timeline and evidence log for the review afterwards",
    ],
    refs: ["§8(6)", "Rule 7"],
    plan: "Growth",
  },
  {
    name: "Children's Data",
    summary: "Handle users under 18 the way the Act requires.",
    features: [
      "Age gating at sign-up",
      "Verifiable parental consent flows",
      "Checks that stop tracking and targeted ads for children",
    ],
    refs: ["§9", "Rule 10"],
    plan: "Growth",
  },
  {
    name: "Processor Management",
    summary: "Know which vendors process personal data for you and on what terms.",
    features: [
      "Vendor list discovered from SSO and expense data",
      "Data processing contracts tracked with renewal reminders",
      "Security questionnaires sent and scored in the app",
    ],
    refs: ["§8(2)"],
    plan: "Growth",
  },
  {
    name: "Privacy Training",
    summary: "Short DPDP training for everyone who handles personal data.",
    features: [
      "Courses in English and Hindi",
      "Role-specific lessons for support, sales and engineering",
      "Completion tracked per employee as evidence",
    ],
    refs: ["§8(4)"],
    plan: "Growth",
  },
  {
    name: "DPIA and Audit",
    summary: "For Significant Data Fiduciaries: impact assessments and audit readiness.",
    features: [
      "Data Protection Impact Assessment templates and workflow",
      "Evidence packs for your independent data auditor",
      "Annual review calendar for your Data Protection Officer",
    ],
    refs: ["§10", "Rule 13"],
    plan: "Enterprise",
  },
];

export type Integration = {
  name: string;
  category: string;
  checks: string;
  beta?: boolean;
};

export const integrationCategories = [
  "Cloud and databases",
  "CRM and marketing",
  "Messaging",
  "Support",
  "HR",
  "Identity",
  "Commerce and payments",
] as const;

export const integrations: Integration[] = [
  { name: "AWS", category: "Cloud and databases", checks: "Encryption, access logs, personal data in S3 and RDS" },
  { name: "Google Cloud", category: "Cloud and databases", checks: "Encryption, audit logs, personal data in storage" },
  { name: "Microsoft Azure", category: "Cloud and databases", checks: "Encryption, access logs, personal data in storage" },
  { name: "PostgreSQL", category: "Cloud and databases", checks: "Personal data discovery, retention, erasure jobs" },
  { name: "MySQL", category: "Cloud and databases", checks: "Personal data discovery, retention, erasure jobs" },
  { name: "MongoDB", category: "Cloud and databases", checks: "Personal data discovery, retention, erasure jobs" },
  { name: "HubSpot", category: "CRM and marketing", checks: "Consent records, withdrawal sync, contact retention" },
  { name: "Salesforce", category: "CRM and marketing", checks: "Consent fields, withdrawal sync, user access" },
  { name: "Zoho CRM", category: "CRM and marketing", checks: "Consent fields, withdrawal sync, contact retention" },
  { name: "LeadSquared", category: "CRM and marketing", checks: "Consent fields, lead retention", beta: true },
  { name: "MoEngage", category: "CRM and marketing", checks: "Consent before campaigns, opt-out sync" },
  { name: "CleverTap", category: "CRM and marketing", checks: "Consent before campaigns, opt-out sync" },
  { name: "WebEngage", category: "CRM and marketing", checks: "Consent before campaigns, opt-out sync", beta: true },
  { name: "Mailchimp", category: "CRM and marketing", checks: "Consent before campaigns, unsubscribe sync" },
  { name: "WhatsApp Business", category: "Messaging", checks: "Opt-in records before messages, opt-out sync" },
  { name: "Gupshup", category: "Messaging", checks: "Opt-in records, template messages sent", beta: true },
  { name: "Twilio", category: "Messaging", checks: "SMS opt-in and opt-out records" },
  { name: "Freshdesk", category: "Support", checks: "Rights requests, deadlines, agent access" },
  { name: "Zendesk", category: "Support", checks: "Rights requests, deadlines, agent access" },
  { name: "Zoho Desk", category: "Support", checks: "Rights requests, deadlines, agent access" },
  { name: "Keka", category: "HR", checks: "Employee data retention, leaver access" },
  { name: "Darwinbox", category: "HR", checks: "Employee data retention, leaver access" },
  { name: "Zoho People", category: "HR", checks: "Employee data retention, leaver access" },
  { name: "greytHR", category: "HR", checks: "Employee data retention", beta: true },
  { name: "Google Workspace", category: "Identity", checks: "MFA, admin roles, who can reach personal data" },
  { name: "Microsoft 365", category: "Identity", checks: "MFA, conditional access, user lifecycle" },
  { name: "Okta", category: "Identity", checks: "MFA policies, app access, deprovisioning" },
  { name: "Shopify", category: "Commerce and payments", checks: "Customer data retention, marketing consent" },
  { name: "Razorpay", category: "Commerce and payments", checks: "Customer data shared, dashboard access" },
];

export type Plan = {
  name: string;
  for: string;
  scope: string;
  includes: string[];
};

export const plans: Plan[] = [
  {
    name: "Essentials",
    for: "Getting compliant before May 2027",
    scope: "Up to 1 lakh data principals",
    includes: [
      "Gap assessment and personal data map",
      "Continuous checks and evidence register",
      "Policy library and processor register",
      "Consent Manager",
      "Notice Builder",
      "Rights Request Desk",
      "Every integration",
    ],
  },
  {
    name: "Growth",
    for: "Consumer apps and larger customer bases",
    scope: "Up to 50 lakh data principals",
    includes: [
      "Everything in Essentials",
      "Data Discovery",
      "Retention and Erasure",
      "Breach Response",
      "Children's Data",
      "Processor Management",
      "Privacy Training",
    ],
  },
  {
    name: "Enterprise",
    for: "Significant Data Fiduciaries and groups",
    scope: "No limit",
    includes: [
      "Everything in Growth",
      "DPIA and Audit",
      "Multiple entities and brands",
      "Data residency options",
      "Dedicated privacy manager",
    ],
  },
];

export const faqs = [
  {
    q: "Does the DPDP Act apply to my business?",
    a: "If you process digital personal data of people in India, including your own employees, almost certainly yes. There is no general exemption for small businesses, though the government can exempt notified startups from some duties.",
  },
  {
    q: "When do I need to comply?",
    a: "The DPDP Rules were notified in November 2025 with a phased start. Most duties, including notice, consent, security, breach reporting and data principal rights, apply from May 2027. Getting consent records and data maps right takes months, so most teams start now.",
  },
  {
    q: "Is GRC-Flow a registered Consent Manager?",
    a: "No. Consent Managers are a separate category registered with the Data Protection Board. GRC-Flow records and honours consent inside your business, and can connect to a registered Consent Manager when your users choose one.",
  },
  {
    q: "Is this legal advice?",
    a: "No. GRC-Flow puts the Act's requirements into practice across your systems. Work with your lawyer on how the Act applies to your specific situation.",
  },
  {
    q: "Where is my data stored?",
    a: "In India, on AWS Mumbai (ap-south-1).",
  },
];
