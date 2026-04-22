import type { HeroProductConfig } from "@/types/hero-product";

/**
 * Ginger Ale Hero Config
 * ─────────────────────────────────────────────────────────────────────────────
 * The assets are 2048x1142 with the element naturally centered.
 * By setting a UNIFORM_WIDTH, all elements share the exact same scale relative
 * to the container, perfectly preserving proportional sizes.
 * We position them by pinning their centers (`left`, `top`) across the screen.
 */

const UNIFORM_WIDTH = { base: "190%", md: "175%", lg: "160%" };

export const gingerAleHeroConfig: HeroProductConfig = {
  id: "ginger-ale",
  name: "Ginger Ale",
  theme: {
    bgPrimary: "#1F5927",
    bgSecondary: "#1A4920",
    bgTertiary: "#113A17",
    glowColor: "#E8C860", // Yellowish glow to mimic the floor reflection
    glowOpacity: 0.65,
    vignetteOpacity: 0.35,
    accentText: "#1a5a1a",
  },
  assets: [
    // ── Ground shadows ─────────────────────────────────────────────────────
    {
      id: "ground-shadow-can",
      isShadow: true,
      zIndex: 0,
      depth: "background",
      left: "50%",
      top: "84%",
      width: { base: "90%", md: "85%", lg: "78%" },
      height: "6%",
      style: {
        background: "radial-gradient(ellipse at center, rgba(232, 200, 96, 0.4) 0%, rgba(0,0,0,0.15) 60%, transparent 80%)",
        filter: "blur(8px)",
      },
      entrance: { opacity: [0, 1], scale: [0.8, 1], duration: 1.0, delay: 0 },
      exit: { opacity: 0, scale: 0.9, duration: 0.4 },
    },
    {
      id: "ground-shadow-mint",
      isShadow: true,
      zIndex: 0,
      depth: "background",
      left: "18%",
      top: "86%",
      width: { base: "60%", md: "50%", lg: "40%" },
      height: "4%",
      style: {
        background: "rgba(0,0,0,0.22)",
        filter: "blur(12px)",
      },
      entrance: { opacity: [0, 1], scale: [0.8, 1], duration: 1.0, delay: 0.1 },
      exit: { opacity: 0, scale: 0.9, duration: 0.4 },
    },
    {
      id: "ground-shadow-ginger",
      isShadow: true,
      zIndex: 0,
      depth: "background",
      left: "76%",
      top: "86%",
      width: { base: "70%", md: "60%", lg: "50%" },
      height: "4%",
      style: {
        background: "rgba(0,0,0,0.22)",
        filter: "blur(12px)",
      },
      entrance: { opacity: [0, 1], scale: [0.8, 1], duration: 1.0, delay: 0.12 },
      exit: { opacity: 0, scale: 0.9, duration: 0.4 },
    },
    {
      id: "ground-shadow-lemon-center",
      isShadow: true,
      zIndex: 0,
      depth: "background",
      left: "64%",
      top: "80%",
      width: { base: "40%", md: "35%", lg: "30%" },
      height: "3%",
      style: {
        background: "rgba(0,0,0,0.2)",
        filter: "blur(10px)",
      },
      entrance: { opacity: [0, 1], scale: [0.8, 1], duration: 1.0, delay: 0.15 },
      exit: { opacity: 0, scale: 0.9, duration: 0.4 },
    },

    // ── UPPER LEFT: large lemon half ───────────
    {
      id: "lemon-half-top-left",
      src: "/ginger-ale-assets/lemon-half-top-left.png",
      alt: "Lemon half upper left",
      zIndex: 4,
      depth: "foreground",
      left: "22%",
      top: "22%",
      width: UNIFORM_WIDTH,
      baseRotate: 15,
      priority: true,
      entrance: { opacity: [0, 1], x: [-35, 0], y: [-15, 0], duration: 0.85, delay: 0.1 },
      exit: { opacity: 0, x: -40, duration: 0.4 },
      idle: { y: [0, -6, 0], rotate: [15, 12, 15], duration: 4.2 },
    },

    // ── UPPER LEFT: mint leaf ──────
    {
      id: "mint-leaf-upper-left",
      src: "/ginger-ale-assets/mint-leaf-upper-left.png",
      alt: "Mint leaf upper left",
      zIndex: 5,
      depth: "foreground",
      left: "30%",
      top: "38%",
      width: UNIFORM_WIDTH,
      baseRotate: -20,
      priority: true,
      entrance: { opacity: [0, 1], x: [-20, 0], duration: 0.75, delay: 0.18 },
      exit: { opacity: 0, x: -25, duration: 0.4 },
      idle: { y: [0, -4, 0], rotate: [-20, -17, -20], duration: 3.8 },
    },

    // ── UPPER RIGHT: large lime half ──────────
    {
      id: "lime-half-top-right",
      src: "/ginger-ale-assets/lime-half-top-right.png",
      alt: "Lime half upper right",
      zIndex: 4,
      depth: "foreground",
      left: "78%",
      top: "24%",
      width: UNIFORM_WIDTH,
      baseRotate: -10,
      priority: true,
      entrance: { opacity: [0, 1], x: [35, 0], y: [-15, 0], duration: 0.85, delay: 0.12 },
      exit: { opacity: 0, x: 40, duration: 0.4 },
      idle: { y: [0, -5, 0], rotate: [-10, -12, -10], duration: 4.5 },
    },

    // ── UPPER RIGHT: mint leaf ─────────────
    {
      id: "mint-leaf-upper-right",
      src: "/ginger-ale-assets/mint-leaf-upper-right.png",
      alt: "Mint leaf upper right",
      zIndex: 5,
      depth: "foreground",
      left: "72%",
      top: "38%",
      width: UNIFORM_WIDTH,
      baseRotate: 25,
      priority: true,
      entrance: { opacity: [0, 1], x: [20, 0], duration: 0.75, delay: 0.2 },
      exit: { opacity: 0, x: 25, duration: 0.4 },
      idle: { y: [0, -3, 0], rotate: [25, 23, 25], duration: 4.0 },
    },

    // ── LOWER LEFT BACK: lemon half ──
    {
      id: "lemon-half-bottom-left-back",
      src: "/ginger-ale-assets/lemon-half-bottom-left-back.png",
      alt: "Lemon half lower left back",
      zIndex: 2,
      depth: "mid",
      left: "32%",
      top: "76%",
      width: UNIFORM_WIDTH,
      baseRotate: 5,
      entrance: { opacity: [0, 1], y: [25, 0], duration: 0.8, delay: 0.22 },
      exit: { opacity: 0, y: 30, duration: 0.4 },
      idle: { y: [0, 3, 0], rotate: [5, 8, 5], duration: 4.3 },
    },

    // ── LOWER LEFT: mint cluster ──────────────
    {
      id: "mint-cluster-bottom-left",
      src: "/ginger-ale-assets/mint-cluster-bottom-left.png",
      alt: "Mint cluster lower left",
      zIndex: 4,
      depth: "mid",
      left: "18%",
      top: "84%",
      width: UNIFORM_WIDTH,
      baseRotate: 5,
      priority: true,
      entrance: { opacity: [0, 1], y: [20, 0], duration: 0.8, delay: 0.28 },
      exit: { opacity: 0, y: 25, duration: 0.4 },
      idle: { y: [0, 2, 0], rotate: [5, 3, 5], duration: 4.8 },
    },

    // ── LOWER LEFT FRONT: lemon wedge ──────
    {
      id: "lemon-wedge-bottom-left-front",
      src: "/ginger-ale-assets/lemon-wedge-bottom-left-front.png",
      alt: "Lemon wedge lower left front",
      zIndex: 5,
      depth: "foreground",
      left: "28%",
      top: "88%",
      width: UNIFORM_WIDTH,
      baseRotate: -8,
      entrance: { opacity: [0, 1], y: [15, 0], duration: 0.75, delay: 0.32 },
      exit: { opacity: 0, y: 20, duration: 0.4 },
      idle: { y: [0, 2, 0], rotate: [-8, -6, -8], duration: 4.0 },
    },

    // ── BOTTOM CENTER-RIGHT: lemon half ──────
    {
      id: "lemon-half-bottom-center-right",
      src: "/ginger-ale-assets/lemon-half-bottom-center-right.png",
      alt: "Lemon half bottom center right",
      zIndex: 3,
      depth: "mid",
      left: "64%",
      top: "78%",
      width: UNIFORM_WIDTH,
      baseRotate: -5,
      entrance: { opacity: [0, 1], y: [20, 0], duration: 0.8, delay: 0.3 },
      exit: { opacity: 0, y: 25, duration: 0.4 },
      idle: { y: [0, 3, 0], rotate: [-5, -7, -5], duration: 4.2 },
    },

    // ── LOWER RIGHT BACK: lime half ─────────────────
    {
      id: "lime-half-bottom-right-back",
      src: "/ginger-ale-assets/lime-half-bottom-right-back.png",
      alt: "Lime half lower right back",
      zIndex: 2,
      depth: "mid",
      left: "84%",
      top: "74%",
      width: UNIFORM_WIDTH,
      baseRotate: 8,
      entrance: { opacity: [0, 1], x: [25, 0], duration: 0.8, delay: 0.24 },
      exit: { opacity: 0, x: 30, duration: 0.4 },
      idle: { y: [0, -3, 0], rotate: [8, 10, 8], duration: 4.4 },
    },

    // ── LOWER RIGHT: ginger root ───────────────
    {
      id: "ginger-bottom-right",
      src: "/ginger-ale-assets/ginger-bottom-right.png",
      alt: "Ginger root lower right",
      zIndex: 4,
      depth: "mid",
      left: "76%",
      top: "84%",
      width: UNIFORM_WIDTH,
      priority: true,
      entrance: { opacity: [0, 1], x: [30, 0], y: [15, 0], duration: 0.85, delay: 0.26 },
      exit: { opacity: 0, x: 38, duration: 0.45 },
      idle: { y: [0, 2, 0], duration: 5.0 },
    },

    // ── LOWER RIGHT FRONT: lime wedge ──────────
    {
      id: "lime-wedge-bottom-right-front",
      src: "/ginger-ale-assets/lime-wedge-bottom-right-front.png",
      alt: "Lime wedge lower right front",
      zIndex: 5,
      depth: "foreground",
      left: "68%",
      top: "88%",
      width: UNIFORM_WIDTH,
      baseRotate: 12,
      entrance: { opacity: [0, 1], y: [15, 0], duration: 0.75, delay: 0.34 },
      exit: { opacity: 0, y: 20, duration: 0.4 },
      idle: { y: [0, 2, 0], rotate: [12, 10, 12], duration: 4.1 },
    },

    // ── CENTER: Can ───────────────────────
    {
      id: "can-center",
      src: "/ginger-ale-assets/can-center.png",
      alt: "London Dry Ginger Ale Can",
      zIndex: 6,
      depth: "hero",
      left: "50%",
      top: "52%",
      width: UNIFORM_WIDTH,
      dropShadow: "drop-shadow(0 24px 44px rgba(0,0,0,0.4))",
      priority: true,
      entrance: {
        opacity: [0, 1],
        y: [30, 0],
        scale: [0.93, 1],
        duration: 0.95,
        delay: 0.05,
      },
      exit: { opacity: 0, y: -20, scale: 0.96, duration: 0.5 },
      idle: { y: [0, -4, 0], rotate: [0, 1.5, 0], duration: 3.6 },
    },
  ],
};
