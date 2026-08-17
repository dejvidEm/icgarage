import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils/cn";

type ServiceSwitcherProps = {
  href: string;
  label: string;
  className?: string;
};

export function ServiceSwitcher({
  href,
  label,
  className,
}: ServiceSwitcherProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-1.5 text-sm font-medium text-white/55 transition-colors hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]",
        className,
      )}
    >
      {label}
      <ArrowRight className="size-3.5" aria-hidden />
    </Link>
  );
}
