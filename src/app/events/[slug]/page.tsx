import type React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { SchemaScript } from "@/components/shared/SchemaScript";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ParticipateButton } from "@/components/events/ParticipateButton";
import { EVENTS } from "@/data/events";
import { getEventBySlug } from "@/lib/cms/content";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo/metadata";
import { formatEventDateRange } from "@/lib/utils/dates";
import { getEventPalette } from "@/components/events/eventPalette";

export const revalidate = 60;

type EventPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return EVENTS.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({
  params,
}: EventPageProps): Promise<Metadata> {
  const event = await getEventBySlug(params.slug);

  if (!event) {
    return buildMetadata({
      title: "Event",
      description: "Singapore Beverages event detail.",
      path: `/events/${params.slug}`,
    });
  }

  return buildMetadata({
    title: event.seoTitle,
    description: event.seoDescription,
    path: `/events/${event.slug}`,
    image: event.featuredImage,
  });
}

export default async function EventDetailPage({ params }: EventPageProps) {
  const event = await getEventBySlug(params.slug);

  if (!event) {
    notFound();
  }

  const palette = getEventPalette(event);
  const dateLabel = formatEventDateRange(event.startDate, event.endDate);
  const venueLabel = [event.venue, event.city].filter(Boolean).join(", ");

  return (
    <main
      className="min-h-screen bg-[#FAFAF9] pb-32 pt-28 md:pt-36"
      style={
        {
          ["--ev-accent" as string]: palette.accent,
          ["--ev-from" as string]: palette.from,
          ["--ev-via" as string]: palette.via,
          ["--ev-to" as string]: palette.to,
        } as React.CSSProperties
      }
    >
      <SchemaScript
        schema={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Events", path: "/events" },
          { name: event.title, path: `/events/${event.slug}` },
        ])}
      />

      <div className="relative overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(255,255,255,0.12),transparent_55%),radial-gradient(circle_at_100%_0%,var(--ev-from),transparent_55%),radial-gradient(circle_at_0%_100%,var(--ev-to),transparent_55%)] opacity-80" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.85),transparent_55%)] opacity-80" />

        <div className="relative z-10 mx-auto grid max-w-[90rem] gap-10 px-5 pb-16 pt-20 md:px-8 md:pb-20 md:pt-24 lg:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="min-w-0 text-white">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-white/85 backdrop-blur">
                {event.category}
              </span>
              {event.status ? (
                <span
                  className="inline-flex items-center rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-zinc-950"
                  style={{
                    background: `linear-gradient(90deg, ${palette.from}, ${palette.via}, ${palette.to})`,
                  }}
                >
                  {event.status}
                </span>
              ) : null}
              {event.highlightText ? (
                <span className="inline-flex items-center rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-semibold text-white/80 backdrop-blur">
                  {event.highlightText}
                </span>
              ) : null}
            </div>

            <h1 className="mt-7 font-heading text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.2rem]">
              {event.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base font-medium leading-7 text-white/72 sm:text-lg">
              {event.shortDescription}
            </p>

            <div className="mt-8 grid gap-2 text-sm text-white/70 sm:grid-cols-2">
              <p className="rounded-full border border-white/12 bg-white/6 px-4 py-2 backdrop-blur">
                <span className="font-semibold text-white/55">Date:</span> {dateLabel}
              </p>
              {event.time ? (
                <p className="rounded-full border border-white/12 bg-white/6 px-4 py-2 backdrop-blur">
                  <span className="font-semibold text-white/55">Time:</span> {event.time}
                </p>
              ) : null}
              {venueLabel ? (
                <p className="rounded-full border border-white/12 bg-white/6 px-4 py-2 backdrop-blur sm:col-span-2">
                  <span className="font-semibold text-white/55">Venue:</span> {venueLabel}
                </p>
              ) : null}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <ParticipateButton
                accent={palette.accent}
                href={`/events?participate=${event.slug}#upcoming`}
                label="Participate"
              />
              <a
                href={event.registrationLink ?? "/contact"}
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/16 bg-white/5 px-7 text-xs font-black uppercase tracking-[0.22em] text-white/90 backdrop-blur transition hover:bg-white/10"
              >
                Registration / enquiries
              </a>
            </div>
            <p className="mt-4 text-xs leading-5 text-white/55">
              This page supports real registration links. Right now, Participate opens a demo interaction on the Events
              page.
            </p>
          </div>

          <div className="relative mx-auto flex w-full max-w-[28rem] items-center justify-center overflow-hidden rounded-[2.6rem] border border-white/10 bg-white/5 p-8 shadow-[0_40px_140px_-90px_rgba(0,0,0,0.9)] backdrop-blur-xl md:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.18),transparent_55%)] opacity-90" />
            <Image
              src={event.featuredImage}
              alt={`${event.title} featured image`}
              width={560}
              height={900}
              className="relative z-10 h-auto w-[14rem] object-contain drop-shadow-[0_55px_150px_rgba(0,0,0,0.65)] md:w-[16rem]"
              priority
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[90rem] space-y-14 px-5 pt-12 md:px-8 md:pt-16 lg:px-10">
        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2.4rem] border border-black/10 bg-white p-7 shadow-[0_40px_120px_-95px_rgba(0,0,0,0.55)] sm:p-9">
            <SectionHeading
              eyebrow="Event Story"
              title="A premium moment—built for real people, real energy."
              subtitle="Clear details, strong brand presence, and refreshment experiences that feel made for Nepal."
            />
            <div className="mt-7 space-y-5 text-sm leading-7 text-zinc-600 sm:text-base">
              {event.fullDescription.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {event.pastEventRecap ? (
              <div className="mt-8 rounded-[1.8rem] border border-black/8 bg-zinc-50 p-6">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-zinc-500">Recap</p>
                <p className="mt-3 text-sm leading-7 text-zinc-700 sm:text-base">{event.pastEventRecap}</p>
              </div>
            ) : null}
          </div>

          <div className="rounded-[2.4rem] border border-black/10 bg-white p-7 shadow-[0_40px_120px_-95px_rgba(0,0,0,0.55)] sm:p-9">
            <SectionHeading
              eyebrow="Gallery"
              title="A quick look at the vibe."
              subtitle="These are placeholders ready for real event photos and highlight reels."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {event.gallery.map((image, index) => (
                <div
                  key={`${image}-${index}`}
                  className="relative overflow-hidden rounded-[1.8rem] border border-black/8 bg-zinc-50 p-4"
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100"
                    style={{ background: `radial-gradient(circle at 20% 10%, ${palette.glow}, transparent 55%)` }}
                  />
                  <Image
                    src={image}
                    alt={`${event.title} gallery image ${index + 1}`}
                    width={320}
                    height={520}
                    className="relative z-10 mx-auto h-auto w-[9rem] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
