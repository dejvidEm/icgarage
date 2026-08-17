export const business = {
  name: "IC Garage",
  legalName: "IC Garage",
  city: "Bratislava",
  /** TODO: Potvrďte finálnu produkčnú URL */
  siteUrl: "https://www.example.com",
  tagline: "Detailing & Pneuservis",
  phone: {
    display: "+421 944 953 665",
    href: "tel:+421944953665",
  },
  /**
   * E-mail nie je uvedený na Google profile (iba telefón + adresa).
   * Doplňte oficiálny e-mail keď bude k dispozícii.
   */
  email: null as { display: string; href: string } | null,
  address: {
    street: "Žabotova 3214/16",
    city: "Bratislava",
    postalCode: "811 04",
    country: "SK",
    countryName: "Slovensko",
  },
  geo: {
    latitude: 48.1578544,
    longitude: 17.1088092,
  },
  googleMapsUrl:
    "https://www.google.com/maps/place/IC+Garaz+Car+Washing+%26+Detailing/@48.1578544,17.1088092,17z/data=!3m1!4b1!4m6!3m5!1s0x476c890018862d31:0x45ed8bafdb56d1b5!8m2!3d48.1578544!4d17.1088092!16s%2Fg%2F11x8_wj8z_",
  /** Embed pinuje Google Place (Žabotova) podľa place ID + súradníc */
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.4!2d17.1088092!3d48.1578544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c890018862d31%3A0x45ed8bafdb56d1b5!2sIC%20Garaz%20Car%20Washing%20%26%20Detailing!5e0!3m2!1ssk!2ssk!4v1720000000000!5m2!1ssk!2ssk",
  /** Reálne Google hodnotenie (profil IC Garaz) */
  googleRating: {
    value: 5,
    count: 14,
  },
  openingHours: [
    { days: "Pondelok – Piatok", hours: "09:00 – 17:00" },
    { days: "Sobota", hours: "Zatvorené" },
    { days: "Nedeľa", hours: "Zatvorené" },
  ] as const,
  openingHoursSpecification: [
    {
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ] as const,
      opens: "09:00",
      closes: "17:00",
    },
  ],
  socialLinks: {
    instagram: "https://www.instagram.com/ic_garaz/" as string | null,
    facebook: null as string | null,
    google: "https://share.google/mJipu7m79UbdK2n4q" as string | null,
  },
  logo: {
    src: "/images/shared/logo.png",
    mark: "/images/shared/logo-mark.png",
    alt: "IC Garage",
  },
} as const;

export type Business = typeof business;

export function getFullAddress(): string {
  const { street, postalCode, city, countryName } = business.address;
  return `${street}, ${postalCode} ${city}, ${countryName}`;
}

export function getSameAs(): string[] {
  return Object.values(business.socialLinks).filter(
    (value): value is string => typeof value === "string" && value.length > 0,
  );
}
