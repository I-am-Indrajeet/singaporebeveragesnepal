import type { Metadata } from "next";

import type { Product } from "@/types/product";

export const SITE_URL = "https://singaporebeverages.com.np";
export const SITE_NAME = "Singapore Beverages";
export const DEFAULT_OG_IMAGE = "/brand/og-default.svg";

export function buildMetadata(opts: {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
}): Metadata {
  const url = `${SITE_URL}${opts.path}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: `${opts.title} | ${SITE_NAME}`,
    description: opts.description,
    keywords: opts.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: opts.image ?? DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: [opts.image ?? DEFAULT_OG_IMAGE],
    },
  };
}

export function buildCanonicalUrl(path: string) {
  return `${SITE_URL}${path}`;
}

export function buildBreadcrumbSchema(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: buildCanonicalUrl(item.path),
    })),
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: buildCanonicalUrl("/brand/logo.svg"),
    sameAs: [
      SITE_URL,
      `${SITE_URL}/news`,
      `${SITE_URL}/products`,
    ],
  };
}

export function buildProductSchema(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: [buildCanonicalUrl(product.image)],
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
    category: product.category,
    sku: product.id,
    keywords: product.seoKeywords.join(", "),
  };
}
