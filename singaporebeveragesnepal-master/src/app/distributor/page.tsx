import type { Metadata } from "next";

import { SchemaScript } from "@/components/shared/SchemaScript";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PageHero } from "@/components/shared/PageHero";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Become a Distributor",
  description:
    "Explore distributor partnership opportunities with Singapore Beverages across Nepal retail and horeca channels.",
  path: "/distributor",
  keywords: ["beverage distributor nepal", "drink distributor partnership nepal"],
});

export default function DistributorPage() {
  return (
    <main className="bg-white min-h-screen pb-32">
      <SchemaScript
        schema={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Become a Distributor", path: "/distributor" },
        ])}
      />

      <PageHero 
        label="Partnerships"
        title="Grow with a stronger portfolio."
        description="Partner with a beverage range built for retail movement, horeca relevance, and event-ready supply across Nepal."
        gradientFrom="from-[#FF8A00]/10"
      />

      <div className="mx-auto max-w-[85rem] px-5 md:px-8 lg:px-10 pt-20 space-y-16">
        <section className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="pt-4">
            <h2 className="font-serif text-[2.5rem] tracking-tight text-zinc-900 leading-[1.1] mb-6">Partner with a portfolio built for retail movement and event-ready supply.</h2>
            <p className="text-zinc-500 font-medium">This page positions Singapore Beverages as a structured commercial partner for Nepalese distributors looking to grow a beverage range with clear channel fit.</p>
          </div>
          <div className="rounded-[2.25rem] bg-zinc-950 p-8 md:p-12 text-white">
            <h2 className="font-heading text-3xl">Why partner</h2>
            <ul className="mt-6 grid gap-4 text-sm leading-7 text-white/78">
              <li>Recognisable flavour profiles with stronger premium cues</li>
              <li>Portfolio spread across flavoured drinks and mixers</li>
              <li>Use-case clarity for retail, horeca, and events</li>
              <li>Dedicated website pathways for partner and bulk enquiries</li>
            </ul>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {[
            "Clear portfolio segmentation",
            "Commercial storytelling support",
            "Scalable partner conversations",
          ].map((item) => (
            <article
              key={item}
              className="rounded-[2rem] border border-zinc-200 bg-white p-6"
            >
              <h2 className="font-heading text-2xl text-zinc-950">{item}</h2>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                The range is presented in a way that helps distributors explain
                where each product fits and how the full portfolio can grow
                across multiple channels.
              </p>
            </article>
          ))}
        </section>

        <section className="rounded-[2.25rem] border border-zinc-200 bg-white p-8 md:p-10">
          <SectionHeading
            eyebrow="Partnership Form"
            title="Start a distributor conversation."
            subtitle="This form is currently a front-end intake surface and will be connected to your preferred lead workflow later."
          />
          <form className="mt-8 grid gap-4 md:grid-cols-2">
            <input className="rounded-full border border-zinc-200 px-5 py-3" placeholder="Company name" />
            <input className="rounded-full border border-zinc-200 px-5 py-3" placeholder="Contact person" />
            <input className="rounded-full border border-zinc-200 px-5 py-3" placeholder="Email address" />
            <input className="rounded-full border border-zinc-200 px-5 py-3" placeholder="Phone number" />
            <input className="rounded-full border border-zinc-200 px-5 py-3 md:col-span-2" placeholder="Region or distribution territory" />
            <textarea className="min-h-[10rem] rounded-[1.5rem] border border-zinc-200 px-5 py-4 md:col-span-2" placeholder="Tell us about your retail, horeca, or distribution business." />
            <button type="submit" className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-semibold text-white md:col-span-2 md:w-fit">
              Submit Partnership Interest
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
