"use client";

import * as React from "react";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CalendarRange, CheckCircle2, Clock3, Mail, MapPin, Phone, Sparkles, User } from "lucide-react";

import type { EventItem } from "@/types/event";
import { BRAND } from "@/config/brand";
import { cn } from "@/lib/utils/cn";
import { formatEventDateRange } from "@/lib/utils/dates";
import { getEventPalette } from "@/components/events/eventPalette";

export type EventRegistrationDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  event: EventItem | null;
};

export function EventRegistrationDialog({ open, onOpenChange, event }: EventRegistrationDialogProps) {
  const reduceMotion = useReducedMotion();
  const [submitted, setSubmitted] = React.useState(false);

  React.useEffect(() => {
    if (!open) {
      setSubmitted(false);
    }
  }, [open]);

  if (!event) return null;

  const palette = getEventPalette(event);
  const dateLabel = formatEventDateRange(event.startDate, event.endDate);
  const venueLabel = [event.venue, event.city].filter(Boolean).join(", ");

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open ? (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md"
                initial={reduceMotion ? undefined : { opacity: 0 }}
                animate={reduceMotion ? undefined : { opacity: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0 }}
                transition={{ duration: 0.18 }}
              />
            </Dialog.Overlay>

              <Dialog.Content asChild>
                <motion.div
                  className="fixed left-1/2 top-1/2 z-50 w-[min(42rem,calc(100vw-2rem))] max-h-[calc(100vh-2rem)] overflow-y-auto overflow-x-hidden rounded-[2rem] border border-white/10 bg-white shadow-[0_40px_120px_-50px_rgba(0,0,0,0.85)]"
                  style={
                    {
                      ["--ev-accent" as string]: palette.accent,
                      ["--ev-from" as string]: palette.from,
                      ["--ev-via" as string]: palette.via,
                      ["--ev-to" as string]: palette.to,
                    } as React.CSSProperties
                  }
                  initial={reduceMotion ? { x: "-50%", y: "-50%" } : { opacity: 0, x: "-50%", y: "-46%", scale: 0.98 }}
                  animate={reduceMotion ? { x: "-50%", y: "-50%" } : { opacity: 1, x: "-50%", y: "-50%", scale: 1 }}
                  exit={reduceMotion ? { x: "-50%", y: "-50%" } : { opacity: 0, x: "-50%", y: "-46%", scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 240, damping: 24, mass: 0.7 }}
                >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.9),transparent_45%),radial-gradient(circle_at_100%_40%,var(--ev-from),transparent_50%),radial-gradient(circle_at_20%_100%,var(--ev-to),transparent_50%)] opacity-[0.16]" />
                <div className="relative z-10 grid gap-0 md:grid-cols-[1fr_0.92fr]">
                  <div className="p-7 sm:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <Dialog.Title className="font-heading text-2xl tracking-tight text-zinc-950 sm:text-3xl">
                          Participate
                        </Dialog.Title>
                        <Dialog.Description className="mt-2 text-sm leading-6 text-zinc-600">
                          Share your details and we’ll send the event info and next steps.
                        </Dialog.Description>
                      </div>
                      <Dialog.Close asChild>
                        <button
                          type="button"
                          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/70 text-zinc-900 shadow-sm transition hover:bg-white"
                          aria-label="Close"
                        >
                          <span className="text-xl leading-none">×</span>
                        </button>
                      </Dialog.Close>
                    </div>

                    <div className="mt-6 rounded-[1.4rem] border border-black/5 bg-white/70 p-4 shadow-[0_18px_45px_-35px_rgba(0,0,0,0.35)]">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
                        Selected event
                      </p>
                      <p className="mt-2 font-heading text-xl text-zinc-950">{event.title}</p>

                      <div className="mt-4 grid gap-2 text-sm text-zinc-700">
                        <InfoRow icon={CalendarRange} label={dateLabel} />
                        {event.time ? <InfoRow icon={Clock3} label={event.time} /> : null}
                        {venueLabel ? <InfoRow icon={MapPin} label={venueLabel} /> : null}
                      </div>

                      <div className="mt-4 flex flex-wrap items-center gap-2">
                        <span
                          className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-zinc-800"
                          style={{ boxShadow: `0 0 0 3px ${palette.glow}` }}
                        >
                          <Sparkles className="h-3.5 w-3.5" style={{ color: palette.accent }} />
                          {event.category}
                        </span>
                        {event.status ? (
                          <span
                            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
                            style={{
                              backgroundColor: `${palette.accent}14`,
                              color: "#111827",
                              boxShadow: `inset 0 0 0 1px ${palette.accent}38`,
                            }}
                          >
                            {event.status}
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-black/5 bg-zinc-950 p-7 text-white sm:p-8 md:border-l md:border-t-0">
                    <div className="absolute inset-y-0 right-0 hidden w-[14rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_55%)] md:block" />

                    {!submitted ? (
                      <form
                        className="relative z-10 grid gap-3"
                        onSubmit={(e) => {
                          e.preventDefault();
                          setSubmitted(true);
                        }}
                      >
                        <Field label="Full name" icon={User} name="name" placeholder="Your name" />
                        <Field
                          label="Email"
                          icon={Mail}
                          name="email"
                          placeholder="you@example.com"
                          type="email"
                        />
                        <Field
                          label="Phone"
                          icon={Phone}
                          name="phone"
                          placeholder="+977…"
                          type="tel"
                        />

                        <label className="grid gap-1">
                          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/65">
                            Message
                          </span>
                          <textarea
                            name="message"
                            className={cn(
                              "min-h-[7.5rem] resize-none rounded-[1.2rem] border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none",
                              "placeholder:text-white/35 focus:border-white/20 focus:ring-4 focus:ring-white/10",
                            )}
                            placeholder="Anything we should know?"
                          />
                        </label>

                        <button
                          type="submit"
                          className={cn(
                            "mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-bold uppercase tracking-[0.2em] text-zinc-950",
                            "shadow-[0_20px_55px_-25px_rgba(0,0,0,0.6)] transition hover:translate-y-[-1px]",
                          )}
                          style={{
                            background: `linear-gradient(90deg, ${palette.from}, ${palette.via}, ${palette.to})`,
                          }}
                        >
                          Send request
                          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-black/10">
                            <Sparkles className="h-4 w-4" />
                          </span>
                        </button>

                        <p className="mt-2 text-xs leading-5 text-white/55">
                          Prefer email?{" "}
                          <a
                            href={`mailto:${BRAND.email}`}
                            className="font-semibold text-white/80 underline underline-offset-4 hover:text-white"
                          >
                            {BRAND.email}
                          </a>
                        </p>

                        {event.registrationLink ? (
                          <Link
                            href={event.registrationLink}
                            className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-white/65 hover:text-white"
                          >
                            Open registration link →
                          </Link>
                        ) : null}
                      </form>
                    ) : (
                      <div className="relative z-10">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-6 w-6" style={{ color: palette.accent }} />
                          <div>
                            <p className="font-heading text-2xl tracking-tight">You’re in.</p>
                            <p className="mt-2 text-sm leading-6 text-white/70">
                              We’ve received your request. Our team will share the details and next steps soon.
                            </p>
                          </div>
                        </div>

                        <div className="mt-8 flex flex-wrap items-center gap-3">
                          <Dialog.Close asChild>
                            <button
                              type="button"
                              className="inline-flex h-11 items-center justify-center rounded-full border border-white/12 bg-white/10 px-6 text-xs font-bold uppercase tracking-[0.22em] text-white transition hover:bg-white/15"
                            >
                              Close
                            </button>
                          </Dialog.Close>
                          <Link
                            href="/contact"
                            className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-xs font-bold uppercase tracking-[0.22em] text-zinc-950 transition hover:bg-zinc-100"
                          >
                            Contact us
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        ) : null}
      </AnimatePresence>
    </Dialog.Root>
  );
}

function InfoRow({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="flex items-start gap-2">
      <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full border border-black/5 bg-white">
        <Icon className="h-4 w-4 text-zinc-700" />
      </span>
      <span className="min-w-0">{label}</span>
    </div>
  );
}

function Field({
  label,
  icon: Icon,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  icon: React.ElementType;
  name: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="grid gap-1">
      <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/65">
        {label}
      </span>
      <div className="relative">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/45">
          <Icon className="h-4 w-4" />
        </span>
        <input
          name={name}
          type={type}
          className={cn(
            "h-11 w-full rounded-full border border-white/10 bg-white/5 pl-10 pr-4 text-sm text-white outline-none",
            "placeholder:text-white/35 focus:border-white/20 focus:ring-4 focus:ring-white/10",
          )}
          placeholder={placeholder}
          required={name === "name" || name === "email"}
        />
      </div>
    </label>
  );
}

