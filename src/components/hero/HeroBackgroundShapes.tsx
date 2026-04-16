"use client";

import { motion, useReducedMotion } from "framer-motion";

type HeroBackgroundShapesProps = {
  backgroundColor: string;
  accentColor: string;
  haloColor: string;
  panelColor: string;
};

export function HeroBackgroundShapes({
  backgroundColor,
  accentColor,
  haloColor,
  panelColor,
}: HeroBackgroundShapesProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* ── SVG clip-path definitions (hidden) ── */}
      <svg className="absolute h-0 w-0" aria-hidden="true">
        <defs>
          <clipPath id="hero-blob-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0.38,0.0 C 0.48,0.02 0.42,0.12 0.35,0.22 C 0.28,0.33 0.25,0.42 0.30,0.55 C 0.34,0.65 0.28,0.78 0.35,0.88 C 0.42,0.96 0.50,1.0 0.60,1.0 L 1.0,1.0 L 1.0,0.0 Z" />
          </clipPath>
          <clipPath id="hero-blob-clip-2" clipPathUnits="objectBoundingBox">
            <path d="M 0.42,0.0 C 0.52,0.04 0.44,0.15 0.38,0.26 C 0.30,0.38 0.28,0.48 0.33,0.60 C 0.38,0.72 0.30,0.82 0.38,0.90 C 0.46,0.97 0.55,1.0 0.65,1.0 L 1.0,1.0 L 1.0,0.0 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* ── Organic blob panel (replaces rectangular panel) ── */}
      <motion.div
        key={`${backgroundColor}-blob-panel`}
        className="absolute inset-y-0 right-0 w-[62%]"
        style={{ clipPath: "url(#hero-blob-clip)" }}
        initial={{ opacity: 0.85 }}
        animate={{ opacity: 1, backgroundColor: panelColor }}
        transition={{
          duration: reduceMotion ? 0 : 0.7,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      />

      {/* ── Secondary blob edge (subtle depth layer) ── */}
      <motion.div
        key={`${backgroundColor}-blob-edge`}
        className="absolute inset-y-0 right-0 w-[66%]"
        style={{ clipPath: "url(#hero-blob-clip-2)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.18, backgroundColor: `${accentColor}30` }}
        transition={{
          duration: reduceMotion ? 0 : 0.9,
          delay: 0.05,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      />

      {/* ── Radial halo glow behind the product ── */}
      <motion.div
        key={`${backgroundColor}-halo-1`}
        className="absolute left-[45%] top-1/2 h-[52rem] w-[52rem] -translate-y-1/2 rounded-full"
        initial={{ opacity: 0.18, scale: 0.94 }}
        animate={{
          opacity: 0.34,
          scale: 1,
          background: `radial-gradient(circle, ${haloColor} 0%, rgba(255,255,255,0) 67%)`,
        }}
        transition={{
          duration: reduceMotion ? 0 : 0.85,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      />

      {/* ── Circular border accent ring ── */}
      <motion.div
        key={`${backgroundColor}-halo-2`}
        className="absolute left-[55%] top-1/2 h-[44rem] w-[44rem] -translate-y-1/2 rounded-full border"
        initial={{ opacity: 0.18, scale: 0.96 }}
        animate={{
          opacity: 0.28,
          scale: 1,
          borderColor: `${accentColor}33`,
          backgroundColor: "rgba(255,255,255,0.22)",
        }}
        transition={{
          duration: reduceMotion ? 0 : 0.9,
          delay: 0.05,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      />

      {/* ── Left decorative blob ── */}
      <motion.div
        key={`${backgroundColor}-blob-left`}
        className="absolute left-[12%] top-[34%] h-44 w-44 rounded-full"
        initial={{ opacity: 0.12, scale: 0.9 }}
        animate={{ opacity: 0.3, scale: 1, backgroundColor: `${accentColor}40` }}
        transition={{ duration: reduceMotion ? 0 : 0.7, delay: 0.08 }}
      />

      {/* ── Bottom-right large soft blob ── */}
      <motion.div
        key={`${backgroundColor}-blob-right`}
        className="absolute bottom-[-12%] right-[17%] h-72 w-72 rounded-full"
        initial={{ opacity: 0.18, scale: 0.94 }}
        animate={{
          opacity: 0.38,
          scale: 1,
          backgroundColor: `${accentColor}26`,
        }}
        transition={{ duration: reduceMotion ? 0 : 0.8, delay: 0.12 }}
      />

      {/* ── White inner-glow ring for depth ── */}
      <motion.div
        key={`${backgroundColor}-ring`}
        className="absolute bottom-[6%] right-[29%] h-44 w-44 rounded-full"
        initial={{ opacity: 0.1, scale: 0.86 }}
        animate={{
          opacity: 0.6,
          scale: 1,
          background:
            "radial-gradient(circle, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.25) 54%, rgba(255,255,255,0) 70%)",
        }}
        transition={{ duration: reduceMotion ? 0 : 0.8, delay: 0.15 }}
      />

      {/* ── Subtle grain/noise texture overlay ── */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />
    </div>
  );
}
