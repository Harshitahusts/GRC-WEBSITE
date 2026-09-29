// All marketing content lives here so pages stay layout-only.
// Clause references use SOC 2 TSC (2017), ISO/IEC 27001:2022 Annex A,
// HIPAA 45 CFR 164, GDPR articles and DPDP Act 2023 sections.

export type Status = "pass" | "attention" | "fail";

export type Check = {
  title: string;
  source: string;
  status: Status;
  note?: string;
  clauses: string[];
};

export const heroChecks: Check[] = [
  {
    title: "MFA enforced for every Google Workspace user",
    source: "Google Workspace",
    status: "pass",
    clauses: ["SOC 2 CC6.1", "ISO A.8.5", "HIPAA 164.312(d)", "DPDP §8(5)"],
  },
  {
    title: "Production databases encrypted at rest",
    source: "AWS RDS",
    status: "pass",
    clauses: ["SOC 2 CC6.1", "ISO A.8.24", "GDPR Art. 32", "HIPAA 164.312(a)"],
  },
  {
    title: "Leavers lose access within 24 hours",
    source: "Keka → Okta",
    status: "attention",
    note: "2 accounts still active",
    clauses: ["SOC 2 CC6.2", "ISO A.5.18"],
  },
  {
    title: "Every pull request reviewed before merge",
    source: "GitHub",
    status: "pass",
    clauses: ["SOC 2 CC8.1", "ISO A.8.32"],
  },
  {
    title: "System logs kept for 180 days",
    source: "AWS CloudWatch",
    status: "pass",
    clauses: ["CERT-In 2022", "ISO A.8.15", "SOC 2 CC7.2"],
  },
  {
    title: "Consent recorded before marketing messages",
    source: "HubSpot",
    status: "fail",
    note: "412 contacts with no consent record",
    clauses: ["DPDP §6", "GDPR Art. 7"],
  },
];

export const frameworks = [
  { name: "SOC 2", who: "US enterprise buyers ask for a Type I or Type II report before they sign." },
  { name: "ISO 27001", who: "The certificate European and global buyers recognise." },
  { name: "DPDP Act 2023", who: "The law for any business handling personal data of people in India." },
  { name: "GDPR", who: "Applies once you process data of people in the EU." },
  { name: "HIPAA", who: "Needed when you handle US patient health information." },
  { name: "PCI DSS", who: "Required if you store, process or transmit card data." },
  { name: "CERT-In Directions", who: "Six-hour incident reporting and 180-day log retention for Indian entities." },
  { name: "ISO 42001", who: "The management standard for companies building or using AI systems." },
];

export const steps = [
  {
    title: "Connect your tools",
    body: "Sign in to AWS, GitHub, Google Workspace, your HR system and the rest with read-only access. Most teams are connected in an afternoon.",
  },
  {
    title: "See where you stand",
    body: "GRC-Flow runs every check against every framework you pick, and shows what passes, what needs work and who owns it.",
  },
  {
    title: "Fix what fails",
    body: "Each failing check comes with the exact setting to change. Assign it in Jira or Slack; the check turns green on its own once it's fixed.",
  },
  {
    title: "Hand it to your auditor",
    body: "Auditors log in to a read-only portal with evidence already filed against each control. No screenshot folders, no spreadsheets.",
  },
];

export const dpdpDuties = [
  { section: "§5", duty: "Give a clear notice before collecting data", how: "Notice builder with versions in English and all 22 scheduled languages." },
  { section: "§6", duty: "Take free, specific and informed consent", how: "Consent ledger that records who agreed to what, when, and through which notice." },
  { section: "§6(4)", duty: "Make withdrawing consent as easy as giving it", how: "One-click withdrawal that flows to every connected system." },
  { section: "§8(6)", duty: "Report personal data breaches", how: "Breach playbook that drafts notices to the Data Protection Board and affected people." },
  { section: "§9", duty: "Get verifiable parental consent for children's data", how: "Age gating and guardian verification flows." },
  { section: "§11–14", duty: "Answer access, correction, erasure and grievance requests", how: "Rights request desk with deadlines, identity checks and an audit trail." },
];

export type Capability = { title: string; body: string; frameworks: string[] };

export const platform: Capability[] = [
  {
    title: "Continuous control monitoring",
    body: "Hundreds of automated checks run every hour across cloud, code, identity and devices. You find out about a drift the day it happens, not in the audit.",
    frameworks: ["SOC 2", "ISO 27001", "HIPAA", "PCI DSS"],
  },
  {
    title: "Evidence collected for you",
    body: "Screenshots, configs, logs and tickets are pulled automatically and filed against the controls they prove. Each piece is timestamped and linked to its source.",
    frameworks: ["SOC 2", "ISO 27001"],
  },
  {
    title: "One control, many frameworks",
    body: "Controls are mapped across frameworks, so the MFA check you pass today also counts for ISO 27001, HIPAA and the DPDP Act. Add a framework and see the overlap immediately.",
    frameworks: ["All frameworks"],
  },
  {
    title: "Policy library",
    body: "Auditor-reviewed templates for 25+ policies. Edit them in the browser, send them for approval, and track which employees have read and accepted each one.",
    frameworks: ["SOC 2", "ISO 27001", "DPDP"],
  },
  {
    title: "Joiners and leavers",
    body: "New hires in your HR system get a checklist for training, policies and device setup. Leavers are checked off every connected app, with proof.",
    frameworks: ["SOC 2 CC6.2", "ISO A.5.18"],
  },
  {
    title: "Risk register",
    body: "Start from a library of common SaaS risks, score likelihood and impact, link each risk to the controls that treat it, and review on a schedule.",
    frameworks: ["ISO 27001 Cl. 6", "SOC 2 CC3"],
  },
  {
    title: "Auditor portal",
    body: "Your auditor gets a read-only workspace with the evidence, samples and policies they need. Questions and requests stay in one thread per control.",
    frameworks: ["SOC 2", "ISO 27001"],
  },
];

export type Module = {
  name: string;
  summary: string;
  features: string[];
  helps: string[];
  plan: "Growth" | "Scale" | "Add-on";
};

export const modules: Module[] = [
  {
    name: "DPDP Consent Manager",
    summary: "Collect, store and honour consent the way the DPDP Act describes it.",
    features: [
      "Notices in English and all 22 scheduled languages",
      "Consent ledger with the exact notice version each person saw",
      "Withdrawal that syncs to your CRM, email and ad tools",
      "Cookie banner for your website and app",
    ],
    helps: ["DPDP §5", "DPDP §6", "GDPR Art. 7"],
    plan: "Add-on",
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
    helps: ["DPDP §11–14", "GDPR Art. 15–17"],
    plan: "Add-on",
  },
  {
    name: "Data Discovery",
    summary: "Find personal data across databases, storage buckets and SaaS apps.",
    features: [
      "Scans for names, phone numbers, Aadhaar, PAN and health data",
      "Builds your record of processing activities",
      "Flags data kept past its retention period",
    ],
    helps: ["DPDP §8(7)", "GDPR Art. 30"],
    plan: "Add-on",
  },
  {
    name: "Breach Response",
    summary: "Run an incident from first alert to regulator notice with nothing missed.",
    features: [
      "Playbooks for CERT-In's six-hour window and DPDP breach intimation",
      "Drafted notices for the Data Protection Board and affected people",
      "Timeline and evidence log for the post-incident review",
    ],
    helps: ["DPDP §8(6)", "CERT-In 2022", "GDPR Art. 33"],
    plan: "Scale",
  },
  {
    name: "Vendor Risk",
    summary: "Know which vendors touch your data and how risky each one is.",
    features: [
      "Vendor inventory discovered from SSO and expense data",
      "Security questionnaires sent and scored in the app",
      "DPA and certificate expiry reminders",
    ],
    helps: ["SOC 2 CC9.2", "ISO A.5.19", "DPDP §8(2)"],
    plan: "Growth",
  },
  {
    name: "Trust Center",
    summary: "A public page that answers buyers' security questions before they ask.",
    features: [
      "Live control status pulled from GRC-Flow",
      "Reports and certificates behind an NDA click-through",
      "Custom domain and your branding",
    ],
    helps: ["Sales"],
    plan: "Growth",
  },
  {
    name: "Questionnaire Autofill",
    summary: "Answer security questionnaires in hours instead of weeks.",
    features: [
      "Upload a spreadsheet or portal export",
      "Answers drafted from your policies, controls and past answers",
      "Every answer cites its source for review",
    ],
    helps: ["Sales"],
    plan: "Scale",
  },
  {
    name: "Security Training",
    summary: "Short, tracked training that satisfies auditors and doesn't bore people.",
    features: [
      "Annual security awareness and DPDP privacy courses",
      "Phishing simulations",
      "Completion tracked per employee as evidence",
    ],
    helps: ["SOC 2 CC2.2", "ISO A.6.3", "HIPAA 164.308(a)(5)"],
    plan: "Growth",
  },
  {
    name: "Device Agent",
    summary: "A lightweight agent that proves every laptop is set up securely.",
    features: [
      "Checks disk encryption, screen lock, OS updates and antivirus",
      "Works on macOS, Windows and Linux",
      "Or connect Intune, Jamf or Kandji instead",
    ],
    helps: ["SOC 2 CC6.8", "ISO A.8.1"],
    plan: "Growth",
  },
  {
    name: "Access Reviews",
    summary: "Run quarterly user access reviews without chasing managers over email.",
    features: [
      "User lists pulled from your identity provider and apps",
      "Managers approve or revoke in one screen",
      "Revocations tracked through to completion",
    ],
    helps: ["SOC 2 CC6.3", "ISO A.5.18"],
    plan: "Scale",
  },
];

export type Integration = {
  name: string;
  category: string;
  checks: string;
  beta?: boolean;
};

export const integrationCategories = [
  "Cloud",
  "Code",
  "Identity",
  "HR",
  "Devices",
  "Security",
  "Work tracking",
  "Communication",
  "Customer data",
] as const;

export const integrations: Integration[] = [
  { name: "AWS", category: "Cloud", checks: "IAM, encryption, logging, backups, network exposure" },
  { name: "Google Cloud", category: "Cloud", checks: "IAM, storage access, audit logs, KMS" },
  { name: "Microsoft Azure", category: "Cloud", checks: "Entra roles, storage encryption, Defender alerts" },
  { name: "DigitalOcean", category: "Cloud", checks: "Droplet backups, firewall rules, team access" },
  { name: "Cloudflare", category: "Cloud", checks: "TLS settings, WAF rules, account members" },
  { name: "GitHub", category: "Code", checks: "Branch protection, reviews, secret scanning, member access" },
  { name: "GitLab", category: "Code", checks: "Merge request approvals, protected branches, members" },
  { name: "Bitbucket", category: "Code", checks: "Branch permissions, pull request reviews" },
  { name: "Google Workspace", category: "Identity", checks: "MFA, admin roles, user lifecycle" },
  { name: "Microsoft 365", category: "Identity", checks: "MFA, conditional access, user lifecycle" },
  { name: "Okta", category: "Identity", checks: "MFA policies, app assignments, deprovisioning" },
  { name: "JumpCloud", category: "Identity", checks: "MFA, device binding, user lifecycle" },
  { name: "Keka", category: "HR", checks: "Joiners, leavers, managers, departments" },
  { name: "Darwinbox", category: "HR", checks: "Joiners, leavers, managers, departments" },
  { name: "Zoho People", category: "HR", checks: "Joiners, leavers, managers" },
  { name: "greytHR", category: "HR", checks: "Joiners, leavers, departments", beta: true },
  { name: "BambooHR", category: "HR", checks: "Joiners, leavers, managers" },
  { name: "Microsoft Intune", category: "Devices", checks: "Encryption, OS version, compliance policies" },
  { name: "Jamf", category: "Devices", checks: "FileVault, OS updates, screen lock" },
  { name: "Kandji", category: "Devices", checks: "FileVault, OS updates, screen lock" },
  { name: "CrowdStrike", category: "Security", checks: "Endpoint coverage, open detections" },
  { name: "SentinelOne", category: "Security", checks: "Agent coverage, threat status" },
  { name: "Snyk", category: "Security", checks: "Open vulnerabilities by severity and age" },
  { name: "Wiz", category: "Security", checks: "Cloud misconfigurations and issues", beta: true },
  { name: "Jira", category: "Work tracking", checks: "Remediation tickets, change records" },
  { name: "Linear", category: "Work tracking", checks: "Remediation tickets, change records" },
  { name: "Zoho Projects", category: "Work tracking", checks: "Remediation tasks", beta: true },
  { name: "Slack", category: "Communication", checks: "Alerts, owner reminders, workspace members" },
  { name: "Microsoft Teams", category: "Communication", checks: "Alerts and owner reminders" },
  { name: "HubSpot", category: "Customer data", checks: "Consent records, contact retention" },
  { name: "Salesforce", category: "Customer data", checks: "Consent fields, user access" },
  { name: "Freshdesk", category: "Customer data", checks: "Rights requests, agent access" },
  { name: "Zendesk", category: "Customer data", checks: "Rights requests, agent access" },
];

export type Plan = {
  name: string;
  for: string;
  frameworks: string;
  includes: string[];
};

export const plans: Plan[] = [
  {
    name: "Starter",
    for: "Your first audit",
    frameworks: "1 framework",
    includes: [
      "Continuous monitoring and evidence collection",
      "Policy library",
      "Joiners and leavers",
      "Auditor portal",
      "Every integration",
    ],
  },
  {
    name: "Growth",
    for: "Selling to larger customers",
    frameworks: "Up to 3 frameworks",
    includes: [
      "Everything in Starter",
      "Risk register",
      "Vendor Risk",
      "Trust Center",
      "Security Training",
      "Device Agent",
    ],
  },
  {
    name: "Scale",
    for: "Multiple products or entities",
    frameworks: "Unlimited frameworks",
    includes: [
      "Everything in Growth",
      "Breach Response",
      "Questionnaire Autofill",
      "Access Reviews",
      "Custom controls and frameworks",
      "Dedicated compliance manager",
    ],
  },
];

export const faqs = [
  {
    q: "Is GRC-Flow an auditor?",
    a: "No. Only an independent CPA firm can issue a SOC 2 report, and only an accredited body can certify ISO 27001. GRC-Flow gets you ready and gives your auditor everything they need. We can introduce you to auditors we work with.",
  },
  {
    q: "What access do integrations need?",
    a: "Read-only access wherever the tool allows it. GRC-Flow never changes your settings; it tells you what to change.",
  },
  {
    q: "Where is my data stored?",
    a: "In AWS Mumbai (ap-south-1) by default, with EU and US regions available on request.",
  },
  {
    q: "Can I buy a module on its own?",
    a: "The DPDP modules can run on their own if you only need DPDP compliance. Everything else sits on top of a plan.",
  },
];
