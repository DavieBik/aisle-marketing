import { LegalLayout } from "@/components/marketing/LegalLayout";
import { PrivacyContent } from "@/components/marketing/legal/privacy-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy policy | The Aisle App",
  description:
    "How Nuru Technologies Pty Ltd handles personal information for couples, collaborators, and guests using The Aisle App.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated="Last updated: 1 April 2026"
    >
      <PrivacyContent />
    </LegalLayout>
  );
}
