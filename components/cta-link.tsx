import type { ReactNode } from "react";
import Link from "next/link";

const variants = {
  primary:
    "inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors duration-200 hover:bg-[#243044]",
  secondary:
    "inline-flex items-center justify-center rounded-full border border-border bg-white px-5 py-2.5 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-soft",
} as const;

export function CtaLink({
  href,
  variant = "primary",
  children,
  className = "",
}: {
  href: string;
  variant?: keyof typeof variants;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`${variants[variant]} ${className}`.trim()}>
      {children}
    </Link>
  );
}
