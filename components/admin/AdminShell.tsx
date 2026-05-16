import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const NAV = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/inbox", label: "Inbox" },
  { href: "/admin/content", label: "Content" },
  { href: "/admin/traffic", label: "Traffic" },
] as const;

export async function AdminShell({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  const session = await getServerSession(authOptions);

  return (
    <div className="min-h-screen bg-cream">
      <header className="border-b border-sage/50 bg-ivory">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <div>
            <p className="font-outfit text-[11px] font-medium uppercase tracking-widest text-brass">
              The Aisle App
            </p>
            <p className="font-cormorant text-xl text-ink">Marketing admin</p>
          </div>
          <nav className="flex flex-wrap items-center gap-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-outfit text-sm text-muted hover:text-brass"
              >
                {item.label}
              </Link>
            ))}
            {session?.user?.email && (
              <span className="hidden font-outfit text-xs text-muted sm:inline">
                {session.user.email}
              </span>
            )}
            <Link
              href="/api/auth/signout"
              className="font-outfit text-sm text-brass hover:text-brass-dark"
            >
              Sign out
            </Link>
          </nav>
        </div>
      </header>
      <div className="mx-auto max-w-6xl px-6 py-10">
        {title && (
          <h1 className="mb-8 font-cormorant text-4xl text-ink">{title}</h1>
        )}
        {children}
      </div>
    </div>
  );
}
