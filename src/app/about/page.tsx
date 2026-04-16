import type { Metadata } from "next";

import { SchemaScript } from "@/components/shared/SchemaScript";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PageHero } from "@/components/shared/PageHero";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Learn about Singapore Beverages, its Nepal market focus, product philosophy, and growth roadmap.",
  path: "/about",
  keywords: ["about singapore beverages", "beverage company nepal"],
});

const MILESTONES = [
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

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen pb-32">
      <SchemaScript
        schema={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      <PageHero 
        label="Our Story"
        title={<>Familiar flavours. <span className="italic text-[#FF8A00]">Stronger presence.</span></>}
        description="Singapore Beverages builds familiar formats into a sharper commercial brand. Our portfolio is designed for Nepal with a focus on recognisable taste, cleaner presentation, and clear use cases across all channels."
        gradientFrom="from-amber-50"
      />

      <div className="mx-auto max-w-[85rem] px-5 md:px-8 lg:px-10 pt-20 space-y-24">
        <section className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="max-w-2xl">
            <h2 className="font-serif text-[2.5rem] md:text-[3rem] text-zinc-900 leading-tight tracking-tight mb-6 mt-1">Driving commercial growth through better basics.</h2>
            <p className="text-lg text-zinc-500 font-medium leading-relaxed">
              We recognized a massive gap in how local beverages were being presented and distributed. We exist to close that gap by engineering products that look, feel, and taste premium.
            </p>
          </div>
          <div className="rounded-[2.5rem] bg-[#0A0A0A] p-10 md:p-14 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[20rem] h-[20rem] bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            
            <h2 className="font-serif text-[2rem] tracking-tight text-white mb-3 relative z-10">Mission</h2>
            <p className="mt-4 text-base leading-7 text-white/78">
              To create a beverage range that feels rooted in local preferences
              while meeting modern expectations for packaging, consistency, and
              channel relevance.
            </p>
            <h2 className="mt-8 font-heading text-3xl">Vision</h2>
            <p className="mt-4 text-base leading-7 text-white/78">
              To become a dependable beverage partner for Nepalese retailers,
              horeca operators, and event organisers through stronger portfolio
              thinking and disciplined supply planning.
            </p>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-[2rem] border border-zinc-200 bg-white p-6">
            <h2 className="font-heading text-2xl">What we believe</h2>
            <p className="mt-4 text-sm leading-7 text-zinc-600">
              Good beverage brands earn repeat purchase by getting the basics
              right: flavour confidence, visual clarity, and dependable serving
              performance.
            </p>
          </div>
          <div className="rounded-[2rem] border border-zinc-200 bg-white p-6">
            <h2 className="font-heading text-2xl">Who we serve</h2>
            <p className="mt-4 text-sm leading-7 text-zinc-600">
              The brand is built for supermarkets, convenience retail,
              restaurants, cafés, hotels, bars, and event supply partners across
              Nepal.
            </p>
          </div>
          <div className="rounded-[2rem] border border-zinc-200 bg-white p-6">
            <h2 className="font-heading text-2xl">How we grow</h2>
            <p className="mt-4 text-sm leading-7 text-zinc-600">
              Growth comes from tighter product positioning, clearer partner
              pathways, and a portfolio that performs across multiple channels.
            </p>
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Milestones"
            title="A practical growth story built around channel fit and product clarity."
            subtitle="The timeline reflects how the portfolio has been shaped to support real commercial use."
          />
          <div className="grid gap-6">
            {MILESTONES.map((milestone) => (
              <article
                key={milestone.year}
                className="grid gap-4 rounded-[2rem] border border-zinc-200 bg-white p-6 md:grid-cols-[9rem_1fr]"
              >
                <div className="font-heading text-3xl text-[var(--accent)]">
                  {milestone.year}
                </div>
                <div>
                  <h3 className="font-heading text-2xl text-zinc-950">
                    {milestone.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    {milestone.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
