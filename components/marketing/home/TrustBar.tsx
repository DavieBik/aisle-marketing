import { Container } from "@/components/ui/Container";

export function TrustBar() {
  return (
    <section className="border-b border-sage/40 bg-cream py-12 lg:py-16">
      <Container>
        <p className="text-center font-cormorant text-lg italic leading-relaxed text-muted lg:text-xl">
          Crafted by people who have lived weddings. Built for the couples
          planning theirs.
        </p>
      </Container>
    </section>
  );
}
