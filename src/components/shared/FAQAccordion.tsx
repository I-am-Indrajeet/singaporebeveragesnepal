"use client";

import { useState } from "react";

import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils/cn";

export type FAQAccordionProps = {
  items: { question: string; answer: string }[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="grid gap-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <article
            key={item.question}
            className="rounded-[1.5rem] border border-zinc-200 bg-white px-5 py-4"
          >
            <button
              type="button"
              className="flex w-full items-start justify-between gap-4 text-left"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="font-heading text-xl text-zinc-950">
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  "mt-1 h-5 w-5 shrink-0 text-zinc-500 transition-transform duration-300",
                  isOpen && "rotate-180",
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-70",
              )}
            >
              <div className="overflow-hidden">
                <p className="pt-4 text-sm leading-7 text-zinc-600">
                  {item.answer}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
