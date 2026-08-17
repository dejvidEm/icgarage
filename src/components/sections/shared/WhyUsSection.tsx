import type { Benefit } from "@/data/detailing";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type WhyUsSectionProps = {
  id: string;
  title: string;
  benefits: ReadonlyArray<Benefit>;
  accent?: "detailing" | "pneuservis";
};

export function WhyUsSection({ id, title, benefits }: WhyUsSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 bg-[var(--background)] py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <SectionHeading title={title} />
        <ol className="mt-12 grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit, index) => (
            <li
              key={benefit.title}
              className="rounded-[var(--radius-card)] bg-[var(--surface)] p-6 sm:p-8"
            >
              <p className="text-xs font-semibold tracking-[0.2em] text-[var(--accent)]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-xl font-bold tracking-tight text-white">
                {benefit.title}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/60">
                {benefit.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
