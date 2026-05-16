"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="rounded-2xl bg-ivory p-8 text-center font-cormorant text-2xl text-ink">
        Got it. We&apos;ll be in touch within 48 hours.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block font-outfit text-sm text-ink">Name</span>
          <input
            name="name"
            required
            className="w-full rounded-lg border border-sage-dark/40 bg-ivory px-4 py-3 font-outfit text-sm text-ink focus:border-brass focus:outline-none"
          />
        </label>
        <label className="block">
          <span className="mb-2 block font-outfit text-sm text-ink">Email</span>
          <input
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-sage-dark/40 bg-ivory px-4 py-3 font-outfit text-sm text-ink focus:border-brass focus:outline-none"
          />
        </label>
      </div>
      <label className="block">
        <span className="mb-2 block font-outfit text-sm text-ink">Subject</span>
        <input
          name="subject"
          required
          className="w-full rounded-lg border border-sage-dark/40 bg-ivory px-4 py-3 font-outfit text-sm text-ink focus:border-brass focus:outline-none"
        />
      </label>
      <label className="block">
        <span className="mb-2 block font-outfit text-sm text-ink">Message</span>
        <textarea
          name="message"
          required
          rows={6}
          className="w-full resize-y rounded-lg border border-sage-dark/40 bg-ivory px-4 py-3 font-outfit text-sm text-ink focus:border-brass focus:outline-none"
        />
      </label>
      <Button type="submit" className={status === "loading" ? "opacity-70" : ""}>
        {status === "loading" ? "Sending…" : "Send message"}
      </Button>
      {status === "error" && (
        <p className="font-outfit text-sm text-muted">
          Something went wrong. Please email hello@theaisleapp.com directly.
        </p>
      )}
    </form>
  );
}
