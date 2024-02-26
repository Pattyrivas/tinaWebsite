const Footer = () => {
  return (
    <footer className="bg-pink-100 w- full h-20 flex justify-between items-center p-10 m-0">
      <div className="flex flex-col items-start">
        <p className="ubuntu-bold-italic text-pink-500 text-4xl">Valen Creative</p>
        <a className="ubuntu-light text-pink-500">valencreative@gmail.com</a>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <p className="ubuntu-medium">Redes Sociales</p>
        <ul className="flex gap-10 mt-2">
          <li className="w-10">
            <a href="" >
              <img
                src="https://cdn.icon-icons.com/icons2/3398/PNG/512/tiktok_logo_icon_214624.png"
                alt="TikTok"
                className="w-full"
              />
            </a>
          </li>
          <li className="w-10">
            <a href="">
              <img src="https://cdn-icons-png.flaticon.com/512/87/87390.png" alt="Instagram" />
            </a>
          </li>
          <li className="w-10">
            <a href="">
              <img src="https://cdn.icon-icons.com/icons2/2367/PNG/512/facebook_logo_icon_143600.png" alt="Facebook" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export { Footer }