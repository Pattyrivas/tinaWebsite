const Intrudiction = () => {
  return (

    <div id="introduction" className="w-full h-auto relative top-0  ">
      <div className="w-full h-screen absolute z-10 bg-gradient-to-r from-black to-transparent"></div>
      <img
        src="https://cdn.sanity.io/images/xmpcmhrn/production/f363771ad3c072ec71f1ea5e8f3868d18de231a6-1200x800.jpg"
        alt="valentina"
        className="w-full h-screen top-0 relative opacity-100"
      />
      <p className="absolute top-52 w-1/3 right-0 left-52 text-white ubuntu-bold-italic text-2xl z-20" >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores porro exercitationem natus necessitatibus maxime! Eveniet architecto unde voluptate voluptas laboriosam error voluptatem eaque
      </p>
      <a href="#contactame">
        <button className=" absolute top-96 mt-14 right-0 left-60 w-80 h-14 bg-pink-500 hover:bg-pink-300 text-white ubuntu-bold-italic rounded-lg z-20">
          CONTÁCTAME
        </button>

      </a>
    </div>

  )
}
export { Intrudiction }