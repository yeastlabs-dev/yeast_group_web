import { Section } from '@/layout/Section';

const WhyUs = () => (
  <Section
    id="nas-pristup"
    bgColor="bg-primary-900" // Tmavé pozadí pro celou sekci
    title={
      <>
        Náš <span className="text-secondary">přístup</span>: Síla rodinného holdingu.
      </>
    }
    description={<span className="text-gray-300">Jsme rodinný holding s dlouhodobou vizí, který se specializuje na efektivní správu vlastního portfolia a investic.</span>}
  >
    <div className="max-w-3xl mx-auto space-y-8 text-xl text-center text-gray-200">
      <p className="font-medium leading-relaxed">
        V <strong>YEAST GROUP</strong> stavíme na stabilitě a <strong>strategickém řízení vlastního kapitálu</strong>. Naše expertíza v oblasti investic a nemovitostí je základem, na kterém budujeme budoucí hodnotu.
      </p>
      <p className="font-medium leading-relaxed">
        Zároveň jsme dynamickým ekosystémem. Cenné zkušenosti a <strong>vyvinuté technologie</strong>, které zdokonalujeme při správě našeho interního portfolia, nabízíme i externím partnerům. Ať už potřebujete:
      </p>
      <ul className="max-w-xl mx-auto space-y-3 text-left list-disc list-inside">
        <li>
          <strong className="text-secondary">Vývoj automatizací:</strong> Pro zvýšení efektivity vašich procesů.
        </li>
        <li>
          <strong className="text-secondary">Efektivní správu:</strong> Pro optimalizaci vašich aktiv a operací.
        </li>
        <li>
          <strong className="text-secondary">Projektové řízení staveb:</strong> Pro bezproblémovou realizaci vašich stavebních záměrů.
        </li>
      </ul>
      <p className="font-medium leading-relaxed">
        Posledním pilířem naší expanze je <strong>venture divize</strong>, která se aktivně zaměřuje na <strong>kapitálové vstupy do perspektivních projektů</strong> třetích stran. Hledáme inovace a potenciál, abychom společně rostli.
      </p>
      <p className="font-medium leading-relaxed">
        <span className="font-bold text-secondary"><strong>YEAST GROUP</strong>: Spojení stabilní tradice s agilní inovací.</span>
      </p>
    </div>
  </Section>
);

export { WhyUs };