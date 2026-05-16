"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { FEATURES } from "@/lib/features";

export function FeatureNav() {
  const [active, setActive] = useState(FEATURES[0].id);

  useEffect(() => {
    const sections = FEATURES.map((f) => document.getElementById(`feature-${f.id}`));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActive(visible.target.id.replace("feature-", ""));
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5] }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="sticky top-28 hidden max-h-[calc(100vh-8rem)] w-48 shrink-0 self-start lg:block"
      aria-label="Feature sections"
    >
      <p className="mb-4 font-outfit text-[11px] font-medium uppercase tracking-widest text-brass">
        On this page
      </p>
      <ul className="space-y-2 border-l border-sage pl-4">
        {FEATURES.map((f) => (
          <li key={f.id}>
            <Link
              href={`#feature-${f.id}`}
              className={cn(
                "block font-outfit text-sm transition-colors",
                active === f.id ? "text-brass" : "text-muted hover:text-ink"
              )}
            >
              {f.eyebrow.charAt(0) + f.eyebrow.slice(1).toLowerCase()}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
