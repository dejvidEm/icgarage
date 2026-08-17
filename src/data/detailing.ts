export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  /** Minimálna / východisková cena v € — zobrazí sa ako „od XX €“ */
  priceFrom?: number;
};

export type PriceRow = {
  id: string;
  name: string;
  /** Cena pre osobné auto v € */
  car: number;
  /** Cena pre SUV / väčšie vozidlo v € */
  suv: number;
  note?: string;
};

export type PriceGroup = {
  id: string;
  title: string;
  items: ReadonlyArray<PriceRow>;
};

export type ValuePoint = {
  title: string;
  description: string;
};

export type Benefit = {
  title: string;
  description: string;
};

export type Review = {
  id: string;
  name: string;
  text: string;
  rating: number;
  /** Označenie demo obsahu — neskôr nahraďte reálnymi Google recenziami */
  isDemo: boolean;
};

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const detailing = {
  slug: "detailing" as const,
  name: "Detailing",
  accent: "detailing" as const,
  nav: [
    { label: "O nás", href: "/detailing#o-nas" },
    { label: "Služby", href: "/detailing#sluzby" },
    { label: "Cenník", href: "/detailing#cennik" },
    { label: "Recenzie", href: "/detailing#recenzie" },
    { label: "Galéria", href: "/detailing#galeria" },
    { label: "Kontakt", href: "/detailing#kontakt" },
  ],
  primaryCta: {
    label: "Objednať detailing",
    href: "/detailing#kontakt",
  },
  secondaryService: {
    label: "Pneuservis",
    href: "/pneuservis",
  },
  hero: {
    headline: "Detailing, ktorý vášmu autu vráti charakter.",
    supporting:
      "Profesionálna starostlivosť o interiér a exteriér vozidla s dôrazom na každý detail.",
    primaryCta: { label: "Objednať detailing", href: "/detailing#kontakt" },
    secondaryCta: { label: "Pozrieť služby", href: "/detailing#sluzby" },
    image: {
      src: "/images/detailing/hero.jpg",
      alt: "Profesionálny auto detailing — lesklý lak a precízna starostlivosť",
    },
  },
  about: {
    id: "o-nas",
    title: "Starostlivosť o auto bez kompromisov.",
    text: "Venujeme sa detailingu ako remeslu. Každé vozidlo prechádza dôkladnou diagnostikou povrchu a interiéru, aby sme zvolili postup, ktorý dáva zmysel — nie zbytočné balíčky navyše. Pracujeme s profesionálnou autokozmetikou a dôrazom na výsledok, ktorý vydrží.",
    image: {
      src: "/images/detailing/about.jpg",
      alt: "Detailér pri práci na interiéri a exteriéri vozidla",
    },
    values: [
      {
        title: "Precízna práca",
        description:
          "Každý krok má svoj dôvod — od prípravy povrchu až po finálnu ochranu.",
      },
      {
        title: "Profesionálna autokozmetika",
        description:
          "Používame overené produkty určené pre profesionálne dielne, nie hobby sety.",
      },
      {
        title: "Individuálny prístup",
        description:
          "Rozsah prác prispôsobíme stavu auta, vašim prioritám a času, ktorý máte.",
      },
    ] satisfies ValuePoint[],
  },
  services: [
    {
      id: "cistenie-interieru",
      title: "Čistenie interiéru",
      description:
        "Dôkladné odstránenie prachu, špiny a nečistôt z kabíny, plastov a textílií.",
      href: "/detailing#cennik",
      priceFrom: 60,
    },
    {
      id: "tepovanie",
      title: "Tepovanie",
      description:
        "Hĺbkové čistenie sedadiel, kobercov a čalúnenia s dôrazom na zápach a škvrny.",
      href: "/detailing#cennik",
      priceFrom: 80,
    },
    {
      id: "detailing-interieru",
      title: "Detailing interiéru",
      description:
        "Komplexná starostlivosť o kabínu — od čistenia až po úpravu a ochranu materiálov.",
      href: "/detailing#cennik",
      priceFrom: 120,
    },
    {
      id: "rucne-umyvanie",
      title: "Ručné umývanie exteriéru",
      description:
        "Šetrné umývanie bez automatov, s ohľadom na lak a citlivé povrchy.",
      href: "/detailing#cennik",
      priceFrom: 40,
    },
    {
      id: "dekontaminacia",
      title: "Dekontaminácia laku",
      description:
        "Odstránenie kovových častíc, dechtu a usadenín pred leštením alebo ochranou.",
      href: "/detailing#cennik",
      priceFrom: 70,
    },
    {
      id: "lestenie",
      title: "Leštenie laku",
      description:
        "Korekcia škrabancov a oxidácie pre čistejší odraz a rovnomerný lesk.",
      href: "/detailing#cennik",
      priceFrom: 180,
    },
    {
      id: "keramicka-ochrana",
      title: "Keramická ochrana",
      description:
        "Dlhodobá ochrana laku so jednoduchšou údržbou a odolnejším povrchom.",
      href: "/detailing#cennik",
      priceFrom: 250,
    },
    {
      id: "ochrana-interieru",
      title: "Ochrana interiéru",
      description:
        "Impregnácia a ochrana textílií, kože a plastov podľa typu materiálu.",
      href: "/detailing#cennik",
      priceFrom: 50,
    },
  ] satisfies ServiceItem[],
  /**
   * TODO: Nahraďte reálnymi cenami pred launchom.
   * Ceny sú placeholder hodnoty — upravíte ich na jednom mieste.
   */
  pricing: {
    id: "cennik",
    title: "Cenník",
    description:
      "Orientačné ceny podľa kategórie vozidla. Finálna cena závisí od stavu auta a rozsahu prác.",
    note: "TODO: Overte a upravte ceny podľa aktuálneho cenníka prevádzky.",
    groups: [
      {
        id: "zakladne",
        title: "Hlavné služby",
        items: [
          {
            id: "cistenie-interieru",
            name: "Čistenie interiéru",
            car: 60,
            suv: 80,
          },
          {
            id: "tepovanie",
            name: "Tepovanie",
            car: 80,
            suv: 100,
          },
          {
            id: "detailing-interieru",
            name: "Detailing interiéru",
            car: 120,
            suv: 150,
          },
          {
            id: "rucne-umyvanie",
            name: "Ručné umývanie exteriéru",
            car: 40,
            suv: 55,
          },
          {
            id: "dekontaminacia",
            name: "Dekontaminácia laku",
            car: 70,
            suv: 90,
          },
          {
            id: "lestenie",
            name: "Leštenie laku",
            car: 180,
            suv: 230,
          },
          {
            id: "keramicka-ochrana",
            name: "Keramická ochrana",
            car: 250,
            suv: 320,
          },
          {
            id: "ochrana-interieru",
            name: "Ochrana interiéru",
            car: 50,
            suv: 65,
          },
        ],
      },
      {
        id: "doplnkove",
        title: "Doplnkové služby",
        items: [
          {
            id: "cistenie-motoroveho-priestoru",
            name: "Čistenie motorového priestoru",
            car: 35,
            suv: 45,
          },
          {
            id: "cistenie-kolies-a-podbehov",
            name: "Čistenie kolies a podbehov",
            car: 25,
            suv: 35,
          },
          {
            id: "ozonova-dezinfekcia",
            name: "Ózonová dezinfekcia interiéru",
            car: 40,
            suv: 40,
          },
          {
            id: "odstranenie-zapachu",
            name: "Odstránenie zápachu",
            car: 50,
            suv: 60,
          },
          {
            id: "aplikacia-vosku",
            name: "Aplikácia vosku",
            car: 45,
            suv: 55,
          },
          {
            id: "ochrana-skiel",
            name: "Ochrana skiel (hydrofóbna)",
            car: 30,
            suv: 35,
          },
          {
            id: "renovacia-svetiel",
            name: "Renovácia svetlometov",
            car: 60,
            suv: 60,
          },
          {
            id: "cistenie-kufra",
            name: "Čistenie kufra",
            car: 20,
            suv: 30,
          },
        ],
      },
    ] satisfies PriceGroup[],
  },
  whyUs: {
    id: "preco-my",
    title: "Prečo si vybrať nás",
    benefits: [
      {
        title: "Jasný postup prác",
        description:
          "Pred začatím si odsúhlasíme rozsah, čas a očakávaný výsledok — bez prekvapení.",
      },
      {
        title: "Dôraz na ochranu",
        description:
          "Cieľom nie je iba krátkodobý lesk, ale povrch, ktorý sa ľahšie udržuje.",
      },
      {
        title: "Práca podľa stavu vozidla",
        description:
          "Neponúkame univerzálny balík. Riešime to, čo auto skutočne potrebuje.",
      },
      {
        title: "Transparentná komunikácia",
        description:
          "Ak počas prác nájdeme niečo navyše, ozveme sa skôr, než budeme pokračovať.",
      },
    ] satisfies Benefit[],
  },
  reviews: {
    id: "recenzie",
    title: "Recenzie",
    subtitle:
      "Skutočné hodnotenia zákazníkov z Google — Garáž detailing a pneuservis.",
    items: [
      {
        id: "d1",
        name: "Mário Mlynár",
        text: "Veľká spokojnosť. Prístup na 1*, auto spravené na 1*, môžem len odporučiť.",
        rating: 5,
        isDemo: false,
      },
      {
        id: "d2",
        name: "Jakub Kováč",
        text: "Maximálna spokojnosť, auto po interiérovom čistení ako nové.",
        rating: 5,
        isDemo: false,
      },
      {
        id: "d3",
        name: "Marian Ziak",
        text: "Super, max. spokojnosť so službami, určite využijem znova.",
        rating: 5,
        isDemo: false,
      },
    ] satisfies Review[],
  },
  gallery: {
    id: "galeria",
    title: "Galéria",
    subtitle: "Výsledky našej práce — fotografie z prevádzky IC Garage.",
    images: [
      {
        id: "g1",
        src: "/images/detailing/gallery-1.jpg",
        alt: "Detailing — lesklý lak po profesionálnej starostlivosti",
      },
      {
        id: "g2",
        src: "/images/detailing/gallery-2b.jpg",
        alt: "Detailing v dielni IC Garage — práca na vozidle",
      },
      {
        id: "g3",
        src: "/images/detailing/gallery-3.jpg",
        alt: "Hotový detailing — čistý exteriér vozidla",
      },
      {
        id: "g4",
        src: "/images/detailing/gallery-4.jpg",
        alt: "Profesionálna starostlivosť o karosériu a detaily",
      },
      {
        id: "g5",
        src: "/images/detailing/gallery-5.jpg",
        alt: "Interiér a exteriér po detailingu",
      },
      {
        id: "g6",
        src: "/images/detailing/gallery-6.jpg",
        alt: "Výsledok detailingu — prémiový vzhľad auta",
      },
    ] satisfies GalleryImage[],
  },
  faq: {
    id: "faq",
    title: "Časté otázky",
    items: [
      {
        id: "f1",
        question: "Koľko trvá detailing auta?",
        answer:
          "Závisí od rozsahu a stavu vozidla. Základné čistenie interiéru môže trvať niekoľko hodín, komplexný detailing s leštením a ochranou často celý deň alebo viac. Presný čas dohodneme pri objednávke.",
      },
      {
        id: "f2",
        question: "Je potrebné sa objednať vopred?",
        answer:
          "Áno. Termíny plánujeme vopred, aby sme mali dostatok času na kvalitnú prácu. Objednávku vybavíte telefonicky alebo e-mailom.",
      },
      {
        id: "f3",
        question: "Čo zahŕňa detailing interiéru?",
        answer:
          "Typicky dôkladné vysávanie, čistenie plastov, skiel, sedadiel a kobercov, prípadne tepovanie a ošetrenie materiálov. Presný rozsah prispôsobíme stavu kabíny.",
      },
      {
        id: "f4",
        question: "Ako dlho vydrží keramická ochrana?",
        answer:
          "Životnosť závisí od typu produktu, údržby a spôsobu používania auta. Pri správnej starostlivosti ide o dlhodobú ochranu v rádoch mesiacov až rokov — konkrétne odporúčanie povieme podľa zvoleného systému.",
      },
      {
        id: "f5",
        question: "Môžem priviezť auto aj cez víkend?",
        answer:
          "Podľa oficiálnych hodín sme cez víkend zatvorení (sobota aj nedeľa). Individuálne termíny mimo bežných hodín overte telefonicky.",
      },
      {
        id: "f6",
        question: "Musím auto pred detailom umývať?",
        answer:
          "Nie je to nutné. Exteriér aj interiér pripravíme u nás. Ak je auto silne znečistené (blato, soľ), dajte nám vedieť vopred kvôli plánovaniu času.",
      },
    ] satisfies FaqItem[],
  },
  finalCta: {
    title: "Pripravení dať autu poriadnu starostlivosť?",
    text: "Ozvite sa nám s typom vozidla a tým, čo chcete riešiť. Navrhneme postup a termín.",
    primaryCta: { label: "Zavolať", href: "tel:+421944953665" },
    secondaryCta: { label: "Napísať e-mail", href: "mailto:info@example.com" },
  },
} as const;
