"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { openCookieSettings } from "@/lib/consent";
import { business, legalNav, nav, site } from "@/lib/site";
import { Logo } from "./logo";

export function Footer() {
  const path = usePathname();
  if (path.startsWith("/demo")) return null;
  return (
    <footer className="bg-side text-side-text">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-4 py-12 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="max-w-sm">
          <Logo tone="dark" />
          <p className="mt-4 text-side-muted">{site.tagline}.</p>
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
      <div className="mx-auto max-w-[1240px] space-y-1.5 border-t border-[#262930] px-4 py-6 text-sm text-side-muted sm:px-8">
        <p>
          © {new Date().getFullYear()} {business.legalName}. {business.address}. CIN {business.cin}. GSTIN {business.gstin}.
        </p>
        <p>
          Grievance Officer: {business.grievanceOfficer.name},{" "}
          <a href={`mailto:${business.grievanceOfficer.email}`} className="underline hover:text-white">{business.grievanceOfficer.email}</a>.
          Compliance software, not legal advice.
        </p>
      </div>
    </footer>
  );
}
