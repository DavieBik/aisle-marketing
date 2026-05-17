"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FeatureImages } from "@/components/marketing/features/FeatureImages";
import { getFeatureImages } from "@/lib/feature-details";
import type { getFeatureWithDetails } from "@/lib/feature-details";

type Feature = ReturnType<typeof getFeatureWithDetails>[number];

export function FeatureArticles({ features }: { features: Feature[] }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="min-w-0 flex-1 space-y-12 lg:space-y-16">
      {features.map((feature, index) => {
        const { hero, extras } = getFeatureImages(feature);
        const article = (
          <article
            id={`feature-${feature.id}`}
            className="scroll-mt-28 border-b border-sage/50 pb-12 last:border-0 lg:pb-16"
          >
            <p className="mb-3 font-outfit text-[11px] font-medium uppercase tracking-widest text-brass">
              {feature.eyebrow}
            </p>
            <h2 className="font-cormorant text-4xl leading-tight text-ink lg:text-5xl">
              {feature.heading}
            </h2>
            <p className="mt-6 font-outfit text-base leading-relaxed text-muted">
              {feature.body}
            </p>
            <FeatureImages hero={hero} extras={extras} />
            {feature.howItWorks.length > 0 && (
              <div className="mt-10">
                <p className="font-outfit text-[11px] font-medium uppercase tracking-widest text-brass">
                  How it works
                </p>
                <ul className="mt-4 list-disc space-y-3 pl-5 marker:text-brass">
                  {feature.howItWorks.map((item) => (
                    <li
                      key={item}
                      className="font-outfit text-[15px] leading-relaxed text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {feature.scenarioCallout && (
              <aside className="mt-10 rounded-2xl border border-sage/40 bg-cream p-8">
                <p className="font-outfit text-[11px] font-medium uppercase tracking-widest text-brass">
                  Scenario
                </p>
                <p className="mt-4 font-outfit text-[15px] leading-relaxed text-ink">
                  {feature.scenarioCallout}
                </p>
              </aside>
            )}
          </article>
        );

        if (reduceMotion) {
          return <div key={feature.id}>{article}</div>;
        }

        return (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
          >
            {article}
          </motion.div>
        );
      })}
    </div>
  );
}
