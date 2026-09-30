"use client";

import { useEffect, useRef, useState } from "react";
import { Dashboard } from "./dashboard";
import { Sidebar } from "./demo-app";

const WIDTH = 1280;

// A scaled, non-interactive render of the real demo dashboard, used on the homepage.
export function DashboardPreview() {
  const box = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setScale(entry.contentRect.width / WIDTH));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="overflow-hidden rounded-xl border border-white/15 bg-[#0b0e16] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2" aria-hidden>
        <span className="size-2.5 rounded-full bg-white/20" />
        <span className="size-2.5 rounded-full bg-white/20" />
        <span className="size-2.5 rounded-full bg-white/20" />
        <span className="ml-3 rounded bg-white/10 px-3 py-0.5 text-[0.72rem] text-white/60">Dashboard</span>
      </div>
      <div ref={box} className="relative overflow-hidden" style={{ height: 720 * scale }} aria-hidden inert>
        <div className="light-ui absolute top-0 left-0 origin-top-left bg-canvas" style={{ width: WIDTH, transform: `scale(${scale})` }}>
          <div className="grid grid-cols-[236px_minmax(0,1fr)]">
            <Sidebar current="dashboard" desktop />
            <div className="@container p-7">
              <Dashboard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
