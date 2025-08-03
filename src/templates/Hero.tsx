// src/components/Hero.js

import Link from 'next/link';
import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  // Změna barvy pozadí na bílou (bg-white)
  <Background color="bg-white"> {/* <--- Změněno z bg-primary-900 na bg-white */}
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        {/* Navigační odkazy - barvy upraveny pro světlé pozadí */}
        <li className="mr-6">
          <Link href="#nas-pristup" scroll={false} className="font-medium text-gray-700 hover:text-primary"> {/* Změněno text-gray-200 na text-gray-700 */}
            Náš přístup
          </Link>
        </li>
        <li className="mr-6">
          <Link href="#nase-divize" scroll={false} className="font-medium text-gray-700 hover:text-primary"> {/* Změněno text-gray-200 na text-gray-700 */}
            Naše divize
          </Link>
        </li>
        <li className="mr-6">
          <Link href="#nasi-klienti" scroll={false} className="font-medium text-gray-700 hover:text-primary"> {/* Změněno text-gray-200 na text-gray-700 */}
            Naši klienti
          </Link>
        </li>
        <li>
          <Link href="#kontakt" scroll={false} className="font-medium text-gray-700 hover:text-primary"> {/* Změněno text-gray-200 na text-gray-700 */}
            Kontakt
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        // HLAVNÍ NADPIS - Barva textu upravena pro světlé pozadí
        title={
          <h1 className="text-5xl font-bold leading-tight text-primary sm:text-6xl md:text-7xl"> {/* Změněno text-white na text-primary (tmavá barva) */}
            YEAST GROUP: <span className="text-secondary">Strategie, růst a inovace </span>pod jednou střechou.
          </h1>
        }
        // PODNADPIS (SUBTITLE) - Barva textu upravena pro světlé pozadí
        subtitle={
          <h2 className="mt-6 text-xl font-normal text-gray-700 sm:text-2xl md:text-3xl"> {/* Změněno text-gray-300 na text-gray-700 */}
            Moderní holding, který propojuje byznys myšlení s technologickou precizností pro transformaci vašeho podnikání.
          </h2>
        }
        // POPIS - Dlouhý popis, rozdělený do odstavců
        description={
          <>
            <p className="mt-4 text-lg text-gray-600 sm:text-xl md:text-2xl"> {/* Změněno text-gray-400 na text-gray-600 */}
              V <strong>YEAST GROUP</strong> se zaměřujeme na <strong>inteligentní řízení</strong> a <strong>dynamickou adaptaci</strong>. Jsme inovačním motorem pro vaši budoucnost.
            </p>
            <p className="mt-2 text-lg text-gray-600 sm:text-xl md:text-2xl"> {/* Změněno text-gray-400 na text-gray-600 */}
              Naše divize nabízí špičkovou expertízu, která zjednoduší komplexnost a zajistí <strong>měřitelný růst</strong> vašeho podnikání.
            </p>
          </>
        }
        // TLAČÍTKO - Barva textu již byla správná pro sekundární barvu
        button={
          <Link href="#kontakt" scroll={false}>
            <Button xl className="px-6 py-3 font-bold text-white rounded-lg shadow-md bg-secondary hover:bg-secondary-700">
              Spojte se s námi
            </Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };