import { FaqSection } from "@/components/marketing/home/FaqSection";
import { FeatureShowcase } from "@/components/marketing/home/FeatureShowcase";
import { FinalCta } from "@/components/marketing/home/FinalCta";
import { Hero } from "@/components/marketing/home/Hero";
import { PricingTeaser } from "@/components/marketing/home/PricingTeaser";
import { ProblemSection } from "@/components/marketing/home/ProblemSection";
import { SolutionSection } from "@/components/marketing/home/SolutionSection";
import { StoriesSection } from "@/components/marketing/home/StoriesSection";
import { TrustBar } from "@/components/marketing/home/TrustBar";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProblemSection />
      <SolutionSection />
      <FeatureShowcase />
      <StoriesSection />
      <PricingTeaser />
      <FaqSection />
      <FinalCta />
    </>
  );
}
