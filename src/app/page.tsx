import { SchemaScript } from "@/components/shared/SchemaScript";
import { HeroProductShowcase } from "@/components/hero/HeroProductShowcase";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { BrandStory } from "@/components/sections/BrandStory";
import CreatorCollaborationsSection from "@/components/sections/CreatorCollaborationsSection";
import { EventHighlight } from "@/components/sections/EventHighlight";
import { FruitGamesSection } from "@/components/sections/FruitGamesSection";
import { NewsPreview } from "@/components/sections/NewsPreview";
import { SegmentedBusinessCTA } from "@/components/sections/SegmentedBusinessCTA";
import { TrustSection } from "@/components/sections/TrustSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { buildLocalBusinessSchema } from "@/lib/seo/metadata";
import { getAllNews } from "@/lib/cms/content";

export default async function HomePage() {
  const newsItems = await getAllNews();

  return (
    <>
      <SchemaScript schema={buildLocalBusinessSchema()} />

      {/* ── Above the fold: Hero — priority loaded ── */}
      <HeroProductShowcase />

      {/* ── Below the fold: lazy-rendered sections ── */}
      <AnimatedSection delay={0.04} direction="up">
        <FruitGamesSection />
      </AnimatedSection>
      <AnimatedSection delay={0.06} direction="up">
        <BrandStory />
      </AnimatedSection>
      <AnimatedSection delay={0.08} direction="up">
        <CreatorCollaborationsSection />
      </AnimatedSection>
      <AnimatedSection delay={0.1} direction="up">
        <WhyChooseUs />
      </AnimatedSection>
      <AnimatedSection delay={0.1} direction="up">
        <TrustSection />
      </AnimatedSection>
      <AnimatedSection delay={0.1} direction="up">
        <SegmentedBusinessCTA />
      </AnimatedSection>
      <AnimatedSection delay={0.1} direction="up">
        <EventHighlight />
      </AnimatedSection>
      <AnimatedSection delay={0.1} direction="up">
        <NewsPreview items={newsItems} />
      </AnimatedSection>
    </>
  );
}
