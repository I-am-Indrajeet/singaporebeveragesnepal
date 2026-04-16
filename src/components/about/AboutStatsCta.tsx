import type React from "react";
import Link from "next/link";
import { CalendarRange, PartyPopper, Sparkles } from "lucide-react";

export function AboutStatsCta({
  years,
  portfolioLines,
  activations,
}: {
  years: number;
  portfolioLines: number;
  activations: number;
}) {
  return (
    <section className="space-y-10">
      <div className="max-w-3xl">
        <p className="text-xs font-black uppercase tracking-[0.28em] text-zinc-500">Progress</p>
        <h2 className="mt-4 font-heading text-4xl tracking-tight text-zinc-950 md:text-5xl">
          Proof that the story is moving forward.
        </h2>
        <p className="mt-4 text-base leading-7 text-zinc-600">
          The story only matters if it becomes visible in products, presence, and the trust people place in the brand.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <StatCard icon={CalendarRange} label="Years of journey" value={years} accent="#38BDF8" />
        <StatCard icon={Sparkles} label="Beverage lines" value={portfolioLines} accent="#D6E84D" />
        <StatCard icon={PartyPopper} label="Activations logged" value={activations} accent="#FF8A00" />
      </div>

      <div className="rounded-[2.8rem] border border-black/8 bg-[linear-gradient(180deg,#fffdf7_0%,#ffffff_100%)] p-8 shadow-[0_28px_90px_-70px_rgba(30,41,59,0.24)] sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-zinc-500">Final message</p>
            <h3 className="mt-4 font-heading text-4xl leading-[1.04] tracking-tight text-zinc-950">
              The future we are building is one where Nepali beverages stand with premium identity and real confidence.
            </h3>
            <p className="mt-5 text-sm leading-7 text-zinc-650 sm:text-base">
              Not by pretending to be something else. Not by borrowing credibility. By earning it through quality,
              consistency, and a brand story that keeps showing up in the real world.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/products"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#d3e46d] px-7 text-xs font-black uppercase tracking-[0.22em] text-zinc-950 transition hover:bg-[#c8de55]"
            >
              View products
            </Link>
            <Link
              href="/events"
              className="inline-flex h-12 items-center justify-center rounded-full border border-black/10 bg-white px-7 text-xs font-black uppercase tracking-[0.22em] text-zinc-950 transition hover:bg-zinc-50"
            >
              See events
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  accent,
}: {
  icon: React.ElementType;
  label: string;
  value: number;
  accent: string;
}) {
  return (
    <article className="rounded-[2rem] border border-black/8 bg-white p-6 shadow-[0_24px_80px_-70px_rgba(30,41,59,0.2)]">
      <div
        className="flex h-12 w-12 items-center justify-center rounded-[1.15rem] border border-black/8 bg-[#fcfbf7]"
        style={{ boxShadow: `0 0 0 4px ${accent}16` }}
      >
        <Icon className="h-5 w-5" style={{ color: accent }} />
      </div>
      <p className="mt-5 text-xs font-black uppercase tracking-[0.28em] text-zinc-500">{label}</p>
      <p className="mt-2 font-heading text-4xl tracking-tight text-zinc-950 tabular-nums">{value}</p>
    </article>
  );
}

