"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: "section" | "div";
};

export function Reveal({ children, className, as = "section" }: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    if (as === "section") {
      return <section className={className}>{children}</section>;
    }
    return <div className={className}>{children}</div>;
  }

  const Component = as === "section" ? motion.section : motion.div;

  return (
    <Component
      className={cn(className)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </Component>
  );
}
