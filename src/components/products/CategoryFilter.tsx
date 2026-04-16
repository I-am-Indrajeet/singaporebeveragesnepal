"use client";

import { cn } from "@/lib/utils/cn";
import { RADIUS } from "@/styles/tokens";
import { PRODUCT_CATEGORY_LABELS, type ProductCategory } from "@/types/product";

export type ProductFilterCategory = ProductCategory | "all";

type CategoryFilterProps = {
  activeCategory: ProductFilterCategory;
  categories: ProductFilterCategory[];
  onChange: (category: ProductFilterCategory) => void;
};

export function CategoryFilter({
  activeCategory,
  categories,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => {
        const label =
          category === "all" ? "All Products" : PRODUCT_CATEGORY_LABELS[category];

        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            className={cn(
              "border px-4 py-2 text-sm font-medium transition-all duration-300",
              RADIUS.pill,
              activeCategory === category
                ? "border-zinc-950 bg-zinc-950 text-white shadow-[0_16px_30px_-20px_rgba(24,24,27,0.95)]"
                : "border-white/70 bg-white/75 text-zinc-700 shadow-[0_10px_30px_-24px_rgba(24,24,27,0.55)] backdrop-blur hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-white",
            )}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
