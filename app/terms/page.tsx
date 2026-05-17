import { LegalLayout } from "@/components/marketing/LegalLayout";
import { TermsContent } from "@/components/marketing/legal/terms-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of service | The Aisle App",
  description: "Terms for using The Aisle App wedding planning services.",
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      lastUpdated="Last updated: 1 April 2026"
    >
      <TermsContent />
    </LegalLayout>
  );
}
