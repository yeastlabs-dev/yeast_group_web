// src/layout/Section.js

import type { ReactNode } from 'react';

type ISectionProps = {
  title?: ReactNode;
  description?: ReactNode; // Změněno na ReactNode
  yPadding?: string;
  children: ReactNode;
  id?: string;
  bgColor?: string;
};

const Section = (props: ISectionProps) => {
  // Určíme barvu textu nadpisů a popisu uvnitř Section
  // Pokud je pozadí tmavé (např. primary-900), použijeme světlý text. Jinak tmavý.
  const isDarkBackground = props.bgColor && (props.bgColor.includes('primary-900') || props.bgColor.includes('primary-800') || props.bgColor.includes('gray-900'));
  const titleTextColor = isDarkBackground ? 'text-white' : 'text-primary';
  const descriptionTextColor = isDarkBackground ? 'text-gray-300' : 'text-gray-700';

  return (
    <div id={props.id} className={`${props.bgColor || 'bg-white'} ${props.yPadding || 'py-16'}`}>
      <div className="max-w-screen-lg px-3 mx-auto">
        {(props.title || props.description) && (
          <div className="mb-12 text-center">
            {props.title && (
              // Použití správné syntaxe pro classname s template literály
              <h2 className={`text-4xl font-bold ${titleTextColor}`}>
                {props.title}
              </h2>
            )}
            {props.description && (
              // Použití správné syntaxe pro classname s template literály
              <div className={`mt-4 text-xl md:px-20 ${descriptionTextColor}`}>
                {props.description}
              </div>
            )}
          </div>
        )}

        {props.children}
      </div>
    </div>
  );
};

export { Section };