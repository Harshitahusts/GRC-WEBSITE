import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CookieConsent } from "@/components/cookie-consent";
import { JsonLd } from "@/components/json-ld";
import { business, site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name}: ${site.tagline}`, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: {
    siteName: site.name,
    type: "website",
    locale: "en_IN",
    images: [{ url: "/screens/dashboard.png", alt: `The ${site.name} dashboard` }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-10 focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-white">
          Skip to content
        </a>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": `${site.url}/#organization`,
                name: site.name,
                legalName: business.legalName,
                url: site.url,
                logo: `${site.url}/icon.svg`,
                email: site.email,
                address: { "@type": "PostalAddress", addressLocality: "Pune", addressRegion: "Maharashtra", addressCountry: "IN" },
              },
              {
                "@type": "WebSite",
                "@id": `${site.url}/#website`,
                name: site.name,
                url: site.url,
                inLanguage: "en-IN",
                publisher: { "@id": `${site.url}/#organization` },
              },
              {
                "@type": "SoftwareApplication",
                name: site.name,
                url: site.url,
                applicationCategory: "BusinessApplication",
                applicationSubCategory: "Governance, risk and compliance (GRC) software for India's DPDP Act",
                operatingSystem: "Web",
                description: site.description,
                publisher: { "@id": `${site.url}/#organization` },
              },
            ],
          }}
        />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
