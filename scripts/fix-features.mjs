import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const dir = dirname(fileURLToPath(import.meta.url));
const root = join(dir, "..");

const L = (s) => s;

const featureImages = [
  L('import Image from "next/image";'),
  L(""),
  L("type FeatureImagesProps = {"),
  L("  hero: { src: string; alt: string } | null;"),
  L("  extras: { src: string; alt: string }[];"),
  L("};"),
  L(""),
  L("export function FeatureImages({ hero, extras }: FeatureImagesProps) {"),
  L("  if (!hero && extras.length === 0) return null;"),
  L(""),
  L("  return ("),
  L('    <div className="mt-10 grid gap-4 sm:grid-cols-2">'),
  L("      {hero ? ("),
  L('        <div className="relative aspect-[4/3] overflow-hidden rounded-sm sm:col-span-2">'),
  L("          <Image"),
  L("            src={hero.src}"),
  L("            alt={hero.alt}"),
  L("            fill"),
  L('            className="object-cover"'),
  L('            sizes="(max-width: 1024px) 100vw, 65vw"'),
  L("          />"),
  L("        </div>"),
  L("      ) : null}"),
  L("      {extras.map((img) => ("),
  L('        <div key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-sm">'),
  L("          <Image"),
  L("            src={img.src}"),
  L("            alt={img.alt}"),
  L("            fill"),
  L('            className="object-cover"'),
  L('            sizes="(max-width: 640px) 100vw, 30vw"'),
  L("          />"),
  L("        </div>"),
  L("      ))}"),
  L("    </div>"),
  L("  );"),
  L("}"),
].join("\n");

writeFileSync(
  join(root, "components/marketing/features/FeatureImages.tsx"),
  featureImages,
  "utf8"
);
