import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  asLink?: boolean;
};

export function Logo({ className, asLink = true }: LogoProps) {
  const mark = (
    <span
      className={cn(
        "font-cormorant text-2xl leading-none text-ink",
        className
      )}
    >
      The <span className="italic">Aisle</span> App
    </span>
  );

  if (!asLink) return mark;

  return (
    <Link href="/" className="inline-block transition-opacity hover:opacity-80">
      {mark}
    </Link>
  );
}
