import Link from "next/link";
import { business } from "@/data/business";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center bg-[var(--background)] px-4 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
        404
      </p>
      <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        Stránka neexistuje
      </h1>
      <p className="mt-3 max-w-md text-white/60">
        Skúste sa vrátiť na rozcestník {business.name} a vybrať detailing alebo
        pneuservis.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/">Domov</Button>
        <Button href="/detailing" variant="secondary">
          Detailing
        </Button>
        <Button href="/pneuservis" variant="secondary">
          Pneuservis
        </Button>
      </div>
      <Link
        href="/"
        className="mt-10 text-sm text-white/40 hover:text-[var(--accent)]"
      >
        Detailing / Pneuservis
      </Link>
    </main>
  );
}
