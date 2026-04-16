import { SectionHeading } from "@/components/shared/SectionHeading";

const STORY_POINTS = [
  {
    label: "2016",
    title: "The belief started before the business did",
    body: "The brand story began with a simple conviction: Nepali products should not have to apologize for being local. They should be chosen because they are good.",
  },
  {
    label: "2017",
    title: "The company took shape with intent",
    body: "Once incorporated, the focus was clear. Build a beverage company that feels modern in presentation, disciplined in quality, and rooted in Nepal’s taste culture.",
  },
  {
    label: "Today",
    title: "The mission is bigger than a product line",
    body: "From carbonated soft drinks to juices and energy drinks, each expansion has been part of the same story: prove Nepal-born refreshment can look premium and earn trust at scale.",
  },
] as const;

export function BrandStorySection() {
  return (
    <section className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
      <div className="relative overflow-hidden rounded-[2.8rem] border border-black/8 bg-white p-8 shadow-[0_28px_90px_-70px_rgba(30,41,59,0.24)] sm:p-10 lg:p-12">
        <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top_left,rgba(196,217,64,0.22),transparent_60%),radial-gradient(circle_at_top_right,rgba(56,189,248,0.18),transparent_60%)]" />
        <div className="relative z-10 max-w-3xl">
          <SectionHeading
            eyebrow="Brand Story"
            title="Refreshing Nepal with quality, belief, and a stronger local voice."
            subtitle="This is not a brand story about imitation. It is a story about building confidence in Nepal-made refreshment."
          />

          <div className="mt-10 grid gap-8">
            <p className="max-w-2xl text-lg leading-8 text-zinc-700">
              Singapore Beverages Nepal is a homegrown Nepali beverage company with a mission to prove that Nepali
              products can also be premium, trusted, and world-class. The journey began around 2016 and the company was
              incorporated in 2017.
            </p>

            <div className="grid gap-6">
              {STORY_POINTS.map((point) => (
                <article
                  key={point.label}
                  className="grid gap-4 rounded-[2rem] border border-black/6 bg-[#fcfbf7] p-6 sm:grid-cols-[5.5rem_1fr]"
                >
                  <div className="text-sm font-black uppercase tracking-[0.26em] text-zinc-500">{point.label}</div>
                  <div>
                    <h3 className="font-heading text-2xl leading-tight tracking-tight text-zinc-950">{point.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-600 sm:text-base">{point.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-5">
        <StoryPanel
          eyebrow="The Belief"
          title="Local does not mean lesser."
          body="We are here to challenge the assumption that imported automatically means better. Premium quality can be born in Nepal, built in Nepal, and trusted far beyond Nepal."
          accentClass="from-[#eef6c9] via-[#fff9df] to-[#f7fbff]"
        />
        <StoryPanel
          eyebrow="What Changed"
          title="The portfolio grew, but the standard stayed the same."
          body="The company started with carbonated soft drinks and expanded into juices and energy drinks. That growth was not about chasing categories. It was about building a broader portfolio without lowering the bar on quality or identity."
          accentClass="from-[#fff3db] via-[#fff9ef] to-[#f7fbff]"
        />
        <StoryPanel
          eyebrow="What We Stand For"
          title="A more self-reliant Nepal with products people are proud to choose."
          body="Our vision is to deliver quality Nepalese products to the world. Our mission is to highlight the strength, quality, and potential of Nepal-born products while contributing to a more self-reliant Nepal."
          accentClass="from-[#edf7ff] via-[#fafcff] to-[#fff4f6]"
        />
      </div>
    </section>
  );
}

function StoryPanel({
  eyebrow,
  title,
  body,
  accentClass,
}: {
  eyebrow: string;
  title: string;
  body: string;
  accentClass: string;
}) {
  return (
    <article className={`rounded-[2.4rem] border border-black/8 bg-gradient-to-br ${accentClass} p-7 shadow-[0_24px_70px_-60px_rgba(30,41,59,0.22)] sm:p-8`}>
      <p className="text-xs font-black uppercase tracking-[0.28em] text-zinc-500">{eyebrow}</p>
      <h3 className="mt-4 font-heading text-[2rem] leading-[1.04] tracking-tight text-zinc-950">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-zinc-650 sm:text-base">{body}</p>
    </article>
  );
}

