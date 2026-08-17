import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleAs?: "h2" | "h3";
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  titleAs: TitleTag = "h2",
  children,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-[var(--accent)]">
          {eyebrow}
        </p>
      ) : null}
      <TitleTag className="text-balance text-[clamp(1.85rem,3.8vw,3rem)] font-extrabold leading-[1.12] tracking-[-0.025em] text-white">
        {title}
      </TitleTag>
      {description ? (
        <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-white/65 sm:text-[1.0625rem]">
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}
