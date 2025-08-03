// src/cta/CTABanner.js

import type { ReactNode } from 'react';

type ICTABannerProps = {
  title: ReactNode;
  subtitle: ReactNode;
  button: ReactNode;
};

export const CTABanner = ({ title, subtitle, button }: ICTABannerProps) => (
  // Důležité: Přidáváme Tailwind CSS třídy pro layout a pozadí banneru.
  // Použijeme flexbox pro zarovnání obsahu a bg-gray-200 pro pozadí.
  <div className="bg-gray-200 rounded-lg p-10 flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-6 md:space-y-0 md:space-x-8">
    <div className="flex-grow"> {/* Tento div bude pro texty */}
      <h2 className="text-4xl font-bold text-gray-900 mb-3">{title}</h2> {/* Přidány základní styly nadpisu */}
      <p className="text-xl text-gray-700">{subtitle}</p> {/* Přidány základní styly podnadpisu */}
    </div>
    <div className="flex-shrink-0 mt-6 md:mt-0"> {/* Tento div bude pro tlačítko */}
      {button}
    </div>
  </div>
);