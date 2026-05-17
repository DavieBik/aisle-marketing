import { FaqSection } from "@/components/marketing/home/FaqSection";
import { FeatureShowcase } from "@/components/marketing/home/FeatureShowcase";
import { FinalCta } from "@/components/marketing/home/FinalCta";
import { Hero } from "@/components/marketing/home/Hero";
import { ProblemSection } from "@/components/marketing/home/ProblemSection";
import { SolutionSection } from "@/components/marketing/home/SolutionSection";
import { StoriesSection } from "@/components/marketing/home/StoriesSection";
import { TrustBar } from "@/components/marketing/home/TrustBar";
import { Reveal } from "@/components/marketing/motion/Reveal";
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
      <Reveal>
        <ProblemSection />
      </Reveal>
      <Reveal>
        <SolutionSection />
      </Reveal>
      <Reveal>
        <FeatureShowcase />
      </Reveal>
      <Reveal>
        <StoriesSection testimonials={testimonials} />
      </Reveal>
      <Reveal>
        <FaqSection />
      </Reveal>
      <Reveal>
        <FinalCta />
      </Reveal>
    </>
  );
}
