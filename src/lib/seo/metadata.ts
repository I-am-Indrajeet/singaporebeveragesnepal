import type { Metadata } from "next";

import { BRAND } from "@/config/brand";
import type { Product } from "@/types/product";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://singaporebeverage.com";
export const SITE_NAME = BRAND.name;
export const DEFAULT_OG_IMAGE = "/brand/og-default.svg";

function normalizePath(path: string) {
  if (!path) return "";
  return path.startsWith("/") ? path : `/${path}`;
}

export function buildMetadata(opts: {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
}): Metadata {
  const url = buildCanonicalUrl(opts.path);
  const imageUrl = buildCanonicalUrl(opts.image ?? DEFAULT_OG_IMAGE);

  return {
    metadataBase: new URL(SITE_URL),
    title: `${opts.title} | ${SITE_NAME}`,
    description: opts.description,
    keywords: opts.keywords,
    alternates: { canonical: url },
    icons: {
      icon: "/brand/favicon.png",
      shortcut: "/brand/favicon.png",
      apple: "/brand/favicon.png",
    },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: imageUrl,
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
      images: [imageUrl],
    },
  };
}

export function buildCanonicalUrl(path: string) {
  if (/^https?:\/\//.test(path)) {
    return path;
  }

  return `${SITE_URL}${normalizePath(path)}`;
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
  const verifiedSocialLinks = Object.values(BRAND.socialLinks).filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND.name,
    legalName: BRAND.legalName,
    url: SITE_URL,
    logo: buildCanonicalUrl("/brand/logo.svg"),
    email: BRAND.email,
    telephone: BRAND.phoneNumbers[0],
    address: {
      "@type": "PostalAddress",
      streetAddress: BRAND.address.streetAddress,
      addressLocality: BRAND.address.addressLocality,
      addressRegion: BRAND.address.addressRegion,
      postalCode: BRAND.address.postalCode,
      addressCountry: BRAND.address.addressCountry,
    },
    sameAs: verifiedSocialLinks,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: BRAND.phoneNumbers[0],
        contactType: "customer service",
        areaServed: "NP",
        availableLanguage: ["English", "Nepali"],
      },
      {
        "@type": "ContactPoint",
        telephone: BRAND.phoneNumbers[1],
        contactType: "sales",
        areaServed: "NP",
        availableLanguage: ["English", "Nepali"],
      },
    ],
  };
}

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BRAND.legalName,
    image: buildCanonicalUrl("/brand/logo.svg"),
    logo: buildCanonicalUrl("/brand/logo.svg"),
    url: SITE_URL,
    email: BRAND.email,
    telephone: BRAND.phoneNumbers[0],
    address: {
      "@type": "PostalAddress",
      streetAddress: BRAND.address.streetAddress,
      addressLocality: BRAND.address.addressLocality,
      addressRegion: BRAND.address.addressRegion,
      postalCode: BRAND.address.postalCode,
      addressCountry: BRAND.address.addressCountry,
    },
    areaServed: {
      "@type": "Country",
      name: "Nepal",
    },
    sameAs: Object.values(BRAND.socialLinks).filter(Boolean),
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
      name: BRAND.name,
    },
    category: product.category,
    sku: product.id,
    keywords: product.seoKeywords.join(", "),
  };
}
