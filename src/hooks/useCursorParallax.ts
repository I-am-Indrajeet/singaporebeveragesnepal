"use client";

import { useEffect, useRef, useCallback } from "react";
import { useMotionValue, useSpring, MotionValue } from "framer-motion";
import type { DepthLayer } from "@/types/hero-product";

/**
 * Depth multipliers control how far each layer moves in response to cursor.
 * ──────────────────────────────────────────────────────────────────────────
 * - 'background' → barely moves, creates atmospheric depth
 * - 'mid'        → moderate, feels like mid-ground objects
 * - 'foreground' → most reactive, creates strong parallax
 * - 'hero'       → very subtle shift + tiny rotation for 3D feel
 *
 * Values are in pixels of maximum displacement from center.
 * Keeping these small is critical — premium motion is always restrained.
 */
const DEPTH_MULTIPLIERS: Record<
  DepthLayer,
  { x: number; y: number; rotate: number }
> = {
  background: { x: 5, y: 4, rotate: 0 },
  mid: { x: 12, y: 9, rotate: 0 },
  foreground: { x: 20, y: 15, rotate: 0 },
  hero: { x: 8, y: 5, rotate: 1.5 },
};

/**
 * Spring config for cursor-following motion.
 * High damping + moderate stiffness = smooth, luxurious tracking
 * that never overshoots or feels snappy.
 */
const SPRING_CONFIG = {
  stiffness: 60,
  damping: 30,
  mass: 1,
  restDelta: 0.001,
};

export interface CursorParallaxValues {
  /** Normalized cursor position: -1 (left/top) to +1 (right/bottom) */
  cursorX: MotionValue<number>;
  cursorY: MotionValue<number>;
  /** Spring-smoothed versions for silky tracking */
  smoothX: MotionValue<number>;
  smoothY: MotionValue<number>;
  /** Ref to attach to the tracking container */
  containerRef: React.RefObject<HTMLElement | null>;
}

/**
 * useCursorParallax
 * ─────────────────
 * Tracks cursor position within a container element and provides
 * spring-smoothed normalized values (-1 to +1) for parallax effects.
 *
 * Uses requestAnimationFrame internally (via Framer Motion values)
 * to avoid React re-renders — zero overhead on the component tree.
 *
 * Desktop only: on touch devices, values stay at 0 (centered).
 */
export function useCursorParallax(): CursorParallaxValues {
  const containerRef = useRef<HTMLElement | null>(null);

  // Raw normalized cursor values (updated via rAF, no re-renders)
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Spring-smoothed for premium feel
  const smoothX = useSpring(cursorX, SPRING_CONFIG);
  const smoothY = useSpring(cursorY, SPRING_CONFIG);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      // Normalize to -1…+1 range (center = 0)
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;

      cursorX.set(x);
      cursorY.set(y);
    },
    [cursorX, cursorY],
  );

  const handleMouseLeave = useCallback(() => {
    // Smoothly return to center when cursor leaves
    cursorX.set(0);
    cursorY.set(0);
  }, [cursorX, cursorY]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Skip on touch-only devices for graceful fallback
    const isTouchOnly = window.matchMedia("(hover: none)").matches;
    if (isTouchOnly) return;

    el.addEventListener("mousemove", handleMouseMove, { passive: true });
    el.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return { cursorX, cursorY, smoothX, smoothY, containerRef };
}

/**
 * getDepthMultipliers
 * ────────────────────
 * Returns pixel displacement and rotation for a given depth layer.
 */
export function getDepthMultipliers(depth: DepthLayer) {
  return DEPTH_MULTIPLIERS[depth];
}
