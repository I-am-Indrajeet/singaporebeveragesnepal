import type { Metadata } from "next";

import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { SchemaScript } from "@/components/shared/SchemaScript";
import { PageHero } from "@/components/shared/PageHero";
import { SITE_FAQS } from "@/data/faq";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "FAQ",
  description:
    "Find answers about Singapore Beverages products, distribution, bulk ordering, and event supply in Nepal.",
  path: "/faq",
  keywords: ["singapore beverages faq", "bulk order beverages nepal"],
});

export default function FaqPage() {
  return (
    <main className="bg-white min-h-screen pb-32">
      <SchemaScript
        schema={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ])}
      />

      <PageHero 
        label="Information"
        title="Frequently asked questions."
        description="Answers for retailers, partners, horeca buyers, and event planners covering the current portfolio and partnership pathways."
        gradientFrom="from-zinc-100"
      />

      <div className="mx-auto max-w-[85rem] px-5 md:px-8 lg:px-10 pt-20">
        <FAQAccordion items={SITE_FAQS} />
      </div>
    </main>
  );
}
