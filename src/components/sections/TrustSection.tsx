import { ArrowUpRight, ShieldCheck } from "lucide-react";

import { PrimaryButton } from "@/components/shared/PrimaryButton";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TRUST_BADGES, TRUST_POINTS } from "@/data/trust-points";

type TrustSectionProps = {
  accentColor?: string;
};

export function TrustSection({ accentColor = "#FF8A00" }: TrustSectionProps) {
  return (
    <section className="bg-white px-5 py-24 md:px-8 md:py-32 lg:px-10">
      <div className="mx-auto grid max-w-[85rem] gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
        <div className="rounded-[2.5rem] bg-zinc-950 p-8 text-white shadow-[0_30px_80px_-50px_rgba(24,24,27,0.8)] md:p-10">
          <div
            className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5"
            style={{ boxShadow: `0 0 0 1px ${accentColor}30 inset` }}
          >
            <ShieldCheck className="h-6 w-6" style={{ color: accentColor }} />
          </div>

          <div className="mt-8">
            <SectionHeading
              eyebrow="Built For Trade Confidence"
              title="Signals that help business buyers move faster."
              subtitle="Until verified partner testimonials are available, this section focuses on concrete reasons the portfolio and enquiry flow are easier to evaluate commercially."
              accentColor={accentColor}
            />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {TRUST_BADGES.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/72"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-10">
            <PrimaryButton
              label="Talk Business Supply"
              href="/bulk-order"
              accentColor={accentColor}
            />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
          {TRUST_POINTS.map((point, index) => (
            <article
              key={point.title}
              className="group rounded-[2.2rem] border border-zinc-200 bg-[#FAFAF9] p-7 transition duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-[0_28px_65px_-45px_rgba(24,24,27,0.35)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                    {point.eyebrow}
                  </p>
                  <h3 className="mt-4 font-heading text-[1.8rem] leading-[1.15] tracking-tight text-zinc-950">
                    {point.title}
                  </h3>
                </div>
                <span className="text-sm font-semibold text-zinc-300">
                  0{index + 1}
                </span>
              </div>

              <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-600">
                {point.description}
              </p>

              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-zinc-900">
                Confidence signal
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
