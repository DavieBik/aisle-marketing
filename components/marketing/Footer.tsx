import Link from "next/link";
import { Logo } from "@/components/marketing/Logo";
import { Container } from "@/components/ui/Container";
import { appUrl } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-sage bg-cream">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <Logo asLink={false} size="display" />
            <p className="mt-4 font-cormorant text-lg italic text-muted">
              Your wedding&apos;s beautiful home.
            </p>
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
            © 2026 Nuru Technologies Pty Ltd.
          </p>
        </div>
      </Container>
    </footer>
  );
}
