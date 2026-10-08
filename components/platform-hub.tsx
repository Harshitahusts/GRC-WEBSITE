"use client";

import { hub, type Stage } from "@/lib/content";
import { useAutoplay } from "@/lib/use-autoplay";
import { Icon } from "./icon";

// Modules on the left feed one cycle (Assess, Fix, Document, Prove) in the middle, which
// produces the results on the right. The highlighted stage moves round the cycle, and the
// modules that feed it light up with a pulse along their connector.

const W = 1200;
const H = 620;
const C = { x: 600, y: 310 };
const RING = 196;
const ORBIT = 112;
const NODE = 50;
const BOX_W = 280;

const angle: Record<Stage, number> = { Assess: -135, Fix: -45, Document: 45, Prove: 135 };
const rad = (d: number) => (d * Math.PI) / 180;
const onOrbit = (d: number, r = ORBIT) => ({ x: C.x + r * Math.cos(rad(d)), y: C.y + r * Math.sin(rad(d)) });
const ringX = (y: number, side: -1 | 1) => C.x + side * Math.sqrt(RING * RING - (y - C.y) ** 2);

const left = hub.modules.map((m, i) => {
  const y = 50 + i * 104;
  const ty = C.y + (y - C.y) * 0.55;
  const tx = ringX(ty, -1);
  const mid = (BOX_W + tx) / 2;
  return { ...m, y, d: `M${BOX_W},${y} C${mid},${y} ${mid},${ty} ${tx},${ty}` };
});

const right = hub.outcomes.map((name, i) => {
  const y = 150 + i * 160;
  const sy = C.y + (y - C.y) * 0.6;
  const sx = ringX(sy, 1);
  const x = W - BOX_W;
  const mid = (sx + x) / 2;
  return { name, y, d: `M${sx},${sy} C${mid},${sy} ${mid},${y} ${x},${y}` };
});

const arcs = hub.stages.map((s, i) => {
  const next = hub.stages[(i + 1) % hub.stages.length];
  const a = onOrbit(angle[s.name] + 33);
  const b = onOrbit(angle[next.name] - 33 + (i === hub.stages.length - 1 ? 360 : 0));
  return { to: next.name, d: `M${a.x},${a.y} A${ORBIT},${ORBIT} 0 0 1 ${b.x},${b.y}` };
});

export function PlatformHub() {
  const { index, setIndex, playing, setPlaying, reduced, running, hold } = useAutoplay(hub.stages.length, 2600);
  const active = hub.stages[index];

  return (
    <div {...hold}>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">The platform</p>
          <h2 className="mt-2 max-w-2xl text-3xl font-bold sm:text-[2.1rem]">One workspace for the whole DPDP job</h2>
          <p className="mt-3 max-w-2xl text-lg text-fg-2">
            Each part of GRC Flow feeds the same cycle, per client. What comes out is a report you can deliver, proof you can show and a system that keeps you compliant.
          </p>
        </div>
        {!reduced && (
          <button type="button" className="btn" onClick={() => setPlaying((p) => !p)} aria-pressed={!playing}>
            <Icon name={playing ? "pause" : "play"} /> {playing ? "Pause" : "Play"}
          </button>
        )}
      </div>

      {/* Wide screens: the diagram. */}
      <svg viewBox={`0 0 ${W} ${H}`} className={`hub mt-10 hidden w-full lg:block ${running ? "is-running" : ""}`} role="img" aria-labelledby="hub-title hub-desc">
        <title id="hub-title">How GRC Flow fits together</title>
        <desc id="hub-desc">
          {`${hub.modules.map((m) => m.name).join(", ")} feed a cycle of ${hub.stages.map((s) => s.name).join(", ")}, which produces: ${hub.outcomes.join(", ")}.`}
        </desc>
        <defs>
          <marker id="hub-arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="currentColor" />
          </marker>
        </defs>

        {left.map((m) => {
          const on = m.stage === active.name;
          return (
            <g key={m.name} className={`hub-link ${on ? "is-on" : ""}`}>
              <path d={m.d} className="hub-wire" />
              {on && <path d={m.d} pathLength={100} className="hub-pulse" />}
            </g>
          );
        })}
        {right.map((o, i) => (
          <g key={o.name} className="hub-link is-out">
            <path d={o.d} className="hub-wire" />
            <path d={o.d} pathLength={100} className="hub-pulse" style={{ animationDelay: `${i * 0.6}s` }} />
            <circle cx={W - BOX_W} cy={o.y} r={6} className="hub-dot" />
          </g>
        ))}

        <circle cx={C.x} cy={C.y} r={RING} className="hub-ring" />
        <circle cx={C.x} cy={C.y} r={RING - 22} className="hub-ring-inner" />

        {arcs.map((a) => (
          <path key={a.d} d={a.d} className={`hub-arc ${a.to === active.name ? "is-on" : ""}`} markerEnd="url(#hub-arrow)" />
        ))}

        {hub.stages.map((s, i) => {
          const p = onOrbit(angle[s.name]);
          const on = s.name === active.name;
          return (
            <g key={s.name} className={`hub-node ${on ? "is-on" : ""}`} onClick={() => setIndex(i)}>
              <circle cx={p.x} cy={p.y} r={NODE} />
              <text x={p.x} y={p.y} dy="0.35em" textAnchor="middle">{s.name}</text>
            </g>
          );
        })}

        {left.map((m) => (
          <g key={m.name} className={`hub-box ${m.stage === active.name ? "is-on" : ""}`}>
            <rect x={0} y={m.y - 31} width={BOX_W} height={62} rx={12} />
            <text x={BOX_W / 2} y={m.y} dy="0.35em" textAnchor="middle">{m.name}</text>
          </g>
        ))}
        {right.map((o) => (
          <g key={o.name} className="hub-box is-out">
            <rect x={W - BOX_W} y={o.y - 36} width={BOX_W} height={72} rx={12} />
            <text x={W - BOX_W / 2} y={o.y} dy="0.35em" textAnchor="middle">{o.name}</text>
          </g>
        ))}
      </svg>

      {/* Narrow screens: the same story, stacked. */}
      <div className="mt-8 space-y-4 lg:hidden">
        <ul className="flex flex-wrap gap-2" aria-label="Parts of GRC Flow">
          {hub.modules.map((m) => (
            <li key={m.name} className={`badge !px-3 !py-1 !text-[0.85rem] ${m.stage === active.name ? "!bg-accent-soft !text-info" : "!bg-surface"} border border-line`}>{m.name}</li>
          ))}
        </ul>
        <ol className="grid grid-cols-2 gap-2" aria-label="The cycle">
          {hub.stages.map((s, i) => (
            <li key={s.name}>
              <button type="button" onClick={() => setIndex(i)} className={`w-full rounded-[10px] px-3 py-3 text-left font-semibold ${s.name === active.name ? "bg-accent text-white" : "bg-[#15233f] text-white/80"}`}>
                {i + 1}. {s.name}
              </button>
            </li>
          ))}
        </ol>
        <ul className="flex flex-wrap gap-2" aria-label="What you get">
          {hub.outcomes.map((o) => (
            <li key={o} className="flex items-center gap-1.5 font-semibold"><Icon name="check" className="size-4 text-good" />{o}</li>
          ))}
        </ul>
      </div>

      <p className="mx-auto mt-6 max-w-2xl text-center text-fg-2" aria-live="off">
        <strong className="text-fg">{active.name}.</strong> {active.detail}
      </p>
    </div>
  );
}
