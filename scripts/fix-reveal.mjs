import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const ph = "motion" + "Placeholder";
let content = [
  '"use client";',
  "",
  'import { motion, useReducedMotion } from "framer-motion";',
  'import type { ReactNode } from "react";',
  'import { cn } from "@/lib/cn";',
  "",
  "type RevealProps = {",
  "  children: ReactNode;",
  "  className?: string;",
  '  as?: "section" | "div";',
  "};",
  "",
  'export function Reveal({ children, className, as = "section" }: RevealProps) {',
  "  const reduceMotion = useReducedMotion();",
  "",
  "  if (reduceMotion) {",
  '    if (as === "section") {',
  "      return <section className={className}>{children}</section>;",
  "    }",
  `    return <${ph} />;`,
  "  }",
  "",
  '  const Component = as === "section" ? motion.section : motion.div;',
  "",
  "  return (",
  "    <Component",
  "      className={cn(className)}",
  "      initial={{ opacity: 0, y: 24 }}",
  "      whileInView={{ opacity: 1, y: 0 }}",
  '      viewport={{ once: true, margin: "-80px" }}',
  '      transition={{ duration: 0.6, ease: "easeOut" }}',
  "    >",
  "      {children}",
  "    </Component>",
  "  );",
  "}",
].join("\n");

content = content.replace(
  `return <${ph} />;`,
  "return <motionPlaceholder />;".replace(ph, 'motionPlaceholder className={className}>{children}</motionPlaceholder').replace("motionPlaceholder className", "div className").replace("</motionPlaceholder>", "</div>")
);

// Simpler direct replace
content = content.replace(
  `return <${ph} />;`,
  "return <motionPlaceholder />;"
);
content = content.replace(
  "return <motionPlaceholder />;",
  "return <motionPlaceholder />;"
);

writeFileSync(
  join(dirname(fileURLToPath(import.meta.url)), "..", "components/marketing/motion/Reveal.tsx"),
  content.replace(
    `return <${ph} />;`,
    "return <motionPlaceholder />;"
  ).replace(
    `return <${ph} />;`,
    'return <div className={className}>{children}</div>;'
  ),
  "utf8"
);
