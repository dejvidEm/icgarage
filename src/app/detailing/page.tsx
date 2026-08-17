import type { Metadata } from "next";
import { business } from "@/data/business";
import { detailing } from "@/data/detailing";
import { buildMetadata } from "@/lib/seo/metadata";
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildWebPageJsonLd,
} from "@/lib/seo/json-ld";
import { JsonLd } from "@/components/seo/JsonLd";
import { SiteHeader } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/shared/Hero";
import { AboutSection } from "@/components/sections/shared/AboutSection";
import { ServicesSection } from "@/components/sections/shared/ServicesSection";
import { WhyUsSection } from "@/components/sections/shared/WhyUsSection";
import { ReviewsSection } from "@/components/sections/shared/ReviewsSection";
import { GallerySection } from "@/components/sections/detailing/GallerySection";
import { PriceListSection } from "@/components/sections/detailing/PriceListSection";
import { LocationSection } from "@/components/sections/shared/LocationSection";
import { FAQSection } from "@/components/sections/shared/FAQSection";
import { FinalCTA } from "@/components/sections/shared/FinalCTA";

const title = `Auto detailing ${business.city} | ${business.name}`;
const description = `Profesionálny auto detailing v ${business.city}. Interiér, exteriér, leštenie a keramická ochrana — ${business.name}.`;

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/detailing",
  image: detailing.hero.image.src,
});

export default function DetailingPage() {
  return (
    <>
      <JsonLd
        data={[
          buildWebPageJsonLd({
            name: title,
            description,
            path: "/detailing",
          }),
          buildBreadcrumbJsonLd([
            { name: "Domov", path: "/" },
            { name: "Detailing", path: "/detailing" },
          ]),
          buildFaqJsonLd(detailing.faq.items),
        ]}
      />

      <SiteHeader
        nav={detailing.nav}
        primaryCta={detailing.primaryCta}
        secondaryService={{
          label: "Pneuservis",
          href: detailing.secondaryService.href,
        }}
      />

      <main>
        <Hero
          eyebrow="Auto detailing"
          headline={detailing.hero.headline}
          supporting={detailing.hero.supporting}
          primaryCta={detailing.hero.primaryCta}
          secondaryCta={detailing.hero.secondaryCta}
          image={detailing.hero.image}
          accent="detailing"
        />

        <div id="obsah">
          <AboutSection
            id={detailing.about.id}
            title={detailing.about.title}
            text={detailing.about.text}
            image={detailing.about.image}
            values={detailing.about.values}
            accent="detailing"
          />

          <ServicesSection
            id="sluzby"
            services={detailing.services}
            accent="detailing"
            description="Interiér, exteriér, ochrana laku — podľa stavu vozidla a vašich priorít."
          />

          <PriceListSection
            id={detailing.pricing.id}
            title={detailing.pricing.title}
            description={detailing.pricing.description}
            note={detailing.pricing.note}
            groups={detailing.pricing.groups}
          />

          <WhyUsSection
            id={detailing.whyUs.id}
            title={detailing.whyUs.title}
            benefits={detailing.whyUs.benefits}
            accent="detailing"
          />

          <ReviewsSection
            id={detailing.reviews.id}
            title={detailing.reviews.title}
            subtitle={detailing.reviews.subtitle}
            items={detailing.reviews.items}
          />

          <GallerySection
            id={detailing.gallery.id}
            title={detailing.gallery.title}
            subtitle={detailing.gallery.subtitle}
            images={detailing.gallery.images}
          />

          <LocationSection id="kontakt" />

          <FAQSection
            id={detailing.faq.id}
            title={detailing.faq.title}
            items={detailing.faq.items}
          />

          <FinalCTA
            title={detailing.finalCta.title}
            text={detailing.finalCta.text}
            primaryCta={{
              label: detailing.finalCta.primaryCta.label,
              href: business.phone.href,
            }}
            secondaryCta={
              business.email
                ? {
                    label: detailing.finalCta.secondaryCta.label,
                    href: business.email.href,
                  }
                : business.socialLinks.instagram
                  ? {
                      label: "Instagram",
                      href: business.socialLinks.instagram,
                    }
                  : undefined
            }
          />
        </div>
      </main>

      <Footer />
    </>
  );
}
