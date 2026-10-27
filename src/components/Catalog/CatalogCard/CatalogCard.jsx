
import styles from './CatalogCard.module.css'
import { Link } from 'react-router'
import { PATH } from '../../../rouring/Routing'

export function CatalogCard({ product }) {
    return (
        <div className={styles.catalogCard}>
            <img src={product.image} alt={product.title} />

            <h1>{product.title}</h1>

            <p>
                {product.description}
            </p>

            <h2>{product.price} руб.</h2>

            <Link to={`/item/${product.id}`}>Подробнее</Link>
        </div>
    )
}
