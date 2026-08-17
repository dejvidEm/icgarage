"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/data/detailing";
import { cn } from "@/lib/utils/cn";

type FAQProps = {
  items: ReadonlyArray<FaqItem>;
  className?: string;
};

export function FAQ({ items, className }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div
            key={item.id}
            className={cn(
              "rounded-[var(--radius-card)] bg-[var(--surface)] transition-colors duration-300",
              isOpen && "bg-[var(--surface-elevated)]",
            )}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${item.id}`}
              id={`faq-trigger-${item.id}`}
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--accent)] sm:px-6"
            >
              <span className="text-base font-semibold text-white sm:text-lg">
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  "size-5 shrink-0 transition-[transform,color] duration-300 ease-out",
                  isOpen
                    ? "rotate-180 text-[var(--accent)]"
                    : "text-white/45",
                )}
                aria-hidden
              />
            </button>

            <div
              id={`faq-panel-${item.id}`}
              role="region"
              aria-labelledby={`faq-trigger-${item.id}`}
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-3xl px-5 pb-5 text-sm leading-relaxed text-white/60 sm:px-6 sm:text-[0.975rem]">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
