import type { Metadata } from "next";
import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookie-settings-button";
import { LegalPage, type Section } from "@/components/legal-page";
import { categories } from "@/lib/consent";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie policy",
  description: `The cookies ${site.name} uses, why, and how to change your choice.`,
};

const sections: Section[] = [
  {
    id: "what",
    title: "What cookies are",
    body: <p>Cookies are small files a website stores in your browser. Some are needed for the site to work; others are optional and only set if you agree.</p>,
  },
  {
    id: "list",
    title: "Cookies we use",
    body: (
      <>
        <table>
          <thead>
            <tr><th scope="col">Name</th><th scope="col">Category</th><th scope="col">Purpose</th><th scope="col">Lasts</th></tr>
          </thead>
          <tbody>
            <tr><td><code>grcflow_consent</code></td><td>Strictly necessary</td><td>Remembers your cookie choice</td><td>6 months</td></tr>
            <tr><td><code>grc_session</code></td><td>Strictly necessary</td><td>Keeps you signed in to the live demo app, if you use it. Set by the demo app.</td><td>8 hours</td></tr>
          </tbody>
        </table>
        <p>
          We don&apos;t set any analytics or marketing cookies at the moment, and no third-party cookies. If we add any, they&apos;ll be listed here and only set after you agree.
        </p>
      </>
    ),
  },
  {
    id: "categories",
    title: "Categories",
    body: (
      <ul>
        {categories.map((c) => (
          <li key={c.id}><strong>{c.name}:</strong> {c.body}</li>
        ))}
      </ul>
    ),
  },
  {
    id: "choice",
    title: "Changing your choice",
    body: (
      <>
        <p>You can change or withdraw your choice at any time. Rejecting optional cookies doesn&apos;t stop any part of the site from working.</p>
        <CookieSettingsButton />
        <p>You can also delete cookies in your browser settings. If you do, we&apos;ll ask for your choice again.</p>
      </>
    ),
  },
  {
    id: "more",
    title: "More information",
    body: <p>See the <Link href="/privacy">privacy policy</Link> for how we handle personal data and how to exercise your rights.</p>,
  },
];

export default function CookiesPage() {
  return <LegalPage eyebrow="Legal" title="Cookie policy" intro="Which cookies this website uses, why, and how to change your choice." sections={sections} />;
}
