import { useState } from "react";
import style from './Categories.module.css';
import { useEffect } from "react";

export function Categories() {
    const [categories, setCategories] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        (async function load() {
            try {
                const res = await fetch('http://localhost:3000/categories')
                if (!res.ok) {
                    throw new Error(`ОШИБКА ${res.status}: ${res.statusText}`)
                }
                const data = await res.json()
                setCategories(data)
            } catch (error) {
                setError(error.message)
            }
        })()
    }, [])

    if (error) {
        return <div className="error">Не удалось загрузить категории: {error}</div>
    }
    if (categories.length === 0) {
        return <div className="error">Категории отсутсвуют</div>
    }

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