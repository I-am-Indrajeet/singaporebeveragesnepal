"use client";

import Image from "next/image";

import { motion, useReducedMotion } from "framer-motion";

import { PRODUCT_CATEGORY_LABELS, type Product } from "@/types/product";

type ProductDetailHeroProps = {
  product: Product;
};

const SMOKE_PLUMES = [
  { left: "20%", size: 84, delay: 0.05, drift: -42 },
  { left: "32%", size: 118, delay: 0.14, drift: -16 },
  { left: "44%", size: 106, delay: 0.24, drift: 18 },
  { left: "56%", size: 112, delay: 0.33, drift: 28 },
  { left: "68%", size: 92, delay: 0.42, drift: 12 },
  { left: "78%", size: 74, delay: 0.5, drift: 40 },
];

export function ProductDetailHero({ product }: ProductDetailHeroProps) {
  const reduceMotion = useReducedMotion();
  const textTone = product.textColor === "dark" ? "text-zinc-950" : "text-white";
  const mutedTone =
    product.textColor === "dark" ? "text-zinc-950/68" : "text-white/78";

  return (
    <section className="relative isolate overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 12%, ${product.accentColor}55, transparent 30%), linear-gradient(180deg, ${product.bgColor} 0%, ${product.bgColorDark} 100%)`,
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.2),transparent_26%,rgba(15,23,42,0.12))]" />

      <div className="relative mx-auto flex min-h-[44rem] max-w-7xl flex-col items-center px-5 pb-16 pt-28 text-center md:px-8 md:pb-20 md:pt-36 lg:px-10">
        <motion.p
          className={`text-sm font-semibold uppercase tracking-[0.34em] ${mutedTone}`}
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {PRODUCT_CATEGORY_LABELS[product.category]}
        </motion.p>
        <motion.h1
          className={`mt-6 max-w-4xl font-heading text-5xl font-black leading-[0.94] tracking-tight md:text-6xl lg:text-7xl ${textTone}`}
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {product.heroHeadline}
        </motion.h1>
        <motion.p
          className={`mt-5 max-w-2xl text-base leading-7 md:text-lg md:leading-8 ${mutedTone}`}
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.16, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {product.heroSubtext}
        </motion.p>

        <div className="relative mt-10 flex w-full flex-1 items-end justify-center overflow-hidden">
          <div
            className={`pointer-events-none absolute inset-x-0 top-[18%] text-center font-heading text-[clamp(5rem,18vw,15rem)] font-black uppercase tracking-[-0.08em] ${
              product.textColor === "dark" ? "text-zinc-950/12" : "text-white/12"
            }`}
          >
            {product.shortName}
          </div>

          <div
            className="pointer-events-none absolute inset-x-[12%] bottom-6 h-16 rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, ${product.accentColor}66 0%, transparent 68%)`,
            }}
          />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40">
            {SMOKE_PLUMES.map((plume) => (
              <motion.span
                key={`${product.id}-${plume.left}`}
                className="absolute bottom-0 rounded-full blur-[34px]"
                style={{
                  left: plume.left,
                  width: plume.size,
                  height: plume.size * 0.72,
                  background: `radial-gradient(circle, rgba(255,255,255,0.48) 0%, ${product.accentColor}26 54%, transparent 100%)`,
                }}
                initial={
                  reduceMotion ? false : { opacity: 0, y: 30, scale: 0.45 }
                }
                animate={
                  reduceMotion
                    ? { opacity: 0.18 }
                    : {
                        opacity: [0, 0.34, 0],
                        y: [30, -36, -132],
                        x: [0, plume.drift],
                        scale: [0.45, 1, 1.6],
                      }
                }
                transition={{
                  duration: reduceMotion ? 0 : 1.7,
                  delay: plume.delay,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>

          <motion.div
            initial={
              reduceMotion ? false : { opacity: 0, y: 120, scale: 0.78, rotate: -5 }
            }
            animate={
              reduceMotion
                ? undefined
                : { opacity: 1, y: 0, scale: 1, rotate: 0 }
            }
            transition={{
              duration: 0.95,
              delay: 0.18,
              type: "spring",
              stiffness: 120,
              damping: 18,
            }}
            className="relative z-10"
          >
            <Image
              src={product.image}
              alt={`${product.name} product image`}
              width={760}
              height={1260}
              priority
              className="h-auto w-[15rem] object-contain drop-shadow-[0_34px_72px_rgba(0,0,0,0.28)] md:w-[18rem] lg:w-[21rem]"
            />
          </motion.div>
        </div>

        <motion.div
          className="mt-6 flex flex-wrap justify-center gap-3"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {product.sizes.map((size) => (
            <span
              key={size}
              className={`rounded-full border px-4 py-2 text-sm ${
                product.textColor === "dark"
                  ? "border-zinc-950/12 bg-white/48 text-zinc-950"
                  : "border-white/18 bg-white/12 text-white"
              }`}
            >
              {size}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
