const stats = [
  { number: "1.300", label: "Bicis Renovadas" },
  { number: "195", label: "Estudiantes Beneficiados" },
  { number: "44", label: "Bancos de Bicis" },
  { number: "15", label: "Escuelas Rurales" },
  { number: "11", label: "Provincias" },
];

export default function StatsBar() {
  return (
    <div className="w-full flex flex-col sm:flex-row">
      {stats.map((stat, index) => {
        const opacity = 1 - index * 0.13;
        return (
          <div
            key={index}
            className="flex-1 flex flex-col items-center justify-center py-8 px-4 text-white text-center"
            style={{ backgroundColor: `rgba(0, 84, 190, ${opacity})` }}
          >
            <span className="text-[32px] lg:text-[40px] font-bold leading-none mb-2">
              {stat.number}
            </span>
            <span className="text-[13px] lg:text-[15px] font-light leading-snug max-w-[120px]">
              {stat.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
