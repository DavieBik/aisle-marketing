import { SectionHeading } from "@/components/marketing/SectionHeading";
import {
  ChatIllustration,
  EnvelopeIllustration,
  SpreadsheetIllustration,
} from "@/components/marketing/illustrations/ProblemIllustrations";
import { Container } from "@/components/ui/Container";

const problems = [
  {
    Illustration: SpreadsheetIllustration,
    title: "Spreadsheets for guests, gifts, and the budget",
    description:
      "Tabs that multiply. Formulas that break. A guest list that lives nowhere and everywhere at once.",
  },
  {
    Illustration: ChatIllustration,
    title: "WhatsApp threads with every committee, every family member",
    description:
      "Important decisions buried in voice notes. Meeting minutes lost between emoji reactions.",
  },
  {
    Illustration: EnvelopeIllustration,
    title: "Inboxes filled with vendor quotes and save-the-dates",
    description:
      "Attachments scattered across email chains. No single place that holds the full picture.",
  },
];

export function ProblemSection() {
  return (
    <section className="bg-ivory py-20 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="The old way"
          title={
            <>
              A wedding shouldn&apos;t feel like running a{" "}
              <span className="italic">business</span>.
            </>
          }
          titleClassName="text-[clamp(2.25rem,4.5vw,3.25rem)]"
        />

        <div className="mt-4 grid gap-16 md:grid-cols-3 md:gap-10 lg:gap-14">
          {problems.map(({ Illustration, title, description }) => (
            <div key={title} className="text-center">
              <Illustration />
              <h3 className="mt-8 font-cormorant text-2xl italic text-ink">
                {title}
              </h3>
              <p className="mt-3 font-outfit text-sm leading-relaxed text-muted">
                {description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-20 text-center font-cormorant text-[22px] italic text-ink lg:mt-24">
          There is a quieter way.
        </p>
      </Container>
    </section>
  );
}
