import Image from "next/image";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { Container } from "@/components/ui/Container";
import {
  FALLBACK_TESTIMONIALS,
  isPlaceholderTestimonial,
} from "@/lib/marketing-content";
import type { Testimonial } from "@/lib/supabase";

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function StoriesSection({
  testimonials = FALLBACK_TESTIMONIALS,
}: {
  testimonials?: Testimonial[];
}) {
  return (
    <section className="bg-cream py-20 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Stories"
          title="Couples planning beautifully."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="rounded-2xl bg-ivory p-8 shadow-[0_4px_24px_rgba(92,74,58,0.06)]"
            >
              {t.author_photo_url ? (
                <div className="relative mb-6 h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={t.author_photo_url}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="48px"
                    unoptimized={t.author_photo_url.includes("supabase.co")}
                  />
                </div>
              ) : (
                <div
                  className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-sage font-cormorant text-lg text-ink"
                  aria-hidden
                >
                  {initials(t.author_name)}
                </div>
              )}
              {isPlaceholderTestimonial(t) && (
                <p className="mb-3 font-outfit text-[10px] uppercase tracking-widest text-muted">
                  Placeholder
                </p>
              )}
              <blockquote className="font-cormorant text-[19px] italic leading-relaxed text-ink">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <p className="mt-6 font-outfit text-[13px] text-muted">
                {t.author_name}
                {t.author_role ? `, ${t.author_role}` : ""}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
