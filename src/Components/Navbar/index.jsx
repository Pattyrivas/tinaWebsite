import { useState } from 'react'

const Nav = () => {
  //estado para hacer el navbar dinamico
  const [scrollColor, setScrollColor] = useState('bg-none')
  //escuchar el evento de escroll para cambiar el estado
  window.addEventListener("scroll", (event) => {
    if (window.scrollY > 0) {
      setScrollColor('bg-pink-500')
    } else {
      setScrollColor('bg-none')
    }
  })
  return (
    <nav className={`${scrollColor} flex items-center justify-between gap-20 pl-20 pr-20 w-full  h-20  z-10 fixed `}>
      <div>
        <img src="https://img.freepik.com/vector-premium/rosa-logo-flor-vector-icono-ilustracion_662448-599.jpg" alt="logo" width={"50px"} className="rounded-full" />
      </div>
      <div className="flex justify-center items-center gap-10 ubuntu-bold text-white ">
        <ul className="w-full h-8  hover:text-pink-200  hover:border-b-2 hover:border-b-pink-200  text-center p-2">
          <li className="w-full h-full flex justify-center items-center">
            <a href="#introduction">HOME</a>
          </li>
        </ul>
        <ul className="w-full h-8  hover:text-pink-200  hover:border-b-2 hover:border-b-pink-200  text-center p-2">
          <li className="w-full h-full flex justify-center items-center">
            <a href="#yo">YO</a>
          </li>
        </ul>
        <ul className="w-full h-8  hover:text-pink-200  hover:border-b-2 hover:border-b-pink-200  text-center p-2">
          <li className="w-full h-full flex justify-center items-center">
            <a href="#portafolio">PORTAFOLIO</a>
          </li>
        </ul>
        <ul className="w-full h-8  hover:text-pink-200  hover:border-b-2 hover:border-b-pink-200  text-center p-2">
          <li className="w-full h-full flex justify-center items-center">
            <a href="#contactame">CONTÁCTAME</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export { Nav }