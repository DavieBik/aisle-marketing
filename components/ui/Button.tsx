import Link from "next/link";
import { cn } from "@/lib/cn";

const base =
  "inline-flex items-center justify-center rounded-full px-6 py-3 font-outfit text-sm font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass";

type ButtonVariant = "primary" | "ghost" | "text";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-brass text-cream hover:bg-brass-dark",
  ghost:
    "border border-brass text-brass hover:bg-cream/50 bg-transparent",
  text: "text-brass underline-offset-4 hover:text-brass-dark hover:underline px-0 py-0",
};

type ButtonProps = {
  variant?: ButtonVariant;
  href?: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
  "data-plausible-event"?: string;
};

export function Button({
  variant = "primary",
  href,
  external,
  className,
  children,
  type = "button",
  onClick,
  "data-plausible-event": plausibleEvent,
}: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (href) {
    const isExternal = external ?? href.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          data-plausible-event={plausibleEvent}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={classes}
        data-plausible-event={plausibleEvent}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      data-plausible-event={plausibleEvent}
    >
      {children}
    </button>
  );
}
