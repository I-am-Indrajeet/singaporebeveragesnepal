"use client";

import * as React from "react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import type { EventItem } from "@/types/event";
import { EventRegistrationDialog } from "@/components/events/EventRegistrationDialog";
import { parseLocalDate } from "@/lib/utils/dates";

function isUpcomingEvent(event: EventItem) {
  if (typeof event.isUpcoming === "boolean") return event.isUpcoming;
  const end = parseLocalDate(event.endDate ?? event.startDate).getTime();
  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);
  return end >= todayStart.getTime();
}

function sortByStartDateAsc(a: EventItem, b: EventItem) {
  return parseLocalDate(a.startDate).getTime() - parseLocalDate(b.startDate).getTime();
}

export function EventsExperience({ events }: { events: EventItem[] }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [selectedEvent, setSelectedEvent] = React.useState<EventItem | null>(null);

  const participateSlug = searchParams.get("participate");

  const normalized = React.useMemo(() => {
    return events
      .filter((event) => event.published)
      .map((event) => ({ ...event, isUpcoming: isUpcomingEvent(event) }));
  }, [events]);

  const allEvents = React.useMemo(
    () => normalized.slice().sort(sortByStartDateAsc),
    [normalized],
  );

  const [featuredEvent, ...otherEvents] = allEvents;

  function openRegistration(event: EventItem) {
    setSelectedEvent(event);
    setDialogOpen(true);
  }

  React.useEffect(() => {
    if (!participateSlug) return;
    const match = normalized.find((event) => event.slug === participateSlug);
    if (!match) return;

    setSelectedEvent(match);
    setDialogOpen(true);

    const url = new URL(window.location.href);
    url.searchParams.delete("participate");
    router.replace(`${pathname}${url.search}${url.hash}`, { scroll: false });
  }, [normalized, participateSlug, pathname, router]);

  return (
    <main className="bg-white min-h-screen pb-32">
      <section className="relative bg-gradient-to-b from-blue-50 to-white pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="mx-auto max-w-[85rem] px-5 md:px-8 lg:px-10">
          <header className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">Events & activations</p>
            <h1 className="mt-4 font-heading text-5xl text-zinc-950 md:text-6xl">
              Join the refreshment experience.
            </h1>
            <p className="mt-5 text-base leading-7 text-zinc-600">
              Browse upcoming experiences and past highlights—hosted events, brand activations, and partnership moments across Nepal.
            </p>
          </header>
        </div>
      </section>

      <div className="mx-auto max-w-[85rem] px-5 md:px-8 lg:px-10 pt-20 space-y-16">
        {featuredEvent ? (
          <section className="grid gap-8 overflow-hidden rounded-[2.25rem] border border-zinc-200 bg-white lg:grid-cols-[0.95fr_1.05fr]">
            <div className="flex items-center justify-center bg-zinc-50 p-8">
              <Image
                src={featuredEvent.featuredImage}
                alt={`${featuredEvent.title} cover image`}
                width={560}
                height={900}
                className="h-auto w-[12rem] object-contain md:w-[14rem]"
              />
            </div>
            <div className="p-8 md:p-10">
              <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
                {featuredEvent.category}
              </p>
              <h2 className="mt-4 font-heading text-4xl text-zinc-950">
                {featuredEvent.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-zinc-600">
                {featuredEvent.shortDescription}
              </p>
              <p className="mt-6 text-sm font-medium text-zinc-700">
                {parseLocalDate(featuredEvent.startDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <button
                onClick={() => openRegistration(featuredEvent)}
                className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-semibold text-white hover:bg-zinc-800 transition-colors"
              >
                Learn More
              </button>
            </div>
          </section>
        ) : null}

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {otherEvents.map((event) => (
            <button
              key={event.id}
              onClick={() => openRegistration(event)}
              className="rounded-[2rem] border border-zinc-200 bg-white p-6 text-left hover:border-zinc-300 hover:shadow-md transition-all"
            >
              <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
                {event.category}
              </p>
              <h2 className="mt-4 font-heading text-2xl text-zinc-950">
                {event.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                {event.shortDescription}
              </p>
              <p className="mt-6 text-sm font-medium text-zinc-700">
                {parseLocalDate(event.startDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </button>
          ))}
        </section>
      </div>

      <EventRegistrationDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        event={selectedEvent}
      />
    </main>
  );
}
