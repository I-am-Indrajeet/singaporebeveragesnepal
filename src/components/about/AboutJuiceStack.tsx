"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

import { FRUIT_GAMES_PRODUCTS } from "@/data/fruit-games";

type StackFlavour = (typeof FRUIT_GAMES_PRODUCTS)[number];

const STACKED_FLAVOURS = [
  FRUIT_GAMES_PRODUCTS.find((item) => item.id === "fruit-gems-mango"),
  FRUIT_GAMES_PRODUCTS.find((item) => item.id === "fruit-gems-orange"),
  FRUIT_GAMES_PRODUCTS.find((item) => item.id === "fruit-gems-pink-guava"),
  FRUIT_GAMES_PRODUCTS.find((item) => item.id === "fruit-gems-pineapple"),
  FRUIT_GAMES_PRODUCTS.find((item) => item.id === "fruit-gems-lychee"),
].filter((item): item is StackFlavour => Boolean(item));

function getRelativeIndex(index: number, activeIndex: number, length: number) {
  const forward = (index - activeIndex + length) % length;
  if (forward === 0) return 0;
  if (forward === 1) return 1;
  if (forward === 2) return 2;
  return -1;
}

export function AboutJuiceStack() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative mx-auto mt-8 flex h-[26rem] max-w-[20rem] flex-col items-center justify-center rounded-[2.2rem] border border-white/80 bg-white/55 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-lg transition duration-500 group-hover:shadow-[0_35px_80px_-45px_rgba(255,138,0,0.9)] sm:h-[28rem] sm:max-w-[21rem]">
      <button
        type="button"
        aria-label="Cycle fruit juice images"
        onClick={() => setActiveIndex((current) => (current + 1) % STACKED_FLAVOURS.length)}
        className="relative flex h-full w-full cursor-pointer items-center justify-center"
      >
        <div className="pointer-events-none absolute inset-x-10 bottom-10 h-10 rounded-full bg-zinc-950/15 blur-2xl" />

        {STACKED_FLAVOURS.map((flavour, index) => {
          const relativeIndex = getRelativeIndex(index, activeIndex, STACKED_FLAVOURS.length);
          const isVisible = relativeIndex >= 0;

          return (
            <motion.div
              key={flavour.id}
              className="absolute left-1/2 top-1/2 flex h-[18.75rem] w-[12rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-b from-white/96 to-orange-50/86 p-4 shadow-[0_28px_70px_-38px_rgba(255,138,0,0.85)] backdrop-blur-xl sm:h-[20.5rem] sm:w-[12.75rem]"
              initial={false}
              animate={
                isVisible
                  ? {
                      opacity: 1,
                      scale: relativeIndex === 0 ? 1 : relativeIndex === 1 ? 0.92 : 0.85,
                      x: relativeIndex === 0 ? "-50%" : relativeIndex === 1 ? "-58%" : "-42%",
                      y: relativeIndex === 0 ? "-50%" : relativeIndex === 1 ? "-47%" : "-44%",
                      rotate: relativeIndex === 0 ? 0 : relativeIndex === 1 ? -10 : 9,
                      zIndex: 30 - relativeIndex,
                    }
                  : {
                      opacity: 0,
                      scale: 0.78,
                      x: "-50%",
                      y: "-42%",
                      rotate: 14,
                      zIndex: 0,
                    }
              }
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 220, damping: 24, mass: 0.8 }
              }
            >
              <div
                className="absolute inset-0 z-0 rounded-[2rem] opacity-90"
                style={{
                  background: `linear-gradient(180deg, ${flavour.bgLight} 0%, rgba(255,255,255,0.92) 100%)`,
                }}
              />
              <div className="relative z-10 h-full w-full">
                <Image
                  src={flavour.image}
                  alt=""
                  fill
                  priority={index === activeIndex}
                  sizes="(max-width: 768px) 220px, 260px"
                  className="object-contain drop-shadow-[0_28px_34px_rgba(20,20,20,0.28)]"
                />
              </div>
            </motion.div>
          );
        })}
      </button>
    </div>
  );
}
