// src/components/OurDivisions.js (Přejmenujte si soubor VerticalFeatures.js na OurDivisions.js)

import { VerticalFeatureRow } from '../feature/VerticalFeatureRow'; // Zkontrolujte cestu
import { Section } from '../layout/Section'; // Zkontrolujte cestu

const VerticalFeatures = () => ( // <--- Přejmenováno z VerticalFeatures na OurDivisions
  <Section
    id="nase-divize" // <--- ID pro navigaci (z Navbaru a patičky)
    title={
      <>
        Naše <span className="text-secondary">divize</span> {/* Zvýraznění "divize" sekundární barvou YEAST GROUP (fialová) */}
      </>
    }
    description="YEAST GROUP sdružuje klíčové pilíře našeho ekosystému. Prozkoumejte naše divize zaměřené na interní efektivitu i ty, které nabízejí špičkové služby externím partnerům."
  >
    {/* Sekce pro externí spolupráci (služby pro klienty) */}
    <div className="mt-12 mb-8 text-xl font-bold text-center text-primary">Pro externí partnery:</div> {/* Vizuální oddělení */}
    <VerticalFeatureRow
      title={<>YEAST <span className="text-yeast-construction-accent">Construction</span></>} // <--- POUŽITO yeast-construction-accent (světle zelená)
      description="Váš stavební partner: Precizní rozpočty, audity nemovitostí, komplexní cost & project management, dokončovací práce a rekonstrukce. Zjednodušujeme váš stavební projekt od A do Z."
      image="/assets/images/Yeast_Construction_transparent.png" // <--- Doplňte cestu k logu
      imageAlt="Yeast Construction Logo"
    />
    <VerticalFeatureRow
      title={<>YEAST <span className="text-yeast-labs-accent">Labs</span></>} // <--- POUŽITO yeast-labs-accent (světle zelená)
      description="Inovace pro váš byznys: Technologické studio zaměřené na agilní vývoj aplikací, školení, audity a návrhy procesních automatizací. Váš motor pro digitální transformaci a růst."
      image="/assets/images/Yeast_Labs_logo_white.png" // <--- Doplňte cestu k logu
      imageAlt="Yeast Labs Logo"
      reverse
    />
    <VerticalFeatureRow
      title={<>YEAST <span className="text-secondary">Ventures</span></>} // <--- YEAST VENTURES používá hlavní SECONDARY (fialovou) barvu Yeast Group
      description="Kapitálový vstup pro perspektivní projekty: Hledáme inovativní startupy a ambiciózní projekty třetích stran s potenciálem exponenciálního růstu. Jsme váš partner pro expanzi."
      image="/assets/images/Yeast_ventures_logo_transparent.png" // <--- Doplňte cestu k logu
      imageAlt="Yeast Ventures Logo"
    />

    {/* Sekce pro interní zaměření (primárně pro chod holdingu) */}
    <div className="mt-16 mb-8 text-xl font-bold text-center text-primary">Interní zaměření holdingu:</div> {/* Vizuální oddělení */}
    <VerticalFeatureRow
      title={<>YEAST <span className="text-yeast-invest-accent">Invest</span></>} // <--- POUŽITO yeast-invest-accent (střední šedá)
      description="Interní správa investičního portfolia holdingu. Agilně identifikujeme a realizujeme příležitosti, které maximalizují výnosy a efektivně řídí rizika našeho kapitálu."
      image="/assets/images/Yeast_invest_logo_transparent.png" // <--- Doplňte cestu k logu
      imageAlt="Yeast Invest Logo"
      reverse
    />
    <VerticalFeatureRow
      title={<>YEAST <span className="text-yeast-estates-accent">Estates</span></>} // <--- POUŽITO yeast-estates-accent (střední hnědá)
      description="Efektivní správa nemovitostního portfolia holdingu. Optimalizujeme hodnotu a rentabilitu našich rezidenčních, komerčních i garážových projektů."
      image="/assets/images/Yeast_Estates_logo_transparent.png" // <--- Doplňte cestu k logu
      imageAlt="Yeast Estates Logo"
    />
    <VerticalFeatureRow
      title={<>YEAST <span className="text-yeast-operations-accent">Operations</span></>} // <--- POUŽITO yeast-operations-accent (tmavě zelená)
      description="Zastřešujeme provozní optimalizaci a strategický dohled nad jednotlivými aktivními firmami v rámci holdingu. Naším cílem je interní efektivita a škálovatelnost každého byznysu."
      image="/assets/images/Yeast_Operations_logo_transparent.png" // <--- Doplňte cestu k logu
      imageAlt="Yeast Operations Logo"
      reverse
    />
    <VerticalFeatureRow
      title={<>YEAST <span className="text-yeast-services-accent">Services</span></>} // <--- POUŽITO yeast-services-accent (střední hnědá)
      description="Provozní a servisní centrum pro celý holding. Zajišťujeme efektivní chod interních struktur YEAST GROUP a poskytujeme strategické poradenství pro optimalizaci firemních procesů."
      image="/assets/images/Yeast_services_logo_transparent.png" // <--- Doplňte cestu k logu
      imageAlt="Yeast Services Logo"
    />
  </Section>
);

export { VerticalFeatures }; // <--- Důležité: Exportujeme pod novým názvem OurDivisions