import type {
  Benefit,
  FaqItem,
  PriceGroup,
  Review,
  ServiceItem,
  ValuePoint,
} from "./detailing";

export const pneuservis = {
  slug: "pneuservis" as const,
  name: "Pneuservis",
  accent: "pneuservis" as const,
  nav: [
    { label: "O nás", href: "/pneuservis#o-nas" },
    { label: "Cenník", href: "/pneuservis#cennik" },
    { label: "Recenzie", href: "/pneuservis#recenzie" },
    { label: "Kontakt", href: "/pneuservis#kontakt" },
  ],
  primaryCta: {
    label: "Objednať prezutie",
    href: "/pneuservis#kontakt",
  },
  secondaryService: {
    label: "Detailing",
    href: "/detailing",
  },
  hero: {
    headline: "Pneuservis bez zbytočných komplikácií.",
    supporting:
      "Profesionálne prezutie, vyváženie a starostlivosť o pneumatiky na jednom mieste.",
    primaryCta: { label: "Objednať prezutie", href: "/pneuservis#kontakt" },
    secondaryCta: { label: "Pozrieť služby", href: "/pneuservis#cennik" },
    image: {
      src: "/images/pneuservis/hero-bg.jpg",
      alt: "Pneuservis — mechanik pri výmene kolesa na zdviháku",
    },
  },
  about: {
    id: "o-nas",
    title: "Prezutie a starostlivosť, ktoré sedí do vášho dňa.",
    text: "Pneuservis držíme jednoduchý a predvídateľný. Objednáte sa, prídete v dohodnutom čase a odchádzate s prezutými, vyváženými kolesami. Kontrolujeme stav pneumatík a upozorníme vás, ak niečo nie je v poriadku — bez nátlaku na zbytočné služby.",
    image: {
      src: "/images/pneuservis/about-photo.jpg",
      alt: "Pneuservis — montáž pneumatiky na stroji v dielni",
    },
    values: [
      {
        title: "Jasný termín",
        description:
          "Práce plánujeme tak, aby ste zbytočne nečakali. Príďte na dohodnutý čas.",
      },
      {
        title: "Kontrola stavu",
        description:
          "Pri prezutí skontrolujeme opotrebenie, tlak a viditeľné poškodenia.",
      },
      {
        title: "Bez zbytočností",
        description:
          "Odporučíme len to, čo má zmysel pre bezpečnosť a životnosť pneumatík.",
      },
    ] satisfies ValuePoint[],
  },
  services: [
    {
      id: "prezutie",
      title: "Prezutie pneumatík",
      description:
        "Sezónne alebo operatívne prezutie s odbornou montážou na disky.",
      href: "/pneuservis#cennik",
    },
    {
      id: "vymena-kolies",
      title: "Výmena kompletných kolies",
      description:
        "Rýchla výmena kompletných sád — ideálne, ak máte zimné aj letné kolesá.",
      href: "/pneuservis#cennik",
    },
    {
      id: "vyvazenie",
      title: "Vyváženie kolies",
      description:
        "Odstránenie vibrácií a nerovnomerného opotrebenia správnym vyvážením.",
      href: "/pneuservis#cennik",
    },
    {
      id: "defekt",
      title: "Oprava defektu",
      description:
        "Oprava prieduchu tam, kde to bezpečnosť a stav pneumatiky dovolí.",
      href: "/pneuservis#cennik",
    },
    {
      id: "kontrola",
      title: "Kontrola pneumatík",
      description:
        "Kontrola hĺbky dezénu, veku, poškodení a celkového stavu sady.",
      href: "/pneuservis#cennik",
    },
    {
      id: "tlak",
      title: "Kontrola tlaku",
      description: "Nastavenie správneho tlaku podľa vozidla a zaťaženia.",
      href: "/pneuservis#cennik",
    },
    {
      id: "sezonne",
      title: "Sezónne prezutie",
      description:
        "Prechod medzi letnými a zimnými pneumatikami vrátane kontroly a vyváženia.",
      href: "/pneuservis#cennik",
    },
  ] satisfies ServiceItem[],
  pricing: {
    id: "cennik",
    title: "Cenník služieb",
    description:
      "Ceny prezutia podľa rozmeru disku. Príplatky a uskladnenie sú uvedené samostatne.",
    note: "Pri netypických rozmeroch alebo zvýšenej náročnosti môže byť cena upravená individuálne.",
    groups: [
      {
        id: "prezutie-rozmery",
        title: "Prezutie podľa rozmeru",
        rowHeader: "Rozmer",
        columns: {
          primary: "Oceľový disk",
          secondary: "Alu disk",
        },
        items: [
          {
            id: "r-13-15",
            name: '13" – 15"',
            car: 35,
            suv: 40,
          },
          {
            id: "r-16",
            name: '16"',
            car: 40,
            suv: 45,
          },
          {
            id: "r-17",
            name: '17"',
            car: 45,
            suv: 50,
          },
          {
            id: "r-18",
            name: '18"',
            car: 50,
            suv: 55,
          },
          {
            id: "r-19",
            name: '19"',
            car: 55,
            suv: 60,
          },
          {
            id: "r-20",
            name: '20"',
            car: 60,
            suv: 65,
          },
          {
            id: "r-21",
            name: '21"',
            car: 70,
            suv: 75,
          },
          {
            id: "r-22",
            name: '22"',
            car: 80,
            suv: 85,
          },
          {
            id: "r-23-24",
            name: '23" – 24"',
            from: 90,
            fromSecondary: 95,
          },
        ],
      },
      {
        id: "priplatky",
        title: "Príplatky",
        singleColumnLabel: "Príplatok",
        items: [
          {
            id: "run-flat",
            name: "Run-flat",
            priceLabel: "+10 € / 4 ks",
          },
          {
            id: "nizky-profil",
            name: "Nízky profil",
            priceLabel: "+10 € / 4 ks",
          },
          {
            id: "suv-van",
            name: "SUV / VAN",
            priceLabel: "+10 € / 4 ks",
          },
          {
            id: "velke-rozmery",
            name: 'Veľké rozmery 21" – 24"',
            priceLabel: "podľa náročnosti",
          },
        ],
      },
      {
        id: "uskladnenie",
        title: "Uskladnenie",
        singleColumnLabel: "Cena / sezóna",
        items: [
          {
            id: "sklad-pneu",
            name: "4 pneumatiky",
            price: 30,
          },
          {
            id: "sklad-kolesa",
            name: "4 kompletné kolesá",
            price: 40,
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
        title: "Predvídateľný proces",
        description:
          "Objednávka, termín, prezutie, kontrola — bez chaosu a dlhého čakania.",
      },
      {
        title: "Bezpečnosť na prvom mieste",
        description:
          "Ak je pneumatika na hranici, povieme to narovinu. Bezpečnosť nejde ohnúť.",
      },
      {
        title: "Jedna adresa s detailingom",
        description:
          "Detailing aj pneuservis na jednom mieste — menej ciest, viac vybaveného.",
      },
      {
        title: "Praktické rady",
        description:
          "Poradíme s tlakom, sezónnou výmenou a tým, kedy už má zmysel meniť sadu.",
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
        id: "p1",
        name: "Andrej Rýpal",
        text: "Topka pneuservis, chalan vie čo robí a robí to rýchlo, čisto a precízne. 5/5 odporúčam",
        rating: 5,
        isDemo: false,
      },
      {
        id: "p2",
        name: "Lukáš Klement",
        text: "Rýchle vybavenie, milý personál, ochota a profesionalita. Odporúčam každému.",
        rating: 5,
        isDemo: false,
      },
      {
        id: "p3",
        name: "Mário Mlynár",
        text: "Veľká spokojnosť. Prístup na 1*, auto spravené na 1*, môžem len odporučiť.",
        rating: 5,
        isDemo: false,
      },
    ] satisfies Review[],
  },
  faq: {
    id: "faq",
    title: "Časté otázky",
    items: [
      {
        id: "pf1",
        question: "Ako dlho trvá prezutie?",
        answer:
          "Výmena kompletných kolies je zvyčajne rýchla. Prezutie pneumatík s vyvážením trvá dlhšie podľa počtu kolies a stavu. Presný odhad povieme pri objednávke.",
      },
      {
        id: "pf2",
        question: "Musím sa objednať vopred?",
        answer:
          "Áno, odporúčame rezerváciu termínu — najmä v sezóne prezúvania. Bez objednávky vás vieme prijať len ak je voľná kapacita.",
      },
      {
        id: "pf3",
        question: "Robíte aj vyváženie kolies?",
        answer:
          "Áno. Vyváženie je súčasťou kvalitného prezutia a pomáha predchádzať vibráciám a nerovnomernému opotrebeniu.",
      },
      {
        id: "pf4",
        question: "Opravíte každý defekt?",
        answer:
          "Nie. Opravujeme len poškodenia, pri ktorých je oprava bezpečná a v súlade so stavom pneumatiky. Ak to nejde, navrhneme výmenu.",
      },
      {
        id: "pf5",
        question: "Kedy mám prezúvať na zimné / letné?",
        answer:
          "Riadiť sa treba teplotami a predpismi. Prakticky platí: keď teploty dlhšie klesajú k bodu mrazu, zimné majú zmysel skôr. Pri sporných situáciách poradíme individuálne.",
      },
      {
        id: "pf6",
        question: "Môžem nechať auto a ísť vybaviť niečo iné?",
        answer:
          "Áno, po dohode. Domluvíme odovzdanie a vyzdvihnutie. Kontaktné údaje nájdete v sekcii lokalita.",
      },
    ] satisfies FaqItem[],
  },
  finalCta: {
    title: "Potrebujete prezutie alebo kontrolu pneumatík?",
    text: "Zavolajte alebo napíšte — dohodneme termín podľa vašej sady a typu vozidla.",
    primaryCta: { label: "Zavolať", href: "tel:+421944953665" },
    secondaryCta: { label: "Napísať e-mail", href: "mailto:info@example.com" },
  },
} as const;
