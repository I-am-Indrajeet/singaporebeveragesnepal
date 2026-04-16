"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";


const BENEFITS = [
  {
    id: "01",
    title: "Easy for consumers to recognise",
    text: "Familiar flavour profiles reduce hesitation and make first-time trial easier.",
    bullets: [
      "Built around known taste preferences",
      "Faster shelf recognition",
      "Stronger repeat-purchase potential",
    ],
    image: "/products/jeeru.png",
    color: "#F5C842",
    bgLight: "bg-[#FDF9ED]",
  },
  {
    id: "02",
    title: "Easier to plan and distribute",
    text: "A structured range makes supply planning more predictable across retail, horeca, and event demand.",
    bullets: [
      "Supports multiple channels",
      "Improves stock consistency",
      "Helps reduce fulfilment gaps",
    ],
    image: "/products/fruit-gems-orange-drink.png",
    color: "#FF8A00",
    bgLight: "bg-[#FFF4E5]",
  },
  {
    id: "03",
    title: "Stronger premium shelf presence",
    text: "Cleaner packaging and disciplined colour systems help the products look sharper, clearer, and more premium in-store.",
    bullets: [
      "Better visual recognition",
      "Cleaner portfolio architecture",
      "Stronger brand perception",
    ],
    image: "/products/tonic-water.png",
    color: "#00E5FF",
    bgLight: "bg-[#E5FCFF]",
  },
  {
    id: "04",
    title: "Fits more drinking occasions",
    text: "The range works across meals, social settings, street food, and mixer moments without losing brand coherence.",
    bullets: [
      "Meal pairing",
      "Social/event usage",
      "Premium mixing flexibility",
    ],
    image: "/products/ginger-ale.png",
    color: "#E91E63",
    bgLight: "bg-[#FDE8F0]",
  },
];

export function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeBenefit = BENEFITS[activeIndex];

  return (
    <section className="bg-[#FAF9F6] py-24 md:py-32 px-5 md:px-8 lg:px-10 relative selection:bg-zinc-200">
      <div className="mx-auto max-w-[85rem]">
        
        {/* Hidden preloader for all accordion images to fetch during the 8s loading screen */}
        <div className="absolute opacity-0 pointer-events-none z-[-1] overflow-hidden w-px h-px">
          {BENEFITS.map((benefit) => (
            <Image
              key={`preload-${benefit.id}`}
              src={benefit.image}
              alt="preload"
              width={352}
              height={550}
              priority
            />
          ))}
        </div>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-start">
          
          {/* Left Side: Sticky Visual Presentation */}
          <div className="order-2 lg:order-1 sticky top-32 w-full h-[32rem] md:h-[40rem] lg:h-[45rem] rounded-[2.5rem] overflow-hidden flex items-center justify-center p-8 transition-colors duration-700 ease-in-out shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-black/[0.03]"
               style={{ backgroundColor: activeBenefit.bgLight.replace('bg-[', '').replace(']', '') || '#ffffff' }}>
            
            {/* Dynamic backdrop glow based on active item */}
            <div 
              className="absolute inset-0 opacity-40 blur-3xl transition-colors duration-700 pointer-events-none"
              style={{ background: `radial-gradient(circle at 50% 50%, ${activeBenefit.color}50, transparent 60%)` }}
            />

            <AnimatePresence mode="popLayout">
              <motion.div
                key={activeBenefit.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, y: -20, filter: "blur(4px)" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full h-full flex justify-center items-center z-10"
              >
                <div className="relative w-[18rem] h-[28rem] md:w-[22rem] md:h-[34rem]">
                  <Image
                    src={activeBenefit.image}
                    alt={activeBenefit.title}
                    fill
                    className="object-contain drop-shadow-2xl"
                    sizes="(max-width: 768px) 288px, 352px"
                    priority
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Interactive Content */}
          <div className="order-1 lg:order-2 flex flex-col pt-4 lg:pt-12">
            
            <div className="mb-16 max-w-xl">
              <h2 className="font-serif text-4xl md:text-[3.25rem] font-medium tracking-tight text-zinc-900 leading-[1.05] mb-6">
                Why Choose Us
              </h2>
              <p className="text-[1.1rem] leading-relaxed text-zinc-500 font-medium">
                Every range decision is built to support recognition, availability, presentation, and broader use across real consumer moments.
              </p>
            </div>

            {/* Benefit Accordions */}
            <div className="flex flex-col border-t border-zinc-200">
              {BENEFITS.map((benefit, index) => {
                const isActive = activeIndex === index;
                
                return (
                  <div 
                    key={benefit.id} 
                    className="group border-b border-zinc-200 py-6 md:py-8 cursor-pointer"
                    onClick={() => setActiveIndex(index)}
                  >
                    <div className="flex items-baseline gap-6 md:gap-8">
                      <span className={`text-sm md:text-base font-bold tracking-widest font-mono transition-colors duration-500 ${isActive ? 'text-zinc-900' : 'text-zinc-400 group-hover:text-zinc-600'}`}>
                        {benefit.id}
                      </span>
                      
                      <div className="flex-1">
                        <h3 className={`text-xl md:text-2xl font-serif tracking-tight transition-colors duration-500 ${isActive ? 'text-zinc-900' : 'text-zinc-400 group-hover:text-zinc-700'}`}>
                          {benefit.title}
                        </h3>
                        
                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="pt-4 pb-2">
                                <p className="text-[1.05rem] leading-relaxed text-zinc-600 font-medium mb-6">
                                  {benefit.text}
                                </p>
                                
                                <ul className="space-y-3">
                                  {benefit.bullets.map((bullet, idx) => (
                                    <motion.li 
                                      key={idx}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: 0.2 + (idx * 0.1) }}
                                      className="flex items-start gap-3"
                                    >
                                      <div className="mt-[0.15rem] flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center bg-zinc-100 text-zinc-800">
                                        <Check className="w-3 h-3 stroke-[3]" />
                                      </div>
                                      <span className="text-zinc-700 text-sm md:text-base font-medium leading-snug">
                                        {bullet}
                                      </span>
                                    </motion.li>
                                  ))}
                                </ul>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                    
                    {/* Subtle active progress indicator */}
                    <div className="relative mt-6 md:mt-8 h-[2px] w-full bg-transparent overflow-hidden">
                      {isActive && (
                        <motion.div 
                          layoutId="activeBorder"
                          className="absolute inset-0 bg-zinc-900"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
