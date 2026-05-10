import SumaEmpresa from '../../assets/svgs/SumaEmpresa';
import Insumos from '../../assets/svgs/Insumos';
import Voluntariado from '../../assets/svgs/Voluntariado';
import Donacion from '../../assets/svgs/Donacion';
import Bicicleta from '../../assets/svgs/Bicicleta';
import SVG from './SVG'
import { useLanguage } from '../../context/LanguageContext';

export default function SVGsContainer() {
  const { t } = useLanguage();

  const svgList = [
    { id: 1, svg: <SumaEmpresa />, description: t('svg_1') },
    { id: 2, svg: <Donacion />, description: t('svg_2') },
    { id: 3, svg: <Voluntariado />, description: t('svg_3') },
    { id: 4, svg: <Bicicleta />, description: t('svg_4') },
    { id: 5, svg: <Insumos />, description: t('svg_5') },
  ];

  return (
    <div className="max-w-full w-full h-auto flex flex-wrap gap-8 md:gap-20 justify-center">
      {svgList.map((item) => (
        <div key={item.id} className="inline-block">
          <SVG svg={item.svg} description={item.description} />
        </div>
      ))}
    </div>
  );
}
