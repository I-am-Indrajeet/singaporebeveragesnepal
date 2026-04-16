import Link from "next/link";
import Image from "next/image";

import { Facebook, Instagram, Linkedin } from "lucide-react";

import { PRODUCTS } from "@/data/products";
import { SPACING } from "@/styles/tokens";

export function SiteFooter() {
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
          <div className="flex gap-3 pt-3">
            <Link
              href="/"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-colors hover:text-zinc-950"
            >
              <Instagram className="h-4 w-4" />
            </Link>
            <Link
              href="/"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-colors hover:text-zinc-950"
            >
              <Facebook className="h-4 w-4" />
            </Link>
            <Link
              href="/"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-colors hover:text-zinc-950"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Explore
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-zinc-700">
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
            <Link href="/events">Events</Link>
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
            <p>Kathmandu, Nepal</p>
            <Link href="/contact">General Enquiries</Link>
            <Link href="/distributor">Distributor Partnerships</Link>
            <Link href="/bulk-order">Bulk Orders</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-200 px-4 py-4 md:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Singapore Beverages. All rights reserved.</p>
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
