"use client";

import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type StackingSectionProps = {
  children: ReactNode;
  zIndex: number;
  className?: string;
};

export function StackingSection({
  children,
  zIndex,
  className,
}: StackingSectionProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className="relative md:min-h-screen">
      <div
        className={cn(
          "md:sticky md:top-0 md:rounded-t-3xl md:shadow-2xl",
          className
        )}
        style={{ zIndex }}
      >
        {children}
      </div>
    </div>
  );
}
