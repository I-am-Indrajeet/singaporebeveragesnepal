"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, X } from "lucide-react";

import { cn } from "@/lib/utils/cn";

export type EventsTab = "all" | "upcoming" | "past";

export type EventsControlBarProps = {
  tab: EventsTab;
  onTabChange: (tab: EventsTab) => void;

  search: string;
  onSearchChange: (value: string) => void;

  city: string;
  onCityChange: (value: string) => void;
  cityOptions: string[];

  category: string;
  onCategoryChange: (value: string) => void;
  categoryOptions: string[];

  month: string;
  onMonthChange: (value: string) => void;
  monthOptions: Array<{ key: string; label: string }>;

  sort: string;
  onSortChange: (value: string) => void;

  resultsLabel: string;
  onReset: () => void;
};

export function EventsControlBar({
  tab,
  onTabChange,
  search,
  onSearchChange,
  city,
  onCityChange,
  cityOptions,
  category,
  onCategoryChange,
  categoryOptions,
  month,
  onMonthChange,
  monthOptions,
  sort,
  onSortChange,
  resultsLabel,
  onReset,
}: EventsControlBarProps) {
  const filtersActive = Boolean(search || city !== "all" || category !== "all" || month !== "all");

  return (
    <div className="sticky top-20 z-30 mx-auto w-full max-w-[90rem] px-5 md:top-24 md:px-8 lg:px-10">
      <div className="rounded-[1.6rem] border border-black/8 bg-white/80 shadow-[0_30px_90px_-70px_rgba(0,0,0,0.55)] backdrop-blur-xl">
        <div className="grid gap-4 p-4 md:grid-cols-[auto_1fr] md:items-center md:gap-6 md:p-5">
          <SegmentedTabs value={tab} onChange={onTabChange} />

          <div className="grid gap-3 md:grid-cols-[1fr_auto] md:items-center">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              <SlidersHorizontal className="h-4 w-4" />
              <span className="truncate">{resultsLabel}</span>
            </div>

            <div className="flex items-center justify-between gap-3 md:justify-end">
              {filtersActive ? (
                <button
                  type="button"
                  onClick={onReset}
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-zinc-900 shadow-sm transition hover:bg-zinc-50"
                >
                  <X className="h-4 w-4" />
                  Reset
                </button>
              ) : null}
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <SearchField value={search} onChange={onSearchChange} />
              <SelectField
                label="City"
                value={city}
                onChange={onCityChange}
                options={cityOptions}
                placeholder="All cities"
              />
              <SelectField
                label="Type"
                value={category}
                onChange={onCategoryChange}
                options={categoryOptions}
                placeholder="All types"
              />
              <SelectField
                label="Month"
                value={month}
                onChange={onMonthChange}
                options={monthOptions.map((opt) => opt.key)}
                labels={Object.fromEntries(monthOptions.map((opt) => [opt.key, opt.label]))}
                placeholder="All months"
              />
              <SelectField
                label="Sort"
                value={sort}
                onChange={onSortChange}
                options={["soonest", "latest"]}
                labels={{ soonest: "Soonest first", latest: "Latest first" }}
                placeholder="Sort"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SegmentedTabs({ value, onChange }: { value: EventsTab; onChange: (tab: EventsTab) => void }) {
  const tabs: Array<{ id: EventsTab; label: string }> = [
    { id: "all", label: "All Events" },
    { id: "upcoming", label: "Upcoming" },
    { id: "past", label: "Past" },
  ];

  return (
    <div className="relative flex items-center rounded-full border border-black/8 bg-zinc-100 p-1 shadow-inner">
      {tabs.map((tab) => {
        const selected = tab.id === value;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className={cn(
              "relative z-10 inline-flex h-10 items-center justify-center rounded-full px-4 text-xs font-black uppercase tracking-[0.22em] transition-colors",
              selected ? "text-zinc-950" : "text-zinc-500 hover:text-zinc-800",
            )}
          >
            {selected ? (
              <motion.span
                layoutId="events-tab"
                className="absolute inset-0 z-0 rounded-full bg-white shadow-[0_14px_40px_-25px_rgba(0,0,0,0.45)]"
                transition={{ type: "spring", stiffness: 360, damping: 30 }}
              />
            ) : null}
            <span className="relative z-10">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}

function SearchField({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <label className="relative min-w-[16rem] shrink-0">
      <span className="sr-only">Search events</span>
      <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search events…"
        className={cn(
          "h-11 w-full rounded-full border border-black/8 bg-white px-10 pr-4 text-sm text-zinc-900 shadow-sm outline-none",
          "placeholder:text-zinc-400 focus:ring-4 focus:ring-black/5",
        )}
      />
    </label>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
  labels,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  labels?: Record<string, string>;
  placeholder: string;
}) {
  return (
    <label className="relative shrink-0">
      <span className="sr-only">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-11 rounded-full border border-black/8 bg-white px-4 pr-10 text-sm font-semibold text-zinc-900 shadow-sm outline-none focus:ring-4 focus:ring-black/5"
      >
        <option value="all">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {labels?.[option] ?? option}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500">
        ▾
      </span>
    </label>
  );
}

