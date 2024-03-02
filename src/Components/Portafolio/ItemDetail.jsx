import { Link } from "react-router-dom"

export const ItemDetail = ({ item }) => {
    return (
        <section className="text-gray-600 body-font  bg-pink-100">
            <Link to={'/'}>
                <button className="absolute top-12 right-16 text-gray-700 hover:text-gray-900">Cerrar</button>
            </Link>
            <div className=" mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt={`Imagen de ${item.name}`} src={`../img/${item.img}`} />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{item.name}</h1>
                    <p className="mb-8 leading-relaxed">{item.description}</p>
                    <div className="flex justify-center">
                        <Link to={'/contactame'}>
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Trabaja conmigo</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}