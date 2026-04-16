import type { Metadata } from "next";

import { ProductGrid } from "@/components/products/ProductGrid";
import { SchemaScript } from "@/components/shared/SchemaScript";
import { PageHero } from "@/components/shared/PageHero";
import { CATALOG_PRODUCTS } from "@/data/products";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Products",
  description:
    "Explore the full Singapore Beverages portfolio of flavoured drinks and premium mixers in Nepal.",
  path: "/products",
  keywords: ["soft drinks nepal", "beverages nepal", "mixers nepal"],
});

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#fff8f1_0%,#ffffff_24%,#fff6ec_100%)] pb-32">
      <SchemaScript
        schema={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
        ])}
      />
      
      <PageHero 
        label="Our Portfolio"
        title={
          <>
            A sharper product wall for <span className="italic text-[#FF3366]">refreshment</span>, fruit flavour, and premium mixing.
          </>
        }
        description="Browse the core range and the Fruit Gems line in a denser four-column catalogue built for easier scanning, cleaner shelf presence, and faster product discovery."
        gradientFrom="from-rose-50"
      />

      <div className="mx-auto max-w-[85rem] pt-16 px-5 md:px-8 lg:px-10">
        <ProductGrid products={CATALOG_PRODUCTS} />
      </div>
    </main>
  );
}
