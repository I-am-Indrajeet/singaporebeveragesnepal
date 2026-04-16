"use client";

import * as React from "react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

import { cn } from "@/lib/utils/cn";

export type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
  tilt?: number;
  glare?: boolean;
};

export function TiltCard({ children, className, tilt = 9, glare = true }: TiltCardProps) {
  const reduceMotion = useReducedMotion();
  const ref = React.useRef<HTMLDivElement | null>(null);

  const rotateXRaw = useMotionValue(0);
  const rotateYRaw = useMotionValue(0);
  const rotateX = useSpring(rotateXRaw, { stiffness: 240, damping: 22, mass: 0.6 });
  const rotateY = useSpring(rotateYRaw, { stiffness: 240, damping: 22, mass: 0.6 });

  const glareXRaw = useMotionValue(50);
  const glareYRaw = useMotionValue(50);
  const glareX = useSpring(glareXRaw, { stiffness: 200, damping: 26, mass: 0.5 });
  const glareY = useSpring(glareYRaw, { stiffness: 200, damping: 26, mass: 0.5 });

  const glareBackground = useMotionTemplate`radial-gradient(520px circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.22), transparent 45%)`;

  function onPointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reduceMotion) return;
    const node = ref.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    const tiltX = (0.5 - py) * tilt;
    const tiltY = (px - 0.5) * tilt;

    rotateXRaw.set(tiltX);
    rotateYRaw.set(tiltY);
    glareXRaw.set(px * 100);
    glareYRaw.set(py * 100);
  }

  function onPointerLeave() {
    rotateXRaw.set(0);
    rotateYRaw.set(0);
    glareXRaw.set(50);
    glareYRaw.set(50);
  }

  return (
    <div className="relative" style={{ perspective: reduceMotion ? undefined : 1000 }}>
      <motion.div
        ref={ref}
        className={cn("relative will-change-transform", className)}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        style={
          reduceMotion
            ? undefined
            : {
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }
        }
      >
        {children}
        {glare && !reduceMotion ? (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit]"
            style={{ background: glareBackground, opacity: 0.95 }}
          />
        ) : null}
      </motion.div>
    </div>
  );
}

