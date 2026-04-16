import { cn } from "@/lib/utils/cn";

export type LiquidDividerProps = {
  className?: string;
  flip?: boolean;
  from?: string;
  via?: string;
  to?: string;
};

export function LiquidDivider({
  className,
  flip,
  from = "#E8F542",
  via = "#FF6B00",
  to = "#2DD4BF",
}: LiquidDividerProps) {
  const gradientId = `liquid-${from.replace("#", "")}-${to.replace("#", "")}-${via.replace(
    "#",
    "",
  )}`;

  return (
    <div className={cn("relative h-14 w-full overflow-hidden", className)} aria-hidden>
      <svg
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        className={cn("absolute inset-0 h-full w-full opacity-90", flip && "rotate-180")}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor={from}>
              <animate
                attributeName="stop-color"
                values={`${from};${via};${from}`}
                dur="9s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="0.5" stopColor={via}>
              <animate
                attributeName="stop-color"
                values={`${via};${to};${via}`}
                dur="9s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="1" stopColor={to}>
              <animate
                attributeName="stop-color"
                values={`${to};${from};${to}`}
                dur="9s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
          <filter id="liquid-blur">
            <feGaussianBlur stdDeviation="0.6" />
          </filter>
        </defs>
        <path
          d="M0,72 C120,104 240,120 360,104 C480,88 600,40 720,40 C840,40 960,88 1080,104 C1200,120 1320,104 1440,72 L1440,140 L0,140 Z"
          fill={`url(#${gradientId})`}
          filter="url(#liquid-blur)"
        />
      </svg>
    </div>
  );
}

