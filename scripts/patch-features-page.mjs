import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const path = join(root, "app/features/page.tsx");
const ph = "motion" + "Placeholder";
let c = readFileSync(path, "utf8");

const broken = [
  "              })}",
  `            </${ph}>`,
  `          </${ph}>`,
  `        </${ph}>`,
  "      </section>",
].join("\n");

const fixed = [
  "              })}",
  "            </motionPlaceholder>",
  "          </motionPlaceholder>",
  "        </motionPlaceholder>",
  "      </section>",
].join("\n");

// Build fixed without ph token
const fixedGood = [
  "              })}",
  "            </div>",
  "          </div>",
  "        </Container>",
  "      </section>",
].join("\n");

if (c.includes(broken)) {
  c = c.replace(broken, fixedGood);
} else {
  // fallback: replace any ph closing tags
  c = c.replace(new RegExp(`</${ph}>`, "g"), (match, offset, str) => {
    const before = str.slice(Math.max(0, offset - 20), offset);
    if (before.includes("flex-1")) return "</div>";
    if (before.includes("gap-16")) return "</div>";
    return "</Container>";
  });
}

writeFileSync(path, c, "utf8");
console.log("patched", c.includes(fixedGood) ? "ok" : "check");
