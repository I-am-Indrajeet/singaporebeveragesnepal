"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Gem,
  Handshake,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { TiltCard } from "@/components/shared/TiltCard";

const VALUES = [
  {
    title: "Quality",
    body: "Built to earn repeat trust through dependable taste, packaging, and delivery.",
    icon: BadgeCheck,
    accent: "#38BDF8",
  },
  {
    title: "Innovation",
    body: "Fresh thinking in categories, presentation, and the way the brand shows up in public.",
    icon: Lightbulb,
    accent: "#E8F542",
  },
  {
    title: "Nepali Pride",
    body: "A confident local identity that is not defensive, diluted, or borrowed.",
    icon: Gem,
    accent: "#FF8A00",
  },
  {
    title: "Community Engagement",
    body: "Brand growth that stays close to real people, partnerships, and shared experiences.",
    icon: Handshake,
    accent: "#FF5A7A",
  },
  {
    title: "Growth",
    body: "Expansion with discipline, not noise, across products, occasions, and market presence.",
    icon: TrendingUp,
    accent: "#34D399",
  },
  {
    title: "Trust",
    body: "Clear standards, reliable execution, and a promise people can come back to.",
    icon: ShieldCheck,
    accent: "#60A5FA",
  },
] as const;

export function MissionVisionValues() {
  return (
    <section className="space-y-10">
      <SectionHeading
        eyebrow="Mission, Vision, Values"
        title="The brand is guided by a clear point of view."
        subtitle="The work is simple to say and harder to do well: build Nepal-made beverages that feel premium enough to compete anywhere."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        <motion.article
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[2.6rem] border border-[#dbe7b7] bg-[linear-gradient(180deg,#f7fbeb_0%,#ffffff_100%)] p-8 shadow-[0_24px_80px_-70px_rgba(163,190,55,0.45)] sm:p-10"
        >
          <p className="text-xs font-black uppercase tracking-[0.28em] text-zinc-500">Vision</p>
          <h3 className="mt-4 font-heading text-4xl leading-[1.04] tracking-tight text-zinc-950">
            To provide quality Nepalese products across the world.
          </h3>
          <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-650 sm:text-base">
            The ambition is not small-market success dressed up with big words. It is to create a standard of Nepal-made
            refreshment that feels credible, polished, and proudly exportable.
          </p>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
          className="rounded-[2.6rem] border border-[#e7ddd2] bg-[linear-gradient(180deg,#fff6ee_0%,#ffffff_100%)] p-8 shadow-[0_24px_80px_-70px_rgba(249,115,22,0.35)] sm:p-10"
        >
          <p className="text-xs font-black uppercase tracking-[0.28em] text-zinc-500">Mission</p>
          <h3 className="mt-4 font-heading text-4xl leading-[1.04] tracking-tight text-zinc-950">
            To highlight the quality and potential of Nepal-born products and support a self-reliant Nepal.
          </h3>
          <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-650 sm:text-base">
            The mission is practical: improve confidence in local products by making quality visible, consistent, and easy
            to trust in everyday life.
          </p>
        </motion.article>
      </div>

      <div className="space-y-8">
        <SectionHeading
          eyebrow="Values"
          title="Six principles that keep the story honest."
          subtitle="They shape how the brand grows, how it behaves in the market, and how it earns credibility over time."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {VALUES.map((value) => {
            const Icon = value.icon;
            return (
              <TiltCard key={value.title} className="rounded-[2rem]" tilt={7} glare={false}>
                <article className="group relative overflow-hidden rounded-[2rem] border border-black/8 bg-white p-7 shadow-[0_24px_80px_-70px_rgba(30,41,59,0.22)]">
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: `radial-gradient(circle at 16% 10%, ${value.accent}22, transparent 56%)` }}
                  />
                  <div className="relative z-10">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-[1.15rem] border border-black/8 bg-[#fcfbf7]"
                      style={{ boxShadow: `0 0 0 4px ${value.accent}14` }}
                    >
                      <Icon className="h-5 w-5" style={{ color: value.accent }} />
                    </div>
                    <h3 className="mt-5 font-heading text-2xl tracking-tight text-zinc-950">{value.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-600">{value.body}</p>
                  </div>
                </article>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

