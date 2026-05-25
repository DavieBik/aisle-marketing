import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const p = join(dirname(fileURLToPath(import.meta.url)), "..", "app/story/page.tsx");
let c = readFileSync(p, "utf8");
c = c.replace(
  "<MARKER_STORY_IMG />",
  '<motionPlaceholder />'
);
c = c.replace(
  "<MARKER_STORY_IMG />",
  '<div className="relative my-8 aspect-[16/10] overflow-hidden rounded-sm">'
);
// fix if first replace wrong
c = c.replace(
  '<motionPlaceholder />',
  '<div className="relative my-8 aspect-[16/10] overflow-hidden rounded-sm">'
);
writeFileSync(p, c, "utf8");
