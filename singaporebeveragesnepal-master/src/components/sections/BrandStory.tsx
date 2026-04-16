"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { PrimaryButton } from "@/components/shared/PrimaryButton";
import { SecondaryButton } from "@/components/shared/SecondaryButton";

const STORY_CARDS = [
  {
    title: "The Stigma",
    desc: "Overcoming a culture that inherently doubts local quality and heavily relies on imported goods.",
    gradient: "from-orange-400 via-amber-200 to-white/20",
    offset: "",
    image: "/products/The Stigma.png",
  },
  {
    title: "The Truth",
    desc: "Local doesn't mean lesser. It’s time to rebuild trust in products born right here in Nepal.",
    gradient: "from-lime-400 via-green-200 to-white/20",
    offset: "sm:mt-20",
    image: "/products/Truth.png",
  },
  {
    title: "Our Vision",
    desc: "To proudly provide and champion high-quality Nepalese products across the entire world.",
    gradient: "from-fuchsia-400 via-purple-200 to-white/20",
    offset: "",
    image: "/products/Our Vision.png",
  },
  {
    title: "Our Mission",
    desc: "Delivering international-grade quality at reasonable costs, helping Nepal grow more independent.",
    gradient: "from-cyan-400 via-sky-200 to-white/20",
    offset: "sm:mt-20",
    image: "/products/Our Mission.png",
  },
];

export function BrandStory() {
  return (
    <div className={`pt-48 pb-32 md:pt-60 md:pb-40 px-5 md:px-8 lg:px-10 bg-[#FAFAF9] relative overflow-hidden font-body`}>
      {/* Decorative blurred background shapes */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-amber-100 rounded-full blur-[120px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[40rem] h-[40rem] bg-orange-100 rounded-full blur-[120px] opacity-30 pointer-events-none" />

      <div className="mx-auto grid max-w-[80rem] gap-12 lg:gap-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center relative z-10">
        
        {/* Left Side: Copywriting */}
        <div className="max-w-2xl">
          <h2 className="text-[3rem] md:text-[4.2rem] font-bold tracking-tight text-zinc-900 leading-[1.05]">
            A new standard for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#FF3366] to-[#FF3366]">
              Made in Nepal.
            </span>
          </h2>
          
          <div className="mt-8 space-y-6 text-base md:text-[1.05rem] leading-relaxed text-zinc-600/90 font-medium">
            <p>
              For years, we&apos;ve been conditioned to believe that local means inferior. We import our cars, our machines, and our trust—leaving our native products overlooked.
            </p>
            <p>
              But local doesn&apos;t have to mean compromise. Not all local products are equal, and that rigid school of thought needs to end. <strong className="text-zinc-900 font-semibold">Singapore Beverages is here to change the narrative.</strong>
            </p>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <PrimaryButton 
              label="Explore our story" 
              href="/about" 
              className="!bg-[#1A1A1A] !text-white hover:!bg-black shadow-xl"
            />
            <SecondaryButton 
              label="See our products" 
              href="/products" 
              className="bg-white border-zinc-200 text-zinc-800 hover:border-zinc-300"
            />
          </div>
        </div>

        {/* Right Side: Floating Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-32 sm:gap-y-20 relative pt-32 lg:pt-24 place-items-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-white/40 to-transparent blur-3xl rounded-full" />
          
          {STORY_CARDS.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group p-[1.5px] rounded-[2rem] bg-gradient-to-br ${card.gradient} shadow-xl shadow-zinc-200/50 ${card.offset} w-[85%] sm:w-[80%] lg:w-[70%] max-w-[16rem]`}
            >
              <div className="h-full w-full rounded-[2rem] bg-white/95 backdrop-blur-sm px-5 pb-8 pt-0 relative flex flex-col items-center text-center transition-colors duration-500 group-hover:bg-white/90">
                
                {/* 3D Pop-out Character Image (Reduced size by 20%) */}
                <div className="relative w-full h-[15rem] -mt-[8.5rem] mb-3 flex justify-center pointer-events-none">
                  <motion.div 
                    whileHover={{ scale: 1.08, y: -10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="absolute bottom-0 w-[14.5rem] h-[15rem] md:w-[16rem] h-[17rem] drop-shadow-[0_25px_30px_rgba(0,0,0,0.18)] z-20 pointer-events-auto cursor-pointer"
                  >
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-contain object-bottom"
                      sizes="(max-width: 768px) 232px, 256px"
                    />
                  </motion.div>
                </div>
                
                <div className="mt-auto relative z-10 w-[110%]">
                  <h3 className="text-[1.25rem] font-bold text-zinc-900 tracking-tight leading-tight">{card.title}</h3>
                  <p className="mt-2.5 text-[0.88rem] leading-snug text-zinc-500/90 font-medium">
                    {card.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
