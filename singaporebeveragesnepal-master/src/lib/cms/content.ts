import { EVENTS } from "@/data/events";
import { NEWS_POSTS } from "@/data/news";
import { sanityClient } from "@/lib/cms/client";
import {
  allEventsQuery,
  allNewsQuery,
  eventBySlugQuery,
  newsBySlugQuery,
} from "@/lib/cms/queries";
import type { EventItem } from "@/types/event";
import type { NewsPost } from "@/types/news";
import type {
  SanityBlock,
  SanityEventDocument,
  SanityNewsDocument,
} from "@/types/sanity";

function blocksToParagraphs(blocks: SanityBlock[] | undefined) {
  if (!blocks) {
    return [];
  }

  return blocks
    .map((block) => block.children?.map((child) => child.text).join("").trim() ?? "")
    .filter(Boolean);
}

function normalizeNews(doc: SanityNewsDocument): NewsPost | null {
  const slug = doc.slug?.current;

  if (!slug || !doc.title) {
    return null;
  }

  const body = blocksToParagraphs(doc.body);

  return {
    id: doc._id,
    slug,
    title: doc.title,
    excerpt: doc.excerpt ?? body[0] ?? "Latest update from Singapore Beverages.",
    category: doc.category ?? "News",
    publishDate: doc.publishDate ?? new Date().toISOString(),
    coverImage: "/products/jeeru.png",
    body: body.length > 0 ? body : [doc.excerpt ?? "Latest update from Singapore Beverages."],
    seoTitle: doc.seoTitle ?? doc.title,
    seoDescription:
      doc.seoDescription ??
      doc.excerpt ??
      "Latest updates from Singapore Beverages in Nepal.",
  };
}

function normalizeEvent(doc: SanityEventDocument): EventItem | null {
  const slug = doc.slug?.current;

  if (!slug || !doc.title) {
    return null;
  }

  const fullDescription = blocksToParagraphs(doc.fullDescription);

  return {
    id: doc._id,
    slug,
    title: doc.title,
    shortDescription:
      doc.shortDescription ??
      fullDescription[0] ??
      "Upcoming Singapore Beverages event update.",
    eventDate: doc.eventDate ?? new Date().toISOString(),
    location: doc.location ?? "Nepal",
    featuredImage: "/products/tonic-water.png",
    fullDescription:
      fullDescription.length > 0
        ? fullDescription
        : [doc.shortDescription ?? "Upcoming Singapore Beverages event update."],
    gallery: ["/products/tonic-water.png", "/products/club-soda.png"],
    published: doc.published ?? true,
    seoTitle: doc.seoTitle ?? doc.title,
    seoDescription:
      doc.seoDescription ??
      doc.shortDescription ??
      "Latest Singapore Beverages event information.",
  };
}

export async function getAllNews() {
  try {
    const docs = await sanityClient.fetch<SanityNewsDocument[]>(allNewsQuery);
    const normalized = docs.map(normalizeNews).filter((item): item is NewsPost => item !== null);

    return normalized.length > 0 ? normalized : NEWS_POSTS;
  } catch {
    return NEWS_POSTS;
  }
}

export async function getNewsBySlug(slug: string) {
  try {
    const doc = await sanityClient.fetch<SanityNewsDocument | null>(newsBySlugQuery, {
      slug,
    });

    const normalized = doc ? normalizeNews(doc) : null;
    if (normalized) {
      return normalized;
    }
  } catch {
    // ignore and fall back
  }

  return NEWS_POSTS.find((item) => item.slug === slug) ?? null;
}

export async function getAllEvents() {
  try {
    const docs = await sanityClient.fetch<SanityEventDocument[]>(allEventsQuery);
    const normalized = docs
      .map(normalizeEvent)
      .filter((item): item is EventItem => item !== null && item.published);

    return normalized.length > 0 ? normalized : EVENTS;
  } catch {
    return EVENTS;
  }
}

export async function getEventBySlug(slug: string) {
  try {
    const doc = await sanityClient.fetch<SanityEventDocument | null>(eventBySlugQuery, {
      slug,
    });

    const normalized = doc ? normalizeEvent(doc) : null;
    if (normalized && normalized.published) {
      return normalized;
    }
  } catch {
    // ignore and fall back
  }

  return EVENTS.find((item) => item.slug === slug) ?? null;
}
