export function SobreNos() {
  return (
    <section className="w-full h-96 flex max-md:flex-col justify-center items-center bg-gradient-to-r from-qjred to-qjblue transition-all duration-300">
      <div className="w-3/4 md:w-1/4 text-left md:pr-6 max-md:pb-3 text-5xl 2xl:text-8xl lg:text-6xl uppercase font-bold transition-all duration-300">
        <h1>Quem somos?</h1>
      </div>
      <div className="w-3/4 md:w-1/2 md:pl-12 transition-all duration-300">
        <p className="text-sm 2xl:text-2xl lg:text-lg transition-all duration-300">
          A <b>Quarta Jovem</b> é uma sociedade interna da <b>Quarta Igreja Presbiteriana de Garanhuns</b>. Ligada a UMP
          (União de Mocidade Presbiteriana), tem como integrantes jovens de 18 a 35 anos.
        </p>
      </div>
    </section>
  );
}