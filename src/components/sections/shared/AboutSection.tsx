import type { ValuePoint } from "@/data/detailing";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type AboutSectionProps = {
  id: string;
  title: string;
  text: string;
  image: { src: string; alt: string };
  values: ReadonlyArray<ValuePoint>;
  accent?: "detailing" | "pneuservis";
  eyebrow?: string;
};

export function AboutSection({
  id,
  title,
  text,
  image,
  values,
  eyebrow = "O nás",
}: AboutSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 bg-[var(--background)] py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative order-2 min-h-[22rem] aspect-[4/5] overflow-hidden rounded-[var(--radius-card)] bg-[var(--surface)] sm:aspect-[5/6] lg:order-1 lg:min-h-[28rem]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image.src}
              alt={image.alt}
              className="absolute inset-0 size-full object-cover object-center"
              loading="eager"
              decoding="async"
            />
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeading eyebrow={eyebrow} title={title} />
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/65 sm:text-[1.0625rem]">
              {text}
            </p>
            <ul className="mt-10 grid gap-4 sm:grid-cols-1">
              {values.map((value, index) => (
                <li
                  key={value.title}
                  className="rounded-[var(--radius-card)] bg-[var(--surface)] p-5"
                >
                  <p className="text-xs font-semibold tracking-[0.18em] text-[var(--accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-base font-bold text-white">
                    {value.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                    {value.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
