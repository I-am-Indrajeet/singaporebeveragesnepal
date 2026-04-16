"use client";


import { cn } from "@/lib/utils/cn";
import type { Product } from "@/types/product";

export type ProductSwitcherProps = {
  products: Product[];
  activeIndex: number;
  onSelect: (index: number) => void;
  accentColor: string;
  darkAccentColor: string;
  textColor: string;
};

export function ProductSwitcher({
  products,
  activeIndex,
  onSelect,
  accentColor,
  darkAccentColor,
  textColor,
}: ProductSwitcherProps) {
  return (
    <div className="flex flex-1 flex-wrap items-center justify-center gap-x-6 gap-y-3">
      {products.map((product, index) => {
        const isActive = index === activeIndex;

        return (
          <button
            key={product.id}
            type="button"
            aria-label={`Show ${product.name}`}
            className="flex items-center gap-3 transition-transform hover:scale-105"
            onClick={() => onSelect(index)}
          >
            <span
              className={cn(
                "h-2.5 rounded-full transition-all duration-300",
                isActive ? "w-12" : "w-8",
              )}
              style={{
                backgroundColor: isActive ? accentColor : `${darkAccentColor}33`,
              }}
            />
            <span
              className="text-[0.7rem] font-bold uppercase tracking-[0.2em] transition-colors duration-300"
              style={{
                color: isActive ? textColor : `${textColor}77`,
              }}
            >
              {product.shortName}
            </span>
          </button>
        );
      })}
    </div>
  );
}
