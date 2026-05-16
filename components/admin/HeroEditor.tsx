"use client";

import type { HeroContent } from "@/lib/supabase";
import { useState } from "react";

export function HeroEditor({ hero }: { hero: HeroContent }) {
  const [headline, setHeadline] = useState(hero.headline);
  const [subhead, setSubhead] = useState(hero.subhead);
  const [imageUrl, setImageUrl] = useState(hero.image_url);
  const [status, setStatus] = useState<"idle" | "loading" | "saved" | "error">(
    "idle"
  );
  const [uploading, setUploading] = useState(false);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (res.ok && data.url) {
        setImageUrl(data.url);
      }
    } finally {
      setUploading(false);
    }
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/admin/content/hero", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          headline,
          subhead,
          image_url: imageUrl,
        }),
      });
      setStatus(res.ok ? "saved" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSave} className="rounded-2xl bg-ivory p-8 ring-1 ring-sage/60">
      <h2 className="font-cormorant text-2xl text-ink">Hero</h2>
      <div className="mt-6 space-y-4">
        <div>
          <label className="font-outfit text-sm text-ink">Headline</label>
          <input
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
            className="mt-1 w-full rounded-lg border border-sage-dark/40 bg-cream px-4 py-2 font-outfit text-sm"
          />
        </div>
        <div>
          <label className="font-outfit text-sm text-ink">Subhead</label>
          <textarea
            value={subhead}
            onChange={(e) => setSubhead(e.target.value)}
            rows={4}
            className="mt-1 w-full rounded-lg border border-sage-dark/40 bg-cream px-4 py-2 font-outfit text-sm"
          />
        </div>
        <div>
          <label className="font-outfit text-sm text-ink">Image URL</label>
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="mt-1 w-full rounded-lg border border-sage-dark/40 bg-cream px-4 py-2 font-outfit text-sm"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            className="mt-2 font-outfit text-xs text-muted"
          />
          {uploading && (
            <p className="mt-1 font-outfit text-xs text-muted">Uploading…</p>
          )}
        </div>
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 rounded-full bg-brass px-6 py-2.5 font-outfit text-sm font-medium text-ivory hover:bg-brass-dark"
      >
        {status === "loading" ? "Saving…" : "Save hero"}
      </button>
      {status === "saved" && (
        <p className="mt-2 font-outfit text-sm text-brass">
          Saved. Live site updates within about a minute.
        </p>
      )}
    </form>
  );
}
