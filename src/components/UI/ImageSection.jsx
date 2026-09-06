// Grafico de los Objetivos de Desarrollo Sostenible.
// Es una infografia: tiene que verse entera, asi que va con object-contain y no
// como background recortado. Carga diferida porque esta bien abajo en el inicio.
export default function ImageSection() {
  return (
    <section className="w-full bg-white px-6 sm:px-10 lg:px-[74px] py-10 lg:py-14">
      <img
        src="/home/ods-objetivos.png"
        width="1272"
        height="564"
        loading="lazy"
        className="w-full max-w-[1100px] mx-auto h-auto object-contain"
        alt="Los Bancos de Bicicletas contribuyen a 10 Objetivos de Desarrollo Sostenible: fin de la pobreza, salud y bienestar, educación de calidad, igualdad de género, trabajo decente y crecimiento económico, reducción de las desigualdades, ciudades y comunidades sostenibles, producción y consumo responsables, acción por el clima, y alianzas para lograr los objetivos."
      />
    </section>
  );
}
