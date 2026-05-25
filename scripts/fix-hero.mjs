import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const p = join(dirname(fileURLToPath(import.meta.url)), "..", "components/marketing/home/Hero.tsx");
let c = readFileSync(p, "utf8");

const old = `          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm lg:aspect-auto lg:min-h-[520px]">
            {/* TODO: replace with commissioned shot of hands using the app in a boutique wedding setting */}
            <Image
              src={useLocalPath && imageSrc === "/images/hero-rings.jpg" ? DEFAULT_HERO_IMAGE : imageSrc}
              alt="Wedding invitation flat lay with calligraphy and soft natural light"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
              unoptimized={imageSrc.includes("supabase.co")}
            />
          </div>`;

const neu = `          <HeroParallaxImage
            src={
              useLocalPath && imageSrc === "/images/hero-rings.jpg"
                ? DEFAULT_HERO_IMAGE
                : imageSrc
            }
            alt="Wedding invitation flat lay with calligraphy and soft natural light"
            priority
            unoptimized={imageSrc.includes("supabase.co")}
          />`;

if (!c.includes("HeroParallaxImage")) {
  c = c.replace(
    'import { BotanicalPattern } from "@/components/marketing/BotanicalPattern";',
    'import { BotanicalPattern } from "@/components/marketing/BotanicalPattern";\nimport { HeroParallaxImage } from "@/components/marketing/home/HeroParallaxImage";'
  );
  c = c.replace(/^import Image from "next\/image";\n/m, "");
}

c = c.replace(old, neu);
writeFileSync(p, c, "utf8");
console.log("hero ok", c.includes("HeroParallaxImage"));
