
import { Catalog } from "../../components/Catalog/Catalog"
import { Categories } from "../../components/Categories/Categories"
import style from "./CatalogPage.module.css"
import search from '../../assets/search.svg'

export function CatalogPage() {
    return (
        <div className="container">
            <div className={style.catalogPage}>
                <div className={style.filtr}>
                    <div className={style.search}>
                        <img src={search} alt="" />
                        <input
                            type="text"
                            placeholder="Поиск"
                        />
                    </div>

                    <Categories/>

                    <select defaultValue="">
                        <option value="">По цене, руб.</option>
                        <option value="500">до 500 руб.</option>
                        <option value="500-1000">500 - 1 000 руб.</option>
                        <option value="1000">от 1 000 руб.</option>
                    </select>

                    <button>Сбросить фильтры</button>
                </div>

                <Catalog />
            </div>
        </div>
    )
}
