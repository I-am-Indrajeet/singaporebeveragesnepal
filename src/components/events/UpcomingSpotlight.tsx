"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CalendarRange, Clock3, MapPin, Sparkles } from "lucide-react";

import type { EventItem } from "@/types/event";
import { cn } from "@/lib/utils/cn";
import { formatEventDateRange } from "@/lib/utils/dates";
import { getEventPalette } from "@/components/events/eventPalette";
import { useCountdown } from "@/components/events/useCountdown";
import { ParticipateButton } from "@/components/events/ParticipateButton";
import { TiltCard } from "@/components/shared/TiltCard";

export type UpcomingSpotlightProps = {
  events: EventItem[];
  onParticipate: (event: EventItem) => void;
};

export function UpcomingSpotlight({ events, onParticipate }: UpcomingSpotlightProps) {
  const reduceMotion = useReducedMotion();
  const [activeSlug, setActiveSlug] = React.useState(events[0]?.slug ?? "");

  React.useEffect(() => {
    if (!events.some((event) => event.slug === activeSlug)) {
      setActiveSlug(events[0]?.slug ?? "");
    }
  }, [activeSlug, events]);

  const activeEvent = React.useMemo(
    () => events.find((event) => event.slug === activeSlug) ?? events[0] ?? null,
    [activeSlug, events],
  );

  if (events.length === 0) {
    return (
      <div className="rounded-[2.6rem] border border-black/8 bg-white p-8 shadow-[0_40px_120px_-90px_rgba(0,0,0,0.55)] md:p-10">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-zinc-500">
          Upcoming events
        </p>
        <h3 className="mt-4 font-heading text-3xl tracking-tight text-zinc-950">
          No upcoming events right now.
        </h3>
        <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-600">
          No upcoming events right now, but more refreshing experiences are on the way. Want to partner with us for a
          public activation or festival presence?
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-6 text-xs font-black uppercase tracking-[0.22em] text-white transition hover:bg-zinc-900"
          >
            Partnership enquiries
          </Link>
          <Link
            href="/products"
            className="inline-flex h-12 items-center justify-center rounded-full border border-black/10 bg-white px-6 text-xs font-black uppercase tracking-[0.22em] text-zinc-950 transition hover:bg-zinc-50"
          >
            Explore products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
      <div className="relative">
        <AnimatePresence mode="wait">
          {activeEvent ? (
            <motion.article
              key={activeEvent.slug}
              initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: 16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-[2.8rem] border border-black/10 bg-white shadow-[0_40px_120px_-90px_rgba(0,0,0,0.65)]"
              style={
                {
                  ["--ev-accent" as string]: getEventPalette(activeEvent).accent,
                  ["--ev-from" as string]: getEventPalette(activeEvent).from,
                  ["--ev-via" as string]: getEventPalette(activeEvent).via,
                  ["--ev-to" as string]: getEventPalette(activeEvent).to,
                } as React.CSSProperties
              }
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.85),transparent_55%),radial-gradient(circle_at_80%_0%,var(--ev-from),transparent_60%),radial-gradient(circle_at_0%_90%,var(--ev-to),transparent_58%)] opacity-70" />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.85),transparent_55%)] opacity-40" />

              <div className="relative z-10 grid gap-8 p-7 sm:p-9 lg:grid-cols-[1fr_0.52fr]">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-zinc-900"
                      style={{
                        boxShadow: `0 0 0 4px var(--ev-accent)18`,
                      }}
                    >
                      <Sparkles className="h-3.5 w-3.5" style={{ color: "var(--ev-accent)" }} />
                      {activeEvent.category}
                    </span>

                    {activeEvent.status ? (
                      <span
                        className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.22em]"
                        style={{
                          backgroundColor: "var(--ev-accent)",
                          color: "#141414",
                          boxShadow: "0 18px 55px -45px rgba(0,0,0,0.45)",
                        }}
                      >
                        {activeEvent.status}
                      </span>
                    ) : null}

                    {activeEvent.highlightText ? (
                      <span className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-zinc-700">
                        {activeEvent.highlightText}
                      </span>
                    ) : null}
                  </div>

                  <h3 className="mt-6 font-heading text-[2.1rem] leading-tight tracking-tight text-zinc-950 sm:text-[2.5rem]">
                    {activeEvent.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-zinc-700 sm:text-base">
                    {activeEvent.shortDescription}
                  </p>

                  <div className="mt-6 grid gap-2 text-sm text-zinc-700 sm:grid-cols-2">
                    <DetailLine icon={CalendarRange} label={formatEventDateRange(activeEvent.startDate, activeEvent.endDate)} />
                    {activeEvent.time ? <DetailLine icon={Clock3} label={activeEvent.time} /> : null}
                    <DetailLine
                      icon={MapPin}
                      label={[activeEvent.venue, activeEvent.city].filter(Boolean).join(", ") || "Nepal"}
                    />
                  </div>

                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <ParticipateButton
                      accent={getEventPalette(activeEvent).accent}
                      onClick={() => onParticipate(activeEvent)}
                      label="Participate"
                    />

                    <Link
                      href={`/events/${activeEvent.slug}`}
                      className="inline-flex h-12 items-center justify-center rounded-full border border-black/10 bg-white px-6 text-xs font-black uppercase tracking-[0.22em] text-zinc-950 transition hover:bg-zinc-50"
                    >
                      View details
                    </Link>
                  </div>

                  <CountdownRow startDate={activeEvent.startDate} />
                </div>

                <div className="relative flex items-center justify-center">
                  <div className="absolute inset-0 rounded-[2.2rem] bg-white/60 blur-2xl" />
                  <div className="relative h-[18rem] w-full max-w-[14rem] sm:h-[22rem] sm:max-w-[16rem]">
                    <Image
                      src={activeEvent.featuredImage}
                      alt={`${activeEvent.title} featured`}
                      fill
                      className="object-contain drop-shadow-[0_45px_120px_rgba(0,0,0,0.45)]"
                      priority
                    />
                  </div>
                  <TicketStamp />
                </div>
              </div>
            </motion.article>
          ) : null}
        </AnimatePresence>
      </div>

      <div className="space-y-3">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-zinc-500">Pick an event</p>
        <div className="grid gap-3">
          {events.map((event) => {
            const palette = getEventPalette(event);
            const selected = event.slug === activeSlug;
            return (
              <TiltCard key={event.slug} className="rounded-[1.7rem]" tilt={7} glare={false}>
                <button
                  type="button"
                  onClick={() => setActiveSlug(event.slug)}
                  className={cn(
                    "group relative w-full overflow-hidden rounded-[1.7rem] border bg-white p-4 text-left shadow-sm transition",
                    selected ? "border-black/12" : "border-black/6 hover:border-black/10",
                  )}
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(circle at 20% 0%, ${palette.glow}, transparent 55%)`,
                    }}
                  />

                  {selected ? (
                    <motion.div
                      layoutId="upcoming-indicator"
                      className="absolute inset-0 rounded-[1.7rem]"
                      style={{
                        boxShadow: `inset 0 0 0 1px ${palette.accent}45, 0 30px 90px -80px rgba(0,0,0,0.55)`,
                      }}
                      transition={{ type: "spring", stiffness: 340, damping: 30 }}
                    />
                  ) : null}

                  <div className="relative z-10 flex items-start gap-3">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-[1.1rem] border border-black/8 bg-white shadow-sm"
                      style={{ boxShadow: `0 0 0 3px ${palette.glow}` }}
                    >
                      <Sparkles className="h-5 w-5" style={{ color: palette.accent }} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-zinc-500">
                        {formatEventDateRange(event.startDate, event.endDate)}
                      </p>
                      <p className="mt-2 line-clamp-2 font-heading text-lg leading-snug text-zinc-950">
                        {event.title}
                      </p>
                      <p className="mt-2 line-clamp-1 text-sm text-zinc-600">{event.city ?? "Nepal"}</p>
                    </div>
                  </div>
                </button>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function DetailLine({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="flex items-start gap-2">
      <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/8 bg-white shadow-sm">
        <Icon className="h-4 w-4 text-zinc-800" />
      </span>
      <span className="min-w-0">{label}</span>
    </div>
  );
}

function CountdownRow({ startDate }: { startDate: string }) {
  const parts = useCountdown(startDate);

  if (parts.totalMs <= 0) {
    return (
      <div className="mt-7 rounded-[1.4rem] border border-black/8 bg-white/70 p-4 text-sm text-zinc-700">
        <p className="font-semibold">This event is live or already started.</p>
      </div>
    );
  }

  return (
    <div className="mt-7 rounded-[1.4rem] border border-black/8 bg-white/70 p-4 shadow-[0_18px_55px_-45px_rgba(0,0,0,0.25)]">
      <p className="text-xs font-bold uppercase tracking-[0.28em] text-zinc-500">Countdown</p>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <CountdownPill label="Days" value={parts.days} />
        <CountdownPill label="Hours" value={parts.hours} />
        <CountdownPill label="Min" value={parts.minutes} />
        <CountdownPill label="Sec" value={parts.seconds} />
      </div>
    </div>
  );
}

function CountdownPill({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2 text-xs font-semibold text-zinc-800">
      <span className="text-zinc-500">{label}</span>
      <span className="tabular-nums font-black text-zinc-950">{String(value).padStart(2, "0")}</span>
    </div>
  );
}

function TicketStamp() {
  return (
    <motion.div
      className="pointer-events-none absolute right-3 top-3 hidden md:block"
      initial={{ opacity: 0, rotate: -10, scale: 0.95 }}
      animate={{ opacity: 1, rotate: -6, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
    >
      <div className="rounded-[1.2rem] border border-black/8 bg-white px-4 py-3 shadow-[0_30px_90px_-70px_rgba(0,0,0,0.55)]">
        <p className="text-[0.6rem] font-black uppercase tracking-[0.3em] text-zinc-500">Spotlight</p>
        <p className="mt-1 font-heading text-lg text-zinc-950">Upcoming</p>
      </div>
    </motion.div>
  );
}
