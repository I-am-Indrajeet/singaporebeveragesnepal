import type { Metadata } from "next";
import Link from "next/link";

import { AboutJuiceStack } from "@/components/about/AboutJuiceStack";
import { SchemaScript } from "@/components/shared/SchemaScript";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Discover Singapore Beverages Nepal’s story, mission, and journey—from 2016 to today—building a premium, Nepal-born beverage identity.",
  path: "/about",
  keywords: ["about singapore beverages nepal", "nepali beverage brand", "premium beverages nepal"],
});

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

type FloatingBubbleProps = {
  className?: string;
};

const storySteps = [
  {
    label: "01",
    title: "We saw the gap",
    body: "Many beverage products were available, but not always clearly positioned for modern retail, hospitality, and event supply.",
  },
  {
    label: "02",
    title: "We shaped the portfolio",
    body: "The range was planned around recognisable taste, clean presentation, and clear use occasions.",
  },
  {
    label: "03",
    title: "We focused on Nepal",
    body: "From shops and cafes to hotels, bars, and events, the brand was designed for real commercial use.",
  },
  {
    label: "04",
    title: "We refined the experience",
    body: "Digital storytelling, packaging clarity, and activation planning now support stronger partner confidence.",
  },
];

const whyCards = [
  {
    title: "Built for repeat purchase",
    body: "Good beverage brands win when flavour, packaging, and serving experience stay consistent.",
  },
  {
    title: "Made for real channels",
    body: "The portfolio supports supermarkets, convenience stores, cafes, restaurants, hotels, bars, and events.",
  },
  {
    title: "Designed for partner confidence",
    body: "Clear positioning, dependable supply planning, and stronger product storytelling help partners sell with confidence.",
  },
];

const milestones = [
  {
    year: "2023",
    title: "Portfolio direction defined",
    body: "The product mix was shaped around flavour familiarity, retail clarity, and hospitality relevance for Nepal.",
  },
  {
    year: "2024",
    title: "Mixers and flavoured range aligned",
    body: "The portfolio was expanded into clear usage occasions spanning refreshment, pairing, and premium pouring.",
  },
  {
    year: "2025",
    title: "Distribution pathways prioritised",
    body: "The commercial model focused on distributor onboarding, horeca supply, and scalable channel planning.",
  },
  {
    year: "2026",
    title: "Brand experience refined",
    body: "The website, product storytelling, and activation direction were built to support growth and partner confidence.",
  },
];

const productPhilosophyCards = [
  {
    title: "Refreshment",
    body: "Everyday drinking moments with familiar taste.",
  },
  {
    title: "Pairing",
    body: "Food, hospitality, mixers, and premium pouring.",
  },
  {
    title: "Events",
    body: "High-energy gatherings and brand activations.",
  },
  {
    title: "Retail",
    body: "Shelf clarity, recognition, and easy choice.",
  },
];

function SectionHeading({ eyebrow, title, subtitle, align = "left" }: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <header className={`max-w-3xl ${alignment}`}>
      <p className="mb-4 inline-flex rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600">
        {eyebrow}
      </p>
      <h2 className="font-heading text-3xl font-semibold leading-tight text-zinc-950 md:text-5xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-5 text-base leading-relaxed text-zinc-600 md:text-lg">{subtitle}</p> : null}
    </header>
  );
}

function FloatingBubble({ className = "" }: FloatingBubbleProps) {
  return <span aria-hidden="true" className={`absolute rounded-full bg-[#FF8A00]/20 blur-md ${className}`} />;
}

export default function AboutPage() {
  const missionPills = ["Taste", "Trust", "Channel Fit", "Growth"];

  return (
    <article className="bg-white text-zinc-950">
      <SchemaScript
        schema={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <section className="relative overflow-hidden px-4 pb-20 pt-16 md:pt-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="about-hero-glow absolute left-1/2 top-12 h-72 w-72 -translate-x-1/2 rounded-full bg-[#FF8A00]/20 blur-3xl md:h-[26rem] md:w-[26rem]" />
        </div>
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="relative z-10">
            <p className="mb-6 inline-flex rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600">
              Our Story
            </p>
            <h1 className="font-heading text-4xl leading-tight md:text-6xl">
              From familiar flavours to a stronger beverage presence in{" "}
              <em className="font-heading text-[#FF8A00] not-italic italic">Nepal.</em>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-zinc-600 md:text-lg">
              Singapore Beverages Nepal was built around a simple idea: beverages should be easy to recognise, enjoyable
              to serve, and strong enough to perform across retail, horeca, and events.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#FF8A00]"
              >
                Explore Products
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-7 py-3 text-sm font-semibold text-zinc-900 transition duration-300 hover:-translate-y-1 hover:border-[#FF8A00] hover:text-[#FF8A00]"
              >
                Become a Partner
              </Link>
            </div>
          </div>

          <div className="relative z-10">
            <div className="group relative mx-auto max-w-xl rounded-[2.6rem] border border-white/60 bg-gradient-to-br from-orange-100 via-orange-50 to-white p-6 shadow-[0_40px_120px_-45px_rgba(255,138,0,0.7)] backdrop-blur-xl sm:p-10">
              <FloatingBubble className="left-8 top-8 h-24 w-24" />
              <FloatingBubble className="bottom-10 right-8 h-32 w-32 bg-white/30" />

              <span className="absolute left-5 top-24 h-16 w-16 rounded-full border border-white/60 bg-white/70 shadow-[0_18px_36px_-28px_rgba(255,138,0,0.85)]" />
              <span className="absolute right-10 top-6 h-11 w-11 rounded-full border border-white/60 bg-[#FF8A00]/35 shadow-[0_16px_30px_-26px_rgba(255,138,0,0.95)]" />
              <span className="absolute bottom-8 left-12 h-12 w-12 rounded-full border border-white/60 bg-white/80 shadow-[0_18px_36px_-28px_rgba(255,138,0,0.85)]" />
              <AboutJuiceStack />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 md:py-24">
        <div className="mx-auto w-full max-w-7xl">
          <SectionHeading
            eyebrow="Brand Journey"
            title="Every flavour has a story. Ours begins with better basics."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {storySteps.map((step) => (
              <article
                key={step.label}
                className="group relative overflow-hidden rounded-[2.2rem] border border-zinc-200 bg-white p-7 transition duration-500 hover:-translate-y-2 hover:border-[#FF8A00]/45 hover:shadow-[0_28px_60px_-42px_rgba(255,138,0,0.85)]"
              >
                <span className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#FF8A00]/0 blur-2xl transition duration-500 group-hover:bg-[#FF8A00]/35" />
                <div className="mb-7 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-950 text-sm font-semibold text-white transition duration-500 group-hover:bg-[#FF8A00]">
                  {step.label}
                </div>
                <h3 className="font-heading text-2xl leading-tight text-zinc-950">{step.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 md:py-16">
        <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-[3rem] bg-zinc-950 px-6 py-14 text-white shadow-[0_40px_80px_-50px_rgba(255,138,0,0.65)] md:px-12 md:py-16">
          <div className="pointer-events-none absolute -left-24 top-14 h-52 w-52 rounded-full bg-[#FF8A00]/35 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-48 w-48 rounded-full bg-white/15 blur-3xl" />
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-[2.2rem] border border-white/20 bg-white/10 p-7 backdrop-blur-md md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-200">Our Mission</p>
              <h3 className="mt-4 font-heading text-3xl leading-tight">
                Taste that feels local. Quality that feels modern.
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-zinc-200 md:text-base">
                To create a beverage range that feels rooted in local preferences while meeting modern expectations
                for packaging, consistency, and channel relevance.
              </p>
            </article>
            <article className="rounded-[2.2rem] border border-white/20 bg-white/10 p-7 backdrop-blur-md md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-200">Our Vision</p>
              <h3 className="mt-4 font-heading text-3xl leading-tight">A dependable beverage partner for Nepal.</h3>
              <p className="mt-5 text-sm leading-relaxed text-zinc-200 md:text-base">
                To become a dependable beverage partner for Nepalese retailers, horeca operators, and event
                organisers through stronger portfolio thinking and disciplined supply planning.
              </p>
            </article>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {missionPills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-100"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 md:py-24">
        <div className="mx-auto w-full max-w-7xl">
          <SectionHeading
            eyebrow="Why we exist"
            title="Built for taste, channels, and partner confidence."
            subtitle="The brand grows by making every part of the beverage experience easier to understand, serve, and sell."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {whyCards.map((card) => (
              <article
                key={card.title}
                className="group relative overflow-hidden rounded-[2.2rem] border border-zinc-200 bg-white p-7 shadow-[0_24px_50px_-45px_rgba(255,138,0,0.7)] transition duration-500 hover:-translate-y-2 hover:border-[#FF8A00]/45"
              >
                <div className="absolute inset-x-7 top-0 h-[2px] origin-left scale-x-0 rounded-full bg-[#FF8A00] transition duration-500 group-hover:scale-x-100" />
                <div className="mb-7 h-12 w-12 rounded-2xl bg-zinc-100 transition duration-500 group-hover:bg-[#FF8A00]" />
                <h3 className="font-heading text-2xl leading-tight text-zinc-950">{card.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 md:py-24">
        <div className="mx-auto w-full max-w-7xl">
          <SectionHeading
            eyebrow="Milestones"
            title="A practical growth story built around channel fit and product clarity."
            subtitle="The timeline reflects how the portfolio has been shaped to support real commercial use."
          />
          <div className="relative mt-14">
            <div className="absolute bottom-0 left-6 top-3 w-px bg-gradient-to-b from-[#FF8A00] via-[#FF8A00]/80 to-[#FF8A00]/25 md:left-1/2 md:-translate-x-1/2" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div key={milestone.year} className="relative md:grid md:grid-cols-2 md:gap-12">
                    <span className="absolute left-6 top-8 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-white bg-[#FF8A00] shadow-[0_0_0_8px_rgba(255,138,0,0.15)] md:left-1/2" />
                    <div
                      className={`pl-14 md:pl-0 ${isLeft ? "md:col-start-1 md:mr-8" : "md:col-start-2 md:ml-8"}`}
                    >
                      <article className="rounded-[2rem] border border-zinc-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#FF8A00]/50 hover:shadow-[0_24px_48px_-40px_rgba(255,138,0,0.85)]">
                        <span className="mb-4 inline-flex rounded-full bg-[#FF8A00] px-4 py-1.5 text-xs font-semibold tracking-[0.12em] text-white">
                          {milestone.year}
                        </span>
                        <h3 className="font-heading text-2xl leading-tight text-zinc-950">{milestone.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-zinc-600">{milestone.body}</p>
                      </article>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 md:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 rounded-[2.8rem] border border-[#FF8A00]/20 bg-gradient-to-br from-orange-50 via-white to-orange-100 p-7 md:grid-cols-[1.1fr_1fr] md:p-12">
          <SectionHeading
            eyebrow="Product Philosophy"
            title="More than drinks. A portfolio built around occasions."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {productPhilosophyCards.map((item) => (
              <article
                key={item.title}
                className="group rounded-[2rem] border border-white/70 bg-white/75 p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-[#FF8A00] hover:text-white hover:shadow-[0_18px_40px_-30px_rgba(255,138,0,1)]"
              >
                <h3 className="font-heading text-2xl leading-tight text-zinc-950 transition duration-300 group-hover:text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 transition duration-300 group-hover:text-white/90">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 pt-10">
        <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-[3rem] bg-[#FF8A00] p-8 text-zinc-950 shadow-[0_45px_85px_-55px_rgba(255,138,0,1)] md:p-14">
          <span className="pointer-events-none absolute -right-8 top-10 h-32 w-32 rounded-full border border-white/50 bg-white/20" />
          <span className="pointer-events-none absolute bottom-8 left-12 h-20 w-20 rounded-full border border-white/60 bg-white/25" />
          <h2 className="font-heading max-w-3xl text-3xl leading-tight text-zinc-950 md:text-5xl">
            Let&apos;s build stronger beverage moments together.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-zinc-900/85 md:text-lg">
            Whether you are a retailer, horeca operator, event organiser, or distribution partner, Singapore
            Beverages Nepal is ready to grow with you.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1"
            >
              Contact Us
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full bg-white/70 px-7 py-3 text-sm font-semibold text-zinc-900 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
