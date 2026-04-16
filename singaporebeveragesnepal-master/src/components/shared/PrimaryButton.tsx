import Link from "next/link";

import { cn } from "@/lib/utils/cn";
import { RADIUS } from "@/styles/tokens";

export type PrimaryButtonProps = {
  label: string;
  href?: string;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  accentColor?: string;
  className?: string;
};

const sizeClasses: Record<NonNullable<PrimaryButtonProps["size"]>, string> = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-6 text-sm md:text-base",
  lg: "h-14 px-7 text-base md:text-lg",
};

const baseClasses = cn(
  "inline-flex items-center justify-center font-medium text-zinc-950 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950/20",
  RADIUS.button,
);

export function PrimaryButton({
  label,
  href,
  onClick,
  size = "md",
  accentColor,
  className,
}: PrimaryButtonProps) {
  const style = accentColor ? ({ backgroundColor: accentColor } as const) : {};
  const mergedClassName = cn(
    baseClasses, 
    sizeClasses[size], 
    "bg-[var(--accent)]",
    className
  );

  if (href) {
    return (
      <Link href={href} className={mergedClassName} style={style}>
        {label}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={mergedClassName} style={style}>
      {label}
    </button>
  );
}
