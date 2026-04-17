"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Menu } from "lucide-react";
import { motion } from "framer-motion";

import { useHeroTheme } from "@/components/hero/HeroThemeContext";
import { MobileNav } from "@/components/layout/MobileNav";
import { PrimaryButton } from "@/components/shared/PrimaryButton";
import { cn } from "@/lib/utils/cn";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/creator", label: "Creator" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { accentColor } = useHeroTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isCondensed, setIsCondensed] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsCondensed(window.scrollY > 80);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);


  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 w-full transition-all duration-300",
          isCondensed ? "py-4" : "py-6",
        )}
        style={{ 
          ["--accent" as string]: accentColor,
          backgroundColor: isCondensed ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
          backdropFilter: isCondensed ? 'blur(10px)' : 'none',
        }}
      >
        <div
          className="mx-auto flex max-w-[90rem] items-center justify-between gap-4 px-5 transition-all duration-300 md:px-8 lg:px-10"
        >
          <Link href="/" className="shrink-0" aria-label="Singapore Beverages">
            <Image
              src="/products/LOGO.png"
              alt="Singapore Beverages"
              width={160}
              height={48}
              className="h-9 w-auto object-contain md:h-12"
              priority
            />
          </Link>

          <nav className="hidden lg:flex flex-1 justify-center">
            <div className="flex items-center gap-1 xl:gap-2 rounded-full border border-black/6 bg-white/82 p-1.5 shadow-[0_12px_30px_-24px_rgba(24,24,27,0.25)] backdrop-blur-xl">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide transition-colors duration-300",
                      isActive ? "text-zinc-950" : "text-zinc-600 hover:text-zinc-900",
                    )}
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="site-nav-active"
                        className="absolute inset-0 rounded-full"
                        style={{
                          backgroundColor: `${accentColor}25`,
                          boxShadow: `inset 0 0 0 1px ${accentColor}40, 0 8px 24px -18px rgba(24,24,27,0.3)`,
                        }}
                        transition={{ type: "spring", stiffness: 420, damping: 34, mass: 0.8 }}
                      />
                    ) : null}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                );
              })}
            </div>
          </nav>

          <div className="hidden items-center justify-end gap-3 lg:flex flex-1 lg:flex-none">
            <div className="ml-2 flex items-center gap-2.5">
              <Link
                href="/bulk-order"
                className="inline-flex h-10 items-center justify-center rounded-full border border-black/8 bg-white/82 px-5 text-sm font-semibold text-zinc-900 shadow-[0_12px_30px_-24px_rgba(24,24,27,0.25)] backdrop-blur-xl transition hover:border-black/12 hover:bg-white"
              >
                Bulk Order
              </Link>
              <PrimaryButton
                label="Become a Distributor"
                href="/distributor"
                accentColor={accentColor}
                size="sm"
              />
            </div>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/6 bg-white/82 text-zinc-950 shadow-[0_12px_30px_-24px_rgba(24,24,27,0.25)] backdrop-blur-xl lg:hidden"
            aria-label="Open navigation"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <MobileNav
        open={isOpen}
        onClose={() => setIsOpen(false)}
        links={[...NAV_LINKS, { href: "/bulk-order", label: "Bulk Order" }]}
        currentPath={pathname}
        accentColor={accentColor}
      />
    </>
  );
}
