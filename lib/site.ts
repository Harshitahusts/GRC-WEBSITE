// Site-wide settings. Change the brand, contact details and form endpoint here.
export const site = {
  name: "GRC-Flow",
  tagline: "DPDPA readiness assessments, drafted for you, verified by you",
  description:
    "A workspace for running DPDP Act readiness assessments: guided intake, cited findings, reviewed documents, a risk register, data-flow maps and a GRC Analyst that cites the Act and Rules.",
  url: "https://grc-flow.com",
  email: "talk@grc-flow.com",
  // POST endpoint for the demo form (e.g. a Brevo or Formspree form URL).
  // Leave empty and the form opens a pre-filled email to `email` instead.
  demoFormEndpoint: "",
  // The GRC Flow app, where customers sign in. The "Sign in" links go here.
  appUrl: process.env.NEXT_PUBLIC_APP_URL || "https://app.grc-flow.com",
  // POST endpoint for privacy requests (access, deletion, unsubscribe...).
  // Leave empty and the form opens a pre-filled email to business.privacyEmail.
  privacyRequestEndpoint: "",
};

// Business details shown in the footer, the About page and the legal pages.
// TODO before launch: replace every value in square brackets with the real details,
// and confirm the exact registered name (for example "... Private Limited").
export const business = {
  legalName: "Suscin Innovation Labs",
  parent: "Suscin Innovation Labs",
  city: "Pune, Maharashtra, India",
  address: "[Registered office address], Pune, Maharashtra, India",
  cin: "[CIN]",
  gstin: "[GSTIN]",
  privacyEmail: "talk@grc-flow.com",
  // DPDP Act Section 8(9) and Rule 9: publish who answers questions about personal data.
  grievanceOfficer: { name: "[Grievance Officer name]", email: "talk@grc-flow.com" },
  jurisdiction: "Pune, India",
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
  { href: "/connectors", label: "Connectors" },
  { href: "/pricing", label: "Pricing" },
];
