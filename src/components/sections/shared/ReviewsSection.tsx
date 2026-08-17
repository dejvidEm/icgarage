import type { Review } from "@/data/detailing";
import { business } from "@/data/business";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { Star } from "lucide-react";

type ReviewsSectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  items: ReadonlyArray<Review>;
};

export function ReviewsSection({
  id,
  title,
  subtitle,
  items,
}: ReviewsSectionProps) {
  const { googleRating, socialLinks } = business;

  return (
    <section
      id={id}
      className="scroll-mt-24 bg-[var(--background)] py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Naši klienti"
            title={title}
            description={subtitle}
          />

          <div className="rounded-[var(--radius-card)] bg-[var(--surface)] px-5 py-4 sm:min-w-[14rem]">
            <div className="flex items-center gap-2">
              <p className="text-3xl font-extrabold tabular-nums text-white">
                {googleRating.value.toFixed(1)}
              </p>
              <div
                className="flex items-center gap-0.5"
                aria-label={`Hodnotenie ${googleRating.value} z 5`}
              >
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="size-3.5 fill-[var(--accent)] text-[var(--accent)]"
                    aria-hidden
                  />
                ))}
              </div>
            </div>
            <p className="mt-1 text-sm text-white/50">
              Na základe {googleRating.count} Google recenzií
            </p>
            {socialLinks.google ? (
              <a
                href={socialLinks.google}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex text-sm font-semibold text-[var(--accent)] transition-colors hover:text-[var(--accent-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              >
                Zobraziť na Google
              </a>
            ) : null}
          </div>
        </div>

        <div className="mt-12 flex gap-4 overflow-x-auto pb-2 sm:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
              className="w-[85%] shrink-0"
            />
          ))}
        </div>

        <div className="mt-12 hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {items.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </Container>
    </section>
  );
}
