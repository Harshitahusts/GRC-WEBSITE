import Link from "next/link";
import { nav, site } from "@/lib/site";
import { ButtonLink } from "./buttons";
import { Logo } from "./logo";

export function Header() {
  return (
    <header className="border-b border-rule">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-3 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
          <Logo />
        </Link>
        <nav aria-label="Main" className="order-3 -mx-2 flex w-full gap-1 overflow-x-auto sm:order-none sm:w-auto">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded px-2 py-1.5 text-[0.95rem] text-ink-soft hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <ButtonLink href="/demo" className="ml-auto !px-4 !py-2">
          Book a demo
        </ButtonLink>
      </div>
    </header>
  );
}
