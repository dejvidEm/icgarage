import { business, getFullAddress, getSameAs } from "@/data/business";
import { detailing } from "@/data/detailing";
import { pneuservis } from "@/data/pneuservis";
import { absoluteUrl } from "@/lib/seo/metadata";

type JsonLd = Record<string, unknown>;

function postalAddress(): JsonLd {
  return {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    addressLocality: business.address.city,
    postalCode: business.address.postalCode,
    addressCountry: business.address.country,
  };
}

function geo(): JsonLd {
  return {
    "@type": "GeoCoordinates",
    latitude: business.geo.latitude,
    longitude: business.geo.longitude,
  };
}

function openingHours(): JsonLd[] {
  return business.openingHoursSpecification.map((item) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [...item.dayOfWeek],
    opens: item.opens,
    closes: item.closes,
  }));
}

function contactPoint(): JsonLd {
  return {
    "@type": "ContactPoint",
    telephone: business.phone.display,
    ...(business.email ? { email: business.email.display } : {}),
    contactType: "customer service",
    areaServed: "SK",
    availableLanguage: ["Slovak"],
  };
}

/** Jedna firma — detailing aj pneuservis ako služby jednej prevádzky */
export function buildOrganizationJsonLd(): JsonLd {
  const sameAs = getSameAs();

  return {
    "@context": "https://schema.org",
    "@type": ["AutomotiveBusiness", "LocalBusiness"],
    "@id": `${absoluteUrl()}/#business`,
    name: business.name,
    legalName: business.legalName,
    url: absoluteUrl(),
    logo: absoluteUrl(business.logo.src),
    image: [
      absoluteUrl(detailing.hero.image.src),
      absoluteUrl(pneuservis.hero.image.src),
    ],
    telephone: business.phone.display,
    ...(business.email ? { email: business.email.display } : {}),
    address: postalAddress(),
    geo: geo(),
    openingHoursSpecification: openingHours(),
    contactPoint: contactPoint(),
    description: `${business.name} — profesionálny auto detailing a pneuservis v ${business.city}.`,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Služby",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Auto detailing",
          itemListElement: detailing.services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.description,
              url: absoluteUrl(`/detailing#cennik`),
            },
          })),
        },
        {
          "@type": "OfferCatalog",
          name: "Pneuservis",
          itemListElement: pneuservis.services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.description,
              url: absoluteUrl(`/pneuservis#cennik`),
            },
          })),
        },
      ],
    },
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function buildBreadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildFaqJsonLd(
  items: ReadonlyArray<{ question: string; answer: string }>,
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildWebPageJsonLd(input: {
  name: string;
  description: string;
  path: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    isPartOf: {
      "@type": "WebSite",
      name: business.name,
      url: absoluteUrl(),
    },
    about: { "@id": `${absoluteUrl()}/#business` },
    inLanguage: "sk-SK",
  };
}

export function getBusinessAddressLine(): string {
  return getFullAddress();
}
