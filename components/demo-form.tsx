"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { frameworks, plans } from "@/lib/content";
import { site } from "@/lib/site";

type State = "idle" | "sending" | "sent" | "error";

const field = "mt-2 w-full rounded-md border border-rule bg-white px-3 py-2.5 focus:border-ink focus:outline-none";

export function DemoForm() {
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
      <div className="max-w-xl border-t-2 border-pass pt-6" role="status">
        <h2 className="text-2xl font-bold">Demo requested</h2>
        <p className="mt-2 text-ink-soft">We&apos;ll email you within one working day with times to pick from.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid max-w-3xl gap-6 border-t-2 border-ink pt-8 sm:grid-cols-2">
      <label className="block">
        <span className="font-semibold">Your name</span>
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className="block">
        <span className="font-semibold">Work email</span>
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className="block">
        <span className="font-semibold">Company</span>
        <input name="company" required autoComplete="organization" className={field} />
      </label>
      <label className="block">
        <span className="font-semibold">Team size</span>
        <select name="team_size" className={field} defaultValue="">
          <option value="" disabled>Choose one</option>
          <option>1–50</option>
          <option>51–200</option>
          <option>201–1,000</option>
          <option>More than 1,000</option>
        </select>
      </label>
      <label className="block">
        <span className="font-semibold">Plan you&apos;re considering</span>
        <select name="plan" className={field} defaultValue={plans.some((p) => p.name.toLowerCase() === plan) ? plan : ""}>
          <option value="">Not sure yet</option>
          {plans.map((p) => (
            <option key={p.name} value={p.name.toLowerCase()}>{p.name}</option>
          ))}
        </select>
      </label>
      <fieldset className="sm:col-span-2">
        <legend className="font-semibold">Frameworks you need</legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {frameworks.map((f) => (
            <label key={f.name} className="flex items-center gap-2.5">
              <input type="checkbox" name="frameworks" value={f.name} className="size-4 accent-[#15233f]" />
              {f.name}
            </label>
          ))}
        </div>
      </fieldset>
      <div className="sm:col-span-2">
        <button type="submit" disabled={state === "sending"} className="rounded-md bg-ink px-5 py-3 font-semibold text-paper hover:bg-[#22345a] disabled:opacity-60">
          {state === "sending" ? "Requesting demo…" : "Request demo"}
        </button>
        {state === "error" && (
          <p className="mt-3 text-fail" role="alert">
            The request didn&apos;t go through. Try again, or email {site.email} directly.
          </p>
        )}
      </div>
    </form>
  );
}
