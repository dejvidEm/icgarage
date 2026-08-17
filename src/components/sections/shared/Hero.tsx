"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils/cn";

type HeroProps = {
  headline: string;
  supporting: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  image: { src: string; alt: string };
  accent?: "detailing" | "pneuservis";
  eyebrow?: string;
};

export function Hero({
  headline,
  supporting,
  primaryCta,
  secondaryCta,
  image,
  eyebrow,
}: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    const id = window.setTimeout(update, 0);
    media.addEventListener("change", update);
    return () => {
      window.clearTimeout(id);
      media.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setRevealed(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const onScroll = () => {
      const node = sectionRef.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const height = node.offsetHeight || 1;
      const raw = Math.min(Math.max(-rect.top / height, 0), 1);
      setProgress(raw);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reducedMotion]);

  const imageScale = reducedMotion ? 1 : 1 + progress * 0.04;
  const contentY = reducedMotion ? 0 : progress * 40;
  const contentOpacity = reducedMotion ? 1 : 1 - progress * 0.5;

  return (
    <section
      ref={sectionRef}
      className="relative isolate min-h-[100svh] overflow-hidden bg-[var(--background)]"
    >
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 will-change-transform"
          style={{
            transform: `scale(${imageScale})`,
            transition: reducedMotion ? undefined : "transform 80ms linear",
          }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgb(17_16_19_/_0.92)_0%,rgb(17_16_19_/_0.55)_42%,rgb(17_16_19_/_0.35)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-black/30" />
      </div>

      <Container className="flex min-h-[100svh] flex-col justify-center pb-24 pt-28 sm:pb-28 sm:pt-32">
        <div
          className={cn(
            "max-w-2xl transition-[opacity,transform] duration-700 ease-out",
            revealed ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
          style={{
            transform: `translate3d(0, ${contentY}px, 0)`,
            opacity: Math.max(contentOpacity, 0),
          }}
        >
          {eyebrow ? (
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-balance text-[clamp(2.5rem,6.5vw,4.75rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-white">
            {headline}
          </h1>
          <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
            {supporting}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={primaryCta.href} size="lg">
              {primaryCta.label}
              <ArrowRight className="size-4" aria-hidden />
            </Button>
            <Button href={secondaryCta.href} variant="outline" size="lg">
              {secondaryCta.label}
            </Button>
          </div>
        </div>

        <a
          href="#obsah"
          className={cn(
            "absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/45 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]",
            reducedMotion ? "opacity-70" : "animate-soft-bounce",
          )}
          aria-label="Posunúť na obsah"
        >
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]">
            Ďalej
          </span>
          <ChevronDown className="size-4" aria-hidden />
        </a>
      </Container>
    </section>
  );
}
