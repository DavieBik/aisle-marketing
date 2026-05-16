import { LegalLayout } from "@/components/marketing/LegalLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy policy | The Aisle App",
  description: "How Nuru Technologies Pty Ltd handles your data.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy policy">
      <p className="text-muted">Last updated: May 2026</p>

      <section>
        <h2>Who we are</h2>
        <p>
          Nuru Technologies Pty Ltd (ABN registered in Australia) operates The
          Aisle App at theaisleapp.com and app.theaisleapp.com. For privacy
          questions, contact privacy@theaisleapp.com.
        </p>
      </section>

      <section>
        <h2>What we collect</h2>
        <p>
          When you use The Aisle App, we collect information you provide: names,
          email addresses, guest lists, wedding details, messages, and files you
          upload. We also collect technical data such as IP address, browser
          type, and usage logs to keep the service secure and reliable.
        </p>
      </section>

      <section>
        <h2>How we use your data</h2>
        <p>
          We use your data to provide and improve The Aisle App, send emails you
          request, respond to support enquiries, and comply with legal
          obligations. We do not sell your personal information.
        </p>
      </section>

      <section>
        <h2>Where data is stored</h2>
        <p>
          Wedding data is stored in Supabase (ap-northeast-2) with encryption at
          rest and in transit. Marketing site analytics use Plausible (EU-hosted,
          no cookies). Email is sent via Resend.
        </p>
      </section>

      <section>
        <h2>Cookies</h2>
        <p>
          The marketing site uses privacy-respecting analytics without tracking
          cookies. The app may use essential session cookies to keep you signed
          in. See our Cookies page for details.
        </p>
      </section>

      <section>
        <h2>Third parties</h2>
        <p>We share data only with processors who help us run the service:</p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Vercel (hosting)</li>
          <li>Supabase (database)</li>
          <li>Resend (email)</li>
          <li>Plausible (analytics on the marketing site)</li>
          <li>Canva (when you choose to design stationery externally)</li>
        </ul>
      </section>

      <section>
        <h2>Your rights</h2>
        <p>
          Under the Australian Privacy Act 1988 and the GDPR (where applicable),
          you may request access, correction, export, or deletion of your data.
          Contact privacy@theaisleapp.com and we will respond within 30 days.
        </p>
      </section>

      <section>
        <h2>Data deletion</h2>
        <p>
          You may delete your wedding home from account settings or request
          deletion by email. We will remove your data from active systems within
          a reasonable period, subject to legal retention requirements.
        </p>
      </section>

      <section>
        <h2>Spam Act 2003</h2>
        <p>
          Marketing emails require your consent. You may unsubscribe from
          newsletter emails at any time using the link in each message.
        </p>
      </section>
    </LegalLayout>
  );
}
