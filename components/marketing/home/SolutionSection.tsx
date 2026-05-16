import Image from "next/image";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { Container } from "@/components/ui/Container";

export function SolutionSection() {
  return (
    <section className="bg-cream py-10 lg:py-12">
      <Container className="max-w-3xl text-center">
        <SectionHeading
          eyebrow="The new way"
          title="Everything for your wedding, beautifully kept in one place."
          titleClassName="text-[clamp(2rem,4vw,3.5rem)]"
        />

        <div className="space-y-6 text-left font-outfit text-[17px] leading-relaxed text-ink lg:text-center">
          <p>
            From the moment you say yes to the morning after the celebration,
            your wedding holds a thousand small decisions, dozens of people
            helping, and details across months of preparation.
          </p>
          <p>
            The Aisle App is the calm home where all of it lives. Your guest
            list and ceremonies. The gifts you&apos;d love and the people sending
            them. The committee meeting minutes, the bridesmaid proposals, the
            save the dates, the thank-you notes. Every detail held with the care
            it deserves.
          </p>
          <p>
            Whatever your wedding looks like, however it comes together, The
            Aisle App is built to hold it.
          </p>
        </div>

        <div className="relative mt-6 aspect-[21/9] w-full overflow-hidden rounded-sm">
          {/* TODO: replace with commissioned shot of wedding dining table */}
          <Image
            src="https://images.unsplash.com/photo-1519225426285-abb61fc38eb4?w=1400&q=80"
            alt="Long wedding reception table with candlelight, place settings, and warm ambient light"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </div>
      </Container>
    </section>
  );
}
