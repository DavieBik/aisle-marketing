import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const SIGNUP_URL = "https://app.theaisleapp.com/signup";

export function FinalCta() {
  return (
    <section className="bg-ivory py-12 lg:py-16">
      <Container className="max-w-2xl text-center">
        <p className="mb-4 font-outfit text-[11px] font-medium uppercase tracking-widest text-brass">
          Ready?
        </p>
        <h2 className="font-cormorant text-[clamp(2.25rem,4.5vw,3.5rem)] leading-tight text-ink">
          Try The Aisle App for seven days.
        </h2>
        <p className="mt-6 font-outfit text-lg text-muted">
          No credit card. Cancel any time during your trial.
        </p>
        <div className="mt-10">
          <Button
            href={SIGNUP_URL}
            data-plausible-event="cta_get_started_clicked"
          >
            Start your trial
          </Button>
        </div>
      </Container>
    </section>
  );
}
