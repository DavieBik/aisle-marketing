import { FinalCta } from "@/components/marketing/home/FinalCta";
import { FeatureImages } from "@/components/marketing/features/FeatureImages";
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
            <div className="min-w-0 flex-1 space-y-12 lg:space-y-16">
              {features.map((feature) => {
                const { hero, extras } = getFeatureImages(feature);
                return (
                  <article
                    key={feature.id}
                    id={`feature-${feature.id}`}
                    className="scroll-mt-28 border-b border-sage/50 pb-12 last:border-0 lg:pb-16"
                  >
                    <p className="mb-3 font-outfit text-[11px] font-medium uppercase tracking-widest text-brass">
                      {feature.eyebrow}
                    </p>
                    <h2 className="font-cormorant text-4xl leading-tight text-ink lg:text-5xl">
                      {feature.heading}
                    </h2>
                    <p className="mt-6 font-outfit text-base leading-relaxed text-muted">
                      {feature.body}
                    </p>
                    <FeatureImages hero={hero} extras={extras} />
                    <aside className="mt-10 rounded-2xl bg-cream p-8">
                      <p className="font-outfit text-[11px] font-medium uppercase tracking-widest text-brass">
                        What couples use this for
                      </p>
                      <ul className="mt-4 space-y-3">
                        {feature.scenarios.map((s) => (
                          <li
                            key={s}
                            className="font-outfit text-[15px] leading-relaxed text-ink"
                          >
                            {s}
                          </li>
                        ))}
                      </ul>
                    </aside>
                  </article>
                );
              })}
            </div>
          </div>
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
