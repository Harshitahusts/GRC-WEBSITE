// Two ticks joined into one stroke: a check that carries on to the next.
export function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 32 32" className="size-7" aria-hidden>
        <rect width="32" height="32" rx="7" className="fill-ink" />
        <path d="M6 16.5l4 4 6-8 4 5 6-8" fill="none" stroke="#f2f4ef" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="font-display text-[1.3rem] font-bold tracking-[-0.02em]" style={{ fontVariationSettings: '"wdth" 85' }}>
        GRC-Flow
      </span>
    </span>
  );
}
