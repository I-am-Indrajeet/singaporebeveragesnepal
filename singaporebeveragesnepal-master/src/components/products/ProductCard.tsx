import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/types/product";

export type ProductCardProps = {
  product: Product;
  layout?: "grid" | "featured";
  priority?: boolean;
};

export function ProductCard({
  product,
  layout = "grid",
  priority = false,
}: ProductCardProps) {
  const featured = layout === "featured";

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-32px_rgba(24,24,27,0.35)]"
      style={{
        boxShadow: featured ? `0 18px 48px -36px ${product.accentColor}` : undefined,
      }}
    >
      <div
        className={`relative overflow-hidden ${
          featured ? "min-h-[21rem]" : "min-h-[17rem]"
        }`}
        style={{
          background: `linear-gradient(145deg, ${product.bgColor}, ${product.bgColorDark})`,
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.28),transparent_36%)]" />
        <Image
          src={product.image}
          alt={`${product.name} by Singapore Beverages`}
          width={560}
          height={920}
          priority={priority}
          className={`mx-auto mt-7 h-auto object-contain transition-transform duration-500 group-hover:scale-[1.03] ${
            featured ? "w-[12rem] md:w-[13rem]" : "w-[10.5rem]"
          }`}
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
            {product.category}
          </p>
          <h3 className="font-heading text-2xl text-zinc-950">{product.name}</h3>
          <p className="text-sm leading-6 text-zinc-600">{product.tagline}</p>
          <p className="text-sm leading-6 text-zinc-500">
            {product.heroSubtext}
          </p>
        </div>

        <ul className="mt-auto flex flex-wrap gap-2">
          {product.features.slice(0, 2).map((feature) => (
            <li
              key={feature}
              className="rounded-full border px-3 py-1 text-xs font-medium text-zinc-700"
              style={{ borderColor: `${product.accentColor}55` }}
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
