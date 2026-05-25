import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const path = join(
  dirname(fileURLToPath(import.meta.url)),
  "..",
  "components/marketing/home/FeatureShowcase.tsx"
);

let c = readFileSync(path, "utf8");

const exactOld = `                  <motionPlaceholder />`;

const exactOldGood = exactOld.replace(
  "motionPlaceholder",
  `div
                    className={cn(
                      "relative aspect-[4/3] overflow-hidden rounded-sm lg:col-span-7",
                      imageLeft ? "lg:col-start-1" : "lg:col-start-6"
                    )}
                  >
                    {feature.id === "committee" ? (
                      <>
                        {/* TODO: replace with commissioned shot of wedding planning committee */}
                        <Image
                          src={feature.image.src}
                          alt={feature.image.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 60vw"
                        />
                      </>
                    ) : (
                      <Image
                        src={feature.image.src}
                        alt={feature.image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                      />
                    )}
                  </motionPlaceholder>`
);

// Build old and new without autocomplete issues
const oldBlock = [
  "                  <motionPlaceholder />",
].join("\n");

const oldBlockReal = [
  "                  <motionPlaceholder />",
].join("\n");

const old = `                  <motionPlaceholder />`;

writeFileSync(path, c, "utf8");
