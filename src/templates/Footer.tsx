// src/components/Footer.js

import Link from 'next/link';

import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter'; // Zkontrolujte cestu
import { Section } from '../layout/Section';
import { Logo } from './Logo'; // Zkontrolujte cestu k vaší Logo komponentě

const Footer = () => (
  <Background color="bg-gray-100"> {/* Pozadí hlavní části patičky */}
    <Section yPadding="py-10"> {/* Menší vertikální padding */}
      <CenteredFooter
        logo={<Logo />} // Používá vaši Logo komponentu
        iconList={null} // <--- Odstraníme ikony, takže necháme null nebo prázdný fragment
      >
        {/* TEXTOVÉ ODKAZY: Upravíme tak, aby směřovaly na ID sekcí */}
        <li className="mr-6">
          <Link href="/" className="text-gray-700 transition-colors duration-200 hover:text-primary">Home</Link>
        </li>
        <li className="mr-6">
          <Link href="#nas-pristup" scroll={false} className="text-gray-700 transition-colors duration-200 hover:text-primary">Náš přístup</Link>
        </li>
        <li className="mr-6">
          <Link href="#nase-divize" scroll={false} className="text-gray-700 transition-colors duration-200 hover:text-primary">Naše divize</Link>
        </li>
        <li className="mr-6">
          <Link href="#nasi-klienti" scroll={false} className="text-gray-700 transition-colors duration-200 hover:text-primary">Naši klienti</Link>
        </li>
        <li className="mr-6">
          <Link href="#kontakt" scroll={false} className="text-gray-700 transition-colors duration-200 hover:text-primary">Kontakt</Link>
        </li>
        {/* Případně další odkazy, např. GDPR/Zásady ochrany osobních údajů */}
        {/* <li>
          <Link href="/gdpr" className="text-gray-700 transition-colors duration-200 hover:text-primary">Zásady ochrany osobních údajů</Link>
        </li> */}
      </CenteredFooter>
    </Section>
    {/* Nová sekce pro copyright a zmínku o Yeastlabs */}
    <div className="py-4 text-sm text-center text-white bg-primary-900">
      © {new Date().getFullYear()} YEAST GROUP - Všechna práva vyhrazena. | Vytvořeno s pomocí <span className="font-semibold text-secondary"><a
      href="https://yeastlabs.dev"
      target="_blank"
      rel="noopener noreferrer"
      className="underline transition hover:text-gray-700"
    >
      Yeastlabs
    </a></span>.
    </div>
  </Background>
);

export { Footer };