import type { HeroProductConfig } from "@/types/hero-product";

/**
 * Tonic Water Hero Config
 * ─────────────────────────────────────────────────────────────────────────────
 * Using full-scene 1344x768 assets for pixel-perfect composition.
 * Layout: Splash background -> Floating lime/ice mid -> Center Bottle hero.
 */

const UNIFORM_WIDTH = { base: "175%", md: "160%", lg: "150%" };
const CENTER = { left: "50%", top: "50%" };

export const tonicWaterHeroConfig: HeroProductConfig = {
  id: "tonic-water",
  name: "Tonic Water",
  theme: {
    bgPrimary: "#F7E56D", // Sunlight yellow
    bgSecondary: "#C0DE9A",
    bgTertiary: "#8CD1C8", // Refreshing teal
    glowColor: "#FFFFFF",
    glowOpacity: 0.5,
    vignetteOpacity: 0.2,
    accentText: "#1A4D3E",
  },
  assets: [
    // ── Ground shadow ──────────────────────────────────────────────────────
    {
      id: "ground-shadow",
      isShadow: true,
      zIndex: 0,
      depth: "background",
      left: "50%",
      top: "90%",
      width: { base: "60%", md: "50%", lg: "40%" },
      height: "4%",
      style: {
        background: "radial-gradient(ellipse at center, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.1) 50%, transparent 70%)",
        filter: "blur(8px)",
      },
      entrance: { opacity: [0, 1], scale: [0.8, 1], duration: 1.0, delay: 0 },
      exit: { opacity: 0, scale: 0.9, duration: 0.4 },
    },

    // ── Water Splash (Background) ──────────────────────────────────────────
    {
      id: "tonic-splash",
      src: "/tonic-water-renamed-assets/water-splash-behind-bottle.png",
      alt: "Water splash",
      zIndex: 1,
      depth: "background",
      ...CENTER,
      width: UNIFORM_WIDTH,
      priority: true,
      entrance: { opacity: [0, 1], scale: [0.9, 1], duration: 1.0, delay: 0.1 },
      exit: { opacity: 0, scale: 0.95, duration: 0.4 },
      idle: { y: [0, 3, 0], duration: 4.5 },
    },

    // ── Floating Lime & Ice (Mid-layer) ─────────────────────────────────────
    {
      id: "tonic-floating-elements",
      src: "/tonic-water-renamed-assets/lime-and-ice-floating-around-bottle.png",
      alt: "Flying lime and ice",
      zIndex: 2,
      depth: "mid",
      ...CENTER,
      width: UNIFORM_WIDTH,
      priority: true,
      entrance: { opacity: [0, 1], y: [30, 0], duration: 0.9, delay: 0.2 },
      exit: { opacity: 0, y: 20, duration: 0.4 },
      idle: { y: [0, -5, 0], duration: 4.0 },
    },

    // ── Center Bottle (Hero) ────────────────────────────────────────────────
    {
      id: "tonic-bottle",
      src: "/tonic-water-renamed-assets/tonic-water-center-bottle.png",
      alt: "Tonic Water Premium Bottle",
      zIndex: 5,
      depth: "hero",
      ...CENTER,
      width: { base: "193%", md: "176%", lg: "165%" },
      dropShadow: "drop-shadow(0 25px 45px rgba(0,0,0,0.15))",
      priority: true,
      entrance: {
        opacity: [0, 1],
        y: [40, 0],
        scale: [0.94, 1],
        duration: 0.95,
        delay: 0.05,
      },
      exit: { opacity: 0, y: -20, scale: 0.96, duration: 0.5 },
      idle: { y: [0, -4, 0], duration: 3.6 },
    },
  ],
};
