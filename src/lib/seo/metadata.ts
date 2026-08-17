import type { Metadata } from "next";
import { business } from "@/data/business";

const siteName = business.name;

type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function absoluteUrl(path = "/"): string {
  const base = business.siteUrl.replace(/\/$/, "");
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildMetadata({
  title,
  description,
  path,
  image = "/images/shared/logo-mark.png",
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const ogImage = absoluteUrl(image);

  return {
    title,
    description,
    metadataBase: new URL(business.siteUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "sk_SK",
      url,
      siteName,
      title,
      description,
      images: [
        {
          url: ogImage,
          alt: business.logo.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
