// src/components/Banner.js

import Link from 'next/link'; // Import pro Next.js Link komponentu
import { Button } from '../button/Button'; // Import pro vaši Button komponentu
import { CTABanner } from '../cta/CTABanner'; // Import pro CTABanner komponentu
import { Section } from '../layout/Section'; // Import pro Section komponentu

const Banner = () => (
  // Sekce, která obaluje celý banner, s vertikálním paddingem
  <Section
    id="kontakt" // ID pro navigaci na tuto sekci (kontaktní formulář, i když zde je jen mailto)
    yPadding="py-20"
  >
    {/* CTABanner komponenta, která vykresluje titulek, podtitulek a tlačítko */}
    <CTABanner
      // Titulek CTA banneru - přizpůsoben pro YEAST GROUP
      title={
        <>
          Váš další krok k růstu? <span className="text-secondary">Spojte se s námi.</span>
        </>
      }
      // Podtitulek CTA banneru - přizpůsoben pro YEAST GROUP
      subtitle={
        <>
          Ať už hledáte strategickou správu aktiv, technologické inovace, nebo kapitálový vstup,
          <strong>YEAST GROUP</strong> je váš partner pro budování hodnoty.
        </>
      }
      // Tlačítko pro CTA banner, s mailto odkazem
      button={
        // Link komponenta pro navigaci na mailto adresu YEAST GROUP
        <Link href="mailto:info@yeast-group.cz" className="no-underline"> {/* <--- Upravena emailová adresa */}
          {/* Button komponenta s Tailwind CSS třídami pro styling */}
          <Button xl className="px-6 py-3 font-bold text-white rounded-lg shadow-md bg-secondary hover:bg-secondary-700">
            Domluvte si konzultaci
          </Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };