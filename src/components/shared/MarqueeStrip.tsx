import { cn } from "@/lib/utils/cn";

export type MarqueeStripProps = {
  items: string[];
  className?: string;
  speedSeconds?: number;
};

export function MarqueeStrip({ items, className, speedSeconds = 22 }: MarqueeStripProps) {
  const doubled = [...items, ...items];

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden border-y border-white/10 bg-black/30 backdrop-blur",
        className,
      )}
      aria-hidden
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
      <div className="marquee flex w-max items-center gap-8 py-3 pr-8">
        {doubled.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/70"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#E8F542]/90 shadow-[0_0_0_3px_rgba(232,245,66,0.12)]" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .marquee {
          animation: marquee ${speedSeconds}s linear infinite;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

