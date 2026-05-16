export function SpreadsheetIllustration() {
  return (
    <svg viewBox="0 0 80 64" fill="none" className="mx-auto h-16 w-20" aria-hidden>
      <rect x="8" y="8" width="64" height="48" rx="2" stroke="#C9A876" strokeWidth="1" />
      <path d="M8 20h64M24 20v36M40 20v36M56 20v36" stroke="#A8B89A" strokeWidth="0.75" />
      <path d="M14 14h20M14 28h12M14 36h16M14 44h10" stroke="#C9A876" strokeWidth="0.75" />
    </svg>
  );
}

export function ChatIllustration() {
  return (
    <svg viewBox="0 0 80 64" fill="none" className="mx-auto h-16 w-20" aria-hidden>
      <path
        d="M12 16h28c2 0 4 2 4 4v12c0 2-2 4-4 4H20l-6 6v-6H12c-2 0-4-2-4-4V20c0-2 2-4 4-4z"
        stroke="#C9A876"
        strokeWidth="1"
      />
      <path
        d="M36 24h28c2 0 4 2 4 4v8c0 2-2 4-4 4H44l-4 4v-4H36c-2 0-4-2-4-4v-8c0-2 2-4 4-4z"
        stroke="#A8B89A"
        strokeWidth="1"
      />
      <path
        d="M20 44h24c2 0 4 2 4 4v6H24l-4 4v-4h-4c-2 0-4-2-4-4v-6c0-2 2-4 4-4z"
        stroke="#C9A876"
        strokeWidth="0.75"
      />
    </svg>
  );
}

export function EnvelopeIllustration() {
  return (
    <svg viewBox="0 0 80 64" fill="none" className="mx-auto h-16 w-20" aria-hidden>
      <rect x="16" y="12" width="48" height="32" rx="1" stroke="#C9A876" strokeWidth="1" />
      <path d="M16 16l24 16 24-16" stroke="#A8B89A" strokeWidth="0.75" />
      <rect x="20" y="28" width="40" height="24" rx="1" stroke="#A8B89A" strokeWidth="0.75" opacity="0.7" />
      <rect x="24" y="36" width="40" height="24" rx="1" stroke="#C9A876" strokeWidth="0.75" opacity="0.5" />
    </svg>
  );
}

export function FeatureDivider({ variant }: { variant: "flower" | "leaf" | "crescent" }) {
  if (variant === "flower") {
    return (
      <svg width="12" height="24" viewBox="0 0 12 24" fill="none" aria-hidden>
        <path d="M6 2v20M6 8c-2-2-4-1-4 1s2 3 4 1M6 14c2 2 4 1 4-1s-2-3-4-1" stroke="#C9A876" strokeWidth="0.5" />
      </svg>
    );
  }
  if (variant === "leaf") {
    return (
      <svg width="14" height="20" viewBox="0 0 14 20" fill="none" aria-hidden>
        <path d="M7 2c-4 4-5 10-5 16M7 2c4 4 5 10 5 16" stroke="#A8B89A" strokeWidth="0.5" />
        <path d="M7 2v16" stroke="#C9A876" strokeWidth="0.5" />
      </svg>
    );
  }
  return (
    <svg width="16" height="8" viewBox="0 0 16 8" fill="none" aria-hidden>
      <path d="M2 6c4-6 8-6 12 0" stroke="#C9A876" strokeWidth="0.5" />
    </svg>
  );
}
