import Link from "next/link";

import { cn } from "@/lib/utils/cn";
import { RADIUS } from "@/styles/tokens";

export type SecondaryButtonProps = {
  label: string;
  href?: string;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  accentColor?: string;
  className?: string;
};

const sizeClasses: Record<NonNullable<SecondaryButtonProps["size"]>, string> = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-6 text-sm md:text-base",
  lg: "h-14 px-7 text-base md:text-lg",
};

const baseClasses = cn(
  "inline-flex items-center justify-center border border-zinc-300 bg-white/80 font-medium text-zinc-950 backdrop-blur transition-colors duration-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950/20",
  RADIUS.button,
);

export function SecondaryButton({
  label,
  href,
  onClick,
  size = "md",
  accentColor,
  className,
}: SecondaryButtonProps) {
  const style = accentColor
    ? ({ borderColor: accentColor, color: accentColor } as const)
    : {};
  const mergedClassName = cn(baseClasses, sizeClasses[size], className);

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
