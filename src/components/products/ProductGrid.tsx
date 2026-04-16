"use client";

import { useMemo, useState, useTransition } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { CategoryFilter, type ProductCategory } from "@/components/products/CategoryFilter";
import { ProductCard } from "@/components/products/ProductCard";
import type { Product } from "@/types/product";

type ProductGridProps = {
  products: Product[];
};

const CATEGORIES: ProductCategory[] = [
  "all",
  "flavoured",
  "mixer",
  "sparkling",
  "still",
];

export function ProductGrid({ products }: ProductGridProps) {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("all");
  const [, startTransition] = useTransition();

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") {
      return products;
    }

    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory, products]);

  return (
    <div className="space-y-8">
      <CategoryFilter
        activeCategory={activeCategory}
        categories={CATEGORIES}
        onChange={(category) => {
          startTransition(() => setActiveCategory(category));
        }}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
