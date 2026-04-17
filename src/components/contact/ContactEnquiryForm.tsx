"use client";

import type { ReactNode } from "react";
import { useId, useState } from "react";

import { BRAND } from "@/config/brand";
import { CATALOG_PRODUCTS } from "@/data/products";

const ENQUIRY_TYPES = [
  "General Enquiry",
  "Product Information",
  "Bulk Order",
  "Distributor Partnership",
  "Horeca Supply",
  "Event Partnership",
  "Creator Collaboration",
  "Media / Press",
  "Other",
] as const;

type EnquiryType = (typeof ENQUIRY_TYPES)[number];

const HELPER_COPY: Record<EnquiryType, string> = {
  "General Enquiry": "Share the main purpose of your message and the best way for the team to get back to you.",
  "Product Information": "Tell us which products you are interested in and what details you need.",
  "Bulk Order": "Share expected volume, timeframe, and delivery area.",
  "Distributor Partnership": "Tell us your region, sales network, and business type.",
  "Horeca Supply": "Let us know your property type, service format, and preferred beverage mix.",
  "Event Partnership": "Share the event type, audience size, and timing if known.",
  "Creator Collaboration": "Tell us about your content style, platform, and audience.",
  "Media / Press": "Include your publication, topic, and any timing requirements.",
  Other: "Share the context of your enquiry so the team can route it correctly.",
};

export function ContactEnquiryForm() {
  const [enquiryType, setEnquiryType] = useState<EnquiryType>("General Enquiry");
  const fieldPrefix = useId();
  const helperText = HELPER_COPY[enquiryType];

  const showProductField =
    enquiryType === "Product Information" ||
    enquiryType === "Bulk Order" ||
    enquiryType === "Horeca Supply";
  const showRegionField = enquiryType === "Distributor Partnership";
  const showEventDateField = enquiryType === "Event Partnership";

  return (
    <form
      className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-[0_30px_70px_-60px_rgba(24,24,27,0.35)]"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500">
          Enquiry Form
        </p>
        <h2 className="mt-3 font-heading text-3xl text-zinc-950">
          Send the team the right business brief.
        </h2>
        <p className="mt-3 text-sm leading-7 text-zinc-600">
          This front-end form is structured for lead routing. For fast business enquiries, you can also use{" "}
          <a
            href={`https://wa.me/9779801129639?text=${encodeURIComponent(
              "Hello Singapore Beverages, I would like to know more about your products / bulk orders / distribution opportunities.",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-zinc-900 underline underline-offset-4"
          >
            WhatsApp
          </a>
          .
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field
          id={`${fieldPrefix}-enquiry`}
          label="Enquiry Type"
          className="md:col-span-2"
        >
          <select
            id={`${fieldPrefix}-enquiry`}
            name="enquiryType"
            value={enquiryType}
            onChange={(event) => setEnquiryType(event.target.value as EnquiryType)}
            className="h-12 w-full rounded-full border border-zinc-200 bg-white px-5 text-sm text-zinc-900 outline-none transition focus:border-zinc-400 focus:ring-4 focus:ring-zinc-950/5"
          >
            {ENQUIRY_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>

        <div className="md:col-span-2 rounded-[1.5rem] border border-zinc-200 bg-[#FAFAF9] px-5 py-4 text-sm leading-7 text-zinc-600">
          {helperText}
        </div>

        <TextInput id={`${fieldPrefix}-name`} label="Full Name" name="fullName" autoComplete="name" />
        <TextInput
          id={`${fieldPrefix}-email`}
          label="Email Address"
          name="email"
          type="email"
          autoComplete="email"
        />
        <TextInput
          id={`${fieldPrefix}-phone`}
          label="Phone Number"
          name="phone"
          type="tel"
          autoComplete="tel"
        />
        <TextInput
          id={`${fieldPrefix}-company`}
          label="Company / Organisation"
          name="company"
          autoComplete="organization"
        />

        {showRegionField ? (
          <TextInput
            id={`${fieldPrefix}-region`}
            label="Region / Sales Territory"
            name="region"
            className="md:col-span-2"
          />
        ) : null}

        {showProductField ? (
          <Field id={`${fieldPrefix}-product`} label="Relevant Product" className="md:col-span-2">
            <select
              id={`${fieldPrefix}-product`}
              name="product"
              className="h-12 w-full rounded-full border border-zinc-200 bg-white px-5 text-sm text-zinc-900 outline-none transition focus:border-zinc-400 focus:ring-4 focus:ring-zinc-950/5"
              defaultValue=""
            >
              <option value="" disabled>
                Select a product if relevant
              </option>
              {CATALOG_PRODUCTS.map((product) => (
                <option key={product.id} value={product.name}>
                  {product.name}
                </option>
              ))}
            </select>
          </Field>
        ) : null}

        {showEventDateField ? (
          <TextInput
            id={`${fieldPrefix}-event-date`}
            label="Event Date"
            name="eventDate"
            type="date"
            className="md:col-span-2"
          />
        ) : null}

        <Field id={`${fieldPrefix}-message`} label="Project Details" className="md:col-span-2">
          <textarea
            id={`${fieldPrefix}-message`}
            name="message"
            className="min-h-[12rem] w-full rounded-[1.5rem] border border-zinc-200 px-5 py-4 text-sm text-zinc-900 outline-none transition focus:border-zinc-400 focus:ring-4 focus:ring-zinc-950/5"
            placeholder={helperText}
          />
        </Field>
      </div>

      <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm leading-7 text-zinc-500">
          Prefer direct contact? Email{" "}
          <a
            href={`mailto:${BRAND.email}`}
            className="font-semibold text-zinc-900 underline underline-offset-4"
          >
            {BRAND.email}
          </a>
          .
        </p>
        <button
          type="submit"
          className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-semibold text-white transition hover:bg-zinc-800"
        >
          Send Enquiry
        </button>
      </div>
    </form>
  );
}

type FieldProps = {
  id: string;
  label: string;
  className?: string;
  children: ReactNode;
};

function Field({ id, label, className, children }: FieldProps) {
  return (
    <label htmlFor={id} className={className}>
      <span className="mb-2 block text-sm font-semibold text-zinc-900">{label}</span>
      {children}
    </label>
  );
}

type TextInputProps = {
  id: string;
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  className?: string;
};

function TextInput({
  id,
  label,
  name,
  type = "text",
  autoComplete,
  className,
}: TextInputProps) {
  return (
    <Field id={id} label={label} className={className}>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        className="h-12 w-full rounded-full border border-zinc-200 px-5 text-sm text-zinc-900 outline-none transition focus:border-zinc-400 focus:ring-4 focus:ring-zinc-950/5"
      />
    </Field>
  );
}
