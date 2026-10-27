
import style from "./ItemPage.module.css"
import { useParams } from 'react-router';
import { categories, products } from '../../assets/data';
import { PATH } from "../../rouring/Routing";
import { Link } from 'react-router';

export function ItemPage() {
    const { id } = useParams()
    const product = products.find(product => product.id == id)

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
