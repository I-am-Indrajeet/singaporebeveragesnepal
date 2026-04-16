"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils/cn";

type Ripple = { id: number; x: number; y: number; size: number };

export type ParticipateButtonProps = {
  className?: string;
  label?: string;
  accent?: string;
  href?: string;
  onClick?: () => void;
};

export function ParticipateButton({
  className,
  label = "Participate",
  accent = "#E8F542",
  href,
  onClick,
}: ParticipateButtonProps) {
  const [ripples, setRipples] = React.useState<Ripple[]>([]);

  function addRipple(event: React.MouseEvent<HTMLElement>) {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const size = Math.max(rect.width, rect.height) * 1.35;
    const id = Date.now();

    setRipples((prev) => [...prev, { id, x, y, size }]);
    window.setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 650);
  }

  const classes = cn(
    "group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full px-6 text-sm font-black uppercase tracking-[0.18em] text-zinc-950",
    "shadow-[0_22px_65px_-40px_rgba(0,0,0,0.55)] transition-transform hover:-translate-y-0.5 active:translate-y-0",
    className,
  );

  const style = {
    background: `linear-gradient(90deg, ${accent}, rgba(255,255,255,0.92))`,
    boxShadow: `0 0 0 5px ${accent}18, 0 26px 80px -55px rgba(0,0,0,0.6)`,
  } as const;

  const inner = (
    <>
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.9),transparent_45%)] opacity-80" />
      <span className="relative z-10">{label}</span>
      <span
        className="relative z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/7 transition-transform group-hover:translate-x-0.5"
        style={{ boxShadow: `inset 0 0 0 1px ${accent}22` }}
      >
        <ArrowUpRight className="h-4 w-4" />
      </span>

      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="pointer-events-none absolute rounded-full bg-white/70 opacity-0"
          style={{
            left: ripple.x - ripple.size / 2,
            top: ripple.y - ripple.size / 2,
            width: ripple.size,
            height: ripple.size,
            animation: "ripple 650ms ease-out",
          }}
        />
      ))}

      <style jsx>{`
        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 0.55;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        onClick={(e) => {
          addRipple(e);
          onClick?.();
        }}
        className={classes}
        style={style}
      >
        {inner}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={(e) => {
        addRipple(e);
        onClick?.();
      }}
      className={classes}
      style={style}
    >
      {inner}
    </button>
  );
}
