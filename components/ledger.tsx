import type { Check } from "@/lib/content";
import { StatusMark } from "./status";

// The hero: a sheet of live checks, each filed against every clause it satisfies.
export function Ledger({ checks }: { checks: Check[] }) {
  const clauses = new Set(checks.filter((c) => c.status === "pass").flatMap((c) => c.clauses));
  const count = (s: Check["status"]) => checks.filter((c) => c.status === s).length;

  return (
    <figure className="overflow-hidden rounded-lg border border-rule bg-white/70 shadow-[0_1px_0_#c9d2c6,0_18px_40px_-24px_rgba(21,35,63,0.35)]">
      <figcaption className="sr-only">Example of GRC-Flow checks and the framework clauses each one counts toward</figcaption>
      <div className="hidden grid-cols-[2.25rem_minmax(0,1.5fr)_minmax(0,0.8fr)_minmax(0,1.7fr)] gap-4 border-b border-rule bg-paper-deep/60 px-5 py-2.5 text-sm text-ink-soft md:grid">
        <span />
        <span>Check</span>
        <span>Evidence from</span>
        <span>Counts toward</span>
      </div>
      <ol>
        {checks.map((check, i) => (
          <li
            key={check.title}
            style={{ "--i": i } as React.CSSProperties}
            className="ledger-row grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-4 gap-y-2 border-b border-rule/70 px-5 py-4 last:border-b-0 md:grid-cols-[2.25rem_minmax(0,1.5fr)_minmax(0,0.8fr)_minmax(0,1.7fr)] md:items-center"
          >
            <StatusMark status={check.status} className="ledger-stamp row-span-3 md:row-span-1" />
            <div>
              <p className="font-medium leading-snug">{check.title}</p>
              {check.note && (
                <p className={`mt-0.5 text-sm ${check.status === "fail" ? "text-fail" : "text-attention"}`}>{check.note}</p>
              )}
            </div>
            <p className="text-sm text-ink-soft">{check.source}</p>
            <ul className="flex flex-wrap gap-1.5" aria-label="Counts toward">
              {check.clauses.map((clause) => (
                <li
                  key={clause}
                  className={`rounded border px-1.5 py-0.5 text-[0.8rem] leading-tight ${
                    check.status === "pass" ? "border-pass/40 bg-pass/[0.06] text-ink" : "border-dashed border-rule text-ink-soft"
                  }`}
                >
                  {clause}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
      <div className="flex flex-wrap gap-x-6 gap-y-1 border-t border-rule bg-paper-deep/60 px-5 py-3 text-sm">
        <span className="text-pass">{count("pass")} passing</span>
        <span className="text-attention">{count("attention")} needs attention</span>
        <span className="text-fail">{count("fail")} failing</span>
        <span className="text-ink-soft md:ml-auto">{clauses.size} framework clauses evidenced by {count("pass")} passing checks</span>
      </div>
    </figure>
  );
}
