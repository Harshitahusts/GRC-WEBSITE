"use client";

import { useState } from "react";
import {
  analystAnswers,
  connectorChecks,
  dataFlow,
  deliveryChecks,
  documents,
  engagements,
  findings,
  riskLevel,
  riskScore,
  risks,
  type FindingStatus,
} from "@/lib/demo-data";
import { connectors } from "@/lib/content";
import { Icon } from "../icon";
import { Card, Meter, PageHead, RiskBadge, StageBadge } from "./bits";

const findingTone: Record<FindingStatus, string> = {
  Gap: "bg-fail-bg text-fail",
  "Open item": "bg-warn-bg text-warn",
  Compliant: "bg-pass-bg text-pass",
};

export function EngagementView() {
  const e = engagements.find((x) => x.id === "ENG-003")!;
  const [filter, setFilter] = useState<FindingStatus | "All">("All");
  const shown = findings.filter((f) => filter === "All" || f.status === filter);
  const steps = [
    { name: "Intake", state: "done" },
    { name: "Findings", state: "current" },
    { name: "Documents", state: "todo" },
    { name: "Delivery", state: "blocked" },
  ];

  return (
    <>
      <PageHead eyebrow={`Engagements / ${e.id}`} title={e.client} sub={`${e.sector}. Tools: ${e.tools}`} actions={<StageBadge stage={e.stage} />} />

      <ol className="card mb-4 grid grid-cols-2 gap-px overflow-hidden bg-line p-0 @lg:grid-cols-4" aria-label="Workflow">
        {steps.map((s, i) => (
          <li key={s.name} className={`flex items-center gap-2.5 bg-surface px-4 py-3 ${s.state === "current" ? "shadow-[inset_0_-3px_0_var(--color-accent)]" : ""}`}>
            <span
              className={`grid size-7 place-items-center rounded-full text-[0.82rem] font-bold ${
                s.state === "done" ? "bg-pass-bg text-pass" : s.state === "current" ? "bg-accent text-white" : "bg-none-bg text-muted"
              }`}
            >
              {s.state === "done" ? <Icon name="check" className="size-4" /> : i + 1}
            </span>
            <span>
              <span className="block font-semibold">{s.name}</span>
              <span className="block text-[0.78rem] text-muted">
                {s.state === "done" ? "Submitted" : s.state === "current" ? "2 to review" : s.state === "blocked" ? "Blocked by 2 checks" : "5 drafted"}
              </span>
            </span>
          </li>
        ))}
      </ol>

      <div className="grid gap-4 @3xl:grid-cols-[1.6fr_1fr]">
        <Card
          title="Findings"
          aside={
            <span className="flex gap-1" role="group" aria-label="Filter findings">
              {(["All", "Gap", "Open item", "Compliant"] as const).map((f) => (
                <button
                  key={f}
                  type="button"
                  aria-pressed={filter === f}
                  onClick={() => setFilter(f)}
                  className={`rounded-full px-2.5 py-0.5 text-[0.78rem] font-semibold ${filter === f ? "bg-accent text-white" : "bg-none-bg text-fg-2 hover:bg-hover"}`}
                >
                  {f}
                </button>
              ))}
            </span>
          }
        >
          <ul className="divide-y divide-line">
            {shown.map((f) => (
              <li key={f.obligation} className="py-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`badge badge-dot ${findingTone[f.status]}`}>{f.status}</span>
                  <strong>{f.obligation}</strong>
                </div>
                <p className="mt-1 text-[0.9rem] text-fg-2">{f.note}</p>
                <p className="mt-1 flex items-center gap-1.5 text-[0.8rem] text-muted">
                  <Icon name="book" className="size-3.5" /> {f.ref}
                  <span className="text-pass">citation verified</span>
                </p>
              </li>
            ))}
          </ul>
        </Card>

        <div className="space-y-4">
          <Card title="Readiness">
            <p className="text-[1.9rem] leading-none font-bold">{e.score}<small className="ml-0.5 text-[0.95rem] text-muted">/100</small></p>
            <div className="mt-2"><Meter value={e.score ?? 0} label="Readiness" /></div>
            <p className="mt-2 text-[0.85rem] text-muted">{e.gaps} gaps, {e.open} open items, 2 compliant</p>
          </Card>
          <Card title="Documents">
            <ul className="space-y-2 text-[0.9rem]">
              {documents.map((d) => (
                <li key={d.name} className="flex items-center justify-between gap-3">
                  <span>{d.name}</span>
                  <span className={`badge ${d.status === "Reviewed" ? "bg-pass-bg text-pass" : d.status === "Draft for lawyer" ? "bg-info-bg text-info" : "bg-warn-bg text-warn"}`}>{d.status}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card title="Delivery checks">
            <ul className="space-y-2 text-[0.88rem]">
              {deliveryChecks.map((c) => (
                <li key={c.check} className="flex items-start gap-2">
                  <Icon name={c.ok ? "check" : "x"} className={`mt-0.5 size-4 ${c.ok ? "text-good" : "text-critical"}`} />
                  <span>{c.check}<span className="sr-only">{c.ok ? ": passes" : ": fails"}</span></span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-[0.82rem] text-muted">Delivery unlocks when every check passes. There&apos;s no override.</p>
          </Card>
        </div>
      </div>
    </>
  );
}

export function RisksView() {
  const sorted = [...risks].sort((a, b) => riskScore(b) - riskScore(a));
  const cell = (l: number, i: number) => risks.filter((r) => r.likelihood === l && r.impact === i).length;
  const heat = (l: number, i: number) => {
    const s = l * i;
    return s >= 20 ? "bg-[#f6c9c6]" : s >= 15 ? "bg-[#fbd9c7]" : s >= 8 ? "bg-[#fbeac2]" : "bg-[#d5eedc]";
  };

  return (
    <>
      <PageHead eyebrow="All clients" title="Risk register" sub="Every gap, open item and failed connector check becomes a risk, scored likelihood × impact." />
      <div className="grid gap-4 @3xl:grid-cols-[1fr_1.6fr]">
        <Card title="Where open risks sit">
          <div className="flex gap-2">
            <span className="self-center pb-8 text-[0.75rem] font-semibold text-muted [writing-mode:vertical-rl] rotate-180">Likelihood</span>
            <div className="flex-1">
              <table className="w-full table-fixed border-separate border-spacing-1 text-center text-[0.85rem]">
                <caption className="sr-only">Number of open risks by likelihood (rows) and impact (columns)</caption>
                <tbody>
                  {[5, 4, 3, 2, 1].map((l) => (
                    <tr key={l}>
                      <th scope="row" className="w-5 text-[0.75rem] font-semibold text-muted">{l}</th>
                      {[1, 2, 3, 4, 5].map((i) => {
                        const n = cell(l, i);
                        return (
                          <td key={i} className={`h-10 rounded-md ${heat(l, i)} ${n ? "font-bold text-fg" : "text-transparent"}`}>
                            {n || "0"}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                  <tr>
                    <td />
                    {[1, 2, 3, 4, 5].map((i) => (
                      <th key={i} scope="col" className="text-[0.75rem] font-semibold text-muted">{i}</th>
                    ))}
                  </tr>
                </tbody>
              </table>
              <p className="mt-1 text-center text-[0.75rem] font-semibold text-muted">Impact</p>
            </div>
          </div>
        </Card>
        <Card title="Open risks" aside={<span className="badge">{risks.length}</span>}>
          <table className="w-full text-left text-[0.88rem]">
            <thead>
              <tr className="border-b border-line text-[0.78rem] text-muted">
                <th className="py-2 pr-3 font-semibold">Score</th>
                <th className="py-2 pr-3 font-semibold">Risk</th>
                <th className="hidden py-2 pr-3 font-semibold @2xl:table-cell">Owner</th>
                <th className="hidden py-2 font-semibold @lg:table-cell">Treatment</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((r) => {
                const s = riskScore(r);
                return (
                  <tr key={r.title} className="border-b border-line align-top last:border-0">
                    <td className="py-2.5 pr-3"><RiskBadge level={riskLevel(s)} score={s} /></td>
                    <td className="py-2.5 pr-3">
                      <span className="block font-medium">{r.title}</span>
                      <span className="text-[0.8rem] text-muted">
                        {r.client}, {r.ref}
                        {r.overdue && <>, <strong className="text-critical">overdue</strong></>}
                      </span>
                    </td>
                    <td className="hidden py-2.5 pr-3 @2xl:table-cell">{r.owner ?? <span className="text-warn">No owner</span>}</td>
                    <td className="hidden py-2.5 @lg:table-cell">{r.treatment}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </div>
    </>
  );
}

export function AnalystView() {
  const [asked, setAsked] = useState<number[]>([]);
  const [draft, setDraft] = useState("");
  const [note, setNote] = useState(false);

  function ask(i: number) {
    setNote(false);
    setAsked((a) => (a.includes(i) ? a : [...a, i]));
  }

  return (
    <>
      <PageHead eyebrow="Reads the workspace, changes nothing" title="GRC Analyst" sub="Ask about any client. Answers cite the provision they rely on." />
      <div className="card flex min-h-[420px] flex-col p-0">
        <div className="flex-1 space-y-5 p-5" aria-live="polite">
          {asked.length === 0 && (
            <div className="grid place-items-center py-10 text-center text-muted">
              <Icon name="spark" className="size-8 text-accent" />
              <p className="mt-2 max-w-sm">Pick a question below to see how the Analyst answers from the sample workspace.</p>
            </div>
          )}
          {asked.map((i) => {
            const qa = analystAnswers[i];
            return (
              <div key={qa.q} className="space-y-3">
                <p className="ml-auto w-fit max-w-[85%] rounded-[10px] rounded-br-sm bg-accent px-3.5 py-2 text-white">{qa.q}</p>
                <div className="flex gap-3">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-accent-soft text-accent"><Icon name="spark" className="size-4" /></span>
                  <div className="max-w-[85%] space-y-2 rounded-[10px] rounded-tl-sm border border-line bg-surface-2 px-4 py-3 text-[0.92rem]">
                    {qa.a.map((p) => <p key={p}>{p}</p>)}
                    <p className="flex flex-wrap gap-1.5 pt-1">
                      {qa.cites.map((c) => (
                        <span key={c} className="badge bg-info-bg text-info"><Icon name="book" className="size-3" />{c}</span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="border-t border-line p-4">
          <div className="mb-3 flex flex-wrap gap-2">
            {analystAnswers.map((qa, i) => (
              <button key={qa.q} type="button" onClick={() => ask(i)} disabled={asked.includes(i)} className="btn !py-1 text-[0.84rem] disabled:opacity-50">
                {qa.q}
              </button>
            ))}
          </div>
          <form
            className="flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              if (draft.trim()) setNote(true);
            }}
          >
            <label htmlFor="ask" className="sr-only">Ask the Analyst</label>
            <input
              id="ask"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Ask about a client, a risk or a provision…"
              className="min-w-0 flex-1 rounded-[7px] border border-line-strong bg-surface px-3 py-2 focus:border-accent focus:outline-none"
            />
            <button type="submit" className="btn btn-primary">Ask</button>
          </form>
          {note && (
            <p className="mt-2 flex items-center gap-1.5 text-[0.85rem] text-info" role="status">
              <Icon name="info" className="size-4" /> In this demo the Analyst answers the suggested questions. In your workspace it answers anything about your clients.
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export function DataFlowsView() {
  return (
    <>
      <PageHead eyebrow="Arogya Health Clinics" title="Data flows" sub="Where personal data is collected, stored and shared. Flows that leave India are flagged." />
      <Card>
        <ol className="grid gap-3 @2xl:grid-cols-4">
          {dataFlow.map((col, i) => (
            <li key={col.stage} className="relative">
              <p className="mb-2 text-[0.72rem] font-bold tracking-[0.08em] text-muted uppercase">{col.stage}</p>
              <ul className="space-y-2">
                {col.nodes.map((n) => (
                  <li key={n.name} className={`rounded-[9px] border px-3 py-2.5 ${n.abroad ? "border-serious bg-warn-bg" : "border-line bg-surface-2"}`}>
                    <span className="block font-semibold">{n.name}</span>
                    <span className="block text-[0.8rem] text-muted">{n.detail}</span>
                    {n.abroad && (
                      <span className="mt-1.5 flex items-center gap-1 text-[0.78rem] font-semibold text-warn"><Icon name="alert" className="size-3.5" /> Leaves India, Section 16</span>
                    )}
                  </li>
                ))}
              </ul>
              {i < dataFlow.length - 1 && (
                <span className="absolute top-9 -right-3 hidden text-line-strong @2xl:block" aria-hidden><Icon name="arrow" className="size-4" /></span>
              )}
            </li>
          ))}
        </ol>
      </Card>
    </>
  );
}

export function ConnectorsView() {
  const [synced, setSynced] = useState<string | null>(null);
  return (
    <>
      <PageHead eyebrow="Evidence" title="Connectors" sub="Read-only checks that back the findings with evidence." />
      <div className="mb-4 grid gap-4 @2xl:grid-cols-2">
        {connectorChecks.map((c) => {
          const pass = c.checks.filter((x) => x.ok).length;
          return (
            <Card
              key={c.name}
              title={c.name}
              aside={<span className="badge badge-dot bg-pass-bg text-pass">Connected</span>}
            >
              <p className="-mt-2 mb-3 text-[0.82rem] text-muted">{c.client}. {pass} of {c.checks.length} checks pass. Synced {synced === c.name ? "just now" : c.synced}.</p>
              <ul className="space-y-1.5 text-[0.88rem]">
                {c.checks.map((x) => (
                  <li key={x.check} className="flex items-start gap-2">
                    <Icon name={x.ok ? "check" : "x"} className={`mt-0.5 size-4 ${x.ok ? "text-good" : "text-critical"}`} />
                    {x.check}
                  </li>
                ))}
              </ul>
              <button type="button" className="btn mt-4 !py-1.5 text-[0.85rem]" onClick={() => setSynced(c.name)}>
                <Icon name="refresh" /> Run checks again
              </button>
            </Card>
          );
        })}
      </div>
      <Card title="More connectors">
        <ul className="grid gap-x-6 gap-y-2 text-[0.88rem] @lg:grid-cols-2 @3xl:grid-cols-3">
          {connectors.filter((c) => !c.live).map((c) => (
            <li key={c.name} className="flex items-center justify-between gap-2 border-b border-line py-1.5">
              <span>{c.name}</span>
              <span className="soon">Soon</span>
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
}
