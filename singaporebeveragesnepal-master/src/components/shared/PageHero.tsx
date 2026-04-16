"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  label?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export function PageHero({
  title,
  description,
  label,
  gradientFrom = "from-amber-50",
  gradientTo = "to-transparent",
}: PageHeroProps) {
  return (
    <div className="relative pt-48 pb-16 md:pt-60 md:pb-28 px-5 md:px-8 lg:px-10 overflow-hidden bg-[#FAFAF9]">
      {/* Abstract decorative blurring */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[40rem] bg-gradient-to-b ${gradientFrom} ${gradientTo} blur-[100px] opacity-70 pointer-events-none`} />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto max-w-[85rem] relative z-10 flex flex-col md:items-center text-center"
      >
        {label && (
          <motion.span 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8 inline-flex items-center rounded-full border border-zinc-200 bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-zinc-900 shadow-sm"
          >
            {label}
          </motion.span>
        )}
        
        <h1 className="font-serif text-[3.5rem] md:text-[5.5rem] lg:text-[6.5rem] leading-[1.05] tracking-tight text-zinc-900">
          {title}
        </h1>
        
        {description && (
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 text-lg md:text-[1.3rem] text-zinc-500 font-medium max-w-3xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}
