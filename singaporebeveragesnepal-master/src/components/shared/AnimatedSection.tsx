"use client";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils/cn";

export type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
};

const DIRECTION_OFFSETS: Record<
  NonNullable<AnimatedSectionProps["direction"]>,
  { x: number; y: number }
> = {
  up: { x: 0, y: 36 },
  left: { x: 32, y: 0 },
  right: { x: -32, y: 0 },
  none: { x: 0, y: 0 },
};

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const reduceMotion = useReducedMotion();
  const offset = DIRECTION_OFFSETS[direction];

  return (
    <motion.section
      className={cn(className)}
      initial={
        reduceMotion
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, x: offset.x, y: offset.y }
      }
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] }
      }
      style={reduceMotion ? undefined : ({ contentVisibility: "auto" } as const)}
    >
      {children}
    </motion.section>
  );
}
