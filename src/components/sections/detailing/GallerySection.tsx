import Image from "next/image";
import type { GalleryImage } from "@/data/detailing";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils/cn";

type GallerySectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  images: ReadonlyArray<GalleryImage>;
};

export function GallerySection({
  id,
  title,
  subtitle,
  images,
}: GallerySectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 bg-[var(--background)] py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Portfólio"
          title={title}
          description={subtitle}
        />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <figure
              key={image.id}
              className={cn(
                "group relative overflow-hidden rounded-[var(--radius-card)] bg-[var(--surface)]",
                index === 0
                  ? "aspect-[4/5] sm:row-span-2 sm:aspect-auto sm:min-h-[28rem]"
                  : "aspect-[4/3]",
                index === 1 && "lg:col-span-2 lg:aspect-[21/9]",
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={
                  index === 0
                    ? "(max-width: 640px) 100vw, 33vw"
                    : index === 1
                      ? "(max-width: 1024px) 100vw, 66vw"
                      : "(max-width: 640px) 100vw, 33vw"
                }
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5 pt-16">
                <p className="text-sm font-semibold text-white">{image.alt}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
