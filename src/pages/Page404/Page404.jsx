import s from './Page404.module.css';

export function Page404() {
    return (
        <>
            <h1 className={s.title}>404</h1>
            <h2 className={s.subtitle}>Страница не найдена</h2>
        </>
    )
}