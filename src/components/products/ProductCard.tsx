import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { PRODUCT_CATEGORY_LABELS, type Product } from "@/types/product";

export type ProductCardProps = {
  product: Product;
  layout?: "grid" | "featured";
  priority?: boolean;
  showWatermark?: boolean;
};

export function ProductCard({
  product,
  layout = "grid",
  priority = false,
  showWatermark = true,
}: ProductCardProps) {
  const featured = layout === "featured";
  const categoryLabel = PRODUCT_CATEGORY_LABELS[product.category];
  const stageTone =
    product.textColor === "dark"
      ? "text-zinc-950/90 border-zinc-950/12 bg-white/55"
      : "text-white/95 border-white/20 bg-white/12";
  const stageWatermark =
    product.textColor === "dark" ? "text-zinc-950/12" : "text-white/14";

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative isolate flex h-full min-h-[27rem] flex-col overflow-hidden rounded-[2.2rem] border border-white/65 bg-white/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_90px_-36px_rgba(15,23,42,0.42)]"
      style={{
        boxShadow: featured
          ? `0 36px 90px -44px ${product.accentColor}`
          : "0 24px 60px -34px rgba(15, 23, 42, 0.38)",
      }}
    >
      <div className="pointer-events-none absolute inset-[1px] rounded-[calc(2.2rem-1px)] bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,255,255,0.24))]" />
      <div
        className="pointer-events-none absolute inset-x-10 top-0 h-40 rounded-full blur-3xl"
        style={{ backgroundColor: `${product.accentColor}22` }}
      />

      <div
        className={`relative overflow-hidden ${
          featured ? "min-h-[20rem]" : "min-h-[16.5rem]"
        }`}
        style={{
          background: `linear-gradient(160deg, ${product.bgColor}, ${product.bgColorDark})`,
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.92),transparent_30%),radial-gradient(circle_at_82%_10%,rgba(255,255,255,0.36),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.14),transparent_38%,rgba(15,23,42,0.18))]" />

        <div className="absolute inset-x-7 top-6 flex items-center justify-between">
          <span
            className={`rounded-full border px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] backdrop-blur-md ${stageTone}`}
          >
            {categoryLabel}
          </span>
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-md transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${stageTone}`}
          >
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>

        <div className="absolute inset-x-12 bottom-5 h-8 rounded-full bg-black/20 blur-2xl transition-all duration-500 group-hover:scale-110 group-hover:blur-3xl" />
        {showWatermark ? (
          <p
            className={`pointer-events-none absolute inset-x-5 bottom-2 font-heading text-[clamp(2.8rem,5vw,4.4rem)] font-black uppercase tracking-[-0.08em] ${stageWatermark}`}
          >
            {product.shortName}
          </p>
        ) : null}

        <div
          className={`relative z-10 mx-auto mt-10 ${
            featured
              ? "h-[15.5rem] w-[13.25rem] md:h-[17.25rem] md:w-[14.25rem]"
              : "h-[13.5rem] w-[10.75rem] md:h-[15.25rem] md:w-[11.75rem]"
          }`}
        >
          <Image
            src={product.image}
            alt={`${product.name} by Singapore Beverages`}
            fill
            priority={priority}
            sizes="(max-width: 768px) 200px, 240px"
            className="object-contain transition-transform duration-500 group-hover:-translate-y-3 group-hover:scale-[1.06]"
          />
        </div>
      </div>

      <div className="relative z-10 flex flex-1 flex-col gap-4 p-6">
        <div className="space-y-3">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-zinc-500">
            {product.tagline}
          </p>
          <h3 className="font-heading text-[1.9rem] leading-[0.95] tracking-tight text-zinc-950">
            {product.name}
          </h3>
          <p className="min-h-[4.5rem] text-sm leading-6 text-zinc-600">
            {product.heroSubtext}
          </p>
        </div>

        <ul className="mt-auto flex flex-wrap gap-2">
          {product.features.slice(0, 2).map((feature) => (
            <li
              key={feature}
              className="rounded-full border border-white/70 px-3 py-1 text-xs font-medium text-zinc-700 shadow-[0_8px_20px_-18px_rgba(24,24,27,0.8)]"
              style={{
                borderColor: `${product.accentColor}55`,
                backgroundColor: `${product.accentColor}10`,
              }}
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
