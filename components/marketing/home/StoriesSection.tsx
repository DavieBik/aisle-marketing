import { SectionHeading } from "@/components/marketing/SectionHeading";
import { Container } from "@/components/ui/Container";
import { TESTIMONIALS } from "@/lib/features";

export function StoriesSection() {
  return (
    <section className="bg-cream py-20 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Stories"
          title="Couples planning beautifully."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <article
              key={t.attribution}
              className="rounded-2xl bg-ivory p-8 shadow-[0_4px_24px_rgba(92,74,58,0.06)]"
            >
              {/* TODO: replace with real testimonial and photo */}
              <div
                className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-sage font-cormorant text-lg text-ink"
                aria-hidden
              >
                {t.initials}
              </div>
              <blockquote className="font-cormorant text-[19px] italic leading-relaxed text-ink">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <p className="mt-6 font-outfit text-[13px] text-muted">
                {t.attribution}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
