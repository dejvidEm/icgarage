import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { business } from "@/data/business";
import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/layout/Footer";

type LegalPageShellProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function LegalPageShell({
  title,
  description,
  children,
}: LegalPageShellProps) {
  return (
    <>
      <header className="border-b border-white/[0.06] bg-[var(--background)]">
        <Container className="flex h-16 items-center justify-between sm:h-[4.75rem]">
          <Link
            href="/"
            className="inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            aria-label={`${business.name} — domov`}
          >
            <Image
              src={business.logo.src}
              alt={business.logo.alt}
              width={56}
              height={56}
              className="size-12 rounded-full sm:size-14"
              priority
            />
            <span className="text-sm font-semibold text-white/80">
              {business.name}
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm text-white/55 transition-colors hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          >
            Späť na web
          </Link>
        </Container>
      </header>

      <main className="bg-[var(--background)] py-14 sm:py-20">
        <Container className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
            Právne informácie
          </p>
          <h1 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {title}
          </h1>
          <p className="mt-4 text-pretty text-base leading-relaxed text-white/60">
            {description}
          </p>
          <div className="prose-legal mt-10 space-y-8 text-sm leading-relaxed text-white/65 sm:text-[0.975rem]">
            {children}
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="text-lg font-bold text-white">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
