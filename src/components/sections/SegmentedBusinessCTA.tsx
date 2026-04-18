import { CalendarRange, Hotel, Store } from "lucide-react";

import { PrimaryButton } from "@/components/shared/PrimaryButton";
import { SectionHeading } from "@/components/shared/SectionHeading";

const BUSINESS_SEGMENTS = [
  {
    title: "For Retailers",
    description:
      "Explore shelf-ready products with recognisable flavours, clearer segmentation, and a range that supports repeat purchase moments.",
    ctaLabel: "Talk Retail Supply",
    href: "/distributor",
    icon: Store,
    accent: "#FF8A00",
    surface: "bg-[#FFF5EA]",
  },
  {
    title: "For Hotels / Restaurants / Cafes",
    description:
      "Discuss horeca supply with products suited for mixers, service quality, and menu integration across hospitality settings.",
    ctaLabel: "Discuss Hospitality Needs",
    href: "/bulk-order",
    icon: Hotel,
    accent: "#0F766E",
    surface: "bg-[#ECFDF5]",
  },
  {
    title: "For Events",
    description:
      "Plan crowd refreshment, event-led volume requirements, and beverage support for activations, launches, and hosted experiences.",
    ctaLabel: "Plan Event Supply",
    href: "/bulk-order",
    icon: CalendarRange,
    accent: "#FF3366",
    surface: "bg-[#FFF0F5]",
  },
] as const;

export function SegmentedBusinessCTA() {
  return (
    <section className="bg-[#FAFAF9] px-5 py-24 md:px-8 md:py-32 lg:px-10">
      <div className="mx-auto max-w-[85rem]">
        <SectionHeading
          eyebrow="Choose The Right Route"
          title="Match the enquiry path to your business type."
          subtitle="Visitors should not have to guess where to start. These routes clarify the best next step for retail buyers, hospitality teams, and event planners."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {BUSINESS_SEGMENTS.map(({ title, description, ctaLabel, href, icon: Icon, accent, surface }) => (
            <article
              key={title}
              className={`group flex h-full flex-col rounded-[2.4rem] border border-zinc-200 ${surface} p-7 shadow-[0_26px_70px_-55px_rgba(24,24,27,0.4)] transition duration-300 hover:-translate-y-1 hover:border-zinc-300`}
            >
              <div
                className="flex h-14 w-14 items-center justify-center rounded-full border border-black/5 bg-white shadow-[0_12px_24px_-20px_rgba(24,24,27,0.35)]"
                style={{ color: accent }}
              >
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="mt-8 font-heading text-3xl leading-tight text-zinc-950">
                {title}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-7 text-zinc-600">
                {description}
              </p>

              <div className="mt-8">
                <PrimaryButton
                  label={ctaLabel}
                  href={href}
                  accentColor={accent}
                  className="w-full justify-center md:w-auto"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
