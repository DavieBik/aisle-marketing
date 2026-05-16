"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type HeroParallaxImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  unoptimized?: boolean;
};

export function HeroParallaxImage({
  src,
  alt,
  priority,
  unoptimized,
}: HeroParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 80]);

  return (
    <motion.div
      ref={ref}
      className="relative aspect-[4/5] w-full overflow-hidden rounded-sm lg:aspect-auto lg:min-h-[520px]"
      style={reduceMotion ? undefined : { y }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 45vw"
        priority={priority}
        unoptimized={unoptimized}
      />
    </motion.div>
  );
}
