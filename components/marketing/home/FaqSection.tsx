import { SectionHeading } from "@/components/marketing/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { Container } from "@/components/ui/Container";
import { HOME_FAQ } from "@/lib/features";

export function FaqSection() {
  return (
    <section className="bg-cream py-20 lg:py-32">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow="Questions" title="Things couples ask us." />
        <Accordion items={HOME_FAQ} />
      </Container>
    </section>
  );
}
