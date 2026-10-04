"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { site } from "@/lib/site";
import { Icon } from "../icon";
import { Logo } from "../logo";
import { GuidedTour } from "./demo-app";

type Mode = "app" | "tour";
type Reach = "checking" | "up" | "down";

// The app's address. Without NEXT_PUBLIC_APP_DEMO_URL, reuse the host name the
// site was opened on so the app's SameSite=strict session cookie works in the frame.
// The "Real app" tab: when a hosted demo address is set, or when the site runs on this
// computer or the office network next to start-demo.bat. On the live site without a
// hosted demo, the page is the guided tour only.
function appAvailable() {
  if (site.appDemoUrl) return true;
  const h = window.location.hostname;
  return h === "localhost" || h.endsWith(".localhost") || h.endsWith(".local") || /^(127\.|10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.)/.test(h);
}

function appUrl() {
  if (site.appDemoUrl) return site.appDemoUrl.replace(/\/$/, "");
  return `${window.location.protocol}//${window.location.hostname}:${site.appDemoPort}`;
}

export function DemoPage() {
  const [hasApp, setHasApp] = useState(false);
  const [mode, setMode] = useState<Mode>("tour");
  const [url, setUrl] = useState("");
  const [reach, setReach] = useState<Reach>("checking");

  const check = useCallback(async () => {
    const u = appUrl();
    setUrl(u);
    setReach("checking");
    try {
      // An opaque no-cors response still proves the server answered.
      await fetch(`${u}/login`, { mode: "no-cors", cache: "no-store", signal: AbortSignal.timeout(4000) });
      setReach("up");
    } catch {
      setReach("down");
    }
  }, []);

  useEffect(() => {
    if (!appAvailable()) return;
    setHasApp(true);
    // Deep links into the guided tour (e.g. /demo#analyst) open the tour.
    const follow = () => setMode(window.location.hash.length > 1 ? "tour" : "app");
    follow();
    const onHash = () => {
      if (window.location.hash.length > 1) setMode("tour");
    };
    window.addEventListener("hashchange", onHash);
    check();
    return () => window.removeEventListener("hashchange", onHash);
  }, [check]);

  function choose(m: Mode) {
    setMode(m);
    if (m === "app" && window.location.hash) history.replaceState(null, "", window.location.pathname);
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 flex flex-wrap items-center lg:h-14 lg:flex-nowrap gap-x-4 gap-y-2 bg-side px-4 py-2 text-side-text sm:px-6">
        <Link href="/" aria-label={`Back to ${site.name}`}><Logo tone="dark" /></Link>
        {hasApp && (
          <div role="tablist" aria-label="Demo type" className="flex rounded-[8px] bg-side-hover p-0.5">
            {(
              [
                ["app", "Real app"],
                ["tour", "Guided tour"],
              ] as const
            ).map(([m, label]) => (
              <button
                key={m}
                role="tab"
                type="button"
                aria-selected={mode === m}
                onClick={() => choose(m)}
                className={`rounded-[6px] px-3 py-1 text-[0.88rem] font-semibold ${mode === m ? "bg-side-active text-white shadow-[inset_0_-2px_0_#5b9bf0]" : "hover:text-white"}`}
              >
                {label}
              </button>
            ))}
          </div>
        )}
        {mode === "app" && reach === "up" && (
          <p className="text-[0.85rem] text-side-muted">
            Sign in as <code className="rounded bg-side-hover px-1.5 text-white">{site.appDemoLogin.user}</code> /{" "}
            <code className="rounded bg-side-hover px-1.5 text-white">{site.appDemoLogin.password}</code>
          </p>
        )}
        <div className="ml-auto flex items-center gap-3 text-[0.88rem]">
          {mode === "app" && reach === "up" && (
            <a href={url} target="_blank" rel="noreferrer" className="font-semibold hover:text-white">Open in new tab</a>
          )}
          {!hasApp && <a href={site.appUrl} className="font-semibold hover:text-white">Sign in</a>}
          <Link href="/contact" className="btn btn-primary !px-3 !py-1 text-[0.82rem]">Book a demo</Link>
          <Link href="/" className="hidden font-semibold hover:text-white sm:inline">Back to site</Link>
        </div>
      </header>

      {mode === "tour" ? (
        <GuidedTour />
      ) : reach === "up" ? (
        <iframe
          src={url}
          title={`${site.name} demo workspace`}
          className="w-full flex-1 border-0 bg-canvas"
          style={{ minHeight: "calc(100vh - 3.5rem)" }}
        />
      ) : (
        <div className="night flex flex-1 items-center justify-center px-4 py-16">
          {reach === "checking" ? (
            <p className="flex items-center gap-2 text-night-text" role="status">
              <Icon name="refresh" className="size-5 animate-spin motion-reduce:animate-none" /> Connecting to the demo workspace…
            </p>
          ) : (
            <div className="light-ui card max-w-lg p-7 text-fg" role="alert">
              <h1 className="flex items-center gap-2 text-xl font-bold"><Icon name="alert" className="size-5 text-warning" /> The demo workspace isn&apos;t running</h1>
              <p className="mt-2 text-fg-2">
                Nothing answered at <code className="rounded bg-none-bg px-1">{url}</code>. Start it from the GRC-Ai folder, then try again:
              </p>
              <ol className="mt-3 list-decimal space-y-1 pl-5 text-fg-2">
                <li>Double-click <strong>start-demo.bat</strong> (run <strong>start.bat</strong> once first if you&apos;ve never installed the app).</li>
                <li>Wait for it to open on port {site.appDemoPort}.</li>
              </ol>
              <div className="mt-5 flex flex-wrap gap-2">
                <button type="button" className="btn btn-primary" onClick={check}><Icon name="refresh" /> Try again</button>
                <button type="button" className="btn" onClick={() => choose("tour")}>Use the guided tour</button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
