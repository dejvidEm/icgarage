import Image from "next/image";
import Link from "next/link";
import { business, getFullAddress } from "@/data/business";
import { Container } from "@/components/ui/Container";

const detailingLinks = [
  { label: "O nás", href: "/detailing#o-nas" },
  { label: "Služby", href: "/detailing#sluzby" },
  { label: "Cenník", href: "/detailing#cennik" },
  { label: "Galéria", href: "/detailing#galeria" },
  { label: "Kontakt", href: "/detailing#kontakt" },
] as const;

const pneuservisLinks = [
  { label: "Služby", href: "/pneuservis#sluzby" },
  { label: "Kontakt", href: "/pneuservis#kontakt" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();
  const socialEntries = Object.entries(business.socialLinks).filter(
    (entry): entry is [string, string] => typeof entry[1] === "string",
  );

  return (
    <footer className="border-t border-white/[0.06] bg-[#0c0b0e]">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            >
              <Image
                src={business.logo.src}
                alt={business.logo.alt}
                width={72}
                height={72}
                className="size-16 rounded-full sm:size-[4.5rem]"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              {business.name} — {business.tagline.toLowerCase()} v{" "}
              {business.city}.
            </p>
            <Link
              href="/"
              className="mt-5 inline-flex text-sm font-semibold text-white/70 transition-colors hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            >
              Detailing / Pneuservis
            </Link>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Detailing
            </p>
            <ul className="mt-4 space-y-2.5">
              {detailingLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/65 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Pneuservis
            </p>
            <ul className="mt-4 space-y-2.5">
              {pneuservisLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/65 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Kontakt
            </p>
            <address className="mt-4 space-y-2.5 not-italic">
              <p>
                <a
                  href={business.phone.href}
                  className="text-sm text-white/65 transition-colors hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                >
                  {business.phone.display}
                </a>
              </p>
              {business.email ? (
                <p>
                  <a
                    href={business.email.href}
                    className="text-sm text-white/65 transition-colors hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                  >
                    {business.email.display}
                  </a>
                </p>
              ) : null}
              <p className="text-sm leading-relaxed text-white/45">
                {getFullAddress()}
              </p>
            </address>
            {socialEntries.length > 0 ? (
              <ul className="mt-5 flex flex-wrap gap-3">
                {socialEntries.map(([key, href]) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm capitalize text-white/45 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                    >
                      {key}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/[0.06] pt-6 text-sm text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.name}. Všetky práva vyhradené.
          </p>
          <p>TODO: IČO / DIČ po doplnení údajov</p>
        </div>
      </Container>
    </footer>
  );
}
