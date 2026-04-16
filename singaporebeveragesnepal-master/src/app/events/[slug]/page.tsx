import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { SchemaScript } from "@/components/shared/SchemaScript";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { EVENTS } from "@/data/events";
import { getEventBySlug } from "@/lib/cms/content";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo/metadata";

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

  return (
    <main className="bg-[#FAFAF9] min-h-screen pt-32 pb-32 px-5 md:px-8 lg:px-10 md:pt-48">
      <SchemaScript
        schema={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Events", path: "/events" },
          { name: event.title, path: `/events/${event.slug}` },
        ])}
      />

      <div className="mx-auto max-w-7xl space-y-14">
        <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="rounded-[2.25rem] bg-zinc-950 p-8 text-white md:p-10">
            <p className="text-sm uppercase tracking-[0.18em] text-white/60">
              {event.location}
            </p>
            <h1 className="mt-4 font-heading text-4xl leading-tight md:text-5xl">
              {event.title}
            </h1>
            <p className="mt-5 text-base leading-7 text-white/78">
              {event.shortDescription}
            </p>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-[#F5C842]">
              {event.eventDate}
            </p>
          </div>
          <div className="flex items-center justify-center rounded-[2.25rem] border border-zinc-200 bg-white p-8">
            <Image
              src={event.featuredImage}
              alt={`${event.title} featured image`}
              width={560}
              height={900}
              className="h-auto w-[13rem] object-contain md:w-[15rem]"
            />
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-zinc-200 bg-white p-8">
            <SectionHeading
              eyebrow="Event Story"
              title="A practical event format designed to create flavour trial and partner conversation."
            />
            <div className="mt-6 space-y-5 text-sm leading-7 text-zinc-600">
              {event.fullDescription.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-zinc-200 bg-white p-8">
            <SectionHeading
              eyebrow="Gallery"
              title="A simple preview of the product-led event experience."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {event.gallery.map((image, index) => (
                <div
                  key={`${image}-${index}`}
                  className="rounded-[1.5rem] border border-zinc-100 bg-zinc-50 p-4"
                >
                  <Image
                    src={image}
                    alt={`${event.title} gallery image ${index + 1}`}
                    width={320}
                    height={520}
                    className="mx-auto h-auto w-[8rem] object-contain"
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
