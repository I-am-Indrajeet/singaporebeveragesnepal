import Link from "next/link";

import { SectionHeading } from "@/components/shared/SectionHeading";

const PRODUCT_LINES = [
  {
    title: "Jeeru",
    note: "Bold cumin refreshment",
    body: "Built around familiar taste with a more premium finish and a stronger visual identity.",
    accent: "#C8913A",
    shape: "bottle",
  },
  {
    title: "Fruit Gems",
    note: "Juice-led variety",
    body: "A flavor-rich line that expands the portfolio into brighter, more playful refreshment occasions.",
    accent: "#FF8A00",
    shape: "can",
  },
  {
    title: "Joiner",
    note: "Growing brand line",
    body: "A signal of portfolio growth and category confidence as the company broadened its beverage offering.",
    accent: "#38BDF8",
    shape: "tall",
  },
  {
    title: "Nimbu Pani",
    note: "Citrus-first refreshment",
    body: "A crisp, youthful expression of lemon refreshment that fits public activations and everyday moments alike.",
    accent: "#C4D940",
    shape: "bottle",
  },
] as const;

const BROADER_PORTFOLIO = ["Jeeru", "London Dry", "Club Soda", "Monsoon Dew", "Club Cola", "Fancy", "Right"] as const;

export function ProductLegacy() {
  return (
    <section className="space-y-10">
      <SectionHeading
        eyebrow="Product Legacy"
        title="A portfolio that grew without losing its point of view."
        subtitle="The range expanded across categories, but the idea stayed consistent: drinks made for Nepal that still feel polished, memorable, and premium."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {PRODUCT_LINES.map((item) => (
          <article
            key={item.title}
            className="group relative overflow-hidden rounded-[2.4rem] border border-black/8 bg-white p-7 shadow-[0_24px_80px_-70px_rgba(30,41,59,0.22)]"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ background: `radial-gradient(circle at 18% 10%, ${item.accent}20, transparent 58%)` }}
            />

            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-6 flex min-h-[12rem] items-center justify-center rounded-[2rem] bg-[linear-gradient(180deg,#fcfbf7_0%,#f7f4ef_100%)]">
                <ProductTotem accent={item.accent} shape={item.shape} label={item.title} />
              </div>

              <p className="text-xs font-black uppercase tracking-[0.28em] text-zinc-500">{item.note}</p>
              <h3 className="mt-3 font-heading text-[2rem] leading-[1.02] tracking-tight text-zinc-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">{item.body}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="rounded-[2.8rem] border border-black/8 bg-[linear-gradient(180deg,#fbfcf6_0%,#ffffff_100%)] p-8 shadow-[0_28px_90px_-70px_rgba(30,41,59,0.24)] sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-zinc-500">Broader Portfolio</p>
            <h3 className="mt-4 font-heading text-4xl leading-[1.04] tracking-tight text-zinc-950">
              More beverage lines. One consistent promise.
            </h3>
            <p className="mt-4 text-sm leading-7 text-zinc-650 sm:text-base">
              Alongside flagship products, the broader portfolio includes beverage lines built for retail shelves,
              hospitality settings, and public refreshment moments across Nepal.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {BROADER_PORTFOLIO.map((name) => (
                <span
                  key={name}
                  className="inline-flex items-center rounded-full border border-black/8 bg-white px-4 py-2 text-xs font-semibold text-zinc-700 shadow-sm"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          <Link
            href="/products"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#d3e46d] px-7 text-xs font-black uppercase tracking-[0.22em] text-zinc-950 transition hover:bg-[#c8de55]"
          >
            Explore products
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProductTotem({
  accent,
  shape,
  label,
}: {
  accent: string;
  shape: "bottle" | "can" | "tall";
  label: string;
}) {
  const shellHeight = shape === "can" ? "h-[7.8rem]" : shape === "tall" ? "h-[9.8rem]" : "h-[9rem]";
  const shellWidth = shape === "can" ? "w-[4.8rem]" : shape === "tall" ? "w-[4.2rem]" : "w-[4.8rem]";
  const radius = shape === "can" ? "rounded-[1.8rem]" : "rounded-[2rem]";

  return (
    <div className="relative flex flex-col items-center">
      {shape !== "can" ? (
        <div
          className="mb-[-0.25rem] h-4 w-7 rounded-full border border-black/8"
          style={{ backgroundColor: "#fcfbf7" }}
        />
      ) : null}
      <div
        className={`relative ${shellHeight} ${shellWidth} ${radius} border border-black/8 bg-white shadow-[0_22px_60px_-40px_rgba(30,41,59,0.28)]`}
      >
        <div
          className="absolute inset-1 rounded-[inherit]"
          style={{
            background: `linear-gradient(180deg, ${accent}22 0%, ${accent}0d 42%, #ffffff 100%)`,
          }}
        />
        <div className="absolute left-1/2 top-4 h-[72%] w-[1px] -translate-x-1/2 bg-black/5" />
        <div
          className="absolute inset-x-3 top-[28%] rounded-full px-2 py-1 text-center text-[0.58rem] font-black uppercase tracking-[0.16em] text-zinc-900"
          style={{ backgroundColor: accent }}
        >
          {label}
        </div>
        <div className="absolute bottom-4 left-1/2 h-7 w-7 -translate-x-1/2 rounded-full border border-black/8 bg-white" />
      </div>
    </div>
  );
}

