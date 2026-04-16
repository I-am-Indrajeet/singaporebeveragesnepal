"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";

import type { EventItem } from "@/types/event";
import { cn } from "@/lib/utils/cn";
import { getEventPalette } from "@/components/events/eventPalette";
import { ParticipateButton } from "@/components/events/ParticipateButton";

export type EventsCtaBannerProps = {
  nextEvent: EventItem | null;
  onParticipate: (event: EventItem) => void;
};

export function EventsCtaBanner({ nextEvent, onParticipate }: EventsCtaBannerProps) {
  const reduceMotion = useReducedMotion();
  const palette = nextEvent ? getEventPalette(nextEvent) : null;

  return (
    <section className="relative overflow-hidden rounded-[3rem] border border-black/10 bg-zinc-950 px-8 py-12 text-white shadow-[0_55px_160px_-120px_rgba(0,0,0,0.75)] sm:px-12 sm:py-16">
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background:
            "radial-gradient(circle at 18% 10%, rgba(232,245,66,0.26), transparent 55%), radial-gradient(circle at 100% 0%, rgba(255,51,102,0.26), transparent 55%), radial-gradient(circle at 55% 100%, rgba(56,189,248,0.22), transparent 55%)",
        }}
      />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-[-4rem] top-[-4rem] h-[16rem] w-[16rem] rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.25),transparent_60%)] opacity-60 blur-2xl"
        animate={reduceMotion ? undefined : { y: [0, -16, 0], x: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-[-6rem] right-[-6rem] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.18),transparent_60%)] opacity-60 blur-2xl"
        animate={reduceMotion ? undefined : { y: [0, 18, 0], x: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
      />

      <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-black uppercase tracking-[0.26em] text-white/85 backdrop-blur">
            <Sparkles className="h-4 w-4 text-[#E8F542]" />
            Next refreshing experience
          </div>
          <h2 className="mt-6 font-heading text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            Want to join our next{" "}
            <span className="bg-gradient-to-r from-[#E8F542] via-[#FF6B00] to-[#38BDF8] bg-clip-text text-transparent">
              refreshing experience
            </span>
            ?
          </h2>
          <p className="mt-5 text-base leading-7 text-white/70">
            From hosted tastings to partnership activations, we build moments that feel premium, youthful, and made for
            Nepal. Tap participate and we’ll guide you to the next event.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:flex-col lg:items-stretch">
          {nextEvent ? (
            <ParticipateButton
              className="w-full"
              accent={palette?.accent ?? "#E8F542"}
              label="Participate Now"
              onClick={() => onParticipate(nextEvent)}
            />
          ) : (
            <Link
              href="/contact"
              className={cn(
                "inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-xs font-black uppercase tracking-[0.22em] text-zinc-950",
                "transition hover:bg-zinc-100",
              )}
            >
              Contact for events
            </Link>
          )}

          <Link
            href="#upcoming"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/16 bg-white/5 px-6 text-xs font-black uppercase tracking-[0.22em] text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Explore events
          </Link>
        </div>
      </div>
    </section>
  );
}

