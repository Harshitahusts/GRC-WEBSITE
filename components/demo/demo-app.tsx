"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { heroPoints } from "@/lib/content";
import type { View } from "@/lib/demo-data";
import { site } from "@/lib/site";
import { Icon, type IconName } from "../icon";
import { Logo } from "../logo";
import { Dashboard } from "./dashboard";
import { AnalystView, ConnectorsView, DataFlowsView, EngagementView, RisksView } from "./views";

export const demoNav: { view: View; label: string; icon: IconName; group?: string }[] = [
  { view: "dashboard", label: "Dashboard", icon: "home" },
  { view: "engagement", label: "Engagements", icon: "briefcase" },
  { view: "risks", label: "Risk register", icon: "alert" },
  { view: "analyst", label: "GRC Analyst", icon: "spark" },
  { view: "dataflows", label: "Data flows", icon: "flow", group: "Evidence" },
  { view: "connectors", label: "Connectors", icon: "plug" },
];

const views: Record<View, (go: (v: View) => void) => React.ReactNode> = {
  dashboard: (go) => <Dashboard go={go} />,
  engagement: () => <EngagementView />,
  risks: () => <RisksView />,
  analyst: () => <AnalystView />,
  dataflows: () => <DataFlowsView />,
  connectors: () => <ConnectorsView />,
};

export function Sidebar({ current, go, desktop = false }: { current: View; go?: (v: View) => void; desktop?: boolean }) {
  // `desktop` forces the wide layout (used by the scaled homepage preview);
  // otherwise the sidebar collapses to a top bar below the lg breakpoint.
  const d = (always: string, responsive: string) => (desktop ? always : responsive);
  return (
    <aside
      className={`bg-side text-side-text ${d(
        "flex h-full flex-col gap-4 px-3 py-4",
        "flex flex-wrap items-center gap-x-3 gap-y-1 px-3 py-2 lg:sticky lg:top-0 lg:h-screen lg:flex-col lg:flex-nowrap lg:items-stretch lg:gap-4 lg:py-4",
      )}`}
    >
      <span className={`px-1.5 ${d("pb-2", "lg:pb-2")}`}><Logo tone="dark" /></span>
      <nav aria-label="Demo" className={d("flex flex-1 flex-col gap-0.5", "order-3 flex w-full gap-0.5 overflow-x-auto lg:order-none lg:flex-1 lg:flex-col")}>
        {demoNav.map((n) => (
          <div key={n.view} className="contents">
            {n.group && <p className={`mt-4 mb-1 px-2.5 text-[0.68rem] font-bold tracking-[0.09em] text-side-muted uppercase ${d("block", "hidden lg:block")}`}>{n.group}</p>}
            <button
              type="button"
              onClick={go ? () => go(n.view) : undefined}
              tabIndex={go ? 0 : -1}
              aria-current={current === n.view ? "page" : undefined}
              className={`flex items-center gap-2.5 rounded-[7px] px-2.5 py-2 text-left font-medium whitespace-nowrap ${
                current === n.view
                  ? `bg-side-active text-white ${d("shadow-[inset_3px_0_0_#5b9bf0]", "shadow-[inset_0_-2px_0_#5b9bf0] lg:shadow-[inset_3px_0_0_#5b9bf0]")}`
                  : "hover:bg-side-hover hover:text-white"
              }`}
            >
              <Icon name={n.icon} className={`size-[18px] ${current === n.view ? "text-[#8fb8f7]" : "text-side-muted"}`} />
              {n.label}
            </button>
          </div>
        ))}
      </nav>
      <div className={`flex items-center gap-2 ${d("border-t border-[#262930] px-1.5 pt-3", "ml-auto lg:ml-0 lg:border-t lg:border-[#262930] lg:px-1.5 lg:pt-3")}`}>
        <span className="grid size-[30px] place-items-center rounded-full bg-[#2f5bd3] text-[0.85rem] font-bold text-white" aria-hidden>D</span>
        <span className={`font-semibold text-white ${d("inline", "hidden lg:inline")}`}>demo</span>
      </div>
    </aside>
  );
}

function SignIn({ onEnter }: { onEnter: () => void }) {
  return (
    <div className="grid min-h-screen lg:grid-cols-[1.1fr_1fr]">
      <section className="night flex flex-col justify-between gap-8 p-6 sm:p-12">
        <Link href="/" aria-label={`Back to ${site.name}`}><Logo tone="dark" /></Link>
        <div>
          <p className="eyebrow">India&apos;s DPDP Act 2023 &amp; Rules 2025</p>
          <h1 className="mt-3 max-w-[26rem] text-[1.6rem] leading-tight font-bold text-white sm:text-[2rem]">
            DPDPA readiness assessments, drafted in hours, verified by you.
          </h1>
          <ul className="mt-5 hidden max-w-[28rem] space-y-3 sm:block">
            {heroPoints.map((p) => (
              <li key={p.lead} className="flex gap-2.5 text-night-text">
                <Icon name="check" className="mt-0.5 size-5 text-night-check" />
                <span><strong className="font-[650] text-white">{p.lead}</strong> {p.rest}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="flex items-center gap-2 text-[0.85rem] text-[#8e9ab3]"><Icon name="shield" /> Sample workspace. No real client data.</p>
      </section>
      <div className="grid place-items-center bg-canvas px-4 py-10">
        <div className="card w-full max-w-[380px] p-7 shadow-float">
          <h2 className="text-[1.4rem] font-bold">Sign in</h2>
          <p className="text-muted">Welcome to the live demo.</p>
          <p className="mt-4 rounded-[7px] bg-info-bg px-3 py-2 text-[0.88rem] text-info" role="note">
            <strong>Demo workspace</strong> with six sample clients. Nothing you do here is saved.
          </p>
          <div className="mt-4 space-y-2">
            {["Continue with Google", "Continue with Microsoft"].map((s) => (
              <button key={s} type="button" disabled className="btn w-full !cursor-default opacity-80">
                {s} <span className="soon">Soon</span>
              </button>
            ))}
          </div>
          <p className="my-4 flex items-center gap-3 text-[0.85rem] text-muted before:h-px before:flex-1 before:bg-line after:h-px after:flex-1 after:bg-line">or with your username</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onEnter();
            }}
          >
            <label htmlFor="demo-user" className="text-sm font-semibold">Username</label>
            <input id="demo-user" readOnly value="demo" className="mt-1.5 mb-3 w-full rounded-[7px] border border-line-strong bg-surface-2 px-3 py-2" />
            <label htmlFor="demo-pass" className="text-sm font-semibold">Password</label>
            <input id="demo-pass" readOnly type="password" value="grc-demo-2026" className="mt-1.5 mb-4 w-full rounded-[7px] border border-line-strong bg-surface-2 px-3 py-2" />
            <button type="submit" autoFocus className="btn btn-primary w-full">Sign in to the demo</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export function DemoApp() {
  const [signedIn, setSignedIn] = useState(false);
  const [view, setView] = useState<View>("dashboard");

  // Keep the current screen in the URL hash so the back button works.
  useEffect(() => {
    const read = () => {
      const h = window.location.hash.slice(1) as View;
      if (h && h in views) {
        setSignedIn(true);
        setView(h);
      }
    };
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, []);

  function go(v: View) {
    setSignedIn(true);
    setView(v);
    if (window.location.hash !== `#${v}`) window.location.hash = v;
    window.scrollTo({ top: 0 });
  }

  if (!signedIn) return <SignIn onEnter={() => go("dashboard")} />;

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[236px_minmax(0,1fr)] lg:bg-[linear-gradient(to_right,var(--color-side)_236px,var(--color-canvas)_236px)]">
      <Sidebar current={view} go={go} />
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-line bg-info-bg px-4 py-2 text-[0.88rem] text-info sm:px-8" role="status">
          <Icon name="info" className="hidden sm:block" />
          <span className="min-w-0 flex-[1_1_14rem]"><strong>Live demo.</strong> Sample clients and data. Nothing here is real or saved.</span>
          <Link href="/contact" className="btn btn-primary !px-3 !py-1 text-[0.82rem]">Book a demo</Link>
          <Link href="/" className="font-semibold hover:underline">Back to site</Link>
        </div>
        <main className="@container mx-auto max-w-[1240px] px-4 py-6 sm:px-8 sm:py-7">{views[view](go)}</main>
      </div>
    </div>
  );
}
