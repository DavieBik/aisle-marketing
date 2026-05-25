import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

writeFileSync(
  join(
    dirname(fileURLToPath(import.meta.url)),
    "..",
    "components/marketing/motion/StackingSection.tsx"
  ),
  `"use client";

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
      <motionPlaceholder />
    </div>
  );
}
`.replace(
  "<motionPlaceholder />",
  `<div
        className={cn(
          "md:sticky md:top-0 md:rounded-t-3xl md:shadow-[0_-12px_48px_rgba(92,74,58,0.1)]",
          className
        )}
        style={{ zIndex }}
      >
        {children}
      </div>`
),
  "utf8"
);

console.log("ok");
