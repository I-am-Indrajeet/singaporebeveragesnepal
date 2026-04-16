"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from "framer-motion";
import { CalendarRange, MapPin } from "lucide-react";

import type { EventItem } from "@/types/event";
import { cn } from "@/lib/utils/cn";
import { formatEventDateRange } from "@/lib/utils/dates";
import { MarqueeStrip } from "@/components/shared/MarqueeStrip";
import { TiltCard } from "@/components/shared/TiltCard";
import { getEventPalette } from "@/components/events/eventPalette";
import { useCountdown } from "@/components/events/useCountdown";
import { ParticipateButton } from "@/components/events/ParticipateButton";

export type EventsHeroProps = {
  nextEvent: EventItem | null;
  pastCount: number;
  upcomingCount: number;
  cityCount: number;
  marqueeItems: string[];
  onParticipate: (event: EventItem) => void;
};

export function EventsHero({
  nextEvent,
  pastCount,
  upcomingCount,
  cityCount,
  marqueeItems,
  onParticipate,
}: EventsHeroProps) {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const glow = useMotionTemplate`radial-gradient(600px circle at ${x}px ${y}px, rgba(255,255,255,0.16), transparent 55%)`;

  const nextPalette = nextEvent ? getEventPalette(nextEvent) : null;
  const countdown = useCountdown(nextEvent?.startDate);

  return (
    <section
      className="relative overflow-hidden bg-[#060608] pb-10 pt-32 text-white sm:pt-36 md:pt-44"
      onPointerMove={(event) => {
        if (reduceMotion) return;
        const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
        x.set(event.clientX - rect.left);
        y.set(event.clientY - rect.top);
      }}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-100"
        style={{ background: glow }}
      />

      <div className="pointer-events-none absolute inset-0">
        <FloatingBlob
          className="left-[-12rem] top-[-10rem] h-[26rem] w-[26rem] bg-[radial-gradient(circle_at_30%_30%,rgba(232,245,66,0.9),transparent_55%)] opacity-35 blur-[40px]"
          delay={0}
        />
        <FloatingBlob
          className="right-[-14rem] top-[-12rem] h-[30rem] w-[30rem] bg-[radial-gradient(circle_at_40%_40%,rgba(255,51,102,0.9),transparent_55%)] opacity-30 blur-[44px]"
          delay={0.12}
        />
        <FloatingBlob
          className="bottom-[-16rem] left-[30%] h-[34rem] w-[34rem] bg-[radial-gradient(circle_at_40%_40%,rgba(56,189,248,0.85),transparent_55%)] opacity-20 blur-[54px]"
          delay={0.22}
        />

        <Bubble className="left-[8%] top-[24%] h-10 w-10 opacity-60" delay={0.1} />
        <Bubble className="left-[18%] top-[62%] h-6 w-6 opacity-45" delay={0.35} />
        <Bubble className="right-[10%] top-[32%] h-8 w-8 opacity-55" delay={0.22} />
        <Bubble className="right-[22%] top-[70%] h-5 w-5 opacity-40" delay={0.4} />

        <CitrusSlice className="left-[72%] top-[18%] hidden text-[#E8F542]/70 md:block" />
        <CitrusSlice className="left-[10%] top-[78%] hidden text-[#FF6B00]/60 md:block" rotate={18} />
      </div>

      <div className="mx-auto grid max-w-[90rem] gap-10 px-5 md:grid-cols-[1.12fr_0.88fr] md:gap-8 md:px-8 lg:px-10">
        <div className="relative z-10 max-w-2xl">
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/6 px-5 py-2 text-xs font-bold uppercase tracking-[0.28em] text-white/80 shadow-[0_18px_55px_-40px_rgba(0,0,0,0.8)] backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-[#E8F542] shadow-[0_0_0_5px_rgba(232,245,66,0.12)]" />
            Events & Activations
          </motion.div>

          <motion.h1
            initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 font-heading text-[3.1rem] leading-[0.98] tracking-[-0.055em] text-white sm:text-[3.7rem] md:text-[4.2rem] lg:text-[4.7rem]"
          >
            Join the{" "}
            <span className="relative inline-block">
              Refreshment
              <span className="absolute -bottom-2 left-0 right-0 h-[0.55rem] rounded-full bg-gradient-to-r from-[#E8F542] via-[#FF6B00] to-[#38BDF8] opacity-70 blur-[6px]" />
            </span>{" "}
            Experience
          </motion.h1>

          <motion.p
            initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.14, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 text-base font-medium leading-7 text-white/70 sm:text-lg"
          >
            Discover upcoming experiences, brand activations, and past moments that make Singapore Beverages Nepal feel
            alive—youthful, premium, and community-driven.
          </motion.p>

          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Link
              href="#upcoming"
              className={cn(
                "inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-xs font-black uppercase tracking-[0.22em] text-zinc-950",
                "shadow-[0_20px_70px_-45px_rgba(232,245,66,0.7)] transition hover:-translate-y-0.5",
              )}
            >
              Explore Upcoming Events
            </Link>
            <Link
              href="#past"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/16 bg-white/5 px-6 text-xs font-black uppercase tracking-[0.22em] text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              See Past Highlights
            </Link>
          </motion.div>

          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 grid grid-cols-3 gap-3 sm:max-w-xl"
          >
            <HeroStat label="Past activations" value={pastCount} accent="#FF6B00" />
            <HeroStat label="Upcoming experiences" value={upcomingCount} accent="#E8F542" />
            <HeroStat label="Cities refreshed" value={cityCount} accent="#38BDF8" />
          </motion.div>
        </div>

        <div className="relative z-10 md:justify-self-end">
          {nextEvent ? (
            <TiltCard className="rounded-[2.4rem]">
              <motion.div
                className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-white/6 p-6 shadow-[0_34px_120px_-70px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:p-7"
                style={
                  nextPalette
                    ? ({
                        ["--ev-from" as string]: nextPalette.from,
                        ["--ev-via" as string]: nextPalette.via,
                        ["--ev-to" as string]: nextPalette.to,
                        ["--ev-accent" as string]: nextPalette.accent,
                      } as React.CSSProperties)
                    : undefined
                }
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.22),transparent_55%),radial-gradient(circle_at_100%_30%,var(--ev-from),transparent_55%),radial-gradient(circle_at_0%_100%,var(--ev-to),transparent_55%)] opacity-30" />
                <div className="relative z-10">
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/70">Next up</p>
                  <h2 className="mt-3 font-heading text-2xl leading-tight tracking-tight text-white sm:text-3xl">
                    {nextEvent.title}
                  </h2>

                  <div className="mt-5 grid gap-2 text-sm text-white/70">
                    <InfoLine icon={CalendarRange} text={formatEventDateRange(nextEvent.startDate, nextEvent.endDate)} />
                    {nextEvent.time ? <InfoLine icon={MapPin} text={`${nextEvent.time} • ${nextEvent.venue ?? "Venue"}`} /> : null}
                    {!nextEvent.time && (nextEvent.venue || nextEvent.city) ? (
                      <InfoLine icon={MapPin} text={[nextEvent.venue, nextEvent.city].filter(Boolean).join(", ")} />
                    ) : null}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    <CountdownChip label="Days" value={countdown.days} />
                    <CountdownChip label="Hours" value={countdown.hours} />
                    <CountdownChip label="Min" value={countdown.minutes} />
                  </div>

                  <div className="mt-7">
                    <ParticipateButton
                      className="w-full"
                      accent={nextPalette?.accent ?? "#E8F542"}
                      onClick={() => onParticipate(nextEvent)}
                      label="Participate"
                    />
                  </div>

                  <p className="mt-4 text-xs leading-5 text-white/55">
                    Want to collaborate or co-host an activation?{" "}
                    <Link href="/contact" className="font-semibold text-white/75 underline underline-offset-4">
                      Let’s talk
                    </Link>
                    .
                  </p>

                  <div className="pointer-events-none absolute -bottom-24 -right-20 hidden h-[16rem] w-[16rem] opacity-60 sm:block">
                    <Image
                      src={nextEvent.featuredImage}
                      alt=""
                      fill
                      className="object-contain opacity-95 drop-shadow-[0_40px_110px_rgba(0,0,0,0.65)]"
                    />
                  </div>
                </div>
              </motion.div>
            </TiltCard>
          ) : (
            <div className="rounded-[2.4rem] border border-white/10 bg-white/6 p-7 text-white/80 backdrop-blur-xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/70">No upcoming events</p>
              <p className="mt-4 text-base leading-7">
                No upcoming events right now, but more refreshing experiences are on the way.
              </p>
              <Link href="/contact" className="mt-6 inline-flex text-sm font-semibold underline underline-offset-4">
                Ask about partnerships →
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="mt-12">
        <MarqueeStrip items={marqueeItems} />
      </div>
    </section>
  );
}

function HeroStat({ label, value, accent }: { label: string; value: number; accent: string }) {
  return (
    <div className="rounded-[1.4rem] border border-white/10 bg-white/5 px-4 py-4 shadow-[0_18px_55px_-45px_rgba(0,0,0,0.8)] backdrop-blur">
      <p className="text-[0.7rem] font-bold uppercase tracking-[0.28em] text-white/55">{label}</p>
      <p className="mt-2 font-heading text-3xl tracking-tight" style={{ color: accent }}>
        <AnimatedNumber value={value} />
      </p>
    </div>
  );
}

function AnimatedNumber({ value }: { value: number }) {
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = React.useState(reduceMotion ? value : 0);

  React.useEffect(() => {
    if (reduceMotion) return;
    const durationMs = 720;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    }

    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduceMotion, value]);

  return <>{display}</>;
}

function CountdownChip({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-2 text-xs font-semibold text-white/75">
      <span className="text-white/50">{label}</span>
      <span className="font-black tabular-nums text-white">{String(value).padStart(2, "0")}</span>
    </div>
  );
}

function InfoLine({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
  return (
    <div className="flex items-start gap-2">
      <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5">
        <Icon className="h-4 w-4 text-white/75" />
      </span>
      <span className="min-w-0">{text}</span>
    </div>
  );
}

function FloatingBlob({ className, delay }: { className: string; delay: number }) {
  return (
    <motion.div
      className={cn("absolute rounded-full", className)}
      initial={{ y: 0 }}
      animate={{ y: [0, -18, 0] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

function Bubble({ className, delay }: { className: string; delay: number }) {
  return (
    <motion.div
      className={cn(
        "absolute rounded-full border border-white/14 bg-white/6 shadow-[0_25px_90px_-70px_rgba(232,245,66,0.65)] backdrop-blur",
        className,
      )}
      initial={{ y: 0 }}
      animate={{ y: [0, -16, 0], x: [0, 6, 0] }}
      transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

function CitrusSlice({
  className,
  rotate = -12,
}: {
  className?: string;
  rotate?: number;
}) {
  return (
    <motion.div
      className={cn("pointer-events-none absolute", className)}
      style={{ rotate }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg width="88" height="88" viewBox="0 0 88 88" fill="none">
        <circle cx="44" cy="44" r="32" stroke="currentColor" strokeOpacity="0.7" strokeWidth="3" />
        <circle cx="44" cy="44" r="18" stroke="currentColor" strokeOpacity="0.6" strokeWidth="2" />
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (Math.PI * 2 * i) / 8;
          const x1 = 44 + Math.cos(angle) * 18;
          const y1 = 44 + Math.sin(angle) * 18;
          const x2 = 44 + Math.cos(angle) * 32;
          const y2 = 44 + Math.sin(angle) * 32;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="currentColor"
              strokeOpacity="0.45"
              strokeWidth="2"
              strokeLinecap="round"
            />
          );
        })}
      </svg>
    </motion.div>
  );
}

