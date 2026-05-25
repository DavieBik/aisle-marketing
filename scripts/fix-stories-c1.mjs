import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const p = join(
  dirname(fileURLToPath(import.meta.url)),
  "..",
  "components/marketing/home/StoriesSection.tsx"
);

const grid = `        <div className="grid gap-8 md:grid-cols-3">
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
                </div>
              ) : (
                <div
                  className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-sage font-cormorant text-lg text-ink"
                  aria-hidden
                >
                  {initials(t.author_name)}
                </motionPlaceholder>
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

const ph = "motion" + "Placeholder";
const fixed = grid.replace(`</${ph}>`, "</div>").replace(`<${ph} />`, "");

let c = readFileSync(p, "utf8");
c = c.replace(/<motionPlaceholder \/>/g, grid.split(ph).join("MARKER").replace(/MARKER/g, ph));
// direct
c = readFileSync(p, "utf8");
const token = "<" + ph + " />";
c = c.replace(token, grid.replace(`</${ph}>`, "</div>").replace(`<${ph} />`, ""));

writeFileSync(p, c, "utf8");
