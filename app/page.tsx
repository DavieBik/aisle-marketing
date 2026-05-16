import { BotanicalPattern } from "@/components/marketing/BotanicalPattern";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { appUrl } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <section className="relative min-h-[70vh] overflow-hidden bg-cream py-20 lg:py-32">
        <BotanicalPattern className="pointer-events-none absolute -left-8 top-8 h-48 w-48 text-sage opacity-[0.08]" />
        <BotanicalPattern className="pointer-events-none absolute -right-8 bottom-8 h-56 w-56 rotate-12 text-sage opacity-[0.08]" />
        <Container className="relative text-center">
          <p className="mb-4 font-outfit text-[11px] font-medium uppercase tracking-widest text-brass">
            Scaffold preview
          </p>
          <h1 className="font-cormorant text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] text-ink">
            Your wedding&apos;s
            <br />
            <span className="italic">beautiful</span> home.
          </h1>
          <p className="mx-auto mt-6 max-w-md font-outfit text-lg text-muted">
            Global components, brand tokens, and typography are ready. The full
            home page ships in the next commit.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href={appUrl("/sign-up")}>Start free</Button>
            <Button variant="ghost" href="/features">
              See features
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-ivory py-20 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="Components"
            title="Section heading pattern"
            subtitle="Eyebrow, title, and subtitle with generous whitespace between major sections."
          />
          <div className="flex flex-wrap justify-center gap-4">
            <Button>Brass primary</Button>
            <Button variant="ghost">Ghost button</Button>
            <Button variant="text" href="/story">
              Text link
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
