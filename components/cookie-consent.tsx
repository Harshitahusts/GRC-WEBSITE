"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { categories, OPEN_SETTINGS_EVENT, readConsent, saveConsent } from "@/lib/consent";
import { Icon } from "./icon";

type Step = "hidden" | "banner" | "customise";

export function CookieConsent() {
  const [step, setStep] = useState<Step>("hidden");
  const [choice, setChoice] = useState({ analytics: false, marketing: false });
  // Whether a choice is saved; until mounted we don't know, so nothing renders.
  const [decided, setDecided] = useState<boolean | null>(null);
  const panel = useRef<HTMLDivElement>(null);
  const overlay = useRef<HTMLDivElement>(null);
  const reopen = useRef<HTMLButtonElement>(null);
  const path = usePathname();

  useEffect(() => {
    // Ask only when there's no saved choice for the current categories.
    const saved = readConsent();
    setDecided(!!saved);
    if (!saved) setStep("banner");
    const open = () => {
      const saved = readConsent();
      setChoice({ analytics: saved?.analytics ?? false, marketing: saved?.marketing ?? false });
      setStep("customise");
    };
    window.addEventListener(OPEN_SETTINGS_EVENT, open);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, open);
  }, []);

  // Move focus into the panel when it opens or switches view, so keyboard users land on it.
  useEffect(() => {
    if (step !== "hidden") panel.current?.focus();
  }, [step]);

  // While the pop-up is open, the rest of the site can't be clicked, scrolled,
  // tabbed to or read by screen readers: the pop-up is the first and only thing
  // to act on. Reject all is always one click away, so nobody is forced to accept.
  // The policy pages stay readable, so people can check what they're agreeing to.
  const readable = ["/cookies", "/privacy", "/terms"].includes(path);
  const blocking = step !== "hidden" && !readable;
  useEffect(() => {
    if (!blocking || !overlay.current) return;
    const others = [...document.body.children].filter((el) => el !== overlay.current && !el.hasAttribute("inert")) as HTMLElement[];
    others.forEach((el) => el.setAttribute("inert", ""));
    const html = document.documentElement;
    const previousOverflow = html.style.overflow;
    html.style.overflow = "hidden";
    return () => {
      others.forEach((el) => el.removeAttribute("inert"));
      html.style.overflow = previousOverflow;
    };
  }, [blocking]);

  function decide(next: { analytics: boolean; marketing: boolean }) {
    saveConsent(next);
    setDecided(true);
    setStep("hidden");
    // Hand focus to the corner button so keyboard users don't lose their place.
    requestAnimationFrame(() => reopen.current?.focus());
  }

  function openSettings() {
    const saved = readConsent();
    setChoice({ analytics: saved?.analytics ?? false, marketing: saved?.marketing ?? false });
    setStep("customise");
  }

  if (step === "hidden") {
    if (!decided) return null;
    // After a choice, a small button stays in the corner to reopen the settings.
    // On /demo it sits bottom-right so it doesn't cover the app's own sidebar.
    return (
      <button
        ref={reopen}
        type="button"
        onClick={openSettings}
        aria-label="Cookie settings"
        title="Cookie settings"
        className={`fixed bottom-4 z-40 grid size-11 place-items-center rounded-full border border-line bg-surface text-accent shadow-float hover:bg-accent-soft ${path.startsWith("/demo") ? "right-4" : "left-4"}`}
      >
        <Icon name="cookie" className="size-5" />
      </button>
    );
  }

  const all = { analytics: true, marketing: true };
  const none = { analytics: false, marketing: false };

  return (
    <div
      ref={overlay}
      className={
        blocking
          ? "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-[rgba(11,14,22,0.6)] p-3 backdrop-blur-[2px]"
          : "fixed inset-x-3 bottom-3 z-50 max-h-[85vh] overflow-y-auto sm:inset-x-auto sm:bottom-5 sm:left-5 sm:w-[28rem]"
      }
    >
      <div
        ref={panel}
        tabIndex={-1}
        role="dialog"
        aria-modal={blocking}
        aria-labelledby="cookie-title"
        aria-describedby="cookie-body"
        onKeyDown={(e) => {
          // Escape closes the settings view only once a choice already exists.
          if (e.key === "Escape" && step === "customise" && readConsent()) {
            setStep("hidden");
            requestAnimationFrame(() => reopen.current?.focus());
          }
        }}
        className="light-ui card w-full max-w-[28rem] p-5 shadow-float outline-none sm:p-6"
      >
        <div className="flex items-start gap-3">
          <span className="grid size-9 shrink-0 place-items-center rounded-[9px] bg-accent-soft text-accent">
            <Icon name="cookie" className="size-5" />
          </span>
          <div className="min-w-0">
            <h2 id="cookie-title" className="text-[1.05rem] font-semibold">
              {step === "banner" ? "Your choice on cookies" : "Cookie settings"}
            </h2>
            <p id="cookie-body" className="mt-1 text-[0.9rem] text-fg-2">
              {step === "banner"
                ? "Please choose before using the site. We use strictly necessary cookies to run it. With your consent we'd also use analytics and marketing cookies. Rejecting them doesn't stop anything from working, and you can change your choice any time with the cookie button in the corner. "
                : "Pick what you're happy with. Strictly necessary cookies can't be turned off. "}
              <Link href="/cookies" className="text-accent underline">Cookie policy</Link>
            </p>
          </div>
        </div>

        {step === "customise" && (
          <ul className="mt-4 divide-y divide-line rounded-[9px] border border-line">
            {categories.map((c) => {
              const on = c.required ? true : choice[c.id as "analytics" | "marketing"];
              return (
                <li key={c.id} className="flex items-start gap-3 px-3.5 py-3">
                  <div className="min-w-0 flex-1">
                    <p id={`cc-${c.id}`} className="font-semibold">{c.name}</p>
                    <p id={`cc-${c.id}-desc`} className="mt-0.5 text-[0.84rem] text-fg-2">{c.body}</p>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={on}
                    aria-labelledby={`cc-${c.id}`}
                    aria-describedby={`cc-${c.id}-desc`}
                    disabled={c.required}
                    onClick={() => setChoice((s) => ({ ...s, [c.id]: !on }))}
                    className={`relative mt-0.5 h-6 w-11 shrink-0 rounded-full transition-colors disabled:cursor-not-allowed ${on ? "bg-accent" : "bg-line-strong"} ${c.required ? "opacity-60" : ""}`}
                  >
                    <span className={`absolute top-0.5 left-0.5 size-5 rounded-full bg-white shadow transition-transform motion-reduce:transition-none ${on ? "translate-x-5" : ""}`} />
                  </button>
                </li>
              );
            })}
          </ul>
        )}

        {/* The first-screen choices carry equal weight, so none of them is nudged. */}
        <div className="mt-4 grid grid-cols-2 gap-2">
          <button type="button" className="btn" onClick={() => decide(none)}>Reject all</button>
          <button type="button" className="btn" onClick={() => decide(all)}>Accept all</button>
          {step === "banner" ? (
            <button type="button" className="btn col-span-2" onClick={openSettings}>
              <Icon name="sliders" /> Customise
            </button>
          ) : (
            <button type="button" className="btn btn-primary col-span-2" onClick={() => decide(choice)}>
              Save my choices
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
