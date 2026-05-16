import { ContactForm } from "@/components/marketing/ContactForm";
import { PageShell } from "@/components/marketing/PageShell";
import { Container } from "@/components/ui/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | The Aisle App",
  description:
    "Questions, partnership ideas, press inquiries, or just hello.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <Container className="max-w-xl py-16 lg:py-24">
        <h1 className="font-cormorant text-5xl text-ink">Get in touch</h1>
        <p className="mt-4 font-outfit text-lg text-muted">
          Questions, partnership ideas, press inquiries, or just hello.
        </p>
        <div className="mt-12">
          <ContactForm />
        </div>
        <div className="mt-12 space-y-2 font-outfit text-sm text-muted">
          <p>
            <a href="mailto:hello@theaisleapp.com" className="text-brass hover:text-brass-dark">
              hello@theaisleapp.com
            </a>
          </p>
          <p>
            <a href="mailto:support@theaisleapp.com" className="text-brass hover:text-brass-dark">
              support@theaisleapp.com
            </a>
          </p>
        </div>
      </Container>
    </PageShell>
  );
}
