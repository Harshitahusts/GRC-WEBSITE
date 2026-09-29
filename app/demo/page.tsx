import type { Metadata } from "next";
import { Suspense } from "react";
import { DemoForm } from "@/components/demo-form";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Book a demo",
  description: "See GRC-Flow on your own tools in a 30-minute call.",
};

export default function DemoPage() {
  return (
    <>
      <PageIntro title="Book a demo">
        <p>In 30 minutes we&apos;ll look at the frameworks you need, connect one of your tools if you like, and show you what passes today.</p>
      </PageIntro>
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <Suspense>
          <DemoForm />
        </Suspense>
      </section>
    </>
  );
}
