"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/marketing/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { NAV_LINKS, APP_URL, UTM_PARAMS, appUrl } from "@/lib/constants";
import { cn } from "@/lib/cn";
import { useSessionStatus } from "@/hooks/useSessionStatus";

export function Header() {
  const pathname = usePathname();
  const heroMode = pathname === "/";
  const session = useSessionStatus();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const authenticated = session === "authenticated";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const solid = scrolled || !heroMode;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          solid
            ? "border-b border-sage/60 bg-cream/95 backdrop-blur-sm"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <Container className="flex h-16 items-center justify-between lg:h-20">
          <Logo />

          <nav
            className="hidden items-center gap-10 lg:flex"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-outfit text-sm text-ink transition-colors hover:text-brass"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            {authenticated ? (
              <Button
                href={`${APP_URL}?${UTM_PARAMS}`}
                className="py-2.5 text-sm"
              >
                Open the app
              </Button>
            ) : (
              <>
                <Button
                  variant="ghost"
                  href={appUrl("/sign-in")}
                  className="py-2.5 text-sm"
                  data-plausible-event="cta_signin_clicked"
                >
                  Sign in
                </Button>
                <Button
                  href={appUrl("/sign-up")}
                  className="py-2.5 text-sm"
                  data-plausible-event="cta_get_started_clicked"
                >
                  Get started
                </Button>
              </>
            )}
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="sr-only">Menu</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="text-ink"
              strokeWidth="1.5"
            >
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M4 8h16M4 16h16" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </Container>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-sage transition-transform duration-300 lg:hidden",
          menuOpen ? "translate-y-0" : "-translate-y-full pointer-events-none"
        )}
        aria-hidden={!menuOpen}
      >
        <div className="flex flex-1 flex-col items-center justify-center gap-8 pt-20">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-cormorant text-4xl text-ink"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-8 flex flex-col items-center gap-4">
            {authenticated ? (
              <Button
                href={`${APP_URL}?${UTM_PARAMS}`}
                onClick={() => setMenuOpen(false)}
              >
                Open the app
              </Button>
            ) : (
              <>
                <Button
                  variant="ghost"
                  href={appUrl("/sign-in")}
                  onClick={() => setMenuOpen(false)}
                >
                  Sign in
                </Button>
                <Button
                  href={appUrl("/sign-up")}
                  onClick={() => setMenuOpen(false)}
                >
                  Get started
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

