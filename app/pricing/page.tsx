import { PageShell } from "@/components/marketing/PageShell";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { Metadata } from "next";

const SIGNUP_URL = "https://app.theaisleapp.com/signup";

const PRICING_FAQ = [
  {
    question: "Do I need a credit card to start?",
    answer:
      "No. Start your 7-day trial without payment details. You can cancel any time during the trial.",
  },
  {
    question: "What happens when my trial ends?",
    answer:
      "We will share subscription options before your trial ends. You choose whether to continue. Nothing is charged without your consent.",
  },
  {
    question: "Can I cancel during the trial?",
    answer: "Yes. Cancel any time during your 7-day trial with no charge.",
  },
  {
    question: "What is included?",
    answer:
      "Full access to every feature: guests, ceremonies, registry, committee, events, stationery, collaborators, emails, and budget. Invite your partner, family, and collaborators.",
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
      <section className="bg-cream py-16 lg:py-20">
        <Container className="max-w-2xl text-center">
          <h1 className="font-cormorant text-[clamp(2.25rem,4.5vw,3.5rem)] text-ink">
            Try every part of The Aisle App for 7 days.
          </h1>
          <p className="mt-6 font-outfit text-lg text-muted">
            No credit card. No setup time. Cancel any time during your trial.
          </p>
        </Container>
      </section>

      <section className="bg-ivory pb-16 lg:pb-24">
        <Container className="max-w-md">
          <article className="rounded-2xl bg-ivory p-10 shadow-[0_4px_32px_rgba(92,74,58,0.08)] ring-1 ring-sage/60">
            <p className="font-cormorant text-3xl text-ink">The Aisle App</p>
            <p className="mt-2 font-outfit text-sm font-medium text-brass">
              7-day free trial
            </p>
            <p className="mt-6 font-outfit text-[15px] leading-relaxed text-muted">
              Full access to every feature. Invite your partner, your family,
              your collaborators. Bring your whole wedding home.
            </p>
            <div className="mt-10">
              <Button href={SIGNUP_URL} className="w-full justify-center">
                Start your trial
              </Button>
            </div>
          </article>
        </Container>

        <Container className="mt-20 max-w-2xl text-center">
          <p className="font-outfit text-[11px] font-medium uppercase tracking-widest text-brass">
            FOUNDING COUPLES
          </p>
          <h2 className="mt-4 font-cormorant text-3xl text-ink">
            A discount for couples joining us early.
          </h2>
          <p className="mt-4 font-outfit text-[15px] leading-relaxed text-muted">
            If your wedding is in the first wave with us, we&apos;d love to look
            after you. Contact us for founding-couples pricing.
          </p>
          <div className="mt-8">
            <Button variant="ghost" href="/contact">
              Contact us
            </Button>
          </div>
        </Container>

        <Container className="mt-20 max-w-2xl">
          <h2 className="mb-8 text-center font-cormorant text-3xl text-ink">
            Pricing questions
          </h2>
          <Accordion items={PRICING_FAQ} />
          <p className="mt-12 text-center font-outfit text-sm text-muted">
            Vendors and venues, coming later.
          </p>
        </Container>
      </section>
    </PageShell>
  );
}
