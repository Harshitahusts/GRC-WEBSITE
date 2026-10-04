"use client";

import { useState } from "react";
import { audienceFlows } from "@/lib/content";
import { site } from "@/lib/site";
import { useAutoplay } from "@/lib/use-autoplay";
import { ButtonLink } from "./buttons";
import { Icon } from "./icon";

// Two flows, one for GRC partners (consultants) and one for businesses. Each step shows a
// document in the app with the details GRC Flow fills in popping in as highlights. Steps
// advance on their own with a progress line under the current one, and pause on hover,
// on focus, off screen, on Pause and for reduced motion.

const STEP_MS = 5200;

export function AudienceFlows() {
  const [tab, setTab] = useState(0);
  const flow = audienceFlows[tab];
  const { index, setIndex, playing, setPlaying, reduced, running, hold } = useAutoplay(flow.steps.length, STEP_MS);
  const step = flow.steps[index];

  function pickTab(i: number) {
    setTab(i);
    setIndex(0);
  }

  return (
    <div {...hold}>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Who it&apos;s for</p>
          <h2 className="mt-2 max-w-2xl text-3xl font-bold sm:text-[2.1rem]">Built for the people who do DPDPA work</h2>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div role="tablist" aria-label="Who you are" className="flex rounded-[9px] border border-line bg-surface p-1 shadow-card">
            {audienceFlows.map((f, i) => (
              <button
                key={f.id}
                id={`tab-${f.id}`}
                role="tab"
                type="button"
                aria-selected={i === tab}
                aria-controls={`panel-${f.id}`}
                onClick={() => pickTab(i)}
                className={`rounded-[7px] px-3.5 py-1.5 font-semibold ${i === tab ? "bg-accent text-white" : "text-fg-2 hover:text-fg"}`}
              >
                {f.tab}
              </button>
            ))}
          </div>
          {!reduced && (
            <button type="button" className="btn" onClick={() => setPlaying((p) => !p)} aria-pressed={!playing}>
              <Icon name={playing ? "pause" : "play"} /> {playing ? "Pause" : "Play"}
            </button>
          )}
        </div>
      </div>
      <p className="mt-3 text-lg text-fg-2">{flow.intro}</p>

      <div id={`panel-${flow.id}`} role="tabpanel" aria-labelledby={`tab-${flow.id}`} className="mt-10 grid items-center gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-10">
        <ol className="lg:self-center">
          {flow.steps.map((s, i) => {
            const on = i === index;
            return (
              <li key={s.label} className="border-b border-line first:border-t">
                <button type="button" onClick={() => setIndex(i)} aria-current={on ? "step" : undefined} className="flow-tab group relative flex w-full items-center gap-3.5 py-4 text-left">
                  <span className={`grid size-8 shrink-0 place-items-center rounded-full border text-[0.9rem] ${on ? "border-fg bg-fg text-white" : "border-line-strong text-muted"}`}>{i + 1}</span>
                  <span className={`text-[1.05rem] ${on ? "font-bold text-fg" : "text-fg-2 group-hover:text-fg"}`}>{s.label}</span>
                  {on && (
                    <span className="flow-progress" aria-hidden>
                      <span key={`${tab}-${index}`} className={running ? "is-running" : reduced || !playing ? "is-full" : ""} style={{ animationDuration: `${STEP_MS}ms` }} />
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ol>

        <div className="flow-device" aria-hidden>
          <span className="flow-spark"><Icon name="spark" className="size-8" /></span>
          <div className="flow-screen">
            <p className="text-[0.82rem] font-semibold tracking-wide text-accent">{step.doc.kind}</p>
            <p className="mt-1 text-[1.6rem] leading-tight font-bold text-fg sm:text-[1.9rem]">{step.doc.title}</p>
            <div className="mt-6 space-y-5" key={`${tab}-${index}`}>
              {[0, 1, 2, 3, 4, 5, 6].map((row) => {
                const chip = row % 2 === 1 ? step.doc.chips[(row - 1) / 2] : undefined;
                return (
                  <div key={row} className="relative h-5">
                    <span className="block h-full rounded-[4px] bg-[#c9d6ea]" style={{ width: `${[92, 100, 86, 100, 94, 100, 72][row]}%` }} />
                    {chip && (
                      <span className="flow-chip" style={{ left: `${[6, 34, 4][(row - 1) / 2]}%`, animationDelay: `${300 + ((row - 1) / 2) * 450}ms` }}>
                        [ {chip} ]
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div aria-live="off">
          <p className="text-sm font-semibold text-muted">Step {index + 1} of {flow.steps.length}</p>
          <h3 className="mt-1 text-[1.9rem] leading-tight font-bold">{step.heading}</h3>
          <p className="mt-3 text-lg text-fg-2">{step.body}</p>
          <p className="sr-only">In the example, GRC Flow fills in: {step.doc.chips.join(", ")}.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/contact">Book a demo</ButtonLink>
            <ButtonLink href={site.appUrl} variant="secondary">Sign in</ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}
