"use client";

import { useEffect, useRef, useState } from "react";
import { categories, OPEN_SETTINGS_EVENT, readConsent, saveConsent } from "@/lib/consent";
import { Icon } from "./icon";

type Step = "hidden" | "banner" | "customise";

export function CookieConsent() {
  const [step, setStep] = useState<Step>("hidden");
  const [choice, setChoice] = useState({ analytics: false, marketing: false });
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ask only when there's no saved choice for the current categories.
    if (!readConsent()) setStep("banner");
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

  function decide(next: { analytics: boolean; marketing: boolean }) {
    saveConsent(next);
    setStep("hidden");
  }

  if (step === "hidden") return null;

  const all = { analytics: true, marketing: true };
  const none = { analytics: false, marketing: false };

  return (
    <div
      ref={panel}
      tabIndex={-1}
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-body"
      onKeyDown={(e) => {
        // Escape closes the settings view only once a choice already exists.
        if (e.key === "Escape" && step === "customise" && readConsent()) setStep("hidden");
      }}
      className="light-ui card fixed inset-x-3 bottom-3 z-50 max-h-[85vh] overflow-y-auto p-5 shadow-float outline-none sm:inset-x-auto sm:bottom-5 sm:left-5 sm:w-[26rem]"
    >
      <div className="flex items-start gap-3">
        <span className="grid size-9 shrink-0 place-items-center rounded-[9px] bg-accent-soft text-accent">
          <Icon name="shield" className="size-5" />
        </span>
        <div className="min-w-0">
          <h2 id="cookie-title" className="text-[1.05rem] font-semibold">
            {step === "banner" ? "Your choice on cookies" : "Cookie settings"}
          </h2>
          <p id="cookie-body" className="mt-1 text-[0.9rem] text-fg-2">
            {step === "banner"
              ? "We use strictly necessary cookies to run the site. With your consent we'd also use analytics and marketing cookies. You can change this any time from Cookie settings in the footer."
              : "Pick what you're happy with. Strictly necessary cookies can't be turned off."}
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
          <button type="button" className="btn col-span-2" onClick={() => {
            const saved = readConsent();
            setChoice({ analytics: saved?.analytics ?? false, marketing: saved?.marketing ?? false });
            setStep("customise");
          }}>
            <Icon name="sliders" /> Customise
          </button>
        ) : (
          <button type="button" className="btn btn-primary col-span-2" onClick={() => decide(choice)}>
            Save my choices
          </button>
        )}
      </div>
    </div>
  );
}
