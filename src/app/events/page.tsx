import type { Metadata } from "next";
import { Suspense } from "react";

import { EventsExperience } from "@/components/events/EventsExperience";
import { SchemaScript } from "@/components/shared/SchemaScript";
import { getAllEvents } from "@/lib/cms/content";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Events",
  description:
    "Explore upcoming events and past highlights from Singapore Beverages Nepal—hosted experiences, brand activations, and partnership moments.",
  path: "/events",
  keywords: ["beverage events nepal", "brand activations nepal", "refreshment partnership nepal"],
});

export default async function EventsPage() {
  const events = await getAllEvents();

  return (
    <>
      <SchemaScript
        schema={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Events", path: "/events" },
        ])}
      />
      <Suspense fallback={null}>
        <EventsExperience events={events} />
      </Suspense>
    </>
  );
}
