import { BrandStorySection } from "@/components/about/BrandStorySection";
import { JourneyTimeline } from "@/components/about/JourneyTimeline";
import { MissionVisionValues } from "@/components/about/MissionVisionValues";
import { ProductLegacy } from "@/components/about/ProductLegacy";
import { AboutStatsCta } from "@/components/about/AboutStatsCta";

export function AboutPageSections({
  years,
  portfolioLines,
  activations,
}: {
  years: number;
  portfolioLines: number;
  activations: number;
}) {
  return (
    <>
      <section className="bg-[#FAFAF9] pb-28 pt-28 md:pb-36 md:pt-32">
        <div className="mx-auto max-w-[90rem] space-y-16 px-5 md:space-y-20 md:px-8 lg:px-10">
          <BrandStorySection />

          <JourneyTimeline />

          <MissionVisionValues />

          <ProductLegacy />

          <AboutStatsCta years={years} portfolioLines={portfolioLines} activations={activations} />
        </div>
      </section>
    </>
  );
}
