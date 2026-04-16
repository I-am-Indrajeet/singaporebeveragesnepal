import type { Metadata } from "next";

import { ProductGrid } from "@/components/products/ProductGrid";
import { SchemaScript } from "@/components/shared/SchemaScript";
import { PageHero } from "@/components/shared/PageHero";
import { PRODUCTS } from "@/data/products";
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
    <main className="bg-white min-h-screen pb-32">
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
            A beverage portfolio designed for <span className="italic text-[#FF3366]">refreshment</span>, pairing, and premium mixing.
          </>
        }
        description="Filter the range by category and explore products rigorously built for retail shelves, horeca menus, and event supply."
        gradientFrom="from-rose-50"
      />

      <div className="mx-auto max-w-[85rem] pt-16 px-5 md:px-8 lg:px-10">
        <ProductGrid products={PRODUCTS} />
      </div>
    </main>
  );
}
