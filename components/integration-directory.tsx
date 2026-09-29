"use client";

import { useMemo, useState } from "react";
import { integrationCategories, integrations } from "@/lib/content";

type Category = (typeof integrationCategories)[number] | "All";

export function IntegrationDirectory() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>("All");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return integrations.filter(
      (i) =>
        (category === "All" || i.category === category) &&
        (!q || i.name.toLowerCase().includes(q) || i.checks.toLowerCase().includes(q)),
    );
  }, [query, category]);

  const categories: Category[] = ["All", ...integrationCategories];

  return (
    <div className="grid gap-10 md:grid-cols-[13rem_1fr]">
      <div className="space-y-6 md:sticky md:top-6 md:self-start">
        <label className="block">
          <span className="text-sm font-semibold">Search</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tool or check"
            className="mt-2 w-full rounded-md border border-rule bg-white px-3 py-2 placeholder:text-ink-soft/70 focus:border-ink focus:outline-none"
          />
        </label>
        <fieldset>
          <legend className="text-sm font-semibold">Category</legend>
          <div className="mt-2 flex flex-wrap gap-1.5 md:flex-col md:gap-0.5">
            {categories.map((c) => {
              const n = c === "All" ? integrations.length : integrations.filter((i) => i.category === c).length;
              const active = c === category;
              return (
                <button
                  key={c}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setCategory(c)}
                  className={`flex items-center justify-between gap-3 rounded px-2.5 py-1.5 text-left text-[0.95rem] ${
                    active ? "bg-ink text-paper" : "text-ink-soft hover:bg-paper-deep hover:text-ink"
                  }`}
                >
                  <span>{c}</span>
                  <span className={active ? "text-paper/70" : "text-ink-soft/70"}>{n}</span>
                </button>
              );
            })}
          </div>
        </fieldset>
      </div>

      <div>
        <p className="text-sm text-ink-soft" aria-live="polite">
          {results.length === 1 ? "1 integration" : `${results.length} integrations`}
        </p>
        {results.length === 0 ? (
          <div className="mt-4 border-t border-rule py-10">
            <p className="text-lg font-semibold">No integration matches &ldquo;{query}&rdquo;</p>
            <p className="mt-1 text-ink-soft">Try the tool&apos;s company name, or clear the search to see everything in this category.</p>
            <button type="button" onClick={() => { setQuery(""); setCategory("All"); }} className="mt-4 font-semibold underline decoration-rule decoration-2 underline-offset-[6px] hover:decoration-ink">
              Clear search
            </button>
          </div>
        ) : (
          <table className="mt-4 w-full border-collapse text-left">
            <thead>
              <tr className="border-y border-rule text-sm text-ink-soft">
                <th scope="col" className="py-2.5 pr-4 font-normal">Tool</th>
                <th scope="col" className="hidden py-2.5 pr-4 font-normal sm:table-cell">Category</th>
                <th scope="col" className="py-2.5 font-normal">What GRC-Flow checks</th>
              </tr>
            </thead>
            <tbody>
              {results.map((i) => (
                <tr key={i.name} className="border-b border-rule/70 align-top">
                  <td className="py-3.5 pr-4 font-semibold whitespace-nowrap">
                    {i.name}
                    {i.beta && <span className="ml-2 rounded border border-attention/50 px-1.5 py-px text-xs font-normal text-attention">Beta</span>}
                  </td>
                  <td className="hidden py-3.5 pr-4 text-ink-soft sm:table-cell">{i.category}</td>
                  <td className="py-3.5 text-ink-soft">{i.checks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
