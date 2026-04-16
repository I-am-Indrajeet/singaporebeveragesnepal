"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

// If using server components, make sure to handle data fetching safely.
// For the visual redesign, we accept props or fallback mock data.
type NewsItemType = {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
};

export function NewsPreview({ items = [] }: { items?: NewsItemType[] }) {
  // Mock data for visual layout if none supplied
  const displayItems = items.length >= 3 ? items.slice(0, 3) : [
    {
      id: "1",
      category: "Press Release",
      title: "Singapore Beverages expands production capacity to meet growing nationwide demand.",
      excerpt: "A new state-of-the-art facility will increase output by 40%, ensuring smoother peak-season fulfillment.",
      date: "Oct 12, 2026"
    },
    {
      id: "2",
      category: "Event",
      title: "Sponsoring the Kathmandu Culinary Festival",
      excerpt: "Join us as we pair our newest mixer range with top-tier local street food vendors.",
      date: "Sep 28, 2026"
    },
    {
      id: "3",
      category: "Product",
      title: "Introducing the reformulated Ginger Ale",
      excerpt: "A bolder bite engineered specifically for the thriving local bar and cocktail scene.",
      date: "Sep 15, 2026"
    }
  ];

  const featured = displayItems[0];
  const supporting = displayItems.slice(1);

  return (
    <section className="bg-white py-24 md:py-32 px-5 md:px-8 lg:px-10">
      <div className="mx-auto max-w-[85rem]">
        
        {/* Editorial Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-16 border-b border-zinc-100 pb-12">
          <div className="max-w-xl">
            <h2 className="font-serif text-[3rem] md:text-[4rem] text-zinc-900 tracking-tight leading-[1.05]">
              Latest News
            </h2>
            <p className="mt-4 text-lg text-zinc-500 font-medium">Stories, product drops, and brand updates from the team at Singapore Beverages.</p>
          </div>
          <Link
            href="/news"
            className="group flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-zinc-900 transition-colors hover:text-zinc-500 py-2"
          >
            Visit Newsroom
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        {/* Asymmetric Newsroom Layout */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Featured Article */}
          <Link href={`/news/${featured.id}`} className="lg:col-span-7 group outline-none h-full block">
            <motion.article 
              whileHover={{ y: -8 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              className="flex flex-col h-full bg-[#FAFAF9] rounded-[2.5rem] border border-zinc-100 p-2 overflow-hidden shadow-[0_10px_40px_-20px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.1)] transition-shadow duration-500"
            >
              {/* Photo placeholder or image */}
              <div className="w-full h-64 md:h-[22rem] bg-zinc-200 rounded-[2rem] overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-zinc-300 to-zinc-100 transition-transform duration-700 group-hover:scale-105" />
              </div>
              
              <div className="p-8 md:p-10 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#FF3366] shadow-sm">
                      {featured.category}
                    </span>
                    <span className="text-sm font-medium tracking-wide text-zinc-400 font-mono">
                      {featured.date}
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl md:text-[2.25rem] font-medium leading-[1.1] tracking-tight text-zinc-900 group-hover:text-[#FF3366] transition-colors duration-400">
                    {featured.title}
                  </h3>
                  <p className="mt-6 text-[1.1rem] font-medium leading-relaxed text-zinc-500 line-clamp-3">
                    {featured.excerpt}
                  </p>
                </div>
              </div>
            </motion.article>
          </Link>

          {/* Supporting Articles */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
            {supporting.map((item) => (
              <Link href={`/news/${item.id}`} key={item.id} className="group outline-none flex-1 block">
                <motion.article 
                  whileHover={{ x: 8 }}
                  transition={{ ease: "easeOut", duration: 0.4 }}
                  className="flex flex-col justify-center h-full bg-white rounded-[2.5rem] border border-zinc-100 p-8 md:p-10 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] transition-all duration-400 relative overflow-hidden"
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-32 bg-zinc-50 rounded-full blur-3xl -z-10 group-hover:bg-[#FF8A00]/5 transition-colors duration-500" />
                  
                  <div className="flex items-center gap-4 mb-5">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF8A00]">
                      {item.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-zinc-300" />
                    <span className="text-sm font-medium tracking-wide text-zinc-400 font-mono">
                      {item.date}
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-[1.5rem] md:text-[1.75rem] font-medium leading-[1.2] tracking-tight text-zinc-900 group-hover:text-[#FF8A00] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[1rem] font-medium leading-relaxed text-zinc-500 line-clamp-2">
                    {item.excerpt}
                  </p>
                </motion.article>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
