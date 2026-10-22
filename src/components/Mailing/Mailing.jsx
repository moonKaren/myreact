
import styles from './Mailing.module.css'
import mailing_img1 from '../../assets/mailing_img1.svg'
import mailing_img2 from '../../assets/mailing_img2.svg'

export function Mailing() {
    return (
        <div className="container">
            <div className={styles.mailing}>
                <div className={styles.img1}>
                    <img src={mailing_img1} alt="" />
                </div>

                <div className={styles.mailing_text}>
                    <p>КЛУБ ЦЕНИТЕЛЕЙ ЧАЯ И КОФЕ</p>

                    <h1>Пусть вкусные новости приходят к вам</h1>

                    <h2>
                        Новинки, любимые вкусы и специальные предложения —
                        прямо на вашу почту
                    </h2>

                    <input
                        type="email"
                        placeholder="Введите email"
                    />

                    <input
                        type="submit"
                        value="Подписаться на рассылку"
                    />
                </div>

                <div className={styles.img2}>
                    <img src={mailing_img2} alt="" />
                </div>

            </div>
        </div>
    )
}
