"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { plans } from "@/lib/content";
import { site } from "@/lib/site";
import { Icon } from "./icon";

type State = "idle" | "sending" | "sent" | "error";

const field =
  "mt-1.5 w-full rounded-[7px] border border-line-strong bg-surface px-3 py-2 text-fg focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent-soft";
const label = "text-sm font-semibold text-fg";

export function ContactForm() {
  const params = useSearchParams();
  const plan = params.get("plan") ?? "";
  const [state, setState] = useState<State>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    if (!site.demoFormEndpoint) {
      const body = [...data.entries()].map(([k, v]) => `${k}: ${v}`).join("\n");
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Demo request")}&body=${encodeURIComponent(body)}`;
      setState("sent");
      return;
    }

    setState("sending");
    try {
      const res = await fetch(site.demoFormEndpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
      setState(res.ok ? "sent" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div role="status" className="flex gap-3">
        <Icon name="check" className="mt-1 size-6 text-pass" />
        <div>
          <h2 className="text-xl font-bold">Demo requested</h2>
          <p className="mt-1 text-fg-2">We&apos;ll email you within one working day with times to pick from.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <label className="block">
        <span className={label}>Your name</span>
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className="block">
        <span className={label}>Work email</span>
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className="block">
        <span className={label}>Company</span>
        <input name="company" required autoComplete="organization" className={field} />
      </label>
      <label className="block">
        <span className={label}>You are</span>
        <select name="role" className={field} defaultValue="">
          <option value="" disabled>Choose one</option>
          <option>A privacy or GRC consultant</option>
          <option>An in-house compliance team</option>
          <option>Something else</option>
        </select>
      </label>
      <label className="block sm:col-span-2">
        <span className={label}>Plan you&apos;re considering</span>
        <select name="plan" className={field} defaultValue={plans.some((p) => p.name.toLowerCase() === plan) ? plan : ""}>
          <option value="">Not sure yet</option>
          {plans.map((p) => (
            <option key={p.name} value={p.name.toLowerCase()}>{p.name}: {p.scope}</option>
          ))}
        </select>
      </label>
      <label className="block sm:col-span-2">
        <span className={label}>What would you like to see? <span className="font-normal text-muted">Optional</span></span>
        <textarea name="message" rows={3} className={field} />
      </label>
      <div className="sm:col-span-2">
        <button type="submit" disabled={state === "sending"} className="btn btn-primary w-full disabled:opacity-60 sm:w-auto">
          {state === "sending" ? "Requesting demo…" : "Request demo"}
        </button>
        {state === "error" && (
          <p className="mt-3 flex items-center gap-2 text-fail" role="alert">
            <Icon name="alert" /> The request didn&apos;t go through. Try again, or email {site.email}.
          </p>
        )}
      </div>
    </form>
  );
}
