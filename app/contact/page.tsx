import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Book a Demo of GRC-Flow DPDP Compliance Software",
  description: "See a DPDPA engagement run end to end in a 30-minute call.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto grid max-w-[1240px] gap-10 px-4 py-12 sm:px-8 md:grid-cols-[1fr_1.3fr] md:py-16">
      <div>
        <p className="eyebrow">Book a demo</p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">See an engagement run end to end</h1>
        <p className="mt-3 text-lg text-fg-2">
          In 30 minutes we take a sample client from intake to delivery, and show the risk register, data-flow map and GRC Analyst on the way.
        </p>
        <p className="mt-6 text-fg-2">
          Already a customer? <a href={site.appUrl} className="font-semibold text-accent underline-offset-2 hover:underline">Sign in to GRC Flow</a>.
        </p>
      </div>
      <div className="card p-6 sm:p-8">
        <Suspense>
          <ContactForm />
        </Suspense>
      </div>
    </div>
  );
}
