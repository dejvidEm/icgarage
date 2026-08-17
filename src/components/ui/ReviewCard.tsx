import { Star } from "lucide-react";
import type { Review } from "@/data/detailing";
import { cn } from "@/lib/utils/cn";

type ReviewCardProps = {
  review: Review;
  className?: string;
};

export function ReviewCard({ review, className }: ReviewCardProps) {
  return (
    <article
      className={cn(
        "flex h-full min-w-[min(100%,20rem)] flex-col rounded-[var(--radius-card)] bg-[var(--surface)] p-6 sm:p-7",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <div
          className="flex items-center gap-1"
          aria-label={`Hodnotenie ${review.rating} z 5`}
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={cn(
                "size-3.5",
                index < review.rating
                  ? "fill-[var(--accent)] text-[var(--accent)]"
                  : "text-white/20",
              )}
              aria-hidden
            />
          ))}
        </div>
        {review.isDemo ? (
          <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-[0.65rem] uppercase tracking-[0.14em] text-white/45">
            Demo
          </span>
        ) : null}
      </div>
      <blockquote className="mt-5 flex-1 text-[0.975rem] leading-relaxed text-white/70">
        “{review.text}”
      </blockquote>
      <p className="mt-6 text-sm font-semibold text-white">{review.name}</p>
    </article>
  );
}
