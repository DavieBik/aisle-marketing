from pathlib import Path

path = Path(__file__).resolve().parents[1] / "app" / "features" / "page.tsx"

path.write_text(
    '''import Image from "next/image";
import { FinalCta } from "@/components/marketing/home/FinalCta";
import { FeatureNav } from "@/components/marketing/features/FeatureNav";
import { PageShell } from "@/components/marketing/PageShell";
import { Container } from "@/components/ui/Container";
import { getFeatureImages, getFeatureWithDetails } from "@/lib/feature-details";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features | The Aisle App",
  description:
    "Every detail of your wedding, beautifully held. Guests, ceremonies, registry, committees, budget, stationery, and more.",
};

export default function FeaturesPage() {
  const features = getFeatureWithDetails();

  return (
    <PageShell>
      <section className="bg-cream pb-10 pt-6 lg:pb-14">
        <Container className="max-w-3xl">
          <p className="mb-4 font-outfit text-[11px] font-medium uppercase tracking-widest text-brass">
            Features
          </p>
          <h1 className="font-cormorant text-[clamp(2.5rem,5vw,4rem)] leading-tight text-ink">
            Every detail of your wedding, beautifully held.
          </h1>
          <p className="mt-6 max-w-xl font-outfit text-lg text-muted">
            A close look at what&apos;s inside The Aisle App.
          </p>
        </Container>
      </section>

      <section className="bg-ivory py-8 lg:py-12">
        <Container>
          <div className="flex gap-16">
            <FeatureNav />
            <motionPlaceholder />
          </motionPlaceholder>
        </Container>
      </section>

      <section className="bg-cream py-12 lg:py-16">
        <Container className="max-w-2xl text-center">
          <p className="font-outfit text-[11px] font-medium uppercase tracking-widest text-brass">
            And more
          </p>
          <p className="mt-4 font-outfit text-base leading-relaxed text-brass-dark">
            Plus tasks, document storage, in-app messaging, and the small
            details we leave for you to discover.
          </p>
        </Container>
      </section>

      <FinalCta />
    </PageShell>
  );
}
''',
    encoding="utf-8",
)
