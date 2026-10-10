import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type Section } from "@/components/legal-page";
import { business, site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/terms" },
  title: "Terms of service",
  description: `The terms for using the ${site.name} website, live demo and app: accounts, acceptable use, your data, confidentiality, fees and liability.`,
};

const app = site.appUrl.replace(/^https?:\/\//, "");

const sections: Section[] = [
  {
    id: "about",
    title: "About these terms",
    body: (
      <>
        <p>
          These terms cover the {site.name} website, its live demo, and the {site.name} app at <a href={site.appUrl}>{app}</a> (together, the &ldquo;Service&rdquo;), run by{" "}
          <strong>{business.legalName}</strong>, {business.city} (&ldquo;we&rdquo;, &ldquo;us&rdquo;).
        </p>
        <p>
          By creating an account, accepting an invitation or using the Service, you agree to these terms on behalf of the organisation you use it for (the
          &ldquo;Customer&rdquo;), and you confirm you are at least 18 and allowed to bind that organisation. If you don&apos;t agree, don&apos;t use the Service.
        </p>
        <p>If the Customer has a signed order form or agreement with us, it takes priority over these terms where the two differ.</p>
      </>
    ),
  },
  {
    id: "definitions",
    title: "Words we use",
    body: (
      <ul>
        <li><strong>Customer Data</strong>: everything the Customer or its users put into the Service, or let it collect through connectors, and what the Service produces from it.</li>
        <li><strong>Users</strong>: people the Customer invites or lets use its workspace.</li>
        <li><strong>Order</strong>: a quote or order form the Customer has signed, setting out the plan, price and term.</li>
        <li><strong>Confidential Information</strong>: has the meaning in the &ldquo;Confidentiality&rdquo; section below.</li>
      </ul>
    ),
  },
  {
    id: "accounts",
    title: "Accounts and access",
    body: (
      <ul>
        <li>Each user needs their own account. Don&apos;t share logins or passwords with anyone, including colleagues, contractors and AI tools.</li>
        <li>Keep passwords and API keys secret. Where you can, sign in with your company Google or Microsoft account so your own security rules (like two-step sign-in) apply.</li>
        <li>The Customer is responsible for who it invites, what they do in its workspace, and removing people who leave.</li>
        <li>Tell us at <a href={`mailto:${site.email}`}>{site.email}</a> straight away if you think someone has got into an account without permission.</li>
      </ul>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    body: (
      <>
        <p>You must not use the Service to:</p>
        <ul>
          <li>break any law, or process personal data you have no lawful ground to process;</li>
          <li>upload malware, or anything that infringes someone else&apos;s rights;</li>
          <li>test, probe or scan its security, or load-test it, without our written permission;</li>
          <li>get around limits, access controls or another customer&apos;s data;</li>
          <li>access it with bots, scrapers or scripts, except through the API keys and MCP endpoint we provide, within their limits.</li>
        </ul>
        <p>
          Found a security problem? Report it to <a href={`mailto:${site.email}`}>{site.email}</a> and give us a fair chance to fix it before telling anyone else. We
          won&apos;t take action against good-faith reports that follow this.
        </p>
      </>
    ),
  },
  {
    id: "restrictions",
    title: "What you can't do with the Service",
    body: (
      <>
        <p>
          You may use the Service for your own organisation&apos;s compliance work and, if you are a consultant, for your clients&apos; work. You must not, and must not
          let anyone else:
        </p>
        <ul>
          <li>copy, modify or make derivative works of the Service, its software, screens, workflows or content;</li>
          <li>reverse engineer, decompile or disassemble it, or try to get its source code, except where the law allows this and can&apos;t be overridden by contract;</li>
          <li>sell, rent, sublicense or resell access to it, unless we have agreed this in writing (for example under a partner agreement);</li>
          <li>use it, or anything you learn from inside it, to build, design or improve a product that competes with {site.name};</li>
          <li>publish benchmarks, comparisons or test results about it without our written consent;</li>
          <li>remove or hide our notices, labels or branding, or frame or mirror the Service.</li>
        </ul>
        <p>Reading our public website, blog and documentation is fine. These limits are about the Service behind the sign-in.</p>
      </>
    ),
  },
  {
    id: "your-data",
    title: "Your data",
    body: (
      <>
        <p>The Customer owns Customer Data. We get a limited right to host, process and display it only to provide, secure and support the Service for the Customer.</p>
        <ul>
          <li>We don&apos;t sell Customer Data or use it for advertising.</li>
          <li>We don&apos;t use Customer Data to train AI models.</li>
          <li>We may use counts and other usage statistics that identify no person or customer, to run and improve the Service.</li>
          <li>Only put in the data you need. Don&apos;t upload more personal data than a task requires, and never put real personal data into the live demo.</li>
        </ul>
      </>
    ),
  },
  {
    id: "personal-data",
    title: "Personal data and the DPDP Act",
    body: (
      <>
        <p>
          For personal data in Customer Data, the Customer is the <strong>Data Fiduciary</strong> and we are its <strong>Data Processor</strong> under the Digital
          Personal Data Protection Act, 2023. That means we:
        </p>
        <ul>
          <li>process it only to provide the Service and on the Customer&apos;s instructions;</li>
          <li>keep reasonable security safeguards, including encryption of stored connector credentials, access controls and a tamper-evident audit log;</li>
          <li>
            tell the Customer about a personal data breach affecting its data without undue delay, and within 24 hours of confirming it, with the details we have, so it
            can meet its own reporting duties;
          </li>
          <li>bind our own service providers to the same standards by contract;</li>
          <li>delete or return the data when the Customer asks, or when the Service ends (see &ldquo;Ending the Service&rdquo;).</li>
        </ul>
        <p>
          Our service providers for the app are our cloud host (Oracle Cloud, Mumbai region, where Customer Data is stored), our email provider (Resend, for sign-in and
          notification emails), and the AI provider the Customer chooses on the AI provider page of its workspace. Some AI providers process data outside India, and some
          free plans let the provider use the data under its own terms. Check the provider&apos;s terms before choosing it; the workspace shows which one is in use, and
          the Customer can switch provider or stop using AI features. We&apos;ll give notice before adding a new provider that stores Customer Data.
        </p>
        <p>
          The Customer is responsible for having a lawful ground for the personal data it puts in, and for its notices and consents. A separate data processing agreement
          is available on request. How we handle our own customers&apos; and visitors&apos; personal data is in the <Link href="/privacy">privacy policy</Link>.
        </p>
      </>
    ),
  },
  {
    id: "ai",
    title: "AI features",
    body: (
      <ul>
        <li>Findings, drafts, answers and suggestions made by AI are labelled as such and are starting points, not final answers. They can be wrong or incomplete.</li>
        <li>A person must review them before anyone relies on them or sends them on. The Service requires some reviews, but the Customer stays responsible for what it uses.</li>
        <li>When you use an AI feature, the text it needs is sent to the AI provider chosen for the workspace, under that provider&apos;s terms.</li>
      </ul>
    ),
  },
  {
    id: "not-advice",
    title: "Not legal advice",
    body: (
      <p>
        {site.name} is software that helps you assess and manage DPDP Act compliance. Content on the website, and findings and documents produced in the Service, are
        general information, not legal advice. Talk to a lawyer about your own situation. Documents such as data processing agreements are marked as drafts for a
        lawyer&apos;s review. Each organisation remains responsible for its own compliance.
      </p>
    ),
  },
  {
    id: "connectors",
    title: "Connectors and other services",
    body: (
      <p>
        Connectors (such as GitHub, AWS, Google Cloud, Microsoft Entra ID or Slack) read from or post to services the Customer already uses, with access the Customer
        grants. Give each connector only the access it asks for. Those services are run by others under their own terms, and we aren&apos;t responsible for them. The
        Customer can disconnect a connector at any time, and should also revoke the key or access in the other service.
      </p>
    ),
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    body: (
      <>
        <p>
          Each of us will see the other&apos;s non-public information. <strong>Confidential Information</strong> means that information, if it is marked confidential or a
          reasonable person would understand it to be. For the Customer, this includes Customer Data. For us, it includes the parts of the Service behind the sign-in
          (screens, workflows, data models, prompts, and scoring and assessment methods), our pricing in quotes, our roadmap and our security details.
        </p>
        <p>
          Each of us will use the other&apos;s Confidential Information only to provide or use the Service, and share it only with staff and advisers who need it and
          must keep it confidential. Each of us will protect it at least as carefully as its own, and never with less than reasonable care.
        </p>
        <p>
          This doesn&apos;t cover information that becomes public through no fault of the receiver, that the receiver already had or got lawfully from someone else
          without restriction, or that the receiver developed independently. If the law or a court requires disclosure, the receiver may disclose what is required,
          telling the other first where it lawfully can.
        </p>
        <p>
          These duties last for five years after the Service ends, and for trade secrets for as long as they stay secret. A breach could cause harm that money
          can&apos;t fix, so either of us may ask a court for an order to stop it, as well as other remedies.
        </p>
      </>
    ),
  },
  {
    id: "ip",
    title: "Our rights and your feedback",
    body: (
      <>
        <p>
          The Service, including its software, design, text and the improvements we make, belongs to {business.legalName} or its licensors. Apart from the right to use
          the Service set out here, these terms give you no rights in it.
        </p>
        <p>If you send us ideas or feedback, we may use them freely without paying you. We won&apos;t name you or share your Confidential Information when we do.</p>
        <p>
          You may link to the website and share its pages, but not copy the site as a whole. The website is built with open-source software used under its licences:
          Next.js, React and Tailwind CSS (all MIT). Icons come from the {site.name} product (MIT). Text uses your device&apos;s built-in system fonts.
        </p>
      </>
    ),
  },
  {
    id: "demo",
    title: "The live demo and trials",
    body: (
      <ul>
        <li>The demo uses invented sample clients and data. Don&apos;t enter real personal or confidential data into it.</li>
        <li>The demo and any free trial are provided as is for evaluation, and may be reset, changed, ended or unavailable at any time.</li>
        <li>We may delete a trial workspace after the trial ends. Export anything you want to keep before then.</li>
      </ul>
    ),
  },
  {
    id: "fees",
    title: "Fees",
    body: (
      <>
        <p>Using this website and the live demo is free.</p>
        <p>
          For paid plans, we send a written quote before you commit. The quote lists the full price for your plan, including GST, and you won&apos;t be charged anything
          that isn&apos;t in it. Nothing is charged until you sign. Payment terms, the plan term and renewal are set out in the Order. See{" "}
          <Link href="/pricing">pricing</Link> for what each plan includes.
        </p>
        <p>If an invoice is more than 30 days overdue, we may suspend access after giving written notice and at least 7 days to pay.</p>
      </>
    ),
  },
  {
    id: "availability",
    title: "Availability and support",
    body: (
      <p>
        We work to keep the Service available, secure and backed up, and we&apos;ll try to give notice of planned maintenance. Unless an Order says otherwise, we
        don&apos;t promise a particular uptime. Support is by email at <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    ),
  },
  {
    id: "ending",
    title: "Ending the Service",
    body: (
      <>
        <p>
          The Customer can stop using the Service at any time; paid plans end as set out in the Order. We may suspend or end access if someone seriously breaks these
          terms, if there is a security risk to the Service or other customers, or if the law requires it. Where we reasonably can, we&apos;ll warn you first and give you
          a chance to fix the problem.
        </p>
        <p>
          When the Service ends, the Customer has 30 days to export its data using the app&apos;s download features or by asking us. After that we delete Customer Data,
          except copies in backups (deleted on their normal cycle) and anything the law requires us to keep. The sections on restrictions, confidentiality, liability and
          governing law continue after the Service ends.
        </p>
      </>
    ),
  },
  {
    id: "warranties",
    title: "Promises and disclaimers",
    body: (
      <p>
        We will provide the Service with reasonable skill and care. Apart from that, and to the extent the law allows, the Service is provided as is. We don&apos;t
        promise it will be error-free or uninterrupted, or that using it will make you compliant with any law.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Liability",
    body: (
      <>
        <p>To the extent the law allows:</p>
        <ul>
          <li>neither of us is liable for indirect or consequential loss, or for lost profits, revenue or goodwill;</li>
          <li>
            each party&apos;s total liability under these terms is limited to the fees the Customer paid us in the 12 months before the claim, or ₹10,000 if that is
            higher.
          </li>
        </ul>
        <p>
          These limits don&apos;t apply to a breach of the &ldquo;What you can&apos;t do with the Service&rdquo; or &ldquo;Confidentiality&rdquo; sections, to unpaid fees,
          or to liability that can&apos;t be limited under Indian law.
        </p>
      </>
    ),
  },
  {
    id: "indemnity",
    title: "Claims from others",
    body: (
      <p>
        The Customer will cover our reasonable costs if someone else makes a claim against us because of Customer Data or the Customer&apos;s use of the Service in breach
        of these terms. We will cover the Customer&apos;s reasonable costs if someone claims the Service itself, used as these terms allow, infringes their intellectual
        property in India. In either case the party facing the claim must tell the other promptly and let it handle the claim.
      </p>
    ),
  },
  {
    id: "privacy",
    title: "Privacy",
    body: <p>How we handle personal data as a Data Fiduciary is set out in the <Link href="/privacy">privacy policy</Link> and the <Link href="/cookies">cookie policy</Link>.</p>,
  },
  {
    id: "law",
    title: "Governing law and disputes",
    body: (
      <p>
        These terms are governed by the laws of India. If a dispute comes up, we&apos;ll first try to settle it by talking, for at least 30 days. If that fails, courts at{" "}
        {business.jurisdiction} have exclusive jurisdiction. Either of us may still go to any court for urgent orders to protect confidential information or intellectual
        property.
      </p>
    ),
  },
  {
    id: "general",
    title: "General",
    body: (
      <ul>
        <li>Neither of us is responsible for delays caused by events outside reasonable control, such as internet or cloud provider outages.</li>
        <li>The Customer can&apos;t transfer these terms without our written consent, except to a business that takes over all of it. We can transfer them to a business that takes over the Service.</li>
        <li>If part of these terms can&apos;t be enforced, the rest still applies. Not enforcing a right straight away doesn&apos;t mean giving it up.</li>
        <li>We name the Customer as a customer only with its permission.</li>
      </ul>
    ),
  },
  {
    id: "changes",
    title: "Changes",
    body: (
      <p>
        We may update these terms. The date at the top shows the latest version. For important changes, we&apos;ll tell account owners by email or in the app at least
        30 days before they apply. Continuing to use the Service after that means accepting them. Changes don&apos;t alter a signed Order during its term.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <p>
        Questions about these terms: <a href={`mailto:${site.email}`}>{site.email}</a>, {business.legalName}, {business.city}.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of service"
      intro={`The rules for using the ${site.name} website, live demo and app.`}
      sections={sections}
      updated={business.termsUpdated}
    />
  );
}
