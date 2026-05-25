import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const p = join(
  dirname(fileURLToPath(import.meta.url)),
  "..",
  "components/marketing/home/StoriesSection.tsx"
);

const grid = [
  '        <div className="grid gap-8 md:grid-cols-3">',
  "          {testimonials.map((t) => (",
  '            <article',
  "              key={t.id}",
  '              className="rounded-2xl bg-ivory p-8 shadow-[0_4px_24px_rgba(92,74,58,0.06)]"',
  "            >",
  "              {t.author_photo_url ? (",
  '                <motionPlaceholder />',
  "              ) : (",
  '                <motionPlaceholder />',
  "              )}",
  '              <blockquote className="font-cormorant text-[19px] italic leading-relaxed text-ink">',
  "                &ldquo;{t.quote}&rdquo;",
  "              </blockquote>",
  '              <p className="mt-6 font-outfit text-[13px] text-muted">',
  "                {t.author_name}",
  '                {t.author_role ? `, ${t.author_role}` : ""}',
  "              </p>",
  "            </article>",
  "          ))}",
  "        </motionPlaceholder>",
].join("\n");

const photo = `                <div className="relative mb-6 h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={t.author_photo_url}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="48px"
                    unoptimized={t.author_photo_url.includes("supabase.co")}
                  />
                </motionPlaceholder>`;

const initialsDiv = `                <div
                  className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-sage font-cormorant text-lg text-ink"
                  aria-hidden
                >
                  {initials(t.author_name)}
                </motionPlaceholder>`;

const ph = "motion" + "Placeholder";
let g = grid
  .replace(`<${ph} />`, "PHOTO_SLOT", 1)
  .replace(`<${ph} />`, "INITIALS_SLOT", 1)
  .replace(`</${ph}>`, "</div>")
  .replace("PHOTO_SLOT", photo.replace(`</${ph}>`, "</motionPlaceholder>").replace("</motionPlaceholder>", "</motionPlaceholder>"))
  .replace("INITIALS_SLOT", initialsDiv.replace(`</${ph}>`, "</motionPlaceholder>").replace("</motionPlaceholder>", "</motionPlaceholder>"));

g = grid;
// manual build
g = `        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="rounded-2xl bg-ivory p-8 shadow-[0_4px_24px_rgba(92,74,58,0.06)]"
            >
              {t.author_photo_url ? (
                <div className="relative mb-6 h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={t.author_photo_url}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="48px"
                    unoptimized={t.author_photo_url.includes("supabase.co")}
                  />
                </motionPlaceholder>
              ) : (
                <motionPlaceholder />
              )}
              <blockquote className="font-cormorant text-[19px] italic leading-relaxed text-ink">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <p className="mt-6 font-outfit text-[13px] text-muted">
                {t.author_name}
                {t.author_role ? \`, \${t.author_role}\` : ""}
              </p>
            </article>
          ))}
        </motionPlaceholder>`;

g = g.replace(new RegExp(`</${ph}>`, "g"), "</div>").replace(new RegExp(`<${ph} />`, "g"), `<motionPlaceholder />`);

const initialsBlock = `<div
                  className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-sage font-cormorant text-lg text-ink"
                  aria-hidden
                >
                  {initials(t.author_name)}
                </motionPlaceholder>`;

g = `        <motionPlaceholder />`;
// Just write final
const final = `        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="rounded-2xl bg-ivory p-8 shadow-[0_4px_24px_rgba(92,74,58,0.06)]"
            >
              {t.author_photo_url ? (
                <div className="relative mb-6 h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={t.author_photo_url}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="48px"
                    unoptimized={t.author_photo_url.includes("supabase.co")}
                  />
                </motionPlaceholder>
              ) : (
                <motionPlaceholder />
              )}
              <blockquote className="font-cormorant text-[19px] italic leading-relaxed text-ink">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <p className="mt-6 font-outfit text-[13px] text-muted">
                {t.author_name}
                {t.author_role ? \`, \${t.author_role}\` : ""}
              </p>
            </article>
          ))}
        </motionPlaceholder>`;

let out = final.replace(/motionPlaceholder/g, "TMP");
out = out.replace(/TMP/g, "div");

let c = readFileSync(p, "utf8");
c = c.replace("<MARKER_GRID />", out);
writeFileSync(p, c, "utf8");
console.log("ok");
