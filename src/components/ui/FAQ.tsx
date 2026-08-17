import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/data/detailing";
import { cn } from "@/lib/utils/cn";

type FAQProps = {
  items: ReadonlyArray<FaqItem>;
  className?: string;
};

export function FAQ({ items, className }: FAQProps) {
  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item, index) => (
        <details
          key={item.id}
          className="group rounded-[var(--radius-card)] bg-[var(--surface)] open:bg-[var(--surface-elevated)]"
          open={index === 0}
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-left marker:content-none sm:px-6 [&::-webkit-details-marker]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--accent)]">
            <span className="text-base font-semibold text-white sm:text-lg">
              {item.question}
            </span>
            <ChevronDown
              className="size-5 shrink-0 text-white/45 transition-transform duration-300 group-open:rotate-180 group-open:text-[var(--accent)]"
              aria-hidden
            />
          </summary>
          <p className="max-w-3xl px-5 pb-5 text-sm leading-relaxed text-white/60 sm:px-6 sm:text-[0.975rem]">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
