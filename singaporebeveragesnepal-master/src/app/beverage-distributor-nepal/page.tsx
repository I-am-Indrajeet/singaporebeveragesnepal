import type { Metadata } from "next";
import Link from "next/link";

import { SchemaScript } from "@/components/shared/SchemaScript";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Beverage Distributor Nepal",
  description:
    "Singapore Beverages is building distributor partnerships in Nepal for flavoured beverages, mixers, horeca supply, and retail growth.",
  path: "/beverage-distributor-nepal",
  keywords: ["beverage distributor nepal", "soft drink distributor nepal"],
});

export default function BeverageDistributorNepalPage() {
  return (
    <main className="bg-[#FAFAF9] min-h-screen pt-32 pb-32 px-5 md:px-8 lg:px-10 md:pt-40">
      <SchemaScript
        schema={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Beverage Distributor Nepal", path: "/beverage-distributor-nepal" },
        ])}
      />
      <article className="mx-auto max-w-4xl rounded-[2.25rem] border border-zinc-200 bg-white p-8 md:p-12">
        <h1 className="font-heading text-4xl text-zinc-950 md:text-5xl">
          Beverage distributor opportunities in Nepal for a commercially structured soft drinks portfolio
        </h1>
        <div className="mt-8 space-y-6 text-base leading-8 text-zinc-600">
          <p>
            Singapore Beverages is developing a distributor-facing beverage
            platform in Nepal with a portfolio that spans flavoured drinks and
            premium mixers. This matters because many distributor opportunities
            become more attractive when the product range covers multiple
            channels instead of depending on a single consumption occasion.
          </p>
          <p>
            Jeeru and Nimbu Pani support the flavoured refreshment side of the
            portfolio with strong local relevance, while Club Soda, Ginger Ale,
            and Tonic Water extend the brand into horeca, premium mixer use, and
            event-ready service. For a beverage distributor in Nepal, that means
            the range can open conversations with supermarkets, convenience
            outlets, bars, restaurants, hotels, and event organisers.
          </p>
          <p>
            The website is structured to make that commercial story easier to
            navigate. Product pages explain flavour positioning and usage
            occasions. The distributor page frames partnership value. The bulk
            order page supports larger enquiries. News and events will continue
            to build credibility as the CMS content layer expands.
          </p>
          <p>
            If you are evaluating beverage distributor opportunities in Nepal,
            start with the <Link href="/products" className="font-semibold text-zinc-950">portfolio overview</Link>, review the <Link href="/distributor" className="font-semibold text-zinc-950">distributor pathway</Link>, and use the <Link href="/contact" className="font-semibold text-zinc-950">contact page</Link> to begin a channel-specific discussion.
          </p>
        </div>
      </article>
    </main>
  );
}
