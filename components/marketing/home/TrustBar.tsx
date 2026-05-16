import { Container } from "@/components/ui/Container";

export function TrustBar() {
  return (
    <section className="border-b border-sage/40 bg-cream py-6 lg:py-8">
      <Container>
        <p className="text-center font-cormorant text-lg italic leading-relaxed text-muted lg:text-xl">
          Crafted by people who have lived weddings. Built for the couples
          planning theirs.
        </p>
      </Container>
    </section>
  );
}
