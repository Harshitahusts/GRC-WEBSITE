import Link from "next/link";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof Link> & { variant?: "primary" | "secondary" };

export function ButtonLink({ variant = "primary", className = "", ...props }: Props) {
  return <Link className={`btn ${variant === "primary" ? "btn-primary" : ""} ${className}`} {...props} />;
}
