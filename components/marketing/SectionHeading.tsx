import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  titleClassName,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        centered && "mx-auto text-center",
        !centered && "text-left",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-4 font-outfit text-[11px] font-medium uppercase tracking-widest text-brass">
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-cormorant text-ink leading-[1.1]",
          "text-[clamp(2.25rem,5vw,4rem)]",
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-6 font-outfit text-lg leading-relaxed text-muted",
            centered && "mx-auto max-w-2xl",
            !centered && "max-w-2xl",
            "mb-12"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

