// Typography for long-form articles (blog posts).
export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={[
        "max-w-[46rem] text-[1.06rem] leading-[1.75] text-fg-2",
        "[&_h2]:mt-12 [&_h2]:mb-3 [&_h2]:scroll-mt-28 [&_h2]:text-[1.55rem] [&_h2]:leading-snug [&_h2]:font-bold [&_h2]:text-fg",
        "[&_h3]:mt-8 [&_h3]:mb-2 [&_h3]:text-[1.2rem] [&_h3]:font-semibold [&_h3]:text-fg",
        "[&_p]:my-4 [&_strong]:font-semibold [&_strong]:text-fg",
        "[&_ul]:my-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6",
        "[&_a]:font-medium [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-accent-hover",
        "[&_table]:my-6 [&_table]:w-full [&_table]:border-collapse [&_table]:text-[0.95rem]",
        "[&_th]:border-b-2 [&_th]:border-line-strong [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:font-semibold [&_th]:text-fg",
        "[&_td]:border-b [&_td]:border-line [&_td]:px-3 [&_td]:py-2 [&_td]:align-top",
        "[&_blockquote]:my-6 [&_blockquote]:border-l-4 [&_blockquote]:border-accent [&_blockquote]:bg-accent-soft [&_blockquote]:px-4 [&_blockquote]:py-3",
      ].join(" ")}
    >
      {children}
    </div>
  );
}

// A table that fits the screen on phones: tighter cells, smaller text, and long words
// allowed to break, so the reader never has to scroll sideways.
export function TableWrap({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-sm:[&_table]:text-[0.86rem] max-sm:[&_td]:px-1.5 max-sm:[&_th]:px-1.5 [&_td]:[overflow-wrap:anywhere] [&_th]:[overflow-wrap:anywhere]">
      {children}
    </div>
  );
}
