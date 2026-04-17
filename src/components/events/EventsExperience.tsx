"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import type { EventItem } from "@/types/event";
import { UpcomingSpotlight } from "@/components/events/UpcomingSpotlight";
import { PastEventsTimeline } from "@/components/events/PastEventsTimeline";
import { EventRegistrationDialog } from "@/components/events/EventRegistrationDialog";
import { EventsCtaBanner } from "@/components/events/EventsCtaBanner";
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

function sortByStartDateDesc(a: EventItem, b: EventItem) {
  return parseLocalDate(b.startDate).getTime() - parseLocalDate(a.startDate).getTime();
}

export function EventsExperience({ events }: { events: EventItem[] }) {
  const reduceMotion = useReducedMotion();
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

  const allUpcoming = React.useMemo(
    () => normalized.filter((event) => event.isUpcoming).slice().sort(sortByStartDateAsc),
    [normalized],
  );
  const allPast = React.useMemo(
    () => normalized.filter((event) => !event.isUpcoming).slice().sort(sortByStartDateDesc),
    [normalized],
  );

  const nextEvent = allUpcoming[0] ?? null;

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
    <>
      <section className="bg-[#FAFAF9] pb-28 pt-28 md:pb-36 md:pt-32">
        <div className="mx-auto max-w-[90rem] px-5 md:px-8 lg:px-10">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-zinc-500">Events & activations</p>
            <h1 className="mt-4 font-heading text-5xl tracking-tight text-zinc-950 md:text-6xl">
              Join the refreshment experience.
            </h1>
            <p className="mt-5 text-base leading-7 text-zinc-600">
              Browse upcoming experiences and past highlights—hosted events, brand activations, and partnership moments
              across Nepal.
            </p>
          </header>
        </div>

        <div className="mx-auto mt-10 max-w-[90rem] space-y-16 px-5 md:mt-12 md:px-8 lg:px-10">
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-20 md:space-y-24"
          >
            <UpcomingSection events={allUpcoming} onParticipate={openRegistration} />
            <PastSection events={allPast} />
          </motion.div>

          <div className="pt-8 md:pt-12">
            <EventsCtaBanner nextEvent={nextEvent} onParticipate={openRegistration} />
          </div>
        </div>
      </section>

      <EventRegistrationDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        event={selectedEvent}
      />
    </>
  );
}

function UpcomingSection({ events, onParticipate }: { events: EventItem[]; onParticipate: (event: EventItem) => void }) {
  return (
    <section id="upcoming" className="scroll-mt-28 space-y-8">
      <header className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-zinc-500">Upcoming events</p>
        <h2 className="mt-4 font-heading text-4xl tracking-tight text-zinc-950 md:text-5xl">
          Join what’s next.
        </h2>
        <p className="mt-4 text-base leading-7 text-zinc-600">
          Premium hosted experiences, partnership activations, and crowd-ready refreshment moments—built to feel fun,
          clean, and confidently Nepali.
        </p>
      </header>
      <UpcomingSpotlight events={events} onParticipate={onParticipate} />
    </section>
  );
}

function PastSection({ events }: { events: EventItem[] }) {
  return (
    <section id="past" className="scroll-mt-28 space-y-10">
      <header className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-zinc-500">Moments we’ve created</p>
        <h2 className="mt-4 font-heading text-4xl tracking-tight text-zinc-950 md:text-5xl">
          Past highlights with real energy.
        </h2>
        <p className="mt-4 text-base leading-7 text-zinc-600">
          Scroll through the memories—festival activations, community partnerships, and our biggest brand moments.
        </p>
      </header>
      <PastEventsTimeline events={events} />
    </section>
  );
}
