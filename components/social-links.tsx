import { social, type SocialKey } from "@/lib/site";

// Brand marks for the footer. X and YouTube are the official shapes
// from Simple Icons (CC0). LinkedIn's mark isn't in that set, so it's drawn here from a
// rounded square, a dot and two bars.
const marks: Record<SocialKey, React.ReactNode> = {
  linkedin: (
    <>
      <rect x="0" y="0" width="24" height="24" rx="3.5" />
      <g fill="var(--color-side)">
        <circle cx="6.9" cy="6.8" r="1.85" />
        <rect x="5.3" y="9.6" width="3.2" height="9.2" />
        <path d="M10.6 9.6h3.05v1.3c.5-.85 1.6-1.55 3.05-1.55 2.6 0 3.4 1.65 3.4 4.2v5.25h-3.2v-4.65c0-1.15-.25-2.15-1.5-2.15s-1.6 1-1.6 2.2v4.6h-3.2z" />
      </g>
    </>
  ),
  x: <path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z" />,
  youtube: <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />,
};

// Every account is shown. One without a URL in lib/site.ts yet is a faded, unclickable
// icon marked "coming soon", so the footer never has a dead link.
export function SocialLinks({ className = "" }: { className?: string }) {
  const tile = "grid size-8 place-items-center rounded-[8px] border border-[#2c3038]";
  const icon = (key: SocialKey) => (
    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
      {marks[key]}
    </svg>
  );
  return (
    <ul className={`flex flex-wrap gap-1.5 ${className}`} aria-label="GRC Flow on social media">
      {social.map((s) => (
        <li key={s.key}>
          {s.href ? (
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GRC Flow on ${s.name}`}
              title={s.name}
              className={`${tile} text-side-text hover:border-side-muted hover:text-white`}
            >
              {icon(s.key)}
            </a>
          ) : (
            <span role="img" aria-label={`GRC Flow on ${s.name}: coming soon`} title={`${s.name}: coming soon`} className={`${tile} text-side-muted`}>
              {icon(s.key)}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
