"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils/cn";
import { LiquidDivider } from "@/components/shared/LiquidDivider";

export function AboutHero() {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const glow = useMotionTemplate`radial-gradient(700px circle at ${x}px ${y}px, rgba(255,255,255,0.18), transparent 55%)`;

  return (
    <section
      className="relative overflow-hidden bg-[#050507] pt-32 text-white sm:pt-36 md:pt-44"
      onPointerMove={(event) => {
        if (reduceMotion) return;
        const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
        x.set(event.clientX - rect.left);
        y.set(event.clientY - rect.top);
      }}
    >
      <motion.div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: glow }} />

      <div className="pointer-events-none absolute inset-0">
        <FloatingBlob className="left-[-14rem] top-[-12rem] h-[34rem] w-[34rem] bg-[radial-gradient(circle_at_30%_30%,rgba(232,245,66,0.95),transparent_55%)] opacity-30 blur-[52px]" delay={0} />
        <FloatingBlob className="right-[-16rem] top-[-14rem] h-[38rem] w-[38rem] bg-[radial-gradient(circle_at_40%_40%,rgba(255,51,102,0.95),transparent_55%)] opacity-28 blur-[56px]" delay={0.12} />
        <FloatingBlob className="bottom-[-18rem] left-[24%] h-[40rem] w-[40rem] bg-[radial-gradient(circle_at_40%_40%,rgba(56,189,248,0.9),transparent_55%)] opacity-18 blur-[62px]" delay={0.22} />

        <Bubble className="left-[10%] top-[28%] h-9 w-9 opacity-55" delay={0.1} />
        <Bubble className="left-[20%] top-[66%] h-6 w-6 opacity-40" delay={0.35} />
        <Bubble className="right-[12%] top-[34%] h-8 w-8 opacity-55" delay={0.22} />
        <Bubble className="right-[24%] top-[72%] h-5 w-5 opacity-35" delay={0.4} />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[90rem] gap-10 px-5 pb-14 md:grid-cols-[1.15fr_0.85fr] md:items-end md:px-8 lg:px-10">
        <div className="max-w-2xl">
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/8 px-5 py-2 text-xs font-black uppercase tracking-[0.28em] text-white/80 shadow-[0_18px_55px_-40px_rgba(0,0,0,0.8)] backdrop-blur"
          >
            <Sparkles className="h-4 w-4 text-[#E8F542]" />
            Our Story
          </motion.div>

          <motion.h1
            initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 font-heading text-[3.1rem] leading-[0.98] tracking-[-0.055em] text-white sm:text-[3.7rem] md:text-[4.1rem] lg:text-[4.6rem]"
          >
            A Proud{" "}
            <span className="bg-gradient-to-r from-[#E8F542] via-[#FF6B00] to-[#38BDF8] bg-clip-text text-transparent">
              Nepali Beverage
            </span>{" "}
            Journey
          </motion.h1>

          <motion.p
            initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.14, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 text-base font-medium leading-7 text-white/70 sm:text-lg"
          >
            Singapore Beverages Nepal exists to prove a simple truth: Nepal‑born products can be premium, trusted, and
            world‑class—without losing local flavor, pride, or community.
          </motion.p>

          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/events"
              className={cn(
                "inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-xs font-black uppercase tracking-[0.22em] text-zinc-950",
                "shadow-[0_20px_70px_-45px_rgba(232,245,66,0.7)] transition hover:-translate-y-0.5",
              )}
            >
              Explore Events
            </Link>
            <Link
              href="/products"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/16 bg-white/5 px-6 text-xs font-black uppercase tracking-[0.22em] text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              View Products
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-3 rounded-[2.4rem] border border-white/10 bg-white/6 p-6 shadow-[0_34px_120px_-70px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:p-7"
        >
          <StatLine label="Journey began" value="2016" accent="#E8F542" />
          <StatLine label="Incorporated" value="2017" accent="#38BDF8" />
          <StatLine label="9th anniversary" value="Mar 11, 2026" accent="#FF6B00" />
          <Link
            href="#timeline"
            className="group mt-2 inline-flex items-center justify-between rounded-[1.6rem] border border-white/10 bg-black/30 px-5 py-4 text-sm font-semibold text-white/80 transition hover:bg-black/40"
          >
            <span>See the journey timeline</span>
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/14 bg-white/6 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
        </motion.div>
      </div>

      <LiquidDivider flip from="#FF3366" via="#E8F542" to="#38BDF8" className="opacity-55" />
    </section>
  );
}

function StatLine({ label, value, accent }: { label: string; value: string; accent: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-[1.6rem] border border-white/10 bg-white/5 px-5 py-4">
      <p className="text-xs font-black uppercase tracking-[0.26em] text-white/55">{label}</p>
      <p className="font-heading text-xl tracking-tight" style={{ color: accent }}>
        {value}
      </p>
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

