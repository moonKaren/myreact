import { categories } from "../../assets/data";
import style from './Categories.module.css';

export function Categories() {
    return (
        <div className={style.categories}>
            <div className={style.checkbox}>
                <input type="checkbox" defaultChecked />
                <p>Все</p>
            </div>

            {categories.map(category => (
                <div key={category.id} className={style.checkbox}>
                    <input type="checkbox" />
                    <p>{category.title}</p>
                </div>
            ))}
        </div>
    );
}