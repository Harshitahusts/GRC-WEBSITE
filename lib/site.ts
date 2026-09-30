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
  // The real GRC agent app shown on /demo: its demo workspace, started with
  // start-demo.bat in the GRC-Ai folder (port 8001). Set NEXT_PUBLIC_APP_DEMO_URL
  // when it's hosted somewhere else, e.g. https://demo.grc-flow.com. Left empty,
  // the site uses the same host name it was opened on, port 8001, because the
  // app's sign-in cookie only works inside the page when both share a host name.
  appDemoUrl: process.env.NEXT_PUBLIC_APP_DEMO_URL ?? "",
  appDemoPort: 8001,
  appDemoLogin: { user: "demo", password: "grc-demo-2026" },
};

export const nav = [
  { href: "/product", label: "Product" },
  { href: "/demo", label: "Live demo" },
  { href: "/connectors", label: "Connectors" },
  { href: "/pricing", label: "Pricing" },
];
