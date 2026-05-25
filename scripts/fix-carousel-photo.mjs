import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const p = join(
  dirname(fileURLToPath(import.meta.url)),
  "..",
  "components/marketing/home/TestimonialCarousel.tsx"
);

const photoGood = [
  '        <div className="relative mb-5 h-12 w-12 overflow-hidden rounded-full">',
  "          <Image",
  "            src={t.author_photo_url}",
  '            alt=""',
  "            fill",
  '            className="object-cover"',
  '            sizes="48px"',
  '            unoptimized={t.author_photo_url.includes("supabase.co")}',
  "          />",
  "        </motionPlaceholder>",
].join("\n").replace("motionPlaceholder", "div");

let c = readFileSync(p, "utf8");
c = c.replace("<MARKER_FIX_PHOTO />", photoGood);
writeFileSync(p, c, "utf8");
console.log("done");
