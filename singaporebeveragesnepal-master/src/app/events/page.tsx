import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SchemaScript } from "@/components/shared/SchemaScript";
import { PageHero } from "@/components/shared/PageHero";
import { getAllEvents } from "@/lib/cms/content";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Events",
  description:
    "Explore Singapore Beverages events, tastings, hospitality showcases, and commercial activation opportunities in Nepal.",
  path: "/events",
  keywords: ["beverage events nepal", "hospitality showcase nepal"],
});

export default async function EventsPage() {
  const events = await getAllEvents();
  const [featuredEvent, ...otherEvents] = events;

  return (
    <main className="bg-white min-h-screen pb-32">
      <SchemaScript
        schema={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Events", path: "/events" },
        ])}
      />

      <PageHero 
        label="Activations"
        title="Tasting the difference, live."
        description="Event storytelling is built aggressively around tastings, hospitality visibility, and partnership planning. Meet us at these upcoming showcases."
        gradientFrom="from-[#FF3366]/10"
      />

      <div className="mx-auto max-w-[85rem] px-5 md:px-8 lg:px-10 pt-20 space-y-16">

        {featuredEvent ? (
          <section className="grid gap-8 overflow-hidden rounded-[2.25rem] border border-zinc-200 bg-white lg:grid-cols-[0.95fr_1.05fr]">
            <div className="flex items-center justify-center bg-zinc-50 p-8">
              <Image
                src={featuredEvent.featuredImage}
                alt={`${featuredEvent.title} feature`}
                width={560}
                height={900}
                className="h-auto w-[12rem] object-contain md:w-[15rem]"
              />
            </div>
            <div className="p-8 md:p-10">
              <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
                Featured Event
              </p>
              <h2 className="mt-4 font-heading text-4xl text-zinc-950">
                {featuredEvent.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-zinc-600">
                {featuredEvent.shortDescription}
              </p>
              <p className="mt-6 text-sm font-medium text-zinc-700">
                {featuredEvent.location} · {featuredEvent.eventDate}
              </p>
              <Link
                href={`/events/${featuredEvent.slug}`}
                className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-semibold text-white"
              >
                View Event Details
              </Link>
            </div>
          </section>
        ) : null}

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {otherEvents.map((event) => (
            <Link
              key={event.id}
              href={`/events/${event.slug}`}
              className="rounded-[2rem] border border-zinc-200 bg-white p-6"
            >
              <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
                {event.location}
              </p>
              <h2 className="mt-4 font-heading text-2xl text-zinc-950">
                {event.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                {event.shortDescription}
              </p>
              <p className="mt-6 text-sm font-medium text-zinc-700">
                {event.eventDate}
              </p>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
