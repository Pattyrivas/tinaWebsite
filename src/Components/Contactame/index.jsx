const Contactame = () => {
  return (
    <div className="grid grid-cols-2 m-10">
      <div className="flex flex-col items-center justify-center">
        <form action="" className=" flex flex-col gap-3">
          <p
            className="ubuntu-medium-italic text-pink-500 text-3xl"
          >Contactame</p>
          <label for="nombre" className="ubuntu-medium text-pink-700 text-xl">Nombre</label>
          <input for="nombre" type="text" placeholder="Nombre y apellido..." className="border border-pink-200 rounded-lg w-80 h-8 p-2 focus:outline-pink-700" />
          <label for="Email" className="ubuntu-medium text-pink-700 text-xl">Email</label>
          <input for="Email" type="email" placeholder="Direccion de correo" className="border border-pink-200 rounded-lg w-80 h-8 p-2 focus:outline-pink-700" />
          <label for="Mensaje" className="ubuntu-medium text-pink-700 text-xl">Mensaje</label>
          <textarea for="Mensaje" type="text" placeholder="Mensaje..." className="border border-pink-200 rounded-lg w-80 h-14 p-2 focus:outline-pink-700" />
          <button className="bg-pink-500 text-white ubuntu-bold rounded-lg h-10 mt-3 hover:bg-pink-400">Enviar</button>
        </form>
      </div>
      <div>
        <img
          src="https://definicion.de/wp-content/uploads/2011/11/carta.png"
          alt=""
          className="rounded-xl"
        />
      </div>

    </div>

  )
}

export { Contactame }