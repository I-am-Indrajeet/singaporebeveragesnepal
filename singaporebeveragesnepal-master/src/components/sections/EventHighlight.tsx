"use client";

import Link from "next/link";
import { CalendarRange, MapPin, ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

// If using server components, make sure to handle data fetching safely. 
// For this visual redesign, we assume props or fallback content.
type EventPreviewType = {
  title?: string;
  shortDescription?: string;
  eventDate?: string;
  location?: string;
  slug?: string;
};

export function EventHighlight({ event }: { event?: EventPreviewType }) {
  // Fallbacks for empty state
  const title = event?.title ?? "The tasting experience, live.";
  const description = event?.shortDescription ?? "Join us for an exclusive showcase where we unveil our latest portfolio innovations designed for high-end hospitality and focused retail impact.";
  const dateStr = event?.eventDate ?? "Upcoming Season";
  const locationStr = event?.location ?? "Kathmandu Valley Showrooms";

  return (
    <section className={`py-24 md:py-32 px-5 md:px-8 lg:px-10 bg-[#FAFAF9] relative`}>
      <div className="mx-auto max-w-[85rem]">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[3rem] bg-[#0A0A0A] shadow-2xl"
        >
          {/* Cinematic Background Lighting */}
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-bl from-[#FF3366] to-transparent opacity-[0.12] blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-gradient-to-tr from-[#FF6B00] to-transparent opacity-[0.1] blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />
          
          <div className="relative z-10 grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-8 items-center p-8 md:p-14 lg:p-20">
            
            {/* Left Box: Cinematic Copy */}
            <div className="flex flex-col gap-8 max-w-xl">
              <div className="inline-flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#FF3366]" />
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF3366] font-mono">
                  Featured Event
                </span>
              </div>
              
              <h2 className="font-serif text-5xl md:text-[4rem] text-white tracking-tight leading-[1.05]">
                {title}
              </h2>
              
              <p className="text-lg md:text-[1.1rem] leading-relaxed text-zinc-400 font-medium">
                {description}
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-4">
                <Link
                  href={event ? `/events/${event.slug}` : "/events"}
                  className="group relative inline-flex h-14 items-center justify-center gap-3 rounded-full bg-white px-8 text-sm font-bold tracking-widest uppercase text-zinc-950 transition-all hover:bg-zinc-100 hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                >
                  Reserve a spot
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Box: Floating Info Card */}
            <div className="lg:justify-self-end w-full max-w-md">
              <motion.div 
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative rounded-[2.5rem] bg-white/[0.04] p-8 md:p-10 border border-white/10 backdrop-blur-3xl overflow-hidden shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent pointer-events-none" />
                
                <h3 className="text-xl font-medium text-white mb-8 border-b border-white/10 pb-6">
                  Event Details
                </h3>

                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div className="flex w-12 h-12 rounded-full bg-white/[0.06] items-center justify-center shrink-0 border border-white/5">
                      <CalendarRange className="h-5 w-5 text-[#FF6B00]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-wider text-zinc-500 font-mono mb-1">When</p>
                      <p className="text-white font-medium">{dateStr}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex w-12 h-12 rounded-full bg-white/[0.06] items-center justify-center shrink-0 border border-white/5">
                      <MapPin className="h-5 w-5 text-[#FF3366]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-wider text-zinc-500 font-mono mb-1">Where</p>
                      <p className="text-white font-medium">{locationStr}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-white/10">
                  <Link
                    href="/contact"
                    className="group flex items-center justify-between w-full text-white/80 hover:text-white transition-colors"
                  >
                    <span className="text-sm font-semibold uppercase tracking-wider">Partnership Inquiries</span>
                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </Link>
                </div>

              </motion.div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
