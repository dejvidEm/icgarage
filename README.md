# IC Garage

Produkčný web pre firmu s dvoma službami: **Auto detailing** a **Pneuservis**.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- `next/image` + `next/font` (Geist)
- Lucide Icons

## Routes

| Route | Popis |
| --- | --- |
| `/` | Vizuálny rozcestník služieb |
| `/detailing` | Landing page detailingu |
| `/pneuservis` | Landing page pneuservisu |

## Spustenie

```bash
npm install
npm run dev
```

Production:

```bash
npm run build
npm start
```

## Konfigurácia firmy

Všetky firemné údaje sú centralizované v:

- `src/data/business.ts` — názov, kontakt, adresa, mapa, otváracie hodiny
- `src/data/detailing.ts` — obsah detailingu
- `src/data/pneuservis.ts` — obsah pneuservisu

Hodnoty označené `TODO` nahraďte pred nasadením.

## Obrázky

Placeholder fotografie sú v `public/images/`. Nahraďte ich vlastnými assets so zachovaním ciest (alebo upravte cesty v data súboroch).

## SEO

- Metadata API na každej route
- `app/sitemap.ts`, `app/robots.ts`
- JSON-LD (LocalBusiness / AutomotiveBusiness, BreadcrumbList, FAQPage)
- `public/llms.txt`

## Deploy (Vercel)

1. Nastavte `business.siteUrl` v `src/data/business.ts`
2. Pushnite repo a napojte na Vercel
3. Deploy — projekt je pripravený na App Router deploy
