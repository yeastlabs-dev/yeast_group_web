import type { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;      // Očekáváme <h1 ...> element
  subtitle: ReactNode;   // Očekáváme <h2 ...> element
  description: ReactNode; // Očekáváme <p ...> elementy
  button: ReactNode;     // Očekáváme <Link><Button/></Link> element
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    {/* Vykreslí přímo ReactNode, který již obsahuje H1 */}
    {props.title}

    {/* Vykreslí přímo ReactNode, který již obsahuje H2 */}
    {props.subtitle}

    {/* Popis - mb-16 mt-4 text-2xl mohou být styly pro celý blok popisu
       Pokud má description své vlastní p tagy, pak by tyto styly
       měly být na těch p tazích, nebo můžete přidat kontejner div.
       Zde zachovám původní div pro kompatibilitu, pokud description
       nepředává externí div.
    */}
    <div className="mb-16 mt-4 text-2xl">
        {props.description}
    </div>

    {props.button}
  </header>
);

export { HeroOneButton };