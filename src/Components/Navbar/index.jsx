
const Nav = () => {
  return (
    <nav className="flex items-center justify-center gap-20  w-full  h-20 absolute z-10">
      <div>
        <img src="https://img.freepik.com/vector-premium/rosa-logo-flor-vector-icono-ilustracion_662448-599.jpg" alt="logo" width={"50px"} className="rounded-full" />
      </div>
      <div className="flex justify-center items-center gap-10 ubuntu-bold text-white">
        <ul className="w-full h-8  hover:text-pink-500  hover:border-b-2 hover:border-b-pink-500  text-center p-2">
          <li className="w-full h-full flex justify-center items-center">
            <a href="">HOME</a>
          </li>
        </ul>
        <ul className="w-full h-8  hover:text-pink-500  hover:border-b-2 hover:border-b-pink-500  text-center p-2">
          <li className="w-full h-full flex justify-center items-center">
            <a href="">NOSOTROS</a>
          </li>
        </ul>
        <ul className="w-full h-8  hover:text-pink-500  hover:border-b-2 hover:border-b-pink-500  text-center p-2">
          <li className="w-full h-full flex justify-center items-center">
            <a href="">BENEFICIOS</a>
          </li>
        </ul>
        <ul className="w-full h-8  hover:text-pink-500  hover:border-b-2 hover:border-b-pink-500  text-center p-2">
          <li className="w-full h-full flex justify-center items-center">
            <a href="">PORTAFOLIO</a>
          </li>
        </ul>
        <ul className="w-full h-8  hover:text-pink-500  hover:border-b-2 hover:border-b-pink-500  text-center p-2">
          <li className="w-full h-full flex justify-center items-center">
            <a href="">CONTACTAME</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export { Nav }