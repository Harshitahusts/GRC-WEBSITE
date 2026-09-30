import { activity, attention, engagements, risks, riskLevel, riskScore, stages, type View } from "@/lib/demo-data";
import { Icon } from "../icon";
import { Card, LevelIcon, Meter, PageHead, RiskBadge, StageBadge, Tile } from "./bits";

export function Dashboard({ go }: { go?: (v: View) => void }) {
  const scored = engagements.filter((e) => e.score !== null);
  const avg = Math.round(scored.reduce((s, e) => s + (e.score ?? 0), 0) / scored.length);
  const delivered = engagements.filter((e) => e.stage === "Delivered").length;
  const sorted = [...risks].sort((a, b) => riskScore(b) - riskScore(a));
  const critHigh = sorted.filter((r) => ["critical", "high"].includes(riskLevel(riskScore(r)))).length;
  const overdue = risks.filter((r) => r.overdue).length;
  const max = Math.max(...stages.map((s) => engagements.filter((e) => e.stage === s).length));

  // Buttons only work inside the interactive demo; the homepage preview is static.
  const open = (v: View) => (go ? () => go(v) : undefined);

  return (
    <>
      <PageHead
        eyebrow="Welcome back, demo"
        title="Dashboard"
        sub={`${engagements.length} engagements in the workspace.`}
        actions={
          <button type="button" className="btn btn-primary" onClick={open("engagement")} tabIndex={go ? 0 : -1}>
            <Icon name="plus" /> New engagement
          </button>
        }
      />

      <div className="mb-4 grid grid-cols-2 gap-4 @3xl:grid-cols-4">
        <Tile label="In progress" value={engagements.length - delivered} sub="engagements not yet delivered" />
        <Tile label="Average readiness" value={<>{avg}<small className="ml-0.5 text-[0.95rem] font-semibold text-muted">/100</small></>} tone="hero">
          <span className="mt-auto pt-1"><Meter value={avg} label="Average readiness" /></span>
        </Tile>
        <Tile label="Critical & high risks" value={critHigh} sub={<>{risks.length} open, <strong className="text-critical">{overdue} overdue</strong></>} tone="bad" />
        <Tile label="Personal data mapped" value={38} sub={<strong className="text-warn">6 to review</strong>} tone="warn" />
      </div>

      <div className="mb-4 grid gap-4 @3xl:grid-cols-[1.4fr_1fr]">
        <Card title="Needs attention" aside={<span className="badge">{attention.length}</span>}>
          <ul className="divide-y divide-line">
            {attention.map((a) => (
              <li key={a.text} className="flex items-center gap-3 py-2.5">
                <LevelIcon level={a.level} />
                <span className="min-w-0 flex-1">
                  <strong className="block text-[0.92rem]">{a.client}</strong>
                  <span className="block text-[0.88rem] text-fg-2">{a.text}</span>
                </span>
                <button type="button" className="btn !px-2.5 !py-1 text-[0.82rem]" onClick={open(a.go)} tabIndex={go ? 0 : -1}>Open</button>
              </li>
            ))}
          </ul>
        </Card>
        <Card title="Pipeline" aside={<span className="text-[0.82rem] text-muted">engagements by stage</span>}>
          <table className="w-full text-[0.88rem]">
            <caption className="sr-only">Number of engagements at each stage</caption>
            <tbody>
              {stages.map((s) => {
                const n = engagements.filter((e) => e.stage === s).length;
                return (
                  <tr key={s}>
                    <th scope="row" className="w-[42%] py-1.5 pr-3 text-left font-medium text-fg-2">{s}</th>
                    <td className="py-1.5">
                      <span className="flex items-center gap-2">
                        <span className="h-2.5 flex-1 overflow-hidden rounded-full bg-track">
                          <span className="block h-full rounded-full bg-chart" style={{ width: `${(100 * n) / max}%` }} />
                        </span>
                        <span className="w-4 text-right tabular-nums">{n}</span>
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </div>

      <div className="mb-4 grid gap-4 @3xl:grid-cols-[1.4fr_1fr]">
        <Card title="Engagements">
          <table className="w-full text-left text-[0.9rem]">
            <thead>
              <tr className="border-b border-line text-[0.78rem] text-muted">
                <th className="py-2 pr-3 font-semibold">Client</th>
                <th className="py-2 pr-3 font-semibold">Stage</th>
                <th className="py-2 pr-3 font-semibold">Readiness</th>
                <th className="hidden py-2 text-right font-semibold @lg:table-cell">Gaps</th>
              </tr>
            </thead>
            <tbody>
              {engagements.map((e) => (
                <tr key={e.id} className="border-b border-line last:border-0">
                  <td className="py-2.5 pr-3">
                    <button type="button" className="text-left font-semibold text-accent hover:underline" onClick={open("engagement")} tabIndex={go ? 0 : -1}>{e.client}</button>
                    <span className="block text-[0.8rem] text-muted">{e.sector}</span>
                  </td>
                  <td className="py-2.5 pr-3"><StageBadge stage={e.stage} /></td>
                  <td className="py-2.5 pr-3">
                    {e.score !== null ? (
                      <span className="flex items-center gap-2"><span className="w-6 tabular-nums">{e.score}</span><Meter value={e.score} label={`Readiness for ${e.client}`} /></span>
                    ) : (
                      <span className="text-muted">–</span>
                    )}
                  </td>
                  <td className="hidden py-2.5 text-right tabular-nums @lg:table-cell">{e.gaps ?? "–"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
        <Card title="Top risks">
          <ul className="space-y-2.5">
            {sorted.slice(0, 5).map((r) => {
              const s = riskScore(r);
              return (
                <li key={r.title} className="flex items-start gap-2.5">
                  <RiskBadge level={riskLevel(s)} score={s} />
                  <span className="min-w-0 text-[0.88rem]">
                    <span className="block font-medium">{r.title}</span>
                    <small className="text-muted">
                      {r.client}
                      {r.overdue && <>, <strong className="text-critical">overdue</strong></>}
                      {!r.owner && ", no owner"}
                    </small>
                  </span>
                </li>
              );
            })}
          </ul>
        </Card>
      </div>

      <Card title="Recent activity">
        <ol className="space-y-2.5">
          {activity.map((a) => (
            <li key={a.what} className="flex flex-wrap items-baseline gap-x-2 text-[0.9rem]">
              <span className="size-2 shrink-0 translate-y-[-1px] rounded-full bg-chart" aria-hidden />
              <span className="min-w-0 flex-1"><strong>{a.who}</strong> {a.what} <span className="text-muted">in {a.client}</span></span>
              <time className="text-[0.8rem] text-muted">{a.when}</time>
            </li>
          ))}
        </ol>
      </Card>
    </>
  );
}
