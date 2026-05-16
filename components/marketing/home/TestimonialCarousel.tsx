"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import type { Testimonial } from "@/lib/supabase";

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function TestimonialCarousel({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [selected, setSelected] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" }, [
    Autoplay({ delay: 6000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  if (!testimonials.length) return null;

  return (
    <div
      className="mx-auto max-w-xl"
      onMouseEnter={() => emblaApi?.plugins()?.autoplay?.stop()}
      onMouseLeave={() => emblaApi?.plugins()?.autoplay?.play()}
      onFocusCapture={() => emblaApi?.plugins()?.autoplay?.stop()}
      onBlurCapture={() => emblaApi?.plugins()?.autoplay?.play()}
    >
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="min-w-0 shrink-0 grow-0 basis-full px-2"
            >
              <div className="rounded-2xl bg-ivory p-8 shadow-[0_4px_24px_rgba(92,74,58,0.06)]">
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
                <blockquote className="font-cormorant text-[19px] italic leading-relaxed text-ink">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <p className="mt-6 font-outfit text-[13px] text-muted">
                  {t.author_name}
                  {t.author_role ? `, ${t.author_role}` : ""}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div
        className="mt-8 flex justify-center gap-2"
        role="tablist"
        aria-label="Testimonials"
      >
        {testimonials.map((t, i) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={selected === i}
            aria-label={`Testimonial ${i + 1} of ${testimonials.length}`}
            onClick={() => emblaApi?.scrollTo(i)}
            className={cn(
              "h-2 w-2 rounded-full transition-colors",
              selected === i ? "bg-brass" : "bg-sage"
            )}
          />
        ))}
      </div>
    </div>
  );
}
