"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export function AdminLoginForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const result = await signIn("email", {
        email,
        redirect: false,
        callbackUrl: "/admin",
      });
      if (result?.error) {
        setStatus("error");
        return;
      }
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-sm">
      <label htmlFor="admin-email" className="sr-only">
        Email
      </label>
      <input
        id="admin-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="w-full rounded-full border border-sage-dark/40 bg-ivory px-5 py-3 font-outfit text-sm text-ink placeholder:text-muted/70 focus:border-brass focus:outline-none"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-4 w-full rounded-full bg-brass px-6 py-3 font-outfit text-sm font-medium text-ivory transition-colors hover:bg-brass-dark disabled:opacity-60"
      >
        {status === "loading" ? "Sending link…" : "Send magic link"}
      </button>
      {status === "sent" && (
        <p className="mt-4 text-center font-outfit text-sm text-muted">
          Check your inbox for a sign-in link.
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 text-center font-outfit text-sm text-muted">
          Could not send a link. Check your email is authorised.
        </p>
      )}
    </form>
  );
}
