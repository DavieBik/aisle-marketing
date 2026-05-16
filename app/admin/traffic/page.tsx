import { AdminShell } from "@/components/admin/AdminShell";

export default function AdminTrafficPage() {
  const embedUrl = process.env.NEXT_PUBLIC_PLAUSIBLE_SHARE_URL;

  return (
    <AdminShell title="Traffic">
      {!embedUrl ? (
        <p className="font-outfit text-sm text-muted">
          Set <code className="text-ink">NEXT_PUBLIC_PLAUSIBLE_SHARE_URL</code>{" "}
          in your environment to embed the Plausible dashboard.
        </p>
      ) : (
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-ivory ring-1 ring-sage/60">
          <a
            href={embedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-4 top-4 z-10 rounded-full bg-ivory/95 px-4 py-2 font-outfit text-xs text-brass shadow-sm ring-1 ring-sage/60 hover:text-brass-dark"
          >
            Open in Plausible
          </a>
          <iframe
            src={embedUrl}
            title="Plausible analytics"
            className="h-full w-full border-0"
            loading="lazy"
          />
        </div>
      )}
    </AdminShell>
  );
}
