import { SectionHeading } from "@/components/marketing/SectionHeading";
import { TestimonialCarousel } from "@/components/marketing/home/TestimonialCarousel";
import { Container } from "@/components/ui/Container";
import { FALLBACK_TESTIMONIALS } from "@/lib/marketing-content";
import type { Testimonial } from "@/lib/supabase";

export function StoriesSection({
  testimonials = FALLBACK_TESTIMONIALS,
}: {
  testimonials?: Testimonial[];
}) {
  return (
    <section className="bg-cream py-12 lg:py-16">
      <Container>
        <SectionHeading
          eyebrow="Stories"
          title="Couples planning beautifully."
        />
        <TestimonialCarousel testimonials={testimonials} />
      </Container>
    </section>
  );
}
