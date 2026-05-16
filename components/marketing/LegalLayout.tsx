import { PageShell } from "@/components/marketing/PageShell";
import { Container } from "@/components/ui/Container";

export function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <PageShell>
      <Container className="max-w-3xl py-16 lg:py-24">
        <h1 className="font-cormorant text-5xl text-ink">{title}</h1>
        <div className="mt-12 space-y-8 font-outfit text-[15px] leading-relaxed text-ink [&_h2]:font-cormorant [&_h2]:text-2xl [&_h2]:text-ink [&_h3]:mt-6 [&_h3]:font-outfit [&_h3]:text-sm [&_h3]:font-medium [&_h3]:uppercase [&_h3]:tracking-widest [&_h3]:text-brass">
          {children}
        </div>
      </Container>
    </PageShell>
  );
}
