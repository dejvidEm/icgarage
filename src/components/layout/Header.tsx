"use client";

import { useEffect, useId, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { business } from "@/data/business";
import { Button } from "@/components/ui/Button";
import { ServiceSwitcher } from "@/components/navigation/ServiceSwitcher";
import { cn } from "@/lib/utils/cn";

export type NavItem = {
  label: string;
  href: string;
};

type SiteHeaderProps = {
  nav: ReadonlyArray<NavItem>;
  primaryCta: { label: string; href: string };
  secondaryService: { label: string; href: string };
};

export function SiteHeader({
  nav,
  primaryCta,
  secondaryService,
}: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter] duration-300",
        scrolled || open
          ? "bg-[rgb(17_16_19_/_0.88)] backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-[80rem] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center text-white transition-colors hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Zavrieť menu" : "Otvoriť menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>

          <Link
            href="/"
            className="relative z-10 flex shrink-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            aria-label={`${business.name} — domov`}
          >
            <Image
              src={business.logo.src}
              alt={business.logo.alt}
              width={48}
              height={48}
              className="size-10 rounded-full sm:size-11"
              priority
            />
          </Link>
        </div>

        <nav
          aria-label="Hlavná navigácia"
          className="hidden items-center gap-6 xl:gap-8 lg:flex"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.8125rem] font-medium text-white/80 transition-colors hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <ServiceSwitcher
            href={secondaryService.href}
            label={secondaryService.label}
          />
          <Button href={primaryCta.href} size="sm" variant="secondary">
            {primaryCta.label}
          </Button>
        </div>

        <div className="lg:hidden">
          <Button href={primaryCta.href} size="sm" variant="secondary" className="hidden sm:inline-flex">
            {primaryCta.label}
          </Button>
        </div>
      </div>

      <div
        id={menuId}
        hidden={!open}
        className={cn(
          "border-t border-white/[0.06] bg-[rgb(17_16_19_/_0.97)] backdrop-blur-md lg:hidden",
          !open && "hidden",
        )}
      >
        <nav
          aria-label="Mobilná navigácia"
          className="mx-auto flex max-w-[80rem] flex-col gap-1 px-4 py-5 sm:px-6"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-3 text-base font-medium text-white/90 transition-colors hover:bg-white/5 hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-2 border-t border-white/[0.06] pt-4">
            <ServiceSwitcher
              href={secondaryService.href}
              label={secondaryService.label}
              className="px-3 py-2"
            />
          </div>
          <Button
            href={primaryCta.href}
            className="mt-3 w-full"
            onClick={() => setOpen(false)}
          >
            {primaryCta.label}
          </Button>
        </nav>
      </div>
    </header>
  );
}
