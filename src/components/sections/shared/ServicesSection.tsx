import type { ServiceItem } from "@/data/detailing";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";

type ServicesSectionProps = {
  id: string;
  title?: string;
  description?: string;
  services: ReadonlyArray<ServiceItem>;
  accent?: "detailing" | "pneuservis";
};

export function ServicesSection({
  id,
  title = "Služby",
  description = "Vyberte si rozsah podľa stavu vozidla a toho, čo chcete riešiť.",
  services,
}: ServicesSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 bg-[var(--background)] py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <SectionHeading title={title} description={description} />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
