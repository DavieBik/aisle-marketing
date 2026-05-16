import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  asLink?: boolean;
  size?: "header" | "display";
};

export function Logo({
  className,
  asLink = true,
  size = "header",
}: LogoProps) {
  const theAppSize = size === "display" ? "text-lg" : "text-base";
  const aisleSize =
    size === "display" ? "text-4xl leading-none" : "text-2xl leading-none";

  const mark = (
    <span
      className={cn(
        "font-cormorant italic text-brass-dark inline-flex items-baseline gap-1",
        className
      )}
    >
      <span className={theAppSize}>The</span>
      <span className={aisleSize}>Aisle</span>
      <span className={theAppSize}>App</span>
    </span>
  );

  if (!asLink) return mark;

  return (
    <Link href="/" className="inline-block transition-opacity hover:opacity-80">
      {mark}
    </Link>
  );
}
