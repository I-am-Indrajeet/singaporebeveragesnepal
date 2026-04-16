import type { Metadata } from "next";
import Link from "next/link";

import { SchemaScript } from "@/components/shared/SchemaScript";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Soft Drinks Nepal",
  description:
    "Singapore Beverages offers soft drinks in Nepal with flavoured refreshment and premium mixer options for retail, horeca, and event supply.",
  path: "/soft-drinks-nepal",
  keywords: ["soft drinks nepal", "soft drink company nepal", "premium drinks nepal"],
});

export default function SoftDrinksNepalPage() {
  return (
    <main className="bg-[#FAFAF9] min-h-screen pt-32 pb-32 px-5 md:px-8 lg:px-10 md:pt-40">
      <SchemaScript
        schema={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Soft Drinks Nepal", path: "/soft-drinks-nepal" },
        ])}
      />
      <article className="mx-auto max-w-4xl rounded-[2.25rem] border border-zinc-200 bg-white p-8 md:p-12">
        <h1 className="font-heading text-4xl text-zinc-950 md:text-5xl">
          Soft drinks in Nepal with stronger flavour positioning and cleaner commercial relevance
        </h1>
        <div className="mt-8 space-y-6 text-base leading-8 text-zinc-600">
          <p>
            Singapore Beverages is building a soft drinks portfolio for Nepal
            that combines recognisable flavour cues with a more deliberate,
            premium presentation. The current range spans flavoured drinks such
            as Jeeru and Nimbu Pani as well as a premium mixer lineup built
            around Club Soda, Ginger Ale, and Tonic Water. This allows the brand
            to serve both everyday refreshment and more specialised horeca use.
          </p>
          <p>
            In the Nepal market, soft drinks succeed when they match consumer
            taste expectations while still offering a reason for retailers and
            venue operators to give them space. That is why the Singapore
            Beverages range is positioned around clear usage occasions: food
            pairing, warm-weather refreshment, premium mixing, and event-ready
            supply. Each product is described in a way that makes those
            occasions legible for commercial partners.
          </p>
          <p>
            Retailers benefit from a sharper story on shelf, while restaurants,
            cafés, hotels, and bars can read the product range through service
            value rather than packaging alone. This matters in a market where a
            beverage company needs to do more than offer another bottle. The
            range needs to make sense to both the buyer and the end customer.
          </p>
          <p>
            If you are looking for soft drinks in Nepal for resale, venue
            service, or event planning, the website gives you direct access to
            the product portfolio, distributor pathway, bulk-order enquiry, and
            broader brand information. Explore the <Link href="/products" className="font-semibold text-zinc-950">products page</Link>, review the <Link href="/distributor" className="font-semibold text-zinc-950">distributor partnership route</Link>, or submit a request through <Link href="/bulk-order" className="font-semibold text-zinc-950">bulk orders</Link>.
          </p>
        </div>
      </article>
    </main>
  );
}
