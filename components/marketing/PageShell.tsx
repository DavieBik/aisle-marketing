import { cn } from "@/lib/cn";

export function PageShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("pt-20 lg:pt-24", className)}>{children}</div>;
}
