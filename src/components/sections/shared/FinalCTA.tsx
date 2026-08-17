import { ArrowRight } from "lucide-react";
import { business } from "@/data/business";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

type FinalCTAProps = {
  title: string;
  text: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function FinalCTA({
  title,
  text,
  primaryCta = {
    label: "Zavolať",
    href: business.phone.href,
  },
  secondaryCta = business.email
    ? {
        label: "Napísať e-mail",
        href: business.email.href,
      }
    : business.socialLinks.instagram
      ? {
          label: "Instagram",
          href: business.socialLinks.instagram,
        }
      : undefined,
}: FinalCTAProps) {
  return (
    <section className="bg-[var(--background)] py-16 sm:py-20">
      <Container>
        <div className="rounded-[var(--radius-card)] bg-[var(--surface)] px-6 py-12 sm:px-10 sm:py-14 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-14">
          <div className="max-w-2xl">
            <h2 className="text-balance text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold leading-[1.12] tracking-[-0.02em] text-white">
              {title}
            </h2>
            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-white/60">
              {text}
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
            <Button href={primaryCta.href} size="lg">
              {primaryCta.label}
              <ArrowRight className="size-4" aria-hidden />
            </Button>
            {secondaryCta ? (
              <Button href={secondaryCta.href} variant="secondary" size="lg">
                {secondaryCta.label}
              </Button>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
