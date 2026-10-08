"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";
import { ButtonLink } from "./buttons";
import { DeadlineStrip } from "./deadline-countdown";
import { Logo } from "./logo";

export function Header() {
  const path = usePathname();
  return (
    // The deadline strip and the menu stay pinned to the top together while scrolling.
    <div className="sticky top-0 z-30">
      <DeadlineStrip />
      <header className="border-b border-line bg-surface/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1240px] items-center gap-x-3 px-4 py-3 sm:px-8 lg:gap-x-8">
          <Link href="/" aria-label={`${site.name} home`} className="shrink-0 whitespace-nowrap">
            <Logo />
          </Link>
          <nav aria-label="Main" className="hidden gap-1 lg:flex">
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
          <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
            <details key={path} className="relative lg:hidden">
              <summary className="cursor-pointer list-none rounded-[7px] px-2.5 py-1.5 font-semibold text-fg-2 hover:bg-hover [&::-webkit-details-marker]:hidden">Menu</summary>
              <nav aria-label="Main" className="absolute right-0 z-40 mt-2 w-52 rounded-[10px] border border-line bg-surface p-1.5 shadow-float">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={path === item.href ? "page" : undefined}
                    className={`block rounded-[7px] px-3 py-2 font-medium ${path === item.href ? "bg-accent-soft text-accent" : "text-fg-2 hover:bg-hover hover:text-fg"}`}
                  >
                    {item.label}
                  </Link>
                ))}
                <a href={site.appUrl} className="block rounded-[7px] px-3 py-2 font-medium text-fg-2 hover:bg-hover hover:text-fg sm:hidden">Sign in</a>
              </nav>
            </details>
            <a href={site.appUrl} className="hidden rounded-[7px] px-2.5 py-1.5 font-semibold whitespace-nowrap text-fg-2 hover:bg-hover hover:text-fg sm:block">
              Sign in
            </a>
            <ButtonLink href="/contact" className="!px-3 !py-1.5 whitespace-nowrap max-[359px]:hidden sm:!px-3.5">Book a demo</ButtonLink>
          </div>
        </div>
      </header>
    </div>
  );
}
