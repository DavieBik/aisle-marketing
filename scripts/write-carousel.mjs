import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const p = join(
  dirname(fileURLToPath(import.meta.url)),
  "..",
  "components/marketing/home/TestimonialCarousel.tsx"
);

const PH = "___ELEM___";

const content = `"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import type { Testimonial } from "@/lib/supabase";

function initials(name: string) {
  return name
    .split(/\\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <${PH} className="h-full rounded-2xl bg-ivory p-6 shadow-[0_4px_24px_rgba(92,74,58,0.06)] lg:p-8">
      {t.author_photo_url ? (
        <${PH} className="relative mb-5 h-12 w-12 overflow-hidden rounded-full">
          <Image
            src={t.author_photo_url}
            alt=""
            fill
            className="object-cover"
            sizes="48px"
            unoptimized={t.author_photo_url.includes("supabase.co")}
          />
        </${PH}>
      ) : (
        <${PH}
          className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-sage font-cormorant text-lg text-ink"
          aria-hidden
        >
          {initials(t.author_name)}
        </${PH}>
      )}
      <blockquote className="font-cormorant text-[17px] italic leading-relaxed text-ink lg:text-[19px]">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <p className="mt-5 font-outfit text-[13px] text-muted">
        {t.author_name}
        {t.author_role ? \`, \${t.author_role}\` : ""}
      </p>
    </${PH}>
  );
}

export function TestimonialCarousel({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [selected, setSelected] = useState(0);
  const [snapCount, setSnapCount] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", containScroll: "trimSnaps" },
    [Autoplay({ delay: 6000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
    setSnapCount(emblaApi.scrollSnapList().length);
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
    <${PH}
      className="mx-auto max-w-6xl"
      onMouseEnter={() => emblaApi?.plugins()?.autoplay?.stop()}
      onMouseLeave={() => emblaApi?.plugins()?.autoplay?.play()}
      onFocusCapture={() => emblaApi?.plugins()?.autoplay?.stop()}
      onBlurCapture={() => emblaApi?.plugins()?.autoplay?.play()}
    >
      <${PH} ref={emblaRef} className="overflow-hidden">
        <${PH} className="-ml-4 flex touch-pan-y">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="min-w-0 shrink-0 grow-0 basis-full pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <TestimonialCard t={t} />
            </article>
          ))}
        </${PH}>
      </${PH}>

      {snapCount > 1 && (
        <${PH}
          className="mt-8 flex justify-center gap-2"
          role="tablist"
          aria-label="Testimonials"
        >
          {Array.from({ length: snapCount }, (_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={selected === i}
              aria-label={\`Testimonial slide \${i + 1} of \${snapCount}\`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={cn(
                "h-2 w-2 rounded-full transition-colors",
                selected === i ? "bg-brass" : "bg-sage"
              )}
            />
          ))}
        </${PH}>
      )}
    </${PH}>
  );
}
`;

const out = content.replaceAll(PH, "motionPlaceholder").replaceAll("motionPlaceholder", "div");
writeFileSync(p, out, "utf8");
console.log("ok");
