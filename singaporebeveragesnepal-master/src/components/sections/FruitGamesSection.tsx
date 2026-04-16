"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import { FRUIT_GAMES_PRODUCTS } from "@/data/fruit-games";
import { SPACING } from "@/styles/tokens";

export function FruitGamesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProduct = FRUIT_GAMES_PRODUCTS[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % FRUIT_GAMES_PRODUCTS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? FRUIT_GAMES_PRODUCTS.length - 1 : prev - 1
    );
  };

  const getPositionVariant = (index: number) => {
    const diff = index - activeIndex;
    let position = diff;
    const length = FRUIT_GAMES_PRODUCTS.length;
    
    if (diff > length / 2) position -= length;
    if (diff < -length / 2) position += length;

    if (position === 0) return "center";
    if (position === -1) return "left1";
    if (position === 1) return "right1";
    if (position === -2) return "left2";
    if (position === 2) return "right2";
    
    return position < 0 ? "hiddenLeft" : "hiddenRight";
  };

  const carouselVariants = {
    center: {
      x: 0,
      y: 0,
      scale: 1,
      zIndex: 10,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.32, 0.72, 0, 1] },
    },
    left1: {
      x: "-18rem",
      y: "1.5rem",
      scale: 0.85,
      zIndex: 5,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.32, 0.72, 0, 1] },
    },
    right1: {
      x: "18rem",
      y: "1.5rem",
      scale: 0.85,
      zIndex: 5,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.32, 0.72, 0, 1] },
    },
    left2: {
      x: "-32rem",
      y: "2.5rem",
      scale: 0.7,
      zIndex: 3,
      opacity: 0.8,
      filter: "blur(1px)",
      transition: { duration: 0.7, ease: [0.32, 0.72, 0, 1] },
    },
    right2: {
      x: "32rem",
      y: "2.5rem",
      scale: 0.7,
      zIndex: 3,
      opacity: 0.8,
      filter: "blur(1px)",
      transition: { duration: 0.7, ease: [0.32, 0.72, 0, 1] },
    },
    hiddenLeft: {
      x: "-40rem",
      y: "3rem",
      scale: 0.5,
      zIndex: 1,
      opacity: 0,
      transition: { duration: 0.7 },
    },
    hiddenRight: {
      x: "40rem",
      y: "3rem",
      scale: 0.5,
      zIndex: 1,
      opacity: 0,
      transition: { duration: 0.7 },
    },
  };

  return (
    <motion.div
      className={`${SPACING.sectionY} pt-32 md:pt-48 relative overflow-hidden`}
      animate={{ backgroundColor: activeProduct.bgLight }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        className="pointer-events-none absolute left-1/2 top-0 h-[60rem] w-[60rem] -translate-x-1/2 -translate-y-1/3 rounded-full blur-[120px]"
        animate={{ backgroundColor: activeProduct.color, opacity: 0.12 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      <div className={`${SPACING.containerX} relative z-10 mx-auto max-w-[90rem]`}>
        <motion.div className="relative z-0 flex flex-col items-center justify-center text-center">
          <motion.div
            className="mb-8 inline-block rounded-full px-8 py-2.5 shadow-lg"
            animate={{ backgroundColor: activeProduct.color }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-xl font-black uppercase tracking-widest text-white drop-shadow-md md:text-2xl">
              Fruit Gems Collection
            </h2>
          </motion.div>

          <h3 className="font-heading text-5xl font-black tracking-tighter text-[#3E2723] drop-shadow-[0_10px_15px_rgba(62,39,35,0.2)] md:text-7xl">
            Vibrant flavours for a <br className="hidden md:block" /> vibrant life.
          </h3>
        </motion.div>

        <div className="relative -mt-10 flex h-[40rem] w-full items-center justify-center z-10">
          {FRUIT_GAMES_PRODUCTS.map((product, index) => {
            const pos = getPositionVariant(index);
            const isCenter = pos === "center";

            return (
              <motion.div
                key={product.id}
                className="absolute flex flex-col"
                variants={carouselVariants}
                initial={false}
                animate={pos}
                onClick={() => {
                  if (pos === "left1" || pos === "left2") handlePrev();
                  if (pos === "right1" || pos === "right2") handleNext();
                }}
                style={{ cursor: isCenter ? "default" : "pointer" }}
              >
                <motion.div
                  className="relative flex flex-col rounded-[2.5rem] px-6 pb-8 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.12)] transition-colors duration-700 w-[19rem] h-[26rem]"
                  animate={{
                    backgroundColor: isCenter ? product.color : "#FDEBD0",
                  }}
                >
                  {/* Floating Product Image - Absolutely positioned sticking out of the top */}
                  <div className="absolute -top-24 left-1/2 flex h-[19rem] w-[13rem] -translate-x-1/2 justify-center drop-shadow-[0_20px_35px_rgba(0,0,0,0.25)]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-contain"
                    />
                  </div>

                  {/* Navigation Arrows for active card */}
                  <AnimatePresence>
                    {isCenter && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-x-4 top-24 flex justify-between z-20 pointer-events-none"
                      >
                        <button 
                          onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-colors hover:bg-white/40 pointer-events-auto"
                        >
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button 
                          onClick={(e) => { e.stopPropagation(); handleNext(); }}
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-colors hover:bg-white/40 pointer-events-auto"
                        >
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Card Content Wrapper to push below image */}
                  <div className="flex flex-1 flex-col mt-[14.5rem] items-center text-center">
                    <motion.h3
                      className="font-heading text-3xl font-extrabold tracking-tight"
                      animate={{ color: isCenter ? "#FFFFFF" : "#5A4432" }}
                      transition={{ duration: 0.5 }}
                    >
                      {product.name}
                    </motion.h3>

                    <motion.p
                      className="mt-4 px-1 text-[0.95rem] font-medium leading-relaxed"
                      animate={{ color: isCenter ? "rgba(255,255,255,0.9)" : "#7C634F" }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="block font-bold opacity-100">{product.tagline}</span>
                      <span className="block mt-1 opacity-85 leading-snug">{product.description}</span>
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
