"use client";

import React, { useMemo, useState, useCallback } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useTransform,
} from "framer-motion";

import { HeroAnimatedBackground } from "@/components/hero/HeroBackgroundShapes";
import { useHeroTheme } from "@/components/hero/HeroThemeContext";
import { ProductSwitcher } from "@/components/hero/ProductSwitcher";
import { HERO_PRODUCTS } from "@/data/products";
import { HERO_PRODUCT_CONFIGS } from "@/data/hero-configs";
import {
  useCursorParallax,
  getDepthMultipliers,
} from "@/hooks/useCursorParallax";
import type { HeroAsset, HeroProductConfig } from "@/types/hero-product";

// ============================================================================
// THEME MAP — text/UI colors + heading data keyed by product slug
// ============================================================================

const HERO_THEME_MAP = {
  jeeru: {
    background: "#4A1F12",
    panel: "#E3B27D",
    accent: "#F5A83C",
    halo: "#c27040",
    text: "#FFF3E0",
    muted: "#E0C4A8",
    outline: "#D39B6C",
    badge: "Heavenly cumin",
    headingLine1: "PURE",
    headingLine2: "JEERU",
    watermark: "JEERU",
  },
  "nimbu-pani": {
    background: "#589e00",
    panel: "#D8E78A",
    accent: "#FFFFFF",
    halo: "#E6F0AF",
    text: "#D11111",
    muted: "#59644A",
    outline: "#BDD177",
    badge: "Bright lemon lift",
    headingLine1: "NIMBU",
    headingLine2: "PANI",
    watermark: "NIMBU",
  },
  "ginger-ale": {
    background: "#2a7a2a",
    panel: "#6dcf6d",
    accent: "#b8f060",
    halo: "#6dcf6d",
    text: "#f0ffe8",
    muted: "#c8f0a0",
    outline: "#5ab85a",
    badge: "Warm ginger spark",
    headingLine1: "GINGER",
    headingLine2: "ALE",
    watermark: "GINGER",
  },
  "club-soda": {
    background: "#F8FAF9",
    panel: "#F6F9FA",
    accent: "#0A2540",
    halo: "#FFFFFF",
    text: "#0A2540",
    muted: "#5B7586",
    outline: "#D1DDE5",
    badge: "Clean & Crisp",
    headingLine1: "CLUB",
    headingLine2: "SODA",
    watermark: "SODA",
  },
  "tonic-water": {
    background: "#F7E56D",
    panel: "#8CD1C8",
    accent: "#1A4D3E",
    halo: "#FFFFFF",
    text: "#1A4D3E",
    muted: "#5B7586",
    outline: "#D1DDE5",
    badge: "Premium London Dry",
    headingLine1: "TONIC",
    headingLine2: "WATER",
    watermark: "TONIC",
  },
  "mango-drink": {
    background: "#E89B42",
    panel: "#FFD685",
    accent: "#B04000",
    halo: "#F2A65A",
    text: "#FFF2E5",
    muted: "#F5C7A1",
    outline: "#D47A22",
    badge: "Tasty & Healthy",
    headingLine1: "MANGO",
    headingLine2: "DRINK",
    watermark: "MANGO",
  },
} as const;

// ============================================================================
// EASING
// ============================================================================

const EASE_ENTRANCE = [0.25, 0.46, 0.45, 0.94] as const;

// ============================================================================
// TEXT ANIMATION VARIANTS
// ============================================================================

const fadeSlideVariants = {
  enter: { y: 24, opacity: 0 },
  center: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: 0.1, ease: "easeOut" },
  },
  exit: { y: -16, opacity: 0, transition: { duration: 0.25 } },
};

// ============================================================================
// SUB-COMPONENT: Individual Asset Element with Parallax
// ============================================================================

interface AssetElementProps {
  item: HeroAsset;
  smoothX: ReturnType<typeof useCursorParallax>["smoothX"];
  smoothY: ReturnType<typeof useCursorParallax>["smoothY"];
  isFirstProduct?: boolean;
}

function AssetElement({ item, smoothX, smoothY, isFirstProduct = false }: AssetElementProps) {
  const multipliers = getDepthMultipliers(item.depth);

  const parallaxX = useTransform(
    smoothX,
    [-1, 1],
    [-multipliers.x, multipliers.x],
  );
  const parallaxY = useTransform(
    smoothY,
    [-1, 1],
    [-multipliers.y, multipliers.y],
  );
  const parallaxRotate = useTransform(
    smoothX,
    [-1, 1],
    [-multipliers.rotate, multipliers.rotate],
  );

  const wBase = typeof item.width === "string" ? item.width : item.width.base;
  const wMd = typeof item.width === "string" ? item.width : item.width.md;
  const wLg = typeof item.width === "string" ? item.width : item.width.lg;

  const exitAnim = item.exit
    ? {
        opacity: item.exit.opacity,
        x: item.exit.x ?? 0,
        y: item.exit.y ?? 0,
        scale: item.exit.scale ?? 1,
      }
    : {
        opacity: 0,
        x: -(item.entrance.x?.[0] ?? 0) * 0.5,
        y: -(item.entrance.y?.[0] ?? 0) * 0.5,
        scale: 0.95,
      };

  return (
    <div
      className="absolute pointer-events-none w-[var(--w-base)] md:w-[var(--w-md)] lg:w-[var(--w-lg)]"
      style={
        {
          "--w-base": wBase,
          "--w-md": wMd,
          "--w-lg": wLg,
          left: item.left,
          top: item.top,
          zIndex: item.zIndex,
          transform: "translate(-50%, -50%)",
          ...(item.height ? { height: item.height } : {}),
        } as React.CSSProperties
      }
    >
      {/* Layer 1: Cursor parallax — GPU-only transforms via motion values */}
      <motion.div
        className="w-full h-full"
        style={{
          x: parallaxX,
          y: parallaxY,
          rotate: parallaxRotate,
        }}
      >
        {/* Layer 2: Entrance/exit transitions */}
        <motion.div
          className="w-full h-full"
          initial={{
            opacity: item.entrance.opacity?.[0] ?? 0,
            x: item.entrance.x?.[0] ?? 0,
            y: item.entrance.y?.[0] ?? 0,
            scale: item.entrance.scale?.[0] ?? 1,
            rotate: item.baseRotate ?? 0,
          }}
          animate={{
            opacity: item.entrance.opacity?.[1] ?? 1,
            x: item.entrance.x?.[1] ?? 0,
            y: item.entrance.y?.[1] ?? 0,
            scale: item.entrance.scale?.[1] ?? 1,
            rotate: item.baseRotate ?? 0,
          }}
          exit={{
            ...exitAnim,
            rotate: item.baseRotate ?? 0,
          }}
          transition={{
            duration: item.entrance.duration,
            delay: item.entrance.delay,
            ease: [...EASE_ENTRANCE],
          }}
        >
          {/* Layer 3: Continuous idle floating — organic subtle life */}
          <motion.div
            className="w-full h-full"
            animate={
              item.idle
                ? {
                    y: item.idle.y,
                    rotate: item.idle.rotate,
                  }
                : {}
            }
            transition={
              item.idle
                ? {
                    duration: item.idle.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: item.entrance.delay + item.entrance.duration,
                  }
                : {}
            }
          >
            {/* Render: shadow div or image */}
            {item.isShadow ? (
              <div
                className="w-full h-full rounded-full"
                style={{ ...item.style }}
              />
            ) : (
              <div
                className="w-full h-auto"
                style={{
                  opacity: item.opacity ?? 1,
                  filter: item.dropShadow,
                }}
              >
                <Image
                  src={item.src!}
                  alt={item.alt!}
                  width={800}
                  height={800}
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 60vw, 50vw"
                  className="w-full h-auto"
                  priority={isFirstProduct && item.priority}
                  loading={isFirstProduct ? undefined : "lazy"}
                  unoptimized={isFirstProduct && item.priority}
                />
              </div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

// ============================================================================
// MAIN COMPONENT: HeroProductShowcase
// ============================================================================

export function HeroProductShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { setAccentColor, setBackgroundColor } = useHeroTheme();
  const reduceMotion = useReducedMotion();
  const { smoothX, smoothY, containerRef } = useCursorParallax();

  const activeProduct = HERO_PRODUCTS[activeIndex];
  const theme =
    HERO_THEME_MAP[activeProduct.slug as keyof typeof HERO_THEME_MAP];

  // Find matching hero product config for the centered product display
  const activeHeroConfig: HeroProductConfig | undefined =
    HERO_PRODUCT_CONFIGS.find((c) => c.id === activeProduct.slug);

  // Memoize sorted assets by z-index for correct paint order
  const sortedAssets = useMemo(
    () =>
      activeHeroConfig
        ? [...activeHeroConfig.assets].sort((a, b) => a.zIndex - b.zIndex)
        : [],
    [activeHeroConfig],
  );

  // Update theme context for header/nav color adaptation
  React.useEffect(() => {
    setAccentColor(theme.accent);
    setBackgroundColor(theme.background);
  }, [setAccentColor, setBackgroundColor, theme.accent, theme.background]);

  const handleSelect = useCallback(
    (index: number) => {
      if (index === activeIndex) return;
      setActiveIndex(index);
    },
    [activeIndex],
  );

  const contentVariants = reduceMotion
    ? {
        enter: { opacity: 0 },
        center: { opacity: 1, transition: { duration: 0 } },
        exit: { opacity: 0, transition: { duration: 0 } },
      }
    : fadeSlideVariants;

  // Determine the active background theme for the AnimatedBackground
  const bgTheme = activeHeroConfig?.theme ?? {
    bgPrimary: theme.background,
    bgSecondary: theme.panel,
    bgTertiary: theme.accent,
    glowColor: theme.halo,
    glowOpacity: 0.4,
    vignetteOpacity: 0.2,
    accentText: theme.text,
  };

  const slideNumber = String(activeIndex + 1).padStart(2, "0");

  return (
    <section
      ref={containerRef as React.RefObject<HTMLElement>}
      className="relative overflow-hidden h-screen"
    >
      {/* ─── Animated Background Gradient + Glow + Vignette ─── */}
      <HeroAnimatedBackground
        theme={bgTheme}
        productId={activeProduct.slug}
      />

      {/* ─── Background Watermark Text (desktop only) ─── */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none select-none hidden md:block"
        aria-hidden="true"
        style={{ zIndex: 2 }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={`wm-${activeProduct.slug}`}
            className="absolute font-sans font-black uppercase whitespace-nowrap"
            style={{
              fontSize: "clamp(160px, 22vw, 320px)",
              lineHeight: 0.85,
              letterSpacing: "-0.04em",
              right: "-3%",
              top: "8%",
              color: theme.text,
            }}
            initial={{ opacity: 0, x: 70 }}
            animate={{
              opacity: 0.07,
              x: 0,
              transition: { duration: 1.0, ease: "easeOut" },
            }}
            exit={{
              opacity: 0,
              x: -50,
              transition: { duration: 0.3 },
            }}
          >
            {theme.watermark}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* ─── Main Content Layer ─── */}
      <div className="relative h-full" style={{ zIndex: 10 }}>

        {/* ─── MOBILE: Centered product name above product ─── */}
        <div className="md:hidden absolute z-20 left-0 right-0 top-[8%] flex flex-col items-center text-center px-6">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`mobile-copy-${activeProduct.slug}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } }}
              exit={{ opacity: 0, y: -12, transition: { duration: 0.2 } }}
            >
              <h1
                className="font-sans font-black uppercase tracking-[-0.04em] leading-[0.88]"
                style={{
                  color: theme.text,
                  fontSize: "clamp(2.6rem, 12vw, 4.5rem)",
                  textShadow: "0 4px 20px rgba(0,0,0,0.12)",
                }}
              >
                {theme.headingLine1}
                <br />
                <span style={{ color: theme.accent }}>
                  {theme.headingLine2}
                </span>
              </h1>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ─── DESKTOP: Left-Aligned Text Block ─── */}
        <div
          className="absolute z-20 hidden md:block md:left-[8vw] md:top-[20%] lg:left-[9vw] lg:top-[23%]"
          style={{ maxWidth: 340 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`copy-${activeProduct.slug}`}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {/* ── Tier 1: Category Label — script font whisper ── */}
              <span
                className="font-script block mb-4 tracking-wide"
                style={{
                  color: theme.muted,
                  opacity: 0.9,
                  fontSize: 15,
                  fontStyle: "italic",
                }}
              >
                {theme.badge}
              </span>

              {/* ── Tier 2: Main Heading + Slide Number ── */}
              <div className="flex items-start gap-3">
                <h1
                  className="font-sans font-black uppercase tracking-[-0.03em]"
                  style={{
                    color: theme.text,
                    fontSize: "clamp(2.8rem, 5.5vw, 4rem)",
                    lineHeight: 0.92,
                  }}
                >
                  {theme.headingLine1}
                  <br />
                  <span style={{ color: theme.accent }}>
                    {theme.headingLine2}
                  </span>
                </h1>

                {/* Slide / Index Number */}
                <span
                  className="shrink-0 font-mono mt-1"
                  style={{
                    color: theme.text,
                    opacity: 0.3,
                    fontSize: 11,
                    fontWeight: 300,
                    letterSpacing: "0.25em",
                  }}
                >
                  {slideNumber}
                </span>
              </div>

              {/* ── Tier 3: Description Paragraph ── */}
              <p
                className="mt-7 font-sans font-light"
                style={{
                  color: theme.muted,
                  opacity: 0.8,
                  fontSize: 13,
                  lineHeight: 1.75,
                  maxWidth: 280,
                }}
              >
                {activeProduct.heroSubtext}
              </p>

              {/* ── Subtle CTA ── */}
              <a
                href={`/products/${activeProduct.slug}`}
                className="inline-flex items-center mt-8 uppercase font-semibold group transition-opacity duration-300 hover:opacity-75"
                style={{
                  color: theme.accent,
                  fontSize: 11,
                  letterSpacing: "0.18em",
                }}
              >
                Explore
                <ArrowRight className="ml-2 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ─── Center-Stage Product Composition ─── */}
        <div
          className="absolute left-1/2 top-[55%] md:top-[53%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            zIndex: 8,
            height: "clamp(260px, 50vh, 600px)",
            aspectRatio: "682 / 586",
          }}
        >
          {/* Depth glow / energy splash behind product */}
          <div
            className="absolute inset-0 -z-10 rounded-full"
            aria-hidden="true"
            style={{
              background: `radial-gradient(circle at 50% 55%, ${theme.halo}55 0%, transparent 65%)`,
              transform: "scale(1.4) translateY(5%)",
              filter: "blur(40px)",
            }}
          />

          <AnimatePresence mode="sync">
            <motion.div
              key={activeProduct.slug}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: reduceMotion ? 0 : 0.5,
                ease: "easeInOut",
              }}
            >
              {sortedAssets.map((asset) => (
                <AssetElement
                  key={asset.id}
                  item={asset}
                  smoothX={smoothX}
                  smoothY={smoothY}
                  isFirstProduct={activeIndex === 0}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ─── Bottom Navigation & Product Switcher ─── */}
        <div className="absolute bottom-5 md:bottom-8 left-1/2 -translate-x-1/2 z-30 w-full max-w-xl px-4">
          <div className="flex flex-col items-center gap-2.5">
            {/* Prev / Next arrows */}
            <div className="flex items-center justify-center gap-16">
              <button
                type="button"
                aria-label="Previous product"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-white/10 active:scale-95"
                style={{ color: theme.text }}
                onClick={() =>
                  handleSelect(
                    activeIndex === 0
                      ? HERO_PRODUCTS.length - 1
                      : activeIndex - 1,
                  )
                }
              >
                <ArrowLeft className="h-4 w-4" />
              </button>

              <button
                type="button"
                aria-label="Next product"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-white/10 active:scale-95"
                style={{ color: theme.text }}
                onClick={() =>
                  handleSelect(
                    (activeIndex + 1) % HERO_PRODUCTS.length,
                  )
                }
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Product Switcher dots + labels */}
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
    </section>
  );
}
