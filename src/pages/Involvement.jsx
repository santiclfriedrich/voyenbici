import InvolvementCard from "../components/Involvement/InvolvementCard";
import { useLayoutEffect, useState } from "react";

const Involvement = () => {

  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const updateSize = () => {
      setIsMobile(window.innerWidth < 568);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <section className="ivolvement">
      <div className="bg-[#C4D8F0] lg:bg-bg-wave-blue-down h-[30vh] bg-cover bg-no-repeat pt-[38px]">
        <h2 className="ml-3 lg:ml-[74px] text-[32px] w-[70%] lg:w-[300px] text-custom-blue lg:text-[40px] font-[700]">
          ¿Como puedo involucrarme?
        </h2>
      </div>

      {/* Los textos que se encuentran encerrados entre **text** se van a renderiza en color azul y negrita */}

      <InvolvementCard
        title={'Apadrina un banco de bicicletas'}
        img1={`${isMobile ? '/involve/cpi-mob-1.png' :'/involve/cpi-des-1.png'}`}
        p1={
          "Los Bancos de Bicicletas son **lugares estratégicos dentro de comunidades**, funcionan como **refugio para las bicis recicladas** y renovadas. Estos están compuestos por un **lote de entre cinco y quince rodados**, junto con cascos, chalecos reflectivos, infladores, kits de herramientas e insumos para sus arreglos."
        }
        p2={
          "A su vez, brindamos talleres de enseñanza de seguridad vial para los jóvenes, y ofrecemos instructivos y varias herramientas para contemplar el correcto mantenimiento de las bicis."
        }
        img2={'/involve/cpi-img-chica-1.svg'}
      />
      <InvolvementCard
        title={'Apadrina un lote de bicicletas'}
        img1={`${isMobile ? '/involve/cpi-mob-2.png' :'/involve/cpi-des-2.png'}`}
        p1={
          "Apadrinar un Lote de Bicicletas en Escuelas Rurales es una acción de gran impacto que podés realizar junto a nuestro equipo de Voy En Bici. Esta participación puede hacer posible el acceso de los niños y adolescentes en las Escuelas primarias y secundarias del país, dando una solución conjunta y real a la movilidad de las personas más desfavorecidas."
        }
        p2={
          "Las bicicletas que componen el lote deberán ser otorgadas, compradas o financiadas por una Persona Física o Jurídica."
        }
        img2={'/involve/cpi-img-chica-2.svg'}
      />
      <InvolvementCard
        title={'Colabora con insumos'}
        img1={`${isMobile ? '/involve/cpi-mob-3.png' :'/involve/cpi-des-3.png'}`}
        p1={
          "Detrás de cada bicicleta reparada por Voy En Bici hay amor, trabajo y sacrificio."
        }
        p2={
          "Las bicicletas recicladas requieren de materiales nuevos como cámaras, cadenas, pedales, manubrios, cascos, chalecos e infladores. Consideramos estos insumos cruciales para su mantenimiento. Es por esto que, si sos parte de la comunidad de la bicicleta, el apoyo siempre será bienvenido. ¡Cambiemos las realidades!"
        }
        img2={'/involve/cpi-img-chica-3.svg'}
      />
      <InvolvementCard
        title={'Dona tu bici'}
        img1={`${isMobile ? '/involve/cpi-mob-4.png' :'/involve/cpi-des-4.png'}`}
        p1={
          "El uso de la bicicleta como medio de transporte tiene muchas ventajas: el cuidado del medio ambiente, el ahorro de combustible, el beneficio para nuestra salud y también nos permite evitar embotellamientos de tránsito. Pero por sobre todas las cosas, la bicicleta puede ser para las personas una hábito saludable, ecológico, económico y así transformarse en un un excelente recurso en su vida cotidiana."
        }
        p2={
          "¡Tu contribución puede salvar a las personas menos favorecidas!"
        }
        img2={'/involve/cpi-img-chica-4.svg'}
      />
      <InvolvementCard
        title={'Llevanos a tu Colegio '}
        img1={`${isMobile ? '/involve/cpi-mob-5.png' :'/involve/cpi-des-5.png'}`}
        p1={
          "En Voy En Bici creemos que es posible integrar las instituciones educativas a través de la movilidad inclusiva y sostenible. Nuestro programa “VOY EN BICI EN COLES” realiza talleres de mecánica de bicicletas de segunda mano con instructores capacitados, de manera que los adolescentes tengan una aproximación a la bici y luego puedan entregarlas en Escuelas Rurales del Norte del País."
        }
        p2={
          "Es una experiencia tanto técnica como recreativa para los adolescentes. Si sos directivo, docente o padre de una comunidad educativa, ¡no dudes en contactarnos!"
        }
        img2={'/involve/cpi-img-chica-5.svg'}
      />
      <InvolvementCard
        title={'Sumá a tu Empresa a un Voluntariado Corporativo'}
        img1={`${isMobile ? '/involve/cpi-mob-6.png' :'/involve/cpi-des-6.png'}`}
        p1={
          "El trabajo en equipo es un pilar fundamental de cualquier organización, desde VOY EN BICI impulsamos los Workshops con Empresas, para crear un entorno propicio para el aprendizaje y la gestión de grupos. Las jornadas de integración y construcción de equipos frente a nuevos desafíos, permiten exponer las destrezas, fortalezas y oportunidades de los grupos frente a lo desconocido. Esta actividad de triple impacto con un fin solidario brindará una experiencia única tanto a los empleados como a la Empresa. "
        }
        p2={
          "La colaboración con Empresas nos permitirá potenciar nuestro impacto y extender nuestros valores ¡Juntos podemos lograr un cambio positivo!"
        }
        img2={'/involve/cpi-img-chica-6.svg'}
      />
    </section>
  );
};

export default Involvement;
