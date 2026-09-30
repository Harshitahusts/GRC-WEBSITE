import type { Level, RiskLevel, Stage } from "@/lib/demo-data";
import { Icon, type IconName } from "../icon";

export function Card({ title, aside, children, className = "" }: { title?: string; aside?: React.ReactNode; children: React.ReactNode; className?: string }) {
  return (
    <section className={`card overflow-x-auto p-5 ${className}`}>
      {title && (
        <div className="mb-3.5 flex items-baseline justify-between gap-3">
          <h2 className="text-[1.05rem] font-semibold">{title}</h2>
          {aside}
        </div>
      )}
      {children}
    </section>
  );
}

export function Meter({ value, label }: { value: number; label: string }) {
  return (
    <span className="meter" role="img" aria-label={`${label}: ${value} of 100`}>
      <span style={{ width: `${value}%` }} />
    </span>
  );
}

const stageTone: Record<Stage, string> = {
  Intake: "bg-none-bg text-fg-2",
  "Intake submitted": "bg-info-bg text-info",
  Assessed: "bg-info-bg text-info",
  "In review": "bg-warn-bg text-warn",
  "Ready to deliver": "bg-pass-bg text-pass",
  Delivered: "bg-pass-bg text-pass",
};

export function StageBadge({ stage }: { stage: Stage }) {
  return <span className={`badge badge-dot ${stageTone[stage]}`}>{stage}</span>;
}

const riskTone: Record<RiskLevel, string> = {
  critical: "bg-fail-bg text-fail",
  high: "bg-[#fde9df] text-[#8a3a12]",
  medium: "bg-warn-bg text-warn",
  low: "bg-pass-bg text-pass",
};

export function RiskBadge({ level, score }: { level: RiskLevel; score: number }) {
  return (
    <span className={`badge min-w-9 justify-center ${riskTone[level]}`} title={`${level} risk, score ${score}`}>
      {score}
      <span className="sr-only"> ({level})</span>
    </span>
  );
}

const levelIcon: Record<Level, { icon: IconName; color: string; label: string }> = {
  critical: { icon: "x", color: "text-critical", label: "Critical" },
  serious: { icon: "alert", color: "text-serious", label: "Serious" },
  warning: { icon: "clock", color: "text-warning", label: "To do" },
  good: { icon: "check", color: "text-good", label: "Ready" },
};

export function LevelIcon({ level }: { level: Level }) {
  const l = levelIcon[level];
  return (
    <>
      <Icon name={l.icon} className={`size-5 ${l.color}`} />
      <span className="sr-only">{l.label}</span>
    </>
  );
}

export function Tile({ label, value, sub, tone, children }: { label: string; value: React.ReactNode; sub?: React.ReactNode; tone?: "bad" | "warn" | "hero"; children?: React.ReactNode }) {
  const toneClass =
    tone === "bad"
      ? "border-[color-mix(in_srgb,var(--color-critical)_45%,var(--color-line))] bg-[linear-gradient(160deg,var(--color-fail-bg),var(--color-surface)_70%)]"
      : tone === "warn"
        ? "border-[color-mix(in_srgb,var(--color-warning)_55%,var(--color-line))] bg-[linear-gradient(160deg,var(--color-warn-bg),var(--color-surface)_70%)]"
        : tone === "hero"
          ? "border-[color-mix(in_srgb,var(--color-accent)_25%,var(--color-line))] bg-[linear-gradient(160deg,var(--color-accent-soft),var(--color-surface)_70%)]"
          : "";
  return (
    <div className={`card flex flex-col gap-1 p-4 ${toneClass}`}>
      <p className={`text-[0.72rem] font-[650] tracking-[0.04em] uppercase ${tone === "hero" ? "text-accent" : "text-muted"}`}>{label}</p>
      <p className="text-[1.9rem] leading-[1.1] font-bold tracking-[-0.02em]">{value}</p>
      {sub && <p className="text-[0.82rem] text-muted">{sub}</p>}
      {children}
    </div>
  );
}

export function PageHead({ eyebrow, title, sub, actions }: { eyebrow?: string; title: string; sub?: string; actions?: React.ReactNode }) {
  return (
    <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="text-[1.65rem] leading-tight font-bold">{title}</h1>
        {sub && <p className="mt-0.5 text-muted">{sub}</p>}
      </div>
      {actions && <div className="flex flex-wrap gap-2">{actions}</div>}
    </div>
  );
}
