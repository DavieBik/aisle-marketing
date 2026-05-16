import Image from "next/image";
import { PageShell } from "@/components/marketing/PageShell";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { appUrl } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our story | The Aisle App",
  description:
    "We built The Aisle App for every wedding we have known. A wedding, beautifully kept.",
};

export default function StoryPage() {
  return (
    <PageShell className="bg-cream">
      <Container className="max-w-2xl py-10 lg:py-14">
        <h1 className="font-cormorant text-[clamp(2.5rem,5vw,4rem)] leading-tight text-ink">
          We built The Aisle App for every wedding we have known.
        </h1>

        <div className="mt-8 space-y-5 font-outfit text-[17px] leading-[1.75] text-ink">
          <p>
            We&apos;re Nuru Technologies, the people behind The Aisle App.
          </p>
          <p>
            We have all been involved in weddings. As the couple, as siblings,
            as relatives, as friends. The story is the same each time. They meet,
            fall in love, and somewhere in the rush of engagement, saving for
            the ring, and meeting each other&apos;s families, they start
            planning a wedding.
          </p>
          <p>
            It became obvious that the tools available weren&apos;t built for
            the way weddings actually unfold. Multiple ceremonies. Committees
            meeting every Tuesday. Family across three continents. Payment
            methods that didn&apos;t fit any default.
          </p>
        </div>

        <div className="relative my-8 aspect-[16/10] overflow-hidden rounded-sm">
          {/* TODO: commissioned imagery OR appropriate lifestyle stock photography */}
          <Image
            src="https://images.unsplash.com/photo-1516589178581-6cd7423ead9a?w=1200&q=80"
            alt="Hands intertwined in soft natural light"
            fill
            className="object-cover"
            sizes="(max-width: 672px) 100vw, 672px"
          />
        </div>

        <div className="space-y-5 font-outfit text-[17px] leading-[1.75] text-ink">
          <p>
            The Aisle App is the wedding home everyone should have, or wishes
            they had. For our own weddings,             and for every couple planning theirs.
          </p>
          <p>
            Whatever your wedding looks like, however it comes together, we hope
            The Aisle App holds it as well as it has held many others.
          </p>
          {/* TODO: founder review and final copy refinement */}
        </div>

        <p className="mx-auto mt-16 max-w-xl text-center font-outfit text-sm leading-relaxed text-muted">
          Nuru Technologies Pty Ltd is registered in Australia, with a sister
          office in Uganda. We&apos;re a small team of builders, project managers,
          and wedding veterans who care about the details.
        </p>

        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <Button href={appUrl("/sign-up")}>Start free</Button>
          <Button variant="ghost" href="/contact">
            Get in touch
          </Button>
        </div>
      </Container>
    </PageShell>
  );
}
