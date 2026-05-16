import { PageShell } from "@/components/marketing/PageShell";
import { Accordion } from "@/components/ui/Accordion";
import { Container } from "@/components/ui/Container";
import { FAQ_CATEGORIES } from "@/lib/faq-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | The Aisle App",
  description: "Things couples ask us about The Aisle App.",
};

export default function FaqPage() {
  return (
    <PageShell>
      <Container className="max-w-3xl py-16 lg:py-24">
        <h1 className="font-cormorant text-5xl text-ink">Things couples ask us</h1>
        <p className="mt-4 font-outfit text-lg text-muted">
          Answers about getting started, features, privacy, and more.
        </p>

        <div className="mt-16 space-y-16">
          {FAQ_CATEGORIES.map((cat) => (
            <section key={cat.name}>
              <h2 className="mb-6 font-cormorant text-3xl text-ink">{cat.name}</h2>
              <Accordion items={cat.items} />
            </section>
          ))}
        </div>
      </Container>
    </PageShell>
  );
}
