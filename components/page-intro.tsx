export function PageIntro({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-14 pb-10 sm:px-6 md:pt-20">
      <h1 className="max-w-3xl text-[2.5rem] leading-[1.05] font-bold tracking-[-0.03em] sm:text-[3.25rem]">{title}</h1>
      <div className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">{children}</div>
    </div>
  );
}
