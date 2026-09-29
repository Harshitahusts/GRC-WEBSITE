import type { Status } from "@/lib/content";

const label: Record<Status, string> = {
  pass: "Passing",
  attention: "Needs attention",
  fail: "Failing",
};

const tone: Record<Status, string> = {
  pass: "text-pass border-pass",
  attention: "text-attention border-attention",
  fail: "text-fail border-fail",
};

// A small circular mark, like an auditor's tick in the margin.
export function StatusMark({ status, className = "" }: { status: Status; className?: string }) {
  return (
    <span
      className={`inline-grid size-7 shrink-0 place-items-center rounded-full border-2 ${tone[status]} ${className}`}
      role="img"
      aria-label={label[status]}
      title={label[status]}
    >
      <svg viewBox="0 0 16 16" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        {status === "pass" && <path d="M3.5 8.5l3 3 6-7" />}
        {status === "attention" && <path d="M8 3.5v5.5M8 12.2v.3" />}
        {status === "fail" && <path d="M4.5 4.5l7 7M11.5 4.5l-7 7" />}
      </svg>
    </span>
  );
}

export const statusLabel = label;
