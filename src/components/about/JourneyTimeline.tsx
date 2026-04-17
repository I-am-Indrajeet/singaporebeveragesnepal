"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils/cn";
import { JOURNEY_MILESTONES } from "@/data/timeline";

export function JourneyTimeline() {
  return (
    <section id="timeline" className="scroll-mt-28 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-12">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-zinc-500 mb-4">Timeline</p>
          <h2 className="font-heading text-4xl md:text-5xl tracking-tight text-zinc-950 mb-4">
            A journey built on belief and proof.
          </h2>
          <p className="text-base leading-7 text-zinc-600 max-w-2xl">
            Each milestone marks a move toward premium Nepal-made refreshment—stronger quality, clearer identity, and more
            community presence.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-orange-400 to-transparent transform -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 md:space-y-20">
            {JOURNEY_MILESTONES.map((milestone, index) => (
              <TimelineItem
                key={`${milestone.year}-${milestone.title}`}
                milestone={milestone}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface TimelineItemProps {
  milestone: (typeof JOURNEY_MILESTONES)[number];
  index: number;
  isLeft: boolean;
}

function TimelineItem({ milestone, index, isLeft }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={cn(
        "grid md:grid-cols-2 gap-8 items-center",
        isLeft ? "" : "md:[direction:rtl]"
      )}
    >
      {/* Card Content */}
      <div className={cn(
        "relative group",
        isLeft ? "md:[direction:ltr]" : "md:[direction:ltr]"
      )}>
        <div className="relative rounded-2xl border border-zinc-200 bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
          {/* Year Badge */}
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-bold tracking-wider mb-4">
            {milestone.year}
          </div>
          
          {/* Content */}
          <h3 className="font-heading text-2xl md:text-3xl text-zinc-950 mb-3 tracking-tight">
            {milestone.title}
          </h3>
          <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
            {milestone.body}
          </p>
        </div>
      </div>

      {/* Timeline Dot */}
      <div className="hidden md:flex justify-center">
        <div className="flex items-center justify-center w-4 h-4 rounded-full bg-orange-400 border-4 border-white shadow-md" />
      </div>

      {/* Empty space for right side */}
      <div className="hidden md:block" />
    </motion.div>
  );
}

