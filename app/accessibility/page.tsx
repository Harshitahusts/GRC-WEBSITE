import type { Metadata } from "next";
import { LegalPage, type Section } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accessibility",
  description: `How ${site.name} makes this website usable for everyone, and how to report a problem.`,
};

const sections: Section[] = [
  {
    id: "aim",
    title: "Our aim",
    body: <p>We want everyone to be able to use this site, including people who use a keyboard, a screen reader or zoom. We aim to meet WCAG 2.1 level AA.</p>,
  },
  {
    id: "done",
    title: "What we've done",
    body: (
      <ul>
        <li>Every page works with a keyboard alone. Focus is always visible, and a &ldquo;Skip to content&rdquo; link comes first.</li>
        <li>Text and controls meet WCAG AA colour contrast.</li>
        <li>Icons that carry meaning have text labels, and decorative images are hidden from screen readers.</li>
        <li>Form fields have labels, and errors are announced.</li>
        <li>Animation is turned off if you&apos;ve asked your device to reduce motion.</li>
        <li>Every page is checked with the axe-core accessibility scanner before release.</li>
      </ul>
    ),
  },
  {
    id: "limits",
    title: "Known limits",
    body: <p>The live demo embeds the {site.name} app, which is checked separately. The small preview of the dashboard on the home page is decorative; the same information is available in the live demo.</p>,
  },
  {
    id: "report",
    title: "Report a problem",
    body: (
      <p>
        If something doesn&apos;t work for you, email <a href={`mailto:${site.email}?subject=Accessibility`}>{site.email}</a> with the page and what happened. We&apos;ll reply and work on a fix.
      </p>
    ),
  },
];

export default function AccessibilityPage() {
  return <LegalPage eyebrow="Legal" title="Accessibility" intro="How we make this site usable for everyone, and how to tell us when it isn't." sections={sections} />;
}
