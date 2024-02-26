const Nosotros = () => {
  return (
    <section id="yo" className="flex w-full h-1/2 items-center justify-center p-10 gap-10 bg-pink-100">
      <div className=" w-full shadow-xl ">
        <img
          src="https://secrecyjewels.es/blog/wp-content/uploads/2022/10/esencia-de-una-persona.jpg"
          alt="valen"
          className="w-full h-full rounded-md"
        />
      </div>
      <div className="w-full flex flex-col justify-center items-center ">
        <h2 className="text-pink-500  text-start ubuntu-bold-italic text-6xl mb-8">
          Valen Creative
        </h2>
        <p className=" w-3/4 text-pink-500 ubuntu-medium-italic text-lg">
          Soy Valentina, una diseñadora gráfica de 27 años, nacida en Caracas, Venezuela, y actualmente establecida en Atlanta. Desde mi niñez, supe que la creatividad era mi lenguaje natural, pero fue a los 24 años cuando decidí dedicarme por completo al fascinante mundo del diseño gráfico.
        </p>

      </div>
    </section>
  )
}

export { Nosotros }