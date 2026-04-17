"use client";

import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "9779801129639";
const WHATSAPP_MESSAGE =
  "Hello Singapore Beverages, I would like to know more about your products / bulk orders / distribution opportunities.";

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-6 w-6">
      <path d="M19.05 4.94A9.9 9.9 0 0 0 12 2a9.93 9.93 0 0 0-8.56 14.98L2 22l5.17-1.35A9.94 9.94 0 0 0 12 22a9.94 9.94 0 0 0 7.05-17.06Zm-7.05 15.4a8.3 8.3 0 0 1-4.23-1.15l-.3-.18-3.07.8.82-2.99-.2-.31a8.31 8.31 0 1 1 6.98 3.83Zm4.56-6.19c-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.13-.56.12-.17.25-.65.81-.79.98-.15.17-.29.19-.54.06-.25-.13-1.04-.38-1.98-1.22-.73-.65-1.22-1.46-1.36-1.7-.15-.25-.02-.38.11-.5.12-.12.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.84-.2-.49-.41-.42-.56-.42h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.02 2.6c.13.17 1.76 2.69 4.28 3.77.6.26 1.07.42 1.43.54.6.19 1.14.16 1.57.1.48-.07 1.48-.6 1.69-1.19.21-.58.21-1.08.15-1.19-.06-.11-.23-.17-.48-.29Z" />
    </svg>
  );
}

export function WhatsAppFloatingButton() {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group fixed z-40 flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_22px_50px_-22px_rgba(37,211,102,0.75)] transition-shadow hover:shadow-[0_30px_60px_-20px_rgba(37,211,102,0.65)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/20"
      style={{
        right: "calc(env(safe-area-inset-right, 0px) + 1rem)",
        bottom: "calc(env(safe-area-inset-bottom, 0px) + 1rem)",
      }}
    >
      <span className="sr-only">Chat on WhatsApp</span>
      <span className="flex h-14 w-14 items-center justify-center md:h-16 md:w-16">
        <WhatsAppIcon />
      </span>
      <span className="pointer-events-none absolute right-[calc(100%+0.75rem)] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 opacity-0 shadow-[0_20px_45px_-30px_rgba(24,24,27,0.35)] transition duration-300 group-hover:opacity-100 md:block">
        Chat on WhatsApp
      </span>
    </motion.a>
  );
}
