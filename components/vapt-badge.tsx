import { site } from "@/lib/site";

// "Security tested" mark. Wording stays factual: a VAPT we ran (Oct 2026), all findings
// fixed. Not a certification or a third-party audit; don't call it one.
export function VaptBadge({ tone = "light", className = "" }: { tone?: "light" | "dark"; className?: string }) {
  const colors = tone === "dark" ? "border-[#2c6b44] bg-[#12301e] text-[#9be3b4]" : "border-[#9fd8b2] bg-[#e2f5e8] text-[#157a3c]";
  return (
    <span title="Vulnerability assessment and penetration test. All findings fixed." className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[0.82rem] font-semibold ${colors} ${className}`}>
      <svg viewBox="0 0 24 24" className="size-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
      VAPT tested · {site.vapt.date}
    </span>
  );
}
