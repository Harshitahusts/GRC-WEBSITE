import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { DeadlineStrip } from "@/components/deadline-countdown";
import { Footer } from "@/components/footer";
import { CookieConsent } from "@/components/cookie-consent";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name}: ${site.tagline}`, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: { siteName: site.name, type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-10 focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-white">
          Skip to content
        </a>
        <DeadlineStrip />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
