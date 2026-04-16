"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, CalendarRange, MapPin, Sparkles } from "lucide-react";

import type { EventItem } from "@/types/event";
import { formatEventDateRange } from "@/lib/utils/dates";
import { getEventPalette } from "@/components/events/eventPalette";
import { TiltCard } from "@/components/shared/TiltCard";
import { LiquidDivider } from "@/components/shared/LiquidDivider";

export type PastEventsTimelineProps = {
  events: EventItem[];
  featuredSlug?: string;
};

export function PastEventsTimeline({ events, featuredSlug = "sip-snap-and-squeeze" }: PastEventsTimelineProps) {
  const reduceMotion = useReducedMotion();
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 160, damping: 28, mass: 0.4 });

  const featured = events.find((event) => event.slug === featuredSlug) ?? null;
  const list = events
    .filter((event) => event.slug !== featuredSlug)
    .slice()
    .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());

  return (
    <div ref={containerRef} className="relative">
      {featured ? (
        <div className="mb-16">
          <FeaturedPastEvent event={featured} />
        </div>
      ) : null}

      <div className="relative grid gap-6">
        <div className="pointer-events-none absolute left-4 top-0 hidden h-full w-px bg-black/10 md:block" />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-4 top-0 hidden h-full w-px origin-top bg-gradient-to-b from-[#FF3366] via-[#E8F542] to-[#38BDF8] md:block"
          style={reduceMotion ? undefined : { scaleY: progress }}
        />

        {list.map((event, index) => (
          <PastTimelineItem key={event.slug} event={event} index={index} />
        ))}
      </div>

      <div className="mt-16">
        <LiquidDivider flip from="#FF3366" via="#E8F542" to="#38BDF8" className="opacity-60" />
      </div>
    </div>
  );
}

function FeaturedPastEvent({ event }: { event: EventItem }) {
  const palette = getEventPalette(event);
  const dateLabel = formatEventDateRange(event.startDate, event.endDate);

  return (
    <section
      className="relative overflow-hidden rounded-[3rem] border border-black/10 bg-zinc-950 shadow-[0_55px_160px_-110px_rgba(0,0,0,0.75)]"
      style={
        {
          ["--ev-from" as string]: palette.from,
          ["--ev-via" as string]: palette.via,
          ["--ev-to" as string]: palette.to,
          ["--ev-accent" as string]: palette.accent,
        } as React.CSSProperties
      }
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(255,255,255,0.12),transparent_58%),radial-gradient(circle_at_0%_90%,var(--ev-to),transparent_55%),radial-gradient(circle_at_100%_0%,var(--ev-from),transparent_55%)] opacity-80" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.8),transparent_50%)] opacity-70" />

      <div className="relative z-10 grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:p-14">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-white/85 backdrop-blur">
              <Sparkles className="h-4 w-4" style={{ color: palette.accent }} />
              Featured Highlight
            </span>
            <span
              className="inline-flex items-center rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-zinc-950"
              style={{ background: `linear-gradient(90deg, ${palette.from}, ${palette.via}, ${palette.to})` }}
            >
              {event.highlightText ?? "Major Moment"}
            </span>
          </div>

          <h3 className="mt-7 font-heading text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl">
            {event.title}
          </h3>

          <div className="mt-6 grid gap-2 text-sm text-white/75 sm:grid-cols-2">
            <InfoLine icon={CalendarRange} label={dateLabel} />
            <InfoLine icon={MapPin} label={[event.venue, event.city].filter(Boolean).join(", ")} />
          </div>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/70">
            {event.pastEventRecap ?? event.shortDescription}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href={`/events/${event.slug}`}
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-xs font-black uppercase tracking-[0.22em] text-zinc-950 transition hover:-translate-y-0.5"
            >
              View highlights
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="#upcoming"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/16 bg-white/5 px-7 text-xs font-black uppercase tracking-[0.22em] text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              Explore upcoming
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[2.6rem] bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.22),transparent_55%)] opacity-80 blur-2xl" />
          <div className="relative grid gap-4 rounded-[2.6rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <div className="relative h-[18rem] w-full sm:h-[22rem]">
              <Image
                src={event.featuredImage}
                alt={`${event.title} featured`}
                fill
                className="object-contain drop-shadow-[0_55px_150px_rgba(0,0,0,0.65)]"
                priority
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              {event.gallery.slice(0, 3).map((image) => (
                <div
                  key={image}
                  className="relative aspect-[4/5] overflow-hidden rounded-[1.2rem] border border-white/10 bg-white/5"
                >
                  <Image src={image} alt="" fill className="object-contain opacity-90" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PastTimelineItem({ event, index }: { event: EventItem; index: number }) {
  const palette = getEventPalette(event);
  const dateLabel = formatEventDateRange(event.startDate, event.endDate);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.04, 0.18), ease: [0.22, 1, 0.36, 1] }}
      className="relative grid gap-4 md:grid-cols-[3.5rem_1fr]"
    >
      <div className="hidden md:flex md:items-start md:justify-center">
        <div
          className="mt-5 h-8 w-8 rounded-full border border-black/10 bg-white shadow-[0_20px_70px_-50px_rgba(0,0,0,0.4)]"
          style={{ boxShadow: `0 0 0 4px ${palette.glow}` }}
        />
      </div>

      <TiltCard className="rounded-[2.2rem]" tilt={8}>
        <div className="group relative overflow-hidden rounded-[2.2rem] border border-black/10 bg-white p-6 shadow-[0_35px_100px_-90px_rgba(0,0,0,0.55)] md:p-7">
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `radial-gradient(circle at 18% 12%, ${palette.glow}, transparent 55%)`,
            }}
          />

          <div className="relative z-10 grid gap-6 lg:grid-cols-[1fr_11.5rem] lg:items-start">
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-zinc-500">{dateLabel}</p>
              <h4 className="mt-3 font-heading text-2xl tracking-tight text-zinc-950">{event.title}</h4>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                {event.pastEventRecap ?? event.shortDescription}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-2">
                {event.highlightText ? (
                  <span
                    className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-zinc-900"
                    style={{
                      backgroundColor: `${palette.accent}18`,
                      boxShadow: `inset 0 0 0 1px ${palette.accent}38`,
                    }}
                  >
                    {event.highlightText}
                  </span>
                ) : null}
                <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-zinc-700">
                  <MapPin className="h-3.5 w-3.5 text-zinc-500" />
                  {[event.venue, event.city].filter(Boolean).join(", ")}
                </span>
              </div>

              <div className="mt-6">
                <Link
                  href={`/events/${event.slug}`}
                  className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-zinc-900"
                >
                  View highlights
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.7rem] border border-black/8 bg-zinc-50">
                <Image
                  src={event.featuredImage}
                  alt=""
                  fill
                  className="object-contain opacity-95"
                  sizes="(min-width: 1024px) 180px, 220px"
                />
              </div>
              <div className="mt-3 flex -space-x-2">
                {event.gallery.slice(0, 3).map((image) => (
                  <div
                    key={image}
                    className="relative h-10 w-10 overflow-hidden rounded-full border border-white bg-white shadow-sm"
                  >
                    <Image src={image} alt="" fill className="object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </TiltCard>
    </motion.article>
  );
}

function InfoLine({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="flex items-start gap-2">
      <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/12 bg-white/6">
        <Icon className="h-4 w-4 text-white/80" />
      </span>
      <span className="min-w-0">{label}</span>
    </div>
  );
}
