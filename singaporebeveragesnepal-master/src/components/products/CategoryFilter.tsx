"use client";

import { cn } from "@/lib/utils/cn";
import { RADIUS } from "@/styles/tokens";
import type { Product } from "@/types/product";

export type ProductCategory = Product["category"] | "all";

type CategoryFilterProps = {
  activeCategory: ProductCategory;
  categories: ProductCategory[];
  onChange: (category: ProductCategory) => void;
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
          category === "all"
            ? "All Products"
            : category.charAt(0).toUpperCase() + category.slice(1);

        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            className={cn(
              "border px-4 py-2 text-sm font-medium capitalize transition-colors duration-300",
              RADIUS.pill,
              activeCategory === category
                ? "border-zinc-950 bg-zinc-950 text-white"
                : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-400",
            )}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
