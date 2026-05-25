import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const p = join(
  dirname(fileURLToPath(import.meta.url)),
  "..",
  "components/marketing/home/FeatureShowcase.tsx"
);

let c = readFileSync(p, "utf8");

const img = `                    <div
                      className={cn(
                        "relative aspect-[4/3] overflow-hidden rounded-sm lg:col-span-7",
                        imageLeft ? "lg:col-start-1" : "lg:col-start-6"
                      )}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                      />
                    </div>`;

c = c.replace("<MARKER_IMG />", img);
c = c.replace(
  'className="lg:col-span-5"',
  'className={cn(image ? "lg:col-span-5" : "lg:col-span-12")}'
);

writeFileSync(p, c, "utf8");
console.log("ok");
