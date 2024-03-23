import React from 'react';
import { Link } from "react-router-dom"

const Item = ({ product }) => {
    return (
        <Link to={`/product/${product.id}`}>
            <div className="group relative flex h-48 items-end overflow-hidden  bg-gray-100 shadow-lg">
                <img alt={`Imagen de ${product.name}`} className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" src={`../img/${product.img}`} />
                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>
            </div>
        </Link>
    )
}

export default Item;