import { business } from "@/data/business";
import { cn } from "@/lib/utils/cn";

type LazyMapProps = {
  title?: string;
  className?: string;
};

/** Native iframe lazy-loading — no client JS required */
export function LazyMap({
  title = `Mapa — ${business.name}`,
  className,
}: LazyMapProps) {
  return (
    <iframe
      title={title}
      src={business.googleMapsEmbedUrl}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className={cn(
        "h-full w-full border-0 grayscale contrast-125",
        className,
      )}
      allowFullScreen
    />
  );
}
