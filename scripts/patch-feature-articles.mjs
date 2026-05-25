import { readFileSync, writeFileSync } from "fs";

const path = "components/marketing/features/FeatureArticles.tsx";
let c = readFileSync(path, "utf8").replace(/\r\n/g, "\n");

const marker = "            <FeatureImages hero={hero} extras={extras} />";
const endMarker = "          </article>";

const start = c.indexOf(marker);
const end = c.indexOf(endMarker, start);
if (start === -1 || end === -1) {
  console.error("markers not found", start, end);
  process.exit(1);
}

const replacement = `${marker}
            {feature.howItWorks.length > 0 && (
              <div className="mt-10">
                <p className="font-outfit text-[11px] font-medium uppercase tracking-widest text-brass">
                  How it works
                </p>
                <ul className="mt-4 list-disc space-y-3 pl-5 marker:text-brass">
                  {feature.howItWorks.map((item) => (
                    <li
                      key={item}
                      className="font-outfit text-[15px] leading-relaxed text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motionPlaceholder>
            )}
            {feature.scenarioCallout && (
              <aside className="mt-10 rounded-2xl border border-sage/40 bg-cream p-8">
                <p className="font-outfit text-[11px] font-medium uppercase tracking-widest text-brass">
                  Scenario
                </p>
                <p className="mt-4 font-outfit text-[15px] leading-relaxed text-ink">
                  {feature.scenarioCallout}
                </p>
              </aside>
            )}
`;

const before = c.slice(0, start);
const after = c.slice(end);
const fixed = (before + replacement.replace(/motionPlaceholder/g, "motionPlaceholder")).replace(
  /<\/motionPlaceholder>/,
  "</motionPlaceholder>"
);
// use div not placeholder
const block = replacement.replace(/motionPlaceholder/g, "div");
c = before + block + after;
writeFileSync(path, c);
console.log("ok");
