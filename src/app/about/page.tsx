import type { Metadata } from "next";

import { SchemaScript } from "@/components/shared/SchemaScript";
import { AboutPageSections } from "@/components/about/AboutPageSections";
import { getAllEvents } from "@/lib/cms/content";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Discover Singapore Beverages Nepal’s story, mission, and journey—from 2016 to today—building a premium, Nepal-born beverage identity.",
  path: "/about",
  keywords: ["about singapore beverages nepal", "nepali beverage brand", "premium beverages nepal"],
});

export default async function AboutPage() {
  const events = await getAllEvents();
  const years = 9;
  const portfolioLines = 10;
  const activations = events.length;

  return (
    <main className="bg-white min-h-screen">
      <SchemaScript
        schema={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <AboutPageSections years={years} portfolioLines={portfolioLines} activations={activations} />
    </main>
  );
}
