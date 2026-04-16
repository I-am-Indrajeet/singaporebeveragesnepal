import type { Metadata } from "next";

import { SchemaScript } from "@/components/shared/SchemaScript";
import { PageHero } from "@/components/shared/PageHero";
import { CATALOG_PRODUCTS } from "@/data/products";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Bulk Order",
  description:
    "Send a business enquiry for bulk beverage orders from Singapore Beverages in Nepal.",
  path: "/bulk-order",
  keywords: ["bulk soft drinks nepal", "bulk beverage order nepal"],
});

export default function BulkOrderPage() {
  return (
    <main className="bg-white min-h-screen pb-32">
      <SchemaScript
        schema={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Bulk Order", path: "/bulk-order" },
        ])}
      />
      
      <PageHero 
        label="Volume Supply"
        title="Plan larger scale beverage supply."
        description="A structured workflow for hotels, restaurants, cafés, event organisers, and retail buyers who need volume planning tailored to their business."
        gradientFrom="from-[#FF3366]/10"
      />

      <div className="mx-auto max-w-[85rem] px-5 md:px-8 lg:px-10 pt-20">
        <section className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] border border-zinc-200 bg-white p-8">
            <h2 className="font-heading text-3xl text-zinc-950">Why use this route</h2>
            <ul className="mt-6 grid gap-4 text-sm leading-7 text-zinc-600">
              <li>Discuss high-volume requirements by product type</li>
              <li>Plan channel-specific product mixes for retail or horeca</li>
              <li>Coordinate event beverage supply with practical usage guidance</li>
            </ul>
          </div>
          <form className="rounded-[2rem] border border-zinc-200 bg-white p-8">
            <div className="grid gap-4">
              <input className="rounded-full border border-zinc-200 px-5 py-3" placeholder="Business name" />
              <input className="rounded-full border border-zinc-200 px-5 py-3" placeholder="Contact person" />
              <input className="rounded-full border border-zinc-200 px-5 py-3" placeholder="Email address" />
              <select className="rounded-full border border-zinc-200 px-5 py-3">
                <option>Select a product</option>
                {CATALOG_PRODUCTS.map((product) => (
                  <option key={product.id}>{product.name}</option>
                ))}
              </select>
              <textarea className="min-h-[10rem] rounded-[1.5rem] border border-zinc-200 px-5 py-4" placeholder="Share expected volumes, timeframe, and delivery notes." />
              <button type="submit" className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-semibold text-white">
                Submit Bulk Order Request
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
