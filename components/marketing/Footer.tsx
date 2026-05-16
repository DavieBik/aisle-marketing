"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/marketing/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { appUrl } from "@/lib/constants";

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 8c-2 0-3.5 1.2-3.5 3.5 0 1.5.7 2.3 1.5 2.8-.2.7-.6 2.4-.7 2.8 0 0 .5.1 1.5-1 1 .7 2.2 1.1 3.5 1.1 2.8 0 5-2.2 5-5.2S14.8 8 12 8z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  async function handleNewsletter(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <footer className="border-t border-sage bg-cream">
      <Container className="py-16 lg:py-20">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-cormorant text-2xl text-ink">Notes from The Aisle App</p>
          <p className="mt-2 font-outfit text-sm text-muted">
            Occasional notes on weddings, beautifully kept.
          </p>
          <form
            onSubmit={handleNewsletter}
            className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full rounded-full border border-sage-dark/40 bg-ivory px-5 py-3 font-outfit text-sm text-ink placeholder:text-muted/70 focus:border-brass focus:outline-none sm:max-w-xs"
            />
            <Button type="submit" className="shrink-0">
              {status === "loading" ? "Subscribing…" : "Subscribe"}
            </Button>
          </form>
          {status === "success" && (
            <p className="mt-3 font-outfit text-sm text-brass">
              Thank you. Check your inbox to confirm.
            </p>
          )}
          {status === "error" && (
            <p className="mt-3 font-outfit text-sm text-muted">
              Something went wrong. Please try again.
            </p>
          )}
        </div>

        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <Logo asLink={false} />
            <p className="mt-4 font-cormorant text-lg italic text-muted">
              Your wedding&apos;s beautiful home.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://instagram.com"
                className="text-brass transition-colors hover:text-brass-dark"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://pinterest.com"
                className="text-brass transition-colors hover:text-brass-dark"
                aria-label="Pinterest"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PinterestIcon />
              </a>
            </div>
          </div>

          <div>
            <p className="mb-4 font-outfit text-xs font-medium uppercase tracking-widest text-brass">
              Product
            </p>
            <ul className="space-y-3 font-outfit text-sm text-ink">
              <li>
                <Link href="/features" className="hover:text-brass">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-brass">
                  Pricing
                </Link>
              </li>
              <li>
                <a href={appUrl("/sign-in")} className="hover:text-brass">
                  Sign in
                </a>
              </li>
              <li>
                <a href={appUrl("/sign-up")} className="hover:text-brass">
                  Get started
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-4 font-outfit text-xs font-medium uppercase tracking-widest text-brass">
              Company
            </p>
            <ul className="space-y-3 font-outfit text-sm text-ink">
              <li>
                <Link href="/story" className="hover:text-brass">
                  Story
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brass">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-4 font-outfit text-xs font-medium uppercase tracking-widest text-brass">
              Legal
            </p>
            <ul className="space-y-3 font-outfit text-sm text-ink">
              <li>
                <Link href="/privacy" className="hover:text-brass">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-brass">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-brass">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-sage pt-8 text-center">
          <p className="font-outfit text-xs leading-relaxed text-muted">
            © 2026 Nuru Technologies Pty Ltd. Made with care in Melbourne, for
            couples everywhere.
          </p>
        </div>
      </Container>
    </footer>
  );
}
