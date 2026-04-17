"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Reel = {
  title: string;
  username: string;
  tag: string;
  caption: string;
  poster: string;
};

const reels: Reel[] = [
  {
    title: "PR Package Unboxing",
    username: "lifeofuru_",
    tag: "PR Package",
    caption:
      "EP-2 of unboxing the PR package @singaporebeveragesnepal @lemonzaa_nimbupani — a refreshing PR package right before the New Year.",
    poster: "/images/reels/lifeofuru-pr-package-unboxing.webp",
  },
  {
    title: "Beautiful Basket of Refreshments",
    username: "priyanka1st",
    tag: "Refreshment Basket",
    caption:
      "Thank you @singaporebeveragesnepal for sending us this beautiful basket of refreshments. Happy new year to you and your team.",
    poster: "/images/reels/priyanka1st-refreshment-basket.webp",
  },
  {
    title: "Nimbu Pani Creators Meet 2025",
    username: "kc_sylvia",
    tag: "Creator Meet",
    caption:
      "Thank you for having me at Nimbu Pani Creators Meet 2025. A space where passion, purpose, and creativity flowed in every direction.",
    poster: "/images/reels/kc-sylvia-nimbu-pani-creators-meet.webp",
  },
  {
    title: "Nepali Success Story",
    username: "anilkesharyshah",
    tag: "Brand Story",
    caption:
      "What an amazing Nepali success story of @singaporebeveragesnepal starting from Jeeru to Nimbu Pani and a host of other drinks successful in 40 nations across the world.",
    poster: "/images/reels/anilkesharyshah-brand-story.webp",
  },
  {
    title: "Keto Lemon Lime Partner",
    username: "pace_acem",
    tag: "Event Partner",
    caption:
      "Fueling innovation the keto way. Powered by @singaporebeveragesnepal Keto Lemon Lime at our hackathon.",
    poster: "/images/reels/pace-acem-keto-hackathon.webp",
  },
  {
    title: "Lemonzaa Studio Shoot",
    username: "bloom.adagency",
    tag: "Product Shoot",
    caption:
      "Crafted in our own studio, where even Nimbu Pani turns cinematic. Product featured: Lemonzaa Nimbu Pani.",
    poster: "/images/reels/bloom-adagency-product-shoot.webp",
  },
];

function PlayIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M8 5v14l11-7L8 5z" />
    </svg>
  );
}

export default function CreatorCollaborationsSection() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAF9] py-16 md:py-24">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-[30rem] w-[30rem] rounded-full bg-[#FF8A00]/5 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-[30rem] w-[30rem] rounded-full bg-lime-300/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[90rem]">
        <div className="mb-10 px-6 sm:px-8 md:mb-16 md:px-12 text-center">
          <p className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#FF8A00] shadow-sm">
            Creator Collaborations
          </p>
          <h2 className="mx-auto mt-6 max-w-2xl font-heading text-[2.2rem] font-bold leading-tight tracking-tight text-zinc-950 sm:text-[3rem] md:text-[3.5rem]">
            Reel Moments & Stories
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
            A look into PR unboxings, beautiful creator meetups, and fresh product shoots across our community. Swipe to explore the refreshment.
          </p>
        </div>

        {/* Swipeable Container */}
        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-14 pt-4 sm:gap-6 sm:px-8 md:gap-8 md:px-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {reels.map((reel, index) => (
            <motion.article
              key={`${reel.username}-${reel.title}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10 }}
              className="group relative flex w-[16rem] shrink-0 snap-start snap-always flex-col overflow-hidden rounded-[2.5rem] bg-white p-3 shadow-[0_15px_40px_-20px_rgba(0,0,0,0.12)] transition-shadow hover:shadow-[0_25px_50px_-25px_rgba(255,138,0,0.3)] sm:w-[19rem] md:w-[21rem]"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.8rem] bg-zinc-100">
                <Image
                  src={reel.poster}
                  alt={reel.title}
                  fill
                  sizes="(max-width: 640px) 256px, 336px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-opacity duration-300 group-hover:from-black/90" />

                {/* Top Badge */}
                <div className="absolute left-4 top-4">
                  <span className="rounded-full bg-white/20 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                    {reel.tag}
                  </span>
                </div>

                {/* Hover Play Button */}
                <div className="absolute inset-0 grid place-items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-white/95 text-[#FF8A00] shadow-xl backdrop-blur">
                    <PlayIcon className="h-6 w-6 translate-x-[2px]" />
                  </div>
                </div>

                {/* Text Content overlay on image */}
                <div className="absolute bottom-5 left-5 right-5 z-10 transition-transform duration-300 group-hover:translate-y-[-4px]">
                  <p className="font-semibold tracking-wide text-[#FF8A00] text-sm">@{reel.username}</p>
                  <h3 className="mt-1 font-heading text-[1.4rem] leading-[1.1] text-white line-clamp-2 md:text-[1.6rem]">
                    {reel.title}
                  </h3>
                </div>
              </div>

              {/* Caption Section */}
              <div className="mt-4 px-3 pb-3">
                <p className="line-clamp-3 text-[0.9rem] leading-relaxed text-zinc-600">
                  {reel.caption}
                </p>
                <div className="mt-4 text-sm font-semibold text-[#FF8A00] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Featured community moment
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
