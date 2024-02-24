import { contactFormAPI } from "../../helper/contacFormAPI"
const Contactame = () => {
  const handleSubmit = async (event) => {
    const myform = document.getElementById("form")
    console.log('evento: ', event)
    event.preventDefault()
    const form = new FormData(event.target)
    const response = await fetch(event.target.action, {
      method: myform.method,
      body: form,
      headers: {
        "accept": "application/json"
      }
    })
    if (response.ok) {
      myform.reset()
      alert("Gracias por contactarme")
    }
  }
  return (
    <div id="contactame" className="grid grid-cols-2 m-10">
      <div className="flex flex-col items-center justify-center">
        <form id="form" action="https://formspree.io/f/xvoeajda" method="POST" onSubmit={handleSubmit} className=" flex flex-col gap-3">
          <p
            className="ubuntu-medium-italic text-pink-500 text-3xl"
          >Contáctame</p>
          <label htmlFor="nombre" className="ubuntu-medium text-pink-700 text-xl">Nombre</label>
          <input htmlFor="nombre" type="text" name="nickname" placeholder="Nombre y apellido..." className="border border-pink-200 rounded-lg w-80 h-8 p-2 focus:outline-pink-700" />
          <label htmlFor="Email" aria-required className="ubuntu-medium text-pink-700 text-xl">Email</label>
          <input htmlFor="Email" type="email" name="email" placeholder="Direccion de correo" className="border border-pink-200 rounded-lg w-80 h-8 p-2 focus:outline-pink-700" />
          <label htmlFor="Mensaje" className="ubuntu-medium text-pink-700 text-xl">Mensaje</label>
          <textarea htmlFor="Mensaje" type="text" name="message" placeholder="Mensaje..." className="border border-pink-200 rounded-lg w-80 h-14 p-2 focus:outline-pink-700" />
          <button type="submit" className="bg-pink-500 text-white ubuntu-bold rounded-lg h-10 mt-3 hover:bg-pink-400">Enviar</button>
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