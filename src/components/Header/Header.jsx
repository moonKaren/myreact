import { PATH } from '../../rouring/Routing'
import styles from './Header.module.css'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router'


export function Header() {
    return (
        <header>
            <div className="container">
                <div className={styles.head}>
                    <nav>
                        <Link to={PATH.Home}>Главная</Link>
                        <Link to={PATH.Catalog}>Каталог</Link>
                    </nav>

                    <img src={logo} alt="Логотип" />

                    <div className={styles.head_btn}>
                        <a href="/card">Корзина</a>
                    </div>

                </div>
            </div>
        </header>
    )
}
