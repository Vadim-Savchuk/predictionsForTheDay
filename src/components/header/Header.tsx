import { FC, useEffect, useState } from 'react';

import style from './Header.module.scss';

import moonLight from '../../img/moonLight.png';
import moonDark from '../../img/moonDark.png';

const Header: FC = () => {
    const [thema, setThema] = useState(window.localStorage.getItem('thema') || 'light');

    const toggleThema = () => {
        const updatedThema = thema === 'light' ? 'dark' : 'light';
        setThema(updatedThema);

        window.localStorage.setItem('thema', updatedThema);
    }

    useEffect(() => {
        document.body.setAttribute('data-thema', thema)
    }, [thema])

    return (
        <header className={style.header}>
            <h2 className={style.logo}>Передбачення UA</h2>

            <div className={style.offer}>
                <article className={style.info}>
                    <div>&#8520;</div>
                    <p className={style.text}>Дякуємо вам за використання нашого сайту і довіру, яку ви нам виявляєте. Ми дуже вдячні за вашу підтримку та інтерес до нашої платформи. Наша команда намагається надати вам якісні передбачення та цінні вказівки для вашого повсякденного життя. Ми цінуємо ваші відгуки та пропозиції щодо поліпшення нашого сервісу. Будь ласка, не соромтеся звертатися до нас з будь-якими питаннями або коментарями. Дякуємо ще раз і бажаємо вам яскравого та насиченого життя!</p>
                </article>

                <div className={style.thema} onClick={toggleThema}>
                    {<img src={thema === 'dark' ? moonDark : moonLight} alt='Moon' />}
                </div>
            </div>
        </header>
    );
}

export default Header;
