export function PageHead({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="night">
      <div className="mx-auto max-w-[1240px] px-4 py-14 sm:px-8 md:py-16">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-2 max-w-3xl text-[2rem] leading-tight font-bold text-white sm:text-[2.5rem]">{title}</h1>
        {children && <div className="mt-3 max-w-2xl text-lg text-night-text">{children}</div>}
      </div>
    </div>
  );
}
