import Link from "next/link";
import { nav, site } from "@/lib/site";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-rule bg-paper-deep">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 text-ink-soft">{site.tagline}.</p>
        </div>
        <nav aria-label="Footer">
          <h2 className="font-sans text-sm font-semibold text-ink">Product</h2>
          <ul className="mt-3 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-ink-soft hover:text-ink">{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="font-sans text-sm font-semibold text-ink">Talk to us</h2>
          <ul className="mt-3 space-y-2">
            <li><Link href="/demo" className="text-ink-soft hover:text-ink">Book a demo</Link></li>
            <li><a href={`mailto:${site.email}`} className="text-ink-soft hover:text-ink">{site.email}</a></li>
          </ul>
        </div>
      </div>
      <p className="mx-auto max-w-6xl px-4 pb-8 text-sm text-ink-soft sm:px-6">
        © {new Date().getFullYear()} {site.name}. {site.name} is compliance software, not legal advice. Talk to your lawyer about how the DPDP Act applies to you.
      </p>
    </footer>
  );
}
