import Image from "next/image";
import { BotanicalPattern } from "@/components/marketing/BotanicalPattern";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { appUrl } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-cream">
      <BotanicalPattern className="pointer-events-none absolute -left-12 top-16 h-56 w-56 text-sage opacity-[0.08]" />
      <BotanicalPattern className="pointer-events-none absolute -right-16 bottom-24 h-64 w-64 rotate-12 text-sage opacity-[0.08]" />

      <Container className="relative flex min-h-[100dvh] flex-col justify-center pb-16 pt-24 lg:pb-24 lg:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-[55%_45%] lg:gap-16">
          <div>
            <p className="mb-6 font-outfit text-[11px] font-medium uppercase tracking-widest text-brass">
              Weddings, beautifully kept
            </p>
            <h1 className="font-cormorant text-[clamp(3rem,7vw,5.5rem)] leading-[1.05] text-ink">
              Your wedding&apos;s
              <br />
              <span className="italic">beautiful</span> home.
            </h1>
            <p className="mt-8 max-w-md font-outfit text-xl leading-relaxed text-muted">
              A boutique home for every guest, gift, ceremony, and quiet moment
              of your wedding. From engagement to thank-you cards, in one
              beautifully designed place.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href={appUrl("/sign-up")} data-plausible-event="cta_get_started_clicked">
                Start free
              </Button>
              <Button variant="ghost" href="#features">
                See how it works
              </Button>
            </div>
            <p className="mt-8 font-outfit text-[13px] text-muted">
              Free during launch. No credit card. No setup time.
            </p>
          </div>

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm lg:aspect-auto lg:min-h-[520px]">
            {/* TODO: replace with commissioned shot of hands using the app in a boutique wedding setting */}
            <Image
              src="https://images.unsplash.com/photo-1515932058250-fa9fb2a0f241?w=900&q=80"
              alt="Wedding invitation flat lay with ribbon, flowers, and soft natural light"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
