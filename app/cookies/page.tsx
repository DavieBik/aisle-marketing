import { LegalLayout } from "@/components/marketing/LegalLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies | The Aisle App",
  description: "How we use cookies on theaisleapp.com.",
};

export default function CookiesPage() {
  return (
    <LegalLayout title="Cookies">
      <section>
        <h2>Marketing site</h2>
        <p>
          theaisleapp.com uses Plausible Analytics, which does not use cookies and
          does not track you across other websites. No cookie banner is required
          for this analytics choice.
        </p>
      </section>

      <section>
        <h2>The Aisle App</h2>
        <p>
          app.theaisleapp.com uses essential session cookies to keep you signed in.
          These are strictly necessary for the service to function.
        </p>
      </section>

      <section>
        <h2>Your choices</h2>
        <p>
          You can clear cookies in your browser settings at any time. Clearing
          session cookies will sign you out of the app.
        </p>
      </section>
    </LegalLayout>
  );
}
