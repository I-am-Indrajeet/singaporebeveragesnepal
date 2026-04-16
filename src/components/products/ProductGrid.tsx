"use client";

import { useMemo, useState, useTransition } from "react";

import { AnimatePresence, motion } from "framer-motion";

import {
  CategoryFilter,
  type ProductFilterCategory,
} from "@/components/products/CategoryFilter";
import { ProductCard } from "@/components/products/ProductCard";
import type { Product } from "@/types/product";

type ProductGridProps = {
  products: Product[];
};

const CATEGORIES: ProductFilterCategory[] = [
  "all",
  "flavoured",
  "mixer",
  "sparkling",
  "fruit-gems",
  "still",
];

export function ProductGrid({ products }: ProductGridProps) {
  const [activeCategory, setActiveCategory] = useState<ProductFilterCategory>("all");
  const [, startTransition] = useTransition();

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") {
      return products;
    }

    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory, products]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
        <CategoryFilter
          activeCategory={activeCategory}
          categories={CATEGORIES}
          onChange={(category) => {
            startTransition(() => setActiveCategory(category));
          }}
        />
        <div className="flex items-center gap-3 text-sm text-zinc-500">
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-950" />
          <p>
            Showing <span className="font-semibold text-zinc-950">{filteredProducts.length}</span> of{" "}
            <span className="font-semibold text-zinc-950">{products.length}</span> products
          </p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          className="grid auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-4"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} showWatermark={false} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
