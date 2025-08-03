import className from 'classnames'; // Import je správný
import type { ReactNode } from 'react'; // <--- Importujte ReactNode

type IButtonProps = {
  xl?: boolean;
  children: ReactNode; // <--- Změněno z 'string' na 'ReactNode' pro flexibilitu
  className?: string; // <--- Přidáno: Standardní prop pro předávání externích CSS tříd
};

const Button = (props: IButtonProps) => {
  // `classnames` je skvělý pro podmiňené třídy.
  // Zde přidáme i props.className, aby se zkombinovalo s těmi interními.
  const btnClass = className(
    'btn', // Základní třída, platí vždy
    {
      'btn-xl': props.xl,     // Aplikuje se, pokud je props.xl true
      'btn-base': !props.xl,  // Aplikuje se, pokud props.xl není true
      'btn-primary': true,    // Vždy aplikovaná třída pro primární styl
    },
    props.className // <--- Důležité: Přidává předané className
  );

  return (
    // Používáte <div> jako kořenový element tlačítka.
    // Pro sémantiku je obvykle lepší použít <button> element,
    // ale pokud je to záměr (např. pro obalení Link), je to OK.
    // Změním to na button pro lepší sémantiku, pokud není důvod pro div.
    <button className={btnClass}> {/* Změněno z <div> na <button> */}
      {props.children}

      <style jsx>
        {`
          .btn {
            @apply inline-block rounded-md text-center;
            /* Pokud se používá <button>, pak možná potřebujete resetovat defaultní styly */
            border: none;
            cursor: pointer;
            text-decoration: none; /* Pro Link, který je uvnitř */
          }

          .btn-base {
            @apply text-lg font-semibold py-2 px-4;
          }

          .btn-xl {
            @apply font-extrabold text-xl py-4 px-6;
          }

          .btn-primary {
            /* Zde by měly být vaše nové barvy z tailwind.config.js */
            @apply text-white bg-secondary; /* Použijeme secondary pro tlačítko, jak bylo navrženo dříve */
          }

          .btn-primary:hover {
            /* Můžete použít tmavší odstín secondary barvy */
            @apply bg-secondary-700;
          }
        `}
      </style>
    </button> // Změněno z </div> na </button>
  );
};

export { Button };