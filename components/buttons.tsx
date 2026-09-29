import Link from "next/link";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof Link> & { variant?: "solid" | "plain" };

export function ButtonLink({ variant = "solid", className = "", ...props }: Props) {
  const base = "inline-flex items-center justify-center rounded-md py-3 text-[0.95rem] font-semibold transition-colors";
  const styles =
    variant === "solid"
      ? "bg-ink px-5 text-paper hover:bg-[#22345a]"
      : "text-ink underline decoration-rule decoration-2 underline-offset-[6px] hover:decoration-ink";
  return <Link className={`${base} ${styles} ${className}`} {...props} />;
}
