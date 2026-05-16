import { PageShell } from "@/components/marketing/PageShell";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { appUrl } from "@/lib/constants";
import type { Metadata } from "next";

const PRICING_FAQ = [
  {
    question: "Will I always be free if I sign up during launch?",
    answer:
      "Yes. Couples who join during launch keep access to the core wedding home at no charge. We will introduce paid tiers later, but not for couples already with us.",
  },
  {
    question: "What will paid tiers include?",
    answer:
      "Premium features for couples and, eventually, plans for vendors and planners. Details will be announced before anything changes for existing couples.",
  },
  {
    question: "Do I need a credit card to start?",
    answer: "No. You can create your wedding home today without payment details.",
  },
  {
    question: "What is included in the couple plan?",
    answer:
      "Everything you need to hold your wedding: guests, ceremonies, registry, committee, events, stationery, collaborators, emails, and budget.",
  },
  {
    question: "When will vendor and planner plans launch?",
    answer:
      "They are coming soon. Join the waitlist by contacting us if you are a vendor or planner interested in early access.",
  },
] as const;

export const metadata: Metadata = {
  title: "Pricing | The Aisle App",
  description:
    "Free during launch. The Aisle App is free for couples organizing a wedding right now.",
};

export default function PricingPage() {
  return (
    <PageShell>
      <section className="bg-cream py-16 lg:py-24">
        <Container className="max-w-2xl text-center">
          <h1 className="font-cormorant text-[clamp(2.25rem,4.5vw,3.5rem)] text-ink">
            Free during launch.
          </h1>
          <p className="mt-6 font-outfit text-lg text-muted">
            We&apos;re keeping The Aisle App free for everyone planning a
            wedding right now. Paid tiers will come, but never for couples
            already using us free.
          </p>
        </Container>
      </section>

      <section className="bg-ivory pb-20 lg:pb-32">
        <Container className="grid max-w-4xl gap-8 md:grid-cols-2">
          <article className="rounded-2xl bg-ivory p-10 shadow-[0_4px_32px_rgba(92,74,58,0.08)] ring-1 ring-sage/60">
            <p className="font-outfit text-[11px] font-medium uppercase tracking-widest text-brass">
              Couple plan
            </p>
            <p className="mt-4 font-cormorant text-5xl text-ink">Free</p>
            <p className="mt-2 font-outfit text-sm text-muted">During launch</p>
            <ul className="mt-8 space-y-3 font-outfit text-sm text-ink">
              <li>Guests and ceremonies</li>
              <li>Registry and gifts tracking</li>
              <li>Committee meetings and minutes</li>
              <li>Pre-wedding events</li>
              <li>Stationery and boutique emails</li>
              <li>Collaborators with custom access</li>
              <li>Budget in any currency</li>
            </ul>
            <div className="mt-10">
              <Button href={appUrl("/sign-up")} className="w-full justify-center">
                Get started free
              </Button>
            </div>
          </article>

          <article className="rounded-2xl border border-sage/60 bg-cream/50 p-10 opacity-70">
            <p className="font-outfit text-[11px] font-medium uppercase tracking-widest text-muted">
              Coming soon
            </p>
            <p className="mt-4 font-cormorant text-3xl text-muted">
              Vendor and planner plans
            </p>
            <p className="mt-4 font-outfit text-sm leading-relaxed text-muted">
              For florists, planners, venues, and others who support weddings
              every day. We will share details when the time is right.
            </p>
          </article>
        </Container>

        <Container className="mt-20 max-w-2xl">
          <h2 className="mb-8 text-center font-cormorant text-3xl text-ink">
            Pricing questions
          </h2>
          <Accordion items={PRICING_FAQ} />
        </Container>
      </section>
    </PageShell>
  );
}
