// Site-wide settings. Change the brand, contact details and form endpoint here.
export const site = {
  name: "GRC-Flow",
  tagline: "DPDPA readiness assessments, drafted in hours, verified by you",
  description:
    "A workspace for running DPDP Act readiness assessments: guided intake, cited findings, reviewed documents, a risk register, data-flow maps and a GRC Analyst that cites the Act and Rules.",
  url: "https://grc-flow.com",
  email: "hello@grc-flow.com",
  // POST endpoint for the demo form (e.g. a Brevo or Formspree form URL).
  // Leave empty and the form opens a pre-filled email to `email` instead.
  demoFormEndpoint: "",
};

export const nav = [
  { href: "/product", label: "Product" },
  { href: "/demo", label: "Live demo" },
  { href: "/connectors", label: "Connectors" },
  { href: "/pricing", label: "Pricing" },
];
