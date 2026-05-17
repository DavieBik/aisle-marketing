import { LegalLayout } from "@/components/marketing/LegalLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of service | The Aisle App",
  description: "Terms for using The Aisle App.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of service">
      <p className="text-muted">Last updated: May 2026</p>

      <section>
        <h2>Agreement</h2>
        <p>
          By using The Aisle App, you agree to these terms with Nuru Technologies
          Pty Ltd. If you do not agree, please do not use the service.
        </p>
      </section>

      <section>
        <h2>Accounts</h2>
        <p>
          You are responsible for your account credentials and for activity under
          your wedding home. You must provide accurate information and keep your
          contact details current.
        </p>
      </section>

      <section>
        <h2>Payment</h2>
        <p>
          Start with a 7-day free trial. After your trial, choose a one-off plan
          ($100 USD) or a payment plan ($30 per month for four months). You can
          cancel any time during your trial with no charge.
        </p>
      </section>

      <section>
        <h2>Your content</h2>
        <p>
          You own the content you add to your wedding home. You grant us a limited
          licence to host, display, and transmit it solely to provide the service
          to you and your invited guests and collaborators.
        </p>
      </section>

      <section>
        <h2>Prohibited uses</h2>
        <p>
          You may not use The Aisle App for unlawful purposes, to harass others,
          to distribute malware, or to attempt unauthorized access to our systems
          or other users&apos; data.
        </p>
      </section>

      <section>
        <h2>Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, Nuru Technologies Pty Ltd is not
          liable for indirect or consequential damages arising from your use of
          The Aisle App. Our total liability is limited to the amount you paid us
          in the twelve months before the claim, or AUD $100 if you use the free
          tier.
        </p>
      </section>

      <section>
        <h2>Governing law</h2>
        <p>
          These terms are governed by the laws of Victoria, Australia. Disputes
          will be resolved in the courts of Victoria, subject to mandatory consumer
          protections in your jurisdiction.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Questions about these terms: hello@theaisleapp.com</p>
      </section>
    </LegalLayout>
  );
}
