import { SectionHeading } from "@/components/marketing/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { appUrl } from "@/lib/constants";

export function PricingTeaser() {
  return (
    <section className="bg-ivory py-12 lg:py-16">
      <Container className="max-w-2xl text-center">
        <SectionHeading
          eyebrow="Pricing"
          title="Free during launch. Always boutique."
        />
        <p className="-mt-6 font-outfit text-[17px] leading-relaxed text-ink">
          The Aisle App is free for couples during our launch. Premium features
          will come, but the home for your wedding will always be free to start.
          No credit card. No expiration.
        </p>
        <div className="mt-10">
          <Button href={appUrl("/sign-up")}>Start free</Button>
        </div>
        <p className="mt-4 font-outfit text-sm text-muted">
          No credit card required.
        </p>
      </Container>
    </section>
  );
}
