import type { HeroProductConfig } from "@/types/hero-product";

/**
 * Club Soda Hero Config
 * ─────────────────────────────────────────────────────────────────────────────
 * The 3 assets are 1344x768 full-scene exports.
 * Placed at center (50/50), they align perfectly as in the reference.
 */

const UNIFORM_WIDTH = { base: "170%", md: "155%", lg: "145%" };
const CENTER = { left: "50%", top: "50%" };

export const clubSodaHeroConfig: HeroProductConfig = {
  id: "club-soda",
  name: "Club Soda",
  theme: {
    // Crisp, chilled, clean white/gray look reflecting refreshment
    bgPrimary: "#F8FAF9",
    bgSecondary: "#E8EEF1",
    bgTertiary: "#D4DEE4",
    glowColor: "#FFFFFF",
    glowOpacity: 0.8,
    vignetteOpacity: 0.15,
    accentText: "#182A36",
    badge: "Clean & Crisp",
    headingLine1: "CLUB",
    headingLine2: "SODA",
    watermark: "SODA",
    panel: "#F6F9FA",
    accent: "#0A2540",
    halo: "#FFFFFF",
    text: "#0A2540",
    muted: "#5B7586",
    outline: "#D1DDE5",
  },
  assets: [
    // ── Ground shadow center (HARD) ──────────────────────────────────────
    {
      id: "ground-shadow-center",
      isShadow: true,
      zIndex: 0,
      depth: "background",
      left: "50%",
      top: "85%",
      width: { base: "65%", md: "55%", lg: "45%" },
      height: "3%",
      style: {
        background: "rgba(0,0,0,0.35)",
        filter: "blur(3px)",
      },
      entrance: { opacity: [0, 1], scale: [0.8, 1], duration: 1.0, delay: 0 },
      exit: { opacity: 0, scale: 0.9, duration: 0.4 },
    },
    // ── Ground shadow left (HARD) ─────────────────────────────────────────
    {
      id: "ground-shadow-left",
      isShadow: true,
      zIndex: 0,
      depth: "background",
      left: "22%",
      top: "85%",
      width: { base: "55%", md: "45%", lg: "35%" },
      height: "3%",
      style: {
        background: "rgba(0,0,0,0.28)",
        filter: "blur(2px)",
      },
      entrance: { opacity: [0, 1], scale: [0.8, 1], duration: 1.0, delay: 0.1 },
      exit: { opacity: 0, scale: 0.9, duration: 0.4 },
    },
    // ── Ground shadow right (HARD) ────────────────────────────────────────
    {
      id: "ground-shadow-right",
      isShadow: true,
      zIndex: 0,
      depth: "background",
      left: "78%",
      top: "85%",
      width: { base: "55%", md: "45%", lg: "35%" },
      height: "3%",
      style: {
        background: "rgba(0,0,0,0.28)",
        filter: "blur(2px)",
      },
      entrance: { opacity: [0, 1], scale: [0.8, 1], duration: 1.0, delay: 0.12 },
      exit: { opacity: 0, scale: 0.9, duration: 0.4 },
    },

    // ── LEFT: Glass ───────────────────────────────────────────────
    {
      id: "glass-left",
      src: "/club-soda-assets/club-soda-glass-left.png",
      alt: "Club soda glass left",
      zIndex: 2,
      depth: "mid",
      left: "22%",
      top: "54%",
      width: UNIFORM_WIDTH,
      dropShadow: "drop-shadow(0 15px 25px rgba(0,0,0,0.25))",
      entrance: { opacity: [0, 1], x: [-30, 0], duration: 0.85, delay: 0.1 },
      exit: { opacity: 0, x: -35, duration: 0.4 },
      idle: { y: [0, -3, 0], duration: 4.2 },
    },

    // ── RIGHT: Glass ──────────────────────────────────────────────
    {
      id: "glass-right",
      src: "/club-soda-assets/club-soda-glass-right.png",
      alt: "Club soda glass right",
      zIndex: 2,
      depth: "mid",
      left: "78%",
      top: "54%",
      width: UNIFORM_WIDTH,
      dropShadow: "drop-shadow(0 15px 25px rgba(0,0,0,0.25))",
      entrance: { opacity: [0, 1], x: [30, 0], duration: 0.85, delay: 0.12 },
      exit: { opacity: 0, x: 35, duration: 0.4 },
      idle: { y: [0, -3.5, 0], duration: 4.5 },
    },

    // ── CENTER: Bottle, Splash, Ice (Combined Hero Layer) ─────────
    {
      id: "bottle-center",
      src: "/club-soda-assets/club-soda-center-bottle-splash-ice.png",
      alt: "Club Soda Bottle with Splash and Ice",
      zIndex: 5,
      depth: "hero",
      ...CENTER,
      width: { base: "187%", md: "171%", lg: "160%" },
      // The hero element provides its own shadow within the composition, 
      // but adding a subtle drop shadow to pop it off the glasses behind.
      dropShadow: "drop-shadow(0 18px 35px rgba(0,0,0,0.3))",
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
