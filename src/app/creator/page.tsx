import type { Metadata } from "next";
import Link from "next/link";

import { SchemaScript } from "@/components/shared/SchemaScript";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import CreatorCollaborationsSection from "@/components/sections/CreatorCollaborationsSection";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo/metadata";

const creatorSteps = [
  {
    title: "Post your beverage content",
    description:
      "Create short-form videos, reels, stories, and lifestyle content featuring Singapore Beverages in a clean, energetic, and social-first way.",
  },
  {
    title: "Grow with product access",
    description:
      "Selected creators receive PR packages so they can taste, shoot, and style the products with more consistency across their content.",
  },
  {
    title: "Get event invitations",
    description:
      "Join launches, activations, and brand experiences across Nepal to capture real moments and stronger audience-facing storytelling.",
  },
];

const creatorBenefits = [
  "PR packages for content creation",
  "Invitations to brand events and activations",
  "Early visibility on launches and campaigns",
  "A clear collaboration path with the marketing team",
];

const contentIdeas = [
  "Taste tests and product reactions",
  "Lifestyle reels with our drinks in-frame",
  "Event-day content and activation recaps",
  "Creative serving shots, pairings, and styling",
];

const marketingMaterialsLink = "https://drive.google.com/";

export const metadata: Metadata = buildMetadata({
  title: "Creator Program",
  description:
    "Become a creator for Singapore Beverages Nepal. Make social media content, receive PR packages, and get invited to events and activations.",
  path: "/creator",
  keywords: ["creator program nepal", "brand creator collaboration nepal", "beverage influencer nepal"],
});

export default function CreatorPage() {
  return (
    <main className="min-h-screen bg-white pb-32">
      <SchemaScript
        schema={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Creator", path: "/creator" },
        ])}
      />

      <PageHero
        label="Creator Program"
        title="Create the refreshment story."
        description="Make social media content around Singapore Beverages, receive PR packages, and get invited to events and activations across Nepal."
        gradientFrom="from-[#FF8A00]/12"
      />

      <div className="mx-auto max-w-[85rem] space-y-16 px-5 pt-20 md:px-8 lg:px-10">
        <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-[2.5rem] border border-zinc-200 bg-white p-8 shadow-[0_30px_80px_-60px_rgba(255,138,0,0.55)] md:p-10">
            <SectionHeading
              eyebrow="How it works"
              title="Become a creator for the brand."
              subtitle="The creator page is built for people who already know how to make engaging content and want access to products, moments, and campaign opportunities."
            />

            <div className="mt-10 space-y-5">
              {creatorSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-[2rem] border border-zinc-200 bg-[#FAFAF9] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#FF8A00]/40 hover:shadow-[0_24px_60px_-42px_rgba(255,138,0,0.8)]"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#FF8A00] text-sm font-bold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-heading text-2xl text-zinc-950">{step.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-zinc-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <aside className="rounded-[2.5rem] bg-zinc-950 p-8 text-white shadow-[0_36px_90px_-58px_rgba(24,24,27,0.85)] md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF8A00]">Why join</p>
            <h2 className="mt-4 font-heading text-4xl leading-tight">Make content that feels social, local, and brand-ready.</h2>
            <p className="mt-5 text-base leading-7 text-white/72">
              We want creators who can make short, sharp, visually strong content around product moments, event energy,
              and everyday refreshment culture.
            </p>

            <div className="mt-8 grid gap-4">
              {creatorBenefits.map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-[1.75rem] border border-white/10 bg-white/5 px-5 py-4 text-sm font-medium text-white/86 backdrop-blur"
                >
                  {benefit}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#FF8A00] px-6 text-sm font-semibold text-zinc-950 transition hover:-translate-y-1"
              >
                Apply as Creator
              </Link>
              <Link
                href="/events"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-white/10"
              >
                View Events
              </Link>
            </div>
          </aside>
        </section>

        <CreatorCollaborationsSection />

        <section className="grid gap-6 md:grid-cols-2">
          <article className="rounded-[2.25rem] border border-zinc-200 bg-[#FFF8F1] p-8">
            <SectionHeading
              eyebrow="What to create"
              title="Content that performs visually."
              subtitle="Use the products in ways that feel native to social media rather than static or over-scripted."
            />
            <div className="mt-8 grid gap-4">
              {contentIdeas.map((idea) => (
                <div key={idea} className="rounded-[1.6rem] border border-[#FF8A00]/15 bg-white px-5 py-4 text-sm text-zinc-700">
                  {idea}
                </div>
              ))}
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[2.25rem] border border-zinc-200 bg-white p-8">
            <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-[#FF8A00]/12 blur-3xl" />
            <SectionHeading
              eyebrow="Creator fit"
              title="Who this is for."
              subtitle="This page is designed for creators who can shoot product-forward videos, understand social pacing, and know how to make branded content feel natural."
            />
            <div className="mt-8 space-y-4 text-sm leading-7 text-zinc-600">
              <p>You do not need a massive audience. What matters more is clear visual taste, strong execution, and reliable communication.</p>
              <p>If your style fits the brand, we can explore PR drops, creator collaborations, and invitations to selected events.</p>
            </div>
          </article>
        </section>

        <section className="rounded-[2.75rem] bg-gradient-to-br from-[#FF8A00] to-[#FFB347] p-8 text-zinc-950 shadow-[0_40px_90px_-60px_rgba(255,138,0,0.95)] md:p-12">
          <SectionHeading
            eyebrow="Marketing material"
            title="Download creator-ready marketing material."
            subtitle="Use this section for logos, product visuals, campaign references, and brand assets. Replace the placeholder button link with your Google Drive folder."
          />

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={marketingMaterialsLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-semibold text-white transition hover:-translate-y-1"
            >
              Download Marketing Material
            </a>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-950/10 bg-white/70 px-6 text-sm font-semibold text-zinc-950 backdrop-blur transition hover:-translate-y-1 hover:bg-white"
            >
              Talk to Marketing
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
