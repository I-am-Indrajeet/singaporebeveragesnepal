import type { EventItem } from "@/types/event";

type EventPalette = {
  accent: string;
  from: string;
  via: string;
  to: string;
  glow: string;
};

const CITRUS: EventPalette = {
  accent: "#E8F542",
  from: "#E8F542",
  via: "#C4D940",
  to: "#FFEF6B",
  glow: "rgba(232,245,66,0.28)",
};

const COLA: EventPalette = {
  accent: "#FF3366",
  from: "#FF3366",
  via: "#FF6B00",
  to: "#FFB020",
  glow: "rgba(255,51,102,0.25)",
};

const FRESH_BLUE: EventPalette = {
  accent: "#38BDF8",
  from: "#38BDF8",
  via: "#2DD4BF",
  to: "#A5F3FC",
  glow: "rgba(56,189,248,0.22)",
};

export function getEventPalette(event: Pick<EventItem, "category" | "title" | "slug">): EventPalette {
  const lowerTitle = event.title.toLowerCase();

  if (event.slug === "sip-snap-and-squeeze") return CITRUS;
  if (lowerTitle.includes("nimbu") || lowerTitle.includes("lemon") || lowerTitle.includes("citrus")) {
    return CITRUS;
  }

  if (event.category === "Brand Activation") return COLA;
  if (event.category === "Partnership Event") return FRESH_BLUE;
  if (event.category === "Hosted Event") return CITRUS;

  return COLA;
}

