"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { journey, type LogTone } from "@/lib/content";
import { Icon, type IconName } from "./icon";

// The eight-step journey, played like a run of the agent: each step's activity log
// appears line by line, then the next step starts. It pauses while a keyboard user is
// moving through the steps, while it's off screen, when the visitor presses Pause, and
// for anyone who prefers reduced motion (who see each step's full log at once). Hovering
// doesn't pause it, or it would freeze whenever the mouse rests on it.

const LINE_MS = 1100;
const HOLD_LINES = 1.6; // how long a finished log stays up, in lines

const tones: Record<LogTone, { icon: IconName; className: string; label: string }> = {
  info: { icon: "info", className: "text-[#9fb6dc]", label: "Update" },
  ai: { icon: "spark", className: "text-[#a9c5ff]", label: "AI" },
  pass: { icon: "check", className: "text-[#7fd49b]", label: "Passed" },
  fail: { icon: "alert", className: "text-[#ffab91]", label: "Needs attention" },
  person: { icon: "user", className: "text-[#f5d58a]", label: "Person" },
};

export function AgentJourney() {
  const [step, setStep] = useState(0);
  const [shown, setShown] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [reduced, setReduced] = useState(false);
  const [visible, setVisible] = useState(false);
  const [held, setHeld] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLOListElement>(null);

  const current = journey[step];
  const total = current.log.length + HOLD_LINES;
  const running = playing && !reduced && visible && !held;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // When it pauses, show the step's whole log so it can be read; play resumes after it.
  // Done while rendering (React's pattern for adjusting state when a value changes),
  // not in an effect, so the full log appears without an extra render.
  const [wasRunning, setWasRunning] = useState(running);
  if (running !== wasRunning) {
    setWasRunning(running);
    if (!running && shown < current.log.length) setShown(current.log.length);
  }

  useEffect(() => {
    if (!running) return;
    const t = setTimeout(() => {
      if (shown + 1 >= Math.ceil(total)) {
        setStep((s) => (s + 1) % journey.length);
        setShown(1);
      } else {
        setShown((n) => n + 1);
      }
    }, LINE_MS);
    return () => clearTimeout(t);
  }, [running, shown, total]);

  // On narrow screens the steps are a sideways strip: keep the current one in view.
  useEffect(() => {
    const ol = track.current;
    const li = ol?.children[step] as HTMLElement | undefined;
    if (!ol || !li || ol.scrollWidth <= ol.clientWidth) return;
    const left = li.getBoundingClientRect().left - ol.getBoundingClientRect().left - 16;
    ol.scrollBy({ left, behavior: reduced ? "auto" : "smooth" });
  }, [step, reduced]);

  const choose = useCallback((i: number) => {
    setStep(i);
    setShown(1);
  }, []);

  const lines = running ? Math.min(shown, current.log.length) : current.log.length;
  const progress = reduced || !playing ? 1 : Math.min(1, shown / total);
  const working = running && lines < current.log.length;

  return (
    <div
      ref={box}
      className="journey"
      onFocus={(e) => setHeld(e.target.matches(":focus-visible"))}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setHeld(false);
      }}
    >
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">How GRC Flow works</p>
          <h2 className="mt-2 max-w-2xl text-3xl font-bold text-white sm:text-[2.1rem]">From first sign-in to compliant, in eight steps</h2>
          <p className="mt-3 max-w-2xl text-lg text-night-text">
            The AI drafts and checks. A person decides. Watch one engagement go through, or pick any step.
          </p>
        </div>
        {!reduced && (
          <button type="button" className="btn" onClick={() => setPlaying((p) => !p)} aria-pressed={!playing}>
            <Icon name={playing ? "pause" : "play"} /> {playing ? "Pause" : "Play"}
          </button>
        )}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-start">
        <ol
          ref={track}
          className="journey-track -mx-4 flex snap-x gap-3 overflow-x-auto px-4 pb-2 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-7 lg:gap-y-10 lg:overflow-visible lg:px-0 lg:pb-0"
          aria-label="The eight steps"
        >
          {journey.map((s, i) => {
            const state = i === step ? "active" : i < step ? "done" : "next";
            return (
              <li key={s.title} className={`journey-node relative w-[10.5rem] shrink-0 snap-start lg:w-auto ${orderClass[i]}`} data-arrow={arrows[i]}>
                <button
                  type="button"
                  onClick={() => choose(i)}
                  aria-current={state === "active" ? "step" : undefined}
                  className={`journey-step ${s.gate ? "is-gate" : ""}`}
                  data-state={state}
                >
                  <span className="flex items-center justify-between gap-2">
                    <span className="journey-num">{state === "done" ? <Icon name="check" className="size-4" /> : i + 1}</span>
                    {s.gate && <Icon name="lock" className="size-4 text-[#f5d58a]" />}
                  </span>
                  <span className="mt-2 block font-semibold text-white">{s.title}</span>
                  <span className="mt-0.5 block text-[0.82rem] leading-snug text-night-text">{s.short}</span>
                  <span className="journey-bar" aria-hidden>
                    <span style={{ transform: `scaleX(${state === "active" ? progress : state === "done" ? 1 : 0})`, transitionDuration: state === "active" && running ? `${LINE_MS}ms` : "0ms" }} />
                  </span>
                </button>
              </li>
            );
          })}
        </ol>

        <div className="journey-panel" aria-live="off">
          <p className="text-[0.85rem] font-semibold text-night-eyebrow">
            Step {step + 1} of {journey.length}
            {current.gate && <span className="ml-2 rounded-full bg-[#f5d58a]/15 px-2 py-0.5 text-[#f5d58a]">A person decides</span>}
          </p>
          <h3 className="mt-1 text-2xl font-bold text-white">{current.title}</h3>
          <dl className="mt-4 space-y-3">
            {[
              { k: "You", v: current.you, icon: "user" as const },
              { k: "GRC Flow", v: current.tool, icon: "spark" as const },
              { k: "You get", v: current.get, icon: "check" as const },
            ].map((row) => (
              <div key={row.k} className="grid gap-0.5 sm:grid-cols-[6.5rem_minmax(0,1fr)] sm:gap-3">
                <dt className="flex items-center gap-1.5 text-[0.88rem] font-semibold text-white"><Icon name={row.icon} className="size-4 text-night-check" />{row.k}</dt>
                <dd className="text-night-text">{row.v}</dd>
              </div>
            ))}
          </dl>

          <div className="journey-log mt-5">
            <p className="flex items-center gap-2 border-b border-white/10 px-4 py-2 text-[0.8rem] font-semibold text-night-text">
              <span className={`size-2 rounded-full ${working ? "animate-pulse bg-[#7fd49b]" : "bg-white/30"}`} aria-hidden />
              Agent activity
              <span className="ml-auto font-normal text-white/50">Example client</span>
            </p>
            <ul className="space-y-2 px-4 py-3 text-[0.9rem]">
              {current.log.slice(0, lines).map((l) => {
                const t = tones[l.tone];
                return (
                  <li key={l.text} className="journey-line flex gap-2.5">
                    <Icon name={t.icon} className={`mt-0.5 size-4 ${t.className}`} />
                    <span className="sr-only">{t.label}: </span>
                    <span className="text-[#e3e9f5]">{l.text}</span>
                  </li>
                );
              })}
              {working && (
                <li className="flex items-center gap-2.5 text-white/50" aria-hidden>
                  <Icon name="refresh" className="size-4 animate-spin" /> Working
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Where each step's connector points on wide screens.
const arrows = ["right", "right", "right", "down", "left", "left", "left", "none"];

// Snake layout on wide screens, as in the brief: 1 2 3 4 on the first row, 8 7 6 5 on the second.
const orderClass = ["lg:order-1", "lg:order-2", "lg:order-3", "lg:order-4", "lg:order-8", "lg:order-7", "lg:order-6", "lg:order-5"];
