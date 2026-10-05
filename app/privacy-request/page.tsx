import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHead } from "@/components/page-head";
import { PrivacyRequestForm } from "@/components/privacy-request-form";
import { business } from "@/lib/site";

export const metadata: Metadata = {
  title: "Your data rights",
  description: "Ask for a summary, correction or deletion of your personal data, withdraw consent, nominate someone or raise a grievance.",
};

export default function PrivacyRequestPage() {
  return (
    <>
      <PageHead eyebrow="Your data rights" title="Ask about or delete your data">
        <p>Under the DPDP Act you can see, correct or delete the personal data we hold about you, and withdraw consent at any time.</p>
      </PageHead>
      <div className="mx-auto grid max-w-[1240px] gap-10 px-4 py-12 sm:px-8 lg:grid-cols-[minmax(0,1.5fr)_1fr]">
        <div className="card p-6 sm:p-8">
          <Suspense>
            <PrivacyRequestForm />
          </Suspense>
        </div>
        <aside className="space-y-4 text-fg-2">
          <h2 className="text-lg font-bold text-fg">What happens next</h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>We check it&apos;s you, usually by replying to the email you gave.</li>
            <li>We act on the request and tell you what we did.</li>
            <li>We respond as soon as we can, and within 90 days.</li>
          </ol>
          <p>
            Not happy with our answer? Contact our Grievance Officer at{" "}
            <a className="text-accent underline" href={`mailto:${business.grievanceOfficer.email}`}>{business.grievanceOfficer.email}</a>. After that, you can complain to the Data Protection Board of India.
          </p>
        </aside>
      </div>
    </>
  );
}
