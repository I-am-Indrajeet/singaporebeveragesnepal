import { ProductCard } from "@/components/products/ProductCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PRODUCTS } from "@/data/products";
import { SPACING } from "@/styles/tokens";

export function FeaturedProducts() {
  return (
    <div className={`${SPACING.sectionY} ${SPACING.containerX}`}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured Products"
          title="A premium range built for shelf impact and repeat purchase."
          subtitle="The lead range balances familiar flavour cues with polished packaging and dependable serving versatility."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PRODUCTS.slice(0, 3).map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              layout="featured"
              priority={index === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
