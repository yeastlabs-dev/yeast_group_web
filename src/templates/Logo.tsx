// src/components/Logo.js

import Link from 'next/link';
import Image from 'next/image';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  // Velikosti pro logo Yeast Group (přizpůsobte dle potřeby a poměru stran)
  const width = props.xl ? 220 : 150; // Příklad šířky
  const height = props.xl ? 60 : 40;  // Příklad výšky (udržujte poměr stran loga)

  return (
    <Link href="/" className="relative inline-block">
      <Image
        src="/assets/images/Yeast_Group_logo_white.png" // <--- ZDE JE CESTA K NOVÉMU LOGU
        alt="Yeast Group Logo"
        width={width}
        height={height}
        className="h-auto"
      />
    </Link>
  );
};

export { Logo };