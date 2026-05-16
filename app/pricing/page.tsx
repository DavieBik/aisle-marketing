import { PageShell } from "@/components/marketing/PageShell";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { Metadata } from "next";

const SIGNUP_URL = "https://app.theaisleapp.com/signup";

const PRICING_FAQ = [
  {
    question: "What happens after the trial?",
    answer:
      "Pick one of the two plans, or cancel. No automatic charge during the trial.",
  },
  {
    question: "Can I switch from payment plan to one-off?",
    answer: "Yes, any time. We'll credit what you've paid.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "Mobile money where available, credit card, or bank transfer.",
  },
  {
    question: "Is there a refund?",
    answer: "Yes, within 14 days of paying.",
  },
  {
    question: "What if I miss a payment?",
    answer:
      "A 14-day grace period, then features lock until you complete. Your data stays safe.",
  },
] as const;

export const metadata: Metadata = {
  title: "Pricing | The Aisle App",
  description:
    "Try every part of The Aisle App for 7 days. No credit card. No setup time.",
};

export default function PricingPage() {
  return (
    <PageShell>
      <section className="bg-cream py-12 lg:py-16">
        <Container className="max-w-2xl text-center">
          <p className="mb-4 font-outfit text-[11px] font-medium uppercase tracking-widest text-brass">
            Pricing
          </p>
          <h1 className="font-cormorant text-[clamp(2.25rem,4.5vw,3.5rem)] text-ink">
            Try every part of The Aisle App for 7 days.
          </h1>
          <p className="mt-6 font-outfit text-lg text-muted">
            No credit card. No setup time. Cancel any time during your trial.
          </p>
        </Container>
      </section>

      <section className="bg-ivory pb-12 lg:pb-16">
        <Container>
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            <article className="relative rounded-2xl bg-ivory p-8 shadow-[0_4px_32px_rgba(92,74,58,0.08)] ring-2 ring-brass/40 lg:p-10">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brass px-3 py-1 font-outfit text-[10px] font-medium uppercase tracking-widest text-ivory">
                Most chosen
              </span>
              <p className="font-outfit text-[11px] font-medium uppercase tracking-widest text-brass">
                One-off
              </p>
              <h2 className="mt-2 font-cormorant text-3xl text-ink">One-off</h2>
              <p className="mt-4 font-cormorant text-4xl text-ink">$100 USD</p>
              <p className="mt-4 font-outfit text-[15px] leading-relaxed text-muted">
                Pay once. Full access for the life of your wedding.
              </p>
              <p className="mt-2 font-outfit text-sm text-muted">
                Charged after your 7-day trial.
              </p>
              <div className="mt-8">
                <Button href={SIGNUP_URL} className="w-full justify-center">
                  Start your trial
                </Button>
              </div>
            </article>

            <article className="rounded-2xl bg-ivory p-8 shadow-[0_4px_32px_rgba(92,74,58,0.08)] ring-1 ring-sage/60 lg:p-10">
              <p className="font-outfit text-[11px] font-medium uppercase tracking-widest text-brass">
                Payment plan
              </p>
              <h2 className="mt-2 font-cormorant text-3xl text-ink">
                Payment plan
              </h2>
              <p className="mt-4 font-cormorant text-4xl text-ink">
                $30 × 4 = $120
              </p>
              <p className="mt-4 font-outfit text-[15px] leading-relaxed text-muted">
                Spread the cost across your engagement. Final payment 30 days
                before your wedding.
              </p>
              <p className="mt-2 font-outfit text-sm text-muted">
                Available for weddings 5 months or more away.
              </p>
                            <div className="mt-8">
                <Button href={SIGNUP_URL} className="w-full justify-center">
                  Start your trial
                </Button>
              </div>
            </article>
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center font-outfit text-base text-brass-dark">
            Pay by mobile money, credit card, or bank transfer.
          </p>

          <p className="mx-auto mt-8 max-w-2xl text-center font-outfit text-[15px] leading-relaxed text-ink">
            Every feature, unlimited. Both plans include everything The Aisle
            App can do.
          </p>

          <p className="mx-auto mt-8 max-w-2xl text-center font-outfit text-xs leading-relaxed text-muted">
            Missed a payment? 14-day grace period. Your wedding&apos;s data is
            always preserved.
          </p>
        </Container>

        <Container className="mx-auto mt-16 max-w-2xl">
          <h2 className="mb-8 text-center font-cormorant text-3xl text-ink">
            Pricing questions
          </h2>
          <Accordion items={PRICING_FAQ} />
        </Container>
      </section>
    </PageShell>
  );
}
