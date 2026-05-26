import Script from "next/script";
import { AdminShell } from "@/components/admin/AdminShell";

function buildPlausibleEmbedSrc(shareUrl: string) {
  const url = new URL(shareUrl);
  url.searchParams.set("embed", "true");
  url.searchParams.set("theme", "light");
  url.searchParams.set("background", "transparent");
  return url.toString();
}

export default function AdminTrafficPage() {
  const shareUrl = process.env.NEXT_PUBLIC_PLAUSIBLE_SHARE_URL;
  const embedSrc = shareUrl ? buildPlausibleEmbedSrc(shareUrl) : null;

  return (
    <AdminShell title="Traffic" wide>
      {!embedSrc ? (
        <p className="px-6 font-outfit text-sm text-muted">
          Set <code className="text-ink">NEXT_PUBLIC_PLAUSIBLE_SHARE_URL</code>{" "}
          in your environment to embed the Plausible dashboard.
        </p>
      ) : (
        <div className="relative w-full">
          <a
            href={shareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-6 top-4 z-10 rounded-full bg-ivory/95 px-4 py-2 font-outfit text-xs text-brass shadow-sm ring-1 ring-sage/60 hover:text-brass-dark"
          >
            Open in Plausible
          </a>
          <iframe
            src={embedSrc}
            title="Plausible analytics"
            {...{ "plausible-embed": "" }}
            scrolling="no"
            frameBorder={0}
            loading="lazy"
            style={{
              width: "1px",
              minWidth: "100%",
              height: "1600px",
            }}
          />
          <Script
            id="plausible-embed-host"
            src="https://plausible.io/js/embed.host.js"
            strategy="afterInteractive"
          />
        </div>
      )}
    </AdminShell>
  );
}
