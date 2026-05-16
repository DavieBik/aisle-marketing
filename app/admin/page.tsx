import { AdminShell } from "@/components/admin/AdminShell";
import { createServiceSupabase } from "@/lib/supabase";
import Link from "next/link";

async function getUnreadCount(): Promise<number> {
  const supabase = createServiceSupabase();
  if (!supabase) return 0;
  const { count } = await supabase
    .from("contact_submissions")
    .select("*", { count: "exact", head: true })
    .eq("status", "unread");
  return count ?? 0;
}

const CARDS = [
  {
    href: "/admin/inbox",
    title: "Inbox",
    description: "Contact form submissions and replies",
  },
  {
    href: "/admin/content",
    title: "Content",
    description: "Hero and testimonials on the home page",
  },
  {
    href: "/admin/traffic",
    title: "Traffic",
    description: "Plausible analytics dashboard",
  },
  {
    href: "https://app.theaisleapp.com",
    title: "App signups",
    description: "Couple signups live in the main app",
    external: true,
  },
] as const;

export default async function AdminDashboardPage() {
  const unread = await getUnreadCount();

  return (
    <AdminShell title="Dashboard">
      <div className="mb-10 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl bg-ivory p-6 ring-1 ring-sage/60">
          <p className="font-outfit text-xs uppercase tracking-widest text-brass">
            Unread inbox
          </p>
          <p className="mt-2 font-cormorant text-4xl text-ink">{unread}</p>
        </div>
        <div className="rounded-2xl bg-ivory p-6 ring-1 ring-sage/60">
          <p className="font-outfit text-xs uppercase tracking-widest text-brass">
            Recent signups
          </p>
          <p className="mt-2 font-outfit text-sm text-muted">
            See the main app dashboard
          </p>
        </div>
        <div className="rounded-2xl bg-ivory p-6 ring-1 ring-sage/60">
          <p className="font-outfit text-xs uppercase tracking-widest text-brass">
            Today&apos;s visitors
          </p>
          <p className="mt-2 font-outfit text-sm text-muted">
            <Link href="/admin/traffic" className="text-brass hover:underline">
              Open traffic
            </Link>
          </p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {CARDS.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            {...("external" in card && card.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="rounded-2xl bg-ivory p-8 ring-1 ring-sage/60 transition-shadow hover:shadow-[0_4px_24px_rgba(92,74,58,0.08)]"
          >
            <h2 className="font-cormorant text-2xl text-ink">{card.title}</h2>
            <p className="mt-2 font-outfit text-sm text-muted">
              {card.description}
            </p>
          </Link>
        ))}
      </div>
    </AdminShell>
  );
}
