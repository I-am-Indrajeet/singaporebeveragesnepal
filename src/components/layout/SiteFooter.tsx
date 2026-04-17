import Link from "next/link";
import Image from "next/image";

import { Facebook, Instagram, Linkedin, Music2, Twitter, Youtube } from "lucide-react";

import { BRAND, BRAND_PHONE_LINKS } from "@/config/brand";
import { PRODUCTS } from "@/data/products";
import { SPACING } from "@/styles/tokens";

export function SiteFooter() {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: BRAND.socialLinks.linkedin,
      icon: Linkedin,
      label: "Visit Singapore Beverages on LinkedIn",
    },
    {
      name: "Instagram",
      href: BRAND.socialLinks.instagram,
      icon: Instagram,
      label: "Visit Singapore Beverages on Instagram",
    },
    {
      name: "Facebook",
      href: BRAND.socialLinks.facebook,
      icon: Facebook,
      label: "Visit Singapore Beverages on Facebook",
    },
    {
      name: "YouTube",
      href: BRAND.socialLinks.youtube,
      icon: Youtube,
      label: "Visit Singapore Beverages on YouTube",
    },
    {
      name: "TikTok",
      href: BRAND.socialLinks.tiktok,
      icon: Music2,
      label: "Visit Singapore Beverages on TikTok",
    },
    {
      name: "X",
      href: BRAND.socialLinks.twitter,
      icon: Twitter,
      label: "Visit Singapore Beverages on X",
    },
  ].filter((item) => item.href.trim().length > 0);

  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div
        className={`${SPACING.containerX} mx-auto grid max-w-7xl gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]`}
      >
        <div className="space-y-4">
          <Link href="/" className="inline-block">
            <Image
              src="/products/LOGO.png"
              alt="Singapore Beverages"
              width={140}
              height={42}
              className="h-10 w-auto object-contain"
            />
          </Link>
          <p className="max-w-md text-sm leading-6 text-zinc-600">
            Premium refreshment, mixers, and signature flavours designed for
            Nepal&apos;s retail, hospitality, and distribution markets.
          </p>
          {socialLinks.length > 0 ? (
            <div className="flex gap-3 pt-3">
              {socialLinks.map(({ name, href, icon: Icon, label }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-colors hover:text-zinc-950"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          ) : null}
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Explore
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-zinc-700">
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
            <Link href="/events">Events</Link>
            <Link href="/creator">Creator</Link>
            <Link href="/news">News</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Products
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-zinc-700">
            {PRODUCTS.map((product) => (
              <Link key={product.id} href={`/products/${product.slug}`}>
                {product.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Contact
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm leading-6 text-zinc-700">
            <p>
              {BRAND.address.streetAddress}, {BRAND.address.addressLocality},{" "}
              {BRAND.address.addressRegion}
            </p>
            <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
            {BRAND_PHONE_LINKS.map((phone) => (
              <a key={phone.href} href={phone.href}>
                {phone.display}
              </a>
            ))}
            <Link href="/distributor">Distributor Partnerships</Link>
            <Link href="/bulk-order">Bulk Orders</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-200 px-4 py-4 md:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/faq">FAQ</Link>
            <Link href="/soft-drinks-nepal">Soft Drinks Nepal</Link>
            <Link href="/beverage-distributor-nepal">Beverage Distributor Nepal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
