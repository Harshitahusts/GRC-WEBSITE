"use client";

import Link from "next/link";
import { openCookieSettings } from "@/lib/consent";
import { business, legalNav, nav, site } from "@/lib/site";
import { IndiaFlag } from "./india-flag";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="bg-side text-side-text">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-4 py-12 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="max-w-sm">
          <Logo tone="dark" />
          <p className="mt-4 text-side-muted">{site.tagline}</p>
          <p className="mt-3 text-side-muted">
            A product of <span className="text-side-text">{business.parent}</span>, {business.city}.
          </p>
        </div>
        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold text-white">Product</h2>
          <ul className="mt-3 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Legal">
          <h2 className="text-sm font-semibold text-white">Legal</h2>
          <ul className="mt-3 space-y-2">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="text-sm font-semibold text-white">Company</h2>
          <ul className="mt-3 space-y-2">
            <li><Link href="/about" className="hover:text-white">About us</Link></li>
            <li><a href={site.appUrl} className="hover:text-white">Sign in to {site.name}</a></li>
            <li><Link href="/contact" className="hover:text-white">Book a demo</Link></li>
            <li><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></li>
            <li><button type="button" onClick={openCookieSettings} className="hover:text-white">Cookie settings</button></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1240px] flex-col gap-4 border-t border-[#262930] px-4 py-6 text-sm text-side-muted sm:px-8 md:flex-row md:items-end md:justify-between">
        <div className="space-y-1.5">
          <p>
            © {new Date().getFullYear()} {business.legalName}, {business.city}.{" "}
            <Link href="/about" className="underline hover:text-white">About us</Link>
          </p>
          <p>
            Grievance Officer:{" "}
            <a href={`mailto:${business.grievanceOfficer.email}`} className="underline hover:text-white">{business.grievanceOfficer.email}</a>.
            Compliance software, not legal advice.
          </p>
        </div>
        <p className="text-[0.95rem] text-side-text">
          Made with <span role="img" aria-label="love">❤️</span> by Indians, for India, in India <IndiaFlag />, to keep India&apos;s data safe.
        </p>
      </div>
    </footer>
  );
}
