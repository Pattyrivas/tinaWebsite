
const Nav = () => {
  return (
    <nav className="flex items-center justify-center gap-20  w-full  h-20 ">
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/512px-LEGO_logo.svg.png" alt="logo" width={"50px"} />
      </div>
      <div className="flex justify-center items-center gap-10 ubuntu-bold">
        <ul className="w-full h-8 rounded-full  hover:text-pink-500 hover:border hover:shadow-md hover:shadow-pink-500 text-center p-2">
          <li className="w-full h-full flex justify-center items-center">
            <a href="">HOME</a>
          </li>
        </ul>
        <ul className="w-full h-8 rounded-full  hover:text-pink-500 hover:border hover:shadow-md hover:shadow-pink-500 text-center p-2">
          <li className="w-full h-full flex justify-center items-center">
            <a href="">NOSOTROS</a>
          </li>
        </ul>
        <ul className="w-full h-8 rounded-full  hover:text-pink-500 hover:border hover:shadow-md hover:shadow-pink-500 text-center p-2">
          <li className="w-full h-full flex justify-center items-center">
            <a href="">BENEFICIOS</a>
          </li>
        </ul>
        <ul className="w-full h-8 rounded-full  hover:text-pink-500 hover:border hover:shadow-md hover:shadow-pink-500 text-center p-2">
          <li className="w-full h-full flex justify-center items-center">
            <a href="">PORTAFOLIO</a>
          </li>
        </ul>
        <ul className="w-full h-8 rounded-full  hover:text-pink-500 hover:border hover:shadow-md hover:shadow-pink-500 text-center p-2">
          <li className="w-full h-full flex justify-center items-center">
            <a href="">CONTACTAME</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export { Nav }