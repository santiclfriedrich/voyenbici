import SumaEmpresa from '../../assets/svgs/SumaEmpresa';
import Insumos from '../../assets/svgs/Insumos';
import Voluntariado from '../../assets/svgs/Voluntariado';
import Donacion from '../../assets/svgs/Donacion';
import Bicicleta from '../../assets/svgs/Bicicleta';
import SVG from './SVG'

const svgList = [
  { id: 1, svg: <SumaEmpresa />, description: 'Sumar a una empresa como aliada' },
  { id: 2, svg: <Donacion />, description: 'Ayudarnos con una donación monetaria' },
  { id: 3, svg: <Voluntariado />, description: 'Formar parte del voluntariado' },
  { id: 4, svg: <Bicicleta />, description: 'Donar una bicicleta' },
  { id: 5, svg: <Insumos />, description: 'Aportar insumos' },
];

export default function SVGsContainer() {
  return (
    <div className='max-w-full gap-8 flex justify-center'>
      {svgList.map((item) => (
        <div key={item.id} className='inline-block mx-2'>
          <SVG svg={item.svg} description={item.description} />
        </div>
      ))}
    </div>
  );
}
