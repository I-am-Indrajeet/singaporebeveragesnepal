"use client";

import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import { PrimaryButton } from "@/components/shared/PrimaryButton";
import { cn } from "@/lib/utils/cn";

type NavLink = {
  href: string;
  label: string;
};

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
  currentPath: string;
  accentColor: string;
};

export function MobileNav({
  open,
  onClose,
  links,
  currentPath,
  accentColor,
}: MobileNavProps) {
  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.button
            type="button"
            aria-label="Close navigation overlay"
            className="fixed inset-0 z-40 bg-zinc-950/45"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            className="fixed right-0 top-0 z-50 flex h-screen w-[min(86vw,24rem)] flex-col bg-zinc-950 px-6 pb-8 pt-5 text-white shadow-2xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <p className="font-heading text-2xl">Menu</p>
              <button
                type="button"
                aria-label="Close navigation"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10"
                onClick={onClose}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="mt-8 flex flex-1 flex-col">
              {links.map((link) => {
                const isActive =
                  link.href === '/'
                    ? currentPath === '/'
                    : currentPath.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "flex min-h-12 items-center border-b border-white/10 text-lg font-medium transition-colors",
                      isActive ? "text-white" : "text-white/72",
                    )}
                    style={isActive ? { color: accentColor } : undefined}
                    onClick={onClose}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-8 rounded-[1.8rem] border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
                Business Enquiries
              </p>
              <p className="mt-3 text-sm leading-6 text-white/70">
                Choose the route that matches your supply, partnership, or trade requirement.
              </p>
              <div className="mt-4 grid gap-3">
                <Link
                  href="/bulk-order"
                  onClick={onClose}
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/12 bg-white/8 px-5 text-sm font-semibold text-white transition hover:bg-white/12"
                >
                  Bulk Order
                </Link>
                <PrimaryButton
                  label="Become a Distributor"
                  href="/distributor"
                  accentColor={accentColor}
                />
              </div>
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}
