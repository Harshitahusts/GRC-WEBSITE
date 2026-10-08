"use client";

import { useAutoplay } from "@/lib/use-autoplay";
import { Icon } from "./icon";

// A sample customer export being scanned, one column at a time. Each column, once read,
// gets the label the real scanner would give it, and personal data joins the inventory on
// the right. Same rules as the other animations (see useAutoplay): it stops off screen,
// on pause and while a keyboard user is in it; with reduced motion it shows the result.

type Column = {
  name: string;
  values: string[];
  found: string | null; // null: not personal data
  risk?: "high" | "medium";
  note?: string;
};

// Made-up rows, masked the way the scanner stores them (it never keeps raw values).
const columns: Column[] = [
  { name: "order_id", values: ["ORD-1041", "ORD-1042", "ORD-1043"], found: null },
  { name: "full_name", values: ["Neha R.", "Arjun M.", "Kiara S."], found: "Person's name", risk: "medium" },
  { name: "mobile", values: ["98•••••410", "87•••••091", "99•••••305"], found: "Phone number", risk: "medium" },
  { name: "aadhaar_no", values: ["2830 •••• 3185", "6821 •••• 1813", "4417 •••• 2290"], found: "Aadhaar number", risk: "high", note: "checksum valid" },
  { name: "date_of_birth", values: ["2011-04-19", "1987-11-02", "2013-07-30"], found: "Date of birth", risk: "high", note: "2 of 3 under 18" },
  { name: "support_notes", values: ["Invoice on email", "Diagnosed asthma, needs…", "Refund sent"], found: "Health, in free text", risk: "high" },
];

// One step per column, then a few steps resting on the finished scan before it restarts.
const REST = 3;
const STEPS = columns.length + REST;

export function DiscoveryScan() {
  const { index, playing, setPlaying, reduced, hold } = useAutoplay(STEPS, 1500);
  const done = reduced ? columns.length : Math.min(index, columns.length); // columns before `done` are read
  const found = columns.slice(0, done).filter((c) => c.found);


  return (
    <div {...hold} className="card overflow-hidden p-0">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-3">
        <p className="font-semibold">
          customers_export.csv <span className="font-normal text-muted">· 3 of 2,400 records shown</span>
        </p>
        {!reduced && (
          <button type="button" className="btn !py-1" onClick={() => setPlaying((p) => !p)} aria-pressed={!playing}>
            <Icon name={playing ? "pause" : "play"} /> {playing ? "Pause" : "Play"}
          </button>
        )}
      </div>

      <div className="grid lg:grid-cols-[minmax(0,1fr)_17rem]">
        {/* Phones: one line per column, so nothing scrolls sideways. */}
        <ul className="divide-y divide-line md:hidden">
          {columns.map((c, i) => (
            <li key={c.name} className={`scan-col flex items-center justify-between gap-3 px-4 py-2.5 ${i === done ? "is-scanning" : ""}`}>
              <span className="min-w-0">
                <span className="block font-mono text-[0.8rem]">{c.name}</span>
                <span className="block truncate text-[0.85rem] text-muted">{c.values[0]}</span>
              </span>
              {i < done &&
                (c.found ? (
                  <span className={`badge scan-tag shrink-0 ${c.risk === "high" ? "bg-fail-bg text-fail" : "bg-warn-bg text-warn"}`}>{c.found}</span>
                ) : (
                  <span className="badge scan-tag shrink-0 bg-none-bg text-muted">Not personal</span>
                ))}
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          {/* Fixed column widths, so labels appearing don't make the table jump. */}
          <table className="w-full table-fixed border-collapse text-left text-[0.86rem]">
            <colgroup>
              {columns.map((c) => (
                <col key={c.name} className={c.name === "support_notes" ? "" : c.name === "order_id" ? "w-[7rem]" : "w-[8.5rem]"} />
              ))}
            </colgroup>
            <thead>
              <tr>
                {columns.map((c, i) => (
                  <th
                    key={c.name}
                    scope="col"
                    className={`scan-col border-b border-line px-3 py-2.5 align-top font-mono text-[0.8rem] font-medium ${i === done ? "is-scanning" : ""}`}
                  >
                    {c.name}
                    <span className="mt-1.5 block min-h-[1.5rem] font-sans">
                      {i < done &&
                        (c.found ? (
                          <span className={`badge scan-tag ${c.risk === "high" ? "bg-fail-bg text-fail" : "bg-warn-bg text-warn"}`}>{c.found}</span>
                        ) : (
                          <span className="badge scan-tag bg-none-bg text-muted">Not personal</span>
                        ))}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[0, 1, 2].map((r) => (
                <tr key={r} className="border-b border-line last:border-0">
                  {columns.map((c, i) => (
                    <td key={c.name} className={`scan-col truncate px-3 py-2.5 whitespace-nowrap text-fg-2 ${i === done ? "is-scanning" : ""}`}>
                      {c.values[r]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <aside className="border-t border-line bg-surface-2 px-5 py-4 lg:border-t-0 lg:border-l" aria-live="off">
          <p className="font-semibold">Data inventory</p>
          <p className="text-[0.85rem] text-muted">{found.length ? `${found.length} fields to confirm` : "Waiting for the scan"}</p>
          <ul className="mt-3 space-y-2">
            {found.map((c) => (
              <li key={c.name} className="scan-tag flex items-start gap-2 text-[0.88rem]">
                <Icon name={c.risk === "high" ? "alert" : "check"} className={`mt-0.5 size-4 ${c.risk === "high" ? "text-fail" : "text-warn"}`} />
                <span>
                  <strong className="font-semibold">{c.found}</strong>
                  {c.note && <span className="block text-muted">{c.note}</span>}
                </span>
              </li>
            ))}
          </ul>
          {done >= columns.length && (
            <p className="scan-tag mt-4 border-t border-line pt-3 text-[0.85rem] text-fg-2">
              A person confirms each one before it enters the inventory. Children&apos;s data is flagged under Section 9.
            </p>
          )}
        </aside>
      </div>
    </div>
  );
}
