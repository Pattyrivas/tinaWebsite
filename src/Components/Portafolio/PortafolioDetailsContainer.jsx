import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "./ItemDetail"

export const PortafolioDetailsContainer = () => {
    const [item, setItem] = useState([])
    const { pid } = useParams()

    useEffect(() => {
        fetch('../data/marcas.json')
            .then(response => response.json())
            .then(productos => {
                const prod = productos.find(producto => producto.id == pid)
                if (prod)
                    setItem(prod)
            })
    }, [])
    return (
        <div className="fixed  top-0 left-0 w-full h-full flex justify-center items-center bg-white">
            <ItemDetail item={item} />
        </div>
    )
}