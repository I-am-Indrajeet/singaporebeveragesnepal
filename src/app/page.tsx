import { HeroProductShowcase } from "@/components/hero/HeroProductShowcase";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { BrandStory } from "@/components/sections/BrandStory";
import CreatorCollaborationsSection from "@/components/sections/CreatorCollaborationsSection";
import { EventHighlight } from "@/components/sections/EventHighlight";
import { FruitGamesSection } from "@/components/sections/FruitGamesSection";
import { NewsPreview } from "@/components/sections/NewsPreview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <HeroProductShowcase />
      <AnimatedSection delay={0.04} direction="up">
        <FruitGamesSection />
      </AnimatedSection>
      <AnimatedSection delay={0.08} direction="up">
        <BrandStory />
      </AnimatedSection>
      <AnimatedSection delay={0.1} direction="up">
        <CreatorCollaborationsSection />
      </AnimatedSection>
      <AnimatedSection delay={0.12} direction="up">
        <WhyChooseUs />
      </AnimatedSection>
      <AnimatedSection delay={0.16} direction="up">
        <EventHighlight />
      </AnimatedSection>
      <AnimatedSection delay={0.20} direction="up">
        <NewsPreview />
      </AnimatedSection>
    </>
  );
}
