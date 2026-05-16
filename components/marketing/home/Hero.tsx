import Image from "next/image";
import { BotanicalPattern } from "@/components/marketing/BotanicalPattern";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { appUrl } from "@/lib/constants";
import type { HeroContent } from "@/lib/supabase";

const DEFAULT_HERO: HeroContent = {
  id: 1,
  headline: "Your wedding's beautiful home.",
  subhead:
    "A boutique home for every guest, gift, ceremony, and quiet moment of your wedding. From engagement to thank-you cards, in one beautifully designed place.",
  image_url: "/images/hero-rings.jpg",
  updated_at: "",
  updated_by: null,
};

const DEFAULT_HERO_IMAGE =
  "https://images.pexels.com/photos/265856/pexels-photo-265856.jpeg?auto=compress&cs=tinysrgb&w=900";

function splitHeadline(headline: string): { line1: string; italic: string; line2: string } {
  const match = headline.match(/^(.+?)\s+beautiful\s+home\.?$/i);
  if (match) {
    return {
      line1: match[1].trim(),
      italic: "beautiful",
      line2: "home.",
    };
  }
  return { line1: headline, italic: "", line2: "" };
}

export function Hero({ hero = DEFAULT_HERO }: { hero?: HeroContent }) {
  const imageSrc =
    hero.image_url.startsWith("http") || hero.image_url.startsWith("/")
      ? hero.image_url
      : DEFAULT_HERO_IMAGE;

  const useLocalPath = imageSrc.startsWith("/");
  const { line1, italic, line2 } = splitHeadline(hero.headline);

  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-cream">
      <BotanicalPattern className="pointer-events-none absolute -left-12 top-16 h-56 w-56 text-sage opacity-[0.08]" />
      <BotanicalPattern className="pointer-events-none absolute -right-16 bottom-24 h-64 w-64 rotate-12 text-sage opacity-[0.08]" />

      <Container className="relative flex min-h-[100dvh] flex-col justify-center pb-8 pt-24 lg:pb-12 lg:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-[55%_45%] lg:gap-16">
          <div>
            <p className="mb-6 font-outfit text-[11px] font-medium uppercase tracking-widest text-brass">
              Weddings, beautifully kept
            </p>
            {italic ? (
              <h1 className="font-cormorant text-[clamp(3rem,7vw,5.5rem)] leading-[1.05] text-ink">
                {line1}
                <br />
                <span className="italic">{italic}</span> {line2}
              </h1>
            ) : (
              <h1 className="font-cormorant text-[clamp(3rem,7vw,5.5rem)] leading-[1.05] text-ink">
                {hero.headline}
              </h1>
            )}
            <p className="mt-8 max-w-md font-outfit text-xl leading-relaxed text-muted">
              {hero.subhead}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href={appUrl("/sign-up")} data-plausible-event="cta_get_started_clicked">
                Start free
              </Button>
              <Button variant="ghost" href="#features">
                See how it works
              </Button>
            </div>
            <p className="mt-4 font-outfit text-[13px] text-muted">
              7-day free trial. No credit card. No setup time.
            </p>
          </div>

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm lg:aspect-auto lg:min-h-[520px]">
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
          </div>
        </div>
      </Container>
    </section>
  );
}
