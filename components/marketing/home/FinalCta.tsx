import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { appUrl } from "@/lib/constants";

export function FinalCta() {
  return (
    <section className="bg-sand-warm py-20 lg:py-32">
      <Container className="text-center">
        <h2 className="font-cormorant text-[clamp(2.5rem,5vw,4rem)] italic leading-tight text-ink">
          Your wedding deserves a beautiful home.
        </h2>
        <p className="mt-6 font-outfit text-lg text-ink">Start free today.</p>
        <div className="mt-10">
          <Button
            href={appUrl("/sign-up")}
            className="scale-110 px-8 py-4 text-base"
            data-plausible-event="cta_get_started_clicked"
          >
            Get started
          </Button>
        </div>
        <p className="mt-6 font-outfit text-[13px] text-muted">
          Free during launch. No setup. Cancel anytime.
        </p>
      </Container>
    </section>
  );
}
