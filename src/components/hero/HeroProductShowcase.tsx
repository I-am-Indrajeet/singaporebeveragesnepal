"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { HeroBackgroundShapes } from "@/components/hero/HeroBackgroundShapes";
import { useHeroTheme } from "@/components/hero/HeroThemeContext";
import { ProductSwitcher } from "@/components/hero/ProductSwitcher";
import { PrimaryButton } from "@/components/shared/PrimaryButton";
import { SecondaryButton } from "@/components/shared/SecondaryButton";
import { HERO_PRODUCTS } from "@/data/products";

const HERO_THEME_MAP = {
  jeeru: {
    background: "#F5EFD9",
    panel: "#CEDF8E",
    accent: "#93B960",
    halo: "#DCE8A9",
    text: "#2B3327",
    muted: "#55604A",
    outline: "#A8BE7F",
    badge: "Heavenly cumin",
  },
  "nimbu-pani": {
    background: "#F7F3D7",
    panel: "#D8E78A",
    accent: "#A7C95B",
    halo: "#E6F0AF",
    text: "#2E3722",
    muted: "#59644A",
    outline: "#BDD177",
    badge: "Bright lemon lift",
  },
  "ginger-ale": {
    background: "#F7E7D8",
    panel: "#E8BC87",
    accent: "#D88443",
    halo: "#F1CC9E",
    text: "#37281E",
    muted: "#6C5645",
    outline: "#D39B6C",
    badge: "Warm ginger spark",
  },
  "club-soda": {
    background: "#EEF2EE",
    panel: "#C7D8C9",
    accent: "#7EA28B",
    halo: "#D7E4D8",
    text: "#24322C",
    muted: "#586760",
    outline: "#98B7A0",
    badge: "Pure crisp balance",
  },
  "tonic-water": {
    background: "#E7EEE9",
    panel: "#BFD9C9",
    accent: "#5C9E88",
    halo: "#D2E7DB",
    text: "#21312D",
    muted: "#546864",
    outline: "#84B7A4",
    badge: "Botanical bitter lift",
  },
} as const;

const imageVariants = {
  enter: {
    x: 150,
    opacity: 0,
    scale: 1.1,
    rotateY: 15,
    filter: "drop-shadow(20px 40px 60px rgba(0,0,0,0))",
  },
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
    filter: "drop-shadow(0 30px 50px rgba(45,37,26,0.18))",
    transition: {
      duration: 0.8,
      ease: [0.17, 0.67, 0.16, 0.99],
    },
  },
  exit: {
    x: -150,
    opacity: 0,
    scale: 0.9,
    rotateY: -15,
    filter: "drop-shadow(-20px 40px 60px rgba(0,0,0,0))",
    transition: {
      duration: 0.5,
      ease: [0.17, 0.67, 0.16, 0.99],
    },
  },
};

const fadeSlideVariants = {
  enter: { y: 18, opacity: 0 },
  center: { y: 0, opacity: 1, transition: { duration: 0.42, delay: 0.08 } },
  exit: { y: -12, opacity: 0, transition: { duration: 0.22 } },
};

export function HeroProductShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { setAccentColor, setBackgroundColor } = useHeroTheme();
  const reduceMotion = useReducedMotion();
  const activeProduct = HERO_PRODUCTS[activeIndex];
  const theme = HERO_THEME_MAP[activeProduct.slug as keyof typeof HERO_THEME_MAP];

  useEffect(() => {
    setAccentColor(theme.accent);
    setBackgroundColor(theme.background);
  }, [setAccentColor, setBackgroundColor, theme.accent, theme.background]);

  const heroStyle = useMemo(
    () =>
      ({
        ["--accent" as string]: theme.accent,
        ["--bg-product" as string]: theme.background,
        ["--text-product" as string]: theme.text,
        backgroundColor: theme.background,
      }) satisfies React.CSSProperties,
    [theme.accent, theme.background, theme.text],
  );

  const handleSelect = (index: number) => {
    if (index === activeIndex) {
      return;
    }
    setActiveIndex(index);
  };

  const floatAnimation = reduceMotion
    ? { y: 0, rotate: 0 }
    : {
        y: [0, -8, 0],
        rotate: [0, -1.4, 0],
        transition: {
          duration: 4.2,
          repeat: Infinity,
          ease: "easeInOut",
        },
      };

  const imageMotionVariants = reduceMotion
    ? {
        enter: { opacity: 0 },
        center: { opacity: 1, transition: { duration: 0 } },
        exit: { opacity: 0, transition: { duration: 0 } },
      }
    : imageVariants;

  const contentVariants = reduceMotion
    ? {
        enter: { opacity: 0 },
        center: { opacity: 1, transition: { duration: 0 } },
        exit: { opacity: 0, transition: { duration: 0 } },
      }
    : fadeSlideVariants;

  return (
    <motion.section
      className="relative overflow-hidden"
      style={heroStyle}
      animate={{ backgroundColor: theme.background }}
      transition={{ duration: reduceMotion ? 0 : 0.5, ease: "easeInOut" }}
    >
      <HeroBackgroundShapes
        backgroundColor={theme.background}
        accentColor={theme.accent}
        haloColor={theme.halo}
        panelColor={theme.panel}
      />

      {/* Hidden preloader for all product variations to ensure zero-latency switching after loader */}
      <div className="absolute opacity-0 pointer-events-none z-[-1] overflow-hidden w-px h-px">
        {HERO_PRODUCTS.map((product) => (
          <Image
            key={`preload-${product.id}`}
            src={product.image}
            alt="preload"
            width={950}
            height={1600}
            priority
          />
        ))}
      </div>

      <div className="relative mx-auto min-h-screen max-w-[92rem] px-5 pb-10 pt-14 md:px-8 md:pb-12 md:pt-18 lg:px-10 lg:pt-22">
        <div className="grid min-h-[calc(100vh-9rem)] gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          {/* Left Column: Text Content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`${activeProduct.id}-copy`}
                className="max-w-[40rem]"
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <h1
                  className="font-heading text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.02em]"
                  style={{ color: theme.text }}
                >
                  {activeProduct.heroHeadline.split(" ").slice(0, -1).join(" ")}{" "}
                  <span style={{ color: theme.accent }}>
                    {activeProduct.heroHeadline.split(" ").slice(-1).join(" ")}
                  </span>
                </h1>
                <p
                  className="mt-6 max-w-[32rem] text-sm leading-relaxed md:text-base md:leading-7"
                  style={{ color: theme.muted }}
                >
                  {activeProduct.heroSubtext}
                </p>

                <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                  <PrimaryButton
                    label={`Explore ${activeProduct.shortName}`}
                    href={`/products/${activeProduct.slug}`}
                    accentColor={theme.accent}
                  />
                  <SecondaryButton
                    label="Learn More"
                    href="/about"
                    accentColor={theme.text}
                  />
                </div>

                <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
                  <div className="flex -space-x-3">
                    {["#201813", "#68544A", "#D1B39C"].map((color, index) => (
                      <div
                        key={color}
                        className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white text-xs font-semibold text-white"
                        style={{ backgroundColor: color, zIndex: 3 - index }}
                      >
                        {index + 1}
                      </div>
                    ))}
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold" style={{ color: theme.text }}>
                      5k+ Reviews
                    </p>
                    <p className="text-xs" style={{ color: theme.muted }}>
                      Customers love the flavour-first experience.
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Product Image + Controls */}
          <div className="relative flex flex-col items-center justify-center lg:min-h-[42rem]">
            {/* Product Image and Vertical Name Block */}
            <div className="relative flex w-full items-center justify-center">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={`${activeProduct.id}-image`}
                  variants={imageMotionVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="relative z-10 flex w-full items-center justify-center pb-2"
                  style={{ perspective: 1400 }}
                >
                  <motion.div
                    animate={floatAnimation}
                    className="relative"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="absolute bottom-[4%] left-1/2 h-6 w-32 -translate-x-1/2 rounded-full bg-black/10 blur-xl" />
                    <Image
                      src={activeProduct.image}
                      alt={`${activeProduct.name} bottle by Singapore Beverages`}
                      width={950}
                      height={1600}
                      priority
                      className="relative z-10 h-auto w-[13.5rem] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)] md:w-[16.5rem] lg:w-[18.5rem] xl:w-[20.5rem] max-h-[60vh]"
                    />
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Decorative side text */}
              <div className="absolute inset-y-0 right-0 hidden items-center lg:flex">
                <div className="relative flex h-full items-center pr-4">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={`${activeProduct.id}-outline`}
                      className="hero-outline-text [writing-mode:vertical-rl]"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                      transition={{ duration: reduceMotion ? 0 : 0.45 }}
                      style={{ color: theme.outline }}
                    >
                      {activeProduct.name}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Navigation and Switcher - More breathing room */}
            <div className="relative z-20 -mt-4 w-full max-w-2xl px-4">
              <div className="flex flex-col items-center">
                <div className="mb-2.5 flex items-center justify-center gap-16">
                  <button
                    type="button"
                    aria-label="Previous product"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-black/8 bg-white/60 shadow-md backdrop-blur-sm transition-all hover:scale-110 active:scale-95"
                    style={{ color: theme.text }}
                    onClick={() => handleSelect(activeIndex === 0 ? HERO_PRODUCTS.length - 1 : activeIndex - 1)}
                  >
                    <ArrowLeft className="h-4.5 w-4.5" />
                  </button>

                  <button
                    type="button"
                    aria-label="Next product"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-black/8 bg-white/60 shadow-md backdrop-blur-sm transition-all hover:scale-110 active:scale-95"
                    style={{ color: theme.text }}
                    onClick={() => handleSelect((activeIndex + 1) % HERO_PRODUCTS.length)}
                  >
                    <ArrowRight className="h-4.5 w-4.5" />
                  </button>
                </div>

                <ProductSwitcher
                  products={HERO_PRODUCTS}
                  activeIndex={activeIndex}
                  onSelect={handleSelect}
                  accentColor={theme.accent}
                  darkAccentColor={theme.outline}
                  textColor={theme.text}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
