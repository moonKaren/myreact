
import styles from './Footer.module.css'
import logo from '../../assets/logo.svg'
import tg from '../../assets/tg.svg'
import vk from '../../assets/vk.svg'
import { Link } from 'react-router'
import { PATH } from '../../rouring/Routing'

export function Footer() {
    return (
        <footer>
            <div className="container">
                <div className={styles.foot}>
                    <div className={styles.foot_logo}>
                        <img src={logo} alt="Логотип" />
                        <p>Завари своё настроение!</p>
                    </div>

                    <div className={styles.foot_nav}>
                        <nav>
                            <Link to={PATH.Home}>Главная</Link>
                            <Link to={PATH.Catalog}>Каталог</Link>
                            <Link to="/card">Корзина</Link>
                        </nav>
                    </div>

                    <div className={styles.foot_contacts}>
                        <div className={styles.foot_socials}>
                            <a href="#">
                                <img src={tg} alt="Telegram" />
                            </a>
                            <a href="#">
                                <img src={vk} alt="ВКонтакте" />
                            </a>
                        </div>

                        <p>© Чуйкова Ксения Александровна 2026</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
