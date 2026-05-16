import { AdminShell } from "@/components/admin/AdminShell";
import { ReplyForm } from "@/components/admin/ReplyForm";
import { createServiceSupabase, type ContactSubmission, type Reply } from "@/lib/supabase";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getSubmission(id: string): Promise<ContactSubmission | null> {
  const supabase = createServiceSupabase();
  if (!supabase) return null;
  const { data } = await supabase
    .from("contact_submissions")
    .select("*")
    .eq("id", id)
    .maybeSingle();
  return data as ContactSubmission | null;
}

async function getReplies(submissionId: string): Promise<Reply[]> {
  const supabase = createServiceSupabase();
  if (!supabase) return [];
  const { data } = await supabase
    .from("replies")
    .select("*")
    .eq("submission_id", submissionId)
    .order("created_at", { ascending: true });
  return (data ?? []) as Reply[];
}

async function markRead(id: string) {
  const supabase = createServiceSupabase();
  if (!supabase) return;
  await supabase
    .from("contact_submissions")
    .update({
      status: "read",
      read_at: new Date().toISOString(),
    })
    .eq("id", id)
    .eq("status", "unread");
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("en-AU", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export default async function AdminInboxDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const submission = await getSubmission(id);
  if (!submission) notFound();

  if (submission.status === "unread") {
    await markRead(id);
  }

  const replies = await getReplies(id);

  return (
    <AdminShell>
      <Link
        href="/admin/inbox"
        className="font-outfit text-sm text-brass hover:text-brass-dark"
      >
        ← Back to inbox
      </Link>
      <article className="mt-6 rounded-2xl bg-ivory p-8 ring-1 ring-sage/60">
        <p className="font-outfit text-xs uppercase tracking-widest text-brass">
          {submission.status} · {formatDate(submission.created_at)}
        </p>
        <h1 className="mt-2 font-cormorant text-3xl text-ink">
          {submission.subject || "(no subject)"}
        </h1>
        <p className="mt-2 font-outfit text-sm text-muted">
          From {submission.name} &lt;{submission.email}&gt;
        </p>
        <p className="mt-6 whitespace-pre-wrap font-outfit text-[15px] leading-relaxed text-ink">
          {submission.message}
        </p>
      </article>

      {replies.length > 0 && (
        <div className="mt-8 space-y-4">
          <h2 className="font-cormorant text-2xl text-ink">Replies sent</h2>
          {replies.map((reply) => (
            <div
              key={reply.id}
              className="rounded-2xl border border-sage/50 bg-cream/50 p-6"
            >
              <p className="font-outfit text-xs text-muted">
                {reply.sent_by} · {formatDate(reply.created_at)}
              </p>
              <p className="mt-3 whitespace-pre-wrap font-outfit text-sm text-ink">
                {reply.body}
              </p>
            </div>
          ))}
        </div>
      )}

      <ReplyForm submissionId={id} />
    </AdminShell>
  );
}
