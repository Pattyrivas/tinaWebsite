import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { ItemList } from "./ItemList"

export const PortafolioListContainer = () => {
    const [products, setProducts] = useState([])
    const { cid } = useParams()

    useEffect(() => {
        fetch('../data/marcas.json')
            .then(response => response.json())
            .then(prods => {
                if (cid) {
                    const productosFiltrados = prods.filter(prod => prod.category == cid)
                    setProducts(productosFiltrados)
                } else {
                    setProducts(prods)
                }

            })
            .catch((error) => console.log(error))
    }, [cid])


    return (
        <div className="mx-40 mb-40 xl:mb-80 ">
            <div className=" pt-20 sm:pt-24 lg:pt-28">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className=" grid justify-items-center">
                        <h2 className="text-2xl lg:text-3xl font-bold dark:text-white">VALEN CREATIVE</h2>
                    </div>
                </div>
            </div>
            <div className=" pt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 sm:gap-4 md:gap-6">
                <ItemList products={products} />
            </div>
        </div>

    )
}




