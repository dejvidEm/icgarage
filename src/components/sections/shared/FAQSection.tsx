import type { FaqItem } from "@/data/detailing";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQ } from "@/components/ui/FAQ";

type FAQSectionProps = {
  id: string;
  title: string;
  items: ReadonlyArray<FaqItem>;
};

export function FAQSection({ id, title, items }: FAQSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 bg-[var(--background)] py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <SectionHeading
            eyebrow="FAQ"
            title={title}
            description="Odpovede na otázky, ktoré dostávame najčastejšie pred objednávkou."
          />
          <FAQ items={items} />
        </div>
      </Container>
    </section>
  );
}
