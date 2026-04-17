"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

type Reel = {
  title: string;
  username: string;
  collabText: string;
  audio: string;
  location: string;
  date: string;
  tag: string;
  likes: string;
  comments: string;
  caption: string;
  hashtags: string;
  url: string;
  poster: string;
  color: string;
};

const reels: Reel[] = [
  {
    title: "PR Package Unboxing",
    username: "lifeofuru_",
    collabText: "and 2 others",
    audio: "Original audio",
    location: "Nepal",
    date: "3 days ago",
    tag: "PR Package",
    likes: "50",
    comments: "0",
    caption:
      "EP-2 of unboxing the PR package @singaporebeveragesnepal @lemonzaa_nimbupani — a refreshing PR package right before the New Year.",
    hashtags: "#travel #nepal #lifeofuru #singaporebeverages #nimbupani",
    url: "https://www.instagram.com/reel/DXGMsrIDwLX/",
    poster: "/images/reels/lifeofuru-pr-package-unboxing.webp",
    color: "from-lime-300 via-yellow-300 to-green-500",
  },
  {
    title: "Beautiful Basket of Refreshments",
    username: "priyanka1st",
    collabText: "and 2 others",
    audio: "Original audio",
    location: "Nepal",
    date: "6 days ago",
    tag: "Refreshment Basket",
    likes: "36",
    comments: "9",
    caption:
      "Thank you @singaporebeveragesnepal for sending us this beautiful basket of refreshments. Happy new year to you and your team.",
    hashtags: "#fyp #nepal #singaporebeveragesnepal #viral #newyear",
    url: "https://www.instagram.com/reel/DW_CDIFD7-a/",
    poster: "/images/reels/priyanka1st-refreshment-basket.webp",
    color: "from-yellow-200 via-lime-300 to-green-500",
  },
  {
    title: "Nimbu Pani Creators Meet 2025",
    username: "kc_sylvia",
    collabText: "and 4 others",
    audio: "Original audio",
    location: "Creators Meet 2025",
    date: "August 2, 2025",
    tag: "Creator Meet",
    likes: "89",
    comments: "1",
    caption:
      "Thank you for having me at Nimbu Pani Creators Meet 2025. A space where passion, purpose, and creativity flowed in every direction.",
    hashtags:
      "#fypシ #happy #sylvia #model #instareels #viral #reels #fypage #grateful #sylvia",
    url: "https://www.instagram.com/reel/DM24zjjSdm4/",
    poster: "/images/reels/kc-sylvia-nimbu-pani-creators-meet.webp",
    color: "from-yellow-300 via-lime-300 to-emerald-500",
  },
  {
    title: "Nepali Success Story",
    username: "anilkesharyshah",
    collabText: "and singaporebeveragesnepal",
    audio: "Original audio",
    location: "Nimbu Pani Launch Event",
    date: "August 3, 2025",
    tag: "Brand Story",
    likes: "113",
    comments: "4",
    caption:
      "What an amazing Nepali success story of @singaporebeveragesnepal starting from Jeeru to Nimbu Pani and a host of other drinks successful in 40 nations across the world, to now the launch of Keto.",
    hashtags:
      "#SingaporeBeveragesNepal #NimbuPani #Keto #NepaliBrand #BrandStory",
    url: "https://www.instagram.com/reel/DM5HATFSHF4/",
    poster: "/images/reels/anilkesharyshah-brand-story.webp",
    color: "from-orange-300 via-yellow-300 to-lime-500",
  },
  {
    title: "Keto Lemon Lime Hackathon Partner",
    username: "pace_acem",
    collabText: "and drink.keto",
    audio: "Original audio",
    location: "ProtoBytes Hackathon 2.0",
    date: "February 24",
    tag: "Event Partnership",
    likes: "31",
    comments: "0",
    caption:
      "Fueling innovation the keto way. Powered by @singaporebeveragesnepal Keto Lemon Lime at our hackathon.",
    hashtags: "#ProtoBytesHackathon2.0 #paceacem",
    url: "https://www.instagram.com/reel/DVJXHqoEt_G/",
    poster: "/images/reels/pace-acem-keto-hackathon.webp",
    color: "from-lime-300 via-green-400 to-blue-600",
  },
  {
    title: "Lemonzaa Studio Product Shoot",
    username: "bloom.adagency",
    collabText: "and 4 others",
    audio: "Original audio",
    location: "Studio Product Shoot",
    date: "July 3, 2025",
    tag: "Product Shoot",
    likes: "61",
    comments: "1",
    caption:
      "Crafted in our own studio, where even Nimbu Pani turns cinematic. Product featured: Lemonzaa Nimbu Pani, Singapore Beverages Nepal Pvt. Ltd. Production Partner: MoonStone Production.",
    hashtags:
      "#TasteTheCreativity #nimbupani #lemonza #lemonade #productphotoshoot #production #productphotography #productvideography #studio",
    url: "https://www.instagram.com/p/DLpL0YWq0Zm/",
    poster: "/images/reels/bloom-adagency-product-shoot.webp",
    color: "from-lime-300 via-yellow-300 to-green-600",
  },
];

function clampIndex(index: number, length: number) {
  const safeLength = Math.max(length, 1);
  return ((index % safeLength) + safeLength) % safeLength;
}

function getInitial(username: string) {
  return username.trim().charAt(0).toUpperCase();
}

function summarize(text: string, max = 160) {
  const normalized = text.replace(/\s+/g, " ").trim();
  return normalized.length <= max ? normalized : `${normalized.slice(0, max).trim()}…`;
}

function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M12.1 20.3c-.1 0-.3 0-.4-.1C7 17.3 4 14.6 4 11.1 4 8.8 5.7 7 8 7c1.3 0 2.5.6 3.2 1.6.7-1 1.9-1.6 3.2-1.6 2.3 0 4 1.8 4 4.1 0 3.5-3 6.2-7.7 9.1-.2.1-.3.1-.4.1Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CommentIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M7 18.3c-1.6 0-3-1.3-3-3V9c0-1.7 1.4-3 3-3h10c1.7 0 3 1.3 3 3v6.3c0 1.7-1.3 3-3 3H10l-3 2.2V18.3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShareIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M20 4 4.7 10.7c-.7.3-.7 1.3 0 1.6l5.6 2.2 2.2 5.6c.3.7 1.3.7 1.6 0L20 4Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M20 4 10.3 14.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SaveIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M7 4.8h10c.7 0 1.3.6 1.3 1.3v14.4l-6.3-3.6-6.3 3.6V6c0-.7.6-1.2 1.3-1.2Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlayIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M10 8.3v7.4c0 .9 1 1.4 1.7.9l5.6-3.7c.7-.5.7-1.6 0-2.1l-5.6-3.7c-.8-.5-1.7.1-1.7 1Z"
        fill="currentColor"
      />
    </svg>
  );
}

function DotsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M7.2 12a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0Zm5.7 0a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0Zm5.7 0a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ReelPreviewCard({
  reel,
  isActive,
  onClick,
}: {
  reel: Reel;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Open reel preview for ${reel.title}`}
      className={`group relative w-[9rem] shrink-0 snap-start overflow-hidden rounded-[1.45rem] border text-left transition sm:w-[9.5rem] ${
        isActive
          ? "border-zinc-950 bg-white shadow-[0_24px_60px_-48px_rgba(255,138,0,0.45)]"
          : "border-zinc-200 bg-white shadow-[0_18px_40px_-34px_rgba(24,24,27,0.12)] hover:-translate-y-1 hover:border-[#FF8A00]/40"
      }`}
    >
      <div className="relative m-2 aspect-[5/6] overflow-hidden rounded-[1.15rem]">
        <Image src={reel.poster} alt="" fill sizes="152px" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/10" />
        <div className="absolute left-3 top-3 inline-flex rounded-full bg-black/70 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white">
          Reel
        </div>
      </div>
      <div className="px-3 pb-3 pt-1">
        <p className="truncate text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-zinc-500">{reel.tag}</p>
        <p className="mt-1 line-clamp-2 font-heading text-base leading-tight text-zinc-950">{reel.title}</p>
      </div>
    </button>
  );
}

function PrimaryReelCard({ reel }: { reel: Reel }) {
  return (
    <motion.article
      key={reel.url}
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -16, scale: 0.98 }}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-[16.25rem] overflow-hidden rounded-[1.7rem] border border-zinc-200 bg-white shadow-[0_30px_80px_-70px_rgba(255,138,0,0.34)] sm:max-w-[17.25rem] md:max-w-[18.5rem] md:rounded-[2rem]"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${reel.color} opacity-[0.05]`} />
      <span className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#FF8A00]/10 blur-3xl" />

      <header className="relative z-10 flex items-center justify-between gap-3 px-3.5 pb-2.5 pt-3.5 sm:px-4 sm:pt-4">
        <div className="flex min-w-0 items-center gap-3">
          <div
            className={`grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br ${reel.color} text-[0.75rem] font-black text-zinc-950 shadow-[0_18px_36px_-30px_rgba(255,138,0,0.6)] sm:h-9 sm:w-9 sm:text-[0.8rem]`}
          >
            {getInitial(reel.username)}
          </div>
          <div className="min-w-0">
            <p className="truncate text-[0.78rem] font-semibold text-zinc-950 sm:text-[0.82rem]">
              {reel.username} <span className="font-medium text-zinc-500">{reel.collabText}</span>
            </p>
            <p className="truncate text-xs text-zinc-500">{reel.audio}</p>
          </div>
        </div>
        <DotsIcon className="h-5 w-5 shrink-0 text-zinc-600" />
      </header>

      <div className="relative z-10 px-3.5 pb-3.5 sm:px-4 sm:pb-4">
        <div className="relative overflow-hidden rounded-[1.45rem] border border-zinc-200 bg-white shadow-[0_26px_70px_-58px_rgba(255,138,0,0.22)] sm:rounded-[1.7rem]">
          <div className="absolute left-4 top-4 z-20 inline-flex items-center gap-2 rounded-full bg-black/70 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white">
            <span className="h-2 w-2 rounded-full bg-white/70" />
            Reel
          </div>

          <a
            href={reel.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Play reel ${reel.title} on Instagram`}
            className="group relative block aspect-[9/16] w-full"
          >
            <Image src={reel.poster} alt="" fill sizes="(max-width: 640px) 260px, 296px" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-black/0 to-black/6" />
            <div className="pointer-events-none absolute right-2.5 top-14 z-20 flex flex-col gap-2 sm:right-3 sm:top-16 sm:gap-2.5">
              {[HeartIcon, CommentIcon, ShareIcon, SaveIcon].map((Icon, index) => (
                <span
                  key={index}
                  className="grid h-8 w-8 place-items-center rounded-full border border-white/20 bg-white/88 text-zinc-950 shadow-[0_18px_50px_-42px_rgba(0,0,0,0.42)] sm:h-9 sm:w-9"
                >
                  <Icon className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                </span>
              ))}
            </div>
            <span className="pointer-events-none absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/92 text-zinc-950 shadow-[0_26px_60px_-44px_rgba(0,0,0,0.6)] transition group-hover:scale-105 sm:h-12 sm:w-12">
              <PlayIcon className="h-4.5 w-4.5 translate-x-[1px] sm:h-5 sm:w-5" />
            </span>
          </a>

          <div className="space-y-1.5 px-3.5 py-3 sm:space-y-2 sm:px-4">
            <p className="text-xs text-zinc-600">
              <span className="font-semibold text-zinc-950">{reel.likes}</span> likes ·{" "}
              <span className="font-semibold text-zinc-950">{reel.comments}</span> comments
            </p>
            <p className="line-clamp-2 text-[0.78rem] leading-5 text-zinc-700 sm:text-[0.82rem]">
              <span className="font-semibold text-zinc-950">{reel.username}</span> {reel.caption}
            </p>
            <p className="line-clamp-1 text-[0.78rem] text-[#2563EB] sm:text-[0.82rem]">{reel.hashtags}</p>
            <p className="text-xs text-zinc-500">
              {reel.location} · {reel.date}
            </p>
            <a
              href={reel.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open reel ${reel.title} on Instagram`}
              className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs font-semibold text-zinc-950 shadow-[0_18px_40px_-34px_rgba(255,138,0,0.18)] transition hover:-translate-y-0.5"
            >
              Open on Instagram
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function CreatorCollaborationsSection() {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = React.useState(0);
  const active = reels[clampIndex(activeIndex, reels.length)];
  const becomeCreatorHref = pathname?.startsWith("/creator") ? "/contact" : "/creator";

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => clampIndex(current + 1, reels.length));
    }, 4000);

    return () => window.clearInterval(timer);
  }, []);

  function handleNext() {
    setActiveIndex((current) => clampIndex(current + 1, reels.length));
  }

  function handlePrev() {
    setActiveIndex((current) => clampIndex(current - 1, reels.length));
  }

  return (
    <section className="bg-[#FAFAF9] py-12 md:py-20">
      <div className="mx-auto max-w-[90rem] px-5 md:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-white p-4 shadow-[0_40px_90px_-70px_rgba(255,138,0,0.22)] sm:p-5 md:rounded-[2.5rem] md:p-8">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-28 -top-28 h-[26rem] w-[26rem] rounded-full bg-gradient-to-br from-yellow-200 via-lime-200 to-emerald-300 blur-[110px] opacity-40" />
            <div className="absolute -right-32 top-12 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-sky-200 via-blue-200 to-emerald-200 blur-[120px] opacity-38" />
            <div className="absolute bottom-0 left-1/2 h-[22rem] w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-orange-200 via-yellow-200 to-lime-200 blur-[130px] opacity-32" />
          </div>

          <div className="relative z-10 grid gap-6 md:gap-8 lg:grid-cols-[0.98fr_0.9fr] lg:items-start">
            <div className="lg:col-start-1 lg:row-start-1">
              <p className="inline-flex rounded-full border border-zinc-200 bg-white px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.24em] text-zinc-700 shadow-sm sm:px-5 sm:text-xs sm:tracking-[0.26em]">
                Instagram creator collaborations
              </p>
              <h2 className="mt-4 max-w-[12ch] font-heading text-[2.35rem] font-black leading-[0.98] tracking-tighter text-zinc-950 sm:mt-5 sm:text-[3.2rem]">
                Creator Collaborations & Reel Moments
              </h2>
              <p className="mt-4 max-w-xl text-[0.9rem] leading-6 text-zinc-600 sm:text-[0.96rem] sm:leading-7">
                From PR package unboxings and creator meetups to product shoots and event partnerships, explore the
                social moments that connect Singapore Beverages Nepal with creators, communities, and young audiences.
              </p>
            </div>

            <div className="relative lg:col-start-2 lg:row-span-2">
              <div className="rounded-[1.8rem] border border-zinc-200 bg-gradient-to-br from-orange-50 via-white to-orange-100 p-2.5 shadow-[0_38px_100px_-76px_rgba(255,138,0,0.34)] sm:rounded-[2.2rem] sm:p-3">
                <div className="space-y-3">
                  <div className="rounded-[1.5rem] border border-white/80 bg-white p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_30px_80px_-64px_rgba(255,138,0,0.18)] sm:rounded-[1.8rem] sm:p-3">
                    <AnimatePresence mode="wait" initial={false}>
                      <PrimaryReelCard reel={active} />
                    </AnimatePresence>
                  </div>

                  <div className="-mx-1 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    <div className="flex snap-x snap-mandatory gap-2.5 px-1">
                      {reels.map((reel, index) => (
                        <ReelPreviewCard
                          key={reel.url}
                          reel={reel}
                          isActive={index === clampIndex(activeIndex, reels.length)}
                          onClick={() => setActiveIndex(index)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-center gap-3 lg:hidden">
                <button
                  type="button"
                  aria-label="Previous reel"
                  onClick={handlePrev}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-950 shadow-[0_22px_45px_-38px_rgba(24,24,27,0.15)] sm:h-12 sm:w-12"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                    <path
                      d="M14.5 6.5 9 12l5.5 5.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label="Next reel"
                  onClick={handleNext}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-950 shadow-[0_22px_45px_-38px_rgba(24,24,27,0.15)] sm:h-12 sm:w-12"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                    <path
                      d="M9.5 6.5 15 12l-5.5 5.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="space-y-4 rounded-[1.7rem] border border-zinc-200 bg-white px-4 py-4 shadow-[0_34px_90px_-72px_rgba(255,138,0,0.32)] sm:px-5 sm:py-5 md:rounded-[2.1rem] md:px-6 md:py-6 lg:col-start-1 lg:row-start-2">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center rounded-full bg-zinc-950 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white">
                  {active.tag}
                </span>
                <span className={`inline-flex h-2.5 w-2.5 rounded-full bg-gradient-to-br ${active.color}`} />
                <span className="text-sm font-semibold text-zinc-950">@{active.username}</span>
              </div>

              <h3 className="font-heading text-[1.6rem] leading-[1.03] tracking-tight text-zinc-950 sm:text-[1.85rem] md:text-[2.35rem]">
                {active.title}
              </h3>
              <p className="max-w-xl text-[0.88rem] leading-6 text-zinc-600 sm:text-[0.95rem] sm:leading-7">{summarize(active.caption, 145)}</p>
              <p className="text-sm font-semibold text-zinc-950">
                {active.likes} likes · {active.comments} comments
                <span className="font-medium text-zinc-500"> · {active.date}</span>
              </p>

              <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href={active.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Watch reel ${active.title}`}
                  className="inline-flex h-11 w-full items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-semibold text-white shadow-[0_26px_60px_-45px_rgba(24,24,27,0.6)] transition hover:-translate-y-1 sm:h-12 sm:w-auto"
                >
                  Watch Reel
                </a>
                <Link
                  href={becomeCreatorHref}
                  aria-label="Become creator"
                  className="inline-flex h-11 w-full items-center justify-center rounded-full border border-zinc-200 bg-white px-6 text-sm font-semibold text-zinc-950 shadow-[0_22px_45px_-38px_rgba(255,138,0,0.22)] transition hover:-translate-y-1 sm:h-12 sm:w-auto"
                >
                  Become Creator
                </Link>
                <div className="hidden gap-3 lg:flex">
                  <button
                    type="button"
                    aria-label="Previous reel"
                    onClick={handlePrev}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-950 shadow-[0_22px_45px_-38px_rgba(24,24,27,0.15)] transition hover:-translate-y-1"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                      <path
                        d="M14.5 6.5 9 12l5.5 5.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    aria-label="Next reel"
                    onClick={handleNext}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-950 shadow-[0_22px_45px_-38px_rgba(24,24,27,0.15)] transition hover:-translate-y-1"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                      <path
                        d="M9.5 6.5 15 12l-5.5 5.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
