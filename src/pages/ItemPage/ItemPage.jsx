import style from "./ItemPage.module.css"
import { useParams } from 'react-router';
import { PATH } from "../../rouring/Routing";
import { Link } from 'react-router';
import { useState } from "react";
import { useEffect } from "react";

export function ItemPage() {
    const [product, setProduct] = useState({})
    const [error, setError] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        (async function load() {
            try {
                const res = await fetch('http://localhost:3000/products/'+id)
                if (!res.ok) {
                    throw new Error(`ОШИБКА ${res.status}: ${res.statusText}`)
                }
                const data = await res.json()
                setProduct(data)
            } catch (error) {
                setError(error.message)
            }
        })()
    }, [id])

    if (error) {
        return <div className="error">Не удалось загрузить товар: {error}</div>
    }
    if (product.length === 0) {
        return <div className="error">Товар не найден</div>
    }
    
    return (
        <div className="container">
            <div className={style.item}>
                <div className={style.item_img}>
                    <img src={product.image} alt={product.title} />
                </div>

                <div className={style.item_text}>
                    <h1>{product.title}</h1>

                    <p>
                        {product.description}
                    </p>

                    <h2>{product.price} ₽</h2>

                    <Link to={PATH.card}>В корзину</Link>
                </div>
            </div>
        </div>
    )
}
