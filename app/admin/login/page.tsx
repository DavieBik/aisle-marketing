import { AdminLoginForm } from "@/components/admin/AdminLoginForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin sign in",
};

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-cream px-6">
      <div className="w-full max-w-md text-center">
        <p className="font-outfit text-[11px] font-medium uppercase tracking-widest text-brass">
          The Aisle App
        </p>
        <h1 className="mt-2 font-cormorant text-4xl text-ink">Admin sign in</h1>
        <p className="mt-4 font-outfit text-sm text-muted">
          Enter your authorised email. We will send a magic link.
        </p>
        <div className="mt-8">
          <AdminLoginForm />
        </div>
      </div>
    </div>
  );
}
