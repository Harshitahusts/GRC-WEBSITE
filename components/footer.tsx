"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { openCookieSettings } from "@/lib/consent";
import { nav, site } from "@/lib/site";
import { Logo } from "./logo";

export function Footer() {
  const path = usePathname();
  if (path.startsWith("/demo")) return null;
  return (
    <footer className="bg-side text-side-text">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-4 py-12 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <Logo tone="dark" />
          <p className="mt-4 text-side-muted">{site.tagline}.</p>
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
        <div>
          <h2 className="text-sm font-semibold text-white">Talk to us</h2>
          <ul className="mt-3 space-y-2">
            <li><Link href="/contact" className="hover:text-white">Book a demo</Link></li>
            <li><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></li>
            <li><button type="button" onClick={openCookieSettings} className="hover:text-white">Cookie settings</button></li>
          </ul>
        </div>
      </div>
      <p className="mx-auto max-w-[1240px] border-t border-[#262930] px-4 py-6 text-sm text-side-muted sm:px-8">
        © {new Date().getFullYear()} {site.name}. Compliance software, not legal advice. Findings cite the DPDP Act, 2023 and the DPDP Rules, 2025.
      </p>
    </footer>
  );
}
