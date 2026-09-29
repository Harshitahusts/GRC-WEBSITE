// Site-wide settings. Change the brand, contact details and form endpoint here.
export const site = {
  name: "GRC-Flow",
  tagline: "Compliance automation for SOC 2, ISO 27001 and India's DPDP Act",
  description:
    "GRC-Flow connects to your cloud, code and HR tools, checks your controls around the clock, and files the evidence against SOC 2, ISO 27001, the DPDP Act, GDPR, HIPAA and more.",
  url: "https://grc-flow.com",
  email: "hello@grc-flow.com",
  // POST endpoint for the demo form (e.g. a Brevo or Formspree form URL).
  // Leave empty and the form opens a pre-filled email to `email` instead.
  demoFormEndpoint: "",
};

export const nav = [
  { href: "/platform", label: "Platform" },
  { href: "/modules", label: "Modules" },
  { href: "/integrations", label: "Integrations" },
  { href: "/pricing", label: "Pricing" },
];
