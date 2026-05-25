import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const p = join(dirname(fileURLToPath(import.meta.url)), "..", "app/pricing/page.tsx");
const ph = "motion" + "Placeholder";
let c = readFileSync(p, "utf8");

const btn = `              <motionPlaceholder />`;
const btnGood = `              <div className="mt-8">
                <Button href={SIGNUP_URL} className="w-full justify-center">
                  Start your trial
                </Button>
              </motionPlaceholder>`;

const btnFixed = btnGood.replace(`</${ph}>`, "</div>");

let count = 0;
c = c.replace(new RegExp(`<${ph} \\/>`, "g"), () => {
  count++;
  return count <= 2 ? btnFixed : `</${ph}>`;
});

c = c.replace(`</${ph}>`, "</div>");

writeFileSync(p, c, "utf8");
console.log("fixed pricing", count);
