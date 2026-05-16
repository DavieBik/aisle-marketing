"use client";

import { isPlaceholderTestimonial } from "@/lib/marketing-content";
import type { Testimonial } from "@/lib/supabase";
import { useState } from "react";

export function TestimonialEditor({ testimonial }: { testimonial: Testimonial }) {
  const [quote, setQuote] = useState(testimonial.quote);
  const [authorName, setAuthorName] = useState(testimonial.author_name);
  const [authorRole, setAuthorRole] = useState(testimonial.author_role ?? "");
  const [photoUrl, setPhotoUrl] = useState(testimonial.author_photo_url ?? "");
  const [status, setStatus] = useState<"idle" | "loading" | "saved" | "error">(
    "idle"
  );
  const placeholder = isPlaceholderTestimonial(testimonial);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/admin/content/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: testimonial.id,
          quote,
          author_name: authorName,
          author_role: authorRole,
          author_photo_url: photoUrl,
        }),
      });
      setStatus(res.ok ? "saved" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSave}
      className="rounded-2xl bg-ivory p-8 ring-1 ring-sage/60"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-cormorant text-xl text-ink">
          Testimonial {testimonial.display_order}
        </h3>
        {placeholder && (
          <span className="rounded-full bg-sage/50 px-3 py-1 font-outfit text-[11px] uppercase tracking-wide text-ink">
            Placeholder
          </span>
        )}
      </div>
      <div className="mt-4 space-y-3">
        <textarea
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          rows={4}
          className="w-full rounded-lg border border-sage-dark/40 bg-cream px-4 py-2 font-cormorant text-sm italic"
        />
        <input
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          placeholder="Author name"
          className="w-full rounded-lg border border-sage-dark/40 bg-cream px-4 py-2 font-outfit text-sm"
        />
        <input
          value={authorRole}
          onChange={(e) => setAuthorRole(e.target.value)}
          placeholder="Author role"
          className="w-full rounded-lg border border-sage-dark/40 bg-cream px-4 py-2 font-outfit text-sm"
        />
        <input
          value={photoUrl}
          onChange={(e) => setPhotoUrl(e.target.value)}
          placeholder="Photo URL (optional)"
          className="w-full rounded-lg border border-sage-dark/40 bg-cream px-4 py-2 font-outfit text-sm"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-4 rounded-full bg-brass px-5 py-2 font-outfit text-sm font-medium text-ivory hover:bg-brass-dark"
      >
        {status === "loading" ? "Saving…" : "Save"}
      </button>
      {status === "saved" && (
        <p className="mt-2 font-outfit text-xs text-brass">Saved.</p>
      )}
    </form>
  );
}
