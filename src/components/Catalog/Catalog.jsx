import { products } from '../../assets/data'
import { CatalogCard } from "./CatalogCard/CatalogCard"
import style from "./Catalog.module.css"

export function Catalog() {
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