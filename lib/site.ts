// Site-wide settings. Change the brand, contact details and form endpoint here.
export const site = {
  name: "GRC-Flow",
  tagline: "DPDPA readiness assessments, drafted for you, verified by you",
  description:
    "A workspace for running DPDP Act readiness assessments: guided intake, cited findings, reviewed documents, a risk register, data-flow maps and a GRC Analyst that cites the Act and Rules.",
  url: "https://grc-flow.com",
  email: "hello@grc-flow.com",
  // POST endpoint for the demo form (e.g. a Brevo or Formspree form URL).
  // Leave empty and the form opens a pre-filled email to `email` instead.
  demoFormEndpoint: "",
  // The real GRC agent app shown on /demo: its demo workspace, started with
  // start-demo.bat in the GRC-Ai folder (port 8001). Set NEXT_PUBLIC_APP_DEMO_URL
  // when it's hosted somewhere else, e.g. https://demo.grc-flow.com. Left empty,
  // the site uses the same host name it was opened on, port 8001, because the
  // app's sign-in cookie only works inside the page when both share a host name.
  appDemoUrl: process.env.NEXT_PUBLIC_APP_DEMO_URL ?? "",
  appDemoPort: 8001,
  appDemoLogin: { user: "demo", password: "grc-demo-2026" },
  // POST endpoint for privacy requests (access, deletion, unsubscribe...).
  // Leave empty and the form opens a pre-filled email to business.privacyEmail.
  privacyRequestEndpoint: "",
};

// Business details shown in the footer and the legal pages.
// TODO before launch: replace every value in square brackets with the real details.
export const business = {
  legalName: "[Company legal name] Private Limited",
  address: "[Registered office address, City, State, PIN]",
  cin: "[CIN]",
  gstin: "[GSTIN]",
  privacyEmail: "privacy@grc-flow.com",
  // DPDP Act Section 8(9) and Rule 9: publish who answers questions about personal data.
  grievanceOfficer: { name: "[Grievance Officer name]", email: "grievance@grc-flow.com" },
  jurisdiction: "[City], India",
  policiesUpdated: "2 October 2026",
};

export const legalNav = [
  { href: "/privacy", label: "Privacy policy" },
  { href: "/terms", label: "Terms of service" },
  { href: "/cookies", label: "Cookie policy" },
  { href: "/privacy-request", label: "Your data rights" },
  { href: "/accessibility", label: "Accessibility" },
];

export const nav = [
  { href: "/product", label: "Product" },
  { href: "/demo", label: "Live demo" },
  { href: "/connectors", label: "Connectors" },
  { href: "/pricing", label: "Pricing" },
];
