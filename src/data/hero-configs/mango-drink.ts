import type { HeroProductConfig } from "@/types/hero-product";

/**
 * Mango Drink Hero Config
 * ─────────────────────────────────────────────────────────────────────────────
 * All 5 assets are 1344x768 full-scene exports. 
 * Because some assets contain elements for BOTH left and right sides in one image,
 * they are true full-scene layers. We position them all at left: 50%, top: 50%
 * with a uniform width, so they perfectly overlap and align as in the original PSD.
 */

const UNIFORM_WIDTH = { base: "175%", md: "160%", lg: "150%" };
const CENTER = { left: "50%", top: "50%" };

export const mangoDrinkHeroConfig: HeroProductConfig = {
  id: "mango-drink",
  name: "Mango Drink",
  theme: {
    bgPrimary: "#E89B42", // Warm mango yellow-orange
    bgSecondary: "#D47A22",
    bgTertiary: "#AF5514",
    glowColor: "#FFD685", // Bright yellow glow for the center
    glowOpacity: 0.6,
    vignetteOpacity: 0.25,
    accentText: "#6A2D00",
  },
  assets: [
    // ── Ground shadow ──────────────────────────────────────────────────────
    {
      id: "ground-shadow-center",
      isShadow: true,
      zIndex: 0,
      depth: "background",
      left: "50%",
      top: "84%", // positioned under the can base
      width: { base: "70%", md: "60%", lg: "50%" },
      height: "4%",
      style: {
        background: "radial-gradient(ellipse at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, transparent 70%)",
        filter: "blur(6px)",
      },
      entrance: { opacity: [0, 1], scale: [0.8, 1], duration: 1.0, delay: 0 },
      exit: { opacity: 0, scale: 0.9, duration: 0.4 },
    },

    // ── Splash Background ──────────────────────────────────────────────────
    {
      id: "mango-splash",
      src: "/mango-drink-assets/mango-splash-behind-can.png",
      alt: "Mango juice splash",
      zIndex: 1,
      depth: "background",
      left: "50%",
      top: "40%",
      width: { base: "228%", md: "208%", lg: "195%" },
      priority: true,
      entrance: { opacity: [0, 1], scale: [0.9, 1], duration: 0.9, delay: 0.1 },
      exit: { opacity: 0, scale: 0.95, duration: 0.4 },
      idle: { y: [0, 2, 0], duration: 4.5 },
    },

    // ── Top Left & Right Fruits ────────────────────────────────────────────
    {
      id: "mango-top-fruits",
      src: "/mango-drink-assets/mango-top-left-and-top-right-fruits.png",
      alt: "Whole mangoes",
      zIndex: 2,
      depth: "mid",
      ...CENTER,
      width: UNIFORM_WIDTH,
      priority: true,
      entrance: { opacity: [0, 1], y: [-20, 0], duration: 0.85, delay: 0.15 },
      exit: { opacity: 0, y: -25, duration: 0.4 },
      idle: { y: [0, -3, 0], duration: 4.0 },
    },

    // ── Bottom Left & Right Fruits ─────────────────────────────────────────
    {
      id: "mango-bottom-fruits",
      src: "/mango-drink-assets/mango-bottom-left-and-bottom-right-fruits.png",
      alt: "Cut mangoes and slices",
      zIndex: 4,
      depth: "foreground",
      left: "50%",
      top: "69%",
      width: UNIFORM_WIDTH,
      priority: true,
      entrance: { opacity: [0, 1], y: [20, 0], duration: 0.85, delay: 0.2 },
      exit: { opacity: 0, y: 25, duration: 0.4 },
      idle: { y: [0, 3, 0], duration: 4.2 },
    },

    // ── Floating Cubes ─────────────────────────────────────────────────────
    {
      id: "mango-floating-cubes",
      src: "/mango-drink-assets/mango-cubes-floating-around-can.png",
      alt: "Floating mango cubes",
      zIndex: 6, // In front of everything
      depth: "foreground",
      ...CENTER,
      width: UNIFORM_WIDTH,
      entrance: { opacity: [0, 1], scale: [0.8, 1], duration: 0.85, delay: 0.25 },
      exit: { opacity: 0, scale: 0.9, duration: 0.4 },
      idle: { y: [0, -5, 0], duration: 3.5 }, // Faster, more noticeable float
    },

    // ── Center Can ─────────────────────────────────────────────────────────
    {
      id: "mango-can-center",
      src: "/mango-drink-assets/mango-drink-center-can.png",
      alt: "Mango Drink Can",
      zIndex: 5,
      depth: "hero",
      ...CENTER,
      width: UNIFORM_WIDTH,
      dropShadow: "drop-shadow(0 20px 35px rgba(0,0,0,0.25))",
      priority: true,
      entrance: {
        opacity: [0, 1],
        y: [30, 0],
        scale: [0.93, 1],
        duration: 0.95,
        delay: 0.05,
      },
      exit: { opacity: 0, y: -20, scale: 0.96, duration: 0.5 },
      idle: { y: [0, -4, 0], duration: 3.6 },
    },
  ],
};
