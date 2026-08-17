import type { Metadata } from "next";
import { business, getLegalAddress } from "@/data/business";
import { buildMetadata } from "@/lib/seo/metadata";
import {
  LegalPageShell,
  LegalSection,
} from "@/components/layout/LegalPageShell";

export const metadata: Metadata = buildMetadata({
  title: `Cookies | ${business.name}`,
  description: `Informácie o používaní cookies na webovej stránke ${business.name}.`,
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <LegalPageShell
      title="Zásady používania cookies"
      description={`Táto stránka vysvetľuje, ako ${business.legal.name} používa cookies a podobné technológie na webovej stránke.`}
    >
      <LegalSection title="1. Prevádzkovateľ">
        <p>
          Prevádzkovateľom webovej stránky je:
        </p>
        <p>
          <strong className="text-white/85">{business.legal.name}</strong>
          <br />
          Sídlo: {getLegalAddress()}
          <br />
          IČO: {business.legal.ico}
          <br />
          DIČ: {business.legal.dic}
          <br />
          IČ DPH: {business.legal.icDph}
          <br />
          Telefón: {business.phone.display}
        </p>
      </LegalSection>

      <LegalSection title="2. Čo sú cookies">
        <p>
          Cookies sú malé textové súbory, ktoré sa môžu uložiť do vášho
          zariadenia pri návšteve webovej stránky. Pomáhajú zabezpečiť
          základnú funkčnosť, zapamätať si nastavenia alebo pochopiť, ako sa
          stránka používa.
        </p>
      </LegalSection>

      <LegalSection title="3. Aké cookies používame">
        <p>
          Na tejto webovej stránke používame predovšetkým:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-white/80">Nevyhnutné cookies</strong> —
            potrebné na správne fungovanie stránky, bezpečnosť a základné
            nastavenia. Bez nich by niektoré časti webu nemuseli fungovať.
          </li>
          <li>
            <strong className="text-white/80">Preferenčné cookies</strong> —
            môžu si zapamätať vaše voľby (napr. nastavenia zobrazenia), ak sú
            nasadené.
          </li>
          <li>
            <strong className="text-white/80">Analytické cookies</strong> —
            pomáhajú anonymne alebo v agregovanej podobe merať návštevnosť a
            zlepšovať obsah, ak sú nasadené.
          </li>
        </ul>
        <p>
          Aktuálne môže stránka fungovať aj bez marketingových cookies. Ak v
          budúcnosti doplníme ďalšie nástroje (napr. analytiku), informáciu na
          tejto stránke aktualizujeme.
        </p>
      </LegalSection>

      <LegalSection title="4. Právny základ">
        <p>
          Nevyhnutné cookies spracúvame na základe oprávneného záujmu
          zabezpečiť funkčný a bezpečný web. Voliteľné cookies (ak budú
          nasadené) spracúvame na základe vášho súhlasu, ktorý môžete kedykoľvek
          odvolať.
        </p>
      </LegalSection>

      <LegalSection title="5. Ako môžete cookies spravovať">
        <p>
          Cookies môžete spravovať alebo vymazať v nastaveniach svojho
          prehliadača. Obmedzenie niektorých cookies môže ovplyvniť funkčnosť
          stránky. Návod nájdete v nápovede konkrétneho prehliadača (Chrome,
          Safari, Firefox, Edge a pod.).
        </p>
      </LegalSection>

      <LegalSection title="6. Doba uchovávania">
        <p>
          Relatívne (session) cookies sa odstránia po zatvorení prehliadača.
          Trvalé cookies zostávajú do uplynutia ich platnosti alebo kým ich
          nevymažete.
        </p>
      </LegalSection>

      <LegalSection title="7. Kontakt">
        <p>
          V prípade otázok k cookies alebo ochrane údajov nás kontaktujte na
          telefónnom čísle {business.phone.display}.
        </p>
        <p>Posledná aktualizácia: august 2026.</p>
      </LegalSection>
    </LegalPageShell>
  );
}
