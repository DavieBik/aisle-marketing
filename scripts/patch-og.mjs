import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const path = join(dirname(fileURLToPath(import.meta.url)), "..", "app/opengraph-image.tsx");

const wordmark = `        <motionPlaceholder />`;

const wordmarkGood = `        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 8,
            marginBottom: 24,
            fontStyle: "italic",
            color: "#A8895E",
          }}
        >
          <span style={{ fontSize: 28 }}>The</span>
          <span style={{ fontSize: 48, lineHeight: 1 }}>Aisle</span>
          <span style={{ fontSize: 28 }}>App</span>
        </div>`;

let c = readFileSync(path, "utf8");

const oldBlock = `        <p
          style={{
            fontSize: 28,
            color: "#C9A876",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          The Aisle App
        </p>`;

const newBlock = `        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 8,
            marginBottom: 24,
            fontStyle: "italic",
            color: "#A8895E",
          }}
        >
          <span style={{ fontSize: 28 }}>The</span>
          <span style={{ fontSize: 48, lineHeight: 1 }}>Aisle</span>
          <span style={{ fontSize: 28 }}>App</span>
        </motionPlaceholder>`;

const newBlockFixed = newBlock.replace("motionPlaceholder", "div").replace("motionPlaceholder", "div");
// newBlock already has wrong close - use wordmarkGood
c = c.replace(oldBlock, wordmarkGood);
writeFileSync(path, c, "utf8");
