import Image from "next/image";
import { FeatureDivider } from "@/components/marketing/illustrations/ProblemIllustrations";
import { Container } from "@/components/ui/Container";
import { FEATURES } from "@/lib/features";
import { cn } from "@/lib/cn";

const dividerVariants = ["flower", "leaf", "crescent"] as const;

export function FeatureShowcase() {
  return (
    <section id="features" className="scroll-mt-24">
      {FEATURES.map((feature, index) => {
        const imageLeft = index % 2 === 0;
        const bg = index % 2 === 0 ? "bg-ivory" : "bg-cream";
        const image = feature.image;

        return (
          <div key={feature.id}>
            {index > 0 && (
              <div className="flex flex-col items-center gap-2 py-3">
                <div className="h-px w-[60px] bg-sage" />
                <FeatureDivider
                  variant={dividerVariants[index % dividerVariants.length]}
                />
              </div>
            )}
            <article
              className={cn(bg, "py-12 lg:py-16")}
              data-feature={feature.id}
            >
              <Container>
                <div
                  className={cn(
                    "grid items-center gap-8 lg:grid-cols-12 lg:gap-12",
                    !imageLeft && image && "lg:[&>*:first-child]:order-2",
                    !image && "lg:grid-cols-1"
                  )}
                >
                  {image ? (
                                        <div
                      className={cn(
                        "relative aspect-[4/3] overflow-hidden rounded-sm lg:col-span-7",
                        imageLeft ? "lg:col-start-1" : "lg:col-start-6"
                      )}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                      />
                    </div>
                  ) : null}

                  <div className={cn(image ? "lg:col-span-5" : "lg:col-span-12")}>
                    <p className="mb-4 font-outfit text-[11px] font-medium uppercase tracking-widest text-brass">
                      {feature.eyebrow}
                    </p>
                    <h3 className="font-cormorant text-[clamp(1.75rem,3vw,2.25rem)] leading-tight text-ink">
                      {feature.heading}
                    </h3>
                    <p className="mt-6 font-outfit text-[15px] leading-relaxed text-muted lg:text-base">
                      {feature.body}
                    </p>
                  </div>
                </div>
              </Container>
            </article>
          </div>
        );
      })}
    </section>
  );
}
