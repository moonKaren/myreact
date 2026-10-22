import { CatalogCard } from "./CatalogCard/CatalogCard"
import style from "./Catalog.module.css"

export function Catalog() {
    return (
        <div className="container">
            <div className={style.catalog}>
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
            </div>
        </div>
    )
}