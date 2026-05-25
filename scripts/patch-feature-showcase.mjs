import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const path = join(dirname(fileURLToPath(import.meta.url)), "..", "components/marketing/home/FeatureShowcase.tsx");

writeFileSync(
  path,
  [
    'import Image from "next/image";',
    'import { FeatureDivider } from "@/components/marketing/illustrations/ProblemIllustrations";',
    'import { Container } from "@/components/ui/Container";',
    'import { FEATURES } from "@/lib/features";',
    'import { cn } from "@/lib/cn";',
    "",
    'const dividerVariants = ["flower", "leaf", "crescent"] as const;',
    "",
    "export function FeatureShowcase() {",
    "  return (",
    '    <section id="features" className="scroll-mt-24">',
    "      {FEATURES.map((feature, index) => {",
    "        const imageLeft = index % 2 === 0;",
    '        const bg = index % 2 === 0 ? "bg-ivory" : "bg-cream";',
    "        const image = feature.image;",
    "",
    "        return (",
    "          <motionPlaceholder />",
    "        );",
    "      })}",
    "    </motionPlaceholder>",
    "  );",
    "}",
  ].join("\n"),
  "utf8"
);
