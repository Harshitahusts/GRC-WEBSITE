"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";
import { ButtonLink } from "./buttons";
import { Logo } from "./logo";

export function Header() {
  const path = usePathname();
  // The live demo brings its own app chrome.
  if (path.startsWith("/demo")) return null;
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-surface/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center gap-x-8 gap-y-2 px-4 py-3 sm:px-8">
        <Link href="/" aria-label={`${site.name} home`}>
          <Logo />
        </Link>
        <nav aria-label="Main" className="order-3 -mx-2 flex w-full gap-1 overflow-x-auto sm:order-none sm:w-auto">
          {nav.map((item) => {
            const active = path === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-[7px] px-2.5 py-1.5 font-medium whitespace-nowrap ${active ? "bg-accent-soft text-accent" : "text-fg-2 hover:bg-hover hover:text-fg"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <ButtonLink href="/contact" className="!px-3.5 !py-1.5">Book a demo</ButtonLink>
        </div>
      </div>
    </header>
  );
}
