import React from 'react';
import { Link } from "react-router-dom"

const Item = ({ product }) => {
    return (
        <Link to={`/product/${product.id}`}>
            <section id="portafolio" className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img alt={`Imagen de ${product.name}`} className="absolute inset-0 w-full h-full object-cover object-center" src={`../img/${product.img}`} />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h1 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">{product.name}</h1>
                                    <p className="leading-relaxed truncate ...">{product.description}...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </Link>
    )
}

export default Item;