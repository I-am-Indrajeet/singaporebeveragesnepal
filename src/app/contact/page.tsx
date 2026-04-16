import type { Metadata } from "next";

import { SchemaScript } from "@/components/shared/SchemaScript";
import { PageHero } from "@/components/shared/PageHero";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact Singapore Beverages for general enquiries, commercial discussions, or event-related questions in Nepal.",
  path: "/contact",
  keywords: ["contact singapore beverages", "beverage company contact nepal"],
});

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen pb-32">
      <SchemaScript
        schema={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      
      <PageHero 
        label="Get in touch"
        title="Start a conversation."
        description="Reach out to the Singapore Beverages team for general enquiries, commercial discussions, or event-related questions in Nepal."
        gradientFrom="from-zinc-100"
      />

      <div className="mx-auto max-w-[85rem] px-5 md:px-8 lg:px-10 pt-20">
        <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6 rounded-[2rem] border border-zinc-200 bg-white p-8">
            <div>
              <h2 className="font-heading text-2xl text-zinc-950">General enquiries</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                hello@singaporebeverages.com.np
              </p>
            </div>
            <div>
              <h2 className="font-heading text-2xl text-zinc-950">Commercial</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                Kathmandu, Nepal
              </p>
            </div>
            <div>
              <h2 className="font-heading text-2xl text-zinc-950">Map</h2>
              <div className="mt-4 flex min-h-[16rem] items-center justify-center rounded-[1.5rem] bg-zinc-100 text-sm text-zinc-500">
                Map placeholder for Kathmandu office location
              </div>
            </div>
          </div>
          <form className="rounded-[2rem] border border-zinc-200 bg-white p-8">
            <div className="grid gap-4">
              <input className="rounded-full border border-zinc-200 px-5 py-3" placeholder="Full name" />
              <input className="rounded-full border border-zinc-200 px-5 py-3" placeholder="Email address" />
              <input className="rounded-full border border-zinc-200 px-5 py-3" placeholder="Phone number" />
              <textarea className="min-h-[12rem] rounded-[1.5rem] border border-zinc-200 px-5 py-4" placeholder="How can we help?" />
              <button type="submit" className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-semibold text-white">
                Send Enquiry
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
