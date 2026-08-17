"use client";

import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { Info, X } from "lucide-react";
import type { PriceGroup, PriceRow } from "@/data/detailing";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { business } from "@/data/business";
import { cn } from "@/lib/utils/cn";

function formatPrice(value: number, from = false): string {
  const formatted = value.toLocaleString("sk-SK", {
    minimumFractionDigits: value % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  });
  return `${from ? "od " : ""}${formatted} €`;
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
      </Container>
    </section>
  );
}

function PriceTable({ group }: { group: PriceGroup }) {
  const singlePrice = group.items.every(
    (item) =>
      typeof item.from === "number" &&
      item.car === undefined &&
      item.suv === undefined,
  );

  return (
    <div>
      <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
        {group.title}
      </h3>

      <div className="rounded-[var(--radius-card)] border border-white/[0.06] bg-[var(--surface)]">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-white/[0.08] bg-[var(--surface-elevated)]">
              <th
                scope="col"
                className="px-3 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-white/45 sm:px-7 sm:py-4 sm:text-xs sm:tracking-[0.16em]"
              >
                Služba
              </th>
              {singlePrice ? (
                <th
                  scope="col"
                  className="w-[6.5rem] px-1.5 py-3 pr-3 text-right text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-white/45 sm:w-[11rem] sm:px-7 sm:py-4 sm:pr-7 sm:text-xs sm:tracking-[0.16em]"
                >
                  Cena
                </th>
              ) : (
                <>
                  <th
                    scope="col"
                    className="w-[4.5rem] px-1.5 py-3 text-right text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-white/45 sm:w-[9rem] sm:px-7 sm:py-4 sm:text-xs sm:tracking-[0.16em]"
                  >
                    CAR
                  </th>
                  <th
                    scope="col"
                    className="w-[4.5rem] px-1.5 py-3 pr-3 text-right text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-white/45 sm:w-[9rem] sm:px-7 sm:py-4 sm:pr-7 sm:text-xs sm:tracking-[0.16em]"
                  >
                    SUV
                  </th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {group.items.map((item, index) => (
              <PriceRowView
                key={item.id}
                item={item}
                striped={index % 2 === 1}
                singlePrice={singlePrice}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function PriceRowView({
  item,
  striped,
  singlePrice,
}: {
  item: PriceRow;
  striped: boolean;
  singlePrice: boolean;
}) {
  const hasSplit = typeof item.car === "number" && typeof item.suv === "number";
  const fromOnly = typeof item.from === "number";

  return (
    <tr
      className={cn(
        "border-b border-white/[0.05] last:border-b-0",
        striped && "bg-white/[0.02]",
      )}
    >
      <th
        scope="row"
        className="px-3 py-3 text-left text-[0.8rem] font-medium leading-snug text-white/90 sm:px-7 sm:py-4 sm:text-base sm:leading-normal"
      >
        <span className="inline-flex max-w-full items-start gap-1.5 sm:gap-2">
          <span>{item.name}</span>
          <PriceInfoButton item={item} />
        </span>
      </th>
      {singlePrice && fromOnly ? (
        <td className="whitespace-nowrap px-1.5 py-3 pr-3 text-right sm:px-7 sm:py-4 sm:pr-7">
          <span className="text-[0.8125rem] font-extrabold tabular-nums tracking-tight text-[var(--accent)] sm:text-lg">
            {formatPrice(item.from!, true)}
          </span>
        </td>
      ) : hasSplit ? (
        <>
          <td className="whitespace-nowrap px-1.5 py-3 text-right sm:px-7 sm:py-4">
            <span className="text-[0.8125rem] font-extrabold tabular-nums tracking-tight text-[var(--accent)] sm:text-lg">
              {formatPrice(item.car!)}
            </span>
          </td>
          <td className="whitespace-nowrap px-1.5 py-3 pr-3 text-right sm:px-7 sm:py-4 sm:pr-7">
            <span className="text-[0.8125rem] font-extrabold tabular-nums tracking-tight text-[var(--accent)] sm:text-lg">
              {formatPrice(item.suv!)}
            </span>
          </td>
        </>
      ) : fromOnly ? (
        <td
          colSpan={2}
          className="whitespace-nowrap px-1.5 py-3 pr-3 text-right sm:px-7 sm:py-4 sm:pr-7"
        >
          <span className="text-[0.8125rem] font-extrabold tabular-nums tracking-tight text-[var(--accent)] sm:text-lg">
            {formatPrice(item.from!, true)}
          </span>
        </td>
      ) : (
        <>
          <td className="px-1.5 py-3 text-right text-white/30 sm:px-7">—</td>
          <td className="px-1.5 py-3 pr-3 text-right text-white/30 sm:px-7 sm:pr-7">
            —
          </td>
        </>
      )}
    </tr>
  );
}

type PopupPos = { top: number; left: number };

function PriceInfoButton({ item }: { item: PriceRow }) {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [pos, setPos] = useState<PopupPos>({ top: 0, left: 0 });
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const hasDetails =
    Boolean(item.duration) ||
    Boolean(item.includes?.length) ||
    Boolean(item.note);

  const updatePosition = useCallback(() => {
    const button = buttonRef.current;
    const tip = tooltipRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const tipWidth = tip?.offsetWidth || 320;
    const tipHeight = tip?.offsetHeight || 240;
    const gap = 10;
    const margin = 12;

    const spaceAbove = rect.top - margin;
    const spaceBelow = window.innerHeight - rect.bottom - margin;
    const placeAbove = spaceAbove >= tipHeight || spaceAbove >= spaceBelow;

    let left = rect.left + rect.width / 2 - tipWidth / 2;
    left = Math.max(
      margin,
      Math.min(left, window.innerWidth - tipWidth - margin),
    );

    const top = placeAbove
      ? Math.max(margin, rect.top - tipHeight - gap)
      : Math.min(window.innerHeight - tipHeight - margin, rect.bottom + gap);

    setPos({ top, left });
  }, []);

  useEffect(() => {
    setMounted(true);
    const media = window.matchMedia("(min-width: 768px)");
    const sync = () => setIsDesktop(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useLayoutEffect(() => {
    if (!(hover && isDesktop)) return;
    updatePosition();
    const frame = requestAnimationFrame(updatePosition);
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [hover, isDesktop, updatePosition, item.id]);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!hasDetails) return null;

  const showDesktopTooltip = mounted && isDesktop && hover;

  return (
    <>
      <span className="relative inline-flex shrink-0 translate-y-[0.1em]">
        <button
          ref={buttonRef}
          type="button"
          aria-label={`Viac informácií: ${item.name}`}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => {
            if (isDesktop) return;
            setOpen(true);
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onFocus={() => setHover(true)}
          onBlur={() => setHover(false)}
          className="inline-flex size-[1.05rem] items-center justify-center rounded-full text-[#e8912d] transition-colors hover:bg-[#e8912d]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8912d] sm:size-5"
        >
          <Info
            className="size-[0.95rem] sm:size-[1.05rem]"
            strokeWidth={2.25}
          />
        </button>
      </span>

      {showDesktopTooltip
        ? createPortal(
            <div
              ref={tooltipRef}
              role="tooltip"
              className="pointer-events-none fixed z-[9999] w-[min(20rem,calc(100vw-1.5rem))] rounded-xl border border-white/10 bg-[#1a191e] p-4 shadow-[0_24px_60px_rgba(0,0,0,0.65)]"
              style={{ top: pos.top, left: pos.left }}
            >
              <p className="mb-2.5 text-sm font-semibold text-white">
                {item.name}
              </p>
              <PriceInfoContent item={item} />
            </div>,
            document.body,
          )
        : null}

      {mounted && open && !isDesktop
        ? createPortal(
            <div
              id={panelId}
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            >
              <button
                type="button"
                aria-label="Zavrieť"
                className="absolute inset-0 bg-black/70"
                onClick={() => setOpen(false)}
              />
              <div
                role="dialog"
                aria-modal="true"
                aria-label={item.name}
                className="relative z-10 w-full max-w-md rounded-2xl border border-white/10 bg-[#1a191e] p-5 shadow-[0_28px_70px_rgba(0,0,0,0.7)]"
              >
                <div className="mb-3 flex items-start justify-between gap-3">
                  <p className="text-base font-semibold text-white">
                    {item.name}
                  </p>
                  <button
                    type="button"
                    aria-label="Zavrieť"
                    onClick={() => setOpen(false)}
                    className="inline-flex size-8 shrink-0 items-center justify-center rounded-full text-white/50 hover:text-white"
                  >
                    <X className="size-4" />
                  </button>
                </div>
                <PriceInfoContent item={item} />
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}

function PriceInfoContent({ item }: { item: PriceRow }) {
  return (
    <div className="space-y-2.5 text-left">
      {item.duration ? (
        <p className="text-xs leading-relaxed text-white/55">
          <span className="font-semibold text-white/75">Trvanie:</span>{" "}
          {item.duration}
        </p>
      ) : null}
      {item.includes?.length ? (
        <div>
          <p className="text-xs font-semibold text-white/75">Obsah služby</p>
          <ul className="mt-1.5 space-y-1">
            {item.includes.map((line) => (
              <li
                key={line}
                className="relative pl-3 text-xs leading-relaxed text-white/55 before:absolute before:left-0 before:top-[0.55em] before:size-1 before:rounded-full before:bg-[#e8912d]"
              >
                {line}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {item.note ? (
        <p className="text-xs leading-relaxed text-white/45">{item.note}</p>
      ) : null}
    </div>
  );
}
