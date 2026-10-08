// One page per sector (/industries/<slug>): what the DPDP Act asks of that sector in
// particular, and the parts of GRC Flow that handle it. References: DPDP Act, 2023
// ("Section") and DPDP Rules, 2025 ("Rule"). Keep each claim tied to a provision.

export type Duty = { title: string; body: string; cite: string };
export type Help = { href: string; text: string };

export type Industry = {
  slug: string;
  name: string; // short name for links
  metaTitle: string;
  description: string;
  h1: string;
  intro: string;
  data: string[]; // the personal data this sector typically holds
  duties: Duty[];
  helps: Help[];
  reading: { href: string; title: string }[];
};

export const industries: Industry[] = [
  {
    slug: "edtech",
    name: "EdTech and schools",
    metaTitle: "DPDP Act for EdTech: Children's Data and Parental Consent",
    description:
      "What the DPDP Act means for EdTech companies and schools: verifiable parental consent for students under 18, no tracking or targeted ads at children, and retention of recordings.",
    h1: "DPDP compliance for EdTech: most of your users are children",
    intro:
      "Under the Act anyone under 18 is a child. For an EdTech business that is most of the people it serves, so the extra duties for children's data apply to almost everything it does.",
    data: ["Student names, classes and dates of birth", "Parent contact details", "Class recordings", "Quiz scores and progress", "Tutor notes"],
    duties: [
      {
        title: "Verifiable consent from a parent",
        body: "Before processing a child's data, get the consent of a parent or guardian, and check that the person giving it is an identifiable adult. A ticked box on sign-up is not enough.",
        cite: "Section 9(1), Rule 10",
      },
      {
        title: "No tracking, monitoring or targeted ads",
        body: "Children can't be tracked, behaviourally monitored or shown targeted advertising. The Rules exempt some processing by educational institutions; check whether your activity is covered before relying on it.",
        cite: "Section 9(3), Fourth Schedule",
      },
      {
        title: "Recordings and notes don't last forever",
        body: "Class recordings, quiz history and tutor notes have to be erased once their purpose is served, unless a law requires keeping them.",
        cite: "Section 8(7)",
      },
      {
        title: "Video and messaging vendors under contract",
        body: "Video-class platforms, messaging services and analytics tools that handle student data must work under a valid contract.",
        cite: "Section 8(2)",
      },
    ],
    helps: [
      { href: "/features/personal-data-discovery", text: "Discovery flags dates of birth under 18 as children's data, and health details hidden in notes." },
      { href: "/features/dpdp-registers", text: "Consent records show who consented, when, and for which purpose; DPIAs cover profiling features." },
      { href: "/features/dpdp-documents", text: "The privacy notice adds a section for parents when children's data is in scope." },
    ],
    reading: [
      { href: "/blog/dpdp-act-2023-explained", title: "The DPDP Act 2023, explained" },
      { href: "/blog/dpdp-rules-2025", title: "The DPDP Rules 2025" },
    ],
  },
  {
    slug: "bfsi",
    name: "Banking, financial services and insurance",
    metaTitle: "DPDP Act for BFSI: KYC Data, Retention and Breach Reporting",
    description:
      "What the DPDP Act means for banks, NBFCs, fintechs and insurers: safeguards for KYC data, erasure versus sector retention rules, breach reporting and Significant Data Fiduciary duties.",
    h1: "DPDP compliance for banks, NBFCs, fintechs and insurers",
    intro:
      "Financial firms hold the most sensitive identifiers there are, under sector rules that already demand a lot. The DPDP Act adds its own duties on top, and the largest firms may be notified as Significant Data Fiduciaries.",
    data: ["Aadhaar and PAN from KYC", "Bank account and card numbers", "UPI IDs", "Income and credit history", "Nominee details"],
    duties: [
      {
        title: "Safeguards that match the data",
        body: "Identifiers and financial data cause the most harm when leaked. The Rules set minimum safeguards, including encryption, access control, monitoring and one year of logs.",
        cite: "Section 8(5), Rule 6",
      },
      {
        title: "Keep what the law requires, erase the rest",
        body: "Sector rules may require records to be kept for years. The Act allows that, but data kept for no legal reason must be erased once its purpose ends.",
        cite: "Section 8(7)",
      },
      {
        title: "Report breaches to the Board too",
        body: "A personal data breach has to be reported to the Data Protection Board and to each affected person, with a detailed report within 72 hours, alongside whatever your sector regulator requires.",
        cite: "Section 8(6), Rule 7",
      },
      {
        title: "Significant Data Fiduciary duties",
        body: "If notified as a Significant Data Fiduciary because of volume or sensitivity, a firm needs a Data Protection Officer based in India, and a DPIA and an independent audit every year.",
        cite: "Section 10, Rule 13",
      },
    ],
    helps: [
      { href: "/features/personal-data-discovery", text: "Discovery checks Aadhaar with its checksum, and finds PAN, UPI IDs and card numbers (Luhn check)." },
      { href: "/features/dpdp-registers", text: "The breach register runs the 72-hour clock; the DPIA register tracks reviews and residual risk." },
      { href: "/features/risk-register-and-data-flows", text: "The risk register scores each gap by likelihood and impact, with an owner and a due date." },
    ],
    reading: [
      { href: "/blog/dpdp-act-penalties", title: "DPDP Act penalties" },
      { href: "/blog/dpdp-compliance-checklist", title: "A DPDP compliance checklist" },
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    metaTitle: "DPDP Act for Healthcare: Patient Data, Emergencies and Vendors",
    description:
      "What the DPDP Act means for hospitals, clinics, labs and health apps: safeguards for patient data, the legitimate use for medical emergencies, children's records and vendor contracts.",
    h1: "DPDP compliance for hospitals, clinics, labs and health apps",
    intro:
      "Patient records are among the most sensitive data a business can hold. The Act lets you act in an emergency without waiting for consent, but expects strong safeguards around everything else.",
    data: ["Patient names and contact details", "Diagnoses, prescriptions and reports", "Insurance and payment details", "Children's medical records", "Staff records"],
    duties: [
      {
        title: "Strong safeguards for health data",
        body: "A leak of medical details causes serious harm, so the safeguards have to match: access limited to those treating the patient, encryption, logs and backups.",
        cite: "Section 8(5), Rule 6",
      },
      {
        title: "Emergencies don't wait for consent",
        body: "Responding to a medical emergency that threatens someone's life or health is a legitimate use under the Act, so it doesn't need consent first. Routine care and marketing still do.",
        cite: "Section 7",
      },
      {
        title: "Children's records need a parent's consent",
        body: "For patients under 18, consent comes from a parent or guardian, checked as an identifiable adult.",
        cite: "Section 9(1), Rule 10",
      },
      {
        title: "Labs, insurers and software vendors",
        body: "Every outside lab, TPA, billing or software vendor that handles patient data on your behalf needs a valid contract.",
        cite: "Section 8(2)",
      },
    ],
    helps: [
      { href: "/features/personal-data-discovery", text: "Discovery finds health details, including those typed into free-text notes." },
      { href: "/features/evidence-and-audit-log", text: "Evidence for each safeguard, and a tamper-evident log of who changed what." },
      { href: "/features/dpdp-registers", text: "The vendor register tracks contracts, data shared and where each vendor processes it." },
    ],
    reading: [
      { href: "/blog/dpdp-act-2023-explained", title: "The DPDP Act 2023, explained" },
      { href: "/blog/dpdp-vs-gdpr", title: "DPDP vs GDPR" },
    ],
  },
  {
    slug: "saas",
    name: "SaaS and IT services",
    metaTitle: "DPDP Act for SaaS: Processor Duties, DPAs and Hosting",
    description:
      "What the DPDP Act means for SaaS and IT services companies: acting as a processor for customers, DPAs, hosting outside India, and breach notice to customers.",
    h1: "DPDP compliance for SaaS and IT services companies",
    intro:
      "A SaaS company is usually two things at once: a processor for its customers' data, and a Data Fiduciary for its own users, staff and leads. Customers will ask how you handle both.",
    data: ["Customer users' accounts and logs", "Data your customers upload", "Your own leads and marketing lists", "Employee records", "Support tickets"],
    duties: [
      {
        title: "Customers need you under contract",
        body: "Your customers may only use you as a processor under a valid contract, so expect DPA requests in every security review. Process their data only on their instructions.",
        cite: "Section 8(2)",
      },
      {
        title: "Know where data is hosted",
        body: "Data can go to any country unless the government restricts it by notification. Keep a current list of where you and your sub-processors host data.",
        cite: "Section 16, Rule 15",
      },
      {
        title: "Tell customers about breaches fast",
        body: "Your customers must report breaches to the Board and to affected people, with a detailed report within 72 hours. They can only do that if you tell them quickly.",
        cite: "Section 8(6), Rule 7",
      },
      {
        title: "Your own data is your duty",
        body: "For your own users, staff and marketing, you are the Data Fiduciary: notice, consent, rights and erasure all apply to you directly.",
        cite: "Sections 5, 6, 8",
      },
    ],
    helps: [
      { href: "/connectors", text: "Read-only AWS and GitHub checks show where data is stored and back findings with evidence." },
      { href: "/features/dpdp-documents", text: "DPA drafts with a schedule per vendor, built from the vendor register." },
      { href: "/features/risk-register-and-data-flows", text: "The data-flow map flags every flow that leaves India." },
    ],
    reading: [
      { href: "/blog/dpdp-vs-gdpr", title: "DPDP vs GDPR" },
      { href: "/blog/dpdp-certification", title: "Is there a DPDP certification?" },
    ],
  },
  {
    slug: "ecommerce",
    name: "E-commerce and retail",
    metaTitle: "DPDP Act for E-commerce: 3-Year Erasure, Consent and Marketing",
    description:
      "What the DPDP Act means for e-commerce and retail: erasing inactive users' data after three years, separate marketing consent, delivery and payment partners, and rights requests.",
    h1: "DPDP compliance for e-commerce and retail",
    intro:
      "Online stores collect personal data at every step, from sign-up to delivery. The Rules set a specific erasure timetable for large platforms, and marketing is where consent most often goes wrong.",
    data: ["Customer accounts and addresses", "Order and payment history", "Phone numbers for delivery", "Marketing lists and preferences", "Reviews and support chats"],
    duties: [
      {
        title: "Erase inactive users after three years",
        body: "An e-commerce entity with 2 crore or more registered users in India must erase a user's data after three years without contact, giving 48 hours' notice first, unless a law requires keeping it.",
        cite: "Rule 8, Third Schedule",
      },
      {
        title: "Marketing needs its own consent",
        body: "Consent must be specific to each purpose and as easy to withdraw as to give. Bundling marketing into the terms of sale doesn't count.",
        cite: "Section 6(1), 6(4)",
      },
      {
        title: "Payment and delivery partners",
        body: "Payment gateways, courier partners and marketing tools that process customer data for you need valid contracts.",
        cite: "Section 8(2)",
      },
      {
        title: "Answer rights requests",
        body: "Customers can ask what you hold, correct it, erase it and complain. Grievances must be answered within the period the Rules set.",
        cite: "Sections 11–13, Rule 14",
      },
    ],
    helps: [
      { href: "/features/dpdp-registers", text: "Consent records with withdrawals, and requests with their response clocks." },
      { href: "/features/personal-data-discovery", text: "Discovery maps the customer exports, and the inventory records a retention period for each field." },
      { href: "/features/dpdp-documents", text: "Privacy notice and RoPA drafted from your own inventory and vendors." },
    ],
    reading: [
      { href: "/blog/dpdp-rules-2025", title: "The DPDP Rules 2025" },
      { href: "/blog/dpdp-compliance-checklist", title: "A DPDP compliance checklist" },
    ],
  },
];
