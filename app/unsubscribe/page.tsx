import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHead } from "@/components/page-head";
import { PrivacyRequestForm } from "@/components/privacy-request-form";

export const metadata: Metadata = {
  title: "Unsubscribe",
  description: "Stop receiving product update emails.",
  robots: { index: false },
};

// Every product update email links here, e.g. /unsubscribe?email=name%40company.com
export default function UnsubscribePage() {
  return (
    <>
      <PageHead eyebrow="Email preferences" title="Unsubscribe from product updates">
        <p>One step, no sign-in. You&apos;ll still get replies to anything you ask us directly.</p>
      </PageHead>
      <div className="mx-auto max-w-xl px-4 py-12 sm:px-8">
        <div className="card p-6 sm:p-8">
          <Suspense>
            <PrivacyRequestForm fixed="unsubscribe" />
          </Suspense>
        </div>
      </div>
    </>
  );
}
