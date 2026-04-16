"use client";

import * as React from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { CalendarRange, Rocket, Sparkles, Trophy } from "lucide-react";

import { cn } from "@/lib/utils/cn";

const MILESTONES = [
  {
    year: "2016",
    title: "The journey began",
    body: "A Nepal-first belief took shape: local products can be premium, trusted, and world-class.",
    icon: Sparkles,
  },
  {
    year: "2017",
    title: "Company incorporated",
    body: "Operations formalized with a clear mission—build premium beverage confidence in Nepal.",
    icon: CalendarRange,
  },
  {
    year: "Early years",
    title: "Carbonated soft drinks focus",
    body: "Building consistency, taste confidence, and reliable supply in familiar formats.",
    icon: Rocket,
  },
  {
    year: "Expansion phase",
    title: "Juice + energy categories",
    body: "Diversified into new categories while keeping quality and clarity at the core.",
    icon: Rocket,
  },
  {
    year: "Growth phase",
    title: "A wider product portfolio",
    body: "Built a portfolio that includes Jeeru, Fruit Gems, Joiner, Nimbu Pani, and more beverage lines.",
    icon: Sparkles,
  },
  {
    year: "2025",
    title: "Sip • Snap • Squeeze",
    body: "Hosted a major public event focused on Lemonzaa / Nimbu Pani, including the official launch of KETO.",
    icon: Trophy,
  },
  {
    year: "2026",
    title: "9th anniversary + partnerships",
    body: "Celebrated the 9th anniversary on March 11, 2026 and appeared in multiple public refreshment partnerships.",
    icon: Trophy,
  },
] as const;

export function JourneyTimeline() {
  const reduceMotion = useReducedMotion();
  const ref = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const progress = useSpring(scrollYProgress, { stiffness: 160, damping: 28, mass: 0.45 });

  return (
    <section id="timeline" className="scroll-mt-28">
      <div className="max-w-3xl">
        <p className="text-xs font-black uppercase tracking-[0.28em] text-zinc-500">Timeline</p>
        <h2 className="mt-4 font-heading text-4xl tracking-tight text-zinc-950 md:text-5xl">
          A journey built on belief and proof.
        </h2>
        <p className="mt-4 text-base leading-7 text-zinc-600">
          Each milestone marks a move toward premium Nepal-made refreshment—stronger quality, clearer identity, and more
          community presence.
        </p>
      </div>

      <div ref={ref} className="relative mt-10 grid gap-6 md:mt-12">
        <div className="pointer-events-none absolute left-4 top-0 hidden h-full w-px bg-black/10 md:block" />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-4 top-0 hidden h-full w-px origin-top bg-gradient-to-b from-[#FF3366] via-[#E8F542] to-[#38BDF8] md:block"
          style={reduceMotion ? undefined : { scaleY: progress }}
        />

        {MILESTONES.map((milestone, index) => (
          <TimelineItem
            key={`${milestone.year}-${milestone.title}`}
            milestone={milestone}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

function TimelineItem({
  milestone,
  index,
}: {
  milestone: (typeof MILESTONES)[number];
  index: number;
}) {
  const Icon = milestone.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.04, 0.18), ease: [0.22, 1, 0.36, 1] }}
      className="relative grid gap-4 md:grid-cols-[3.5rem_1fr]"
    >
      <div className="hidden md:flex md:items-start md:justify-center">
        <div className="mt-5 flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-white shadow-[0_20px_70px_-50px_rgba(0,0,0,0.4)]">
          <Icon className="h-4 w-4 text-zinc-800" />
        </div>
      </div>

      <div
        className={cn(
          "relative overflow-hidden rounded-[2.2rem] border border-black/10 bg-white p-6 shadow-[0_35px_100px_-90px_rgba(0,0,0,0.55)] md:p-7",
        )}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(232,245,66,0.18),transparent_55%)] opacity-0 transition-opacity duration-300 hover:opacity-100" />
        <div className="relative z-10 grid gap-3 md:grid-cols-[10rem_1fr] md:items-start">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-zinc-500">{milestone.year}</p>
          <div>
            <h3 className="font-heading text-2xl tracking-tight text-zinc-950">{milestone.title}</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-600 md:text-base">{milestone.body}</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

