import type { MetadataRoute } from "next";

import { EVENTS } from "@/data/events";
import { NEWS_POSTS } from "@/data/news";
import { CATALOG_PRODUCTS } from "@/data/products";
import { SITE_URL } from "@/lib/seo/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/products",
    "/events",
    "/news",
    "/creator",
    "/distributor",
    "/bulk-order",
    "/contact",
    "/faq",
    "/soft-drinks-nepal",
    "/beverage-distributor-nepal",
  ];

  const dynamicRoutes = [
    ...CATALOG_PRODUCTS.map((product) => `/products/${product.slug}`),
    ...NEWS_POSTS.map((post) => `/news/${post.slug}`),
    ...EVENTS.map((event) => `/events/${event.slug}`),
  ];

  return [...staticRoutes, ...dynamicRoutes].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));
}
