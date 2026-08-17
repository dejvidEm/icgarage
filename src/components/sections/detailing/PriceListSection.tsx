import type { PriceGroup } from "@/data/detailing";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { business } from "@/data/business";
import { cn } from "@/lib/utils/cn";

function formatPrice(value: number): string {
  return `${value} €`;
}

type PriceListSectionProps = {
  id: string;
  title: string;
  description?: string;
  note?: string;
  groups: ReadonlyArray<PriceGroup>;
};

export function PriceListSection({
  id,
  title,
  description,
  note,
  groups,
}: PriceListSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 bg-[var(--background)] py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Cenník"
            title={title}
            description={description}
          />
          <Button href={business.phone.href} className="w-full sm:w-auto lg:mb-1">
            Objednať termín
          </Button>
        </div>

        <div className="mt-12 space-y-10">
          {groups.map((group) => (
            <PriceTable key={group.id} group={group} />
          ))}
        </div>

        {note ? (
          <p className="mt-4 text-xs text-white/35">{note}</p>
        ) : null}

        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/45">
          Ceny sú orientačné. Pri silne znečistenom vozidle alebo špecifických
          požiadavkách cenu upresníme pred začatím prác.
        </p>
      </Container>
    </section>
  );
}

function PriceTable({ group }: { group: PriceGroup }) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
        {group.title}
      </h3>

      <div className="overflow-hidden rounded-[var(--radius-card)] border border-white/[0.06] bg-[var(--surface)]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[36rem] border-collapse text-left">
            <thead>
              <tr className="border-b border-white/[0.08] bg-[var(--surface-elevated)]">
                <th
                  scope="col"
                  className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/45 sm:px-7"
                >
                  Služba
                </th>
                <th
                  scope="col"
                  className="w-[7.5rem] px-4 py-4 text-right text-xs font-semibold uppercase tracking-[0.16em] text-white/45 sm:w-[9rem] sm:px-7"
                >
                  Auto
                </th>
                <th
                  scope="col"
                  className="w-[7.5rem] px-4 py-4 text-right text-xs font-semibold uppercase tracking-[0.16em] text-white/45 sm:w-[9rem] sm:px-7"
                >
                  SUV
                </th>
              </tr>
            </thead>
            <tbody>
              {group.items.map((item, index) => (
                <tr
                  key={item.id}
                  className={cn(
                    "border-b border-white/[0.05] last:border-b-0",
                    index % 2 === 1 && "bg-white/[0.02]",
                  )}
                >
                  <th
                    scope="row"
                    className="px-5 py-4 text-left text-[0.95rem] font-medium text-white/90 sm:px-7 sm:text-base"
                  >
                    {item.name}
                    {item.note ? (
                      <span className="mt-1 block text-xs font-normal text-white/40">
                        {item.note}
                      </span>
                    ) : null}
                  </th>
                  <td className="whitespace-nowrap px-4 py-4 text-right sm:px-7">
                    <span className="text-base font-extrabold tabular-nums tracking-tight text-[var(--accent)] sm:text-lg">
                      {formatPrice(item.car)}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-right sm:px-7">
                    <span className="text-base font-extrabold tabular-nums tracking-tight text-[var(--accent)] sm:text-lg">
                      {formatPrice(item.suv)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
