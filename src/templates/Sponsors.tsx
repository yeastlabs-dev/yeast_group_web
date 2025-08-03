// src/components/OurClients.js (Přejmenujte si původní soubor, např. z Technologies.js)

import { Section } from '@/layout/Section'; // Zkontrolujte cestu
import Image from 'next/image'; // Důležité: Přidáme import Image pro optimalizaci log

const Sponsors = () => ( // <--- Přejmenováno na OurClients pro lepší sémantiku
  <Section
    id="nasi-klienti" // ID pro navigaci
    title={
      <>
        Naši <span className="text-secondary">klienti</span> {/* Zvýraznění "klienti" sekundární barvou */}
      </>
    }
    description="Důvěřují nám přední hráči na trhu, protože přinášíme měřitelné výsledky a efektivní řešení." // Upravený popis
  >
    <div className="grid items-center max-w-4xl grid-cols-2 gap-10 mx-auto mt-12 sm:grid-cols-3 lg:grid-cols-3 justify-items-center">
      {/* Loga klientů - Zajišťujeme použití Next.js Image komponenty */}
      {/* Ponecháno MAN HOLDING, TAF ESTATE, Platinum - ostatní jsou zakomentovány/odstraněny pro budoucí doplnění */}

      {/* MAN HOLDING */}
      <Image
        src="/assets/images/manholding_logo.png"
        alt="MAN HOLDING Logo"
        width={150} // Upravte šířku a výšku dle potřeby, udržujte poměr stran
        height={80}
        className="w-auto transition-opacity duration-300 opacity-75 max-h-20 hover:opacity-100"
      />

      {/* TAF ESTATE */}
      <Image
        src="/assets/images/taf_logo.png"
        alt="TAF ESTATE Logo"
        width={150}
        height={80}
        className="w-auto transition-opacity duration-300 opacity-75 max-h-20 hover:opacity-100"
      />

      {/* Platinum */}
      <Image
        src="/assets/images/platinum_logo.png"
        alt="Platinum Logo"
        width={150}
        height={80}
        className="w-auto transition-opacity duration-300 opacity-75 max-h-20 hover:opacity-100"
      />

      {/* Narosel */}
      <Image
        src="/assets/images/Narosel_logo.png"
        alt="Narosel Logo"
        width={150}
        height={80}
        className="w-auto transition-opacity duration-300 opacity-75 max-h-20 hover:opacity-100"
      />


      {/* Zde můžete přidat další loga, jakmile je budete mít */}
      {/* Příklad pro přidání nového loga: */}
      {/* <Image
        src="/assets/images/vase_nove_logo_klienta.png"
        alt="Nové Logo Klienta"
        width={150}
        height={80}
        className="w-auto transition-opacity duration-300 opacity-75 max-h-20 hover:opacity-100"
      /> */}

    </div>

    <div className="mt-12 text-lg text-center text-gray-700">
      <p>
        Chcete se dozvědět více o našich úspěšných projektech? <br />
        <span className="font-bold text-primary">Kontaktujte nás pro případové studie!</span>
      </p>
    </div>
  </Section>
);

export { Sponsors }; // <--- Důležité: Exportujeme jako OurClients pro sémantiku