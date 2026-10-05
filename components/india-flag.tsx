// The flag of India, drawn so it shows on every system (Windows shows the 🇮🇳 emoji as "IN").
export function IndiaFlag({ className = "" }: { className?: string }) {
  const spokes = Array.from({ length: 24 }, (_, i) => {
    const a = (i * 15 * Math.PI) / 180;
    return `M15 10 L${(15 + 2.6 * Math.cos(a)).toFixed(2)} ${(10 + 2.6 * Math.sin(a)).toFixed(2)}`;
  }).join(" ");
  return (
    <svg viewBox="0 0 30 20" className={`inline-block h-[0.95em] w-auto rounded-[2px] align-[-0.12em] shadow-[0_0_0_1px_rgba(255,255,255,0.18)] ${className}`} role="img" aria-label="Flag of India">
      <rect width="30" height="20" fill="#fff" />
      <rect width="30" height="6.67" fill="#FF9933" />
      <rect y="13.33" width="30" height="6.67" fill="#138808" />
      <circle cx="15" cy="10" r="2.85" fill="none" stroke="#000080" strokeWidth="0.45" />
      <path d={spokes} stroke="#000080" strokeWidth="0.25" />
      <circle cx="15" cy="10" r="0.5" fill="#000080" />
    </svg>
  );
}
