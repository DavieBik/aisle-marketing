import Image from "next/image";
import { FinalCta } from "@/components/marketing/home/FinalCta";
import { FeatureNav } from "@/components/marketing/features/FeatureNav";
import { PageShell } from "@/components/marketing/PageShell";
import { Container } from "@/components/ui/Container";
import { getFeatureWithDetails } from "@/lib/feature-details";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features | The Aisle App",
  description:
    "Every detail of your wedding, beautifully held. Guests, registry, committee, events, stationery, and more.",
};

export default function FeaturesPage() {
  const features = getFeatureWithDetails();

  return (
    <PageShell>
      <section className="bg-cream pb-16 pt-8 lg:pb-24">
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

      <section className="bg-ivory py-12 lg:py-16">
        <Container>
          <div className="flex gap-16">
            <FeatureNav />
            <div className="min-w-0 flex-1 space-y-24 lg:space-y-32">
              {features.map((feature, index) => (
                <article
                  key={feature.id}
                  id={`feature-${feature.id}`}
                  className="scroll-mt-28 border-b border-sage/50 pb-24 last:border-0 lg:pb-32"
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

                  <div className="mt-10 grid gap-4 sm:grid-cols-2">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-sm sm:col-span-2">
                      <Image
                        src={feature.image.src}
                        alt={feature.image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 65vw"
                      />
                    </div>
                    {feature.extraImages?.map((img) => (
                      <div
                        key={img.src}
                        className="relative aspect-[4/3] overflow-hidden rounded-sm"
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, 30vw"
                        />
                      </div>
                    ))}
                  </div>

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
              ))}
            </div>
          </div>
        </Container>
      </section>

      <FinalCta />
    </PageShell>
  );
}
