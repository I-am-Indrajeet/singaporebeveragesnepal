"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { NewsPost } from "@/types/news";

type NewsItemType = NewsPost & { date?: string };

export function NewsPreview({ items = [] }: { items?: NewsItemType[] }) {
  const displayItems = items.length >= 3 ? items.slice(0, 3) : [
    {
      id: "1",
      slug: "production-capacity-update",
      category: "Press Release",
      title: "Singapore Beverages expands production capacity to meet growing nationwide demand.",
      excerpt: "A new state-of-the-art facility will increase output by 40%, ensuring smoother peak-season fulfillment.",
      publishDate: "Oct 12, 2026",
      coverImage: "/products/jeeru.png"
    },
    {
      id: "2",
      slug: "kathmandu-culinary-festival",
      category: "Event",
      title: "Sponsoring the Kathmandu Culinary Festival",
      excerpt: "Join us as we pair our newest mixer range with top-tier local street food vendors.",
      publishDate: "Sep 28, 2026",
      coverImage: "/products/tonic-water.png"
    },
    {
      id: "3",
      slug: "reformulated-ginger-ale",
      category: "Product",
      title: "Introducing the reformulated Ginger Ale",
      excerpt: "A bolder bite engineered specifically for the thriving local bar and cocktail scene.",
      publishDate: "Sep 15, 2026",
      coverImage: "/products/ginger-ale.png"
    }
  ];

  return (
    <section className="bg-zinc-50 py-24 md:py-32 px-5 md:px-8 lg:px-10">
      <div className="mx-auto max-w-[85rem]">
        
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-zinc-900 font-bold tracking-tight">
              Latest from the Brand
            </h2>
            <p className="mt-5 text-lg text-zinc-500 font-medium leading-relaxed">
              Stories, product drops, and brand updates from the team at Singapore Beverages.
            </p>
          </div>
          <Link
            href="/news"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-bold uppercase tracking-widest text-zinc-900 shadow-sm transition-all hover:border-zinc-300 hover:bg-zinc-100"
          >
            Visit Newsroom
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        {/* 3-Column Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {displayItems.map((item, idx) => (
            <Link href={`/news/${item.slug ?? item.id}`} key={item.id} className="group outline-none block h-full">
              <motion.article 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-sm transition-all duration-400 group-hover:border-[#FF8A00]/30 group-hover:shadow-[0_20px_40px_-15px_rgba(255,138,0,0.15)]"
              >
                <div className="relative h-48 w-full overflow-hidden bg-zinc-100">
                  <Image
                    src={item.coverImage ?? "/products/jeeru.png"}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4">
                    <span className="inline-flex rounded-full bg-white/90 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-zinc-900 backdrop-blur-md">
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                  <div>
                    <span className="text-xs font-medium tracking-wide text-zinc-400 font-mono">
                      {item.publishDate}
                    </span>
                    <h3 className="mt-3 font-heading text-2xl font-bold leading-tight tracking-tight text-zinc-900 group-hover:text-[#FF8A00] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="mt-4 line-clamp-3 text-[1.05rem] font-medium leading-relaxed text-zinc-500">
                      {item.excerpt}
                    </p>
                  </div>
                  <div className="mt-8 flex items-center font-semibold text-sm text-[#FF8A00] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Read Story
                    <svg className="ml-1 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
