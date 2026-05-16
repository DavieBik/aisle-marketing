"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function ReplyForm({ submissionId }: { submissionId: string }) {
  const router = useRouter();
  const [body, setBody] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/admin/reply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ submissionId, body }),
      });
      if (!res.ok) {
        setStatus("error");
        return;
      }
      setBody("");
      setStatus("sent");
      router.refresh();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8">
      <label htmlFor="reply-body" className="font-outfit text-sm font-medium text-ink">
        Reply
      </label>
      <textarea
        id="reply-body"
        required
        rows={6}
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="mt-2 w-full rounded-lg border border-sage-dark/40 bg-ivory px-4 py-3 font-outfit text-sm text-ink focus:border-brass focus:outline-none"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-4 rounded-full bg-brass px-6 py-2.5 font-outfit text-sm font-medium text-ivory hover:bg-brass-dark disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send reply"}
      </button>
      {status === "sent" && (
        <p className="mt-2 font-outfit text-sm text-brass">Reply sent.</p>
      )}
      {status === "error" && (
        <p className="mt-2 font-outfit text-sm text-muted">
          Could not send reply. Try again.
        </p>
      )}
    </form>
  );
}
