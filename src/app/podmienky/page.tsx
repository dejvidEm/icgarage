import type { Metadata } from "next";
import { business, getFullAddress, getLegalAddress } from "@/data/business";
import { buildMetadata } from "@/lib/seo/metadata";
import {
  LegalPageShell,
  LegalSection,
} from "@/components/layout/LegalPageShell";

export const metadata: Metadata = buildMetadata({
  title: `Obchodné podmienky | ${business.name}`,
  description: `Obchodné podmienky spoločnosti ${business.legal.name} pre služby auto detailingu a pneuservisu.`,
  path: "/podmienky",
});

export default function PodmienkyPage() {
  return (
    <LegalPageShell
      title="Obchodné podmienky"
      description={`Tieto obchodné podmienky upravujú poskytovanie služieb spoločnosťou ${business.legal.name} prostredníctvom webovej stránky a osobne na prevádzke.`}
    >
      <LegalSection title="1. Prevádzkovateľ">
        <p>
          Prevádzkovateľom webovej stránky a poskytovateľom služieb je:
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
        </p>
        <p>
          Prevádzka služieb: {getFullAddress()}
          <br />
          Telefón: {business.phone.display}
        </p>
      </LegalSection>

      <LegalSection title="2. Rozsah služieb">
        <p>
          Spoločnosť poskytuje najmä služby auto detailingu (umývanie,
          čistenie, ochrana a úprava vozidiel) a pneuservisu (prezutie,
          vyváženie, opravy a súvisiace práce). Konkrétny rozsah, cena a termín
          sa dohodnú individuálne pred začatím prác.
        </p>
      </LegalSection>

      <LegalSection title="3. Objednávka a rezervácia">
        <p>
          Objednávku je možné uskutočniť telefonicky, osobne alebo iným
          dohodnutým spôsobom. Rezervácia termínu je záväzná po potvrdení zo
          strany prevádzkovateľa. Pri omeškaní alebo neospravedlnenej
          neúčasti si prevádzkovateľ vyhradzuje právo termín zrušiť alebo
          upraviť.
        </p>
      </LegalSection>

      <LegalSection title="4. Ceny a platba">
        <p>
          Ceny uvedené na webovej stránke sú orientačné. Finálna cena závisí od
          stavu vozidla, rozsahu prác a dohodnutých podmienok. Cena bude
          potvrdená pred začatím služby. Platba prebieha hotovosťou, kartou
          alebo iným dohodnutým spôsobom po vykonaní služby, ak nie je dohodnuté
          inak.
        </p>
      </LegalSection>

      <LegalSection title="5. Práva a povinnosti zmluvných strán">
        <p>
          Zákazník je povinný poskytnúť pravdivé informácie o vozidle a jeho
          stave a odovzdať vozidlo v stave umožňujúcom bezpečné vykonanie
          prác. Prevádzkovateľ vykoná služby s odbornou starostlivosťou a
          informuje zákazníka o zistených skutočnostiach, ktoré môžu ovplyvniť
          rozsah alebo cenu.
        </p>
      </LegalSection>

      <LegalSection title="6. Reklamácie">
        <p>
          Prípadné reklamácie uplatnite bez zbytočného odkladu po prevzatí
          vozidla, telefonicky alebo osobne na prevádzke. Pri oprávnenej
          reklamácii zabezpečíme primeranú nápravu podľa charakteru vady.
        </p>
      </LegalSection>

      <LegalSection title="7. Zodpovednosť">
        <p>
          Prevádzkovateľ nezodpovedá za škody vzniknuté v dôsledku skrytých
          vád vozidla, nesprávnych informácií od zákazníka alebo okolností
          mimo jeho primeranej kontroly. Za cennosti a osobné veci ponechané
          vo vozidle zodpovedá zákazník, ak nie je dohodnuté inak.
        </p>
      </LegalSection>

      <LegalSection title="8. Ochrana osobných údajov">
        <p>
          Osobné údaje spracúvame v rozsahu potrebnom na komunikáciu,
          rezerváciu termínu a poskytnutie služby v súlade s platnými
          predpismi. Podrobnosti o cookies nájdete na stránke{" "}
          <a
            href="/cookies"
            className="text-[var(--accent)] underline-offset-2 hover:underline"
          >
            Cookies
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="9. Záverečné ustanovenia">
        <p>
          Tieto podmienky nadobúdajú účinnosť dňom zverejnenia na webovej
          stránke. Prevádzkovateľ si vyhradzuje právo ich aktualizovať.
          Aktuálne znenie je vždy dostupné na tejto stránke.
        </p>
        <p>Posledná aktualizácia: august 2026.</p>
      </LegalSection>
    </LegalPageShell>
  );
}
