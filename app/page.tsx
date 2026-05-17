import { FaqSection } from "@/components/marketing/home/FaqSection";
import { FeatureShowcase } from "@/components/marketing/home/FeatureShowcase";
import { FinalCta } from "@/components/marketing/home/FinalCta";
import { Hero } from "@/components/marketing/home/Hero";
import { ProblemSection } from "@/components/marketing/home/ProblemSection";
import { SolutionSection } from "@/components/marketing/home/SolutionSection";
import { StoriesSection } from "@/components/marketing/home/StoriesSection";
import { TrustBar } from "@/components/marketing/home/TrustBar";
import { Reveal } from "@/components/marketing/motion/Reveal";
import { StackingSection } from "@/components/marketing/motion/StackingSection";
import { getHeroContent, getTestimonials } from "@/lib/marketing-content";

export const revalidate = 60;

export default async function Home() {
  const [hero, testimonials] = await Promise.all([
    getHeroContent(),
    getTestimonials(),
  ]);

  return (
    <>
      <Hero hero={hero} />
      <Reveal>
        <TrustBar />
      </Reveal>
      <StackingSection zIndex={10} className="bg-ivory">
        <ProblemSection />
      </StackingSection>
      <StackingSection zIndex={20} className="bg-cream">
        <SolutionSection />
      </StackingSection>
      <StackingSection zIndex={30} className="bg-ivory">
        <FeatureShowcase />
      </StackingSection>
      <StackingSection zIndex={40} className="bg-cream">
        <StoriesSection testimonials={testimonials} />
      </StackingSection>
      <StackingSection zIndex={50} className="bg-ivory">
        <FaqSection />
      </StackingSection>
      <StackingSection zIndex={60} className="bg-cream">
        <FinalCta />
      </StackingSection>
    </>
  );
}
