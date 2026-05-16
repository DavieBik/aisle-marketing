export const APP_URL = "https://app.theaisleapp.com";
export const APP_SIGN_IN = `${APP_URL}/sign-in`;
export const APP_SIGN_UP = `${APP_URL}/sign-up`;

export const SITE_URL = "https://theaisleapp.com";

export const NAV_LINKS = [
  { href: "/features", label: "Features" },
  { href: "/story", label: "Story" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
] as const;

export const UTM_PARAMS = "utm_source=theaisleapp&utm_medium=marketing";

export function appUrl(path: string, withUtm = true): string {
  const base = `${APP_URL}${path.startsWith("/") ? path : `/${path}`}`;
  return withUtm ? `${base}?${UTM_PARAMS}` : base;
}
