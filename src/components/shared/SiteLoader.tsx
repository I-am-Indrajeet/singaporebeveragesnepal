"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function SiteLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = "hidden";
    
    // Hide the loader after 4 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
    }, 4000); 
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="site-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white px-6 md:px-12"
        >
          {/* Logo or Brading at the top */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="flex flex-col items-center text-center -mt-10 md:-mt-20"
          >
            <Image
              src="/products/LOGO.png"
              alt="Singapore Beverages"
              width={240}
              height={72}
              className="h-16 w-auto object-contain md:h-24"
              priority
            />
            <p className="mt-4 md:mt-6 text-[0.65rem] md:text-sm uppercase tracking-[0.3em] md:tracking-[0.4em] text-zinc-400">
              Loading Experience
            </p>
          </motion.div>

          <div className="h-28 md:h-44" />

          <div className="relative w-full max-w-3xl">
            {/* The running GIF tracking precisely with the progress bar tip */}
            <motion.div
              className="absolute bottom-full mb-1 md:mb-3"
              initial={{ left: "0%" }}
              animate={{ left: "100%" }}
              transition={{ duration: 4, ease: "linear" }}
              style={{ x: "-50%" }} // to center the GIF right on top of the tip
            >
              <Image
                src="/products/Loading.gif"
                alt="Running Soda Can"
                width={200}
                height={200}
                className="h-auto w-20 sm:w-28 md:w-36 lg:w-44 object-contain drop-shadow-sm"
                unoptimized // Keep the GIF animating!
                priority
              />
            </motion.div>

            {/* Background track */}
            <div className="h-2.5 md:h-4 w-full overflow-hidden rounded-full bg-zinc-100 shadow-inner">
              {/* Progress fill */}
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 4, ease: "linear" }}
                className="h-full rounded-full bg-[#111111]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
