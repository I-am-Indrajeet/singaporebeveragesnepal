"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Store, Wine, Building2, Ticket, ArrowRight } from "lucide-react";

import { PrimaryButton } from "@/components/shared/PrimaryButton";

const CHANNELS = [
  { name: "Supermarket Retail", icon: Store, color: "#FF8A00" },
  { name: "Restaurants & Cafés", icon: Wine, color: "#FF3366" },
  { name: "Hotels & Bars", icon: Building2, color: "#00E5FF" },
  { name: "Large Event Supply", icon: Ticket, color: "#F5C842" },
];

export function DistributorCTA() {
  return (
    <section className="bg-white py-24 md:py-32 px-5 md:px-8 lg:px-10 overflow-hidden selection:bg-zinc-200">
      <div className="mx-auto max-w-[85rem] relative">
        
        {/* Soft floating background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-zinc-50 rounded-full blur-[100px] opacity-80 pointer-events-none" />

        <div className="relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24 items-center">
          
          {/* Left: Aggressive yet premium Conversion Copy */}
          <div className="flex flex-col gap-8 max-w-2xl">
            <h2 className="font-serif text-[3rem] md:text-[4rem] text-zinc-900 tracking-tight leading-[1.05]">
              Built for movement. <br className="hidden md:block"/> Designed for hospitality.
            </h2>
            
            <p className="text-lg md:text-[1.1rem] leading-relaxed text-zinc-500 font-medium max-w-lg">
              Partner with a beverage range engineered for predictable fulfillment, clean logistics, and premium shelf presence across every major consumption channel.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-4">
              <PrimaryButton 
                label="Partner with us" 
                href="/distributor" 
                className="!bg-zinc-900 !text-white hover:!bg-black shadow-[0_10px_30px_-10px_rgba(0,0,0,0.2)]"
              />
              <Link 
                href="/bulk-order"
                className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-zinc-800 hover:text-zinc-500 transition-colors py-3 px-2"
              >
                Bulk orders
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right: Energetic hovering channel pills */}
          <div className="relative">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
               {CHANNELS.map((channel, idx) => {
                 const Icon = channel.icon;
                 return (
                   <motion.div
                     key={channel.name}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, margin: "-50px" }}
                     transition={{ duration: 0.5, delay: idx * 0.1 }}
                     whileHover={{ y: -5, scale: 1.02 }}
                     className="group flex flex-col gap-4 bg-white border border-zinc-100 p-6 rounded-[2rem] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.12)] transition-all cursor-crosshair"
                   >
                     <div 
                       className="w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-500"
                       style={{ backgroundColor: `${channel.color}15`, color: channel.color }}
                     >
                       <Icon className="w-5 h-5 stroke-[2.5]" />
                     </div>
                     <span className="font-semibold text-zinc-900 tracking-tight text-lg">
                       {channel.name}
                     </span>
                   </motion.div>
                 );
               })}
             </div>
             
             {/* Decorative lines behind pills */}
             <div className="absolute inset-0 border border-zinc-100 rounded-[3rem] rotate-3 scale-105 pointer-events-none -z-10 bg-zinc-50/50" />
          </div>

        </div>
      </div>
    </section>
  );
}
