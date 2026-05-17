import { PageShell } from "@/components/marketing/PageShell";
import { Container } from "@/components/ui/Container";

export function LegalLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
}) {
  return (
    <PageShell>
      <Container className="max-w-[720px] py-16 lg:py-24">
        <h1 className="font-cormorant text-5xl text-ink">{title}</h1>
        {lastUpdated ? (
          <p className="mt-4 font-outfit text-sm text-muted">{lastUpdated}</p>
        ) : null}
        <article className="mt-12 font-outfit text-[15px] leading-[1.7] text-ink [&_section+_section]:mt-10 [&_h2]:font-outfit [&_h2]:text-xl [&_h2]:font-medium [&_h2]:text-brass-dark [&_h2+p]:mt-4 [&_p+p]:mt-4 [&_p+ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_strong]:font-semibold">
          {children}
        </article>
      </Container>
    </PageShell>
  );
}
