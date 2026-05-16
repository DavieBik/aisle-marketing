import { AdminShell } from "@/components/admin/AdminShell";
import { createServiceSupabase, type ContactSubmission } from "@/lib/supabase";
import Link from "next/link";

async function getSubmissions(): Promise<ContactSubmission[]> {
  const supabase = createServiceSupabase();
  if (!supabase) return [];
  const { data } = await supabase
    .from("contact_submissions")
    .select("*")
    .order("created_at", { ascending: false });
  return (data ?? []) as ContactSubmission[];
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("en-AU", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export default async function AdminInboxPage() {
  const submissions = await getSubmissions();

  return (
    <AdminShell title="Inbox">
      {submissions.length === 0 ? (
        <p className="font-outfit text-sm text-muted">No submissions yet.</p>
      ) : (
        <ul className="divide-y divide-sage/50 rounded-2xl bg-ivory ring-1 ring-sage/60">
          {submissions.map((s) => (
            <li key={s.id}>
              <Link
                href={`/admin/inbox/${s.id}`}
                className="flex flex-col gap-1 px-6 py-4 transition-colors hover:bg-cream/80 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-outfit text-sm font-medium text-ink">
                    {s.name}{" "}
                    <span className="font-normal text-muted">&lt;{s.email}&gt;</span>
                  </p>
                  <p className="font-outfit text-sm text-muted">
                    {s.subject || "(no subject)"}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`rounded-full px-2 py-0.5 font-outfit text-[11px] uppercase ${
                      s.status === "unread"
                        ? "bg-brass/20 text-brass-dark"
                        : "bg-sage/40 text-muted"
                    }`}
                  >
                    {s.status}
                  </span>
                  <span className="font-outfit text-xs text-muted">
                    {formatDate(s.created_at)}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </AdminShell>
  );
}
