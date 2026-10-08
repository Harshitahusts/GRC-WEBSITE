import { site } from "@/lib/site";
import { Icon } from "./icon";

// Same mark as the app: a shield in a blue gradient tile, with "DPDP" beneath the name.
export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="grid size-[34px] place-items-center rounded-[9px] bg-[linear-gradient(135deg,#3b82f6,#1f4fa8)] text-white">
        <Icon name="shield" className="size-5" />
      </span>
      <span className={`flex flex-col leading-[1.15] font-bold tracking-[-0.01em] ${tone === "dark" ? "text-white" : "text-fg"}`}>
        {site.name}
        <small className={`text-[0.68rem] font-semibold tracking-[0.08em] ${tone === "dark" ? "text-side-muted" : "text-muted"}`}>DPDP</small>
      </span>
    </span>
  );
}
