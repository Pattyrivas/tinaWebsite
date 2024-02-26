const Portafolio = () => {
  return (
    <section id="portafolio" className="bg-pink-100 flex flex-col items-center justify-center">
      <div>
        <p className="w-full ubuntu-bold-italic mt-28 text-5xl text-pink-500">Valen Creative</p>
        <p className="w-full ubuntu-ligth-italic  text-2xl text-pink-500">GRAPHIC DESIGN PORTFOLIO</p>
      </div>
      <div className=" grid place-items-center gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen=lg  h-screen  p-10">
        <div>
          <img
            src="https://www.esneca.com/wp-content/uploads/que-es-diseno-grafico-1200x900.jpg"
            alt="proyecto valen"
            className="w-full rounded-lg cursor-pointer"
          />
          <h3 className="ubuntu-medium-italic text-lg text-pink-500">
            Proyecto valen
          </h3>
          <p className="ubuntu-regular text-white">descripcion del proyecto bla bla bla...</p>
        </div>
        <div>
          <img
            src="https://www.esneca.com/wp-content/uploads/que-es-diseno-grafico-1200x900.jpg"
            alt="proyecto valen"
            className="w-full rounded-lg cursor-pointer"
          />
          <h3 className="ubuntu-medium-italic text-lg text-pink-500">
            Proyecto valen
          </h3>
          <p className="ubuntu-regular text-white">descripcion del proyecto bla bla bla...</p>
        </div>
        <div>
          <img
            src="https://www.esneca.com/wp-content/uploads/que-es-diseno-grafico-1200x900.jpg"
            alt="proyecto valen"
            className="w-full rounded-lg cursor-pointer"
          />
          <h3 className="ubuntu-medium-italic text-lg text-pink-500">
            Proyecto valen
          </h3>
          <p className="ubuntu-regular text-white">descripcion del proyecto bla bla bla...</p>
        </div>
        <div>
          <img
            src="https://www.esneca.com/wp-content/uploads/que-es-diseno-grafico-1200x900.jpg"
            alt="proyecto valen"
            className="w-full rounded-lg cursor-pointer"
          />
          <h3 className="ubuntu-medium-italic text-lg text-pink-500">
            Proyecto valen
          </h3>
          <p className="ubuntu-regular text-white">descripcion del proyecto bla bla bla...</p>
        </div>
        <div>
          <img
            src="https://www.esneca.com/wp-content/uploads/que-es-diseno-grafico-1200x900.jpg"
            alt="proyecto valen"
            className="w-full rounded-lg cursor-pointer"
          />
          <h3 className="ubuntu-medium-italic text-lg text-pink-500">
            Proyecto valen
          </h3>
          <p className="ubuntu-regular text-white">descripcion del proyecto bla bla bla...</p>
        </div>
      </div>


    </section>
  )
}

export { Portafolio }