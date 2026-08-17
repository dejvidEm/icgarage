import type { Metadata } from "next";
import { business } from "@/data/business";
import { pneuservis } from "@/data/pneuservis";
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
import { PriceListSection } from "@/components/sections/shared/PriceListSection";
import { WhyUsSection } from "@/components/sections/shared/WhyUsSection";
import { ReviewsSection } from "@/components/sections/shared/ReviewsSection";
import { LocationSection } from "@/components/sections/shared/LocationSection";
import { FAQSection } from "@/components/sections/shared/FAQSection";
import { FinalCTA } from "@/components/sections/shared/FinalCTA";

const title = `Pneuservis ${business.city} | Prezutie pneumatík | ${business.name}`;
const description = `Pneuservis v ${business.city} — prezutie, vyváženie, oprava defektu a kontrola pneumatík. ${business.name}.`;

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/pneuservis",
  image: pneuservis.hero.image.src,
});

export default function PneuservisPage() {
  return (
    <div className="theme-pneuservis">
      <JsonLd
        data={[
          buildWebPageJsonLd({
            name: title,
            description,
            path: "/pneuservis",
          }),
          buildBreadcrumbJsonLd([
            { name: "Domov", path: "/" },
            { name: "Pneuservis", path: "/pneuservis" },
          ]),
          buildFaqJsonLd(pneuservis.faq.items),
        ]}
      />

      <SiteHeader
        nav={pneuservis.nav}
        primaryCta={pneuservis.primaryCta}
        secondaryService={{
          label: "Detailing",
          href: pneuservis.secondaryService.href,
        }}
      />

      <main>
        <Hero
          eyebrow="Pneuservis"
          headline={pneuservis.hero.headline}
          supporting={pneuservis.hero.supporting}
          primaryCta={pneuservis.hero.primaryCta}
          secondaryCta={pneuservis.hero.secondaryCta}
          image={pneuservis.hero.image}
          accent="pneuservis"
        />

        <div id="obsah">
          <AboutSection
            id={pneuservis.about.id}
            title={pneuservis.about.title}
            text={pneuservis.about.text}
            image={pneuservis.about.image}
            values={pneuservis.about.values}
            accent="pneuservis"
            eyebrow="O pneuservise"
          />

          <PriceListSection
            id={pneuservis.pricing.id}
            title={pneuservis.pricing.title}
            description={pneuservis.pricing.description}
            note={pneuservis.pricing.note}
            groups={pneuservis.pricing.groups}
          />

          <WhyUsSection
            id={pneuservis.whyUs.id}
            title={pneuservis.whyUs.title}
            benefits={pneuservis.whyUs.benefits}
            accent="pneuservis"
          />

          <ReviewsSection
            id={pneuservis.reviews.id}
            title={pneuservis.reviews.title}
            subtitle={pneuservis.reviews.subtitle}
            items={pneuservis.reviews.items}
          />

          <LocationSection id="kontakt" />

          <FAQSection
            id={pneuservis.faq.id}
            title={pneuservis.faq.title}
            items={pneuservis.faq.items}
          />

          <FinalCTA
            title={pneuservis.finalCta.title}
            text={pneuservis.finalCta.text}
            primaryCta={{
              label: pneuservis.finalCta.primaryCta.label,
              href: business.phone.href,
            }}
            secondaryCta={
              business.email
                ? {
                    label: pneuservis.finalCta.secondaryCta.label,
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
    </div>
  );
}
