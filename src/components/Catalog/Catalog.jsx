import { CatalogCard } from "./CatalogCard/CatalogCard"
import style from "./Catalog.module.css"
import { useState } from 'react'
import { useEffect } from 'react'

export function Catalog() {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        (async function load() {
            try {
                const res = await fetch('http://localhost:3000/products')
                if (!res.ok) {
                    throw new Error(`ОШИБКА ${res.status}: ${res.statusText}`)
                }
                const data = await res.json()
                setProducts(data)
            } catch (error) {
                setError(error.message)
            }
        })()
    }, [])

    if (error) {
        return <div className="error">Не удалось загрузить товары: {error}</div>
    }
    if (products.length === 0) {
        return <div className="error">Товары не найдены</div>
    }

    return (
        <div className="container">
            <div className={style.catalog}>
                {
                    products.map((product) => <CatalogCard key={product.id} product={product} />)
                }
            </div>
        </div>
    )
}