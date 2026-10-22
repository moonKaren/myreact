
import styles from './Banner.module.css'
import banner from '../../assets/banner.svg'
import { Link } from 'react-router'
import { PATH } from '../../rouring/Routing'
export function Banner() {
    return (
        <main>
            <div className={styles.container}>
                <div className={styles.banner}>
                    <div className={styles.banner_img}>
                        <img src={banner} alt="" />
                    </div>

                    <div className={styles.banner_text}>
                        <h1>Завари своё настроение!</h1>
                        <p>
                            Выбирайте любимые вкусы для бодрого утра,
                            уютных вечеров и приятных пауз в течение дня
                        </p>
                        <Link to={PATH.Catalog}>Перейти в каталог</Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
