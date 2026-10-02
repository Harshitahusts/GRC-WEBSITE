"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "./icon";

// The DPDP Act's main duties apply from 13 May 2027 (DPDP Rules, 2025).
// Midnight in India Standard Time (Asia/Kolkata, UTC+05:30), so every visitor
// counts down to the same instant whatever their own time zone.
export const DPDP_DEADLINE = new Date("2027-05-13T00:00:00+05:30");

type Left = { days: number; hours: number; minutes: number; seconds: number; done: boolean };

function timeLeft(now: number): Left {
  const ms = Math.max(0, DPDP_DEADLINE.getTime() - now);
  const s = Math.floor(ms / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
    done: ms === 0,
  };
}

// Ticks once a second, on the second. Null until mounted, so the static HTML
// never shows a stale count from build time.
function useCountdown() {
  const [left, setLeft] = useState<Left | null>(null);
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      const now = Date.now();
      setLeft(timeLeft(now));
      timer = setTimeout(tick, 1000 - (now % 1000));
    };
    tick();
    return () => clearTimeout(timer);
  }, []);
  return left;
}

const pad = (n: number) => String(n).padStart(2, "0");

function summary(l: Left) {
  return `${l.days} days, ${l.hours} hours and ${l.minutes} minutes until the DPDP Act's main duties apply on 13 May 2027`;
}

function LiveDot() {
  return (
    <span className="relative flex size-2.5" aria-hidden>
      <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#ff6b6b] opacity-75 motion-reduce:animate-none" />
      <span className="relative inline-flex size-2.5 rounded-full bg-[#ff6b6b]" />
    </span>
  );
}

/** Large clock for the homepage hero. */
export function DeadlineClock() {
  const left = useCountdown();
  const units = left
    ? [
        { v: String(left.days), label: "Days" },
        { v: pad(left.hours), label: "Hours" },
        { v: pad(left.minutes), label: "Minutes" },
        { v: pad(left.seconds), label: "Seconds" },
      ]
    : ["Days", "Hours", "Minutes", "Seconds"].map((label) => ({ v: "--", label }));

  if (left?.done) {
    return (
      <div className="rounded-xl border border-white/15 bg-white/[0.06] p-5 text-white">
        <p className="flex items-center gap-2 font-semibold"><Icon name="alert" className="size-5 text-warning" /> The DPDP Act&apos;s main duties now apply.</p>
        <p className="mt-1 text-night-text">Notice, consent, security, breach reporting, erasure, children&apos;s data and Data Principal rights are enforceable.</p>
      </div>
    );
  }

  return (
    <div
      role="timer"
      aria-label={left ? summary(left) : "Countdown to 13 May 2027"}
      className="rounded-xl border border-white/15 bg-[rgba(8,12,24,0.55)] p-4 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)] sm:p-5"
    >
      <p className="flex items-center gap-2.5 text-[0.82rem] font-semibold tracking-[0.06em] text-[#ffb4a8] uppercase">
        <LiveDot />
        <span>Time left to comply with the DPDP Act</span>
      </p>
      <div className="mt-3 grid grid-cols-4 gap-2 sm:gap-3" aria-hidden>
        {units.map((u) => (
          <div key={u.label} className="rounded-lg border border-white/10 bg-white/[0.06] px-1 py-2.5 text-center sm:py-3">
            <span className="block text-[1.9rem] leading-none font-bold text-white tabular-nums sm:text-[2.6rem]">{u.v}</span>
            <span className="mt-1.5 block text-[0.7rem] font-semibold tracking-[0.06em] text-night-text uppercase sm:text-[0.74rem]">{u.label}</span>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[0.85rem] text-night-text">
        Until the main duties apply on <strong className="text-white">13 May 2027, 00:00 IST</strong>. After that the Data Protection Board can impose penalties of up to ₹250 crore.
      </p>
    </div>
  );
}

/** Thin strip above the header on every page except the live demo. */
export function DeadlineStrip() {
  const left = useCountdown();
  const path = usePathname();
  if (path.startsWith("/demo")) return null;

  return (
    <aside aria-label="DPDP Act deadline" className="bg-[#2a0f12] text-[#ffd9d3]">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-1.5 text-[0.86rem] sm:justify-between sm:px-8">
        <p className="flex items-center gap-2" role="timer" aria-label={left && !left.done ? summary(left) : "DPDP Act deadline: 13 May 2027"}>
          <LiveDot />
          {left?.done ? (
            <span><strong className="text-white">The DPDP Act&apos;s main duties now apply.</strong></span>
          ) : (
            <span aria-hidden>
              <span className="hidden sm:inline">DPDP Act deadline, 13 May 2027: </span>
              <strong className="font-semibold text-white tabular-nums">
                {left ? `${left.days}d ${pad(left.hours)}h ${pad(left.minutes)}m ${pad(left.seconds)}s` : "--d --h --m --s"}
              </strong>{" "}
              left
            </span>
          )}
        </p>
        <Link href="/contact" className="font-semibold text-white underline decoration-white/40 underline-offset-2 hover:decoration-white">
          Book a demo
        </Link>
      </div>
    </aside>
  );
}
