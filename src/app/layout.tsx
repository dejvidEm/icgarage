import type { Metadata, Viewport } from "next";
import { Montserrat, Geist_Mono } from "next/font/google";
import { business } from "@/data/business";
import { buildMetadata } from "@/lib/seo/metadata";
import {
  buildOrganizationJsonLd,
  buildWebPageJsonLd,
} from "@/lib/seo/json-ld";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const display = Montserrat({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  ...buildMetadata({
    title: `${business.name} | Detailing & Pneuservis ${business.city}`,
    description: `${business.name} — profesionálny auto detailing a pneuservis v ${business.city}. Objednajte starostlivosť o auto alebo prezutie pneumatík.`,
    path: "/",
    image: "/images/home/detailing-hero.jpg",
  }),
  applicationName: business.name,
  authors: [{ name: business.name }],
  creator: business.name,
  keywords: [
    "auto detailing",
    "pneuservis",
    "prezutie pneumatík",
    business.city,
    business.name,
  ],
};

export const viewport: Viewport = {
  themeColor: "#111013",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="sk"
      className={`${display.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--background)] text-white antialiased">
        <JsonLd
          data={[
            buildOrganizationJsonLd(),
            buildWebPageJsonLd({
              name: `${business.name} | Detailing & Pneuservis`,
              description: `Rozcestník služieb ${business.name}: auto detailing a pneuservis.`,
              path: "/",
            }),
          ]}
        />
        {children}
      </body>
    </html>
  );
}
