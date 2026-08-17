import { Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { business, getFullAddress } from "@/data/business";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LazyMap } from "@/components/ui/LazyMap";

type LocationSectionProps = {
  id?: string;
};

export function LocationSection({ id = "kontakt" }: LocationSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 bg-[var(--background)] py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Kontakt"
          title="Kde nás nájdete"
          description="Jedna prevádzka pre detailing aj pneuservis. Objednajte sa vopred a príďte na dohodnutý čas."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-2 lg:gap-5">
          <div className="rounded-[var(--radius-card)] bg-[var(--surface)] p-6 sm:p-8">
            <h3 className="text-2xl font-extrabold tracking-tight text-white">
              {business.name}
            </h3>
            <p className="mt-1 text-sm text-white/45">{business.tagline}</p>

            <address className="mt-8 space-y-5 not-italic">
              <div className="flex gap-3">
                <MapPin
                  className="mt-0.5 size-4 shrink-0 text-[var(--accent)]"
                  aria-hidden
                />
                <div>
                  <p className="text-sm font-semibold text-white">Adresa</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/60">
                    {getFullAddress()}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Phone
                  className="mt-0.5 size-4 shrink-0 text-[var(--accent)]"
                  aria-hidden
                />
                <div>
                  <p className="text-sm font-semibold text-white">Telefón</p>
                  <a
                    href={business.phone.href}
                    className="mt-1 inline-block text-sm text-white/70 transition-colors hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                  >
                    {business.phone.display}
                  </a>
                </div>
              </div>

              {business.email ? (
                <div className="flex gap-3">
                  <Mail
                    className="mt-0.5 size-4 shrink-0 text-[var(--accent)]"
                    aria-hidden
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">E-mail</p>
                    <a
                      href={business.email.href}
                      className="mt-1 inline-block text-sm text-white/70 transition-colors hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                    >
                      {business.email.display}
                    </a>
                  </div>
                </div>
              ) : null}

              <div className="flex gap-3">
                <Clock
                  className="mt-0.5 size-4 shrink-0 text-[var(--accent)]"
                  aria-hidden
                />
                <div>
                  <p className="text-sm font-semibold text-white">
                    Otváracie hodiny
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {business.openingHours.map((row) => (
                      <li
                        key={row.days}
                        className="flex flex-wrap justify-between gap-x-4 gap-y-1 text-sm text-white/55"
                      >
                        <span>{row.days}</span>
                        <span className="text-white/75">{row.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </address>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                href={business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="md"
              >
                <Navigation className="size-4" aria-hidden />
                Navigovať
              </Button>
              <Button href={business.phone.href} variant="secondary" size="md">
                <Phone className="size-4" aria-hidden />
                Zavolať
              </Button>
            </div>
          </div>

          <div className="min-h-[20rem] overflow-hidden rounded-[var(--radius-card)] bg-[var(--surface)] sm:min-h-[24rem] lg:min-h-full">
            <LazyMap className="h-full min-h-[20rem] w-full sm:min-h-[24rem]" />
          </div>
        </div>
      </Container>
    </section>
  );
}
