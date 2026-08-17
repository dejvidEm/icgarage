import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ServiceItem } from "@/data/detailing";
import { cn } from "@/lib/utils/cn";

type ServiceCardProps = {
  service: ServiceItem;
  accent?: "detailing" | "pneuservis";
  className?: string;
  index?: number;
};

export function ServiceCard({
  service,
  className,
  index = 0,
}: ServiceCardProps) {
  return (
    <article
      id={service.id}
      className={cn(
        "group relative flex h-full flex-col rounded-[var(--radius-card)] bg-[var(--surface)] p-6 transition-[background-color,transform] duration-300 sm:p-7",
        "hover:bg-[var(--surface-elevated)]",
        className,
      )}
    >
      <span className="text-xs font-semibold tracking-[0.18em] text-[var(--accent)]">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mt-5 text-lg font-bold tracking-tight text-white sm:text-xl">
        {service.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60 sm:text-[0.9375rem]">
        {service.description}
      </p>

      {typeof service.priceFrom === "number" ? (
        <p className="mt-5 text-sm font-semibold tracking-wide text-[var(--accent)]">
          od {service.priceFrom} €
        </p>
      ) : null}

      <Link
        href={service.href}
        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
      >
        Viac informácií
        <span className="h-px w-8 bg-white/35 transition-[width,background-color] duration-300 group-hover:w-12 group-hover:bg-[var(--accent)]" />
        <ArrowRight className="size-4" aria-hidden />
      </Link>
    </article>
  );
}
