import Image from "next/image";
import Link from "next/link";
import { business } from "@/data/business";
import { cn } from "@/lib/utils/cn";

type ServicePanel = {
  href: string;
  title: string;
  supporting: string;
  cta: string;
  image: { src: string; alt: string };
  theme?: "detailing" | "pneuservis";
};

const panels: [ServicePanel, ServicePanel] = [
  {
    href: "/detailing",
    title: "DETAILING",
    supporting: "Prémiová starostlivosť o váš automobil.",
    cta: "Vstúpiť",
    image: {
      src: "/images/home/detailing-hero.jpg",
      alt: "Detailing interiéru — čistenie volantu mikrovláknom",
    },
    theme: "detailing",
  },
  {
    href: "/pneuservis",
    title: "PNEUSERVIS",
    supporting: "Profesionálny pneuservis bez zbytočného čakania.",
    cta: "Vstúpiť",
    image: {
      src: "/images/home/pneuservis-hero.jpg",
      alt: "Pneuservis — montáž pneumatiky na stroji",
    },
    theme: "pneuservis",
  },
];

function ServicePanelCard({
  panel,
  priority,
  className,
}: {
  panel: ServicePanel;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={panel.href}
      className={cn(
        "group relative z-0 flex overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--accent)]",
        "transition-[flex-grow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        panel.theme === "pneuservis" && "theme-pneuservis",
        className,
      )}
      aria-label={`${panel.title}: ${panel.cta}`}
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={panel.image.src}
          alt={panel.image.alt}
          fill
          priority={priority}
          sizes="(max-width: 767px) 100vw, 50vw"
          className="object-cover grayscale transition-[transform,filter] duration-700 ease-out group-hover:scale-[1.04] group-hover:grayscale-0 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
        {/* Stronger center overlay so headlines pop */}
        <div className="absolute inset-0 bg-black/58 transition-colors duration-700 ease-out group-hover:bg-black/48" />
        {/* Larger / stronger edge vignettes */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgb(0_0_0_/_0.92)_0%,rgb(0_0_0_/_0.55)_12%,transparent_32%,transparent_68%,rgb(0_0_0_/_0.55)_88%,rgb(0_0_0_/_0.92)_100%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgb(0_0_0_/_0.72)_0%,rgb(0_0_0_/_0.35)_18%,transparent_38%,transparent_68%,rgb(0_0_0_/_0.4)_85%,rgb(0_0_0_/_0.82)_100%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_28%,rgb(0_0_0_/_0.45)_72%,rgb(0_0_0_/_0.85)_100%)]"
        />
        <div
          className={cn(
            "absolute inset-0 opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100",
            panel.theme === "pneuservis"
              ? "bg-[radial-gradient(ellipse_at_center,rgb(59_130_246_/_0.18),transparent_60%)]"
              : "bg-[radial-gradient(ellipse_at_center,rgb(201_162_39_/_0.14),transparent_60%)]",
          )}
        />
      </div>

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center p-6 text-center sm:p-8 md:p-10">
        <div className="mx-auto max-w-md">
          <h2 className="text-[clamp(2.4rem,5.5vw,4.5rem)] font-extrabold tracking-[0.06em] text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.65)]">
            {panel.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xs text-pretty text-sm leading-relaxed text-white/80 sm:text-base">
            {panel.supporting}
          </p>
          <span className="mt-8 inline-flex min-w-[9.5rem] items-center justify-center border border-white/55 px-8 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-[background-color,border-color,color] duration-300 group-hover:border-white group-hover:bg-white group-hover:text-[var(--background)]">
            {panel.cta}
          </span>
        </div>
      </div>
    </Link>
  );
}

export function ServiceSelector() {
  return (
    <div className="relative h-svh max-h-svh w-full overflow-hidden bg-[var(--background)]">
      <h1 className="sr-only">
        {business.name} — vyberte detailing alebo pneuservis
      </h1>

      {/* Panels first */}
      <div className="flex h-full flex-col md:hidden">
        {panels.map((panel, index) => (
          <ServicePanelCard
            key={panel.href}
            panel={panel}
            priority={index === 0}
            className={cn(
              "min-h-0 flex-1",
              index === 0 ? "border-b border-white/10" : "",
            )}
          />
        ))}
      </div>

      <div className="hidden h-full md:flex">
        {panels.map((panel, index) => (
          <ServicePanelCard
            key={panel.href}
            panel={panel}
            priority
            className={cn(
              "h-full min-h-0 flex-1 basis-0",
              "hover:flex-[1.06] focus-visible:flex-[1.06]",
              index === 0 ? "border-r border-white/10" : "",
            )}
          />
        ))}
      </div>

      {/* Logo on top of both halves — after panels in DOM + high z-index */}
      <div className="pointer-events-none absolute inset-0 z-50 flex items-center justify-center">
        <div className="rounded-full bg-white p-1 shadow-[0_12px_40px_rgba(0,0,0,0.55)] ring-1 ring-black/10 sm:p-1.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={business.logo.src}
            alt={business.logo.alt}
            width={256}
            height={256}
            className="block size-28 rounded-full object-cover sm:size-36 md:size-48 lg:size-56 xl:size-64"
          />
        </div>
      </div>
    </div>
  );
}
