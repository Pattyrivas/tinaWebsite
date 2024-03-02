import { useState } from 'react'
import { Link } from "react-router-dom"

const Nav = () => {
  const btnLink = 'text-black no-underline hover:underline cursor-pointer mr-4'
  //estado para hacer el navbar dinamico
  const [scrollColor, setScrollColor] = useState('bg-none')
  //escuchar el evento de escroll para cambiar el estado
  window.addEventListener("scroll", (event) => {
    if (window.scrollY > 0) {
      setScrollColor('border-b border-pink-200')
    } else {
      setScrollColor('shadow-none')
    }
  })

  return (
    <nav className={`${scrollColor}  bg-pink-100 flex items-center justify-between gap-20 pl-20 pr-20 w-full  h-10  z-30 fixed `}>
      <div>
        <img src="https://img.freepik.com/vector-premium/rosa-logo-flor-vector-icono-ilustracion_662448-599.jpg" alt="logo" width={"30px"} className="rounded-full" />
      </div>
      <div className={`flex justify-center items-center gap-10 ubuntu-bold text-pink-500  `}>
        <Link to={'/'} className={btnLink}>Inicio</Link>
        <Link to={'/nosotros'} className={btnLink}>Sobre Mi</Link>
        <Link to={'/category/portafolio'} className={btnLink}>Portafolio</Link>
        <Link to={'/contactame'} className={btnLink}>Contactame</Link>
      </div>
    </nav>
  )
}

export { Nav }