"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { business, site } from "@/lib/site";
import { Icon } from "./icon";

export const requestTypes = [
  { id: "access", label: "Get a summary of my data", ref: "Section 11" },
  { id: "correct", label: "Correct or update my data", ref: "Section 12" },
  { id: "delete", label: "Delete my data", ref: "Section 12" },
  { id: "withdraw", label: "Withdraw my consent", ref: "Section 6(4)" },
  { id: "unsubscribe", label: "Unsubscribe from product updates", ref: "Section 6(4)" },
  { id: "nominate", label: "Nominate someone to act for me", ref: "Section 14" },
  { id: "grievance", label: "Raise a grievance", ref: "Section 13" },
] as const;

type State = "idle" | "sending" | "sent" | "error";

const field =
  "mt-1.5 w-full rounded-[7px] border border-line-strong bg-surface px-3 py-2 text-fg focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent-soft";

// One form for every data rights request. `fixed` locks the type (used by /unsubscribe).
export function PrivacyRequestForm({ fixed }: { fixed?: (typeof requestTypes)[number]["id"] }) {
  const params = useSearchParams();
  const fromUrl = params.get("type");
  const initial = fixed ?? (requestTypes.some((t) => t.id === fromUrl) ? fromUrl! : "delete");
  const [type, setType] = useState<string>(initial);
  const [state, setState] = useState<State>("idle");
  const minimal = type === "unsubscribe";
  const label = requestTypes.find((t) => t.id === type)!.label;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    data.set("request", label);

    if (!site.privacyRequestEndpoint) {
      const body = [...data.entries()].map(([k, v]) => `${k}: ${v}`).join("\n");
      window.location.href = `mailto:${business.privacyEmail}?subject=${encodeURIComponent(`Privacy request: ${label}`)}&body=${encodeURIComponent(body)}`;
      setState("sent");
      return;
    }
    setState("sending");
    try {
      const res = await fetch(site.privacyRequestEndpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
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
          <h2 className="text-xl font-bold">{minimal ? "Unsubscribe request sent" : "Request sent"}</h2>
          <p className="mt-1 text-fg-2">
            {minimal
              ? "We'll remove you from product updates. You may get one last email confirming it."
              : "We'll confirm it's you, then respond as soon as we can and within 90 days."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      {!fixed && (
        <fieldset>
          <legend className="text-sm font-semibold">What would you like to do?</legend>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {requestTypes.map((t) => (
              <label key={t.id} className={`flex cursor-pointer items-start gap-2.5 rounded-[7px] border px-3 py-2 ${type === t.id ? "border-accent bg-accent-soft" : "border-line-strong"}`}>
                <input type="radio" name="type" value={t.id} checked={type === t.id} onChange={() => setType(t.id)} className="mt-1 accent-[var(--color-accent)]" />
                <span>
                  <span className="block font-medium">{t.label}</span>
                  <span className="text-[0.8rem] text-muted">DPDP Act, {t.ref}</span>
                </span>
              </label>
            ))}
          </div>
        </fieldset>
      )}
      <div className="grid gap-4 sm:grid-cols-2">
        {!minimal && (
          <label className="block">
            <span className="text-sm font-semibold">Your name</span>
            <input name="name" required autoComplete="name" className={field} />
          </label>
        )}
        <label className={`block ${minimal ? "sm:col-span-2" : ""}`}>
          <span className="text-sm font-semibold">Email you used with us</span>
          <input name="email" type="email" required autoComplete="email" defaultValue={params.get("email") ?? ""} className={field} />
        </label>
      </div>
      {!minimal && (
        <label className="block">
          <span className="text-sm font-semibold">
            Details <span className="font-normal text-muted">{type === "nominate" ? "(your nominee's name and email)" : "Optional"}</span>
          </span>
          <textarea name="details" rows={3} required={type === "nominate"} className={field} />
        </label>
      )}
      {!minimal && (
        <label className="flex items-start gap-2.5 text-[0.92rem]">
          <input type="checkbox" name="confirm_identity" value="yes" required className="mt-1 size-4 accent-[var(--color-accent)]" />
          <span>I&apos;m the person this data is about, or I&apos;m authorised to act for them.</span>
        </label>
      )}
      <p className="text-[0.85rem] text-muted">
        We use these details only to handle this request and keep a record that we did. If you&apos;d rather email, write to <a className="text-accent underline" href={`mailto:${business.privacyEmail}`}>{business.privacyEmail}</a>.
      </p>
      <div>
        <button type="submit" disabled={state === "sending"} className="btn btn-primary disabled:opacity-60">
          {state === "sending" ? "Sending…" : minimal ? "Unsubscribe" : "Send request"}
        </button>
        {state === "error" && (
          <p className="mt-3 flex items-center gap-2 text-fail" role="alert">
            <Icon name="alert" /> The request didn&apos;t go through. Try again, or email {business.privacyEmail}.
          </p>
        )}
      </div>
    </form>
  );
}
